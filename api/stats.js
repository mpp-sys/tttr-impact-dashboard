import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Tier 2: Confirmed metrics (no runtime API cost) ──────────────────────────
// These were computed by paginating all monday.com items manually.
// Update data/stats.json quarterly — never recompute at runtime.
function loadConfirmedStats() {
  try {
    const raw = readFileSync(join(__dirname, '../data/stats.json'), 'utf8');
    return JSON.parse(raw);
  } catch {
    // Fallback if file missing
    return {
      totalMatches: 1407,
      activeProjects: 115,
      techValueUSD: 21200000,
      countriesReached: 154,
      livesImpacted: 8000000,
      newCompaniesThisMonth: 56,
      scalingProgramProjects: 21,
      scalingProgramCountries: 20,
      ai4cOrgs: 122
    };
  }
}

export default async function handler(req, res) {
  // Cache for 1 hour on Vercel edge — monday.com is only queried once per hour
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

  const MONDAY_API_KEY = process.env.MONDAY_API_KEY;
  if (!MONDAY_API_KEY) {
    return res.status(500).json({ error: 'MONDAY_API_KEY not configured' });
  }

  // ─── Tier 1: Live metrics — single lightweight query, no pagination ───────
  // Only fetches items_count per board — monday.com returns this instantly.
  const query = `{
    ngos:            boards(ids: [1393564287]) { items_count }
    techCompanies:   boards(ids: [1393563282]) { items_count }
    scalingProgram:  boards(ids: [5088415028]) { items_count }
    ai4cClimate:     boards(ids: [1597395187]) { items_count }
    ai4cDisaster:    boards(ids: [1527927882]) { items_count }
    ai4cSubmissions: boards(ids: [1978810620]) { items_count }
  }`;

  try {
    const response = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': MONDAY_API_KEY,
        'API-Version': '2024-01'
      },
      body: JSON.stringify({ query })
    });

    const data = await response.json();
    const d = data.data;
    const confirmed = loadConfirmedStats();

    const stats = {
      // Tier 1 — live, updated every page load (cached 1h)
      nonprofits:            d.ngos[0]?.items_count            || 0,
      techCompanies:         d.techCompanies[0]?.items_count   || 0,
      scalingProgram:        d.scalingProgram[0]?.items_count  || 0,
      // ai4cParticipants is Tier 2 — real count requires filtering full NGOs board (3,311 items)
      // Confirmed by filtering NGOs.ai4c_cohort is_not_empty. Update in data/stats.json quarterly.
      ai4cParticipants:      confirmed.ai4cOrgs,
      ai4cSubmissions:       d.ai4cSubmissions[0]?.items_count || 0,

      // Tier 2 — confirmed, read from data/stats.json (zero API cost)
      collaborations:        confirmed.totalMatches,
      activeProjects:        confirmed.activeProjects,
      techValueUSD:          confirmed.techValueUSD,
      countriesReached:      confirmed.countriesReached,
      livesImpacted:         confirmed.livesImpacted,
      newCompaniesThisMonth:   confirmed.newCompaniesThisMonth,
      scalingProgramProjects:  confirmed.scalingProgramProjects,
      scalingProgramCountries: confirmed.scalingProgramCountries,

      lastUpdated: new Date().toISOString()
    };

    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

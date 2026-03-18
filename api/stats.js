export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

  const MONDAY_API_KEY = process.env.MONDAY_API_KEY;
  if (!MONDAY_API_KEY) {
    return res.status(500).json({ error: 'MONDAY_API_KEY not configured' });
  }

  const query = `{
    ngos: boards(ids: [1393564287]) { items_count }
    techCompanies: boards(ids: [1393563282]) { items_count }
    projects: boards(ids: [1393566085]) { items_count }
    techOpportunities: boards(ids: [1393553068]) { items_count }
    scalingProgram: boards(ids: [5088415028]) { items_count }
    ai4cClimate: boards(ids: [1597395187]) { items_count }
    ai4cDisaster: boards(ids: [1527927882]) { items_count }
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

    const ai4cTotal = (d.ai4cClimate[0]?.items_count || 0) + (d.ai4cDisaster[0]?.items_count || 0);

    const stats = {
      nonprofits:       d.ngos[0]?.items_count || 0,
      techCompanies:    d.techCompanies[0]?.items_count || 0,
      projects:         d.projects[0]?.items_count || 0,
      collaborations:   d.techOpportunities[0]?.items_count || 0,
      scalingProgram:   d.scalingProgram[0]?.items_count || 0,
      ai4cParticipants: ai4cTotal,
      ai4cSubmissions:  d.ai4cSubmissions[0]?.items_count || 0,
      techValueUSD:     24700000,
      livesImpacted:    4200000,
      countriesReached: 89,
      lastUpdated:      new Date().toISOString()
    };

    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

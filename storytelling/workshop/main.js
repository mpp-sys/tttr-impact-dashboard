let current = 0;
const total = 5;

const steps = [
  // ── Step 1 ──────────────────────────────────────────────────
  {
    eyebrow: 'Opening · 2 min',
    eyebrowColor: 'coral',
    time: '2 min',
    title: 'Why this matters',
    renderHTML: () => `
      <p class="body-text">Say the opening line. Pause 3 seconds. Let it land. Then build the bridge.</p>
      <div class="quote quote-coral">"In the age of AI, building is no longer the advantage. Making people care is."</div>
      <div class="quote quote-coral">"You didn't just build projects. You built something that deserves a future. Storytelling is the only bridge between what you created — and whether anyone cares."</div>
      <div class="quote quote-coral">"This is how mission-driven collaboration scales. When ideas are clearly understood, and felt."</div>
      <p class="facilitator-note">★ Keep eye contact. Don't rush past the first silence.</p>
    `
  },

  // ── Step 2 ──────────────────────────────────────────────────
  {
    eyebrow: 'Frameworks · 5 min',
    eyebrowColor: 'teal',
    time: '5 min',
    title: 'Choose your path',
    renderHTML: () => `
      <p class="muted-text">Two different jobs. Two different tools. The choice tells you something about your pitch.</p>
      <div class="fw-grid">
        <div class="fw-card">
          <div class="fw-card-header purple-bg">For belief</div>
          <div class="fw-card-body">
            <div class="fw-card-title">Pixar Story Arc</div>
            <span class="fw-tag purple">Makes people care</span>
            <div class="fw-audience">Mission allies, teammates, community</div>
            <ul class="fw-steps">
              <li>Once upon a time… <em>context</em></li>
              <li>Every day… <em>status quo</em></li>
              <li>Until one day… <em>problem</em></li>
              <li>Because of that… <em>solution</em></li>
              <li>Until finally… <em>impact</em></li>
            </ul>
          </div>
        </div>
        <div class="fw-card">
          <div class="fw-card-header teal-bg">For action</div>
          <div class="fw-card-body">
            <div class="fw-card-title">PASO</div>
            <span class="fw-tag teal">Makes people move</span>
            <div class="fw-audience">Investors, YC pitches, decision-makers</div>
            <ul class="fw-steps">
              <li>Problem — <em>what's broken</em></li>
              <li><strong style="color:var(--coral-dark);background:var(--coral-light);padding:0 3px;border-radius:3px">Agitate</strong> — <em>make the status quo feel unbearable</em></li>
              <li>Solution — <em>what you built</em></li>
              <li>Outcome — <em>what changed</em></li>
            </ul>
          </div>
        </div>
      </div>
      <p style="text-align:center;font-style:italic;font-family:'Georgia',serif;font-size:11px;color:var(--muted);margin:0.5rem 0 0.75rem">"PASO makes people act. Pixar makes people care. Know which one you're doing."</p>
      <p class="facilitator-note">★ Ask: "Which feels closer to your project?" — quick show of hands. Move on.</p>
    `
  },

  // ── Step 3 ──────────────────────────────────────────────────
  {
    eyebrow: 'Rounds 1 & 2 · 8 min',
    eyebrowColor: 'amber',
    time: '8 min',
    title: 'Two live pitch rounds',
    renderHTML: () => `
      <div class="round-block">
        <div class="round-label">Round 1 — raw pitch</div>
        <ul class="round-steps">
          <li>Find someone not from your team</li>
          <li>Decide who speaks first</li>
          <li>60 seconds max — no interruptions</li>
          <li>Listener: just receive. No feedback yet.</li>
        </ul>
        <span class="constraint-pill coral">"If it's not clear in 60 seconds, it's not clear yet."</span>
      </div>
      <div class="round-block">
        <div class="round-label">Round 2 — improved pitch</div>
        <ul class="round-steps">
          <li>Switch roles: listener becomes speaker</li>
          <li>Apply: framework + Give-a-Damn Triangle + delivery</li>
          <li>Cut one thing you're least sure belongs</li>
          <li>60 seconds again</li>
        </ul>
        <span class="constraint-pill amber">"Don't add more. Make it clearer."</span>
      </div>
      <p class="facilitator-note">★ Between rounds: ask one person publicly — "What was the clearest thing you heard?"</p>
    `
  },

  // ── Step 4 ──────────────────────────────────────────────────
  {
    eyebrow: 'The triangle · 6 min',
    eyebrowColor: 'purple',
    time: '6 min',
    title: 'The Give-a-Damn Triangle',
    renderHTML: () => `
      <p class="muted-text">Ancient Greek rhetoric, upgraded for mission-driven builders. Most pitches fail because they over-index on one side.</p>
      <div class="tri-wrap">
        <svg class="tri-svg" viewBox="0 0 110 105" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
          <!-- Triangle -->
          <polygon points="55,8 103,96 7,96" stroke="#9ca3af" stroke-width="1.2" fill="none"/>
          <!-- Dashed center line -->
          <line x1="55" y1="8" x2="55" y2="96" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,3"/>
          <!-- Vertex dots -->
          <circle cx="55" cy="8"  r="5" fill="#C04828"/>
          <circle cx="103" cy="96" r="5" fill="#0F6E56"/>
          <circle cx="7"  cy="96" r="5" fill="#534AB7"/>
          <!-- Labels -->
          <text x="55" y="-2" text-anchor="middle" font-size="9" fill="#712B13" font-family="system-ui,sans-serif" font-weight="600">Pathos</text>
          <text x="110" y="108" text-anchor="middle" font-size="9" fill="#085041" font-family="system-ui,sans-serif" font-weight="600">Logos</text>
          <text x="0"  y="108" text-anchor="middle" font-size="9" fill="#3C3489" font-family="system-ui,sans-serif" font-weight="600">Ethos</text>
        </svg>
        <div class="vertex-cards">
          <div class="vertex-card">
            <span class="vertex-dot coral"></span>
            <div><strong>Pathos — emotion</strong> <em>/ Why should I care?</em></div>
          </div>
          <div class="vertex-card">
            <span class="vertex-dot teal"></span>
            <div><strong>Logos — logic</strong> <em>/ Does this make sense?</em></div>
          </div>
          <div class="vertex-card">
            <span class="vertex-dot purple"></span>
            <div><strong>Ethos — credibility</strong> <em>/ Why you? Why now?</em></div>
          </div>
        </div>
      </div>
      <div class="failure-modes">
        <p><strong>Too logical →</strong> boring</p>
        <p><strong>Too emotional →</strong> vague</p>
        <p><strong>Too personal →</strong> unclear</p>
      </div>
      <div class="quote quote-purple">"Authenticity is not about being dramatic. It's about being precise about why this matters to you."</div>
      <p class="facilitator-note">★ Ask: "Where does your pitch sit right now?" — 30 seconds of silent reflection.</p>
    `
  },

  // ── Step 5 ──────────────────────────────────────────────────
  {
    eyebrow: 'Delivery + close · 5 min',
    eyebrowColor: 'coral',
    time: '5 min',
    title: 'Delivery design & close',
    renderHTML: () => `
      <div class="rule-card">
        <div class="rule-num purple">01</div>
        <div class="rule-content"><strong>Proportion</strong>Don't spend 80% on features and 10% on impact. Flip it.</div>
      </div>
      <div class="rule-card">
        <div class="rule-num teal">02</div>
        <div class="rule-content"><strong>Repetition</strong>Say your core idea twice — in different words. Repetition is emphasis.</div>
      </div>
      <div class="rule-card">
        <div class="rule-num amber">03</div>
        <div class="rule-content">
          <strong>Pause</strong>Silence makes people lean in. Demo it live:
          <div class="pause-demo">
            <div class="pause-demo-header">Say this out loud</div>
            <div class="pause-demo-line">"The NGOs we work with don't just need a developer."</div>
            <div class="pause-bar">
              <span class="pause-beat" style="opacity:0.4"></span>
              <span class="pause-beat" style="opacity:0.65"></span>
              <span class="pause-beat" style="opacity:0.9"></span>
              hold — 3 full seconds
            </div>
            <div class="pause-demo-line">"They need to be at the table where AI decisions are made — not on the receiving end of them."</div>
          </div>
        </div>
      </div>
      <div class="quote quote-coral" style="margin-top:1rem">"You don't need a perfect pitch. You need a clear, human, and intentional one. What you built here deserves to go beyond this room."</div>
      <div class="quote quote-coral" style="font-size:15px;font-weight:600">"Building is no longer the advantage. Making people care is."</div>
    `
  }
];

// ── DOM refs ──────────────────────────────────────────────────
const stepPanel   = document.getElementById('step-panel');
const stepCounter = document.getElementById('step-counter');
const timeBadge   = document.getElementById('time-badge');
const dotsEl      = document.getElementById('dots');
const prevBtn     = document.getElementById('prev-btn');
const nextBtn     = document.getElementById('next-btn');

// ── Build dots ────────────────────────────────────────────────
for (let i = 0; i < total; i++) {
  const dot = document.createElement('button');
  dot.className = 'dot';
  dot.setAttribute('aria-label', `Go to step ${i + 1}`);
  dot.addEventListener('click', () => { current = i; render(); });
  dotsEl.appendChild(dot);
}

// ── Render ────────────────────────────────────────────────────
function render() {
  const step = steps[current];

  // Progress segments
  document.querySelectorAll('.seg').forEach((seg, i) => {
    seg.classList.remove('filled', 'active');
    if (i < current)      seg.classList.add('filled');
    else if (i === current) seg.classList.add('active');
  });

  // Meta
  stepCounter.textContent = `Step ${current + 1} of ${total}`;
  timeBadge.textContent   = step.time;

  // Step HTML
  stepPanel.innerHTML = `
    <div class="eyebrow ${step.eyebrowColor}">${step.eyebrow}</div>
    <h1 class="step-title">${step.title}</h1>
    ${step.renderHTML()}
  `;

  // Dots
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });

  // Buttons
  prevBtn.disabled = current === 0;
  nextBtn.textContent = current === total - 1 ? 'done ✓' : 'next →';
  nextBtn.disabled    = current === total - 1;
}

// ── Events ────────────────────────────────────────────────────
prevBtn.addEventListener('click', () => { if (current > 0) { current--; render(); } });
nextBtn.addEventListener('click', () => { if (current < total - 1) { current++; render(); } });

// ── Init ──────────────────────────────────────────────────────
render();

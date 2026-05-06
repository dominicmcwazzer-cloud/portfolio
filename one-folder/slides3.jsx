// One Folder — slides 11–16

// ---------- Slide 11 — Flow 4: Stock-out alert (Mr Naidoo) ----------
const Slide11 = () => (
  <Slide bg={ofTokens.paper0}>
    <Frame>
      <TopBar left="11 · Flow 04" right="Mr Naidoo · 51 · KZN HIO" />

      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 96, alignItems: 'end' }}>
        <div>
          <Eyebrow>From Excel exports to predictive alerts</Eyebrow>
          <Title mt={20} size={84}>The MEC sees what's coming.</Title>
        </div>
        <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: TYPE_SCALE.bodyLg, color: ofTokens.ink700, lineHeight: 1.3, maxWidth: 640, textAlign: 'right', alignSelf: 'end', paddingBottom: 8 }}>
          The Stock Visibility System already runs in 3,126 clinics. One Folder turns its data into action — not a quarterly PDF.
        </div>
      </div>

      {/* Three REAL admin screens at scale — drill from national → facility → stock prediction */}
      <div style={{ flex: 1, marginTop: 56, display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start' }}>
        <StepFrame label="Step 01 · National view" tone="aloe" meta="9 provinces">
          <RealDesktop Screen={typeof OfScreenAOverview === 'function' ? OfScreenAOverview : null} dark={false} scale={0.42} />
        </StepFrame>
        <StepFrame label="Step 02 · KZN drill-down" tone="aloe" meta="14 sites flagged" metaTone="crimson">
          <RealDesktop Screen={typeof OfScreenAFacility === 'function' ? OfScreenAFacility : null} dark={false} scale={0.42} />
        </StepFrame>
        <StepFrame label="Step 03 · Predictive alert" tone="sun" meta="+7 days">
          <RealDesktop Screen={typeof OfScreenAStock === 'function' ? OfScreenAStock : null} dark={false} scale={0.42} />
        </StepFrame>
      </div>

      <div style={{
        marginTop: 28, paddingTop: 20, borderTop: `1px solid ${ofTokens.paper200}`,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: ofType.mono, fontSize: TYPE_SCALE.small, color: ofTokens.ink700, letterSpacing: 0.4, textTransform: 'uppercase',
      }}>
        <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>SVS feed</span> · 3,126 clinics</span>
        <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>Forecast</span> · 7-day burn-rate</span>
        <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>Action</span> · one signed transfer</span>
      </div>
    </Frame>
  </Slide>
);

// ---------- Slide 12 — Light + Dark proof ----------
const Slide12 = () => (
  <Slide bg={ofTokens.paper0}>
    <Frame>
      <TopBar left="12 · Modes" right="Light + Dark · One token system" />

      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 96, alignItems: 'end' }}>
        <div>
          <Eyebrow>Two surfaces, one record</Eyebrow>
          <Title mt={20} size={84}>Night-shift nurses. Light-sensitive elders.</Title>
        </div>
        <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: TYPE_SCALE.bodyLg, color: ofTokens.ink700, lineHeight: 1.3, maxWidth: 640, textAlign: 'right', alignSelf: 'end', paddingBottom: 8 }}>
          One token system, two surfaces. Aloe holds. Sun holds. Paper becomes forest. Ink becomes paper.
        </div>
      </div>

      <div style={{ flex: 1, marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 60 }}>
        {/* LIGHT — REAL */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
          <RealScreen Screen={typeof OfScreenPHome === 'function' ? OfScreenPHome : null} dark={false} scale={0.78} />
          <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.aloe700, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 700 }}>Light · paper0 canvas</div>
        </div>
        {/* DARK — REAL */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
          <RealScreen Screen={typeof OfScreenPHome === 'function' ? OfScreenPHome : null} dark={true} scale={0.78} />
          <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.aloe700, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 700 }}>Dark · forest900 canvas</div>
        </div>
      </div>

      {/* token resolution strip */}
      <div style={{
        marginTop: 28, padding: '14px 20px',
        background: ofTokens.paper100, border: `1px solid ${ofTokens.paper200}`,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', columnGap: 24, alignItems: 'center',
      }}>
        {[
          { l: 'canvas', a: 'paper0', b: 'forest900' },
          { l: 'text', a: 'ink900', b: 'paper0' },
          { l: 'primary', a: 'aloe500', b: 'aloe500', hold: true },
          { l: 'accent', a: 'sun500', b: 'sun500', hold: true },
        ].map(t => (
          <div key={t.l} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontFamily: ofType.mono, fontSize: 11, color: ofTokens.ink500, letterSpacing: 1.4, textTransform: 'uppercase' }}>{t.l}</div>
            <div style={{ fontFamily: ofType.ui, fontSize: 18, fontWeight: 700, color: ofTokens.ink900 }}>
              <span>{t.a}</span>
              <span style={{ color: ofTokens.ink500, margin: '0 8px', fontWeight: 400 }}>{t.hold ? '═' : '→'}</span>
              <span>{t.b}</span>
              {t.hold && <span style={{ marginLeft: 10, fontFamily: ofType.mono, fontSize: 11, color: ofTokens.aloe700, fontWeight: 700, letterSpacing: 1 }}>HOLDS</span>}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  </Slide>
);

const PatientHomeMock = ({ dark }) => (
  <div style={{
    width: 380, height: 700,
    background: dark ? ofTokens.forest900 : ofTokens.paper0,
    color: dark ? ofTokens.paper0 : ofTokens.ink900,
    borderRadius: 44,
    border: `2px solid ${dark ? '#000' : ofTokens.ink900}`,
    boxShadow: dark ? '0 24px 60px rgba(0,0,0,0.5)' : '0 24px 60px rgba(26,20,16,0.18)',
    padding: 16, position: 'relative', overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', width: 110, height: 26, background: '#000', borderRadius: 14 }}/>

    <div style={{ marginTop: 40, padding: '0 8px', display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontFamily: ofType.mono, fontSize: 11, color: dark ? '#7E7062' : ofTokens.ink500, letterSpacing: 1.4, textTransform: 'uppercase' }}>One Folder</div>
        <div style={{ fontFamily: ofType.mono, fontSize: 11, color: dark ? '#7E7062' : ofTokens.ink500 }}>en · 中</div>
      </div>

      <div>
        <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: 18, color: dark ? '#B5A89B' : ofTokens.ink500 }}>Sanibonani,</div>
        <div style={{ fontFamily: ofType.ui, fontSize: 30, fontWeight: 800, letterSpacing: -0.5, marginTop: 4 }}>Mam' Sibongile</div>
      </div>

      {/* Hero card */}
      <div style={{
        background: dark ? ofTokens.forest500 : '#FFFFFF',
        border: `1px solid ${dark ? 'rgba(252,247,238,0.06)' : ofTokens.paper200}`,
        padding: 18, display: 'flex', flexDirection: 'column', gap: 12,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: ofType.mono, fontSize: 10, color: ofTokens.aloe500, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 700 }}>Script ready</div>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: ofTokens.aloe500 }}/>
        </div>
        <div style={{ fontFamily: ofType.ui, fontSize: 20, fontWeight: 700, lineHeight: 1.15 }}>Chiawelo Pickup Point</div>
        <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: 13, color: dark ? '#B5A89B' : ofTokens.ink700 }}>
          06 May · open till 17:00 · 1.2 km
        </div>
        <div style={{ marginTop: 4, background: ofTokens.aloe500, color: ofTokens.paper0, padding: '12px 0', textAlign: 'center', fontFamily: ofType.ui, fontSize: 14, fontWeight: 700 }}>
          Show pickup code
        </div>
      </div>

      {/* Tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[
          { l: 'Next visit', v: '08 Jun', sub: 'Chiawelo CHC' },
          { l: 'BP', v: '138/86', sub: '12 Apr', accent: true },
          { l: 'Glucose', v: '7.2', sub: 'mmol/L' },
          { l: 'Carer', v: 'Karabo', sub: 'son · 19' },
        ].map(t => (
          <div key={t.l} style={{
            background: dark ? 'rgba(252,247,238,0.04)' : ofTokens.paper100,
            padding: 12, display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            <div style={{ fontFamily: ofType.mono, fontSize: 9, color: dark ? '#7E7062' : ofTokens.ink500, letterSpacing: 1.2, textTransform: 'uppercase' }}>{t.l}</div>
            <div style={{ fontFamily: ofType.ui, fontSize: 18, fontWeight: 800, letterSpacing: -0.4, color: t.accent ? ofTokens.sun500 : (dark ? ofTokens.paper0 : ofTokens.ink900) }}>{t.v}</div>
            <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: 11, color: dark ? '#B5A89B' : ofTokens.ink700 }}>{t.sub}</div>
          </div>
        ))}
      </div>
    </div>

    {/* tab bar */}
    <div style={{
      marginTop: 8,
      paddingTop: 10, paddingBottom: 6,
      borderTop: `1px solid ${dark ? 'rgba(252,247,238,0.08)' : ofTokens.paper200}`,
      display: 'flex', justifyContent: 'space-around',
      fontFamily: ofType.mono, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase',
      color: dark ? '#7E7062' : ofTokens.ink500,
    }}>
      <span style={{ color: ofTokens.aloe500, fontWeight: 700 }}>Home</span>
      <span>Folder</span>
      <span>Carers</span>
      <span>Help</span>
    </div>
  </div>
);

// ---------- Slide 13 — Constraints honored ----------
const Slide13 = () => {
  const constraints = [
    { n: '01', c: 'Offline-first',                  r: '4-hour power gap survivable. Local-first writes, queue + sync.' },
    { n: '02', c: 'Sub-R2,000 Android baseline',    r: '<2 MB per session. JS budget locked. Image SVGs over PNGs.' },
    { n: '03', c: '5 launch languages + SASL',      r: 'English, isiZulu, isiXhosa, Afrikaans, Sepedi · plus SA Sign Language video.' },
    { n: '04', c: 'Icon-first, voice-supported',    r: 'Low-literacy floor. Every action has a glyph + spoken playback.' },
    { n: '05', c: 'WhatsApp + USSD + paper QR',     r: 'Universal reach — works on the cheapest handset, or no handset at all.' },
    { n: '06', c: 'Asylum-seeker IDs accepted',     r: 'Section 22 / 24 / linkage code. Section 27 of the Constitution.' },
    { n: '07', c: 'PHC nurse is the primary user',  r: '<90s consult log. Beats paper, or it gets abandoned.' },
  ];
  return (
    <Slide bg={ofTokens.paper0}>
      <Frame>
        <TopBar left="13 · Constraints" right="Seven non-negotiables" />

        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 96, alignItems: 'end' }}>
          <div>
            <Eyebrow>What we designed against</Eyebrow>
            <Title mt={20} size={84}>The constraints, honoured.</Title>
          </div>
          <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: TYPE_SCALE.bodyLg, color: ofTokens.ink700, lineHeight: 1.3, maxWidth: 640, textAlign: 'right', alignSelf: 'end', paddingBottom: 8 }}>
            None of these is a feature. Each is a refusal — a thing the design will not get away with breaking.
          </div>
        </div>

        <div style={{ flex: 1, marginTop: 56, display: 'flex', flexDirection: 'column' }}>
          {constraints.map((c, i) => (
            <div key={c.n} style={{
              display: 'grid', gridTemplateColumns: '90px 360px 1fr',
              columnGap: 40, alignItems: 'baseline',
              padding: '24px 0',
              borderTop: `1px solid ${ofTokens.paper200}`,
              ...(i === constraints.length - 1 ? { borderBottom: `1px solid ${ofTokens.paper200}` } : {}),
            }}>
              <div style={{ fontFamily: ofType.mono, fontSize: 22, color: ofTokens.sun700, letterSpacing: 0.4, fontWeight: 700 }}>{c.n}</div>
              <div style={{ fontFamily: ofType.ui, fontSize: TYPE_SCALE.bodyLg, fontWeight: 700, color: ofTokens.aloe700, letterSpacing: -0.3 }}>{c.c}</div>
              <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: TYPE_SCALE.body, color: ofTokens.ink700, lineHeight: 1.3 }}>{c.r}</div>
            </div>
          ))}
        </div>
      </Frame>
    </Slide>
  );
};

// ---------- Slide 14 — System map (the architecture money-shot) ----------
const Slide14 = () => {
  const systems = [
    { k: 'HPRS',  blurb: 'Identity backbone',   x: 0, y: 0 },
    { k: 'NHLS',  blurb: 'Lab + results',       x: 1, y: 0 },
    { k: 'CCMDD', blurb: 'Chronic meds',        x: 2, y: 0 },
    { k: 'MomConnect', blurb: 'Maternal · WA',  x: 3, y: 0 },
    { k: 'Vula',  blurb: 'Specialist referral', x: 0, y: 1 },
    { k: 'SVS',   blurb: 'Stock visibility',    x: 1, y: 1 },
    { k: 'EVDS',  blurb: 'Vaccinations',        x: 2, y: 1 },
    { k: 'WC SPV',blurb: 'WC unified record',   x: 3, y: 1 },
  ];
  return (
    <Slide bg={ofTokens.forest900} color={ofTokens.paper0}>
      <Frame>
        <TopBar left="14 · Architecture" right="The patchwork, connected" color="#7E7062" />

        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 96, alignItems: 'end' }}>
          <div>
            <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.sun300, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 700 }}>How it actually fits</div>
            <Title mt={20} size={84} color={ofTokens.paper0}>The connective tissue.</Title>
          </div>
          <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: TYPE_SCALE.bodyLg, color: '#B5A89B', lineHeight: 1.3, maxWidth: 640, textAlign: 'right', alignSelf: 'end', paddingBottom: 8 }}>
            The folder is read-through, not write-over. Existing systems remain authoritative — One Folder reconciles, presents, acts.
          </div>
        </div>

        <div style={{ flex: 1, marginTop: 40, display: 'grid', gridTemplateRows: 'auto 1fr auto auto', rowGap: 24 }}>
          {/* Top: surfaces */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: 28 }}>
            {[
              { l: 'Patient app',   sub: '12 screens · light + dark · 12 lang' },
              { l: 'Clinician app', sub: '9 screens · nurse · doctor · CHW' },
              { l: 'Admin CMS',     sub: '6 screens · provincial + national' },
            ].map(s => (
              <div key={s.l} style={{
                background: 'rgba(252,247,238,0.06)',
                border: '1px solid rgba(252,247,238,0.1)',
                padding: '18px 22px',
              }}>
                <div style={{ fontFamily: ofType.ui, fontSize: 28, fontWeight: 800, color: ofTokens.paper0, letterSpacing: -0.5 }}>{s.l}</div>
                <div style={{ fontFamily: ofType.mono, fontSize: 12, color: '#B5A89B', letterSpacing: 0.4, marginTop: 6 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Middle: One Folder bus */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
            {/* connecting lines (decorative) */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} preserveAspectRatio="none">
              {[15,38,62,85].map((x,i) => (
                <line key={'t'+i} x1={`${x}%`} y1="0%" x2={`${x}%`} y2="42%" stroke={ofTokens.aloe500} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 4"/>
              ))}
              {[15,38,62,85].map((x,i) => (
                <line key={'b'+i} x1={`${x}%`} y1="58%" x2={`${x}%`} y2="100%" stroke={ofTokens.sun500} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 4"/>
              ))}
            </svg>

            <div style={{
              padding: '32px 36px',
              background: ofAloeSunGradient,
              color: ofTokens.paper0,
              display: 'grid', gridTemplateColumns: 'auto 1fr auto', columnGap: 36, alignItems: 'center',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}>
              <div style={{ fontFamily: ofType.ui, fontSize: 60, fontWeight: 800, letterSpacing: -2, lineHeight: 1 }}>One Folder</div>
              <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: 22, lineHeight: 1.25 }}>
                Identity reconciler · Records timeline · Consent ledger · Notification + nudge bus · Reporting plane
              </div>
              <div style={{ fontFamily: ofType.mono, fontSize: 12, color: ofTokens.paper0, letterSpacing: 1.4, textTransform: 'uppercase', textAlign: 'right', opacity: 0.85 }}>
                Read-through<br/>POPIA-locked<br/>Audit trail
              </div>
            </div>
          </div>

          {/* Below: existing systems grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', columnGap: 14, rowGap: 14 }}>
            {systems.map(s => (
              <div key={s.k} style={{
                background: ofTokens.forest700,
                border: '1px solid rgba(252,247,238,0.1)',
                padding: '14px 16px',
                display: 'flex', flexDirection: 'column', gap: 4,
              }}>
                <div style={{ fontFamily: ofType.ui, fontSize: 20, fontWeight: 700, color: ofTokens.sun300, letterSpacing: -0.3 }}>{s.k}</div>
                <div style={{ fontFamily: ofType.mono, fontSize: 11, color: '#B5A89B', letterSpacing: 0.4 }}>{s.blurb}</div>
              </div>
            ))}
          </div>

          {/* Foundation */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 14,
          }}>
            <div style={{ padding: '14px 18px', background: 'rgba(252,247,238,0.04)', border: '1px solid rgba(252,247,238,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontFamily: ofType.ui, fontSize: 18, fontWeight: 700, color: ofTokens.paper0 }}>NHI Act 20 of 2023</div>
              <div style={{ fontFamily: ofType.mono, fontSize: 11, color: '#B5A89B' }}>§5(1)(d) · record portability</div>
            </div>
            <div style={{ padding: '14px 18px', background: 'rgba(252,247,238,0.04)', border: '1px solid rgba(252,247,238,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontFamily: ofType.ui, fontSize: 18, fontWeight: 700, color: ofTokens.paper0 }}>POPIA Act 4 of 2013</div>
              <div style={{ fontFamily: ofType.mono, fontSize: 11, color: '#B5A89B' }}>§11 · §26 · sensitive data</div>
            </div>
          </div>
        </div>
      </Frame>
    </Slide>
  );
};

// ---------- Slide 15 — Deliverables ----------
const Slide15 = () => (
  <Slide bg={ofTokens.paper0}>
    <Frame>
      <TopBar left="15 · Deliverables" right="What's in the box" />

      <div style={{ marginTop: 48 }}>
        <Eyebrow>The shipping manifest</Eyebrow>
        <Title mt={20} size={104}>The work, counted.</Title>
      </div>

      <div style={{ flex: 1, marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', columnGap: 36, rowGap: 56 }}>
        {[
          { big: '27', l: 'screens',     s: '12 patient · 9 clinician · 6 admin' },
          { big: '3',  l: 'surfaces',    s: 'Patient · Clinician · Admin' },
          { big: '2',  l: 'modes',       s: 'Aloe & Sun · Forest dark' },
          { big: '12', l: 'languages',   s: '5 launch + isiZulu first · SASL' },
          { big: '6',  l: 'hero flows',  s: 'Anchored to a real persona' },
          { big: '7',  l: 'personas',    s: 'Designed against, not for' },
          { big: '9',  l: 'provinces',   s: 'GP · KZN · EC · WC · LP · MP · NW · FS · NC' },
          { big: '1',  l: 'record',      s: 'The folder follows the citizen' },
        ].map(s => (
          <div key={s.l} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontFamily: ofType.ui, fontSize: 168, fontWeight: 800, color: ofTokens.aloe700, letterSpacing: -6, lineHeight: 0.9 }}>{s.big}</div>
            <div style={{ fontFamily: ofType.mono, fontSize: 13, color: ofTokens.sun700, letterSpacing: 1.6, textTransform: 'uppercase', fontWeight: 700 }}>{s.l}</div>
            <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: 18, color: ofTokens.ink700, lineHeight: 1.3, maxWidth: 280 }}>{s.s}</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 24, paddingTop: 20, borderTop: `1px solid ${ofTokens.paper200}`,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: ofType.mono, fontSize: TYPE_SCALE.small, color: ofTokens.ink700, letterSpacing: 0.4, textTransform: 'uppercase',
      }}>
        <span>Brand</span>
        <span>Tokens</span>
        <span>Components</span>
        <span>Prototype</span>
        <span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>Deck</span>
      </div>
    </Frame>
  </Slide>
);

// ---------- Slide 16 — Outcome / closing ----------
const Slide16 = () => (
  <Slide bg={ofTokens.paper0}>
    {/* gradient field */}
    <div style={{ position: 'absolute', inset: 0, background: ofAloeSunGradient, opacity: 0.16 }}/>
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(900px 700px at 18% 22%, rgba(46,125,91,0.18), transparent 65%), radial-gradient(900px 800px at 88% 82%, rgba(255,122,77,0.18), transparent 60%)',
    }}/>

    <Frame padY={96}>
      <TopBar left="16 · Outcome" right="Re bopa Nala · Kopano · Tshepo" />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1620 }}>
        <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.tag, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: ofTokens.aloe700, marginBottom: 36 }}>
          The folder follows the citizen
        </div>

        <div style={{
          fontFamily: ofType.editorial, fontStyle: 'italic',
          fontSize: 96, fontWeight: 400, color: ofTokens.ink900,
          lineHeight: 1.12, letterSpacing: -1.5, maxWidth: 1500, textWrap: 'pretty',
        }}>
          Re bopa Nala ka Kopano le Tshepo.
        </div>
        <div style={{
          fontFamily: ofType.editorial, fontSize: 40, color: ofTokens.ink500,
          marginTop: 18, fontStyle: 'italic',
        }}>
          We build prosperity through unity and trust.
        </div>

        <div style={{ marginTop: 72, display: 'flex', gap: 18 }}>
          <a href="prototype.html" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '22px 36px', background: ofTokens.aloe700, color: ofTokens.paper0,
            fontFamily: ofType.ui, fontSize: 26, fontWeight: 700, letterSpacing: -0.2,
            textDecoration: 'none', borderRadius: 9999,
          }}>
            Open the live prototype
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
          </a>
          <a href="../index.html#ux" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '22px 32px', background: 'transparent', color: ofTokens.ink900,
            border: `2px solid ${ofTokens.ink900}`,
            fontFamily: ofType.ui, fontSize: 26, fontWeight: 700, letterSpacing: -0.2,
            textDecoration: 'none', borderRadius: 9999,
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
            Back to portfolio
          </a>
        </div>
      </div>

      <Footer
        left="Dominic McWazzer · Digital Designer · 2026"
        right="16 / 16 — fin"
      />
    </Frame>
  </Slide>
);

Object.assign(window, { Slide11, Slide12, Slide13, Slide14, Slide15, Slide16, PatientHomeMock });

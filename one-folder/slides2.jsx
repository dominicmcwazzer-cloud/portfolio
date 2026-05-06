// One Folder — slides 06–10

// ---------- Slide 06 — Brand thesis ("Aloe & Sun") ----------
const Slide06 = () => (
  <Slide bg={ofTokens.paper0}>
    <Frame>
      <TopBar left="06 · Brand" right="Aloe & Sun" />

      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 96, alignItems: 'end' }}>
        <div>
          <Eyebrow>The system, in one slide</Eyebrow>
          <Title mt={20} size={84}>Aloe &amp; Sun.</Title>
        </div>
        <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: TYPE_SCALE.bodyLg, color: ofTokens.ink700, lineHeight: 1.3, maxWidth: 640, textAlign: 'right', alignSelf: 'end', paddingBottom: 8 }}>
          Civic dignity, not corporate-medical. The aloe is South Africa's native healing plant — symbolic without being literal.
        </div>
      </div>

      <div style={{ flex: 1, marginTop: 56, display: 'grid', gridTemplateColumns: '1.05fr 1fr', columnGap: 80 }}>
        {/* LEFT — wordmark + paragraph */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{
              fontFamily: ofType.ui, fontWeight: 800, fontSize: 200, color: ofTokens.aloe700,
              lineHeight: 0.9, letterSpacing: -5,
            }}>
              One <span style={{ color: ofTokens.sun700 }}>Folder</span>
            </div>
            <div style={{
              marginTop: 28, fontFamily: ofType.ui, fontSize: TYPE_SCALE.tag, fontWeight: 700,
              color: ofTokens.aloe700, letterSpacing: 4, textTransform: 'uppercase',
            }}>
              Nala · Kopano · Tshepo
            </div>
          </div>

          <div style={{
            marginTop: 48,
            fontFamily: ofType.editorial, fontSize: TYPE_SCALE.bodyLg, fontStyle: 'italic',
            color: ofTokens.ink700, lineHeight: 1.4, maxWidth: 740,
          }}>
            "Public Sans is USWDS's accessibility-validated default — institutional credibility built-in.
            Source Serif 4 carries the ceremonial Sepedi. Coral sun sidesteps the flag-orange cliché."
          </div>
        </div>

        {/* RIGHT — swatches + type sample */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            <Swatch hex={ofTokens.paper0}    name="Paper"  code="#FCF7EE" />
            <Swatch hex={ofTokens.aloe500}   name="Aloe"   code="#2E7D5B" dark />
            <Swatch hex={ofTokens.sun500}    name="Sun"    code="#FF7A4D" dark />
            <Swatch hex={ofTokens.ink900}    name="Ink"    code="#1A1410" dark />
            <Swatch hex={ofTokens.paper200}  name="Sand"   code="#E8DFD0" />
          </div>

          <div style={{
            background: '#FFFFFF', border: `1px solid ${ofTokens.paper200}`,
            padding: 28, display: 'flex', flexDirection: 'column', gap: 18,
          }}>
            <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.ink500, letterSpacing: 1.4, textTransform: 'uppercase' }}>
              Type stack
            </div>
            <div>
              <div style={{ fontFamily: ofType.ui, fontSize: 44, fontWeight: 800, color: ofTokens.ink900, letterSpacing: -1 }}>Public Sans</div>
              <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.ink500, marginTop: 4 }}>UI · Display · 100–900</div>
            </div>
            <div>
              <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: 44, color: ofTokens.ink900, letterSpacing: -0.5 }}>Source Serif 4</div>
              <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.ink500, marginTop: 4 }}>Editorial · Manifesto slabs</div>
            </div>
            <div>
              <div style={{ fontFamily: ofType.mono, fontSize: 28, color: ofTokens.aloe700, letterSpacing: 0.4 }}>HPRN 4721 8893 02</div>
              <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.ink500, marginTop: 4 }}>JetBrains Mono · Identifiers</div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  </Slide>
);

// ---------- Slide 07 — Three surfaces, one record ----------

const PhonePlaceholder = ({ dark, label, sub, accent }) => (
  <div style={{
    width: 360, height: 720,
    background: dark ? ofTokens.forest900 : ofTokens.paper0,
    color: dark ? ofTokens.paper0 : ofTokens.ink900,
    borderRadius: 44,
    border: `2px solid ${dark ? '#000' : ofTokens.ink900}`,
    boxShadow: dark ? '0 30px 80px rgba(0,0,0,0.55)' : '0 30px 80px rgba(26,20,16,0.18)',
    padding: 16,
    display: 'flex', flexDirection: 'column',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* notch */}
    <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', width: 110, height: 26, background: '#000', borderRadius: 14 }}/>

    <div style={{
      flex: 1, marginTop: 36,
      borderRadius: 28,
      background: dark ? ofTokens.forest700 : '#FFFFFF',
      border: `1px solid ${dark ? 'rgba(252,247,238,0.06)' : ofTokens.paper200}`,
      padding: 22, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden',
    }}>
      <div style={{
        fontFamily: ofType.mono, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase',
        color: dark ? '#7E7062' : ofTokens.ink500,
      }}>One Folder</div>
      <div style={{
        fontFamily: ofType.ui, fontSize: 28, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.5,
      }}>{label}</div>
      <div style={{
        fontFamily: ofType.editorial, fontSize: 16, fontStyle: 'italic', lineHeight: 1.3,
        color: dark ? '#B5A89B' : ofTokens.ink700,
      }}>{sub}</div>

      <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{
            background: dark ? 'rgba(252,247,238,0.04)' : ofTokens.paper100,
            border: `1px solid ${dark ? 'rgba(252,247,238,0.06)' : ofTokens.paper200}`,
            padding: '10px 12px', display: 'flex', justifyContent: 'space-between',
            fontFamily: ofType.ui, fontSize: 13,
          }}>
            <span>{['Sibongile N.','Lebo M.','Joseph K.','Themba S.','Nomsa Z.'][i-1]}</span>
            <span style={{ color: accent, fontFamily: ofType.mono, fontSize: 11, letterSpacing: 0.6 }}>A 0{13+i}</span>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 'auto', padding: '12px 14px',
        background: accent, color: '#fff',
        fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, textAlign: 'center',
      }}>Open record</div>
    </div>
  </div>
);

const DesktopPlaceholder = () => (
  <div style={{
    width: 1080, height: 660,
    background: '#FFFFFF',
    border: `1px solid ${ofTokens.paper200}`,
    boxShadow: '0 30px 80px rgba(26,20,16,0.18)',
    display: 'flex', flexDirection: 'column', overflow: 'hidden',
  }}>
    {/* chrome */}
    <div style={{ height: 44, background: ofTokens.paper100, borderBottom: `1px solid ${ofTokens.paper200}`, display: 'flex', alignItems: 'center', paddingLeft: 18, gap: 8 }}>
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: ofTokens.crimson500, opacity: 0.8 }}/>
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: ofTokens.ochre500 }}/>
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: ofTokens.aloe500 }}/>
      <div style={{ marginLeft: 24, fontFamily: ofType.mono, fontSize: 12, color: ofTokens.ink500, letterSpacing: 0.4 }}>onefolder.gov.za/admin · KZN</div>
    </div>

    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '220px 1fr', overflow: 'hidden' }}>
      {/* sidebar */}
      <div style={{ background: ofTokens.aloe700, color: ofTokens.paper0, padding: 22, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ fontFamily: ofType.ui, fontSize: 22, fontWeight: 800, letterSpacing: -0.4 }}>One Folder</div>
        <div style={{ fontFamily: ofType.mono, fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase', opacity: 0.7 }}>Admin · KZN</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
          {['Overview','Facilities','Stock','Workforce','Reports'].map((s, i) => (
            <div key={s} style={{
              fontFamily: ofType.ui, fontSize: 14,
              padding: '8px 10px',
              background: i === 0 ? 'rgba(252,247,238,0.12)' : 'transparent',
              fontWeight: i === 0 ? 700 : 500,
            }}>{s}</div>
          ))}
        </div>
      </div>

      {/* canvas */}
      <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16, overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: ofType.mono, fontSize: 11, color: ofTokens.ink500, letterSpacing: 1.4, textTransform: 'uppercase' }}>Provincial dashboard</div>
            <div style={{ fontFamily: ofType.ui, fontSize: 32, fontWeight: 800, color: ofTokens.ink900, marginTop: 4 }}>KwaZulu-Natal</div>
          </div>
          <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: 18, color: ofTokens.ink700 }}>05 May 2026 · 14:22</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            { l: 'Patients today', v: '89,110' },
            { l: 'Stock-outs', v: '19', danger: true },
            { l: 'Vacancies', v: '21%' },
            { l: 'Records ported', v: '1.2M' },
          ].map(s => (
            <div key={s.l} style={{ background: ofTokens.paper100, border: `1px solid ${ofTokens.paper200}`, padding: 14 }}>
              <div style={{ fontFamily: ofType.mono, fontSize: 10, color: ofTokens.ink500, letterSpacing: 1.2, textTransform: 'uppercase' }}>{s.l}</div>
              <div style={{ fontFamily: ofType.ui, fontSize: 30, fontWeight: 800, color: s.danger ? ofTokens.crimson500 : ofTokens.ink900, letterSpacing: -1, marginTop: 4 }}>{s.v}</div>
            </div>
          ))}
        </div>

        {/* fake heat map */}
        <div style={{ flex: 1, background: ofTokens.paper100, border: `1px solid ${ofTokens.paper200}`, padding: 18, position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontFamily: ofType.mono, fontSize: 10, color: ofTokens.ink500, letterSpacing: 1.2, textTransform: 'uppercase' }}>Stock pressure · last 7 days</div>
          <div style={{ position: 'absolute', inset: '46px 18px 18px 18px', display: 'grid', gridTemplateColumns: 'repeat(14, 1fr)', gridTemplateRows: 'repeat(8, 1fr)', gap: 4 }}>
            {Array.from({ length: 14*8 }).map((_, i) => {
              const v = Math.abs(Math.sin(i * 1.7)) ;
              return <div key={i} style={{ background: `rgba(${v > 0.7 ? '181,59,59' : '46,125,91'}, ${0.15 + v*0.55})` }}/>;
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide07 = () => (
  <Slide bg={ofTokens.paper0}>
    <Frame>
      <TopBar left="07 · The product" right="Three surfaces · One record" />

      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 96, alignItems: 'end' }}>
        <div>
          <Eyebrow>What it is, end-to-end</Eyebrow>
          <Title mt={20} size={84}>Three surfaces. One record.</Title>
        </div>
        <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: TYPE_SCALE.bodyLg, color: ofTokens.ink700, lineHeight: 1.3, maxWidth: 640, textAlign: 'right', alignSelf: 'end', paddingBottom: 8 }}>
          The same folder, expressed three ways for three audiences — and reconciled to a single source of truth.
        </div>
      </div>

      <div style={{ flex: 1, marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr 1.6fr', columnGap: 48, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <RealScreen Screen={typeof OfScreenPHome === 'function' ? OfScreenPHome : null} dark={false} scale={0.66} />
          <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.aloe700, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 700 }}>Patient · light</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <RealScreen Screen={typeof OfScreenQueue === 'function' ? OfScreenQueue : null} dark={true} scale={0.66} />
          <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.aloe700, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 700 }}>Clinician · dark</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <RealDesktop Screen={typeof OfScreenAOverview === 'function' ? OfScreenAOverview : null} dark={false} scale={0.62} />
          <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.aloe700, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 700 }}>Admin CMS · light</div>
        </div>
      </div>

      <div style={{
        marginTop: 24, paddingTop: 24, borderTop: `1px solid ${ofTokens.paper200}`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        fontFamily: ofType.mono, fontSize: TYPE_SCALE.small, color: ofTokens.ink700, letterSpacing: 0.4, textTransform: 'uppercase',
      }}>
        <span>12 patient screens</span>
        <span>9 clinician screens</span>
        <span>6 admin screens</span>
        <span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>Light + dark · 12 languages</span>
      </div>
    </Frame>
  </Slide>
);

// ---------- Flow slide template ----------
const FlowFrame = ({ children, n, person, kicker, title, caption }) => (
  <Slide bg={ofTokens.paper0}>
    <Frame>
      <TopBar left={`${pad(n)} · Flow`} right={person} />

      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 96, alignItems: 'end' }}>
        <div>
          <Eyebrow>{kicker}</Eyebrow>
          <Title mt={20} size={84}>{title}</Title>
        </div>
        <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: TYPE_SCALE.bodyLg, color: ofTokens.ink700, lineHeight: 1.3, maxWidth: 640, textAlign: 'right', alignSelf: 'end', paddingBottom: 8 }}>
          {caption}
        </div>
      </div>

      <div style={{ flex: 1, marginTop: 56 }}>
        {children}
      </div>
    </Frame>
  </Slide>
);

const pad = (n) => String(n).padStart(2, '0');

// Mock phone for flow strips — narrower, more decorative
// Outer wrapper has NO overflow:hidden so the numbered badge can poke out.
// Inner phone keeps overflow:hidden to clip the rounded corners + screen content.
const FlowPhone = ({ children, dark, badge, badgeColor }) => (
  <div style={{ position: 'relative', flexShrink: 0, width: 320, height: 660 }}>
    <div style={{
      width: '100%', height: '100%',
      background: dark ? ofTokens.forest900 : ofTokens.paper0,
      color: dark ? ofTokens.paper0 : ofTokens.ink900,
      borderRadius: 40,
      border: `2px solid ${dark ? '#000' : ofTokens.ink900}`,
      boxShadow: dark ? '0 24px 60px rgba(0,0,0,0.45)' : '0 24px 60px rgba(26,20,16,0.18)',
      padding: 14,
      display: 'flex', flexDirection: 'column',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', width: 96, height: 22, background: '#000', borderRadius: 12 }}/>
      <div style={{ flex: 1, marginTop: 32, borderRadius: 24, overflow: 'hidden', background: dark ? ofTokens.forest700 : '#FFFFFF', border: `1px solid ${dark ? 'rgba(252,247,238,0.06)' : ofTokens.paper200}` }}>
        {children}
      </div>
    </div>
    {badge && (
      <div style={{
        position: 'absolute', top: -16, left: -16,
        width: 64, height: 64, borderRadius: '50%',
        background: badgeColor || ofTokens.sun500,
        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: ofType.ui, fontWeight: 800, fontSize: 26,
        boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
        zIndex: 10,
      }}>{badge}</div>
    )}
  </div>
);

const FlowArrow = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
    <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
      <path d="M0 10 L52 10 M44 3 L52 10 L44 17" stroke={ofTokens.aloe700} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

// ---------- Slide 08 — Flow 1: Killer flow (Sibongile) ----------
const Slide08 = () => (
  <FlowFrame
    n={8}
    person="Mam' Sibongile · 67 · Soweto"
    kicker="Flow 01 — the killer flow"
    title="Monthly script. Without the queue."
    caption="5.3 million chronic-meds users. Replace the file-pull, the wait, the line — with a notification, a code, and a counter."
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
      {/* Step 1 — WhatsApp */}
      <FlowPhone badge="1">
        <div style={{ background: '#075E54', color: '#fff', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: ofTokens.aloe500, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: ofType.ui, fontWeight: 800, fontSize: 14 }}>OF</div>
          <div style={{ fontFamily: ofType.ui, fontSize: 14, fontWeight: 700 }}>One Folder</div>
        </div>
        <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12, background: '#ECE5DD', height: '100%' }}>
          <div style={{ background: '#fff', padding: 12, borderRadius: 6, fontFamily: ofType.ui, fontSize: 13, color: '#1A1410', lineHeight: 1.45, maxWidth: 240 }}>
            <strong>Sanibonani Sibongile</strong> 🌿<br/>
            Your script is ready at <strong>Chiawelo Pickup Point</strong>.<br/>
            Tap to scan when you arrive. Open till 17:00 today.
          </div>
          <div style={{ alignSelf: 'flex-start', background: ofTokens.aloe500, color: '#fff', padding: '10px 14px', fontFamily: ofType.ui, fontSize: 13, fontWeight: 700, borderRadius: 6 }}>
            Open my folder ↗
          </div>
        </div>
      </FlowPhone>

      <FlowArrow/>

      {/* Step 2 — REAL prototype screen: OfScreenWalkin */}
      <RealScreen
        Screen={typeof OfScreenWalkin === 'function' ? OfScreenWalkin : null}
        dark={false} scale={0.78}
        badge="2"
      />

      <FlowArrow/>

      {/* Step 3 — Pickup staff scan */}
      <FlowPhone badge="3" badgeColor={ofTokens.aloe500}>
        <div style={{ background: ofTokens.aloe700, color: ofTokens.paper0, padding: 14, fontFamily: ofType.mono, fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase' }}>
          Staff · Pickup view
        </div>
        <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
          <div style={{ aspectRatio: '1', background: '#000', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '15% 15%', border: `2px solid ${ofTokens.sun500}` }}/>
            <div style={{ position: 'absolute', left: '15%', right: '15%', top: '50%', height: 2, background: ofTokens.sun500, boxShadow: `0 0 16px ${ofTokens.sun500}` }}/>
            <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, textAlign: 'center', fontFamily: ofType.mono, fontSize: 10, color: ofTokens.paper0, letterSpacing: 0.4 }}>Hold steady · scanning</div>
          </div>
          <div style={{ background: ofTokens.paper100, padding: 12 }}>
            <div style={{ fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: ofTokens.ink900 }}>Sibongile Nkosi</div>
            <div style={{ fontFamily: ofType.mono, fontSize: 11, color: ofTokens.ink500, marginTop: 2 }}>HPRN ···· 8893 02 · 67F</div>
            <div style={{ marginTop: 8, fontFamily: ofType.editorial, fontSize: 13, fontStyle: 'italic', color: ofTokens.ink700, lineHeight: 1.3 }}>
              Amlodipine 5 mg · Metformin 500 mg · Atorvastatin 10 mg
            </div>
          </div>
        </div>
      </FlowPhone>

      <FlowArrow/>

      {/* Step 4 — Confirmation */}
      <FlowPhone badge="4" badgeColor={ofTokens.aloe500}>
        <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 14, height: '100%', background: '#FFFFFF' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: ofTokens.aloe500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FCF7EE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
          </div>
          <div style={{ fontFamily: ofType.ui, fontSize: 26, fontWeight: 800, color: ofTokens.aloe700, lineHeight: 1.05, letterSpacing: -0.5 }}>Collected.</div>
          <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: 16, color: ofTokens.ink700, lineHeight: 1.3 }}>
            Sanibonani, Mam'. Your next script is ready <strong>03 Jun</strong>.
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ background: ofTokens.paper100, padding: 12, fontFamily: ofType.mono, fontSize: 11, color: ofTokens.ink700, letterSpacing: 0.4 }}>
              <div style={{ color: ofTokens.ink500, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 4 }}>Saved</div>
              2h 47m queue avoided
            </div>
            <div style={{ background: ofTokens.aloe700, color: ofTokens.paper0, padding: '10px 12px', fontFamily: ofType.ui, fontSize: 13, fontWeight: 700, textAlign: 'center' }}>
              Add to calendar
            </div>
          </div>
        </div>
      </FlowPhone>
    </div>

    <div style={{
      marginTop: 36, paddingTop: 24, borderTop: `1px solid ${ofTokens.paper200}`,
      display: 'flex', justifyContent: 'space-between',
      fontFamily: ofType.mono, fontSize: TYPE_SCALE.small, color: ofTokens.ink700, letterSpacing: 0.4, textTransform: 'uppercase',
    }}>
      <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>Notify</span> · WhatsApp</span>
      <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>Code</span> · QR + USSD fallback</span>
      <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>Pickup</span> · 1,800+ CCMDD points</span>
      <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>Confirm</span> · Saved to record</span>
    </div>
  </FlowFrame>
);

// ---------- Slide 09 — Flow 2: Nurse's morning queue ----------
const Slide09 = () => (
  <FlowFrame
    n={9}
    person="Sister Lerato · 42 · Limpopo PHC"
    kicker="Flow 02 — under 90 seconds"
    title="A nurse's morning queue."
    caption="60+ patients/day. The screen has to beat paper, or it gets abandoned. Logging the visit is the design."
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
      {/* 1: Today's queue — REAL */}
      <RealScreen Screen={typeof OfScreenQueue === 'function' ? OfScreenQueue : null}
        dark={true} scale={0.78} badge="1" />
      <FlowArrow/>
      {/* 2: Patient summary — REAL */}
      <RealScreen Screen={typeof OfScreenSummary === 'function' ? OfScreenSummary : null}
        dark={true} scale={0.78} badge="2" />
      <FlowArrow/>
      {/* 3: Consult capture — REAL */}
      <RealScreen Screen={typeof OfScreenConsult === 'function' ? OfScreenConsult : null}
        dark={true} scale={0.78} badge="3" />
      <FlowArrow/>
      {/* 4: Prescribe (disposition) — REAL */}
      <RealScreen Screen={typeof OfScreenPrescribe === 'function' ? OfScreenPrescribe : null}
        dark={true} scale={0.78} badge="4" />
    </div>

    <div style={{
      marginTop: 36, paddingTop: 24, borderTop: `1px solid ${ofTokens.paper200}`,
      display: 'flex', justifyContent: 'space-between',
      fontFamily: ofType.mono, fontSize: TYPE_SCALE.small, color: ofTokens.ink700, letterSpacing: 0.4, textTransform: 'uppercase',
    }}>
      <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>Triage</span> · acuity-coded</span>
      <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>Summary</span> · allergy-first</span>
      <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>Capture</span> · voice + dictation</span>
      <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>Disposition</span> · 4 paths</span>
    </div>
  </FlowFrame>
);

// ---------- Slide 10 — Flow 3: Asylum-seeker registration ----------
const Slide10 = () => (
  <FlowFrame
    n={10}
    person="Joseph · 34 · Yeoville"
    kicker="Flow 03 — identity, made first-class"
    title="If the Constitution says he's entitled —"
    caption="…the system must say so too. Section 27. TB + HIV. No ID number ≠ no record. Privacy-locked from byte one."
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
      {/* 1: Identity choice — REAL */}
      <RealScreen Screen={typeof OfScreenIdentity === 'function' ? OfScreenIdentity : null}
        dark={false} scale={0.78} badge="1" />

      <FlowArrow/>

      {/* 2: Permit capture */}
      <FlowPhone badge="2">
        <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 10, height: '100%' }}>
          <div style={{ fontFamily: ofType.mono, fontSize: 10, color: ofTokens.ink500, letterSpacing: 1.4, textTransform: 'uppercase' }}>Step 2 of 4 · Permit</div>
          <div style={{ fontFamily: ofType.ui, fontSize: 20, fontWeight: 800, color: ofTokens.ink900, letterSpacing: -0.4, lineHeight: 1.1 }}>Photograph your Section 22.</div>

          <div style={{ flex: 1, marginTop: 8, background: '#000', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '12% 10%', border: `2px dashed ${ofTokens.sun500}` }}/>
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', color: ofTokens.paper0, fontFamily: ofType.ui, fontSize: 12, opacity: 0.7, textAlign: 'center', maxWidth: 200 }}>
              Frame the whole permit. Edges visible.
            </div>
            {/* corner ticks */}
            {[[0,0],[1,0],[0,1],[1,1]].map(([x,y], i) => (
              <div key={i} style={{
                position: 'absolute',
                left: x ? 'auto' : '8%',
                right: x ? '8%' : 'auto',
                top: y ? 'auto' : '10%',
                bottom: y ? '10%' : 'auto',
                width: 16, height: 16,
                borderLeft: !x ? `2px solid ${ofTokens.sun500}` : 'none',
                borderRight: x ? `2px solid ${ofTokens.sun500}` : 'none',
                borderTop: !y ? `2px solid ${ofTokens.sun500}` : 'none',
                borderBottom: y ? `2px solid ${ofTokens.sun500}` : 'none',
              }}/>
            ))}
          </div>

          <div style={{ background: ofTokens.paper100, padding: 10, fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: 12, color: ofTokens.ink700, lineHeight: 1.3 }}>
            We never share this photo outside DoH + DHA. POPIA §11.
          </div>
        </div>
      </FlowPhone>

      <FlowArrow/>

      {/* 3: Privacy lock — REAL */}
      <RealScreen Screen={typeof OfScreenPrivacy === 'function' ? OfScreenPrivacy : null}
        dark={false} scale={0.78} badge="3" />

      <FlowArrow/>

      {/* 4: Folder created */}
      <FlowPhone badge="4" badgeColor={ofTokens.aloe500}>
        <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
          <div style={{ fontFamily: ofType.mono, fontSize: 10, color: ofTokens.aloe700, letterSpacing: 1.4, textTransform: 'uppercase' }}>Folder created</div>
          <div style={{ fontFamily: ofType.ui, fontSize: 22, fontWeight: 800, color: ofTokens.aloe700, letterSpacing: -0.4, lineHeight: 1.05 }}>Welcome, Joseph.</div>
          <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: 14, color: ofTokens.ink700, lineHeight: 1.35 }}>
            Your folder is yours, wherever you go. Yeoville Clinic, or anywhere in South Africa.
          </div>

          <div style={{ marginTop: 6, padding: 12, background: ofTokens.paper100, fontFamily: ofType.mono, fontSize: 12, color: ofTokens.ink900, letterSpacing: 0.4 }}>
            HPRN 8814 0073 09<br/>
            <span style={{ color: ofTokens.ink500, fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase' }}>Your unique health number</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: ofType.ui, fontSize: 12, color: ofTokens.ink900 }}>
              <span style={{ width: 6, height: 6, background: ofTokens.aloe500 }}/> Section 27 · entitled
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: ofType.ui, fontSize: 12, color: ofTokens.ink900 }}>
              <span style={{ width: 6, height: 6, background: ofTokens.aloe500 }}/> POPIA · sensitive locked
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: ofType.ui, fontSize: 12, color: ofTokens.ink900 }}>
              <span style={{ width: 6, height: 6, background: ofTokens.aloe500 }}/> Booked · TB clinic, 08 May
            </div>
          </div>

          <div style={{ marginTop: 'auto', background: ofTokens.aloe500, color: ofTokens.paper0, padding: '12px 0', textAlign: 'center', fontFamily: ofType.ui, fontSize: 13, fontWeight: 700 }}>
            Open my folder
          </div>
        </div>
      </FlowPhone>
    </div>

    <div style={{
      marginTop: 36, paddingTop: 24, borderTop: `1px solid ${ofTokens.paper200}`,
      display: 'flex', justifyContent: 'space-between',
      fontFamily: ofType.mono, fontSize: TYPE_SCALE.small, color: ofTokens.ink700, letterSpacing: 0.4, textTransform: 'uppercase',
    }}>
      <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>4 ID paths</span> · ID / asylum / refugee / linkage</span>
      <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>POPIA</span> · §11 by default</span>
      <span><span style={{ color: ofTokens.aloe700, fontWeight: 700 }}>Section 27</span> · constitutionally compliant</span>
    </div>
  </FlowFrame>
);

Object.assign(window, { Slide06, Slide07, Slide08, Slide09, Slide10, FlowFrame, FlowPhone, FlowArrow, PhonePlaceholder, DesktopPlaceholder, pad });

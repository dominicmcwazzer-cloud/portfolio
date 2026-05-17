// One Folder — slide components
// Build at 1920x1080. All sizes in px, projection-scaled.

const TYPE_SCALE = {
  display:   168,  // ceremonial / cover
  hero:      120,  // monumental stat
  title:      72,  // section/slide title
  subtitle:   44,
  body:       30,
  bodyLg:     36,
  small:      24,
  micro:      20,  // labels & meta only
  tag:        18,  // tracked label, only for chips
};

const SPACING = {
  px: 120,           // horizontal slide padding
  pxNarrow: 96,
  py: 100,
  pb: 96,
  titleGap: 56,
  itemGap: 32,
  rule: 1,
};

// ---------- low-level atoms ----------

const Slide = ({ children, bg, color, style }) => (
  <div style={{
    position: 'absolute', inset: 0,
    background: bg || ofTokens.paper0,
    color: color || ofTokens.ink900,
    fontFamily: ofType.ui,
    overflow: 'hidden',
    ...style,
  }}>{children}</div>
);

const Frame = ({ children, padX = SPACING.px, padY = SPACING.py, style }) => (
  <div style={{
    position: 'absolute', inset: 0,
    paddingLeft: padX, paddingRight: padX,
    paddingTop: padY, paddingBottom: SPACING.pb,
    display: 'flex', flexDirection: 'column',
    ...style,
  }}>{children}</div>
);

const TopBar = ({ left, right, color = ofTokens.ink500 }) => (
  <div style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro,
    color, letterSpacing: 0.4, textTransform: 'uppercase',
  }}>
    <span>{left}</span>
    <span>{right}</span>
  </div>
);

const Eyebrow = ({ children, color = ofTokens.aloe700 }) => (
  <div style={{
    fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro,
    color, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 600,
  }}>{children}</div>
);

const Title = ({ children, color, mt = 32, mb = 0, size = TYPE_SCALE.title, family = ofType.ui, weight = 700, style }) => (
  <h1 style={{
    fontFamily: family, fontSize: size, fontWeight: weight,
    color: color || 'inherit',
    margin: 0, marginTop: mt, marginBottom: mb,
    lineHeight: 1.05, letterSpacing: -0.5,
    ...style,
  }}>{children}</h1>
);

const Footer = ({ left, right, color = ofTokens.ink500 }) => (
  <div style={{
    position: 'absolute', left: SPACING.px, right: SPACING.px, bottom: 56,
    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
    fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro,
    color, letterSpacing: 0.4, textTransform: 'uppercase',
  }}>
    <span>{left}</span>
    <span>{right}</span>
  </div>
);

const Swatch = ({ hex, name, code, dark }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
    <div style={{
      width: '100%', aspectRatio: '1 / 1', background: hex,
      borderRadius: 0,
      boxShadow: dark ? 'inset 0 0 0 1px rgba(252,247,238,0.08)' : 'inset 0 0 0 1px rgba(26,20,16,0.06)',
    }}/>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ fontFamily: ofType.ui, fontSize: TYPE_SCALE.small, fontWeight: 700, color: dark ? ofTokens.paper0 : ofTokens.ink900 }}>{name}</div>
      <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: dark ? '#B5A89B' : ofTokens.ink500 }}>{code}</div>
    </div>
  </div>
);

// ---------- Slide 01 — Cover ----------
const Slide01 = () => (
  <Slide bg={ofTokens.paper0}>
    {/* Aloe→sun gradient as a soft tonal field, paper-warm, low opacity */}
    <div style={{
      position: 'absolute', inset: 0,
      background: ofAloeSunGradient,
      opacity: 0.16,
    }}/>
    {/* Soft botanical aloe silhouette suggestion via radial glows — restrained */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(900px 700px at 82% 78%, rgba(255,122,77,0.18), transparent 60%), radial-gradient(900px 800px at 12% 22%, rgba(46,125,91,0.18), transparent 65%)',
    }}/>

    <Frame padY={96}>
      <TopBar
        left="One Folder · Case study"
        right="Dominic McWazzer · 2026"
      />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1500 }}>
        <div style={{ marginBottom: 44 }}>
          <OfAloeMark size={132} />
        </div>
        <div style={{
          fontFamily: ofType.ui, fontSize: TYPE_SCALE.tag, fontWeight: 700,
          letterSpacing: 4, textTransform: 'uppercase', color: ofTokens.aloe700,
          marginBottom: 48,
        }}>
          Nala · Kopano · Tshepo
        </div>

        <div style={{
          fontFamily: ofType.ui, fontSize: 220, fontWeight: 800,
          color: ofTokens.aloe700, lineHeight: 0.9,
          letterSpacing: -6, marginBottom: 64,
        }}>
          One <span style={{ color: ofTokens.sun700 }}>Folder</span>
        </div>

        <div style={{
          fontFamily: ofType.editorial, fontStyle: 'italic',
          fontSize: 64, fontWeight: 400, color: ofTokens.ink900,
          lineHeight: 1.15, letterSpacing: -0.5, maxWidth: 1280,
        }}>
          Re bopa Nala ka Kopano le Tshepo.
        </div>
        <div style={{
          fontFamily: ofType.editorial, fontSize: TYPE_SCALE.subtitle,
          color: ofTokens.ink500, marginTop: 18, fontStyle: 'italic',
        }}>
          We build prosperity through unity and trust.
        </div>
      </div>

      <Footer
        left="A speculative UX proposal · Public health · South Africa"
        right="01 / 16"
      />
    </Frame>
  </Slide>
);

// ---------- Slide 02 — Premise ----------
const Slide02 = () => (
  <Slide bg={ofTokens.paper0}>
    <Frame>
      <TopBar left="02 · Premise" right="The thesis" />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1620 }}>
        <Eyebrow>The thesis, in one sentence</Eyebrow>
        <div style={{
          fontFamily: ofType.editorial, fontSize: 88, fontWeight: 400,
          color: ofTokens.ink900, lineHeight: 1.12, letterSpacing: -1,
          marginTop: 48, textWrap: 'pretty',
        }}>
          The National Health Insurance Act of 2024 already legislates a portable electronic health record for every person in South Africa.
          {' '}
          <span style={{ color: ofTokens.aloe700, fontWeight: 700, fontStyle: 'italic' }}>
            No-one has designed the front-end.
          </span>
        </div>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 24,
        paddingTop: 32, borderTop: `1px solid ${ofTokens.paper200}`,
      }}>
        <div style={{ width: 6, height: 28, background: ofTokens.sun500 }}/>
        <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.ink500, letterSpacing: 0.4 }}>
          NHI ACT 20 OF 2023 · SIGNED 15 MAY 2024 · §5(1)(d) RECORD PORTABILITY
        </div>
      </div>
    </Frame>
  </Slide>
);

// ---------- Slide 03 — The paper trail ----------
const Stat = ({ big, suffix, label, source, danger }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
    <div style={{
      fontFamily: ofType.ui, fontSize: 132, fontWeight: 800,
      color: danger ? ofTokens.crimson500 : ofTokens.ink900,
      lineHeight: 0.95, letterSpacing: -3,
      display: 'flex', alignItems: 'baseline', gap: 8,
    }}>
      {big}
      {suffix && (
        <span style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>{suffix}</span>
      )}
    </div>
    <div style={{
      fontFamily: ofType.editorial, fontSize: TYPE_SCALE.body, fontStyle: 'italic',
      color: ofTokens.ink700, lineHeight: 1.3, maxWidth: 480,
    }}>{label}</div>
    {source && (
      <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.ink500, letterSpacing: 0.4, textTransform: 'uppercase', marginTop: 4 }}>
        {source}
      </div>
    )}
  </div>
);

const Slide03 = () => (
  <Slide bg={ofTokens.paper0}>
    <Frame>
      <TopBar left="03 · The problem" right="The paper trail" />

      <div style={{ marginTop: 48 }}>
        <Eyebrow>What the queue actually is</Eyebrow>
        <Title mt={20} size={84}>The paper trail.</Title>
      </div>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 80, rowGap: 72, marginTop: 80, alignContent: 'start' }}>
        <Stat big="3h 07m" label="Average waiting time at a primary-care clinic." source="Ritshidze · 2024" />
        <Stat big="40" suffix="%" label="of users say file retrieval is the primary cause of long waits." source="Ritshidze · 2024" danger />
        <Stat big="27" suffix="%" label="of clinic sites have visibly broken filing systems." source="Site audit · 2024" danger />
        <Stat big="75" suffix="%" label="of facility managers report insufficient staff." source="HST · 2024" />
        <Stat big="0.3" suffix=" / 1000" label="doctors per thousand people. WHO target is one." source="WHO · 2024" />
        <Stat big="71,642" label="doctors and nurses lost to emigration, 2013–2025." source="HEAIDS · estimate" danger />
      </div>
    </Frame>
  </Slide>
);

// ---------- Slide 04 — Already in motion ----------
const SystemRow = ({ name, blurb, reach, last }) => (
  <div style={{
    display: 'grid', gridTemplateColumns: '320px 1fr 280px',
    columnGap: 48, alignItems: 'baseline',
    paddingTop: 22, paddingBottom: 22,
    borderTop: `1px solid ${ofTokens.paper200}`,
    ...(last ? { borderBottom: `1px solid ${ofTokens.paper200}` } : {}),
  }}>
    <div style={{ fontFamily: ofType.ui, fontSize: TYPE_SCALE.bodyLg, fontWeight: 700, color: ofTokens.aloe700 }}>{name}</div>
    <div style={{ fontFamily: ofType.editorial, fontSize: TYPE_SCALE.body, fontStyle: 'italic', color: ofTokens.ink700, lineHeight: 1.3 }}>{blurb}</div>
    <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.body, color: ofTokens.ink900, textAlign: 'right', letterSpacing: 0.2 }}>{reach}</div>
  </div>
);

const Slide04 = () => (
  <Slide bg={ofTokens.paper0}>
    <Frame>
      <TopBar left="04 · The patchwork" right="Already in motion" />

      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 96, alignItems: 'end' }}>
        <div>
          <Eyebrow>Systems already running</Eyebrow>
          <Title mt={20} size={84}>It's not a wasteland. It's a patchwork.</Title>
        </div>
        <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: TYPE_SCALE.bodyLg, color: ofTokens.ink700, lineHeight: 1.3, maxWidth: 640, textAlign: 'right', alignSelf: 'end', paddingBottom: 8 }}>
          One Folder is the connective tissue between systems that already exist, just don't yet speak to one another.
        </div>
      </div>

      <div style={{ marginTop: 56, display: 'flex', flexDirection: 'column' }}>
        <SystemRow name="HPRS"          blurb="Health Patient Registration System — the unique-ID backbone."        reach="≈20M registered" />
        <SystemRow name="NHLS"          blurb="National Health Laboratory Service — labs, results, surveillance."  reach="≈80% population" />
        <SystemRow name="CCMDD"         blurb="Centralised Chronic Medication Dispensing & Distribution."          reach="5.3M patients" />
        <SystemRow name="MomConnect"    blurb="WhatsApp-based maternal health programme since 2014."                reach="1.5M+ mothers · 95% of facilities" />
        <SystemRow name="Vula Mobile"   blurb="Specialist referral app — peer-built, used in 2,300+ facilities."   reach="2.5M referrals" />
        <SystemRow name="Stock Visibility System" blurb="Real-time medicine stock at primary-care level."           reach="3,126 PHC clinics" />
        <SystemRow name="EVDS"          blurb="Electronic Vaccination Data System — COVID-built, now extended."     reach="National coverage" />
        <SystemRow name="WC Single Patient Viewer" blurb="Western Cape provincial unified record — live since 2015." reach="Provincial · proven" last />
      </div>
    </Frame>
  </Slide>
);

// ---------- Slide 05 — Seven citizens ----------
const PersonaCard = ({ p, idx }) => (
  <div style={{
    background: '#FFFFFF',
    border: `1px solid ${ofTokens.paper200}`,
    padding: 28,
    display: 'flex', flexDirection: 'column', gap: 16,
    minHeight: 360,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{
        width: 64, height: 64, borderRadius: '50%',
        background: ofAloeSunGradient,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: ofType.ui, fontWeight: 800, fontSize: 26, color: ofTokens.paper0,
        letterSpacing: -0.5,
      }}>
        {p.name.split(' ').map(s => s[0]).slice(0,2).join('')}
      </div>
      <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.ink500, letterSpacing: 1.2, textTransform: 'uppercase' }}>
        Persona 0{idx + 1}
      </div>
    </div>
    <div>
      <div style={{ fontFamily: ofType.ui, fontSize: 30, fontWeight: 700, color: ofTokens.ink900, lineHeight: 1.1 }}>{p.name}</div>
      <div style={{ fontFamily: ofType.ui, fontSize: TYPE_SCALE.small, color: ofTokens.ink500, marginTop: 4 }}>{p.age} · {p.role}</div>
    </div>
    <div style={{ flex: 1, fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: TYPE_SCALE.small, color: ofTokens.ink700, lineHeight: 1.4 }}>
      "{p.flow}"
    </div>
    <div style={{
      paddingTop: 14, borderTop: `1px solid ${ofTokens.paper200}`,
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <div style={{ width: 8, height: 8, background: ofTokens.sun500 }}/>
      <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: ofTokens.aloe700, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700 }}>
        {p.tag}
      </div>
    </div>
  </div>
);

const Slide05 = () => (
  <Slide bg={ofTokens.paper100}>
    <Frame>
      <TopBar left="05 · People" right="Seven citizens" />

      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 96, alignItems: 'end' }}>
        <div>
          <Eyebrow>Designed against real users</Eyebrow>
          <Title mt={20} size={84}>Seven citizens.</Title>
        </div>
        <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: TYPE_SCALE.bodyLg, color: ofTokens.ink700, lineHeight: 1.3, maxWidth: 640, textAlign: 'right', alignSelf: 'end', paddingBottom: 8 }}>
          Every screen is anchored to one of these seven people, in one of nine provinces, on the device they actually own.
        </div>
      </div>

      <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, flex: 1 }}>
        {ofPersonas.map((p, i) => <PersonaCard p={p} idx={i} key={p.key}/>)}
        {/* 8th cell — connective slab */}
        <div style={{
          background: ofTokens.aloe700, color: ofTokens.paper0,
          padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          minHeight: 360,
        }}>
          <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, letterSpacing: 1.4, textTransform: 'uppercase', opacity: 0.8 }}>
            One record
          </div>
          <div style={{ fontFamily: ofType.editorial, fontStyle: 'italic', fontSize: 36, lineHeight: 1.15, letterSpacing: -0.5 }}>
            From Soweto to Mthatha to Bloemfontein —{' '}
            <span style={{ color: ofTokens.sun300 }}>the folder follows the citizen.</span>
          </div>
          <div style={{ fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, letterSpacing: 1, textTransform: 'uppercase', opacity: 0.6 }}>
            Nala · Kopano · Tshepo
          </div>
        </div>
      </div>
    </Frame>
  </Slide>
);

// ---------- Real-screen wrappers — embed prototype screens inside slides ----------
// Used on slides 7-12 so the deck shows the SAME screens as the live prototype.
const RealScreen = ({ Screen, dark = false, scale = 0.78, badge, badgeColor, screenProps = {} }) => {
  if (typeof Screen !== 'function') return null;
  const W = 390, H = 844;
  return (
    <div style={{
      position: 'relative',
      width: W * scale, height: H * scale,
      flexShrink: 0,
    }}>
      {/* Phone shell — rounded corners + shadow live here, overflow:hidden clips the screen content */}
      <div style={{
        position: 'absolute', inset: 0,
        borderRadius: 44 * scale,
        overflow: 'hidden',
        background: dark ? ofTokens.forest900 : ofTokens.paper0,
        border: `${2 * scale}px solid ${dark ? '#000' : ofTokens.ink900}`,
        boxShadow: dark ? '0 24px 60px rgba(0,0,0,0.45)' : '0 24px 60px rgba(26,20,16,0.18)',
      }}>
        <div style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: W, height: H,
        }}>
          <Screen dark={dark} goto={() => {}} {...screenProps} />
        </div>
      </div>
      {/* Badge — sits OUTSIDE the overflow:hidden shell so it can poke out */}
      {badge && (
        <div style={{
          position: 'absolute', top: -16, left: -16,
          width: 64, height: 64, borderRadius: '50%',
          background: badgeColor || ofTokens.sun500,
          color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: ofType.ui, fontWeight: 800, fontSize: 26,
          boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
          zIndex: 10,
        }}>{badge}</div>
      )}
    </div>
  );
};

const RealDesktop = ({ Screen, dark = false, scale = 0.62, screenProps = {} }) => {
  if (typeof Screen !== 'function') return null;
  const W = 1280, H = 800;
  return (
    <div style={{
      position: 'relative',
      width: W * scale, height: H * scale,
      flexShrink: 0,
    }}>
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: W, height: H,
      }}>
        <Screen dark={dark} goto={() => {}} {...screenProps} />
      </div>
    </div>
  );
};

// StepFrame — labelled wrapper for sequential screens (used on slide 11)
const StepFrame = ({ children, label, meta, tone = 'aloe', metaTone = 'ink' }) => {
  const labelColor = tone === 'sun' ? ofTokens.sun700 : ofTokens.aloe700;
  const metaColor = metaTone === 'crimson' ? ofTokens.crimson500 : ofTokens.ink500;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, minWidth: 0 }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        paddingBottom: 10, borderBottom: `1px solid ${ofTokens.paper200}`,
      }}>
        <span style={{
          fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: labelColor,
          letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 700,
        }}>{label}</span>
        {meta && <span style={{
          fontFamily: ofType.mono, fontSize: TYPE_SCALE.micro, color: metaColor,
          letterSpacing: 0.4, fontWeight: metaTone === 'crimson' ? 700 : 500,
        }}>{meta}</span>}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>{children}</div>
    </div>
  );
};

Object.assign(window, {
  TYPE_SCALE, SPACING, Slide, Frame, TopBar, Eyebrow, Title, Footer, Swatch, Stat, SystemRow, PersonaCard,
  Slide01, Slide02, Slide03, Slide04, Slide05,
  RealScreen, RealDesktop, StepFrame,
});

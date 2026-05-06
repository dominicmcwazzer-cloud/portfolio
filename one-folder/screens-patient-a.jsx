// One Folder — Patient screens 01-06

// ─── 01 Splash ───
function OfScreenSplash({ dark, goto }) {
  const t = ofTheme(dark);
  const launchLangs = ofLanguages.filter(l => l.launch);
  return (
    <OfPhone dark={dark} label="01 Splash" statusBarMode={dark ? 'light-content' : 'dark-content'}>
      <div style={{
        position: 'absolute', inset: 0,
        background: dark
          ? 'radial-gradient(circle at 50% 30%, rgba(46,125,91,0.22), transparent 60%)'
          : 'radial-gradient(circle at 50% 30%, rgba(46,125,91,0.10), transparent 60%)',
      }} />
      <div style={{
        position: 'relative', height: '100%', padding: '48px 28px 32px',
        display: 'flex', flexDirection: 'column', gap: 28,
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
          <OfAloeMark size={86} color={t.primary} />
        </div>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            fontFamily: ofType.display, fontSize: 44, fontWeight: 800,
            letterSpacing: -1.4, color: t.text1, lineHeight: 1,
          }}>One Folder</div>
          <div style={{
            fontFamily: ofType.editorial, fontSize: 17, fontStyle: 'italic',
            color: t.primary, letterSpacing: 0.2,
          }}>Nala. Kopano. Tshepo.</div>
          <div style={{ fontFamily: ofType.ui, fontSize: 12, color: t.text3 }}>
            Prosperity · Togetherness · Trust
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={ofLabel({ size: 10, color: t.text3, track: 1.4 })}>
            Choose your language
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {launchLangs.map((l, i) => (
              <span key={l.code} style={{
                padding: '8px 14px', borderRadius: 999,
                fontFamily: ofType.ui, fontSize: 12, fontWeight: 700,
                background: i === 0 ? t.primary : t.chipBg,
                color: i === 0 ? '#FFFFFF' : t.text1,
                border: i === 0 ? 'none' : `1px solid ${t.border}`,
              }}>{l.native}</span>
            ))}
            <span style={{
              padding: '8px 14px', borderRadius: 999,
              fontFamily: ofType.ui, fontSize: 12, fontWeight: 600,
              background: t.chipBg, color: t.text2,
              border: `1px dashed ${t.border}`,
            }}>+7 more</span>
          </div>
          <OfButton dark={dark} variant="primary" size="lg"
            onClick={() => goto('p-identity')}
            style={{ marginTop: 12, width: '100%', justifyContent: 'center' }}>
            Qala — Get started
          </OfButton>
          <div style={{
            textAlign: 'center', fontFamily: ofType.ui, fontSize: 11, color: t.text3,
          }}>By the National Department of Health · NHI</div>
        </div>
      </div>
    </OfPhone>
  );
}

// ─── 02 Identity ───
function OfScreenIdentity({ dark, goto }) {
  const t = ofTheme(dark);
  const options = [
    { key: 'said',     title: 'South African ID',      sub: 'Smart card or green book',   icon: '🪪', primary: true },
    { key: 'asylum',   title: 'Asylum permit',         sub: 'Section 22 or 24',           icon: '📄' },
    { key: 'refugee',  title: 'Refugee ID',            sub: 'DHA-issued card',            icon: '🏷️' },
    { key: 'linkage',  title: 'Clinic linkage code',   sub: 'For users without ID',       icon: '🔢' },
  ];
  return (
    <OfPhone dark={dark} label="02 Identity">
      <div style={{ padding: '20px 24px 32px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <button onClick={() => goto('p-splash')} style={{
          background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
          color: t.text2, fontFamily: ofType.ui, fontSize: 13, fontWeight: 600,
          textAlign: 'left', alignSelf: 'flex-start',
        }}>← Back</button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <OfSectionLabel dark={dark}>Step 1 of 3</OfSectionLabel>
          <OfTitle dark={dark} size={28}>How would you like to register?</OfTitle>
          <div style={{
            fontFamily: ofType.ui, fontSize: 13, color: t.text2, lineHeight: 1.5,
          }}>All routes accepted — no-one is locked out. Bring whatever you have.</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {options.map(opt => (
            <button key={opt.key} onClick={() => goto('p-voice')}
              style={{
                border: `1px solid ${opt.primary ? t.primary : t.border}`,
                background: opt.primary ? (dark ? 'rgba(46,125,91,0.14)' : 'rgba(46,125,91,0.06)') : t.surface,
                borderRadius: 14, padding: 16, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left',
              }}>
              <span style={{
                width: 44, height: 44, borderRadius: 12,
                background: opt.primary ? t.primary : t.chipBg,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22,
              }}>{opt.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: ofType.ui, fontSize: 15, fontWeight: 700, color: t.text1,
                }}>{opt.title}</div>
                <div style={{
                  fontFamily: ofType.ui, fontSize: 12, color: t.text3, marginTop: 2,
                }}>{opt.sub}</div>
              </div>
              <span style={{ color: t.text3, fontSize: 18 }}>›</span>
            </button>
          ))}
        </div>

        <div style={{
          padding: 12, borderRadius: 10, background: t.chipBg,
          fontFamily: ofType.editorial, fontSize: 12.5, lineHeight: 1.5,
          color: t.text2, fontStyle: 'italic',
        }}>
          The Constitution and the Refugees Act both entitle you to public healthcare. So does the NHI Act of 2024.
        </div>
      </div>
    </OfPhone>
  );
}

// ─── 03 Voice Assist ───
function OfScreenVoice({ dark, goto }) {
  const t = ofTheme(dark);
  return (
    <OfPhone dark={dark} label="03 Voice Assist">
      <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 22, height: '100%' }}>
        <button onClick={() => goto('p-identity')} style={{
          background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
          color: t.text2, fontFamily: ofType.ui, fontSize: 13, fontWeight: 600,
          textAlign: 'left', alignSelf: 'flex-start',
        }}>← Back</button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <OfSectionLabel dark={dark}>Step 2 of 3</OfSectionLabel>
          <OfTitle dark={dark} size={28}>Some prefer to speak.</OfTitle>
          <div style={{
            fontFamily: ofType.editorial, fontSize: 18, fontStyle: 'italic',
            color: t.primary, lineHeight: 1.3, marginTop: 2,
          }}>We listen.</div>
        </div>

        <div style={{
          flex: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 200, height: 200, borderRadius: '50%',
            background: t.primary, position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 0 16px ${dark ? 'rgba(46,125,91,0.18)' : 'rgba(46,125,91,0.10)'},
                        0 0 0 36px ${dark ? 'rgba(46,125,91,0.08)' : 'rgba(46,125,91,0.05)'}`,
          }}>
            <span style={{ fontSize: 80, color: '#FFFFFF' }}>🎤</span>
          </div>
        </div>

        <div style={{
          textAlign: 'center', fontFamily: ofType.ui, fontSize: 14, color: t.text2,
        }}>Speak your ID number, or tap to type.</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <OfButton dark={dark} variant="primary" size="lg"
            onClick={() => goto('p-dependent')}
            style={{ width: '100%', justifyContent: 'center' }}>
            Hold to speak
          </OfButton>
          <OfButton dark={dark} variant="ghost" size="md"
            onClick={() => goto('p-dependent')}
            style={{ width: '100%', justifyContent: 'center' }}>
            Type instead
          </OfButton>
          <button onClick={() => goto('p-dependent')} style={{
            background: 'transparent', border: 'none', padding: 6, cursor: 'pointer',
            color: t.text3, fontFamily: ofType.ui, fontSize: 12, fontWeight: 600,
            textDecoration: 'underline', textUnderlineOffset: 3,
          }}>Use SA Sign Language ▷</button>
        </div>
      </div>
    </OfPhone>
  );
}

// ─── 04 Dependent / Caregiver ───
function OfScreenDependent({ dark, goto }) {
  const t = ofTheme(dark);
  const dependents = [
    { name: 'Mam\' Sibongile Nkosi', rel: 'Grandmother', age: 67, perm: 'Manage', emoji: '👵🏾' },
    { name: 'Sipho Nkosi',           rel: 'Younger brother',  age: 16, perm: 'View', emoji: '🧑🏾' },
  ];
  return (
    <OfPhone dark={dark} label="04 Dependent Stack">
      <div style={{ padding: '20px 24px 28px', display: 'flex', flexDirection: 'column', gap: 18, overflowY: 'auto', height: '100%' }}>
        <button onClick={() => goto('p-voice')} style={{
          background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
          color: t.text2, fontFamily: ofType.ui, fontSize: 13, fontWeight: 600,
          textAlign: 'left', alignSelf: 'flex-start',
        }}>← Back</button>

        <div>
          <OfSectionLabel dark={dark}>Step 3 of 3</OfSectionLabel>
          <OfTitle dark={dark} size={28} style={{ marginTop: 4 }}>Your folder. And theirs.</OfTitle>
          <div style={{
            fontFamily: ofType.ui, fontSize: 13, color: t.text2, lineHeight: 1.5, marginTop: 6,
          }}>
            Households share care. Add the people whose folders you manage — gogos, kids, siblings.
          </div>
        </div>

        {/* You */}
        <OfCard dark={dark} padding={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <OfAvatar name="Karabo Nkosi" dark={dark} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1 }}>
                Karabo Nkosi · You
              </div>
              <div style={{ fontFamily: ofType.ui, fontSize: 11.5, color: t.text3 }}>
                HPRN 8810 4422 19 · Pretoria
              </div>
            </div>
            <OfPill dark={dark} color="aloe">Owner</OfPill>
          </div>
        </OfCard>

        <OfSectionLabel dark={dark} color={t.text3}>People you manage</OfSectionLabel>
        {dependents.map(d => (
          <OfCard key={d.name} dark={dark} padding={14}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{
                width: 36, height: 36, borderRadius: '50%',
                background: t.chipBg, display: 'inline-flex',
                alignItems: 'center', justifyContent: 'center', fontSize: 20,
              }}>{d.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1 }}>
                  {d.name}
                </div>
                <div style={{ fontFamily: ofType.ui, fontSize: 11.5, color: t.text3 }}>
                  {d.rel} · age {d.age}
                </div>
              </div>
              <OfPill dark={dark} color={d.perm === 'Manage' ? 'sun' : 'neutral'}>
                {d.perm}
              </OfPill>
            </div>
          </OfCard>
        ))}

        <button style={{
          padding: 14, borderRadius: 14,
          background: 'transparent', border: `1px dashed ${t.border}`,
          color: t.text2, fontFamily: ofType.ui, fontSize: 13, fontWeight: 700,
          letterSpacing: 0.4, cursor: 'pointer',
        }}>+ Add a dependent</button>

        <OfButton dark={dark} variant="primary" size="lg"
          onClick={() => goto('p-home')}
          style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
          Open my folder
        </OfButton>
      </div>
    </OfPhone>
  );
}

// ─── 05 Patient Home ───
function OfScreenPHome({ dark, goto }) {
  const t = ofTheme(dark);
  const p = ofSamplePatient;
  return (
    <OfPhone dark={dark} label="05 Home">
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 22px 24px',
                    display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <OfAvatar name={p.name} dark={dark} size={48} />
          <div style={{ flex: 1 }}>
            <div style={ofLabel({ size: 9.5, color: t.text3, track: 1.2 })}>Sawubona</div>
            <div style={{
              fontFamily: ofType.display, fontSize: 22, fontWeight: 800,
              color: t.text1, letterSpacing: -0.4, lineHeight: 1.1, marginTop: 2,
            }}>{"Mam' Sibongile"}</div>
          </div>
          <button style={{
            width: 40, height: 40, borderRadius: 12,
            background: t.chipBg, border: 'none', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
          }}>👥</button>
        </div>

        <OfHprnBadge dark={dark} hprn={p.hprn} />

        {/* Next appointment */}
        <OfCard dark={dark} padding={18}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <OfSectionLabel dark={dark}>Next appointment</OfSectionLabel>
            <OfPill dark={dark} color="aloe">Confirmed</OfPill>
          </div>
          <div style={{
            fontFamily: ofType.display, fontSize: 22, fontWeight: 800,
            color: t.text1, letterSpacing: -0.4, marginTop: 8,
          }}>Wed 6 May · 09:30</div>
          <div style={{ fontFamily: ofType.ui, fontSize: 13, color: t.text2, marginTop: 4 }}>
            Chiawelo CHC · HTN/T2D follow-up · Sister Lerato (rotating)
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
            <OfButton dark={dark} variant="primary" size="sm" onClick={() => goto('p-walkin')}>
              Open QR
            </OfButton>
            <OfButton dark={dark} variant="ghost" size="sm">Reschedule</OfButton>
          </div>
        </OfCard>

        {/* Script ready */}
        <OfCard dark={dark} padding={18} style={{
          background: dark ? 'rgba(255,122,77,0.10)' : 'rgba(255,122,77,0.08)',
          border: `1px solid ${dark ? 'rgba(255,122,77,0.4)' : 'rgba(255,122,77,0.3)'}`,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <OfSectionLabel dark={dark} color={ofTokens.sun500}>CCMDD · Script ready</OfSectionLabel>
            <OfPill dark={dark} color="sun">Today</OfPill>
          </div>
          <div style={{
            fontFamily: ofType.display, fontSize: 19, fontWeight: 800,
            color: t.text1, letterSpacing: -0.3, marginTop: 8,
          }}>Amlodipine · Metformin · Atorvastatin</div>
          <div style={{ fontFamily: ofType.ui, fontSize: 12.5, color: t.text2, marginTop: 4 }}>
            Chiawelo Pickup Point · Open until 18:00
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
            <OfButton dark={dark} variant="accent" size="sm" onClick={() => goto('p-walkin')}>
              Show pickup QR
            </OfButton>
            <OfButton dark={dark} variant="ghost" size="sm">Directions</OfButton>
          </div>
        </OfCard>

        {/* Access log preview */}
        <OfCard dark={dark} padding={16}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <OfSectionLabel dark={dark}>Folder access · this month</OfSectionLabel>
              <div style={{ fontFamily: ofType.ui, fontSize: 13, color: t.text2 }}>
                3 viewers · all at Chiawelo CHC
              </div>
            </div>
            <button onClick={() => goto('p-access')}
              style={{
                background: 'transparent', border: 'none', cursor: 'pointer',
                color: t.primary, fontFamily: ofType.ui, fontSize: 12.5, fontWeight: 700,
              }}>See all →</button>
          </div>
        </OfCard>
      </div>
      <OfPatientTabBar dark={dark} active="home" onTab={(k) => {
        if (k === 'find') goto('p-find');
        if (k === 'record') goto('p-record');
      }} />
    </OfPhone>
  );
}

// ─── 06 Find a Clinic ───
function OfScreenFind({ dark, goto }) {
  const t = ofTheme(dark);
  const filters = ['Open now', 'In stock', 'Short queue', 'On power'];
  const clinics = [
    {
      name: 'Chiawelo CHC',  dist: '0.4 km', hrs: 'Open · 18:00',
      queue: 14, wait: 22, power: true, stock: 'in', stockLabel: 'Insulin · Atorvastatin',
      best: true,
    },
    {
      name: 'Soweto Day Hospital', dist: '2.1 km', hrs: 'Open · 21:00',
      queue: 38, wait: 72, power: true, stock: 'low', stockLabel: 'Atorvastatin low',
    },
    {
      name: 'Diepkloof Clinic', dist: '3.0 km', hrs: 'Closed · opens 07:00',
      queue: 0, wait: 0, power: true, stock: 'in', stockLabel: '—',
      closed: true,
    },
  ];
  return (
    <OfPhone dark={dark} label="06 Find a Clinic">
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Stylised map header */}
        <div style={{
          height: 200, position: 'relative', overflow: 'hidden',
          background: dark
            ? 'radial-gradient(circle at 30% 40%, rgba(46,125,91,0.25), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,122,77,0.18), transparent 60%), #0F1815'
            : 'radial-gradient(circle at 30% 40%, rgba(46,125,91,0.18), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,122,77,0.12), transparent 60%), #FCF7EE',
        }}>
          {/* Grid */}
          <svg width="100%" height="100%" viewBox="0 0 390 200" preserveAspectRatio="none"
               style={{ position: 'absolute', inset: 0, opacity: dark ? 0.18 : 0.20 }}>
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 16} x2="390" y2={i * 16}
                    stroke={dark ? '#FCF7EE' : '#1A1410'} strokeWidth="0.4" />
            ))}
            {Array.from({ length: 26 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 16} y1="0" x2={i * 16} y2="200"
                    stroke={dark ? '#FCF7EE' : '#1A1410'} strokeWidth="0.4" />
            ))}
          </svg>
          {/* Clinic pins */}
          <div style={{
            position: 'absolute', top: 90, left: 80,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          }}>
            <div style={{
              width: 18, height: 18, borderRadius: '50%', background: t.primary,
              boxShadow: `0 0 0 6px ${dark ? 'rgba(46,125,91,0.25)' : 'rgba(46,125,91,0.20)'}`,
            }} />
            <div style={{
              fontFamily: ofType.ui, fontSize: 9, fontWeight: 700, color: t.text1,
              textShadow: dark ? '0 1px 2px rgba(0,0,0,0.6)' : '0 1px 2px rgba(255,255,255,0.6)',
            }}>Chiawelo CHC</div>
          </div>
          <div style={{
            position: 'absolute', top: 50, left: 230,
            width: 12, height: 12, borderRadius: '50%', background: ofTokens.sun500, opacity: 0.8,
          }} />
          <div style={{
            position: 'absolute', top: 130, left: 290,
            width: 12, height: 12, borderRadius: '50%', background: t.text3, opacity: 0.5,
          }} />
          {/* You-are-here */}
          <div style={{
            position: 'absolute', top: 140, left: 30,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <div style={{
              width: 12, height: 12, borderRadius: '50%', background: '#3B82F6',
              boxShadow: '0 0 0 5px rgba(59,130,246,0.25)',
            }} />
            <div style={ofLabel({ size: 9, color: t.text2, track: 1.2 })}>You are here</div>
          </div>
        </div>

        <div style={{ padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1, overflowY: 'auto' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {filters.map((f, i) => (
              <span key={f} style={{
                padding: '7px 12px', borderRadius: 999,
                fontFamily: ofType.ui, fontSize: 11.5, fontWeight: 700,
                background: i === 0 ? t.primary : t.chipBg,
                color: i === 0 ? '#FFFFFF' : t.text2,
                border: i === 0 ? 'none' : `1px solid ${t.border}`,
              }}>{f}</span>
            ))}
          </div>

          {clinics.map(c => (
            <OfCard key={c.name} dark={dark} padding={16} style={{
              opacity: c.closed ? 0.6 : 1,
              border: c.best ? `1.5px solid ${t.primary}` : `1px solid ${t.border}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: ofType.ui, fontSize: 15, fontWeight: 800, color: t.text1,
                  }}>{c.name}</div>
                  <div style={{ fontFamily: ofType.ui, fontSize: 12, color: t.text3, marginTop: 2 }}>
                    {c.dist} · {c.hrs}
                  </div>
                </div>
                {c.best && <OfPill dark={dark} color="aloe">Best match</OfPill>}
              </div>
              {!c.closed && (
                <div style={{ display: 'flex', gap: 16, marginTop: 12, flexWrap: 'wrap' }}>
                  <Stat label="In queue" value={c.queue} dark={dark} />
                  <Stat label="Wait" value={`${c.wait}min`} dark={dark} />
                  <Stat label="Power" value={c.power ? '✓ on' : '✕ off'} dark={dark} />
                </div>
              )}
              <div style={{ display: 'flex', gap: 6, marginTop: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                {c.stock !== 'in' && c.stockLabel !== '—' ? (
                  <OfStockPill stock={c.stock} dark={dark} />
                ) : c.stockLabel !== '—' && <OfPill dark={dark} color="aloe">{c.stockLabel} · in stock</OfPill>}
              </div>
              {c.best && (
                <OfButton dark={dark} variant="primary" size="sm"
                  onClick={() => goto('p-book')}
                  style={{ marginTop: 12 }}>
                  Book here →
                </OfButton>
              )}
            </OfCard>
          ))}
        </div>
      </div>
      <OfPatientTabBar dark={dark} active="find" onTab={(k) => {
        if (k === 'home') goto('p-home');
        if (k === 'record') goto('p-record');
      }} />
    </OfPhone>
  );
}

function Stat({ label, value, dark }) {
  const t = ofTheme(dark);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={ofLabel({ size: 9, color: t.text3, track: 1.2 })}>{label}</span>
      <span style={{
        fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1,
      }}>{value}</span>
    </div>
  );
}

Object.assign(window, {
  OfScreenSplash, OfScreenIdentity, OfScreenVoice,
  OfScreenDependent, OfScreenPHome, OfScreenFind,
});

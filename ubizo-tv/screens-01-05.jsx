// Ubizo TV — Screens 01–05 (Onboard & Home)

// ─────────────────── 01. SPLASH ───────────────────
function ScreenSplash({ dark = true, onNext }) {
  const t = ubzTheme(dark);
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      background: t.bg, overflow: 'hidden',
    }}>
      {/* full-bleed dawn gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: ubzDawnGradient,
        opacity: dark ? 0.85 : 1,
      }} />
      {/* hero photography wash — choir at sunrise */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${ubzPhotos.heroBanner})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        mixBlendMode: dark ? 'multiply' : 'multiply',
        opacity: dark ? 0.55 : 0.45,
      }} />
      {/* warm vignette to keep wordmark legible */}
      <div style={{
        position: 'absolute', inset: 0,
        background: dark
          ? 'radial-gradient(ellipse at center, transparent 30%, rgba(26,15,10,0.75) 100%)'
          : 'radial-gradient(ellipse at center, transparent 35%, rgba(255,251,246,0.4) 100%)',
      }} />
      <UbzGrain opacity={dark ? 0.18 : 0.1} />

      {/* Top corner tag */}
      <div style={{
        position: 'absolute', top: 70, left: 24, right: 24, zIndex: 5,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={ubzLabel({ size: 11, color: '#FFFBF6', track: 1.8 })}>
          Genesis 1 : 3
        </div>
        <div style={ubzLabel({ size: 11, color: 'rgba(255,251,231,0.75)', track: 1.4 })}>
          Sunday · 6:00
        </div>
      </div>

      {/* Center logo */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', zIndex: 5, padding: '0 24px',
      }}>
        <UbzLogo size={200} dark={true} showTag={true} />
      </div>

      {/* Bottom loader + tap-to-enter */}
      <div style={{
        position: 'absolute', bottom: 64, left: 0, right: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, zIndex: 5,
      }}>
        <div style={{
          width: 120, height: 2, borderRadius: 999,
          background: 'rgba(255,251,231,0.2)',
          overflow: 'hidden', position: 'relative',
        }}>
          <div style={{
            position: 'absolute', height: '100%', background: '#FFFBF6',
            animation: 'ubzLoader 2.2s ease-in-out infinite', width: '40%',
          }} />
        </div>
        <button onClick={onNext} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          ...ubzLabel({ size: 11, color: '#FFFBF6', track: 2 }),
        }}>Tap to answer the call</button>
      </div>

      <style>{`
        @keyframes ubzLoader { 0% { left: -40%; } 100% { left: 100%; } }
      `}</style>
    </div>
  );
}

// ─────────────────── 02. WELCOME ───────────────────
function ScreenWelcome({ dark = true, onNext, onSkip }) {
  const t = ubzTheme(dark);
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      background: t.bg, display: 'flex', flexDirection: 'column',
    }}>
      {/* hero image — ~58% */}
      <div style={{
        height: '58%', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${ubzPhotos.heroProfile})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: dark ? 'brightness(0.75) contrast(1.05)' : 'brightness(1.0)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to bottom, transparent 50%, ${t.bg} 100%)`,
        }} />
        <UbzGrain opacity={0.12} />

        <button onClick={onSkip} style={{
          position: 'absolute', top: 60, right: 20, background: 'none', border: 'none',
          cursor: 'pointer', zIndex: 10,
          ...ubzLabel({ size: 11, color: '#FFFBF6', track: 1.6 }),
        }}>Skip →</button>

        <div style={{
          position: 'absolute', top: 62, left: 24, display: 'flex', gap: 4, zIndex: 10,
        }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: 24, height: 3, borderRadius: 2,
              background: i === 0 ? '#FFFBF6' : 'rgba(255,251,231,0.25)',
            }} />
          ))}
        </div>
      </div>

      {/* content */}
      <div style={{
        flex: 1, padding: '8px 24px 110px',
        display: 'flex', flexDirection: 'column', position: 'relative',
      }}>
        <div style={ubzLabel({ size: 11, color: ubzTokens.orange500, track: 2 })}>The Calling · 01 / 03</div>
        <h1 style={{
          fontFamily: ubzType.display, fontWeight: 700, fontSize: 38, lineHeight: 1.05,
          letterSpacing: -1.2, color: t.text1, margin: '10px 0 14px',
          textWrap: 'balance',
        }}>Gospel is not a <span style={{ fontFamily: ubzType.editorial, fontStyle: 'italic', fontWeight: 500 }}>genre</span> here.</h1>
        <p style={{
          fontFamily: ubzType.ui, fontSize: 15, lineHeight: 1.55,
          color: t.text2, margin: 0,
        }}>It's a calling. Ubizo TV is where South Africa's choirs, pastors, and faith communities live on demand — at any hour, on any carrier.</p>

        <div style={{ flex: 1 }} />
        <div style={{
          position: 'absolute', bottom: 36, left: 24, right: 24,
        }}>
          <UbzButton label="Next" onClick={onNext} dark={dark} trailing={
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12m-4-4l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          } />
        </div>
      </div>
    </div>
  );
}

// ─────────────────── 03. CARRIER SUBSCRIBE ───────────────────
function ScreenSubscribe({ dark = true, onBack, onContinue }) {
  const t = ubzTheme(dark);
  const [carrier, setCarrier] = React.useState('mtn');
  const [tier, setTier] = React.useState('weekly');

  const carriers = [
    { key: 'cellc',  name: 'Cell C',  swatch: '#000000' },
    { key: 'mtn',    name: 'MTN',     swatch: '#FFCC00' },
    { key: 'telkom', name: 'Telkom',  swatch: '#00A0E3' },
  ];

  const tiers = [
    { key: 'daily',   label: 'Daily',   price: 'R5',  per: 'per day',  meta: 'Try the calling. Cancel any time.' },
    { key: 'weekly',  label: 'Weekly',  price: 'R29', per: 'per week', meta: 'Most popular. Auto-renew.', badge: 'Most chosen' },
    { key: 'monthly', label: 'Monthly', price: 'R99', per: 'per month', meta: 'Save R17 vs weekly.' },
  ];

  return (
    <div style={{
      width: '100%', height: '100%', background: t.bg,
      display: 'flex', flexDirection: 'column',
      padding: '64px 24px 40px', boxSizing: 'border-box',
      position: 'relative',
    }}>
      <button onClick={onBack} style={{
        background: 'none', border: `1px solid ${t.border}`, borderRadius: 999,
        width: 40, height: 40, cursor: 'pointer', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path d="M13 7H1m4-4L1 7l4 4" stroke={t.text1} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <div style={{ display: 'flex', gap: 4, marginTop: 24 }}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            width: 24, height: 3, borderRadius: 2,
            background: i <= 1 ? ubzTokens.orange500 : (dark ? 'rgba(255,251,231,0.15)' : 'rgba(42,14,9,0.1)'),
          }} />
        ))}
      </div>

      <div style={{ marginTop: 24 }}>
        <div style={ubzLabel({ size: 11, color: t.text3, track: 2 })}>Step 02 / 03</div>
        <h1 style={{
          fontFamily: ubzType.display, fontWeight: 700, fontSize: 38, lineHeight: 1.0,
          letterSpacing: -1.2, color: t.text1, margin: '10px 0 8px',
        }}>Carrier-billed.<br/>No card needed.</h1>
        <p style={{
          fontFamily: ubzType.ui, fontSize: 14, lineHeight: 1.5,
          color: t.text2, margin: '12px 0 0',
        }}>Pick your network. We charge directly to your airtime.</p>
      </div>

      {/* carriers */}
      <div style={{ marginTop: 18, display: 'flex', gap: 8 }}>
        {carriers.map(c => {
          const sel = carrier === c.key;
          return (
            <button key={c.key} onClick={() => setCarrier(c.key)} style={{
              flex: 1, padding: '14px 8px', borderRadius: 14,
              border: `1.5px solid ${sel ? ubzTokens.orange500 : t.border}`,
              background: sel ? 'rgba(232,90,28,0.06)' : t.surface,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              cursor: 'pointer', transition: 'all 150ms',
            }}>
              <div style={{
                width: 24, height: 24, borderRadius: 6, background: c.swatch,
                border: c.swatch === '#FFCC00' ? '1px solid rgba(0,0,0,0.1)' : 'none',
              }} />
              <span style={{
                fontFamily: ubzType.ui, fontSize: 12, fontWeight: 700,
                color: sel ? t.text1 : t.text2,
              }}>{c.name}</span>
            </button>
          );
        })}
      </div>

      {/* tiers */}
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {tiers.map(p => {
          const sel = tier === p.key;
          return (
            <div key={p.key} onClick={() => setTier(p.key)} style={{
              padding: '14px 16px', borderRadius: 14,
              border: `1.5px solid ${sel ? ubzTokens.orange500 : t.border}`,
              background: sel ? 'rgba(232,90,28,0.06)' : t.surface,
              display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
              transition: 'all 150ms', position: 'relative',
            }}>
              <div style={{
                width: 20, height: 20, borderRadius: 999,
                border: `1.5px solid ${sel ? ubzTokens.orange500 : t.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {sel && <div style={{ width: 10, height: 10, borderRadius: 999, background: ubzTokens.orange500 }} />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap',
                }}>
                  <span style={{
                    fontFamily: ubzType.display, fontSize: 17, fontWeight: 700,
                    color: t.text1, letterSpacing: -0.3,
                  }}>{p.label}</span>
                  {p.badge && <UbzChip variant="orange" dark={dark} style={{ padding: '3px 8px', fontSize: 9 }}>{p.badge}</UbzChip>}
                </div>
                <div style={{
                  fontFamily: ubzType.ui, fontSize: 12, color: t.text3, marginTop: 2,
                }}>{p.meta}</div>
              </div>
              <div style={{
                fontFamily: ubzType.display, fontSize: 22, fontWeight: 700,
                color: sel ? ubzTokens.orange500 : t.text1, letterSpacing: -0.6, lineHeight: 1,
              }}>
                {p.price}
                <div style={{
                  fontFamily: ubzType.ui, fontSize: 10, fontWeight: 500,
                  color: t.text3, letterSpacing: 0, marginTop: 2, textAlign: 'right',
                }}>{p.per}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ flex: 1 }} />

      <UbzButton label="Subscribe via airtime" onClick={onContinue} dark={dark} />
      <p style={{
        marginTop: 12, textAlign: 'center',
        fontFamily: ubzType.ui, fontSize: 11, lineHeight: 1.5, color: t.text3,
      }}>You'll get a confirmation SMS from your network. Cancel any time by replying STOP.</p>
    </div>
  );
}

// ─────────────────── 04. PROFILE SETUP ───────────────────
function ScreenProfileSetup({ dark = true, onBack, onContinue }) {
  const t = ubzTheme(dark);
  const [lang, setLang] = React.useState('isizulu');
  const [picks, setPicks] = React.useState(new Set(['church', 'clap']));

  const langs = [
    { key: 'english',  label: 'English' },
    { key: 'isizulu',  label: 'isiZulu' },
    { key: 'sesotho',  label: 'Sesotho' },
    { key: 'setswana', label: 'Setswana' },
    { key: 'isixhosa', label: 'isiXhosa' },
  ];

  const togglePick = (k) => {
    const next = new Set(picks);
    if (next.has(k)) next.delete(k); else next.add(k);
    setPicks(next);
  };

  return (
    <div style={{
      width: '100%', height: '100%', background: t.bg,
      padding: '64px 24px 40px', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', position: 'relative',
    }}>
      <button onClick={onBack} style={{
        background: 'none', border: `1px solid ${t.border}`, borderRadius: 999,
        width: 40, height: 40, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path d="M13 7H1m4-4L1 7l4 4" stroke={t.text1} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <div style={{ display: 'flex', gap: 4, marginTop: 24 }}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            width: 24, height: 3, borderRadius: 2, background: ubzTokens.orange500,
          }} />
        ))}
      </div>

      <div style={{ marginTop: 24 }}>
        <div style={ubzLabel({ size: 11, color: t.text3, track: 2 })}>Step 03 / 03</div>
        <h1 style={{
          fontFamily: ubzType.display, fontWeight: 700, fontSize: 38, lineHeight: 1.0,
          letterSpacing: -1.2, color: t.text1, margin: '10px 0 8px',
        }}>How you<br/>worship.</h1>
        <p style={{
          fontFamily: ubzType.ui, fontSize: 14, lineHeight: 1.5,
          color: t.text2, margin: '12px 0 0',
        }}>Pick your language and the gospel you carry. We'll tune your home from here.</p>
      </div>

      {/* Language */}
      <div style={{ marginTop: 22 }}>
        <div style={ubzLabel({ size: 10, color: t.text3, track: 1.6 })}>Language</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
          {langs.map(l => {
            const sel = lang === l.key;
            return (
              <button key={l.key} onClick={() => setLang(l.key)} style={{
                padding: '10px 14px', borderRadius: 999,
                border: `1.5px solid ${sel ? ubzTokens.orange500 : t.border}`,
                background: sel ? ubzTokens.orange500 : 'transparent',
                color: sel ? '#fff' : t.text1,
                fontFamily: ubzType.ui, fontSize: 13, fontWeight: 600,
                cursor: 'pointer',
              }}>{l.label}</button>
            );
          })}
        </div>
      </div>

      {/* Content prefs */}
      <div style={{ marginTop: 22 }}>
        <div style={ubzLabel({ size: 10, color: t.text3, track: 1.6 })}>What you watch</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
          {ubzVerticals.map(v => {
            const sel = picks.has(v.key);
            return (
              <div key={v.key} onClick={() => togglePick(v.key)} style={{
                position: 'relative', borderRadius: 14, overflow: 'hidden',
                aspectRatio: '1.4', cursor: 'pointer',
                border: `1.5px solid ${sel ? ubzTokens.orange500 : 'transparent'}`,
                transition: 'all 150ms',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${ubzPhotos[v.banner]})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  filter: sel ? 'none' : 'brightness(0.6) saturate(0.7)',
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(26,15,10,0.85) 0%, rgba(26,15,10,0) 60%)',
                }} />
                <div style={{
                  position: 'absolute', bottom: 8, left: 10, right: 10,
                  fontFamily: ubzType.display, fontSize: 13, fontWeight: 700,
                  color: '#FFFBF6', letterSpacing: -0.2,
                }}>{v.name}</div>
                {sel && (
                  <div style={{
                    position: 'absolute', top: 8, right: 8,
                    width: 22, height: 22, borderRadius: 999,
                    background: ubzTokens.orange500, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-7" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ flex: 1 }} />
      <UbzButton label="Enter Ubizo" onClick={onContinue} dark={dark} />
    </div>
  );
}

// ─────────────────── 05. HOME ───────────────────
function ScreenHome({ dark = true, goto, setTab }) {
  const t = ubzTheme(dark);
  const flagship = ubzArtists.find(a => a.flagship);
  return (
    <div style={{
      width: '100%', height: '100%', background: t.bg,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        height: '100%', overflowY: 'auto', overflowX: 'hidden',
        paddingBottom: 100,
      }}>
        {/* top bar */}
        <div style={{
          padding: '60px 20px 8px', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <UbzMarkInline dark={dark} />
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '6px 12px', borderRadius: 999,
            background: 'rgba(232,90,28,0.12)', border: '1px solid rgba(232,90,28,0.3)',
          }}>
            <UbzLiveDot size={6} />
            <span style={ubzLabel({ size: 11, color: ubzTokens.orange500, track: 1.2 })}>On Now · Service</span>
          </div>
        </div>

        {/* Greeting */}
        <div style={{ padding: '14px 20px 0' }}>
          <div style={ubzLabel({ size: 10, color: t.text3, track: 1.6 })}>Sunday · 6:00 am</div>
          <div style={{
            fontFamily: ubzType.display, fontSize: 30, fontWeight: 700,
            letterSpacing: -1, color: t.text1, marginTop: 6,
          }}>Morning, Dominic.</div>
        </div>

        {/* Verse of the day */}
        <div style={{ padding: '14px 20px 0' }}>
          <div style={{
            padding: '14px 16px', borderRadius: 16,
            background: dark ? 'rgba(224,161,59,0.08)' : 'rgba(224,161,59,0.1)',
            border: `1px solid ${dark ? 'rgba(224,161,59,0.25)' : 'rgba(224,161,59,0.3)'}`,
            display: 'flex', alignItems: 'flex-start', gap: 12,
          }}>
            <div style={{
              fontFamily: ubzType.editorial, fontSize: 28, fontWeight: 600,
              color: ubzTokens.gold500, lineHeight: 0.8, fontStyle: 'italic',
            }}>"</div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: ubzType.editorial, fontSize: 14, lineHeight: 1.5,
                color: t.text1, fontStyle: 'italic',
              }}>And God said, Let there be light: and there was light.</div>
              <div style={{
                ...ubzLabel({ size: 10, color: ubzTokens.gold500, track: 1.4 }),
                marginTop: 6,
              }}>Genesis 1 : 3 · Verse of the day</div>
            </div>
          </div>
        </div>

        {/* Hero ON NOW card */}
        <div style={{ padding: '16px 20px 0' }}>
          <div onClick={() => goto('player')} style={{
            position: 'relative', borderRadius: 22, overflow: 'hidden',
            background: '#000', aspectRatio: '0.95', cursor: 'pointer',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${ubzPhotos.vChurchBanner})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              filter: 'brightness(0.6) contrast(1.05)',
            }} />
            <UbzGrain opacity={0.12} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.85) 100%)',
            }} />

            <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', gap: 6 }}>
              <UbzChip variant="live" dark>
                <UbzLiveDot size={6} style={{ background: '#fff', boxShadow: '0 0 6px #fff' }} />
                Live · Sunday Service
              </UbzChip>
            </div>
            <div style={{ position: 'absolute', top: 14, right: 14 }}>
              <div style={{
                ...ubzLabel({ size: 10, color: 'rgba(255,251,231,0.85)', track: 1.4 }),
                display: 'flex', alignItems: 'center', gap: 6,
              }}>2,184 watching</div>
            </div>

            <div style={{
              position: 'absolute', left: 18, bottom: 18, right: 18, color: '#FFFBF6',
            }}>
              <div style={ubzLabel({ size: 10, color: ubzTokens.orange300, track: 1.8 })}>Old Areka Apostolic Church</div>
              <div style={{
                fontFamily: ubzType.display, fontSize: 28, fontWeight: 700,
                lineHeight: 1.05, letterSpacing: -0.8, marginTop: 6,
              }}>The Light of<br/>the Morning.</div>
              <div style={{
                marginTop: 10, display: 'flex', gap: 10, alignItems: 'center',
                fontFamily: ubzType.ui, fontSize: 12, color: 'rgba(255,251,231,0.85)',
              }}>
                <span>Service · 1h 24m</span>
                <span>·</span>
                <span>Sermon ▸ Altar Call</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div style={{ padding: '14px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <UbzButton label="Watch Now" onClick={() => goto('player')} dark={dark} />
          <UbzButton label="Set Reminder · Next Service" variant="secondary" onClick={() => goto('schedule')} dark={dark} />
        </div>

        {/* Continue watching */}
        <div style={{ padding: '24px 20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <span style={ubzLabel({ size: 11, color: t.text3, track: 2 })}>Continue watching</span>
            <span style={{ fontFamily: ubzType.ui, fontSize: 12, color: t.text2, textDecoration: 'underline' }}>Open downloads</span>
          </div>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto' }}>
            {[
              { src: ubzPhotos.aIsolomziBanner, name: 'Isolomzi Gospel', meta: '23 min left' },
              { src: ubzPhotos.aMamelodiBanner, name: 'Mamelodi Children', meta: '8 min left' },
              { src: ubzPhotos.aMahlaelaBanner, name: 'Prof Mahlaela',   meta: '41 min left' },
            ].map((c, i) => (
              <div key={i} style={{
                flexShrink: 0, width: 200, borderRadius: 14, overflow: 'hidden',
                background: t.surface, border: `1px solid ${t.border}`,
              }}>
                <div style={{
                  height: 110, position: 'relative',
                  backgroundImage: `url(${c.src})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                }}>
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
                    background: 'rgba(255,251,231,0.2)',
                  }}>
                    <div style={{
                      width: `${30 + i * 25}%`, height: '100%', background: ubzTokens.orange500,
                    }} />
                  </div>
                </div>
                <div style={{ padding: '10px 12px' }}>
                  <div style={{
                    fontFamily: ubzType.ui, fontSize: 13, fontWeight: 600, color: t.text1,
                  }}>{c.name}</div>
                  <div style={{
                    fontFamily: ubzType.ui, fontSize: 11, color: t.text3, marginTop: 2,
                  }}>{c.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured artist */}
        <div style={{ padding: '24px 20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <span style={ubzLabel({ size: 11, color: t.text3, track: 2 })}>Featured artist</span>
            <span onClick={() => goto('artists')} style={{ fontFamily: ubzType.ui, fontSize: 12, color: t.text2, textDecoration: 'underline', cursor: 'pointer' }}>All artists →</span>
          </div>
          <div onClick={() => goto('artist')} style={{
            position: 'relative', borderRadius: 18, overflow: 'hidden',
            background: '#000', height: 180, cursor: 'pointer',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${ubzPhotos[flagship.banner]})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              filter: 'brightness(0.55) saturate(1.05)',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)',
            }} />
            <div style={{
              position: 'absolute', left: 18, top: 0, bottom: 0,
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              maxWidth: '70%', color: '#FFFBF6',
            }}>
              <UbzChip variant="gold" dark style={{ alignSelf: 'flex-start', marginBottom: 10 }}>40 years · 7 SAMAs</UbzChip>
              <div style={{
                fontFamily: ubzType.display, fontSize: 24, fontWeight: 700,
                letterSpacing: -0.6, lineHeight: 1.1,
              }}>{flagship.name}</div>
              <div style={{
                fontFamily: ubzType.ui, fontSize: 12, color: 'rgba(255,251,231,0.8)',
                marginTop: 6, lineHeight: 1.5,
              }}>{flagship.bio}</div>
            </div>
          </div>
        </div>

        {/* Verticals strip */}
        <div style={{ padding: '24px 20px 28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <span style={ubzLabel({ size: 11, color: t.text3, track: 2 })}>Browse</span>
            <span onClick={() => goto('browse')} style={{ fontFamily: ubzType.ui, fontSize: 12, color: t.text2, textDecoration: 'underline', cursor: 'pointer' }}>All verticals →</span>
          </div>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto' }}>
            {ubzVerticals.map(v => (
              <div key={v.key} onClick={() => goto('browse')} style={{
                flexShrink: 0, width: 130, height: 130, borderRadius: 14,
                position: 'relative', overflow: 'hidden', cursor: 'pointer',
                backgroundImage: `url(${ubzPhotos[v.banner]})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(26,15,10,0.85) 0%, rgba(26,15,10,0) 55%)',
                }} />
                <div style={{
                  position: 'absolute', bottom: 10, left: 10, right: 10,
                  fontFamily: ubzType.display, fontSize: 13, fontWeight: 700,
                  color: '#FFFBF6', letterSpacing: -0.2, lineHeight: 1.15,
                }}>{v.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <UbzBottomNav active="home" dark={dark} onTab={setTab} />
    </div>
  );
}

Object.assign(window, {
  ScreenSplash, ScreenWelcome, ScreenSubscribe, ScreenProfileSetup, ScreenHome,
});

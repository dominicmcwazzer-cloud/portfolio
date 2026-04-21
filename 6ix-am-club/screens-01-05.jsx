// 6ix AM Club — Screens 01–05

// ─────────────────── 01. SPLASH ───────────────────
function ScreenSplash({ dark = true, onNext }) {
  const t = sixTheme(dark);
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      background: t.bg, overflow: 'hidden',
    }}>
      {/* full-bleed motion-blur hero */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${sixPhotos.splash})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: dark ? 'brightness(0.55) contrast(1.1) saturate(0.85)' : 'brightness(0.95) contrast(1.05)',
      }} />
      {/* vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: dark
          ? 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)'
          : 'radial-gradient(ellipse at center, transparent 40%, rgba(250,250,250,0.7) 100%)',
      }} />
      <SixGrain opacity={dark ? 0.18 : 0.1} />

      {/* Top corner tag */}
      <div style={{
        position: 'absolute', top: 70, right: 24, zIndex: 5,
        ...sixLabel({ size: 11, color: dark ? 'rgba(255,255,255,0.85)' : 'rgba(10,10,10,0.85)', track: 1.8 }),
      }}>Run Community · Mamelodi, Pretoria</div>

      {/* Center logo */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', zIndex: 5,
      }}>
        <SixLogo size={180} dark={dark} />
      </div>

      {/* Bottom loader + tap-to-enter */}
      <div style={{
        position: 'absolute', bottom: 64, left: 0, right: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, zIndex: 5,
      }}>
        <div style={{
          width: 120, height: 2, borderRadius: 999,
          background: dark ? 'rgba(255,255,255,0.15)' : 'rgba(10,10,10,0.15)',
          overflow: 'hidden', position: 'relative',
        }}>
          <div style={{
            position: 'absolute', height: '100%', background: sixTokens.route,
            animation: 'sixLoader 2.2s ease-in-out infinite', width: '40%',
          }} />
        </div>
        <button onClick={onNext} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          ...sixLabel({ size: 11, color: dark ? 'rgba(255,255,255,0.7)' : 'rgba(10,10,10,0.7)', track: 2 }),
        }}>Tap to enter</button>
      </div>

      <style>{`
        @keyframes sixLoader {
          0% { left: -40%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}

// ─────────────────── 02. MISSION ───────────────────
function ScreenMission({ dark = true, onNext, onSkip }) {
  const t = sixTheme(dark);
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      background: t.bg, display: 'flex', flexDirection: 'column',
    }}>
      {/* hero image — 60% */}
      <div style={{
        height: '58%', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${sixPhotos.mission})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: dark ? 'brightness(0.7) contrast(1.05)' : 'brightness(1.0)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to bottom, transparent 50%, ${t.bg} 100%)`,
        }} />
        <SixGrain opacity={0.12} />

        {/* skip */}
        <button onClick={onSkip} style={{
          position: 'absolute', top: 60, right: 20, background: 'none', border: 'none',
          cursor: 'pointer', zIndex: 10,
          ...sixLabel({ size: 11, color: '#fff', track: 1.6 }),
        }}>Skip →</button>

        {/* step indicator */}
        <div style={{
          position: 'absolute', top: 62, left: 24, display: 'flex', gap: 4, zIndex: 10,
        }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: 24, height: 3, borderRadius: 2,
              background: i === 0 ? '#fff' : 'rgba(255,255,255,0.25)',
            }} />
          ))}
        </div>
      </div>

      {/* content */}
      <div style={{
        flex: 1, padding: '8px 24px 110px',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={sixLabel({ size: 11, color: sixTokens.route, track: 2 })}>Principle 01</div>
        <h1 style={{
          fontFamily: sixType.display, fontWeight: 700, fontSize: 40, lineHeight: 1.05,
          letterSpacing: -1.2, color: t.text1, margin: '10px 0 14px',
          textWrap: 'balance',
        }}>More than a <span style={{ fontStyle: 'italic', fontWeight: 500 }}>running</span> club.</h1>
        <p style={{
          fontFamily: sixType.ui, fontSize: 15, lineHeight: 1.55,
          color: t.text2, margin: 0,
        }}>A community built on discipline, consistency, and positive energy. From beginners to experienced — everyone's welcome.</p>

        <div style={{ flex: 1 }} />
        <div style={{
          position: 'absolute', bottom: 36, left: 24, right: 24,
        }}>
          <SixButton label="Next" onClick={onNext} dark={dark} trailing={
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12m-4-4l4 4-4 4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          } />
        </div>
      </div>
    </div>
  );
}

// ─────────────────── 03. SIGN UP ───────────────────
function ScreenSignUp({ dark = true, onBack, onContinue }) {
  const t = sixTheme(dark);
  const [phone, setPhone] = React.useState('068 170 8177');
  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    background: t.surface, border: `1.5px solid ${sixTokens.route}`,
    borderRadius: 12, padding: '18px 16px',
    fontFamily: sixType.ui, fontSize: 17, color: t.text1,
    outline: 'none',
  };
  return (
    <div style={{
      width: '100%', height: '100%', background: t.bg,
      display: 'flex', flexDirection: 'column',
      padding: '64px 24px 40px', boxSizing: 'border-box',
      position: 'relative',
    }}>
      {/* back */}
      <button onClick={onBack} style={{
        background: 'none', border: `1px solid ${t.border}`, borderRadius: 999,
        width: 40, height: 40, cursor: 'pointer', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path d="M13 7H1m4-4L1 7l4 4" stroke={t.text1} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* step indicator */}
      <div style={{ display: 'flex', gap: 4, marginTop: 24 }}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            width: 24, height: 3, borderRadius: 2,
            background: i <= 1 ? sixTokens.route : (dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'),
          }} />
        ))}
      </div>

      <div style={{ marginTop: 32 }}>
        <div style={sixLabel({ size: 11, color: t.text3, track: 2 })}>Step 02 / 03</div>
        <h1 style={{
          fontFamily: sixType.display, fontWeight: 700, fontSize: 44, lineHeight: 1.0,
          letterSpacing: -1.4, color: t.text1, margin: '10px 0 8px',
        }}>Join<br/>the club.</h1>
        <p style={{
          fontFamily: sixType.ui, fontSize: 15, lineHeight: 1.5,
          color: t.text2, margin: '12px 0 0',
        }}>Drop your number. We'll text you a code and see you at 6.</p>
      </div>

      <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={sixLabel({ size: 10, color: t.text3, track: 1.6 })}>Phone number</div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{
            ...inputStyle, width: 90, display: 'flex', alignItems: 'center', gap: 6,
            justifyContent: 'center', padding: '18px 10px', borderColor: t.border,
          }}>
            <span style={{ fontSize: 16 }}>🇿🇦</span>
            <span style={{ color: t.text2 }}>+27</span>
          </div>
          <input
            value={phone}
            onChange={e => setPhone(e.target.value)}
            style={{ ...inputStyle, flex: 1 }}
          />
        </div>

        {/* divider */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14, margin: '18px 0',
        }}>
          <div style={{ flex: 1, height: 1, background: t.border }} />
          <span style={sixLabel({ size: 10, color: t.text3, track: 1.4 })}>or continue with</span>
          <div style={{ flex: 1, height: 1, background: t.border }} />
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          {['Email','Apple','Google'].map(p => (
            <div key={p} style={{
              flex: 1, padding: '14px 0', textAlign: 'center',
              border: `1px solid ${t.border}`, borderRadius: 12,
              fontFamily: sixType.ui, fontSize: 13, fontWeight: 600, color: t.text1,
              cursor: 'pointer',
            }}>{p}</div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }} />

      <div>
        <SixButton label="Continue" onClick={onContinue} dark={dark} />
        <p style={{
          marginTop: 16, textAlign: 'center',
          fontFamily: sixType.ui, fontSize: 11, lineHeight: 1.5, color: t.text3,
        }}>By continuing you agree to our Terms and Privacy. No spam — we text once a week, max.</p>
      </div>
    </div>
  );
}

// ─────────────────── 04. PICK LEVEL ───────────────────
function ScreenPickLevel({ dark = true, onBack, onContinue }) {
  const t = sixTheme(dark);
  const [level, setLevel] = React.useState('intermediate');
  const levels = [
    { key: 'beginner',     title: 'Beginner',     sub: 'Just starting out',       meta: '0–10 km / week', glyph: '◐' },
    { key: 'intermediate', title: 'Intermediate', sub: 'Running most weeks',      meta: '10–30 km / week', glyph: '◑' },
    { key: 'advanced',     title: 'Advanced',     sub: 'Racing, training plans',  meta: '30+ km / week',   glyph: '●' },
  ];
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
            width: 24, height: 3, borderRadius: 2,
            background: sixTokens.route,
          }} />
        ))}
      </div>

      <div style={{ marginTop: 32 }}>
        <div style={sixLabel({ size: 11, color: t.text3, track: 2 })}>Step 03 / 03</div>
        <h1 style={{
          fontFamily: sixType.display, fontWeight: 700, fontSize: 44, lineHeight: 1.0,
          letterSpacing: -1.4, color: t.text1, margin: '10px 0 8px',
        }}>What's<br/>your pace?</h1>
        <p style={{
          fontFamily: sixType.ui, fontSize: 14, lineHeight: 1.5,
          color: t.text2, margin: '12px 0 0',
        }}>No gatekeeping. We'll match you with the right group on Saturday.</p>
      </div>

      <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {levels.map(l => {
          const sel = level === l.key;
          return (
            <div
              key={l.key}
              onClick={() => setLevel(l.key)}
              style={{
                padding: '20px 20px', borderRadius: 16,
                border: `1.5px solid ${sel ? sixTokens.route : t.border}`,
                background: sel ? 'rgba(255,90,31,0.06)' : t.surface,
                display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer',
                transition: 'all 150ms',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 999,
                background: sel ? sixTokens.route : (dark ? '#262626' : '#F5F5F5'),
                color: sel ? '#000' : t.text2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: sixType.display, fontSize: 24, fontWeight: 700,
              }}>{l.glyph}</div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: sixType.display, fontSize: 20, fontWeight: 700,
                  color: t.text1, letterSpacing: -0.4,
                }}>{l.title}</div>
                <div style={{
                  fontFamily: sixType.ui, fontSize: 13, color: t.text3, marginTop: 2,
                }}>{l.sub} · {l.meta}</div>
              </div>
              <div style={{
                width: 22, height: 22, borderRadius: 999,
                border: `1.5px solid ${sel ? sixTokens.route : t.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {sel && <div style={{
                  width: 10, height: 10, borderRadius: 999, background: sixTokens.route,
                }} />}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ flex: 1 }} />
      <SixButton label="Continue" onClick={onContinue} dark={dark} />
    </div>
  );
}

// ─────────────────── 05. HOME / NEXT RUN ───────────────────
function ScreenHome({ dark = true, goto, setTab }) {
  const t = sixTheme(dark);
  return (
    <div style={{
      width: '100%', height: '100%', background: t.bg,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* scroll area */}
      <div style={{
        height: '100%', overflowY: 'auto', overflowX: 'hidden',
        paddingBottom: 100,
      }}>
        {/* top bar — 6ix mark + streak */}
        <div style={{
          padding: '60px 20px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <SixMarkInline dark={dark} />
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '6px 12px', borderRadius: 999,
            background: 'rgba(255,90,31,0.12)', border: '1px solid rgba(255,90,31,0.3)',
          }}>
            <svg width="12" height="14" viewBox="0 0 12 14" fill={sixTokens.route}>
              <path d="M6 0S1 4 1 8a5 5 0 0010 0c0-2-1-3-1-3s-1 2-2 2 0-4-2-7z"/>
            </svg>
            <span style={{ ...sixLabel({ size: 11, color: sixTokens.route, track: 1.2 }) }}>12 wk streak</span>
          </div>
        </div>

        {/* Greeting */}
        <div style={{ padding: '18px 20px 0' }}>
          <div style={sixLabel({ size: 10, color: t.text3, track: 1.6 })}>Saturday · 5:42 am</div>
          <div style={{
            fontFamily: sixType.display, fontSize: 32, fontWeight: 700,
            letterSpacing: -1, color: t.text1, marginTop: 6,
          }}>Morning, Dominic.</div>
        </div>

        {/* Hero NEXT RUN card */}
        <div style={{ padding: '20px 20px 0' }}>
          <div style={{
            position: 'relative', borderRadius: 24, overflow: 'hidden',
            background: '#000', aspectRatio: '0.92',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${sixPhotos.event})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              filter: 'brightness(0.55) contrast(1.1)',
            }} />
            <SixGrain opacity={0.15} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 100%)',
            }} />

            {/* tag */}
            <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 6 }}>
              <SixChip variant="live" dark>Next Run · Vol.02</SixChip>
            </div>
            <div style={{ position: 'absolute', top: 16, right: 16 }}>
              <div style={{
                ...sixLabel({ size: 10, color: 'rgba(255,255,255,0.75)', track: 1.4 }),
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: 999, background: sixTokens.route, boxShadow: `0 0 8px ${sixTokens.route}` }} />
                42 going
              </div>
            </div>

            {/* Hero date */}
            <div style={{
              position: 'absolute', left: 20, bottom: 20, right: 20, color: '#fff',
            }}>
              <div style={{
                fontFamily: sixType.display,
                fontSize: 100, fontWeight: 800, lineHeight: 0.88,
                letterSpacing: -4,
              }}>02<br/>MAY</div>
              <div style={{
                marginTop: 10, display: 'flex', gap: 16, alignItems: 'baseline',
                fontFamily: sixType.ui, fontSize: 13, color: 'rgba(255,255,255,0.85)',
              }}>
                <span>5 KM · RUN/WALK</span>
                <span>·</span>
                <span>06:00</span>
                <span>·</span>
                <span>Jack Budha · Mamelodi</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div style={{ padding: '16px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <SixButton label="Join the Run — Free" onClick={() => goto('eventDetail')} dark={dark} />
          <SixButton label="View Route" variant="secondary" onClick={() => goto('eventDetail')} dark={dark} />
        </div>

        {/* This week stats */}
        <div style={{ padding: '28px 20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <span style={sixLabel({ size: 11, color: t.text3, track: 2 })}>This week</span>
            <span style={{ fontFamily: sixType.ui, fontSize: 12, color: t.text2, textDecoration: 'underline' }}>View all</span>
          </div>
          <SixCard dark={dark} pad={20}>
            <div style={{ display: 'flex', gap: 16 }}>
              <SixStat label="Distance" value="12.4" unit="km" dark={dark} />
              <div style={{ width: 1, background: t.border }} />
              <SixStat label="Avg Pace" value="5'42''" dark={dark} />
              <div style={{ width: 1, background: t.border }} />
              <SixStat label="Runs" value="3" dark={dark} />
            </div>
          </SixCard>
        </div>

        {/* Programme preview */}
        <div style={{ padding: '20px 20px 0' }}>
          <SixCard dark={dark} pad={0}>
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${t.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={sixLabel({ size: 11, color: t.text1, track: 2 })}>Programme</span>
              <span style={sixLabel({ size: 10, color: t.text3, track: 1.4 })}>Vol.02</span>
            </div>
            <div style={{ padding: '4px 0' }}>
              {[
                { t: '05:30', l: 'Coffee at Jack Budha, Mamelodi' },
                { t: '06:00', l: 'Meet & Greet' },
                { t: '06:15', l: 'Pre-run stretch' },
                { t: '06:30', l: 'Walk / Jog / Run — 5K' },
              ].map((r, i, arr) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', padding: '12px 20px',
                  borderBottom: i === arr.length - 1 ? 'none' : `1px solid ${t.border}`,
                }}>
                  <span style={{
                    fontFamily: sixType.mono, fontSize: 12, color: t.text3,
                    width: 60,
                  }}>{r.t}</span>
                  <span style={{
                    fontFamily: sixType.ui, fontSize: 14, color: t.text1, flex: 1,
                  }}>{r.l}</span>
                </div>
              ))}
            </div>
          </SixCard>
        </div>

        {/* Community feed teaser */}
        <div style={{ padding: '24px 20px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <span style={sixLabel({ size: 11, color: t.text3, track: 2 })}>From the crew</span>
            <span onClick={() => setTab('feed')} style={{ fontFamily: sixType.ui, fontSize: 12, color: t.text2, textDecoration: 'underline', cursor: 'pointer' }}>Open feed</span>
          </div>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto' }}>
            {[sixPhotos.feed1, sixPhotos.feed2, sixPhotos.feed3].map((src, i) => (
              <div key={i} style={{
                flexShrink: 0, width: 140, height: 180, borderRadius: 14,
                backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 50%)' }} />
                <div style={{
                  position: 'absolute', bottom: 8, left: 10, right: 10,
                  color: '#fff', fontFamily: sixType.ui, fontSize: 11, fontWeight: 600,
                }}>@thando_runs</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SixBottomNav active="run" dark={dark} onTab={setTab} />
    </div>
  );
}

Object.assign(window, { ScreenSplash, ScreenMission, ScreenSignUp, ScreenPickLevel, ScreenHome });

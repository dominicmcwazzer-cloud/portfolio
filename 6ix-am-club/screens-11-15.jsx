// 6ix AM Club — Screens 11–15

// ─────────────────── 11. LIVE STATS ───────────────────
// Always dark — focus mode
function ScreenLive({ goto }) {
  const [time, setTime] = React.useState(842); // seconds
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setTime(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [paused]);
  const mm = Math.floor(time / 60).toString().padStart(2, '0');
  const ss = (time % 60).toString().padStart(2, '0');
  return (
    <div style={{
      width: '100%', height: '100%', background: '#0A0A0A',
      position: 'relative', overflow: 'hidden', color: '#fff',
    }}>
      {/* ambient route glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: 460, height: 460, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,90,31,0.22), transparent 65%)',
        filter: 'blur(8px)',
      }} />

      <div style={{ padding: '60px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: sixTokens.route, boxShadow: `0 0 10px ${sixTokens.route}`, animation: 'sixPulse 1.5s ease-in-out infinite' }} />
          <span style={sixLabel({ size: 11, color: '#fff', track: 2 })}>LIVE · Vol.02</span>
        </div>
        <div style={{ fontFamily: sixType.mono, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{mm}:{ss}</div>
      </div>

      {/* Huge distance */}
      <div style={{ padding: '70px 20px 0', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div style={sixLabel({ size: 11, color: 'rgba(255,255,255,0.5)', track: 2 })}>Distance</div>
        <div style={{
          fontFamily: sixType.display, fontSize: 180, fontWeight: 800,
          letterSpacing: -10, lineHeight: 0.85, marginTop: 14,
          background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>2.8</div>
        <div style={{ marginTop: 4, fontFamily: sixType.display, fontSize: 24, fontWeight: 500, color: 'rgba(255,255,255,0.5)', letterSpacing: 2 }}>KM</div>
      </div>

      {/* mini route */}
      <div style={{ padding: '28px 20px 0', position: 'relative', zIndex: 2 }}>
        <div style={{
          position: 'relative', height: 90, borderRadius: 16, overflow: 'hidden',
          background: '#171717', border: '1px solid #262626',
        }}>
          <svg width="100%" height="100%" viewBox="0 0 350 90" preserveAspectRatio="none">
            <path d="M20 70 Q 60 30, 120 50 T 220 35 Q 260 30, 290 55" fill="none" stroke="#404040" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M20 70 Q 60 30, 120 50 T 180 42" fill="none" stroke={sixTokens.route} strokeWidth="3" strokeLinecap="round"/>
            <circle cx="180" cy="42" r="6" fill={sixTokens.route}>
              <animate attributeName="r" values="6;9;6" dur="1.5s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
      </div>

      {/* secondary stats */}
      <div style={{
        padding: '24px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
        gap: 10, position: 'relative', zIndex: 2,
      }}>
        {[
          ['Pace', "5'42''", '/ km'],
          ['BPM', '148', 'hr'],
          ['Cal', '184', 'kcal'],
        ].map(([l,v,u], i) => (
          <div key={i} style={{
            padding: 14, borderRadius: 14, background: '#171717',
            border: '1px solid #262626',
          }}>
            <div style={sixLabel({ size: 9, color: 'rgba(255,255,255,0.4)', track: 1.4 })}>{l}</div>
            <div style={{ fontFamily: sixType.display, fontSize: 24, fontWeight: 700, letterSpacing: -0.6, marginTop: 4 }}>{v}</div>
            <div style={{ fontFamily: sixType.ui, fontSize: 10, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{u}</div>
          </div>
        ))}
      </div>

      {/* pause/stop */}
      <div style={{
        position: 'absolute', bottom: 54, left: 0, right: 0,
        display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center',
      }}>
        <button onClick={() => goto('summary')} style={{
          width: 64, height: 64, borderRadius: 999, background: '#171717', border: '1px solid #262626',
          color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ width: 16, height: 16, background: '#fff', borderRadius: 3 }} />
        </button>
        <button onClick={() => setPaused(!paused)} style={{
          width: 96, height: 96, borderRadius: 999, background: sixTokens.route, border: 'none',
          color: '#000', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 0 30px rgba(255,90,31,0.5)`,
        }}>
          {paused ? (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#000"><path d="M8 5v14l11-7z"/></svg>
          ) : (
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ width: 8, height: 30, background: '#000', borderRadius: 2 }} />
              <div style={{ width: 8, height: 30, background: '#000', borderRadius: 2 }} />
            </div>
          )}
        </button>
        <div style={{ width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zm12-3a3 3 0 11-6 0 3 3 0 016 0z" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.6"/>
          </svg>
        </div>
      </div>

      <style>{`@keyframes sixPulse { 0%,100% { opacity: 1 } 50% { opacity: 0.4 } }`}</style>
    </div>
  );
}

// ─────────────────── 12. RUN SUMMARY ───────────────────
function ScreenSummary({ dark = true, goto, setTab }) {
  const t = sixTheme(dark);
  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, position: 'relative' }}>
      <div style={{ height: '100%', overflowY: 'auto', paddingBottom: 120 }}>
        <div style={{ padding: '60px 20px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={sixLabel({ size: 10, color: sixTokens.route, track: 2 })}>● Completed · 02 May</span>
          <span style={{ fontFamily: sixType.ui, fontSize: 12, color: t.text2, cursor: 'pointer' }}>Done</span>
        </div>

        <div style={{ padding: '18px 20px 0' }}>
          <h1 style={{
            fontFamily: sixType.display, fontSize: 44, fontWeight: 800, letterSpacing: -1.6,
            color: t.text1, margin: 0, lineHeight: 0.95,
          }}>Nice one.<br/>Another for the streak.</h1>
        </div>

        {/* Hero stats */}
        <div style={{ padding: '24px 20px 0' }}>
          <SixCard dark={dark} pad={20} style={{ overflow: 'hidden', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
              <div style={{ fontFamily: sixType.display, fontSize: 88, fontWeight: 800, color: t.text1, letterSpacing: -4, lineHeight: 0.9 }}>5.02</div>
              <div style={{ fontFamily: sixType.display, fontSize: 20, fontWeight: 500, color: t.text3, letterSpacing: 1 }}>KM</div>
            </div>
            <div style={{ fontFamily: sixType.ui, fontSize: 14, color: t.text2, marginTop: 4 }}>in 33 min 18 s · avg 6'38'' /km</div>
          </SixCard>
        </div>

        {/* route preview */}
        <div style={{ padding: '12px 20px 0' }}>
          <div style={{
            position: 'relative', height: 160, borderRadius: 20, overflow: 'hidden', background: '#000',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${sixPhotos.map})`,
              backgroundSize: 'cover',
              filter: dark ? 'brightness(0.45) saturate(0.3)' : 'brightness(0.9) saturate(0.5)',
            }} />
            <svg width="100%" height="100%" viewBox="0 0 390 160" style={{ position: 'absolute', inset: 0 }}>
              <path d="M40 120 Q 90 70, 160 90 T 270 60 Q 320 50, 340 110" fill="none" stroke={sixTokens.route} strokeWidth="3" strokeLinecap="round"/>
              <circle cx="40" cy="120" r="6" fill={sixTokens.route} />
              <circle cx="340" cy="110" r="6" fill="#fff" stroke={sixTokens.route} strokeWidth="3" />
            </svg>
          </div>
        </div>

        {/* stat trio */}
        <div style={{ padding: '12px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
          {[['Pace',"6'38''"],['Kcal','312'],['Elev','42m']].map(([l,v], i) => (
            <SixCard key={i} dark={dark} pad={14}>
              <div style={sixLabel({ size: 10, color: t.text3, track: 1.4 })}>{l}</div>
              <div style={{ fontFamily: sixType.display, fontSize: 22, fontWeight: 700, color: t.text1, marginTop: 4, letterSpacing: -0.4 }}>{v}</div>
            </SixCard>
          ))}
        </div>

        {/* Add photo + note */}
        <div style={{ padding: '22px 20px 0' }}>
          <div style={sixLabel({ size: 11, color: t.text3, track: 2 })}>Mark the moment</div>
          <div style={{ marginTop: 10, display: 'flex', gap: 10 }}>
            <div style={{
              width: 88, height: 88, borderRadius: 14,
              background: t.surface, border: `1.5px dashed ${t.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: t.text3, fontSize: 22,
            }}>＋</div>
            <div style={{
              flex: 1, borderRadius: 14, border: `1px solid ${t.border}`,
              background: t.surface, padding: 14,
              fontFamily: sixType.ui, fontSize: 14, color: t.text3, lineHeight: 1.4,
            }}>Add a note… <span style={{ color: t.text2 }}>"Felt good today. Thando paced me the last KM."</span></div>
          </div>
        </div>

        {/* badges earned */}
        <div style={{ padding: '22px 20px 0' }}>
          <div style={sixLabel({ size: 11, color: t.text3, track: 2 })}>New unlocks</div>
          <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
            <div style={{
              flex: 1, padding: 14, borderRadius: 14,
              background: 'rgba(255,90,31,0.08)', border: '1px solid rgba(255,90,31,0.3)',
            }}>
              <div style={{ fontFamily: sixType.display, fontSize: 20, fontWeight: 700, color: sixTokens.route }}>12 ★</div>
              <div style={{ fontFamily: sixType.ui, fontSize: 11, color: t.text2, marginTop: 2 }}>Week streak</div>
            </div>
            <div style={{
              flex: 1, padding: 14, borderRadius: 14,
              background: t.surface, border: `1px solid ${t.border}`,
            }}>
              <div style={{ fontFamily: sixType.display, fontSize: 20, fontWeight: 700, color: t.text1 }}>62 km</div>
              <div style={{ fontFamily: sixType.ui, fontSize: 11, color: t.text2, marginTop: 2 }}>Month total</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px 32px',
        background: `linear-gradient(to top, ${t.bg} 60%, rgba(0,0,0,0))`,
        display: 'flex', gap: 10,
      }}>
        <SixButton label="Share to Feed" onClick={() => setTab('feed')} dark={dark} />
      </div>
    </div>
  );
}

// ─────────────────── 13. LEADERBOARD ───────────────────
function ScreenBoard({ dark = true, setTab }) {
  const t = sixTheme(dark);
  const [range, setRange] = React.useState('week');
  const [mode, setMode] = React.useState('consistency');
  const rows = [
    { r: 1,  name: 'Thando M.',    pace: "4'52''", km: 28.4, runs: 5, you: false, a: sixPhotos.a1 },
    { r: 2,  name: 'Lebo K.',      pace: "5'10''", km: 24.1, runs: 5, you: false, a: sixPhotos.a2 },
    { r: 3,  name: 'Sipho N.',     pace: "5'28''", km: 22.8, runs: 4, you: false, a: sixPhotos.a3 },
    { r: 4,  name: 'You · Dominic', pace: "5'42''", km: 19.2, runs: 4, you: true,  a: sixPhotos.a4 },
    { r: 5,  name: 'Nandi D.',     pace: "6'04''", km: 17.6, runs: 4, you: false, a: sixPhotos.a5 },
    { r: 6,  name: 'Kabelo T.',    pace: "6'18''", km: 15.0, runs: 3, you: false, a: sixPhotos.a6 },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, position: 'relative' }}>
      <div style={{ height: '100%', overflowY: 'auto', paddingBottom: 100 }}>
        <div style={{ padding: '60px 20px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SixMarkInline dark={dark} />
        </div>

        <div style={{ padding: '10px 20px 0' }}>
          <h1 style={{ fontFamily: sixType.display, fontSize: 48, fontWeight: 800, letterSpacing: -1.6, color: t.text1, margin: 0, lineHeight: 1 }}>Board.</h1>
          <p style={{ fontFamily: sixType.ui, fontSize: 13, color: t.text3, marginTop: 6 }}>Ranked by showing up, not by splits.</p>
        </div>

        {/* range */}
        <div style={{ padding: '20px 20px 0' }}>
          <div style={{
            display: 'flex', background: t.surface, borderRadius: 999,
            padding: 4, border: `1px solid ${t.border}`,
          }}>
            {[['week','Week'],['month','Month'],['all','All-time']].map(([k,l]) => (
              <button key={k} onClick={() => setRange(k)} style={{
                flex: 1, padding: '10px 0', borderRadius: 999, border: 'none',
                background: range === k ? t.text1 : 'transparent',
                color: range === k ? t.bg : t.text2,
                fontFamily: sixType.ui, fontSize: 12, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 1.2, cursor: 'pointer',
              }}>{l}</button>
            ))}
          </div>
        </div>

        {/* mode toggle */}
        <div style={{ padding: '12px 20px 0', display: 'flex', gap: 8 }}>
          {[['consistency','Consistency'],['distance','Distance'],['pace','Pace']].map(([k,l]) => {
            const sel = mode === k;
            return (
              <button key={k} onClick={() => setMode(k)} style={{
                padding: '8px 14px', borderRadius: 999,
                background: sel ? 'rgba(255,90,31,0.12)' : 'transparent',
                border: `1px solid ${sel ? sixTokens.route : t.border}`,
                color: sel ? sixTokens.route : t.text2,
                fontFamily: sixType.ui, fontSize: 11, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 1, cursor: 'pointer',
              }}>{l}</button>
            );
          })}
        </div>

        {/* list */}
        <div style={{ padding: '20px 20px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {rows.map(row => (
            <div key={row.r} style={{
              display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
              borderRadius: 16,
              background: row.you ? sixTokens.route : t.surface,
              border: `1px solid ${row.you ? sixTokens.route : t.border}`,
              color: row.you ? '#000' : t.text1,
            }}>
              <div style={{
                fontFamily: sixType.display, fontSize: 22, fontWeight: 800,
                width: 30, textAlign: 'center', letterSpacing: -0.6,
                color: row.you ? '#000' : (row.r <= 3 ? sixTokens.route : t.text3),
              }}>{row.r.toString().padStart(2, '0')}</div>
              <div style={{
                width: 40, height: 40, borderRadius: 999,
                backgroundImage: `url(${row.a})`, backgroundSize: 'cover',
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: sixType.ui, fontSize: 14, fontWeight: 600 }}>{row.name}</div>
                <div style={{ fontFamily: sixType.ui, fontSize: 11, opacity: 0.7, marginTop: 2 }}>
                  {row.runs} runs · {row.pace} · {row.km} km
                </div>
              </div>
              {row.r === 1 && !row.you && (
                <span style={{ fontSize: 16 }}>🏃</span>
              )}
            </div>
          ))}
        </div>

        <div style={{ padding: '16px 20px 0', textAlign: 'center' }}>
          <span style={sixLabel({ size: 11, color: t.text3, track: 1.6 })}>showing 6 of 62 members</span>
        </div>
      </div>
      <SixBottomNav active="board" dark={dark} onTab={setTab} />
    </div>
  );
}

// ─────────────────── 14. FEED ───────────────────
function ScreenFeed({ dark = true, setTab }) {
  const t = sixTheme(dark);
  const posts = [
    {
      name: 'Thando M.', handle: '@thando_runs', time: '2h', a: sixPhotos.a1, img: sixPhotos.feed1,
      caption: 'Vol.02 done. Coldest morning of the year but the crew showed up.',
      likes: 34, comments: 6, tag: '5.02 km · 4\'52\'\' pace',
    },
    {
      name: 'Lebo K.', handle: '@lebo.k', time: '3h', a: sixPhotos.a2, img: sixPhotos.feed2,
      caption: "Thanks for the pace, Sipho. Coffee's on me next week.",
      likes: 21, comments: 3, tag: '5.00 km · 5\'10\'\' pace',
    },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, position: 'relative' }}>
      <div style={{ height: '100%', overflowY: 'auto', paddingBottom: 100 }}>
        <div style={{
          position: 'sticky', top: 0, zIndex: 5, background: t.bg,
          padding: '60px 20px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: `1px solid ${t.border}`,
        }}>
          <h1 style={{ fontFamily: sixType.display, fontSize: 28, fontWeight: 800, color: t.text1, margin: 0, letterSpacing: -0.8 }}>Feed.</h1>
          <div style={{
            width: 40, height: 40, borderRadius: 999, background: sixTokens.route,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#000', fontSize: 22, fontWeight: 700, cursor: 'pointer',
          }}>＋</div>
        </div>

        {/* filter chips */}
        <div style={{ padding: '14px 20px 4px', display: 'flex', gap: 8, overflowX: 'auto' }}>
          {[['all','All','solid'],['mine','Me','default'],['vol02','Vol.02','default'],['mamelodi','Mamelodi','default']].map(([k,l,v]) => (
            <SixChip key={k} variant={v} dark={dark}>{l}</SixChip>
          ))}
        </div>

        {posts.map((p, i) => (
          <div key={i} style={{ padding: '18px 20px 20px', borderBottom: `1px solid ${t.border}` }}>
            {/* header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 999,
                backgroundImage: `url(${p.a})`, backgroundSize: 'cover',
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: sixType.ui, fontSize: 14, fontWeight: 700, color: t.text1 }}>{p.name}</div>
                <div style={{ fontFamily: sixType.ui, fontSize: 11, color: t.text3 }}>{p.handle} · {p.time}</div>
              </div>
              <button style={{
                width: 32, height: 32, background: 'none', border: 'none', color: t.text3,
                cursor: 'pointer', fontSize: 20, letterSpacing: -2,
              }}>···</button>
            </div>

            {/* image */}
            <div style={{
              marginTop: 12, aspectRatio: '1',
              backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center',
              borderRadius: 16, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 12, left: 12,
                padding: '6px 10px', borderRadius: 999, background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(10px)',
                ...sixLabel({ size: 10, color: '#fff', track: 1.4 }),
              }}>● {p.tag}</div>
            </div>

            {/* actions */}
            <div style={{ display: 'flex', gap: 20, marginTop: 12, alignItems: 'center' }}>
              <span style={{ display: 'flex', gap: 6, alignItems: 'center', color: t.text1 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-9-10c-1-3 1-6 4-6 2 0 3 1 5 3 2-2 3-3 5-3 3 0 5 3 4 6-2 5.5-9 10-9 10z" stroke={t.text1} strokeWidth="1.6"/></svg>
                <span style={{ fontFamily: sixType.ui, fontSize: 13, fontWeight: 600 }}>{p.likes}</span>
              </span>
              <span style={{ display: 'flex', gap: 6, alignItems: 'center', color: t.text1 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 5h16v11H9l-5 4V5z" stroke={t.text1} strokeWidth="1.6" strokeLinejoin="round"/></svg>
                <span style={{ fontFamily: sixType.ui, fontSize: 13, fontWeight: 600 }}>{p.comments}</span>
              </span>
              <span style={{ marginLeft: 'auto', color: t.text2, cursor: 'pointer' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2v14m0 0l-5-5m5 5l5-5M4 18v3h16v-3" stroke={t.text2} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>

            {/* caption */}
            <p style={{
              fontFamily: sixType.ui, fontSize: 14, lineHeight: 1.5, color: t.text1,
              margin: '10px 0 0', textWrap: 'pretty',
            }}>
              <span style={{ fontWeight: 700 }}>{p.handle}</span>{' '}{p.caption}
            </p>
          </div>
        ))}
      </div>
      <SixBottomNav active="feed" dark={dark} onTab={setTab} />
    </div>
  );
}

// ─────────────────── 15. PROFILE / ME ───────────────────
function ScreenMe({ dark = true, setTab }) {
  const t = sixTheme(dark);
  const badges = [
    { icon: '★', label: 'Streak 12', on: true },
    { icon: '●', label: 'First 5K', on: true },
    { icon: '▲', label: 'Sunrise', on: true },
    { icon: '◆', label: '50K Club', on: true },
    { icon: '◑', label: 'Pacer', on: false },
    { icon: '✦', label: '100K', on: false },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, position: 'relative' }}>
      <div style={{ height: '100%', overflowY: 'auto', paddingBottom: 100 }}>
        <div style={{ padding: '60px 20px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={sixLabel({ size: 11, color: t.text3, track: 2 })}>Me</span>
          <div style={{ width: 40, height: 40, borderRadius: 999, border: `1px solid ${t.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke={t.text1} strokeWidth="1.6"/>
              <path d="M12 2v2m0 16v2M4.9 4.9l1.5 1.5m11.2 11.2l1.5 1.5M2 12h2m16 0h2M4.9 19.1l1.5-1.5m11.2-11.2l1.5-1.5" stroke={t.text1} strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* avatar */}
        <div style={{ padding: '20px 20px 0', display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{
            width: 96, height: 96, borderRadius: 999,
            backgroundImage: `url(${sixPhotos.a4})`, backgroundSize: 'cover', backgroundPosition: 'center',
            border: `2.5px solid ${sixTokens.route}`,
          }} />
          <div>
            <div style={{
              fontFamily: sixType.display, fontSize: 28, fontWeight: 800,
              letterSpacing: -0.8, color: t.text1,
            }}>Dominic M.</div>
            <div style={{ marginTop: 6, display: 'flex', gap: 6 }}>
              <SixChip variant="route" dark={dark}>Intermediate</SixChip>
              <SixChip variant="ghost" dark={dark}>Mamelodi</SixChip>
            </div>
            <div style={{ fontFamily: sixType.ui, fontSize: 11, color: t.text3, marginTop: 8 }}>Member since Apr 2026</div>
          </div>
        </div>

        {/* stat trio */}
        <div style={{ padding: '24px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
          <SixCard dark={dark} pad={16}>
            <div style={sixLabel({ size: 10, color: t.text3, track: 1.4 })}>Streak</div>
            <div style={{ fontFamily: sixType.display, fontSize: 30, fontWeight: 800, color: sixTokens.route, letterSpacing: -0.8, marginTop: 4 }}>12<span style={{ fontSize: 13, color: t.text3, marginLeft: 3, fontWeight: 500 }}>wks</span></div>
          </SixCard>
          <SixCard dark={dark} pad={16}>
            <div style={sixLabel({ size: 10, color: t.text3, track: 1.4 })}>Total</div>
            <div style={{ fontFamily: sixType.display, fontSize: 30, fontWeight: 800, color: t.text1, letterSpacing: -0.8, marginTop: 4 }}>184<span style={{ fontSize: 13, color: t.text3, marginLeft: 3, fontWeight: 500 }}>km</span></div>
          </SixCard>
          <SixCard dark={dark} pad={16}>
            <div style={sixLabel({ size: 10, color: t.text3, track: 1.4 })}>Runs</div>
            <div style={{ fontFamily: sixType.display, fontSize: 30, fontWeight: 800, color: t.text1, letterSpacing: -0.8, marginTop: 4 }}>23</div>
          </SixCard>
        </div>

        {/* Badges */}
        <div style={{ padding: '28px 20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={sixLabel({ size: 11, color: t.text3, track: 2 })}>Badges · 4 / 12</span>
            <span style={{ fontFamily: sixType.ui, fontSize: 12, color: t.text2, textDecoration: 'underline' }}>View all</span>
          </div>
          <div style={{
            marginTop: 12, display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)', gap: 10,
          }}>
            {badges.map((b, i) => (
              <div key={i} style={{
                aspectRatio: '1.15', borderRadius: 14,
                background: b.on ? (i === 0 ? 'rgba(255,90,31,0.1)' : t.surface) : 'transparent',
                border: `1px solid ${b.on ? (i === 0 ? 'rgba(255,90,31,0.35)' : t.border) : t.border}`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                opacity: b.on ? 1 : 0.4,
              }}>
                <div style={{
                  fontFamily: sixType.display, fontSize: 28,
                  color: i === 0 ? sixTokens.route : t.text1,
                }}>{b.icon}</div>
                <div style={{
                  ...sixLabel({ size: 9, color: t.text3, track: 1.2 }), marginTop: 6,
                }}>{b.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Past runs */}
        <div style={{ padding: '28px 20px 0' }}>
          <div style={sixLabel({ size: 11, color: t.text3, track: 2 })}>Recent runs</div>
          <div style={{ marginTop: 12 }}>
            {[
              { d: '02 MAY', t: 'Vol.02 · 5K', s: "5.02 km · 33:18 · 6'38''" },
              { d: '25 APR', t: 'Solo easy',     s: "4.10 km · 26:02 · 6'20''" },
              { d: '18 APR', t: 'Vol.01 · 5K', s: "5.00 km · 34:05 · 6'49''" },
            ].map((r, i, a) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0',
                borderBottom: i === a.length - 1 ? 'none' : `1px solid ${t.border}`,
              }}>
                <div style={{
                  fontFamily: sixType.mono, fontSize: 11, color: t.text3, width: 52,
                }}>{r.d}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: sixType.ui, fontSize: 14, fontWeight: 600, color: t.text1 }}>{r.t}</div>
                  <div style={{ fontFamily: sixType.ui, fontSize: 11, color: t.text3, marginTop: 2 }}>{r.s}</div>
                </div>
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                  <path d="M1 1l7 6-7 6" stroke={t.text3} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SixBottomNav active="me" dark={dark} onTab={setTab} />
    </div>
  );
}

Object.assign(window, { ScreenLive, ScreenSummary, ScreenBoard, ScreenFeed, ScreenMe });

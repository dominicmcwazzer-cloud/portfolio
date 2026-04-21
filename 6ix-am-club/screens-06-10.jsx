// 6ix AM Club — Screens 06–10

// ─────────────────── 06. EVENTS LIST ───────────────────
function ScreenEvents({ dark = true, goto, setTab }) {
  const t = sixTheme(dark);
  const upcoming = [
    { vol: 'Vol.02', date: '02 MAY', dist: '5K', time: '06:00', loc: 'Jack Budha · Mamelodi', going: 42, tag: 'Free' },
    { vol: 'Vol.03', date: '16 MAY', dist: '8K', time: '06:00', loc: 'Mamelodi East Loop', going: 18, tag: 'Free' },
    { vol: 'Vol.04', date: '06 JUN', dist: '10K', time: '06:00', loc: 'Union Bldgs · Pretoria', going: 7,  tag: 'R40' },
  ];
  const past = [
    { vol: 'Vol.01', date: '18 APR', dist: '5K', loc: 'Jack Budha · Mamelodi', attended: 38 },
    { vol: 'Pilot',  date: '04 APR', dist: '3K', loc: 'Jack Budha · Mamelodi', attended: 22 },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, position: 'relative' }}>
      <div style={{ height: '100%', overflowY: 'auto', paddingBottom: 100 }}>
        <div style={{ padding: '60px 20px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SixMarkInline dark={dark} />
          <div style={{
            width: 40, height: 40, borderRadius: 999, border: `1px solid ${t.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M4 8h8M6 12h4" stroke={t.text1} strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div style={{ padding: '10px 20px 0' }}>
          <h1 style={{ fontFamily: sixType.display, fontSize: 48, fontWeight: 700, letterSpacing: -1.6, color: t.text1, margin: 0, lineHeight: 1 }}>Events.</h1>
          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            <SixChip variant="solid" dark={dark}>All</SixChip>
            <SixChip dark={dark}>5K</SixChip>
            <SixChip dark={dark}>Long</SixChip>
            <SixChip dark={dark}>Mamelodi</SixChip>
          </div>
        </div>

        {/* Upcoming */}
        <div style={{ padding: '24px 20px 0' }}>
          <div style={sixLabel({ size: 11, color: t.text3, track: 2, })}>Upcoming · {upcoming.length}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
            {upcoming.map((e, i) => (
              <div key={i} onClick={() => goto('eventDetail')} style={{
                background: t.surface, border: `1px solid ${t.border}`, borderRadius: 18,
                padding: 16, display: 'flex', gap: 14, cursor: 'pointer', alignItems: 'stretch',
              }}>
                {/* date block */}
                <div style={{
                  width: 76, flexShrink: 0, padding: '10px 0', textAlign: 'center',
                  background: dark ? '#0A0A0A' : '#FAFAFA', borderRadius: 12,
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  border: i === 0 ? `1.5px solid ${sixTokens.route}` : `1px solid ${t.border}`,
                }}>
                  <div style={{ fontFamily: sixType.display, fontSize: 28, fontWeight: 700, color: i === 0 ? sixTokens.route : t.text1, lineHeight: 1, letterSpacing: -0.8 }}>
                    {e.date.split(' ')[0]}
                  </div>
                  <div style={sixLabel({ size: 10, color: t.text3, track: 1.4 })}>{e.date.split(' ')[1]}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={sixLabel({ size: 10, color: t.text3, track: 1.6 })}>{e.vol}</span>
                    <span style={{ ...sixLabel({ size: 10, color: e.tag === 'Free' ? sixTokens.route : t.text2, track: 1.4 }) }}>{e.tag}</span>
                  </div>
                  <div style={{ fontFamily: sixType.display, fontSize: 20, fontWeight: 700, letterSpacing: -0.4, color: t.text1, marginTop: 4 }}>
                    {e.dist} · {e.time}
                  </div>
                  <div style={{ fontFamily: sixType.ui, fontSize: 13, color: t.text2, marginTop: 4 }}>
                    {e.loc} · {e.going} going
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past */}
        <div style={{ padding: '28px 20px 20px' }}>
          <div style={sixLabel({ size: 11, color: t.text3, track: 2 })}>Past</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
            {past.map((e, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0',
                borderTop: i === 0 ? 'none' : `1px solid ${t.border}`, opacity: 0.7,
              }}>
                <span style={{ fontFamily: sixType.mono, fontSize: 11, color: t.text3, width: 60 }}>{e.date}</span>
                <span style={{ flex: 1, fontFamily: sixType.ui, fontSize: 14, color: t.text1 }}>{e.vol} · {e.dist}</span>
                <span style={{ fontFamily: sixType.ui, fontSize: 12, color: t.text3 }}>{e.attended} attended</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SixBottomNav active="events" dark={dark} onTab={setTab} />
    </div>
  );
}

// ─────────────────── 07. EVENT DETAIL ───────────────────
function ScreenEventDetail({ dark = true, onBack, goto }) {
  const t = sixTheme(dark);
  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, position: 'relative', overflow: 'hidden' }}>
      <div style={{ height: '100%', overflowY: 'auto', paddingBottom: 130 }}>
        {/* Map/route preview hero */}
        <div style={{ position: 'relative', height: 330, overflow: 'hidden', background: '#000' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${sixPhotos.map})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            filter: dark ? 'brightness(0.45) saturate(0.3) contrast(1.1)' : 'brightness(0.95) saturate(0.6)',
          }} />
          <SixGrain opacity={0.1} />
          {/* route overlay */}
          <svg width="100%" height="100%" viewBox="0 0 390 330" style={{ position: 'absolute', inset: 0 }}>
            <path
              d="M60 240 Q 90 180, 140 190 T 230 150 Q 280 130, 310 175 T 340 230"
              fill="none" stroke={sixTokens.route} strokeWidth="4"
              strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="1000" style={{ filter: 'drop-shadow(0 0 6px rgba(255,90,31,0.6))' }}
            />
            <circle cx="60" cy="240" r="8" fill={sixTokens.route} />
            <circle cx="340" cy="230" r="8" fill="#fff" stroke={sixTokens.route} strokeWidth="3" />
          </svg>
          {/* top bar */}
          <div style={{
            position: 'absolute', top: 60, left: 20, right: 20,
            display: 'flex', justifyContent: 'space-between',
          }}>
            <button onClick={onBack} style={{
              background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', border: 'none',
              borderRadius: 999, width: 40, height: 40, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 7H1m4-4L1 7l4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div style={{
              background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
              borderRadius: 999, padding: '10px 14px',
              ...sixLabel({ size: 10, color: '#fff', track: 1.6 }),
            }}>↗ Share</div>
          </div>
          {/* route bottom meta */}
          <div style={{
            position: 'absolute', bottom: 16, left: 20, right: 20,
            display: 'flex', gap: 10,
          }}>
            {[['5.0','km'],['42','m elev'],['~32','min']].map(([v,u],i) => (
              <div key={i} style={{
                flex: 1, padding: '10px 12px',
                background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(10px)',
                borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{ fontFamily: sixType.display, fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{v}</div>
                <div style={sixLabel({ size: 9, color: 'rgba(255,255,255,0.6)', track: 1.4 })}>{u}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '20px 20px 0' }}>
          <SixChip variant="route" dark={dark}>● Vol.02 · 5KM Run/Walk</SixChip>
          <h1 style={{
            fontFamily: sixType.display, fontSize: 46, fontWeight: 800, lineHeight: 0.95,
            letterSpacing: -1.6, color: t.text1, margin: '14px 0 6px',
          }}>02 MAY<br/>2026</h1>
          <div style={{ fontFamily: sixType.ui, fontSize: 14, color: t.text2, marginTop: 8 }}>
            06:00 AM · Jack Budha · Mamelodi, Pretoria
          </div>
        </div>

        <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            ['Distance', '5 KM'],
            ['Pace', 'All welcome'],
            ['Terrain', 'Flat loop'],
            ['Free', 'R 0'],
          ].map(([l,v], i) => (
            <SixCard key={i} dark={dark} pad={14}>
              <div style={sixLabel({ size: 10, color: t.text3, track: 1.4 })}>{l}</div>
              <div style={{ fontFamily: sixType.display, fontSize: 18, fontWeight: 700, color: t.text1, marginTop: 4, letterSpacing: -0.3 }}>{v}</div>
            </SixCard>
          ))}
        </div>

        <div style={{ padding: '4px 20px 0' }}>
          <div style={sixLabel({ size: 11, color: t.text3, track: 2 })}>The brief</div>
          <p style={{
            fontFamily: sixType.ui, fontSize: 15, lineHeight: 1.6, color: t.text2,
            marginTop: 10,
          }}>Same route. Same time. Same energy. Bring water, bring a friend. Coffee from 5:30 at Jack Budha, Mamelodi. Show up. That's the whole plan.</p>
        </div>

        <div style={{ padding: '20px 20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={sixLabel({ size: 11, color: t.text3, track: 2 })}>42 going</span>
            <span style={{ fontFamily: sixType.ui, fontSize: 12, color: t.text2, textDecoration: 'underline' }}>See all</span>
          </div>
          <div style={{ display: 'flex', marginTop: 12, alignItems: 'center' }}>
            {[sixPhotos.a1, sixPhotos.a2, sixPhotos.a3, sixPhotos.a4, sixPhotos.a5].map((src, i) => (
              <div key={i} style={{
                width: 38, height: 38, borderRadius: 999,
                backgroundImage: `url(${src})`, backgroundSize: 'cover',
                marginLeft: i === 0 ? 0 : -12,
                border: `2px solid ${t.bg}`,
              }} />
            ))}
            <div style={{
              marginLeft: -12, width: 38, height: 38, borderRadius: 999,
              background: t.surface, border: `2px solid ${t.bg}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: sixType.ui, fontSize: 11, fontWeight: 700, color: t.text1,
            }}>+37</div>
          </div>
        </div>
      </div>

      {/* sticky CTA */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 20px 32px',
        background: `linear-gradient(to top, ${t.bg} 60%, rgba(0,0,0,0))`,
      }}>
        <SixButton label="Join — Free" onClick={() => goto('checkout')} dark={dark} />
      </div>
    </div>
  );
}

// ─────────────────── 08. CHECKOUT ───────────────────
function ScreenCheckout({ dark = true, onBack, goto }) {
  const t = sixTheme(dark);
  const [size, setSize] = React.useState('M');
  const [qty, setQty] = React.useState(1);
  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, position: 'relative' }}>
      <div style={{ height: '100%', overflowY: 'auto', paddingBottom: 120 }}>
        <div style={{
          padding: '60px 20px 12px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <button onClick={onBack} style={{
            background: 'none', border: `1px solid ${t.border}`, borderRadius: 999,
            width: 40, height: 40, cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center', fontSize: 18, color: t.text1,
          }}>✕</button>
          <div style={sixLabel({ size: 10, color: t.text3, track: 1.6 })}>Secure · powered by Quicket</div>
          <div style={{ width: 40 }} />
        </div>

        <div style={{ padding: '10px 20px 0' }}>
          <h1 style={{
            fontFamily: sixType.display, fontSize: 36, fontWeight: 700,
            letterSpacing: -1, color: t.text1, margin: 0, lineHeight: 1,
          }}>Claim your<br/>ticket.</h1>
        </div>

        <div style={{ padding: '22px 20px 0' }}>
          <SixCard dark={dark} pad={16}>
            <div style={{ display: 'flex', gap: 14 }}>
              <div style={{
                width: 68, height: 68, borderRadius: 12, overflow: 'hidden',
                backgroundImage: `url(${sixPhotos.event})`, backgroundSize: 'cover', flexShrink: 0,
              }} />
              <div style={{ flex: 1 }}>
                <div style={sixLabel({ size: 10, color: sixTokens.route, track: 1.4 })}>Vol.02</div>
                <div style={{ fontFamily: sixType.display, fontSize: 18, fontWeight: 700, color: t.text1, marginTop: 4, letterSpacing: -0.3 }}>5K Run/Walk</div>
                <div style={{ fontFamily: sixType.ui, fontSize: 12, color: t.text3, marginTop: 4 }}>02 May · 06:00 · Jack Budha, Mamelodi</div>
              </div>
            </div>
          </SixCard>
        </div>

        <div style={{ padding: '22px 20px 0', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* qty */}
          <div>
            <div style={sixLabel({ size: 10, color: t.text3, track: 1.6 })}>Quantity</div>
            <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 14 }}>
              <button onClick={() => setQty(Math.max(1, qty-1))} style={{
                width: 44, height: 44, borderRadius: 12, border: `1px solid ${t.border}`,
                background: t.surface, color: t.text1, fontSize: 20, cursor: 'pointer',
              }}>−</button>
              <span style={{ fontFamily: sixType.display, fontSize: 24, fontWeight: 700, color: t.text1, minWidth: 24, textAlign: 'center' }}>{qty}</span>
              <button onClick={() => setQty(Math.min(4, qty+1))} style={{
                width: 44, height: 44, borderRadius: 12, border: `1px solid ${t.border}`,
                background: t.surface, color: t.text1, fontSize: 20, cursor: 'pointer',
              }}>+</button>
              <span style={{ marginLeft: 'auto', fontFamily: sixType.ui, fontSize: 12, color: t.text3 }}>Max 4 per member</span>
            </div>
          </div>

          {/* name */}
          <div>
            <div style={sixLabel({ size: 10, color: t.text3, track: 1.6 })}>Name on ticket</div>
            <div style={{
              marginTop: 10, padding: '16px 14px', borderRadius: 12,
              border: `1px solid ${t.border}`, background: t.surface,
              fontFamily: sixType.ui, fontSize: 15, color: t.text1,
            }}>Dominic McWazzer</div>
          </div>

          {/* t-shirt */}
          <div>
            <div style={sixLabel({ size: 10, color: t.text3, track: 1.6 })}>T-shirt size · free for first-timers</div>
            <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
              {['XS','S','M','L','XL'].map(s => {
                const sel = s === size;
                return (
                  <button key={s} onClick={() => setSize(s)} style={{
                    flex: 1, height: 48, borderRadius: 12,
                    border: `1.5px solid ${sel ? sixTokens.route : t.border}`,
                    background: sel ? 'rgba(255,90,31,0.08)' : t.surface,
                    color: sel ? sixTokens.route : t.text1,
                    fontFamily: sixType.ui, fontSize: 13, fontWeight: 700, cursor: 'pointer',
                  }}>{s}</button>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ padding: '22px 20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderTop: `1px solid ${t.border}` }}>
            <span style={{ fontFamily: sixType.ui, fontSize: 14, color: t.text2 }}>Ticket × {qty}</span>
            <span style={{ fontFamily: sixType.ui, fontSize: 14, color: t.text1 }}>R 0.00</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderTop: `1px solid ${t.border}` }}>
            <span style={sixLabel({ size: 11, color: t.text1, track: 1.6 })}>Total</span>
            <span style={{ fontFamily: sixType.display, fontSize: 22, fontWeight: 700, color: t.text1, letterSpacing: -0.4 }}>FREE</span>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 20px 32px',
        background: `linear-gradient(to top, ${t.bg} 70%, rgba(0,0,0,0))`,
      }}>
        <SixButton label="Claim Ticket" onClick={() => goto('confirm')} dark={dark} />
      </div>
    </div>
  );
}

// ─────────────────── 09. CONFIRMATION ───────────────────
function ScreenConfirm({ dark = true, goto }) {
  const t = sixTheme(dark);
  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, position: 'relative', overflow: 'hidden' }}>
      {/* ambient orange glow */}
      <div style={{
        position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,90,31,0.25) 0%, transparent 60%)',
        filter: 'blur(10px)',
      }} />

      <div style={{ height: '100%', overflowY: 'auto', paddingTop: 80, paddingBottom: 120 }}>
        <div style={{ padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{
            width: 96, height: 96, borderRadius: 999, margin: '0 auto',
            background: sixTokens.route, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 40px rgba(255,90,31,0.5)`,
          }}>
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
              <path d="M4 12.5l5 5L20 6.5" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1 style={{
            fontFamily: sixType.display, fontSize: 56, fontWeight: 800,
            letterSpacing: -2.2, color: t.text1, margin: '28px 0 10px', lineHeight: 0.95,
          }}>You're in.</h1>
          <p style={{
            fontFamily: sixType.ui, fontSize: 15, color: t.text2, lineHeight: 1.5,
            margin: '0 auto', maxWidth: 280,
          }}>See you <strong style={{ color: t.text1 }}>02 May, 6 AM</strong> at Jack Budha, Mamelodi. Coffee's on from 5:30.</p>
        </div>

        {/* ticket card */}
        <div style={{ padding: '28px 20px 0' }}>
          <div style={{
            background: t.surface, borderRadius: 20, padding: 20,
            border: `1px solid ${t.border}`, position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: '50%', left: -10, width: 20, height: 20, borderRadius: 999,
              background: t.bg, border: `1px solid ${t.border}`,
            }} />
            <div style={{
              position: 'absolute', top: '50%', right: -10, width: 20, height: 20, borderRadius: 999,
              background: t.bg, border: `1px solid ${t.border}`,
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={sixLabel({ size: 10, color: sixTokens.route, track: 1.6 })}>Ticket · Vol.02</div>
                <div style={{ fontFamily: sixType.display, fontSize: 22, fontWeight: 700, color: t.text1, marginTop: 4, letterSpacing: -0.4 }}>5K Run/Walk</div>
                <div style={{ fontFamily: sixType.ui, fontSize: 12, color: t.text3, marginTop: 4 }}>02 May · 06:00 · Jack Budha, Mamelodi</div>
              </div>
              <SixMarkInline dark={dark} />
            </div>

            <div style={{ borderTop: `1px dashed ${t.border}`, margin: '18px -4px' }} />

            {/* QR placeholder — CSS grid */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{
                width: 110, height: 110, padding: 8, background: '#fff', borderRadius: 10,
              }}>
                <div style={{
                  width: '100%', height: '100%',
                  background: `
                    linear-gradient(#000,#000) 0 0/24% 24% no-repeat,
                    linear-gradient(#000,#000) 76% 0/24% 24% no-repeat,
                    linear-gradient(#000,#000) 0 76%/24% 24% no-repeat,
                    conic-gradient(#000 25%, #fff 0 50%, #000 0 75%, #fff 0) 0 0/20% 20%
                  `,
                }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={sixLabel({ size: 10, color: t.text3, track: 1.4 })}>Ticket Ref</div>
                <div style={{ fontFamily: sixType.mono, fontSize: 16, color: t.text1, marginTop: 4 }}>6IX-02-MAY-0248</div>
                <div style={{ marginTop: 10, fontFamily: sixType.ui, fontSize: 12, color: t.text3, lineHeight: 1.5 }}>Scan at check-in. Screenshots work too.</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '18px 20px 0', display: 'flex', gap: 10 }}>
          <div style={{
            flex: 1, padding: '14px 10px', textAlign: 'center',
            border: `1px solid ${t.border}`, borderRadius: 12,
            fontFamily: sixType.ui, fontSize: 13, fontWeight: 600, color: t.text1, cursor: 'pointer',
          }}>＋ Calendar</div>
          <div style={{
            flex: 1, padding: '14px 10px', textAlign: 'center',
            border: `1px solid ${t.border}`, borderRadius: 12,
            fontFamily: sixType.ui, fontSize: 13, fontWeight: 600, color: t.text1, cursor: 'pointer',
          }}>↗ Invite a friend</div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px 32px',
      }}>
        <SixButton label="Back to Home" variant="ghost" onClick={() => goto('home')} dark={dark} />
      </div>
    </div>
  );
}

// ─────────────────── 10. READY TO RUN ───────────────────
function ScreenReady({ dark = true, goto }) {
  const t = sixTheme(dark);
  const [secs, setSecs] = React.useState(24);
  React.useEffect(() => {
    const id = setInterval(() => setSecs(s => s > 0 ? s - 1 : 0), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, position: 'relative', overflow: 'hidden' }}>
      <div style={{ height: '100%', overflowY: 'auto', paddingBottom: 130 }}>
        <div style={{ padding: '60px 20px 0', textAlign: 'center' }}>
          <SixChip variant="route" dark={dark}>● Checked in · Jack Budha, Mamelodi</SixChip>
        </div>

        {/* Map preview */}
        <div style={{ padding: '16px 20px 0' }}>
          <div style={{
            position: 'relative', height: 180, borderRadius: 20, overflow: 'hidden',
            background: '#000',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${sixPhotos.map})`,
              backgroundSize: 'cover', filter: 'brightness(0.4) saturate(0.3)',
            }} />
            <svg width="100%" height="100%" viewBox="0 0 390 180" style={{ position: 'absolute', inset: 0 }}>
              <path d="M40 130 Q 90 80, 160 100 T 270 70 Q 320 60, 340 120" fill="none" stroke={sixTokens.route} strokeWidth="3.5" strokeLinecap="round"/>
              <circle cx="40" cy="130" r="7" fill={sixTokens.route} />
              <circle cx="340" cy="120" r="7" fill="#fff" stroke={sixTokens.route} strokeWidth="3" />
            </svg>
          </div>
        </div>

        <div style={{ padding: '24px 20px 0', textAlign: 'center' }}>
          <div style={sixLabel({ size: 10, color: t.text3, track: 2 })}>Starts in</div>
          <div style={{
            fontFamily: sixType.display, fontSize: 120, fontWeight: 800,
            letterSpacing: -5, color: sixTokens.route, lineHeight: 0.9, margin: '8px 0 4px',
            textShadow: `0 0 40px rgba(255,90,31,0.35)`,
          }}>0:{secs.toString().padStart(2, '0')}</div>
          <div style={{ fontFamily: sixType.ui, fontSize: 14, color: t.text2, marginTop: 6 }}>
            5 KM · Flat loop · 35 min target
          </div>
        </div>

        <div style={{ padding: '28px 20px 0' }}>
          <div style={sixLabel({ size: 11, color: t.text3, track: 2 })}>Playlist</div>
          <SixCard dark={dark} pad={16} style={{ marginTop: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 50, height: 50, borderRadius: 10,
                background: 'linear-gradient(135deg, #FF5A1F, #8B1D00)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#000"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: sixType.display, fontSize: 16, fontWeight: 700, color: t.text1 }}>Mamelodi 6AM Mix</div>
                <div style={{ fontFamily: sixType.ui, fontSize: 12, color: t.text3, marginTop: 2 }}>32 tracks · 2h 14m</div>
              </div>
              <div style={{
                width: 36, height: 36, borderRadius: 999, border: `1px solid ${t.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: t.text2, fontSize: 16,
              }}>⇄</div>
            </div>
          </SixCard>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px 32px',
        background: `linear-gradient(to top, ${t.bg} 60%, rgba(0,0,0,0))`,
        display: 'flex', gap: 10,
      }}>
        <SixButton label="Start Run" onClick={() => goto('live')} dark={dark} />
      </div>
    </div>
  );
}

Object.assign(window, { ScreenEvents, ScreenEventDetail, ScreenCheckout, ScreenConfirm, ScreenReady });

// Ubizo TV — Screens 11–15 (Radio + Devotion + Account)
// 11 Radio · 12 Downloads · 13 Devotion · 14 Prayer Wall · 15 Me

// ───────── 11 · RADIO ─────────
function ScreenRadio({ onBack, dark = true }) {
  const t = ubzTheme(dark);
  const [station, setStation] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);

  const stations = [
    { name: 'Ubizo Live',      tag: 'Sunday Service',    listeners: '2,184', artist: 'aAmadodanaBanner' },
    { name: 'Clap & Tap FM',   tag: 'Praise all day',    listeners: '812',   artist: 'vClapBanner' },
    { name: 'Teaching Stream', tag: 'Sermons · 24/7',    listeners: '418',   artist: 'aMahlaelaBanner' },
    { name: 'Choir Hours',     tag: 'Big halls, full harmony', listeners: '1,067', artist: 'aIsolomziBanner' },
  ];
  const now = stations[station];

  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, color: t.text1,
      overflowY: 'auto', paddingTop: 64, paddingBottom: 130 }}>
      <div style={{ padding: '20px 24px 12px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', color: t.text1,
          fontFamily: ubzType.ui, fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: 0 }}>
          ← Back
        </button>
        <UbzMarkInline dark={dark} />
        <span style={{ width: 40 }} />
      </div>

      <div style={{ padding: '8px 24px 0' }}>
        <div style={ubzLabel({ size: 11, color: ubzTokens.orange500, track: 1.8 })}>
          Radio · Data-light
        </div>
        <h1 style={{ margin: '8px 0 4px', fontFamily: ubzType.display,
          fontSize: 32, fontWeight: 700, letterSpacing: -0.8 }}>
          Listen, on any signal.
        </h1>
        <div style={{ fontFamily: ubzType.ui, fontSize: 13, color: t.text2 }}>
          Audio-only streams for slow days and quiet mornings.
        </div>
      </div>

      {/* Now playing hero */}
      <div style={{ padding: '20px 24px 0' }}>
        <div style={{
          position: 'relative', borderRadius: 22, overflow: 'hidden',
          padding: '24px 20px', minHeight: 220,
          backgroundImage: `url(${ubzPhotos[now.artist]})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}>
          <div style={{ position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(26,15,10,0.35) 0%, rgba(26,15,10,0.75) 80%, rgba(26,15,10,0.95) 100%)' }} />
          <UbzGrain opacity={0.08} />
          <div style={{ position: 'relative', zIndex: 2, color: '#fff' }}>
            <UbzChip variant="live" dark={true}>
              <UbzLiveDot size={6} style={{ background: '#fff', boxShadow: '0 0 6px #fff' }} />
              On Air
            </UbzChip>
            <div style={{ marginTop: 14, fontFamily: ubzType.ui, fontSize: 11,
              fontWeight: 700, letterSpacing: 1.6, textTransform: 'uppercase',
              color: 'rgba(255,241,231,0.8)' }}>{now.tag}</div>
            <div style={{ marginTop: 4, fontFamily: ubzType.display, fontSize: 26,
              fontWeight: 800, letterSpacing: -0.6, lineHeight: 1.05 }}>{now.name}</div>
            <div style={{ marginTop: 4, fontFamily: ubzType.mono, fontSize: 11,
              color: 'rgba(255,241,231,0.7)' }}>{now.listeners} listening now</div>

            {/* play controls */}
            <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 14 }}>
              <button onClick={() => setPlaying(p => !p)} style={{
                width: 56, height: 56, borderRadius: 999,
                background: ubzTokens.orange500, color: '#fff', border: 'none',
                cursor: 'pointer', fontSize: 20,
                boxShadow: '0 8px 20px rgba(232,90,28,0.45)',
              }}>{playing ? '❚❚' : '▶'}</button>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end', height: 28 }}>
                  {[...Array(22)].map((_, i) => (
                    <div key={i} style={{
                      flex: 1,
                      height: `${20 + Math.abs(Math.sin((i + (playing ? Date.now()/300 : 0)) / 2)) * 80}%`,
                      background: 'rgba(255,241,231,0.65)',
                      borderRadius: 1.5,
                    }} />
                  ))}
                </div>
              </div>
              <button style={{
                width: 42, height: 42, borderRadius: 999, background: 'transparent',
                border: '1px solid rgba(255,241,231,0.3)', color: '#fff',
                cursor: 'pointer' }}>♡</button>
            </div>
          </div>
        </div>
      </div>

      {/* Station list */}
      <div style={{ padding: '28px 24px 0' }}>
        <div style={ubzLabel({ size: 11, color: t.text3, track: 1.8 })}>
          Stations
        </div>
        <div style={{ marginTop: 12 }}>
          {stations.map((s, i) => {
            const active = i === station;
            return (
              <div key={i} onClick={() => setStation(i)} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 0', cursor: 'pointer',
                borderTop: i === 0 ? `1px solid ${t.border}` : 'none',
                borderBottom: `1px solid ${t.border}`,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  backgroundImage: `url(${ubzPhotos[s.artist]})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  position: 'relative', overflow: 'hidden',
                }}>
                  {active && (
                    <div style={{ position: 'absolute', inset: 0,
                      background: 'rgba(232,90,28,0.55)',
                      display: 'grid', placeItems: 'center',
                      color: '#fff', fontSize: 14 }}>▶</div>
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: ubzType.display, fontSize: 15,
                    fontWeight: 700, color: t.text1, letterSpacing: -0.2 }}>{s.name}</div>
                  <div style={{ marginTop: 3, fontFamily: ubzType.ui, fontSize: 11,
                    color: t.text3, textTransform: 'uppercase', letterSpacing: 1.1 }}>
                    {s.tag} · {s.listeners} listening
                  </div>
                </div>
                {active && <UbzLiveDot size={8} />}
              </div>
            );
          })}
        </div>
      </div>

      <UbzBottomNav active="radio" dark={dark} />
    </div>
  );
}

// ───────── 12 · DOWNLOADS ─────────
function ScreenDownloads({ onBack, dark = true }) {
  const t = ubzTheme(dark);
  const [wifiOnly, setWifiOnly] = React.useState(true);

  const items = [
    { title: 'Sunday Service — 14 Apr', artist: 'Amadodana Ase Wesile', size: '284 MB', dur: '1h 42m', banner: 'aAmadodanaBanner', state: 'done' },
    { title: 'Morning Devotion',        artist: 'Dr Pookgaodi',         size: '42 MB',  dur: '28m',    banner: 'aPookgaodiBanner', state: 'done' },
    { title: 'Clap & Tap — Praise Hour',artist: 'Isolomzi Gospel',      size: '198 MB', dur: '58m',    banner: 'vClapBanner',       state: 'downloading', progress: 62 },
    { title: '40 Years · Documentary',  artist: 'Amadodana · Archive',  size: '812 MB', dur: '1h 30m', banner: 'aAmadodanaBanner', state: 'queued' },
  ];

  const usedMb = items.filter(i => i.state === 'done')
    .reduce((s, i) => s + parseInt(i.size, 10), 0);
  const total = 2048;
  const pct = Math.round((usedMb / total) * 100);

  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, color: t.text1,
      overflowY: 'auto', paddingTop: 64, paddingBottom: 130 }}>
      <div style={{ padding: '20px 24px 12px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', color: t.text1,
          fontFamily: ubzType.ui, fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: 0 }}>
          ← Back
        </button>
        <UbzMarkInline dark={dark} />
        <span style={{ width: 40 }} />
      </div>

      <div style={{ padding: '8px 24px 0' }}>
        <div style={ubzLabel({ size: 11, color: ubzTokens.orange500, track: 1.8 })}>
          Downloads
        </div>
        <h1 style={{ margin: '8px 0 4px', fontFamily: ubzType.display,
          fontSize: 32, fontWeight: 700, letterSpacing: -0.8 }}>
          For the commute.
        </h1>
        <div style={{ fontFamily: ubzType.ui, fontSize: 13, color: t.text2 }}>
          Save what matters. We'll hold it for you offline.
        </div>
      </div>

      {/* storage card */}
      <div style={{ padding: '22px 24px 0' }}>
        <UbzCard dark={dark} pad={18}>
          <div style={{ display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginBottom: 10 }}>
            <div style={ubzLabel({ size: 10, color: t.text3, track: 1.6 })}>Storage used</div>
            <div style={{ fontFamily: ubzType.mono, fontSize: 12, color: t.text1, fontWeight: 700 }}>
              {usedMb} MB / {(total/1024).toFixed(1)} GB
            </div>
          </div>
          <div style={{ height: 8, borderRadius: 4,
            background: dark ? 'rgba(255,241,231,0.08)' : 'rgba(42,14,9,0.08)',
            overflow: 'hidden' }}>
            <div style={{ width: `${pct}%`, height: '100%',
              background: ubzTokens.orange500 }} />
          </div>

          {/* wifi toggle */}
          <div style={{ marginTop: 16, paddingTop: 16,
            borderTop: `1px solid ${t.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: ubzType.ui, fontSize: 14, fontWeight: 600,
                color: t.text1 }}>Wi-Fi only</div>
              <div style={{ marginTop: 3, fontFamily: ubzType.ui, fontSize: 11,
                color: t.text3 }}>Downloads pause on mobile data.</div>
            </div>
            <button onClick={() => setWifiOnly(w => !w)} style={{
              width: 48, height: 28, borderRadius: 999, position: 'relative',
              background: wifiOnly ? ubzTokens.orange500 : (dark ? '#3A2418' : '#E5D6C1'),
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'background 180ms ease',
            }}>
              <span style={{ position: 'absolute', top: 3, left: wifiOnly ? 23 : 3,
                width: 22, height: 22, borderRadius: 999, background: '#fff',
                transition: 'left 180ms ease',
                boxShadow: '0 2px 6px rgba(0,0,0,0.25)' }} />
            </button>
          </div>
        </UbzCard>
      </div>

      {/* item list */}
      <div style={{ padding: '26px 24px 0' }}>
        <div style={ubzLabel({ size: 11, color: t.text3, track: 1.8 })}>
          {items.length} items
        </div>
        <div style={{ marginTop: 12 }}>
          {items.map((it, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0',
              borderTop: i === 0 ? `1px solid ${t.border}` : 'none',
              borderBottom: `1px solid ${t.border}`,
            }}>
              <div style={{
                width: 54, height: 54, borderRadius: 10,
                backgroundImage: `url(${ubzPhotos[it.banner]})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative', overflow: 'hidden', flexShrink: 0,
              }}>
                {it.state === 'done' && (
                  <div style={{ position: 'absolute', bottom: 4, right: 4,
                    width: 16, height: 16, borderRadius: 999,
                    background: ubzTokens.orange500, color: '#fff',
                    fontSize: 10, display: 'grid', placeItems: 'center',
                    fontWeight: 700 }}>↓</div>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: ubzType.display, fontSize: 14,
                  fontWeight: 700, color: t.text1, letterSpacing: -0.2,
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {it.title}
                </div>
                <div style={{ marginTop: 3, fontFamily: ubzType.ui, fontSize: 11,
                  color: t.text3, textTransform: 'uppercase', letterSpacing: 1.1 }}>
                  {it.artist}
                </div>
                {it.state === 'downloading' && (
                  <div style={{ marginTop: 7, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 3, borderRadius: 2,
                      background: dark ? 'rgba(255,241,231,0.1)' : 'rgba(42,14,9,0.1)',
                      overflow: 'hidden' }}>
                      <div style={{ width: `${it.progress}%`, height: '100%',
                        background: ubzTokens.orange500 }} />
                    </div>
                    <span style={{ fontFamily: ubzType.mono, fontSize: 10,
                      color: ubzTokens.orange500, fontWeight: 700 }}>{it.progress}%</span>
                  </div>
                )}
                {it.state === 'queued' && (
                  <div style={{ marginTop: 3, fontFamily: ubzType.ui, fontSize: 10,
                    color: ubzTokens.gold500, fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: 1.2 }}>Queued · {it.size}</div>
                )}
                {it.state === 'done' && (
                  <div style={{ marginTop: 3, fontFamily: ubzType.mono, fontSize: 11,
                    color: t.text3 }}>{it.size} · {it.dur}</div>
                )}
              </div>
              <button style={{
                background: 'none', border: 'none', color: t.text3,
                cursor: 'pointer', fontSize: 18, padding: 6 }}>⋯</button>
            </div>
          ))}
        </div>
      </div>

      <UbzBottomNav active="me" dark={dark} />
    </div>
  );
}

// ───────── 13 · DEVOTION ─────────
function ScreenDevotion({ onBack, dark = true }) {
  const t = ubzTheme(dark);
  const [playing, setPlaying] = React.useState(false);
  const [answered, setAnswered] = React.useState(false);
  const streak = 14;

  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, color: t.text1,
      overflowY: 'auto', paddingTop: 64, paddingBottom: 130 }}>
      <div style={{ padding: '20px 24px 12px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', color: t.text1,
          fontFamily: ubzType.ui, fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: 0 }}>
          ← Back
        </button>
        <UbzMarkInline dark={dark} />
        <span style={{ width: 40 }} />
      </div>

      <div style={{ padding: '8px 24px 0' }}>
        <div style={ubzLabel({ size: 11, color: ubzTokens.orange500, track: 1.8 })}>
          Daily Devotion · 21 April
        </div>
        <h1 style={{ margin: '8px 0 4px', fontFamily: ubzType.display,
          fontSize: 30, fontWeight: 700, letterSpacing: -0.8, lineHeight: 1.05 }}>
          Five minutes, every morning.
        </h1>
      </div>

      {/* Verse slab — editorial */}
      <div style={{ margin: '22px 24px 0', padding: '28px 22px',
        borderRadius: 22, position: 'relative', overflow: 'hidden',
        background: dark
          ? 'linear-gradient(150deg, #2C1A10 0%, #1A0F0A 100%)'
          : 'linear-gradient(150deg, #FFFBF6 0%, #F3E9DB 100%)',
        border: `1px solid ${dark ? 'rgba(224,161,59,0.25)' : 'rgba(123,42,32,0.12)'}`,
      }}>
        <UbzGrain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={ubzLabel({ size: 10, color: ubzTokens.gold500, track: 2 })}>
            Genesis 1 : 3
          </div>
          <div style={{ marginTop: 14, fontFamily: ubzType.editorial, fontStyle: 'italic',
            fontSize: 28, fontWeight: 400, lineHeight: 1.25, color: t.text1,
            letterSpacing: -0.3 }}>
            "And God said, let there be <span style={{ color: ubzTokens.orange500 }}>light</span>,
            and there was light."
          </div>
          <div style={{ marginTop: 14, fontFamily: ubzType.ui, fontSize: 12,
            color: t.text3, textTransform: 'uppercase', letterSpacing: 1.4 }}>
            KJV · The beginning
          </div>
        </div>
      </div>

      {/* Audio player */}
      <div style={{ padding: '24px 24px 0' }}>
        <UbzCard dark={dark} pad={18}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <button onClick={() => setPlaying(p => !p)} style={{
              width: 56, height: 56, borderRadius: 999,
              background: ubzTokens.orange500, color: '#fff', border: 'none',
              cursor: 'pointer', fontSize: 20, flexShrink: 0,
              boxShadow: '0 6px 16px rgba(232,90,28,0.45)',
            }}>{playing ? '❚❚' : '▶'}</button>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={ubzLabel({ size: 10, color: t.text3, track: 1.6 })}>
                Audio Devotion · 5 min
              </div>
              <div style={{ marginTop: 4, fontFamily: ubzType.display, fontSize: 15,
                fontWeight: 700, color: t.text1, letterSpacing: -0.2 }}>
                Let there be Light
              </div>
              <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, height: 4, borderRadius: 2,
                  background: dark ? 'rgba(255,241,231,0.1)' : 'rgba(42,14,9,0.08)',
                  overflow: 'hidden' }}>
                  <div style={{ width: playing ? '28%' : '0%', height: '100%',
                    background: ubzTokens.orange500,
                    transition: 'width 600ms ease' }} />
                </div>
                <span style={{ fontFamily: ubzType.mono, fontSize: 10,
                  color: t.text3 }}>{playing ? '01:24' : '00:00'} / 05:00</span>
              </div>
            </div>
          </div>
        </UbzCard>
      </div>

      {/* Reflection */}
      <div style={{ padding: '22px 24px 0' }}>
        <div style={ubzLabel({ size: 11, color: t.text3, track: 1.8 })}>
          Reflection
        </div>
        <div style={{ marginTop: 10, fontFamily: ubzType.ui, fontSize: 15,
          color: t.text2, lineHeight: 1.65 }}>
          Before anything moved or answered, there was a voice and a first light.
          Today, ask: what in your life has been waiting for that word?
        </div>
      </div>

      {/* Days answered */}
      <div style={{ padding: '24px 24px 0' }}>
        <UbzCard dark={dark} pad={18}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 62, height: 62, borderRadius: 999,
              background: dark ? 'rgba(224,161,59,0.12)' : 'rgba(224,161,59,0.2)',
              border: `2px solid ${ubzTokens.gold500}`,
              display: 'grid', placeItems: 'center',
              fontFamily: ubzType.display, fontWeight: 800, fontSize: 22,
              color: ubzTokens.gold500, letterSpacing: -0.5,
            }}>{answered ? streak + 1 : streak}</div>
            <div style={{ flex: 1 }}>
              <div style={ubzLabel({ size: 10, color: ubzTokens.gold500, track: 2 })}>
                Days Answered
              </div>
              <div style={{ marginTop: 4, fontFamily: ubzType.display, fontSize: 17,
                fontWeight: 700, color: t.text1, letterSpacing: -0.3 }}>
                {answered ? 'Answered today · keep the chain' : 'Mark today answered'}
              </div>
              <div style={{ marginTop: 3, fontFamily: ubzType.ui, fontSize: 11,
                color: t.text3 }}>No points. No leaderboard. Just showing up.</div>
            </div>
          </div>
          {!answered && (
            <div style={{ marginTop: 16 }}>
              <UbzButton label="Mark answered" variant="gold" dark={dark}
                onClick={() => setAnswered(true)} />
            </div>
          )}
        </UbzCard>
      </div>

      <UbzBottomNav active="home" dark={dark} />
    </div>
  );
}

// ───────── 14 · PRAYER WALL ─────────
function ScreenPrayer({ onBack, dark = true }) {
  const t = ubzTheme(dark);
  const [amened, setAmened] = React.useState({ 1: false, 2: true, 3: false });
  const toggle = (id) => setAmened(a => ({ ...a, [id]: !a[id] }));

  const prayers = [
    { id: 1, text: 'For my mother, waiting on a job interview this week. Asking for peace in her voice.', when: '12 min ago', amens: 47 },
    { id: 2, text: 'Pretoria · starting school next Monday. Praying over the walk.', when: '38 min ago', amens: 128 },
    { id: 3, text: 'Giving thanks. The rent came through. It always does, somehow.', when: '1 hr ago', amens: 312 },
    { id: 4, text: 'For the 6AM crew at Mamelodi — safety on the road, joy in the run.', when: '2 hr ago', amens: 89 },
    { id: 5, text: 'Let there be light over this house.', when: '4 hr ago', amens: 506 },
  ];

  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, color: t.text1,
      overflowY: 'auto', paddingTop: 64, paddingBottom: 130 }}>
      <div style={{ padding: '20px 24px 12px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', color: t.text1,
          fontFamily: ubzType.ui, fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: 0 }}>
          ← Back
        </button>
        <UbzMarkInline dark={dark} />
        <span style={{ width: 40 }} />
      </div>

      <div style={{ padding: '8px 24px 0' }}>
        <div style={ubzLabel({ size: 11, color: ubzTokens.orange500, track: 1.8 })}>
          Prayer Wall · Anonymous
        </div>
        <h1 style={{ margin: '8px 0 4px', fontFamily: ubzType.display,
          fontSize: 30, fontWeight: 700, letterSpacing: -0.8, lineHeight: 1.05 }}>
          Stand with someone.
        </h1>
        <div style={{ fontFamily: ubzType.ui, fontSize: 13, color: t.text2,
          lineHeight: 1.5 }}>
          Leave a name out of it. We lift what people carry, together.
        </div>
      </div>

      {/* Compose card */}
      <div style={{ padding: '20px 24px 0' }}>
        <UbzCard dark={dark} pad={16}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <div style={{
              width: 36, height: 36, borderRadius: 999, flexShrink: 0,
              background: 'rgba(232,90,28,0.15)', color: ubzTokens.orange500,
              display: 'grid', placeItems: 'center',
              fontFamily: ubzType.display, fontWeight: 800, fontSize: 14,
            }}>?</div>
            <div style={{ flex: 1 }}>
              <textarea
                rows={2}
                placeholder="Share anonymously. Others will stand with you."
                style={{
                  width: '100%', boxSizing: 'border-box',
                  background: 'transparent', color: t.text1,
                  border: 'none', resize: 'none', outline: 'none',
                  fontFamily: ubzType.ui, fontSize: 14, lineHeight: 1.5,
                }}
              />
              <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between',
                alignItems: 'center' }}>
                <span style={{ fontFamily: ubzType.ui, fontSize: 11,
                  color: t.text3 }}>240 chars · no names</span>
                <UbzButton label="Post · Silent" variant="dark" dark={dark}
                  fullWidth={false} small />
              </div>
            </div>
          </div>
        </UbzCard>
      </div>

      {/* Prayer feed */}
      <div style={{ padding: '22px 24px 0' }}>
        <div style={ubzLabel({ size: 11, color: t.text3, track: 1.8 })}>
          1,482 standing today
        </div>
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {prayers.map(p => {
            const isAmened = amened[p.id];
            return (
              <UbzCard key={p.id} dark={dark} pad={16}>
                <div style={{ fontFamily: ubzType.editorial, fontSize: 15,
                  fontStyle: 'italic', color: t.text1, lineHeight: 1.55,
                  letterSpacing: -0.1 }}>
                  "{p.text}"
                </div>
                <div style={{ marginTop: 14, display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between' }}>
                  <div style={{ fontFamily: ubzType.ui, fontSize: 10,
                    color: t.text3, textTransform: 'uppercase', letterSpacing: 1.3 }}>
                    {p.when}
                  </div>
                  <button onClick={() => toggle(p.id)} style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    background: isAmened ? 'rgba(232,90,28,0.12)' : 'transparent',
                    border: `1px solid ${isAmened ? ubzTokens.orange500 : t.border}`,
                    color: isAmened ? ubzTokens.orange500 : t.text2,
                    padding: '6px 14px', borderRadius: 999, cursor: 'pointer',
                    fontFamily: ubzType.ui, fontSize: 11, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: 1.2,
                  }}>
                    <span>{isAmened ? '✓' : '+'}</span>
                    {isAmened ? 'Standing' : 'Stand with'}
                    <span style={{ opacity: 0.7, marginLeft: 4,
                      fontFamily: ubzType.mono, letterSpacing: 0 }}>
                      {p.amens + (isAmened ? 1 : 0)}
                    </span>
                  </button>
                </div>
              </UbzCard>
            );
          })}
        </div>
      </div>

      <UbzBottomNav active="home" dark={dark} />
    </div>
  );
}

// ───────── 15 · ME ─────────
function ScreenMe({ onBack, dark = true, onToggleTheme }) {
  const t = ubzTheme(dark);
  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, color: t.text1,
      overflowY: 'auto', paddingTop: 64, paddingBottom: 130 }}>
      <div style={{ padding: '20px 24px 12px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', color: t.text1,
          fontFamily: ubzType.ui, fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: 0 }}>
          ← Back
        </button>
        <UbzMarkInline dark={dark} />
        <span style={{ width: 40 }} />
      </div>

      {/* Profile header */}
      <div style={{ padding: '16px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 76, height: 76, borderRadius: 999,
            background: ubzDawnGradient,
            display: 'grid', placeItems: 'center',
            fontFamily: ubzType.display, fontWeight: 800, fontSize: 28,
            color: '#fff', letterSpacing: -0.5,
            boxShadow: '0 10px 26px rgba(232,90,28,0.35)',
          }}>D</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: ubzType.display, fontSize: 22,
              fontWeight: 800, color: t.text1, letterSpacing: -0.5 }}>Dominic</div>
            <div style={{ marginTop: 2, fontFamily: ubzType.ui, fontSize: 12,
              color: t.text3, textTransform: 'uppercase', letterSpacing: 1.3 }}>
              Pretoria · EN / isiZulu
            </div>
          </div>
        </div>
      </div>

      {/* Streak + carrier row */}
      <div style={{ padding: '22px 24px 0', display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <UbzCard dark={dark} pad={16}>
          <div style={ubzLabel({ size: 10, color: ubzTokens.gold500, track: 2 })}>
            Days Answered
          </div>
          <div style={{ marginTop: 8, fontFamily: ubzType.display, fontSize: 34,
            fontWeight: 800, letterSpacing: -0.8, color: ubzTokens.gold500,
            lineHeight: 1 }}>14</div>
          <div style={{ marginTop: 4, fontFamily: ubzType.ui, fontSize: 11,
            color: t.text3 }}>Kept since 7 Apr</div>
        </UbzCard>
        <UbzCard dark={dark} pad={16}>
          <div style={ubzLabel({ size: 10, color: ubzTokens.orange500, track: 2 })}>
            Carrier
          </div>
          <div style={{ marginTop: 8, fontFamily: ubzType.display, fontSize: 18,
            fontWeight: 700, color: t.text1, letterSpacing: -0.3 }}>MTN · R29/wk</div>
          <div style={{ marginTop: 4, fontFamily: ubzType.ui, fontSize: 11,
            color: t.text3 }}>Renews Sun · 28 Apr</div>
        </UbzCard>
      </div>

      {/* Settings list */}
      <div style={{ padding: '24px 24px 0' }}>
        <div style={ubzLabel({ size: 11, color: t.text3, track: 1.8 })}>
          Account
        </div>
        <div style={{ marginTop: 10 }}>
          {[
            { label: 'Subscription',        meta: 'MTN Weekly · R29',    icon: '⎈' },
            { label: 'Downloads',           meta: '4 items · 326 MB',    icon: '↓' },
            { label: 'Language',            meta: 'English / isiZulu',   icon: 'A' },
            { label: 'Data saver',          meta: 'Mobile · 360p',       icon: '◐' },
            { label: 'Notifications',       meta: 'Sunday Service only', icon: '♪' },
            { label: dark ? 'Dark theme' : 'Light theme', meta: 'Toggle', icon: '☾', onTap: onToggleTheme },
          ].map((row, i) => (
            <div key={i} onClick={row.onTap} style={{
              display: 'flex', alignItems: 'center', gap: 14, padding: '16px 0',
              borderTop: i === 0 ? `1px solid ${t.border}` : 'none',
              borderBottom: `1px solid ${t.border}`, cursor: 'pointer',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: dark ? 'rgba(255,241,231,0.06)' : 'rgba(42,14,9,0.04)',
                display: 'grid', placeItems: 'center',
                color: ubzTokens.orange500,
                fontFamily: ubzType.display, fontSize: 16, fontWeight: 700,
              }}>{row.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: ubzType.ui, fontSize: 14, fontWeight: 600,
                  color: t.text1 }}>{row.label}</div>
                <div style={{ marginTop: 2, fontFamily: ubzType.ui, fontSize: 11,
                  color: t.text3 }}>{row.meta}</div>
              </div>
              <span style={{ color: t.text3, fontSize: 14 }}>›</span>
            </div>
          ))}
        </div>
      </div>

      {/* Support */}
      <div style={{ padding: '24px 24px 0' }}>
        <div style={ubzLabel({ size: 11, color: t.text3, track: 1.8 })}>
          Support
        </div>
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <UbzButton label="Reply STOP to cancel" variant="secondary" dark={dark} />
          <div style={{ textAlign: 'center', fontFamily: ubzType.editorial,
            fontStyle: 'italic', fontSize: 13, color: t.text3, marginTop: 6 }}>
            "Let there be light." — Genesis 1 : 3
          </div>
        </div>
      </div>

      <UbzBottomNav active="me" dark={dark} />
    </div>
  );
}

Object.assign(window, {
  ScreenRadio, ScreenDownloads, ScreenDevotion, ScreenPrayer, ScreenMe,
});

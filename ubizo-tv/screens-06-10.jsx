// Ubizo TV — Screens 06–10 (Discover + Watch Start flow)
// 06 Browse · 07 Artists · 08 Artist Detail (Amadodana) · 09 Player · 10 Schedule

// ───────── 06 · BROWSE BY VERTICAL ─────────
function ScreenBrowse({ onBack, onPickVertical, dark = true }) {
  const t = ubzTheme(dark);
  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, color: t.text1,
      overflowY: 'auto', paddingTop: 64 }}>
      <div style={{ padding: '20px 24px 12px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', color: t.text1,
          fontFamily: ubzType.ui, fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: 0 }}>
          ← Back
        </button>
        <UbzMarkInline dark={dark} />
        <span style={{ width: 40 }} />
      </div>

      <div style={{ padding: '24px 24px 12px' }}>
        <div style={ubzLabel({ size: 11, color: ubzTokens.orange500, track: 1.8 })}>
          Browse
        </div>
        <h1 style={{
          margin: '10px 0 6px', fontFamily: ubzType.display,
          fontSize: 34, fontWeight: 700, letterSpacing: -1.0, lineHeight: 1.05,
        }}>Find your <span style={{ fontFamily: ubzType.editorial, fontStyle: 'italic',
          color: ubzTokens.orange500 }}>corner</span> of the call.</h1>
        <div style={{ marginTop: 8, fontFamily: ubzType.ui, fontSize: 14,
          color: t.text2, lineHeight: 1.5 }}>
          Four ways in. Church on Sundays, praise through the week.
        </div>
      </div>

      <div style={{ padding: '20px 24px 120px', display: 'grid',
        gridTemplateColumns: '1fr', gap: 14 }}>
        {ubzVerticals.map((v, i) => (
          <div key={v.key}
            onClick={() => onPickVertical && onPickVertical(v.key)}
            style={{
              position: 'relative', borderRadius: 22, overflow: 'hidden',
              height: 170, cursor: 'pointer',
              border: `1px solid ${t.border}`,
              backgroundImage: `url(${ubzPhotos[v.banner]})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              boxShadow: '0 6px 18px rgba(26,15,10,0.18)',
            }}>
            <div style={{ position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(26,15,10,0) 0%, rgba(26,15,10,0.15) 45%, rgba(26,15,10,0.85) 100%)' }} />
            <UbzGrain opacity={0.06} />
            <div style={{ position: 'absolute', top: 14, left: 14 }}>
              <UbzChip variant="ghost" dark={true} style={{ background: 'rgba(26,15,10,0.35)',
                color: '#fff', borderColor: 'rgba(255,255,255,0.25)' }}>
                {String(i+1).padStart(2,'0')}
              </UbzChip>
            </div>
            <div style={{ position: 'absolute', bottom: 16, left: 18, right: 18, color: '#fff' }}>
              <div style={{ fontFamily: ubzType.display, fontSize: 22, fontWeight: 700,
                letterSpacing: -0.5, lineHeight: 1.1 }}>{v.name}</div>
              <div style={{ marginTop: 4, fontFamily: ubzType.ui, fontSize: 12,
                color: 'rgba(255,241,231,0.85)', lineHeight: 1.4 }}>{v.desc}</div>
            </div>
            <div style={{ position: 'absolute', bottom: 16, right: 16,
              width: 32, height: 32, borderRadius: 999, background: ubzTokens.orange500,
              display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700 }}>→</div>
          </div>
        ))}
      </div>

      <UbzBottomNav active="watch" dark={dark} />
    </div>
  );
}

// ───────── 07 · ARTISTS ─────────
function ScreenArtists({ onBack, onPickArtist, dark = true }) {
  const t = ubzTheme(dark);
  const [q, setQ] = React.useState('');
  const filtered = ubzArtists.filter(a =>
    a.name.toLowerCase().includes(q.toLowerCase()) ||
    (a.tag || '').toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, color: t.text1,
      overflowY: 'auto', paddingTop: 64 }}>
      <div style={{ padding: '20px 24px 12px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', color: t.text1,
          fontFamily: ubzType.ui, fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: 0 }}>
          ← Back
        </button>
        <UbzMarkInline dark={dark} />
        <span style={{ width: 40 }} />
      </div>

      <div style={{ padding: '20px 24px 8px' }}>
        <div style={ubzLabel({ size: 11, color: ubzTokens.orange500, track: 1.8 })}>Roster</div>
        <h1 style={{ margin: '8px 0 4px', fontFamily: ubzType.display,
          fontSize: 32, fontWeight: 700, letterSpacing: -0.8 }}>
          The voices.
        </h1>
        <div style={{ fontFamily: ubzType.ui, fontSize: 13, color: t.text2 }}>
          {ubzArtists.length} artists · Documentaries · Sermons · Choirs
        </div>
      </div>

      <div style={{ padding: '12px 24px 0' }}>
        <div style={{ position: 'relative' }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search artists, choirs, sermons…"
            style={{
              width: '100%', height: 44, boxSizing: 'border-box',
              padding: '0 16px 0 44px',
              background: t.surface, color: t.text1,
              border: `1px solid ${t.border}`, borderRadius: 999,
              fontFamily: ubzType.ui, fontSize: 14, outline: 'none',
            }}
          />
          <div style={{ position: 'absolute', left: 16, top: 12, color: t.text3 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </div>
        </div>
      </div>

      <div style={{ padding: '18px 24px 120px' }}>
        {/* Flagship feature */}
        {q === '' && (
          <div onClick={() => onPickArtist && onPickArtist('amadodana')} style={{
            position: 'relative', borderRadius: 22, overflow: 'hidden',
            height: 190, marginBottom: 20, cursor: 'pointer',
            backgroundImage: `url(${ubzPhotos.aAmadodanaBanner})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}>
            <div style={{ position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(26,15,10,0) 20%, rgba(26,15,10,0.9) 100%)' }} />
            <UbzGrain opacity={0.08} />
            <div style={{ position: 'absolute', top: 14, left: 14 }}>
              <UbzChip variant="gold" dark={true}>★ Flagship</UbzChip>
            </div>
            <div style={{ position: 'absolute', bottom: 18, left: 18, right: 18, color: '#fff' }}>
              <div style={{ fontFamily: ubzType.display, fontSize: 26, fontWeight: 800,
                letterSpacing: -0.6, lineHeight: 1.05 }}>Amadodana Ase Wesile</div>
              <div style={{ marginTop: 6, fontFamily: ubzType.ui, fontSize: 12,
                color: 'rgba(255,241,231,0.9)' }}>40 years · 40+ albums · 7 SAMAs</div>
            </div>
          </div>
        )}

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14,
        }}>
          {filtered.filter(a => a.key !== 'amadodana' || q !== '').map(a => (
            <div key={a.key}
              onClick={() => onPickArtist && onPickArtist(a.key)}
              style={{ cursor: 'pointer' }}>
              <div style={{
                width: '100%', aspectRatio: '1 / 1', borderRadius: 16, overflow: 'hidden',
                border: `1px solid ${t.border}`, position: 'relative',
                backgroundImage: `url(${ubzPhotos[a.photo]})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
              }}>
                <div style={{ position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, rgba(26,15,10,0) 55%, rgba(26,15,10,0.8) 100%)' }} />
                {a.flagship && (
                  <div style={{ position: 'absolute', top: 8, left: 8 }}>
                    <UbzChip variant="gold" dark={true} style={{ fontSize: 9, padding: '4px 8px' }}>★</UbzChip>
                  </div>
                )}
              </div>
              <div style={{ marginTop: 10, fontFamily: ubzType.display, fontSize: 14,
                fontWeight: 700, color: t.text1, letterSpacing: -0.2, lineHeight: 1.2 }}>
                {a.name}
              </div>
              <div style={{ marginTop: 3, fontFamily: ubzType.ui, fontSize: 11,
                color: t.text3, textTransform: 'uppercase', letterSpacing: 1.1 }}>
                {a.tag}
              </div>
            </div>
          ))}
        </div>
      </div>

      <UbzBottomNav active="watch" dark={dark} />
    </div>
  );
}

// ───────── 08 · ARTIST DETAIL (Amadodana) ─────────
function ScreenArtistDetail({ onBack, onPlay, dark = true, artistKey = 'amadodana' }) {
  const t = ubzTheme(dark);
  const artist = ubzArtists.find(a => a.key === artistKey) || ubzArtists[0];
  const banner = ubzPhotos[artist.banner];

  const broadcasts = [
    { title: 'Thuthukani Moya Wami', year: '2024', dur: '1h 42m', tag: 'Full Service' },
    { title: 'Methodist Conference Live', year: '2023', dur: '2h 08m', tag: 'Documentary' },
    { title: '40 Years · Anniversary Set', year: '2025', dur: '1h 15m', tag: 'Special' },
    { title: 'Ukukholwa', year: '2022', dur: '58m',    tag: 'Studio Session' },
  ];

  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, color: t.text1,
      overflowY: 'auto' }}>
      {/* Banner hero */}
      <div style={{
        position: 'relative', height: 340,
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, rgba(26,15,10,0.35) 0%, rgba(26,15,10,0.1) 40%, ${t.bg} 100%)` }} />
        <UbzGrain opacity={0.08} />
        <div style={{ position: 'absolute', top: 58, left: 20, zIndex: 2 }}>
          <button onClick={onBack} style={{
            width: 38, height: 38, borderRadius: 999, background: 'rgba(26,15,10,0.5)',
            border: '1px solid rgba(255,241,231,0.2)', color: '#fff',
            cursor: 'pointer', fontSize: 16 }}>←</button>
        </div>
        {artist.flagship && (
          <div style={{ position: 'absolute', top: 64, right: 20, zIndex: 2 }}>
            <UbzChip variant="gold" dark={true}>★ Flagship</UbzChip>
          </div>
        )}
        <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, color: '#fff' }}>
          <div style={{ fontFamily: ubzType.ui, fontSize: 11, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: 1.6,
            color: 'rgba(255,241,231,0.8)' }}>{artist.tag}</div>
          <h1 style={{ margin: '8px 0 0', fontFamily: ubzType.display,
            fontSize: 32, fontWeight: 800, letterSpacing: -0.8, lineHeight: 1.05 }}>
            {artist.name}
          </h1>
        </div>
      </div>

      <div style={{ padding: '16px 24px 0' }}>
        {/* Stat row */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          <UbzStat label="Years" value="40" dark={dark} />
          <UbzStat label="Albums" value="40" unit="+" dark={dark} />
          <UbzStat label="SAMAs" value="7" dark={dark} accent />
        </div>

        {/* Bio */}
        <div style={{ fontFamily: ubzType.ui, fontSize: 15, color: t.text2,
          lineHeight: 1.65, marginBottom: 24 }}>
          {artist.bio || 'One of South Africa\'s enduring gospel voices — a sermon, a studio, and a hall full of people answering the call.'}
        </div>

        {/* Play primary */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 26 }}>
          <div style={{ flex: 1 }}>
            <UbzButton label="Play latest" variant="primary" dark={dark} onClick={onPlay}
              trailing={<span>▶</span>} />
          </div>
          <button style={{
            width: 56, height: 56, borderRadius: 999, background: 'transparent',
            border: `1.5px solid ${dark ? 'rgba(255,241,231,0.3)' : t.border}`,
            color: t.text1, fontSize: 16, cursor: 'pointer' }}>＋</button>
        </div>

        {/* Broadcasts list */}
        <div style={ubzLabel({ size: 11, color: t.text3, track: 1.8 })}>
          Broadcasts & Documentaries
        </div>
        <div style={{ marginTop: 12, marginBottom: 40 }}>
          {broadcasts.map((b, i) => (
            <div key={i}
              onClick={onPlay}
              style={{
                display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
                padding: '14px 0', borderTop: i === 0 ? `1px solid ${t.border}` : 'none',
                borderBottom: `1px solid ${t.border}`,
              }}>
              <div style={{ width: 42, height: 42, borderRadius: 10,
                background: `${ubzTokens.orange500}22`, display: 'grid', placeItems: 'center',
                color: ubzTokens.orange500, fontSize: 14, fontWeight: 700 }}>▶</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: ubzType.display, fontSize: 15, fontWeight: 700,
                  color: t.text1, letterSpacing: -0.2 }}>{b.title}</div>
                <div style={{ marginTop: 3, fontFamily: ubzType.ui, fontSize: 11,
                  color: t.text3, textTransform: 'uppercase', letterSpacing: 1.1 }}>
                  {b.tag} · {b.year} · {b.dur}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline pull-quote (for flagship only) */}
        {artist.flagship && (
          <div style={{
            padding: '22px 20px', borderRadius: 16,
            background: dark ? 'rgba(224,161,59,0.08)' : 'rgba(224,161,59,0.12)',
            border: `1px solid rgba(224,161,59,0.3)`,
            marginBottom: 120,
          }}>
            <div style={ubzLabel({ size: 10, color: ubzTokens.gold500, track: 2 })}>
              1985 – 2025
            </div>
            <div style={{ marginTop: 8, fontFamily: ubzType.editorial, fontStyle: 'italic',
              fontSize: 18, color: t.text1, lineHeight: 1.4 }}>
              "Forty years of Sunday mornings in one place."
            </div>
          </div>
        )}
      </div>

      <UbzBottomNav active="watch" dark={dark} />
    </div>
  );
}

// ───────── 09 · PLAYER ─────────
function ScreenPlayer({ onBack, dark = true }) {
  const [playing, setPlaying] = React.useState(true);
  const [cc, setCc] = React.useState(false);
  return (
    <div style={{ width: '100%', height: '100%', background: '#000', color: '#fff',
      position: 'relative', overflow: 'hidden' }}>
      {/* video stand-in */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${ubzPhotos.vChurchBanner})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0.85) 100%)' }} />
      <UbzGrain opacity={0.09} />

      {/* top bar */}
      <div style={{ position: 'absolute', top: 58, left: 18, right: 18, zIndex: 5,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{
          width: 38, height: 38, borderRadius: 999, background: 'rgba(0,0,0,0.45)',
          border: '1px solid rgba(255,255,255,0.25)', color: '#fff',
          cursor: 'pointer', fontSize: 16 }}>✕</button>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <UbzChip variant="live" dark={true}>
            <UbzLiveDot size={6} style={{ background: '#fff', boxShadow: '0 0 6px #fff' }} />
            Live
          </UbzChip>
          <span style={{ fontFamily: ubzType.mono, fontSize: 11,
            color: 'rgba(255,255,255,0.75)' }}>2,184 watching</span>
        </div>
      </div>

      {/* centre play/pause */}
      <div style={{ position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)', zIndex: 5 }}>
        <button onClick={() => setPlaying(p => !p)} style={{
          width: 88, height: 88, borderRadius: 999,
          background: 'rgba(232,90,28,0.9)', color: '#fff',
          border: '2px solid rgba(255,255,255,0.3)',
          cursor: 'pointer', fontSize: 28,
          boxShadow: '0 10px 30px rgba(232,90,28,0.5)',
        }}>{playing ? '❚❚' : '▶'}</button>
      </div>

      {/* captions strip */}
      {cc && (
        <div style={{
          position: 'absolute', bottom: 200, left: 24, right: 24, zIndex: 5,
          padding: '10px 14px', borderRadius: 8,
          background: 'rgba(0,0,0,0.6)', color: '#fff',
          fontFamily: ubzType.ui, fontSize: 14, textAlign: 'center',
          lineHeight: 1.4,
        }}>
          Siyabonga Baba · we thank you, Father.
        </div>
      )}

      {/* bottom panel */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 34, zIndex: 5,
        padding: '0 24px' }}>
        {/* title */}
        <div style={{ fontFamily: ubzType.ui, fontSize: 11, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: 1.6,
          color: 'rgba(255,255,255,0.75)' }}>Church Services · Live</div>
        <div style={{ marginTop: 6, fontFamily: ubzType.display, fontSize: 22,
          fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.15 }}>
          Sunday Service — The Light of the Morning.
        </div>

        {/* chapter markers */}
        <div style={{ marginTop: 16, display: 'flex', gap: 6, alignItems: 'center' }}>
          {[22, 18, 36, 28, 42, 14].map((w, i) => (
            <div key={i} style={{
              flex: w, height: 4, borderRadius: 2,
              background: i < 3 ? ubzTokens.orange500 : 'rgba(255,255,255,0.25)',
            }} />
          ))}
        </div>
        <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between',
          fontFamily: ubzType.mono, fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>
          <span>01:24:06</span>
          <span>— 38:24</span>
        </div>

        {/* controls row */}
        <div style={{ marginTop: 20, display: 'flex', gap: 14,
          justifyContent: 'space-around', alignItems: 'center' }}>
          {[
            { lbl: 'Chapters', icon: '☰' },
            { lbl: cc ? 'CC on' : 'CC',   icon: 'CC', active: cc, onTap: () => setCc(c => !c) },
            { lbl: 'Cast',     icon: '⇱' },
            { lbl: 'Share',    icon: '↗' },
            { lbl: 'Save',     icon: '＋' },
          ].map(c => (
            <button key={c.lbl} onClick={c.onTap} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              color: c.active ? ubzTokens.orange500 : '#fff',
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: c.active ? 'rgba(232,90,28,0.2)' : 'rgba(255,255,255,0.1)',
                border: `1px solid ${c.active ? ubzTokens.orange500 : 'rgba(255,255,255,0.18)'}`,
                display: 'grid', placeItems: 'center',
                fontSize: 14, fontWeight: 700,
              }}>{c.icon}</div>
              <span style={{ fontFamily: ubzType.ui, fontSize: 9, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 1.2 }}>{c.lbl}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ───────── 10 · SCHEDULE ─────────
function ScreenSchedule({ onBack, onPick, dark = true }) {
  const t = ubzTheme(dark);
  const [day, setDay] = React.useState(0); // 0 = today
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const dates = ['21','22','23','24','25','26','27'];

  // Schedule: array of events per day
  const schedules = [
    // Sunday
    [
      { time: '06:00', dur: '3h',  title: 'Sunday Service — Methodist',     tag: 'Live', artist: 'Amadodana Ase Wesile',     live: true,  vertical: 'Church' },
      { time: '09:30', dur: '1h',  title: 'Clap & Tap — Praise Hour',       tag: 'Live', artist: 'Isolomzi Gospel',          live: true,  vertical: 'Clap' },
      { time: '11:00', dur: '45m', title: 'Children of Christ',             tag: 'Set',  artist: 'Mamelodi Children of Christ', vertical: 'Music' },
      { time: '14:00', dur: '1h30m', title: '40 Years · Documentary',       tag: 'Doc',  artist: 'Amadodana · Archive',      vertical: 'Docs' },
      { time: '19:00', dur: '1h',  title: 'Sunday Evening Teaching',        tag: 'Live', artist: 'Professor Mahlaela',       live: true,  vertical: 'Church' },
    ],
    // Mon
    [
      { time: '06:00', dur: '30m', title: 'Morning Devotion',               tag: 'Daily',artist: 'Dr Pookgaodi',              vertical: 'Church' },
      { time: '12:00', dur: '45m', title: 'Worship at Noon',                tag: 'Daily',artist: 'Jerusalema Encha',          vertical: 'Music' },
      { time: '20:00', dur: '1h',  title: 'Sermon Series — Faith',          tag: 'Live', artist: 'Dr Mokala',                 live: true,  vertical: 'Church' },
    ],
    // Tue–Sat use the Monday shape
  ];
  const todayList = schedules[day] || schedules[1];

  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, color: t.text1,
      overflowY: 'auto', paddingTop: 64 }}>
      <div style={{ padding: '20px 24px 12px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', color: t.text1,
          fontFamily: ubzType.ui, fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: 0 }}>
          ← Back
        </button>
        <UbzMarkInline dark={dark} />
        <span style={{ width: 40 }} />
      </div>

      <div style={{ padding: '20px 24px 8px' }}>
        <div style={ubzLabel({ size: 11, color: ubzTokens.orange500, track: 1.8 })}>
          Live Schedule
        </div>
        <h1 style={{ margin: '8px 0 4px', fontFamily: ubzType.display,
          fontSize: 32, fontWeight: 700, letterSpacing: -0.8 }}>
          This week.
        </h1>
        <div style={{ fontFamily: ubzType.ui, fontSize: 13, color: t.text2 }}>
          All times South Africa · SAST (UTC+2)
        </div>
      </div>

      {/* Day strip */}
      <div style={{ display: 'flex', gap: 8, padding: '14px 24px 4px',
        overflowX: 'auto', scrollbarWidth: 'none' }}>
        {days.map((d, i) => {
          const active = i === day;
          return (
            <button key={d} onClick={() => setDay(i)} style={{
              flex: '0 0 auto', minWidth: 58, height: 72, borderRadius: 14,
              background: active ? ubzTokens.orange500 : t.surface,
              color: active ? '#fff' : t.text1,
              border: `1px solid ${active ? ubzTokens.orange500 : t.border}`,
              cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: 3, padding: 0,
            }}>
              <span style={{ fontFamily: ubzType.ui, fontSize: 10, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 1.4,
                opacity: 0.85 }}>{d}</span>
              <span style={{ fontFamily: ubzType.display, fontSize: 20, fontWeight: 700,
                letterSpacing: -0.5 }}>{dates[i]}</span>
            </button>
          );
        })}
      </div>

      {/* Event list */}
      <div style={{ padding: '12px 24px 130px' }}>
        {todayList.map((ev, i) => (
          <div key={i} onClick={onPick} style={{
            display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: 14,
            alignItems: 'center', padding: '18px 0',
            borderTop: i === 0 ? `1px solid ${t.border}` : 'none',
            borderBottom: `1px solid ${t.border}`, cursor: 'pointer',
          }}>
            <div>
              <div style={{ fontFamily: ubzType.mono, fontSize: 15, fontWeight: 700,
                color: t.text1 }}>{ev.time}</div>
              <div style={{ fontFamily: ubzType.ui, fontSize: 10,
                color: t.text3, marginTop: 3 }}>{ev.dur}</div>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: ubzType.display, fontSize: 15, fontWeight: 700,
                color: t.text1, letterSpacing: -0.2, lineHeight: 1.25 }}>
                {ev.title}
              </div>
              <div style={{ marginTop: 4, fontFamily: ubzType.ui, fontSize: 11,
                color: t.text3, textTransform: 'uppercase', letterSpacing: 1.1 }}>
                {ev.vertical} · {ev.artist}
              </div>
            </div>
            <div>
              {ev.live
                ? <UbzChip variant="live" dark={true}><UbzLiveDot size={6} style={{ background:'#fff', boxShadow:'0 0 6px #fff' }}/> Live</UbzChip>
                : <UbzChip variant="ghost" dark={dark}>Set</UbzChip>}
            </div>
          </div>
        ))}
      </div>

      <UbzBottomNav active="watch" dark={dark} />
    </div>
  );
}

Object.assign(window, {
  ScreenBrowse, ScreenArtists, ScreenArtistDetail, ScreenPlayer, ScreenSchedule,
});

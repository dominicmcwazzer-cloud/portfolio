// 6ix AM Club — shared primitives

// ───────── LOGO ─────────
// "6ix" handwritten script + "AM CLUB" modernist stack + ESTD 2026
function SixLogo({ size = 120, mono = true, dark = true, showEstd = true }) {
  const c = dark ? '#fff' : '#0A0A0A';
  const cSoft = dark ? 'rgba(255,255,255,0.7)' : 'rgba(10,10,10,0.7)';
  return (
    <div style={{
      display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
      gap: size * 0.02, fontFamily: sixType.display, color: c,
    }}>
      {/* 6ix script — hand-drawn */}
      <div style={{
        fontFamily: sixType.script,
        fontSize: size * 0.62, lineHeight: 1,
        color: cSoft, letterSpacing: -2,
        transform: 'translateX(-4%) rotate(-4deg)',
        marginBottom: -size * 0.18,
      }}>6ix</div>
      {/* AM CLUB */}
      <div style={{
        fontFamily: sixType.display,
        fontSize: size * 0.24, fontWeight: 700,
        letterSpacing: size * 0.008,
        color: c,
      }}>
        <span style={{ fontWeight: 300 }}>AM</span>
        <span style={{ fontWeight: 800 }}> CLUB</span>
      </div>
      {showEstd && (
        <div style={{
          ...sixLabel({ size: size * 0.07, color: cSoft, track: size * 0.02, weight: 600 }),
          marginTop: size * 0.02,
        }}>ESTD 2026</div>
      )}
    </div>
  );
}

// Compact horizontal mark for headers
function SixMarkInline({ dark = true }) {
  const c = dark ? '#fff' : '#0A0A0A';
  return (
    <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6, color: c }}>
      <span style={{
        fontFamily: sixType.script, fontSize: 24, transform: 'rotate(-4deg)',
        display: 'inline-block', lineHeight: 1, opacity: 0.9,
      }}>6ix</span>
      <span style={{
        fontFamily: sixType.display, fontSize: 12, fontWeight: 700,
        letterSpacing: 1.5,
      }}>
        <span style={{ fontWeight: 300 }}>AM</span> CLUB
      </span>
    </div>
  );
}

// ───────── BUTTON ─────────
function SixButton({
  label, onClick, variant = 'primary', dark = true,
  fullWidth = true, small = false, trailing, leading, disabled = false,
}) {
  const t = sixTheme(dark);
  const base = {
    fontFamily: sixType.ui,
    fontWeight: 700,
    fontSize: small ? 13 : 14,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    padding: small ? '12px 20px' : '18px 28px',
    borderRadius: 999,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: fullWidth ? '100%' : undefined,
    transition: 'transform 120ms ease, background 150ms ease',
    opacity: disabled ? 0.4 : 1,
  };
  const variants = {
    primary: { background: sixTokens.route, color: '#000' },
    secondary: {
      background: 'transparent',
      color: t.text1,
      border: `1.5px solid ${dark ? 'rgba(255,255,255,0.35)' : t.border}`,
    },
    ghost: { background: 'transparent', color: t.text1 },
    dark: { background: t.text1, color: t.bg },
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ ...base, ...variants[variant] }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {leading}
      {label}
      {trailing}
    </button>
  );
}

// ───────── CHIP ─────────
function SixChip({ children, variant = 'default', dark = true, style = {} }) {
  const t = sixTheme(dark);
  const variants = {
    default: { background: t.chipBg, color: t.text1, border: `1px solid ${t.border}` },
    route:   { background: 'rgba(255,90,31,0.12)', color: sixTokens.route, border: `1px solid rgba(255,90,31,0.35)` },
    solid:   { background: t.text1, color: t.bg, border: 'none' },
    live:    { background: sixTokens.route, color: '#000', border: 'none' },
    ghost:   { background: 'transparent', color: t.text2, border: `1px solid ${t.border}` },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 12px', borderRadius: 999,
      fontFamily: sixType.ui, fontSize: 11, fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: 1.2,
      ...variants[variant],
      ...style,
    }}>{children}</span>
  );
}

// ───────── CARD ─────────
function SixCard({ children, dark = true, pad = 20, style = {}, onClick }) {
  const t = sixTheme(dark);
  return (
    <div
      onClick={onClick}
      style={{
        background: t.surface,
        border: `1px solid ${t.border}`,
        borderRadius: 20,
        padding: pad,
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >{children}</div>
  );
}

// ───────── STAT TILE ─────────
function SixStat({ label, value, unit, dark = true, accent = false }) {
  const t = sixTheme(dark);
  return (
    <div style={{ flex: 1 }}>
      <div style={sixLabel({ size: 10, color: t.text3, track: 1.5 })}>{label}</div>
      <div style={{
        marginTop: 6,
        fontFamily: sixType.display,
        fontSize: 32, fontWeight: 700,
        letterSpacing: -0.8,
        lineHeight: 1,
        color: accent ? sixTokens.route : t.text1,
      }}>
        {value}
        {unit && <span style={{
          fontSize: 13, fontWeight: 500, marginLeft: 3,
          color: t.text3, letterSpacing: 0,
        }}>{unit}</span>}
      </div>
    </div>
  );
}

// ───────── NOISE / GRAIN OVERLAY ─────────
function SixGrain({ opacity = 0.08 }) {
  // SVG-generated grain
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`;
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `url("data:image/svg+xml;utf8,${svg}")`,
      opacity, mixBlendMode: 'overlay',
    }} />
  );
}

// ───────── BOTTOM NAV ─────────
// 5 tabs: RUN, EVENTS, BOARD, FEED, ME
function SixBottomNav({ active = 'run', onTab, dark = true }) {
  const t = sixTheme(dark);
  const tabs = [
    { key: 'run',    label: 'Run',    icon: 'run' },
    { key: 'events', label: 'Events', icon: 'cal' },
    { key: 'board',  label: 'Board',  icon: 'board' },
    { key: 'feed',   label: 'Feed',   icon: 'feed' },
    { key: 'me',     label: 'Me',     icon: 'user' },
  ];

  const icons = {
    run: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="16" cy="4.5" r="2" fill={c}/>
        <path d="M7 22l3-6 4 2-1-5 4-3 2 3 3-1" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    cal: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3.5" y="5.5" width="17" height="15" rx="2" stroke={c} strokeWidth="1.6"/>
        <path d="M3.5 10h17M8 3.5v4M16 3.5v4" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    board: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 20V10m8 10V4m8 16v-8" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    feed: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke={c} strokeWidth="1.6"/>
        <path d="M3.5 15l5-4 4 3 3-2 5 3" stroke={c} strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
        <circle cx="8" cy="8" r="1.3" fill={c}/>
      </svg>
    ),
    user: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3.5" stroke={c} strokeWidth="1.6"/>
        <path d="M4.5 20c1.4-3.8 4.4-6 7.5-6s6.1 2.2 7.5 6" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  };

  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 40,
      paddingBottom: 22, paddingTop: 10,
      background: dark
        ? 'linear-gradient(to top, rgba(10,10,10,0.98) 60%, rgba(10,10,10,0))'
        : 'linear-gradient(to top, rgba(250,250,250,0.98) 60%, rgba(250,250,250,0))',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        padding: '0 12px',
      }}>
        {tabs.map(tab => {
          const isActive = active === tab.key;
          const c = isActive ? t.text1 : t.text3;
          return (
            <button
              key={tab.key}
              onClick={() => onTab && onTab(tab.key)}
              style={{
                flex: 1, background: 'none', border: 'none',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 4, padding: '6px 0', cursor: 'pointer',
                position: 'relative',
              }}
            >
              {isActive && (
                <div style={{
                  position: 'absolute', top: -10, width: 24, height: 2,
                  background: sixTokens.route, borderRadius: 999,
                }} />
              )}
              {icons[tab.icon](c)}
              <span style={{
                fontFamily: sixType.ui, fontSize: 10, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 1.2, color: c,
              }}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ───────── STATUS BAR (custom — matches brief time 6:00 AM) ─────────
function SixStatusBar({ dark = true, time = '5:42' }) {
  const c = dark ? '#fff' : '#000';
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30,
      height: 54, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '16px 28px 0',
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 600, fontSize: 16, color: c,
      pointerEvents: 'none',
    }}>
      <span>{time}</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="7" width="3" height="4" rx="0.7" fill={c}/><rect x="4.6" y="5" width="3" height="6" rx="0.7" fill={c}/><rect x="9.2" y="2.5" width="3" height="8.5" rx="0.7" fill={c}/><rect x="13.8" y="0" width="3" height="11" rx="0.7" fill={c}/></svg>
        <svg width="15" height="11" viewBox="0 0 17 12"><path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5S3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2z" fill={c}/><circle cx="8.5" cy="9.8" r="1.4" fill={c}/></svg>
        <svg width="26" height="12" viewBox="0 0 27 13"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.4" fill="none"/><rect x="2" y="2" width="18" height="9" rx="2" fill={c}/><path d="M25 4.5v4c.8-.3 1.5-1.3 1.5-2s-.7-1.7-1.5-2z" fill={c}/></svg>
      </div>
    </div>
  );
}

// ───────── PHONE FRAME ─────────
// Wraps screen content in a 390×844 iPhone-style frame
function SixPhone({ children, dark = true, width = 390, height = 844, label }) {
  const bg = dark ? '#0A0A0A' : '#FAFAFA';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div
        data-screen-label={label}
        style={{
          width, height, borderRadius: 46, overflow: 'hidden',
          position: 'relative', background: bg,
          boxShadow: '0 40px 80px rgba(0,0,0,0.25), 0 0 0 8px #0a0a0a, 0 0 0 10px rgba(255,255,255,0.06)',
          fontFamily: sixType.ui,
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {/* dynamic island */}
        <div style={{
          position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
          width: 120, height: 34, borderRadius: 20, background: '#000', zIndex: 60,
        }} />
        <SixStatusBar dark={dark} />
        {/* home indicator */}
        <div style={{
          position: 'absolute', bottom: 8, left: 0, right: 0, zIndex: 70,
          display: 'flex', justifyContent: 'center', pointerEvents: 'none',
        }}>
          <div style={{
            width: 134, height: 5, borderRadius: 100,
            background: dark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.3)',
          }} />
        </div>
        {children}
      </div>
    </div>
  );
}

Object.assign(window, {
  SixLogo, SixMarkInline, SixButton, SixChip, SixCard, SixStat,
  SixGrain, SixBottomNav, SixStatusBar, SixPhone,
});

// Ubizo TV — shared primitives

// ───────── LOGO ─────────
// Real Ubizo wordmark — dawn arc + silhouetted "called" figure with
// arms raised, "TV" superscript. We do not redraw it; treat the PNG
// as a brand asset and scale responsibly.
function UbzLogo({ size = 140, dark = true, showTag = true }) {
  const src = dark ? ubzPhotos.logoWhite : ubzPhotos.logo;
  const tagColor = dark ? 'rgba(255,241,231,0.7)' : 'rgba(42,14,9,0.7)';
  return (
    <div style={{
      display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
      gap: size * 0.08,
    }}>
      <img src={src} alt="Ubizo TV"
        style={{ width: size, height: 'auto', display: 'block', userSelect: 'none' }}
        draggable={false} />
      {showTag && (
        <div style={ubzLabel({
          size: size * 0.08, color: tagColor, track: size * 0.025, weight: 700,
        })}>Let there be Light</div>
      )}
    </div>
  );
}

// Compact horizontal mark for headers — text-only so it stays crisp
// at small sizes where the PNG would blur
function UbzMarkInline({ dark = true }) {
  const c = dark ? ubzTokens.paper0 : ubzTokens.marono900;
  const sub = dark ? 'rgba(255,241,231,0.6)' : 'rgba(42,14,9,0.5)';
  return (
    <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6, color: c }}>
      <span style={{
        fontFamily: ubzType.display, fontSize: 20, fontWeight: 800,
        letterSpacing: -0.4, lineHeight: 1,
      }}>UBIZO</span>
      <span style={{
        fontFamily: ubzType.display, fontSize: 10, fontWeight: 700,
        letterSpacing: 1.2, color: ubzTokens.orange500,
      }}>TV</span>
      <span style={{
        fontFamily: ubzType.ui, fontSize: 10, fontWeight: 600,
        letterSpacing: 0.4, color: sub, marginLeft: 4,
      }}>· the calling</span>
    </div>
  );
}

// ───────── BUTTON ─────────
function UbzButton({
  label, onClick, variant = 'primary', dark = true,
  fullWidth = true, small = false, trailing, leading, disabled = false,
}) {
  const t = ubzTheme(dark);
  const base = {
    fontFamily: ubzType.ui,
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
    primary:   { background: ubzTokens.orange500, color: '#fff' },
    secondary: {
      background: 'transparent', color: t.text1,
      border: `1.5px solid ${dark ? 'rgba(255,241,231,0.35)' : t.border}`,
    },
    ghost:  { background: 'transparent', color: t.text1 },
    dark:   { background: t.text1, color: t.bg },
    gold:   { background: ubzTokens.gold500, color: ubzTokens.marono900 },
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
function UbzChip({ children, variant = 'default', dark = true, style = {} }) {
  const t = ubzTheme(dark);
  const variants = {
    default: { background: t.chipBg, color: t.text1, border: `1px solid ${t.border}` },
    orange:  { background: 'rgba(232,90,28,0.12)', color: ubzTokens.orange500, border: `1px solid rgba(232,90,28,0.35)` },
    gold:    { background: 'rgba(224,161,59,0.12)', color: ubzTokens.gold500, border: `1px solid rgba(224,161,59,0.35)` },
    solid:   { background: t.text1, color: t.bg, border: 'none' },
    live:    { background: ubzTokens.orange500, color: '#fff', border: 'none' },
    ghost:   { background: 'transparent', color: t.text2, border: `1px solid ${t.border}` },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 12px', borderRadius: 999,
      fontFamily: ubzType.ui, fontSize: 11, fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: 1.2,
      ...variants[variant],
      ...style,
    }}>{children}</span>
  );
}

// Pulsing live dot — used on "On Now" indicators
function UbzLiveDot({ size = 8, style = {} }) {
  return (
    <span style={{
      width: size, height: size, borderRadius: 999,
      background: ubzTokens.orange500,
      boxShadow: `0 0 ${size}px ${ubzTokens.orange500}`,
      display: 'inline-block',
      animation: 'ubzPulse 1.6s ease-in-out infinite',
      ...style,
    }}>
      <style>{`@keyframes ubzPulse { 0%,100% { opacity: 1 } 50% { opacity: 0.35 } }`}</style>
    </span>
  );
}

// ───────── CARD ─────────
function UbzCard({ children, dark = true, pad = 20, style = {}, onClick }) {
  const t = ubzTheme(dark);
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
function UbzStat({ label, value, unit, dark = true, accent = false }) {
  const t = ubzTheme(dark);
  return (
    <div style={{ flex: 1 }}>
      <div style={ubzLabel({ size: 10, color: t.text3, track: 1.5 })}>{label}</div>
      <div style={{
        marginTop: 6,
        fontFamily: ubzType.display,
        fontSize: 30, fontWeight: 700,
        letterSpacing: -0.8,
        lineHeight: 1,
        color: accent ? ubzTokens.orange500 : t.text1,
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
function UbzGrain({ opacity = 0.08 }) {
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
// 4 tabs: HOME / WATCH / RADIO / ME
function UbzBottomNav({ active = 'home', onTab, dark = true }) {
  const t = ubzTheme(dark);
  const tabs = [
    { key: 'home',  label: 'Home',  icon: 'home' },
    { key: 'watch', label: 'Watch', icon: 'play' },
    { key: 'radio', label: 'Radio', icon: 'radio' },
    { key: 'me',    label: 'Me',    icon: 'user' },
  ];

  const icons = {
    home: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 11l9-7 9 7v10a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1V11z"
          stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    play: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2.5" stroke={c} strokeWidth="1.6"/>
        <path d="M10 9.5v5l4.5-2.5-4.5-2.5z" fill={c}/>
      </svg>
    ),
    radio: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2.5" y="8" width="19" height="12" rx="2" stroke={c} strokeWidth="1.6"/>
        <path d="M6 4l10-1" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="16.5" cy="14" r="2.5" stroke={c} strokeWidth="1.6"/>
        <path d="M6 13h5M6 16h4" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
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
        ? `linear-gradient(to top, ${ubzTokens.ink900} 60%, rgba(26,15,10,0))`
        : `linear-gradient(to top, ${ubzTokens.paper0} 60%, rgba(255,251,246,0))`,
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
                  background: ubzTokens.orange500, borderRadius: 999,
                }} />
              )}
              {icons[tab.icon](c)}
              <span style={{
                fontFamily: ubzType.ui, fontSize: 10, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 1.2, color: c,
              }}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ───────── STATUS BAR (custom — Sunday-morning 6:00 AM) ─────────
function UbzStatusBar({ dark = true, time = '6:00' }) {
  const c = dark ? ubzTokens.paper0 : ubzTokens.marono900;
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
function UbzPhone({ children, dark = true, width = 390, height = 844, label }) {
  const bg = dark ? ubzTokens.ink900 : ubzTokens.paper0;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div
        data-screen-label={label}
        style={{
          width, height, borderRadius: 46, overflow: 'hidden',
          position: 'relative', background: bg,
          boxShadow: '0 40px 80px rgba(26,15,10,0.3), 0 0 0 8px #1a0f0a, 0 0 0 10px rgba(255,241,231,0.06)',
          fontFamily: ubzType.ui,
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {/* dynamic island */}
        <div style={{
          position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
          width: 120, height: 34, borderRadius: 20, background: '#000', zIndex: 60,
        }} />
        <UbzStatusBar dark={dark} />
        {/* home indicator */}
        <div style={{
          position: 'absolute', bottom: 8, left: 0, right: 0, zIndex: 70,
          display: 'flex', justifyContent: 'center', pointerEvents: 'none',
        }}>
          <div style={{
            width: 134, height: 5, borderRadius: 100,
            background: dark ? 'rgba(255,241,231,0.85)' : 'rgba(42,14,9,0.3)',
          }} />
        </div>
        {children}
      </div>
    </div>
  );
}

Object.assign(window, {
  UbzLogo, UbzMarkInline, UbzButton, UbzChip, UbzLiveDot, UbzCard, UbzStat,
  UbzGrain, UbzBottomNav, UbzStatusBar, UbzPhone,
});

// One Folder — shared primitives (PhoneFrame, DesktopFrame, components)

// ─── Status bar (iOS-style, SAST time, full signal) ───
function OfStatusBar({ dark, mode = 'light-content' }) {
  const fg = mode === 'light-content' ? '#FFFFFF' : ofTokens.ink900;
  return (
    <div style={{
      height: 44, padding: '0 22px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: ofType.ui, fontSize: 15, fontWeight: 600, color: fg,
      letterSpacing: -0.2,
    }}>
      <span>10:53</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 13 }}>
        <span style={{ letterSpacing: 0.5 }}>•••</span>
        <span style={{ fontWeight: 700 }}>5G</span>
        <span style={{
          width: 22, height: 11, borderRadius: 3,
          border: `1.5px solid ${fg}`, position: 'relative',
          padding: 1.5,
        }}>
          <span style={{
            display: 'block', width: '85%', height: '100%',
            background: fg, borderRadius: 1.5,
          }} />
        </span>
      </div>
    </div>
  );
}

// ─── Patient app bottom tab bar ───
function OfPatientTabBar({ dark, active = 'home', onTab }) {
  const t = ofTheme(dark);
  const tabs = [
    { key: 'home',   label: 'Home',     icon: '🏠' },
    { key: 'find',   label: 'Find',     icon: '📍' },
    { key: 'record', label: 'Folder',   icon: '📂' },
    { key: 'me',     label: 'Me',       icon: '👤' },
  ];
  return (
    <div style={{
      height: 78, paddingBottom: 14,
      display: 'flex', borderTop: `1px solid ${t.border}`,
      background: dark ? ofTokens.forest700 : '#FFFFFF',
    }}>
      {tabs.map(tab => {
        const on = tab.key === active;
        return (
          <button key={tab.key} onClick={() => onTab && onTab(tab.key)}
            style={{
              flex: 1, border: 'none', background: 'transparent',
              display: 'flex', flexDirection: 'column', gap: 4,
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', padding: '8px 0',
              color: on ? t.primary : t.text3,
            }}>
            <span style={{ fontSize: 20, opacity: on ? 1 : 0.85 }}>{tab.icon}</span>
            <span style={{
              fontFamily: ofType.ui, fontSize: 10, fontWeight: 700,
              letterSpacing: 0.4, textTransform: 'uppercase',
            }}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Clinician app bottom tab bar ───
function OfClinicianTabBar({ dark, active = 'queue', onTab }) {
  const t = ofTheme(dark);
  const tabs = [
    { key: 'queue',  label: 'Queue',    icon: '📋' },
    { key: 'search', label: 'Patient',  icon: '🔍' },
    { key: 'tools',  label: 'Tools',    icon: '🩺' },
    { key: 'me',     label: 'Me',       icon: '👤' },
  ];
  return (
    <div style={{
      height: 78, paddingBottom: 14,
      display: 'flex', borderTop: `1px solid ${t.border}`,
      background: dark ? ofTokens.forest700 : '#FFFFFF',
    }}>
      {tabs.map(tab => {
        const on = tab.key === active;
        return (
          <button key={tab.key} onClick={() => onTab && onTab(tab.key)}
            style={{
              flex: 1, border: 'none', background: 'transparent',
              display: 'flex', flexDirection: 'column', gap: 4,
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', padding: '8px 0',
              color: on ? t.primary : t.text3,
            }}>
            <span style={{ fontSize: 20, opacity: on ? 1 : 0.85 }}>{tab.icon}</span>
            <span style={{
              fontFamily: ofType.ui, fontSize: 10, fontWeight: 700,
              letterSpacing: 0.4, textTransform: 'uppercase',
            }}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Phone frame (iOS Pro size) ───
function OfPhone({ dark, label, statusBarMode = 'dark-content', children }) {
  const t = ofTheme(dark);
  return (
    <div data-screen-label={label} style={{
      width: 390, height: 844, position: 'relative',
      background: t.bg, color: t.text1,
      fontFamily: ofType.ui,
      borderRadius: 0, overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      <OfStatusBar dark={dark} mode={statusBarMode} />
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

// ─── Desktop frame (admin CMS) ───
function OfDesktop({ dark, label, children }) {
  const t = ofTheme(dark);
  return (
    <div data-screen-label={label} style={{
      width: 1280, height: 800,
      background: t.bg, color: t.text1, fontFamily: ofType.ui,
      borderRadius: 14, overflow: 'hidden',
      boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* macOS chrome */}
      <div style={{
        height: 36, padding: '0 16px',
        display: 'flex', alignItems: 'center', gap: 8,
        background: dark ? '#0A1310' : '#EDE5D4',
        borderBottom: `1px solid ${t.border}`,
      }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
        <span style={{
          marginLeft: 'auto', marginRight: 'auto',
          fontFamily: ofType.ui, fontSize: 11, fontWeight: 600,
          color: t.text3, letterSpacing: 0.4,
        }}>One Folder · Admin · admin.onefolder.gov.za</span>
      </div>
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

// ─── Admin sidebar (used inside OfDesktop) ───
function OfAdminSidebar({ dark, active = 'overview', onNav }) {
  const t = ofTheme(dark);
  const items = [
    { key: 'overview',     label: 'Overview',         icon: '🗺️' },
    { key: 'facility',     label: 'Facility detail',  icon: '🏥' },
    { key: 'workforce',    label: 'Workforce',        icon: '👥' },
    { key: 'surveillance', label: 'Surveillance',     icon: '📡' },
    { key: 'stock',        label: 'Stock predictions',icon: '💊' },
    { key: 'nhi',          label: 'NHI claims',       icon: '🧾' },
  ];
  return (
    <div style={{
      width: 240, padding: '24px 14px',
      background: dark ? ofTokens.forest700 : ofTokens.paper100,
      borderRight: `1px solid ${t.border}`,
      display: 'flex', flexDirection: 'column', gap: 4,
    }}>
      <div style={{
        padding: '8px 12px 20px', display: 'flex', flexDirection: 'column', gap: 4,
      }}>
        <div style={{
          fontFamily: ofType.display, fontSize: 18, fontWeight: 800,
          color: t.text1, letterSpacing: -0.3,
        }}>One Folder</div>
        <div style={ofLabel({ size: 10, color: t.primary, track: 1.4 })}>
          Provincial · KZN
        </div>
      </div>
      {items.map(item => {
        const on = item.key === active;
        return (
          <button key={item.key} onClick={() => onNav && onNav(item.key)}
            style={{
              border: 'none', background: on ? (dark ? ofTokens.forest500 : '#FFFFFF') : 'transparent',
              padding: '11px 14px', borderRadius: 10, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 10,
              fontFamily: ofType.ui, fontSize: 13, fontWeight: on ? 700 : 500,
              color: on ? t.primary : t.text2, textAlign: 'left',
            }}>
            <span style={{ fontSize: 16 }}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
      <div style={{ flex: 1 }} />
      <div style={{
        padding: 12, marginTop: 12,
        background: dark ? ofTokens.forest500 : ofTokens.paper200,
        borderRadius: 10,
      }}>
        <div style={ofLabel({ size: 9, color: t.text3, track: 1.4 })}>Signed in as</div>
        <div style={{
          fontFamily: ofType.ui, fontSize: 13, fontWeight: 700, color: t.text1,
          marginTop: 4,
        }}>S. Naidoo</div>
        <div style={{
          fontFamily: ofType.ui, fontSize: 11, color: t.text3, marginTop: 1,
        }}>Health Information Officer</div>
      </div>
    </div>
  );
}

// ─── Buttons ───
function OfButton({ children, dark, variant = 'primary', size = 'md', onClick, style = {} }) {
  const t = ofTheme(dark);
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 12, radius: 999 },
    md: { padding: '14px 20px', fontSize: 14, radius: 999 },
    lg: { padding: '18px 26px', fontSize: 15, radius: 999 },
  };
  const s = sizes[size];
  const variants = {
    primary: { background: t.primary, color: '#FFFFFF', border: 'none' },
    accent:  { background: t.accent,  color: '#FFFFFF', border: 'none' },
    ghost:   { background: 'transparent', color: t.text1, border: `1px solid ${t.border}` },
    crimson: { background: ofTokens.crimson500, color: '#FFFFFF', border: 'none' },
  };
  const v = variants[variant];
  return (
    <button onClick={onClick} style={{
      padding: s.padding, fontSize: s.fontSize, borderRadius: s.radius,
      fontFamily: ofType.ui, fontWeight: 700, letterSpacing: 0.2,
      cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
      ...v, ...style,
    }}>{children}</button>
  );
}

// ─── Pills / status badges ───
function OfPill({ children, color = 'aloe', dark, style = {} }) {
  const t = ofTheme(dark);
  const palette = {
    aloe:    { bg: dark ? 'rgba(46,125,91,0.18)'  : 'rgba(46,125,91,0.1)',  fg: dark ? ofTokens.aloe300  : ofTokens.aloe700 },
    sun:     { bg: dark ? 'rgba(255,122,77,0.18)' : 'rgba(255,122,77,0.12)',fg: dark ? ofTokens.sun300   : ofTokens.sun700 },
    ochre:   { bg: dark ? 'rgba(212,162,76,0.18)' : 'rgba(212,162,76,0.14)',fg: ofTokens.ochre500 },
    crimson: { bg: dark ? 'rgba(181,59,59,0.2)'   : 'rgba(181,59,59,0.1)',  fg: ofTokens.crimson500 },
    neutral: { bg: t.chipBg, fg: t.text2 },
  };
  const p = palette[color];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '5px 10px', borderRadius: 999,
      fontFamily: ofType.ui, fontSize: 10.5, fontWeight: 700,
      letterSpacing: 0.8, textTransform: 'uppercase',
      background: p.bg, color: p.fg, ...style,
    }}>{children}</span>
  );
}

// ─── Card surface ───
function OfCard({ dark, padding = 16, style = {}, children }) {
  const t = ofTheme(dark);
  return (
    <div style={{
      background: t.surface, borderRadius: 16, padding,
      border: `1px solid ${t.border}`, ...style,
    }}>{children}</div>
  );
}

// ─── Section label ───
function OfSectionLabel({ dark, color, children }) {
  const t = ofTheme(dark);
  return (
    <div style={ofLabel({ size: 10.5, color: color || t.primary, track: 1.6 })}>
      {children}
    </div>
  );
}

// ─── Big screen title ───
function OfTitle({ dark, size = 28, children, style = {} }) {
  const t = ofTheme(dark);
  return (
    <div style={{
      fontFamily: ofType.display, fontSize: size, fontWeight: 800,
      letterSpacing: -0.6, color: t.text1, lineHeight: 1.1, ...style,
    }}>{children}</div>
  );
}

// ─── HPRN identifier badge ───
function OfHprnBadge({ dark, hprn = ofSamplePatient.hprn, name }) {
  const t = ofTheme(dark);
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '8px 12px', borderRadius: 12,
      background: t.chipBg, border: `1px dashed ${t.border}`,
    }}>
      <span style={{
        fontFamily: ofType.mono, fontSize: 11, color: t.text2,
        letterSpacing: 0.4,
      }}>{hprn}</span>
      {name && <span style={{
        fontFamily: ofType.ui, fontSize: 11, fontWeight: 600, color: t.text1,
      }}>· {name}</span>}
    </div>
  );
}

// ─── Acuity dot ───
function OfAcuityDot({ acuity = 'green' }) {
  const c = acuity === 'red' ? ofTokens.crimson500
         : acuity === 'amber' ? ofTokens.ochre500
         : ofTokens.aloe500;
  return <span style={{
    width: 10, height: 10, borderRadius: '50%', background: c, display: 'inline-block',
    boxShadow: `0 0 0 3px ${c}30`,
  }} />;
}

// ─── Stock pill (in / low / out) ───
function OfStockPill({ stock, dark }) {
  const map = {
    in:  { color: 'aloe',    label: 'In stock' },
    low: { color: 'ochre',   label: 'Low stock' },
    out: { color: 'crimson', label: 'Out of stock' },
  };
  const m = map[stock] || map.in;
  return <OfPill color={m.color} dark={dark}>{m.label}</OfPill>;
}

// ─── Crisp QR placeholder (deterministic pattern) ───
function OfQrCode({ size = 160, color = ofTokens.ink900, bg = '#FFFFFF', code = 'HPRN-4721-8893-02' }) {
  const cells = 21;
  const cell = size / cells;
  const seed = Array.from(code).reduce((a,c) => a + c.charCodeAt(0), 0);
  const isFinder = (r,c) => {
    const inBox = (br,bc) => r >= br && r < br+7 && c >= bc && c < bc+7;
    const isBoxBorder = (br,bc) => {
      if (!inBox(br,bc)) return false;
      const lr = r - br, lc = c - bc;
      return lr === 0 || lr === 6 || lc === 0 || lc === 6
          || (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4);
    };
    return isBoxBorder(0,0) || isBoxBorder(0,cells-7) || isBoxBorder(cells-7,0);
  };
  const inFinder = (r,c) => (r < 8 && c < 8) || (r < 8 && c >= cells-8) || (r >= cells-8 && c < 8);
  const cellOn = (r,c) => {
    if (isFinder(r,c)) return true;
    if (inFinder(r,c)) return false;
    return ((r * 7 + c * 13 + seed) % 7) < 3;
  };
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      <rect x="0" y="0" width={size} height={size} fill={bg} />
      {Array.from({ length: cells }).map((_, r) =>
        Array.from({ length: cells }).map((_, c) =>
          cellOn(r, c) ? (
            <rect key={`${r}-${c}`} x={c*cell} y={r*cell} width={cell} height={cell} fill={color} />
          ) : null
        )
      )}
    </svg>
  );
}

// ─── One Folder logo mark — a folder sprouting an aloe ───
function OfAloeMark({ size = 40, color = ofTokens.aloe500 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ display: 'block' }}>
      {/* One Folder logo: the record (folder) + the aloe (healing, SA-native) */}
      <rect width="120" height="120" rx="27" fill="#2E7D5B" />
      <g fill="#FFAA88">
        <ellipse cx="62" cy="49" rx="5.4" ry="23" />
        <ellipse cx="62" cy="49" rx="5" ry="19" transform="rotate(34 62 49)" />
        <ellipse cx="62" cy="49" rx="5" ry="19" transform="rotate(-34 62 49)" />
      </g>
      <path
        d="M24 60 L24 54 C24 49 28 45 33 45 L51 45 C54 45 56.5 46.5 58 49 L61 54 C62 56 64 57 66 57 L88 57 C93 57 97 61 97 66 L97 88 C97 93 93 97 88 97 L33 97 C28 97 24 93 24 88 Z"
        fill="#FCF7EE"
      />
      <rect x="24" y="68" width="73" height="3.6" rx="1.8" fill="#2E7D5B" opacity="0.16" />
    </svg>
  );
}

// ─── Wordmark ───
function OfWordmark({ dark, size = 22, sub = true }) {
  const t = ofTheme(dark);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <OfAloeMark size={size + 14} color={t.primary} />
      <div>
        <div style={{
          fontFamily: ofType.display, fontSize: size, fontWeight: 800,
          letterSpacing: -0.4, color: t.text1, lineHeight: 1,
        }}>One Folder</div>
        {sub && <div style={ofLabel({ size: 8.5, color: t.text3, track: 1.4 })}>
          NALA · KOPANO · TSHEPO
        </div>}
      </div>
    </div>
  );
}

// ─── Persona avatar (initials in aloe circle) ───
function OfAvatar({ name = 'Sibongile Nkosi', size = 36, dark, color }) {
  const t = ofTheme(dark);
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('');
  return (
    <span style={{
      width: size, height: size, borderRadius: '50%',
      background: color || t.primary, color: '#FFFFFF',
      fontFamily: ofType.ui, fontSize: size * 0.4, fontWeight: 700,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      letterSpacing: 0.3,
    }}>{initials}</span>
  );
}

// ─── Field input (read-only display style) ───
function OfField({ dark, label, value, style = {} }) {
  const t = ofTheme(dark);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, ...style }}>
      <span style={ofLabel({ size: 9.5, color: t.text3, track: 1.2 })}>{label}</span>
      <span style={{
        fontFamily: ofType.ui, fontSize: 14, fontWeight: 600, color: t.text1,
      }}>{value}</span>
    </div>
  );
}

Object.assign(window, {
  OfStatusBar, OfPatientTabBar, OfClinicianTabBar,
  OfPhone, OfDesktop, OfAdminSidebar,
  OfButton, OfPill, OfCard, OfSectionLabel, OfTitle,
  OfHprnBadge, OfAcuityDot, OfStockPill,
  OfQrCode, OfAloeMark, OfWordmark, OfAvatar, OfField,
});

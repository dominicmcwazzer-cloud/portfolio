// One Folder — Patient screens 07-12

// ─── 07 Book Appointment ───
function OfScreenBook({ dark, goto }) {
  const t = ofTheme(dark);
  const slots = [
    { time: '08:00', avail: 'open' },
    { time: '08:30', avail: 'open' },
    { time: '09:00', avail: 'full' },
    { time: '09:30', avail: 'best' },
    { time: '10:00', avail: 'open' },
    { time: '10:30', avail: 'open' },
    { time: '11:00', avail: 'full' },
    { time: '11:30', avail: 'open' },
  ];
  const days = [
    { d: 'Mon', n: 4 }, { d: 'Tue', n: 5 }, { d: 'Wed', n: 6, on: true },
    { d: 'Thu', n: 7 }, { d: 'Fri', n: 8 }, { d: 'Sat', n: 9 },
  ];
  return (
    <OfPhone dark={dark} label="07 Book Appointment">
      <div style={{ flex: 1, padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto' }}>
        <button onClick={() => goto('p-find')} style={{
          background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
          color: t.text2, fontFamily: ofType.ui, fontSize: 13, fontWeight: 600,
          textAlign: 'left', alignSelf: 'flex-start',
        }}>← Chiawelo CHC</button>

        <div>
          <OfSectionLabel dark={dark}>Booking · HTN/T2D follow-up</OfSectionLabel>
          <OfTitle dark={dark} size={26} style={{ marginTop: 4 }}>Pick a time that fits.</OfTitle>
        </div>

        {/* Day strip */}
        <div style={{ display: 'flex', gap: 8 }}>
          {days.map(d => (
            <div key={d.n} style={{
              flex: 1, padding: '10px 0', borderRadius: 12,
              background: d.on ? t.primary : t.chipBg,
              color: d.on ? '#FFFFFF' : t.text2,
              textAlign: 'center', cursor: 'pointer',
              border: d.on ? 'none' : `1px solid ${t.border}`,
            }}>
              <div style={{ fontFamily: ofType.ui, fontSize: 9.5, fontWeight: 700, letterSpacing: 0.8, opacity: 0.85 }}>
                {d.d.toUpperCase()}
              </div>
              <div style={{ fontFamily: ofType.display, fontSize: 18, fontWeight: 800, marginTop: 2 }}>
                {d.n}
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontFamily: ofType.ui, fontSize: 12, color: t.text3 }}>
          Wed 6 May · May
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
          {slots.map(s => {
            const isBest = s.avail === 'best';
            const isFull = s.avail === 'full';
            return (
              <div key={s.time} style={{
                padding: 14, borderRadius: 12, textAlign: 'center',
                fontFamily: ofType.ui, fontSize: 14, fontWeight: 700,
                background: isBest ? t.primary : (isFull ? 'transparent' : t.surface),
                color: isBest ? '#FFFFFF' : (isFull ? t.text3 : t.text1),
                border: isBest ? 'none' : `1px solid ${isFull ? t.border : t.border}`,
                opacity: isFull ? 0.45 : 1,
                cursor: isFull ? 'not-allowed' : 'pointer',
                textDecoration: isFull ? 'line-through' : 'none',
              }}>
                {s.time}
                {isBest && <div style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: 0.8,
                  marginTop: 3, opacity: 0.85,
                }}>SHORTEST WAIT</div>}
              </div>
            );
          })}
        </div>

        <OfCard dark={dark} padding={14} style={{
          background: dark ? 'rgba(46,125,91,0.10)' : 'rgba(46,125,91,0.05)',
          border: `1px solid ${dark ? 'rgba(46,125,91,0.3)' : 'rgba(46,125,91,0.2)'}`,
        }}>
          <OfSectionLabel dark={dark}>Selected</OfSectionLabel>
          <div style={{
            fontFamily: ofType.display, fontSize: 22, fontWeight: 800,
            color: t.text1, letterSpacing: -0.4, marginTop: 6,
          }}>Wed 6 May · 09:30</div>
          <div style={{ fontFamily: ofType.ui, fontSize: 12.5, color: t.text2, marginTop: 4 }}>
            Chiawelo CHC · estimated wait 22 min · Atorvastatin in stock
          </div>
          <OfButton dark={dark} variant="primary" size="md" onClick={() => goto('p-home')}
            style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}>
            Confirm booking
          </OfButton>
        </OfCard>
      </div>
    </OfPhone>
  );
}

// ─── 08 Walk-in QR ───
function OfScreenWalkin({ dark, goto }) {
  const t = ofTheme(dark);
  const p = ofSamplePatient;
  return (
    <OfPhone dark={dark} label="08 Walk-in QR" statusBarMode="light-content">
      <div style={{
        position: 'absolute', inset: 0,
        background: dark
          ? 'linear-gradient(180deg, #1F5A40 0%, #133928 70%, #0F1815 100%)'
          : 'linear-gradient(180deg, #2E7D5B 0%, #1F5A40 70%, #133928 100%)',
      }} />
      <div style={{
        position: 'relative', height: '100%', padding: '20px 24px 28px',
        display: 'flex', flexDirection: 'column', gap: 18,
      }}>
        <button onClick={() => goto('p-home')} style={{
          background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
          color: '#FFFFFF', fontFamily: ofType.ui, fontSize: 13, fontWeight: 600,
          textAlign: 'left', alignSelf: 'flex-start', opacity: 0.85,
        }}>← Back</button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={ofLabel({ size: 10, color: 'rgba(255,255,255,0.7)', track: 1.4 })}>
            Walk-in · Chiawelo CHC
          </div>
          <div style={{
            fontFamily: ofType.display, fontSize: 26, fontWeight: 800,
            color: '#FFFFFF', letterSpacing: -0.5, lineHeight: 1.1,
          }}>Show this at the kiosk.</div>
        </div>

        <div style={{
          background: '#FFFFFF', borderRadius: 22, padding: 24,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
          boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
        }}>
          <OfQrCode size={220} color={ofTokens.aloe900} bg="#FFFFFF" code={p.hprn} />
          <div style={{
            fontFamily: ofType.mono, fontSize: 12, color: ofTokens.ink500,
            letterSpacing: 0.5,
          }}>{p.hprn}</div>
          <div style={{
            fontFamily: ofType.ui, fontSize: 15, fontWeight: 700, color: ofTokens.ink900,
          }}>{p.name}</div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: 14,
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.12)',
        }}>
          <div style={ofLabel({ size: 10, color: 'rgba(255,255,255,0.7)', track: 1.4 })}>
            Live queue · A-line
          </div>
          <div style={{
            fontFamily: ofType.display, fontSize: 36, fontWeight: 800,
            color: '#FFFFFF', letterSpacing: -1, marginTop: 4, lineHeight: 1,
          }}>You · #14</div>
          <div style={{ fontFamily: ofType.ui, fontSize: 12.5, color: 'rgba(255,255,255,0.75)', marginTop: 6 }}>
            6 ahead of you · ~22 min wait · Sister Lerato
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <div style={{
          fontFamily: ofType.editorial, fontSize: 13, fontStyle: 'italic',
          color: 'rgba(255,255,255,0.65)', textAlign: 'center', lineHeight: 1.5,
        }}>
          You can leave the waiting room. We'll notify you 5 minutes before your turn.
        </div>
      </div>
    </OfPhone>
  );
}

// ─── 09 My Record ───
function OfScreenRecord({ dark, goto }) {
  const t = ofTheme(dark);
  const p = ofSamplePatient;
  const visits = [
    { date: '12 Apr 2026', site: 'Chiawelo CHC', who: 'Sister Lerato',  reason: 'HTN/T2D follow-up', tag: 'aloe' },
    { date: '14 Mar 2026', site: 'Chiawelo CHC', who: 'Dr Mthembu',     reason: 'New script · Atorvastatin', tag: 'sun' },
    { date: '08 Feb 2026', site: 'Bara Acad. Hospital', who: 'OPD',     reason: 'Lab follow-up — HbA1c 7.8', tag: 'neutral' },
    { date: '15 Jan 2026', site: 'Chiawelo CHC', who: 'Sister Mokoena', reason: 'BP recheck',        tag: 'aloe' },
  ];
  return (
    <OfPhone dark={dark} label="09 My Record">
      <div style={{ flex: 1, padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', gap: 14, overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <OfTitle dark={dark} size={26}>My Folder</OfTitle>
          <button onClick={() => goto('p-privacy')}
            style={{
              background: 'transparent', border: `1px solid ${t.border}`, borderRadius: 999,
              padding: '6px 12px', fontFamily: ofType.ui, fontSize: 11, fontWeight: 700,
              color: t.text2, cursor: 'pointer',
            }}>🔒 Privacy</button>
        </div>

        <OfHprnBadge dark={dark} hprn={p.hprn} name={p.name + ` · ${p.age}${p.sex}`} />

        {/* Conditions */}
        <OfCard dark={dark} padding={14}>
          <OfSectionLabel dark={dark}>Active conditions</OfSectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
            {p.conditions.map(c => (
              <div key={c.key} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '10px 12px', borderRadius: 10, background: t.chipBg,
              }}>
                <div>
                  <div style={{ fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1 }}>
                    {c.label}
                  </div>
                  <div style={{ fontFamily: ofType.ui, fontSize: 11, color: t.text3, marginTop: 1 }}>
                    Since {c.since}
                  </div>
                </div>
                <OfPill dark={dark} color={c.status === 'Stable' ? 'aloe' : 'ochre'}>{c.status}</OfPill>
              </div>
            ))}
          </div>
        </OfCard>

        {/* Medication */}
        <OfCard dark={dark} padding={14}>
          <OfSectionLabel dark={dark}>Current medication</OfSectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
            {p.meds.map(m => (
              <div key={m.name} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                gap: 10,
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: ofType.ui, fontSize: 13.5, fontWeight: 700, color: t.text1 }}>
                    {m.name} · {m.dose}
                  </div>
                  <div style={{ fontFamily: ofType.ui, fontSize: 11, color: t.text3 }}>
                    {m.freq} · {m.ccmdd ? 'CCMDD pickup' : 'Clinic pickup'}
                  </div>
                </div>
                <OfStockPill stock={m.stock} dark={dark} />
              </div>
            ))}
          </div>
        </OfCard>

        {/* Visits */}
        <OfCard dark={dark} padding={14}>
          <OfSectionLabel dark={dark}>Visit history</OfSectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 6 }}>
            {visits.map((v, i) => (
              <div key={v.date} style={{
                padding: '10px 0',
                borderTop: i ? `1px solid ${t.border}` : 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10,
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: ofType.ui, fontSize: 13, fontWeight: 700, color: t.text1 }}>
                    {v.reason}
                  </div>
                  <div style={{ fontFamily: ofType.ui, fontSize: 11, color: t.text3, marginTop: 2 }}>
                    {v.site} · {v.who}
                  </div>
                </div>
                <div style={{
                  fontFamily: ofType.mono, fontSize: 10.5, color: t.text3, marginTop: 2,
                }}>{v.date}</div>
              </div>
            ))}
          </div>
        </OfCard>
      </div>
      <OfPatientTabBar dark={dark} active="record" onTab={(k) => {
        if (k === 'home') goto('p-home');
        if (k === 'find') goto('p-find');
      }} />
    </OfPhone>
  );
}

// ─── 10 Privacy Lock ───
function OfScreenPrivacy({ dark, goto }) {
  const t = ofTheme(dark);
  const conditions = [
    { name: 'Hypertension',     locked: false, label: 'Visible to all clinics' },
    { name: 'Type 2 Diabetes',  locked: false, label: 'Visible to all clinics' },
    { name: 'HIV status',       locked: true,  label: 'Visible only at Chiawelo CHC' },
    { name: 'Mental health notes', locked: true,  label: 'Visible only at Chiawelo CHC · Dr Mthembu' },
  ];
  return (
    <OfPhone dark={dark} label="10 Privacy Lock">
      <div style={{ flex: 1, padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto' }}>
        <button onClick={() => goto('p-record')} style={{
          background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
          color: t.text2, fontFamily: ofType.ui, fontSize: 13, fontWeight: 600,
          textAlign: 'left', alignSelf: 'flex-start',
        }}>← My Folder</button>

        <div>
          <OfSectionLabel dark={dark}>Privacy · POPIA</OfSectionLabel>
          <OfTitle dark={dark} size={26} style={{ marginTop: 4 }}>Your folder is yours.</OfTitle>
          <div style={{
            fontFamily: ofType.editorial, fontSize: 14, fontStyle: 'italic',
            color: t.text2, marginTop: 8, lineHeight: 1.5,
          }}>
            Some things you choose to keep close. Lock them to specific clinics or clinicians — they'll still be there when you need them.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {conditions.map(c => (
            <OfCard key={c.name} dark={dark} padding={14} style={{
              border: c.locked ? `1.5px solid ${t.primary}` : `1px solid ${t.border}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: c.locked ? t.primary : t.chipBg,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, color: '#FFFFFF',
                }}>{c.locked ? '🔒' : '🌍'}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1 }}>
                    {c.name}
                  </div>
                  <div style={{ fontFamily: ofType.ui, fontSize: 11.5, color: t.text3, marginTop: 2 }}>
                    {c.label}
                  </div>
                </div>
                <div style={{
                  width: 40, height: 22, borderRadius: 999,
                  background: c.locked ? t.primary : t.border,
                  position: 'relative', flexShrink: 0,
                }}>
                  <span style={{
                    position: 'absolute', top: 2, left: c.locked ? 20 : 2,
                    width: 18, height: 18, borderRadius: '50%', background: '#FFFFFF',
                  }} />
                </div>
              </div>
            </OfCard>
          ))}
        </div>

        <div style={{
          padding: 12, borderRadius: 10, background: t.chipBg,
          fontFamily: ofType.ui, fontSize: 11.5, color: t.text2, lineHeight: 1.5,
        }}>
          Locked conditions remain visible to your treating clinician at the named facility — for clinical safety. Emergency override is logged and shown to you within 24 hours.
        </div>
      </div>
    </OfPhone>
  );
}

// ─── 11 Access Log ───
function OfScreenAccess({ dark, goto }) {
  const t = ofTheme(dark);
  const accesses = [
    { who: 'Sister Lerato',   role: 'PHC Nurse',  facility: 'Chiawelo CHC',  when: 'Today · 10:42', viewed: 'Vitals · current meds', avatar: 'L', color: ofTokens.aloe500 },
    { who: 'Dr Mthembu',       role: 'Comm-svc Dr', facility: 'Chiawelo CHC',  when: '14 Apr · 09:18', viewed: 'Full folder · prescribed', avatar: 'M', color: ofTokens.aloe700 },
    { who: 'Pharmacist Ngwenya',role: 'CCMDD Pharm', facility: 'Chiawelo Pickup', when: '14 Apr · 11:02', viewed: 'Active scripts only', avatar: 'N', color: ofTokens.sun500 },
    { who: 'NHLS · Lab',       role: 'Automated',  facility: 'Bara Lab',      when: '08 Feb · 06:30', viewed: 'Wrote: HbA1c result', avatar: 'L', color: ofTokens.ochre500 },
  ];
  return (
    <OfPhone dark={dark} label="11 Access Log">
      <div style={{ flex: 1, padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', gap: 14, overflowY: 'auto' }}>
        <button onClick={() => goto('p-home')} style={{
          background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
          color: t.text2, fontFamily: ofType.ui, fontSize: 13, fontWeight: 600,
          textAlign: 'left', alignSelf: 'flex-start',
        }}>← Home</button>

        <div>
          <OfSectionLabel dark={dark}>This month</OfSectionLabel>
          <OfTitle dark={dark} size={26} style={{ marginTop: 4 }}>Who has seen your folder?</OfTitle>
          <div style={{ fontFamily: ofType.ui, fontSize: 13, color: t.text2, marginTop: 6, lineHeight: 1.5 }}>
            Every access is logged — by name, role, facility, and what was read. POPIA-aligned. No hidden viewers.
          </div>
        </div>

        <div style={{
          display: 'flex', gap: 8, padding: 14,
          background: dark ? 'rgba(46,125,91,0.12)' : 'rgba(46,125,91,0.06)',
          border: `1px solid ${dark ? 'rgba(46,125,91,0.3)' : 'rgba(46,125,91,0.2)'}`,
          borderRadius: 12,
        }}>
          <div style={{ flex: 1 }}>
            <div style={ofLabel({ size: 9.5, color: t.text3, track: 1.2 })}>Total accesses</div>
            <div style={{
              fontFamily: ofType.display, fontSize: 26, fontWeight: 800,
              color: t.text1, letterSpacing: -0.5,
            }}>4</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={ofLabel({ size: 9.5, color: t.text3, track: 1.2 })}>Facilities</div>
            <div style={{
              fontFamily: ofType.display, fontSize: 26, fontWeight: 800,
              color: t.text1, letterSpacing: -0.5,
            }}>2</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={ofLabel({ size: 9.5, color: t.text3, track: 1.2 })}>Anomalies</div>
            <div style={{
              fontFamily: ofType.display, fontSize: 26, fontWeight: 800,
              color: t.primary, letterSpacing: -0.5,
            }}>0</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {accesses.map((a, i) => (
            <OfCard key={i} dark={dark} padding={14}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: a.color, color: '#FFFFFF',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: ofType.ui, fontSize: 14, fontWeight: 700,
                }}>{a.avatar}</span>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1,
                  }}>
                    <span>{a.who}</span>
                    <span style={{ fontFamily: ofType.mono, fontSize: 10.5, fontWeight: 500, color: t.text3 }}>
                      {a.when}
                    </span>
                  </div>
                  <div style={{ fontFamily: ofType.ui, fontSize: 11.5, color: t.text3, marginTop: 2 }}>
                    {a.role} · {a.facility}
                  </div>
                  <div style={{
                    fontFamily: ofType.ui, fontSize: 12, color: t.text2, marginTop: 6,
                    padding: '6px 8px', borderRadius: 6, background: t.chipBg, display: 'inline-block',
                  }}>{a.viewed}</div>
                </div>
              </div>
            </OfCard>
          ))}
        </div>
      </div>
    </OfPhone>
  );
}

// ─── 12 Crisis Tools ───
function OfScreenCrisis({ dark, goto }) {
  const t = ofTheme(dark);
  const tiles = [
    { key: 'gbv',   title: 'I need help — quietly',
      sub: 'Discreet alert to social worker. The person you came with won\'t see this.',
      icon: '🛡️', color: 'crimson', emergency: true },
    { key: 'er',    title: 'Emergency · 112',
      sub: 'EMS dispatch with your location and HPRN. ARV/HIV status shared on request.',
      icon: '🚨', color: 'crimson', emergency: true },
    { key: 'sassa', title: 'SASSA disability grant renewal',
      sub: 'Your medical certificate is ready. Send to SASSA from your folder.',
      icon: '📋', color: 'aloe' },
    { key: 'death', title: 'Family bereavement',
      sub: 'Digital death certificate handoff to Home Affairs. Stops appointment reminders.',
      icon: '🤍', color: 'neutral' },
  ];
  return (
    <OfPhone dark={dark} label="12 Crisis Tools">
      <div style={{ flex: 1, padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto' }}>
        <button onClick={() => goto('p-home')} style={{
          background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
          color: t.text2, fontFamily: ofType.ui, fontSize: 13, fontWeight: 600,
          textAlign: 'left', alignSelf: 'flex-start',
        }}>← Home</button>

        <div>
          <OfSectionLabel dark={dark}>Crisis tools</OfSectionLabel>
          <OfTitle dark={dark} size={26} style={{ marginTop: 4 }}>The hardest things, made discreet.</OfTitle>
          <div style={{
            fontFamily: ofType.editorial, fontSize: 13.5, fontStyle: 'italic',
            color: t.text2, marginTop: 8, lineHeight: 1.5,
          }}>
            Some moments need a system that protects you. Tap once. We route the rest.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {tiles.map(tile => (
            <button key={tile.key} style={{
              border: tile.emergency ? `1.5px solid ${ofTokens.crimson500}` : `1px solid ${t.border}`,
              background: tile.emergency
                ? (dark ? 'rgba(181,59,59,0.12)' : 'rgba(181,59,59,0.06)')
                : t.surface,
              borderRadius: 14, padding: 16, cursor: 'pointer',
              display: 'flex', alignItems: 'flex-start', gap: 14, textAlign: 'left',
            }}>
              <span style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                background: tile.emergency ? ofTokens.crimson500 : t.chipBg,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20,
              }}>{tile.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: ofType.ui, fontSize: 14.5, fontWeight: 700,
                  color: tile.emergency ? ofTokens.crimson500 : t.text1,
                }}>{tile.title}</div>
                <div style={{
                  fontFamily: ofType.ui, fontSize: 12, color: t.text3, marginTop: 4,
                  lineHeight: 1.4,
                }}>{tile.sub}</div>
              </div>
            </button>
          ))}
        </div>

        <div style={{
          padding: 12, borderRadius: 10, background: t.chipBg,
          fontFamily: ofType.ui, fontSize: 11.5, color: t.text2, lineHeight: 1.5,
          textAlign: 'center',
        }}>
          GBV alerts route to Thuthuzela Care Centres · 0800 428 428.<br/>
          Emergency calls route to local EMS via 112.
        </div>
      </div>
    </OfPhone>
  );
}

Object.assign(window, {
  OfScreenBook, OfScreenWalkin, OfScreenRecord,
  OfScreenPrivacy, OfScreenAccess, OfScreenCrisis,
});

// One Folder — Clinician screens 13-21

// Helper: clinician-app top header
function CHeader({ dark, title, sub, onBack }) {
  const t = ofTheme(dark);
  return (
    <div style={{ padding: '14px 22px 8px', display: 'flex', alignItems: 'center', gap: 12 }}>
      {onBack && (
        <button onClick={onBack} style={{
          background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
          color: t.text2, fontFamily: ofType.ui, fontSize: 13, fontWeight: 600,
        }}>‹</button>
      )}
      <div style={{ flex: 1 }}>
        <div style={ofLabel({ size: 9.5, color: t.text3, track: 1.4 })}>
          Sister Lerato · Chiawelo CHC · {sub || 'Wed 6 May'}
        </div>
        <div style={{
          fontFamily: ofType.display, fontSize: 22, fontWeight: 800,
          color: t.text1, letterSpacing: -0.4, lineHeight: 1.1, marginTop: 2,
        }}>{title}</div>
      </div>
    </div>
  );
}

// ─── 13 Today's Queue ───
function OfScreenQueue({ dark, goto }) {
  const t = ofTheme(dark);
  return (
    <OfPhone dark={dark} label="13 Today’s Queue">
      <CHeader dark={dark} title={"Today's queue"} />
      <div style={{ padding: '4px 22px 12px', display: 'flex', gap: 12 }}>
        <Stat label="In queue" value={ofQueue.length} dark={dark} />
        <Stat label="Avg wait" value="22m" dark={dark} />
        <Stat label="Seen" value="14" dark={dark} />
        <Stat label="Power" value="✓ on" dark={dark} />
      </div>
      <div style={{ flex: 1, padding: '8px 22px 16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {ofQueue.map((q, i) => (
          <button key={q.ticket} onClick={() => goto('c-summary')}
            style={{
              border: `1px solid ${t.border}`, background: t.surface,
              borderRadius: 14, padding: 12, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left',
            }}>
            <OfAcuityDot acuity={q.acuity} />
            <div style={{
              fontFamily: ofType.mono, fontSize: 11, color: t.text3,
              minWidth: 44,
            }}>{q.ticket}</div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1,
              }}>{q.name} {q.note && <span style={{ color: ofTokens.ochre500, fontSize: 11, fontWeight: 600 }}>· {q.note}</span>}</div>
              <div style={{ fontFamily: ofType.ui, fontSize: 11.5, color: t.text3, marginTop: 2 }}>
                {q.reason} · {q.hprn}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: ofType.display, fontSize: 16, fontWeight: 800, color: t.text1, letterSpacing: -0.3 }}>
                {q.wait}m
              </div>
              <div style={ofLabel({ size: 8.5, color: t.text3, track: 1.2 })}>WAITING</div>
            </div>
          </button>
        ))}
      </div>
      <OfClinicianTabBar dark={dark} active="queue" />
    </OfPhone>
  );
}

// ─── 14 Patient Summary ───
function OfScreenSummary({ dark, goto }) {
  const t = ofTheme(dark);
  const p = ofSamplePatient;
  return (
    <OfPhone dark={dark} label="14 Patient Summary">
      <CHeader dark={dark} title={p.name} sub="Ticket A 014 · 22m waited" onBack={() => goto('c-queue')} />

      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 22px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <OfPill dark={dark} color="aloe">Age {p.age} · {p.sex}</OfPill>
          <OfPill dark={dark} color="neutral">{p.idType}</OfPill>
          <OfPill dark={dark} color="ochre">2 chronic</OfPill>
          <OfPill dark={dark} color="crimson">⚠ Penicillin</OfPill>
        </div>

        <OfHprnBadge dark={dark} hprn={p.hprn} />

        {/* Last visit */}
        <OfCard dark={dark} padding={14}>
          <OfSectionLabel dark={dark}>Last visit · 12 Apr 2026</OfSectionLabel>
          <div style={{
            fontFamily: ofType.ui, fontSize: 13, color: t.text2, marginTop: 6, lineHeight: 1.5,
          }}>BP 138/86 · Glucose 7.2 · Adherent. Adjusted Atorvastatin to 10mg. Sister Lerato.</div>
        </OfCard>

        {/* Conditions */}
        <OfCard dark={dark} padding={14}>
          <OfSectionLabel dark={dark}>Active</OfSectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
            {p.conditions.map(c => (
              <div key={c.key} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: ofType.ui, fontSize: 13 }}>
                <span style={{ color: t.text1, fontWeight: 600 }}>{c.label}</span>
                <span style={{ color: t.text3 }}>since {c.since}</span>
              </div>
            ))}
          </div>
        </OfCard>

        {/* Meds */}
        <OfCard dark={dark} padding={14}>
          <OfSectionLabel dark={dark}>On treatment</OfSectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
            {p.meds.map(m => (
              <div key={m.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: ofType.ui, fontSize: 13 }}>
                <span style={{ color: t.text1, fontWeight: 600 }}>{m.name} {m.dose} {m.freq}</span>
                <OfStockPill stock={m.stock} dark={dark} />
              </div>
            ))}
          </div>
        </OfCard>

        <div style={{ display: 'flex', gap: 8 }}>
          <OfButton dark={dark} variant="primary" size="md"
            onClick={() => goto('c-consult')}
            style={{ flex: 1, justifyContent: 'center' }}>
            Start consult →
          </OfButton>
          <OfButton dark={dark} variant="ghost" size="md"
            onClick={() => goto('c-fetch')}>
            Fetch other folders
          </OfButton>
        </div>
      </div>
    </OfPhone>
  );
}

// ─── 15 Consult Capture (the <90s screen) ───
function OfScreenConsult({ dark, goto }) {
  const t = ofTheme(dark);
  const dispositions = [
    { key: 'continue', label: 'Continue meds', icon: '✓', color: 'aloe',  primary: true },
    { key: 'adjust',   label: 'Adjust dose',    icon: '↕', color: 'sun' },
    { key: 'refer',    label: 'Refer (Vula)',   icon: '→', color: 'ochre' },
    { key: 'admit',    label: 'Admit',          icon: '⚠', color: 'crimson' },
  ];
  return (
    <OfPhone dark={dark} label="15 Consult Capture">
      <CHeader dark={dark} title={"Consult — Sibongile N."} sub="Started 10:47 · 00:42 elapsed" onBack={() => goto('c-summary')} />

      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 22px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Vitals strip */}
        <OfCard dark={dark} padding={14}>
          <OfSectionLabel dark={dark}>Vitals · 22 sec</OfSectionLabel>
          <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
            <Vital label="BP" value="142/88" dark={dark} flag="ochre" />
            <Vital label="Pulse" value="76" dark={dark} />
            <Vital label="Temp" value="36.7" dark={dark} />
            <Vital label="Gluc" value="8.1" dark={dark} flag="ochre" />
          </div>
        </OfCard>

        {/* Complaint */}
        <OfCard dark={dark} padding={14}>
          <OfSectionLabel dark={dark}>Complaint</OfSectionLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
            {['Headache · 3 days', 'Tired afternoons', 'Adherent'].map(c => (
              <span key={c} style={{
                padding: '6px 12px', borderRadius: 999,
                background: t.chipBg, color: t.text1, border: `1px solid ${t.border}`,
                fontFamily: ofType.ui, fontSize: 12, fontWeight: 600,
              }}>{c}</span>
            ))}
            <span style={{
              padding: '6px 12px', borderRadius: 999,
              background: 'transparent', color: t.text3, border: `1px dashed ${t.border}`,
              fontFamily: ofType.ui, fontSize: 12, fontWeight: 600,
            }}>+ tap or speak</span>
          </div>
          <div style={{
            marginTop: 10, padding: 8, background: t.chipBg, borderRadius: 8,
            fontFamily: ofType.ui, fontSize: 11, color: t.text3, display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{
              display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
              background: ofTokens.crimson500, animation: 'pulse 1.6s infinite',
            }} />
            🎤 Voice capture · Sepedi → English transcription
          </div>
        </OfCard>

        {/* Disposition */}
        <OfCard dark={dark} padding={14}>
          <OfSectionLabel dark={dark}>Disposition</OfSectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, marginTop: 10 }}>
            {dispositions.map(d => (
              <button key={d.key}
                onClick={() => d.key === 'refer' ? goto('c-refer') : goto('c-prescribe')}
                style={{
                  padding: 12, borderRadius: 12,
                  background: d.primary ? t.primary : t.chipBg,
                  color: d.primary ? '#FFFFFF' : t.text1,
                  border: d.primary ? 'none' : `1px solid ${t.border}`,
                  fontFamily: ofType.ui, fontSize: 12.5, fontWeight: 700,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  cursor: 'pointer', letterSpacing: 0.2,
                }}>
                <span style={{ fontSize: 16 }}>{d.icon}</span>
                <span>{d.label}</span>
              </button>
            ))}
          </div>
        </OfCard>

        <div style={{
          padding: '10px 12px', borderRadius: 10, background: t.chipBg,
          fontFamily: ofType.ui, fontSize: 11, color: t.text3, display: 'flex', justifyContent: 'space-between',
        }}>
          <span>Beats paper · target &lt; 90s</span>
          <span style={{ color: t.primary, fontWeight: 700 }}>Auto-saved · offline OK</span>
        </div>
      </div>
    </OfPhone>
  );
}

function Vital({ label, value, dark, flag }) {
  const t = ofTheme(dark);
  const flagColor = flag === 'ochre' ? ofTokens.ochre500 : t.text1;
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={ofLabel({ size: 9, color: t.text3, track: 1.2 })}>{label}</span>
      <span style={{
        fontFamily: ofType.display, fontSize: 18, fontWeight: 800,
        color: flagColor, letterSpacing: -0.3,
      }}>{value}</span>
    </div>
  );
}

// ─── 16 Prescribe ───
function OfScreenPrescribe({ dark, goto }) {
  const t = ofTheme(dark);
  const drugs = [
    { name: 'Amlodipine 5mg',     stock: 'in',  ccmdd: true,  picked: true },
    { name: 'Metformin 500mg',    stock: 'in',  ccmdd: true,  picked: true },
    { name: 'Atorvastatin 10mg',  stock: 'low', ccmdd: true,  picked: true,
      alt: 'Soshanguve CHC · 4km · 28 boxes available' },
    { name: 'Hydrochlorothiazide 25mg', stock: 'in', ccmdd: true, picked: false },
  ];
  return (
    <OfPhone dark={dark} label="16 Prescribe">
      <CHeader dark={dark} title="Prescribe" sub="Sibongile N. · CCMDD eligible" onBack={() => goto('c-consult')} />
      <div style={{ flex: 1, padding: '4px 22px 16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {drugs.map(d => (
            <OfCard key={d.name} dark={dark} padding={14} style={{
              border: d.picked ? `1.5px solid ${t.primary}` : `1px solid ${t.border}`,
              opacity: d.picked ? 1 : 0.7,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  width: 22, height: 22, borderRadius: 6,
                  background: d.picked ? t.primary : 'transparent',
                  border: d.picked ? 'none' : `1.5px solid ${t.border}`,
                  color: '#FFFFFF', display: 'inline-flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 12, fontWeight: 700,
                }}>{d.picked ? '✓' : ''}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1 }}>{d.name}</div>
                  <div style={{ fontFamily: ofType.ui, fontSize: 11, color: t.text3, marginTop: 2 }}>
                    {d.ccmdd ? 'CCMDD pickup · 60 days' : 'Clinic pickup'}
                  </div>
                </div>
                <OfStockPill stock={d.stock} dark={dark} />
              </div>
              {d.alt && (
                <div style={{
                  marginTop: 10, padding: 10, borderRadius: 10,
                  background: dark ? 'rgba(212,162,76,0.10)' : 'rgba(212,162,76,0.10)',
                  border: `1px solid rgba(212,162,76,0.3)`,
                  fontFamily: ofType.ui, fontSize: 11.5, color: t.text2,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span style={{ color: ofTokens.ochre500, fontSize: 14 }}>⚠</span>
                  <span>Alternative: <strong>{d.alt}</strong></span>
                </div>
              )}
            </OfCard>
          ))}
        </div>

        <div style={{
          padding: 12, borderRadius: 10, background: t.chipBg,
          fontFamily: ofType.ui, fontSize: 11.5, color: t.text2, lineHeight: 1.5,
        }}>
          Stock data live from <strong>Stock Visibility System</strong> · last sync 4 min ago.
        </div>

        <OfButton dark={dark} variant="primary" size="lg"
          onClick={() => goto('c-handoff')}
          style={{ width: '100%', justifyContent: 'center' }}>
          Issue script · Send to CCMDD
        </OfButton>
      </div>
    </OfPhone>
  );
}

// ─── 17 Refer via Vula ───
function OfScreenRefer({ dark, goto }) {
  const t = ofTheme(dark);
  return (
    <OfPhone dark={dark} label="17 Refer via Vula">
      <CHeader dark={dark} title="Refer · cardiology" sub="Sibongile N." onBack={() => goto('c-consult')} />
      <div style={{ flex: 1, padding: '4px 22px 16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>

        <div style={{
          padding: 14, borderRadius: 14,
          background: dark ? 'rgba(46,125,91,0.12)' : 'rgba(46,125,91,0.06)',
          border: `1px solid ${dark ? 'rgba(46,125,91,0.3)' : 'rgba(46,125,91,0.2)'}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              width: 36, height: 36, borderRadius: 10,
              background: '#FFFFFF', display: 'inline-flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 18,
            }}>🩺</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: ofType.ui, fontSize: 14, fontWeight: 800, color: t.text1 }}>
                Vula Mobile
              </div>
              <div style={{ fontFamily: ofType.ui, fontSize: 11, color: t.text3 }}>
                One Folder hands off · context pre-filled
              </div>
            </div>
            <OfPill dark={dark} color="aloe">Connected</OfPill>
          </div>
        </div>

        <OfCard dark={dark} padding={14}>
          <OfSectionLabel dark={dark}>Pre-filled context · sent to specialist</OfSectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
            <OfField dark={dark} label="Patient" value="Sibongile Nkosi · F · 67 · HPRN ...8893" />
            <OfField dark={dark} label="Concern" value="Resistant HTN · BP 142/88 on triple Rx · 6 weeks" />
            <OfField dark={dark} label="Most recent labs (NHLS)" value="HbA1c 7.8 · Cr 92 · K 4.1 · 08 Feb 2026" />
            <OfField dark={dark} label="Receiving" value="CHBAH Cardiology OPD · Dr Kekana on call" />
          </div>
        </OfCard>

        <OfCard dark={dark} padding={14}>
          <OfSectionLabel dark={dark}>Attached</OfSectionLabel>
          <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
            {['ECG · 6 May 10:51', 'BP trend · 90 days', 'Med list', 'Allergy: Penicillin'].map(a => (
              <OfPill key={a} dark={dark} color="neutral">{a}</OfPill>
            ))}
          </div>
        </OfCard>

        <OfButton dark={dark} variant="primary" size="lg"
          onClick={() => goto('c-handoff')}
          style={{ width: '100%', justifyContent: 'center' }}>
          Open in Vula ↗
        </OfButton>

        <div style={{
          fontFamily: ofType.editorial, fontSize: 12, fontStyle: 'italic',
          color: t.text3, textAlign: 'center', lineHeight: 1.5,
        }}>
          We don't replace Vula. We hand off to it — with context that used to live on a referral letter.
        </div>
      </div>
    </OfPhone>
  );
}

// ─── 18 Cross-Province Fetch ───
function OfScreenFetch({ dark, goto }) {
  const t = ofTheme(dark);
  const matches = [
    { facility: 'Mthatha General Hospital', province: 'Eastern Cape',  date: '04 Apr 2026', what: 'ANC visit 1', primary: true },
    { facility: 'King Sabata Dalindyebo CHC', province: 'Eastern Cape', date: '17 Mar 2026', what: 'Booking ANC' },
    { facility: 'Madwaleni Hospital',       province: 'Eastern Cape',  date: '02 Mar 2026', what: 'NHLS labs · Hb 11.2' },
  ];
  return (
    <OfPhone dark={dark} label="18 Cross-Province">
      <CHeader dark={dark} title="Cross-province fetch" sub="Thandiwe M. · 28 · ANC follow-up" onBack={() => goto('c-queue')} />
      <div style={{ flex: 1, padding: '4px 22px 16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>

        <div style={{
          padding: 12, borderRadius: 12, background: t.chipBg,
          display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: ofType.ui, fontSize: 12.5, color: t.text2,
        }}>
          <span style={{ fontSize: 18 }}>🔍</span>
          <span>Searching <strong>9 provinces</strong> · matched 3 records · ready in 2.4s</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {matches.map((m, i) => (
            <OfCard key={i} dark={dark} padding={14} style={{
              border: m.primary ? `1.5px solid ${t.primary}` : `1px solid ${t.border}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1,
                  }}>{m.what}</div>
                  <div style={{ fontFamily: ofType.ui, fontSize: 11.5, color: t.text3, marginTop: 2 }}>
                    {m.facility} · {m.province}
                  </div>
                </div>
                <div style={{ fontFamily: ofType.mono, fontSize: 10.5, color: t.text3 }}>
                  {m.date}
                </div>
              </div>
              {m.primary && (
                <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                  <OfPill dark={dark} color="aloe">BP 118/72</OfPill>
                  <OfPill dark={dark} color="aloe">Hb 11.2</OfPill>
                  <OfPill dark={dark} color="aloe">Booked 28w</OfPill>
                </div>
              )}
            </OfCard>
          ))}
        </div>

        <OfCard dark={dark} padding={14} style={{
          background: dark ? 'rgba(46,125,91,0.10)' : 'rgba(46,125,91,0.05)',
          border: `1px solid ${dark ? 'rgba(46,125,91,0.3)' : 'rgba(46,125,91,0.2)'}`,
        }}>
          <OfSectionLabel dark={dark}>Stitch into local folder?</OfSectionLabel>
          <div style={{ fontFamily: ofType.ui, fontSize: 12.5, color: t.text2, marginTop: 6, lineHeight: 1.5 }}>
            Read-only on first visit. Patient must consent to merge into Soshanguve folder. Logged for the patient to see.
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <OfButton dark={dark} variant="primary" size="sm">Read-only</OfButton>
            <OfButton dark={dark} variant="ghost" size="sm">Request merge</OfButton>
          </div>
        </OfCard>
      </div>
    </OfPhone>
  );
}

// ─── 19 CHW Field Mode ───
function OfScreenChw({ dark, goto }) {
  const t = ofTheme(dark);
  const houses = [
    { hh: 'Mokoena · #14 Phelandaba', members: 4, due: 'TB sputum · 2 of 4', priority: 'amber', visited: false },
    { hh: 'Sithole · #22 Mahlasedi',  members: 3, due: 'ART pickup · 1 of 3', priority: 'red', visited: false },
    { hh: 'Khumalo · #08 Letlhaba',   members: 5, due: 'Child imm · 1 of 5',  priority: 'amber', visited: true },
  ];
  return (
    <OfPhone dark={dark} label="19 CHW Field" statusBarMode={dark ? 'light-content' : 'dark-content'}>
      <CHeader dark={dark} title="Field today · GaMashashane" sub="CHW Mosima · 12 households" />
      <div style={{ padding: '4px 22px 8px', display: 'flex', gap: 10 }}>
        <OfPill dark={dark} color="ochre">📡 Offline</OfPill>
        <OfPill dark={dark} color="aloe">Syncs at clinic</OfPill>
        <OfPill dark={dark} color="neutral">Battery 64%</OfPill>
      </div>

      <div style={{ flex: 1, padding: '8px 22px 16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {houses.map(h => (
          <OfCard key={h.hh} dark={dark} padding={14}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <span style={{
                width: 38, height: 38, borderRadius: 10,
                background: h.visited ? 'rgba(46,125,91,0.18)' : t.chipBg,
                color: h.visited ? ofTokens.aloe500 : t.text2,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18,
              }}>{h.visited ? '✓' : '🏘️'}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1 }}>
                  {h.hh}
                </div>
                <div style={{ fontFamily: ofType.ui, fontSize: 11.5, color: t.text3, marginTop: 2 }}>
                  {h.members} members · {h.due}
                </div>
              </div>
              <OfAcuityDot acuity={h.priority} />
            </div>
          </OfCard>
        ))}
      </div>

      <div style={{
        padding: 14, margin: '0 16px 16px', borderRadius: 14,
        background: dark ? 'rgba(255,122,77,0.10)' : 'rgba(255,122,77,0.08)',
        border: `1px solid ${dark ? 'rgba(255,122,77,0.4)' : 'rgba(255,122,77,0.3)'}`,
        display: 'flex', gap: 10, alignItems: 'center',
      }}>
        <span style={{ fontSize: 22 }}>📡</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: ofType.ui, fontSize: 12.5, fontWeight: 700, color: t.text1 }}>
            8 visits captured offline
          </div>
          <div style={{ fontFamily: ofType.ui, fontSize: 10.5, color: t.text3, marginTop: 2 }}>
            Syncs to clinic when in range. Nothing lost.
          </div>
        </div>
      </div>
    </OfPhone>
  );
}

// ─── 20 Locum Scope ───
function OfScreenLocum({ dark, goto }) {
  const t = ofTheme(dark);
  const scopes = [
    { facility: 'Vryburg District Hospital', province: 'North West',  role: 'Comm. service · OPD', start: 'Jan 2026', end: 'Dec 2026', current: true },
    { facility: 'Bara Acad. Hospital',        province: 'Gauteng',     role: 'Internship · Y2',     start: 'Jan 2024', end: 'Dec 2025', current: false },
    { facility: 'Edendale Hospital',          province: 'KZN',         role: 'Internship · Y1',     start: 'Jan 2023', end: 'Dec 2023', current: false },
  ];
  return (
    <OfPhone dark={dark} label="20 Locum Scope">
      <CHeader dark={dark} title="Your scope" sub="Dr T. Mthembu · HPCSA MP0817244" />
      <div style={{ flex: 1, padding: '4px 22px 16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>

        <OfCard dark={dark} padding={14} style={{
          background: dark ? 'rgba(46,125,91,0.10)' : 'rgba(46,125,91,0.05)',
          border: `1.5px solid ${t.primary}`,
        }}>
          <OfSectionLabel dark={dark}>Active scope</OfSectionLabel>
          <div style={{
            fontFamily: ofType.display, fontSize: 22, fontWeight: 800,
            color: t.text1, letterSpacing: -0.4, marginTop: 8,
          }}>Vryburg District Hospital</div>
          <div style={{ fontFamily: ofType.ui, fontSize: 12.5, color: t.text2, marginTop: 4 }}>
            North West · OPD + Ward 4 · Jan–Dec 2026
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
            <OfPill dark={dark} color="aloe">Read · facility</OfPill>
            <OfPill dark={dark} color="aloe">Write · facility</OfPill>
            <OfPill dark={dark} color="ochre">Read · cross-province (audit-logged)</OfPill>
            <OfPill dark={dark} color="neutral">Refer · Vula</OfPill>
          </div>
        </OfCard>

        <OfSectionLabel dark={dark} color={t.text3}>Past scopes (read-only)</OfSectionLabel>
        {scopes.filter(s => !s.current).map(s => (
          <OfCard key={s.facility} dark={dark} padding={14}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1 }}>
                  {s.facility}
                </div>
                <div style={{ fontFamily: ofType.ui, fontSize: 11.5, color: t.text3, marginTop: 2 }}>
                  {s.province} · {s.role}
                </div>
              </div>
              <div style={{ fontFamily: ofType.mono, fontSize: 10.5, color: t.text3 }}>
                {s.start} – {s.end}
              </div>
            </div>
          </OfCard>
        ))}

        <div style={{
          padding: 12, borderRadius: 10, background: t.chipBg,
          fontFamily: ofType.editorial, fontSize: 12, fontStyle: 'italic',
          color: t.text2, lineHeight: 1.5,
        }}>
          Scoped permissions auto-expire when your rotation ends. No tail-access. Audit complete.
        </div>
      </div>
    </OfPhone>
  );
}

// ─── 21 End-of-Day Handoff ───
function OfScreenHandoff({ dark, goto }) {
  const t = ofTheme(dark);
  const items = [
    { kind: 'pending', label: '3 Vula referrals awaiting specialist response',     time: 'avg 6h 14m' },
    { kind: 'flag',    label: 'Joseph K. · TB sputum result expected tomorrow',    time: '11:00 cutoff' },
    { kind: 'stock',   label: 'Atorvastatin · 12 boxes left · auto-orders at 5',   time: 'covered' },
    { kind: 'shift',   label: 'Sister Mokoena takes night-shift · briefed via app', time: 'OK' },
  ];
  return (
    <OfPhone dark={dark} label="21 End-of-Day">
      <CHeader dark={dark} title="End of day · 17:42" sub="58 patients seen · 2 urgent referrals" />
      <div style={{ flex: 1, padding: '4px 22px 16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>

        <div style={{
          padding: 18, borderRadius: 16,
          background: ofAloeSunGradient, color: '#FFFFFF',
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          <div style={ofLabel({ size: 10, color: 'rgba(255,255,255,0.8)', track: 1.4 })}>Today</div>
          <div style={{
            fontFamily: ofType.display, fontSize: 28, fontWeight: 800,
            letterSpacing: -0.6, lineHeight: 1.1,
          }}>58 seen · 0 paper folders · all logged.</div>
          <div style={{ fontFamily: ofType.ui, fontSize: 12, opacity: 0.85 }}>
            Avg consult 1m 14s · target was 90s · beat paper.
          </div>
        </div>

        <OfSectionLabel dark={dark}>Handoff</OfSectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((it, i) => {
            const palette = {
              pending: { bg: 'rgba(212,162,76,0.10)', border: 'rgba(212,162,76,0.4)', icon: '⏳' },
              flag:    { bg: 'rgba(181,59,59,0.10)',  border: 'rgba(181,59,59,0.4)',  icon: '⚑' },
              stock:   { bg: 'rgba(46,125,91,0.10)',  border: 'rgba(46,125,91,0.3)',  icon: '📦' },
              shift:   { bg: 'rgba(46,125,91,0.10)',  border: 'rgba(46,125,91,0.3)',  icon: '🌙' },
            };
            const pp = palette[it.kind];
            return (
              <div key={i} style={{
                padding: 14, borderRadius: 12,
                background: pp.bg, border: `1px solid ${pp.border}`,
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <span style={{ fontSize: 18 }}>{pp.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: ofType.ui, fontSize: 13, fontWeight: 600, color: t.text1, lineHeight: 1.4 }}>
                    {it.label}
                  </div>
                </div>
                <span style={{ fontFamily: ofType.mono, fontSize: 11, color: t.text3 }}>{it.time}</span>
              </div>
            );
          })}
        </div>

        <OfButton dark={dark} variant="primary" size="lg" onClick={() => goto('c-queue')}
          style={{ width: '100%', justifyContent: 'center' }}>
          Hand off · sign out
        </OfButton>
      </div>
    </OfPhone>
  );
}

Object.assign(window, {
  OfScreenQueue, OfScreenSummary, OfScreenConsult,
  OfScreenPrescribe, OfScreenRefer, OfScreenFetch,
  OfScreenChw, OfScreenLocum, OfScreenHandoff,
});

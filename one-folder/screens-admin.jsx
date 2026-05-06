// One Folder — Admin CMS screens 22-27 (desktop, 1280x800)

// Helper: page header inside admin main column
function APageHeader({ dark, label, title, subtitle, actions }) {
  const t = ofTheme(dark);
  return (
    <div style={{
      padding: '28px 32px 18px', display: 'flex', alignItems: 'flex-end', gap: 16,
      borderBottom: `1px solid ${t.border}`,
    }}>
      <div style={{ flex: 1 }}>
        <OfSectionLabel dark={dark}>{label}</OfSectionLabel>
        <div style={{
          fontFamily: ofType.display, fontSize: 30, fontWeight: 800,
          color: t.text1, letterSpacing: -0.6, marginTop: 6,
        }}>{title}</div>
        {subtitle && (
          <div style={{
            fontFamily: ofType.ui, fontSize: 13, color: t.text3, marginTop: 4,
          }}>{subtitle}</div>
        )}
      </div>
      {actions}
    </div>
  );
}

// Helper: stat tile
function AStatTile({ dark, label, value, delta, deltaColor = 'aloe' }) {
  const t = ofTheme(dark);
  return (
    <div style={{
      padding: 18, borderRadius: 14,
      background: t.surface, border: `1px solid ${t.border}`,
      display: 'flex', flexDirection: 'column', gap: 6,
    }}>
      <span style={ofLabel({ size: 9.5, color: t.text3, track: 1.3 })}>{label}</span>
      <span style={{
        fontFamily: ofType.display, fontSize: 30, fontWeight: 800,
        color: t.text1, letterSpacing: -0.6, lineHeight: 1.1,
      }}>{value}</span>
      {delta && (
        <span style={{
          fontFamily: ofType.ui, fontSize: 11, fontWeight: 700,
          color: deltaColor === 'crimson' ? ofTokens.crimson500
              : deltaColor === 'ochre' ? ofTokens.ochre500
              : ofTokens.aloe500,
        }}>{delta}</span>
      )}
    </div>
  );
}

// ─── 22 Provincial Overview (heat-map) ───
function OfScreenAOverview({ dark, goto }) {
  const t = ofTheme(dark);
  return (
    <OfDesktop dark={dark} label="22 Provincial Overview">
      <OfAdminSidebar dark={dark} active="overview" onNav={(k) => {
        if (k === 'facility')     goto('a-facility');
        if (k === 'workforce')    goto('a-workforce');
        if (k === 'surveillance') goto('a-surveillance');
        if (k === 'stock')        goto('a-stock');
        if (k === 'nhi')          goto('a-nhi');
      }} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <APageHeader dark={dark}
          label="Overview · 6 May 2026 · 14:32 SAST"
          title="Nine provinces. One folder."
          subtitle="Live across 9 provincial DoHs · 425k facilities · 425,210 patients today"
          actions={
            <div style={{ display: 'flex', gap: 8 }}>
              <OfButton dark={dark} variant="ghost" size="sm">Export</OfButton>
              <OfButton dark={dark} variant="primary" size="sm">Brief MEC</OfButton>
            </div>
          }
        />

        <div style={{ padding: '20px 32px 32px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* KPI row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            <AStatTile dark={dark} label="Patients today"     value="425,210" delta="↑ 4.1% wk-on-wk" deltaColor="aloe" />
            <AStatTile dark={dark} label="Avg wait time"      value="2h 14m"  delta="↓ 11m vs Apr"  deltaColor="aloe" />
            <AStatTile dark={dark} label="Stock-outs · open"  value="122"     delta="↑ 14 since Mon" deltaColor="ochre" />
            <AStatTile dark={dark} label="Vacancy rate"       value="20.1%"   delta="EC 27% · WC 12%" deltaColor="crimson" />
          </div>

          {/* Map + table */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18 }}>
            <div style={{
              padding: 22, borderRadius: 16, background: t.surface, border: `1px solid ${t.border}`,
              display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <OfSectionLabel dark={dark}>Heat map</OfSectionLabel>
                  <div style={{
                    fontFamily: ofType.display, fontSize: 18, fontWeight: 800,
                    color: t.text1, letterSpacing: -0.4, marginTop: 4,
                  }}>Vacancy stress · 9 provinces</div>
                </div>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ fontFamily: ofType.ui, fontSize: 11, color: t.text3 }}>Low</span>
                  <span style={{ width: 14, height: 14, background: ofTokens.aloe300, borderRadius: 3 }} />
                  <span style={{ width: 14, height: 14, background: ofTokens.aloe500, borderRadius: 3 }} />
                  <span style={{ width: 14, height: 14, background: ofTokens.ochre500, borderRadius: 3 }} />
                  <span style={{ width: 14, height: 14, background: ofTokens.crimson500, borderRadius: 3 }} />
                  <span style={{ fontFamily: ofType.ui, fontSize: 11, color: t.text3 }}>High</span>
                </div>
              </div>

              <ZaProvinceMap dark={dark} provinces={ofProvinces} />
            </div>

            <div style={{
              padding: 22, borderRadius: 16, background: t.surface, border: `1px solid ${t.border}`,
              display: 'flex', flexDirection: 'column',
            }}>
              <OfSectionLabel dark={dark}>Provinces</OfSectionLabel>
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column' }}>
                {ofProvinces.map((p, i) => {
                  const stressColor = p.vacancyRate > 0.24 ? ofTokens.crimson500
                                   : p.vacancyRate > 0.18 ? ofTokens.ochre500
                                   : ofTokens.aloe500;
                  return (
                    <div key={p.code} style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '10px 0',
                      borderTop: i ? `1px solid ${t.border}` : 'none',
                    }}>
                      <span style={{ width: 8, height: 8, borderRadius: 2, background: stressColor }} />
                      <span style={{
                        flex: 1, fontFamily: ofType.ui, fontSize: 12.5, fontWeight: 600, color: t.text1,
                      }}>{p.name}</span>
                      <span style={{
                        fontFamily: ofType.mono, fontSize: 11, color: t.text3, minWidth: 60, textAlign: 'right',
                      }}>{(p.vacancyRate * 100).toFixed(1)}%</span>
                      <span style={{
                        fontFamily: ofType.mono, fontSize: 11, color: t.text2, minWidth: 70, textAlign: 'right',
                      }}>{p.patientsToday.toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom alerts */}
          <div style={{
            padding: 18, borderRadius: 16,
            background: dark ? 'rgba(255,122,77,0.10)' : 'rgba(255,122,77,0.06)',
            border: `1px solid ${dark ? 'rgba(255,122,77,0.3)' : 'rgba(255,122,77,0.25)'}`,
            display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <span style={{ fontSize: 22 }}>⚠</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1 }}>
                Atorvastatin will stock out at <strong>14 facilities</strong> in <strong>7 days</strong>.
              </div>
              <div style={{ fontFamily: ofType.ui, fontSize: 12, color: t.text3, marginTop: 2 }}>
                SVS feed × prescribing trends · KZN cluster · auto-order request drafted.
              </div>
            </div>
            <OfButton dark={dark} variant="accent" size="sm" onClick={() => goto('a-stock')}>
              Open prediction →
            </OfButton>
          </div>
        </div>
      </div>
    </OfDesktop>
  );
}

// Stylised SA province blocks (not geographically accurate — schematic for prototype)
function ZaProvinceMap({ dark, provinces }) {
  const t = ofTheme(dark);
  const blocks = [
    { code: 'NC', x:  20, y: 110, w: 180, h: 110 },
    { code: 'NW', x: 200, y:  90, w: 110, h:  80 },
    { code: 'GP', x: 310, y:  90, w:  60, h:  60 },
    { code: 'LP', x: 280, y:  20, w: 130, h:  70 },
    { code: 'MP', x: 370, y:  90, w:  90, h:  80 },
    { code: 'KZN',x: 360, y: 170, w: 130, h: 110 },
    { code: 'FS', x: 230, y: 170, w: 130, h:  70 },
    { code: 'EC', x: 230, y: 240, w: 200, h:  90 },
    { code: 'WC', x:  20, y: 220, w: 210, h: 110 },
  ];
  const stress = (rate) => rate > 0.24 ? ofTokens.crimson500
                       : rate > 0.18 ? ofTokens.ochre500
                       : rate > 0.14 ? ofTokens.aloe500
                       : ofTokens.aloe300;

  return (
    <svg width="100%" height="320" viewBox="0 0 480 340" style={{ display: 'block' }}>
      {blocks.map(b => {
        const p = provinces.find(pr => pr.code === b.code);
        if (!p) return null;
        return (
          <g key={b.code}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="8" ry="8"
                  fill={stress(p.vacancyRate)}
                  stroke={dark ? '#1A1410' : '#FFFFFF'} strokeWidth="2" opacity="0.92" />
            <text x={b.x + 12} y={b.y + 22}
                  fontFamily="Public Sans" fontSize="11" fontWeight="800" fill="#FFFFFF" letterSpacing="0.5">
              {b.code}
            </text>
            <text x={b.x + 12} y={b.y + 38}
                  fontFamily="Public Sans" fontSize="9" fontWeight="600" fill="#FFFFFF" opacity="0.85">
              {(p.vacancyRate * 100).toFixed(0)}% vacancy
            </text>
            <text x={b.x + 12} y={b.y + b.h - 10}
                  fontFamily="JetBrains Mono" fontSize="9" fill="#FFFFFF" opacity="0.85">
              {p.patientsToday.toLocaleString()} today
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── 23 Facility Detail ───
function OfScreenAFacility({ dark, goto }) {
  const t = ofTheme(dark);
  return (
    <OfDesktop dark={dark} label="23 Facility Detail">
      <OfAdminSidebar dark={dark} active="facility" onNav={(k) => {
        if (k === 'overview')     goto('a-overview');
        if (k === 'workforce')    goto('a-workforce');
        if (k === 'surveillance') goto('a-surveillance');
        if (k === 'stock')        goto('a-stock');
        if (k === 'nhi')          goto('a-nhi');
      }} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <APageHeader dark={dark}
          label="Facility · KZN · uMgungundlovu"
          title="Edendale Hospital"
          subtitle="Regional · 568 beds · catchment 1.2M · live data 14:32"
        />

        <div style={{ padding: '20px 32px 32px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            <AStatTile dark={dark} label="In queue · OPD"     value="142"  delta="22m avg wait" />
            <AStatTile dark={dark} label="Patients today"     value="894"  delta="↑ 6% on Mon"  />
            <AStatTile dark={dark} label="Nurses on shift"    value="38 / 52" delta="14 short" deltaColor="ochre" />
            <AStatTile dark={dark} label="Power · grid"       value="✓ on" delta="UPS healthy" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 18 }}>
            {/* Live queue */}
            <div style={{
              padding: 22, borderRadius: 16, background: t.surface, border: `1px solid ${t.border}`,
            }}>
              <OfSectionLabel dark={dark}>Live queue · OPD · A-line</OfSectionLabel>
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column' }}>
                {ofQueue.map((q, i) => (
                  <div key={q.ticket} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '10px 0', borderTop: i ? `1px solid ${t.border}` : 'none',
                  }}>
                    <OfAcuityDot acuity={q.acuity} />
                    <span style={{ fontFamily: ofType.mono, fontSize: 11, color: t.text3, minWidth: 44 }}>{q.ticket}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: ofType.ui, fontSize: 13, fontWeight: 600, color: t.text1 }}>
                        {q.name}
                      </div>
                      <div style={{ fontFamily: ofType.ui, fontSize: 11, color: t.text3 }}>
                        {q.reason}
                      </div>
                    </div>
                    <span style={{ fontFamily: ofType.mono, fontSize: 11.5, color: t.text2 }}>{q.wait}m</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stock alerts */}
            <div style={{
              padding: 22, borderRadius: 16, background: t.surface, border: `1px solid ${t.border}`,
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              <OfSectionLabel dark={dark}>Stock alerts</OfSectionLabel>
              {[
                { item: 'Atorvastatin 10mg', state: 'low', detail: '12 boxes · 9 day supply', color: 'ochre' },
                { item: 'Insulin Actrapid',  state: 'in',  detail: '184 units · OK',           color: 'aloe' },
                { item: 'Penicillin G',      state: 'low', detail: '4 vials · 2 days',         color: 'ochre' },
                { item: 'Magnesium sulphate', state: 'in', detail: 'OK',                       color: 'aloe' },
              ].map(s => (
                <div key={s.item} style={{
                  padding: 12, borderRadius: 10, background: t.chipBg,
                  display: 'flex', alignItems: 'center', gap: 10,
                }}>
                  <OfStockPill stock={s.state} dark={dark} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: ofType.ui, fontSize: 13, fontWeight: 600, color: t.text1 }}>{s.item}</div>
                    <div style={{ fontFamily: ofType.ui, fontSize: 10.5, color: t.text3 }}>{s.detail}</div>
                  </div>
                </div>
              ))}
              <OfButton dark={dark} variant="ghost" size="sm" onClick={() => goto('a-stock')}>
                Open Stock Predictions →
              </OfButton>
            </div>
          </div>
        </div>
      </div>
    </OfDesktop>
  );
}

// ─── 24 Workforce ───
function OfScreenAWorkforce({ dark, goto }) {
  const t = ofTheme(dark);
  const trend = [40, 38, 36, 34, 33, 31, 32, 30, 28, 27, 25, 24];
  return (
    <OfDesktop dark={dark} label="24 Workforce">
      <OfAdminSidebar dark={dark} active="workforce" onNav={(k) => {
        if (k === 'overview') goto('a-overview');
        if (k === 'facility') goto('a-facility');
        if (k === 'surveillance') goto('a-surveillance');
        if (k === 'stock') goto('a-stock');
        if (k === 'nhi') goto('a-nhi');
      }} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <APageHeader dark={dark}
          label="Workforce · brain-drain"
          title="The shortage we keep losing."
          subtitle="2013 → 2025 · 12,745 doctors and 58,897 nurses left for UK · NZ · US · AUS"
        />

        <div style={{ padding: '20px 32px 32px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            <AStatTile dark={dark} label="Doctors · public"   value="0.3 / 1k" delta="WHO target 1.0" deltaColor="crimson" />
            <AStatTile dark={dark} label="Nurse vacancy"      value="13.7%"    delta="+2.1% YoY"      deltaColor="crimson" />
            <AStatTile dark={dark} label="Specialist vacancy" value="18.6%"    delta="↑ 4 pts vs 2024" deltaColor="crimson" />
            <AStatTile dark={dark} label="Comm-svc placed"    value="2,184"    delta="for 2026 cycle"  deltaColor="aloe" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 18 }}>
            {/* Trend chart */}
            <div style={{
              padding: 22, borderRadius: 16, background: t.surface, border: `1px solid ${t.border}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <OfSectionLabel dark={dark}>Doctors per 1,000 · public sector</OfSectionLabel>
                  <div style={{
                    fontFamily: ofType.display, fontSize: 22, fontWeight: 800, color: t.text1,
                    letterSpacing: -0.5, marginTop: 4,
                  }}>0.4 → 0.24 · 12-yr decline</div>
                </div>
                <div style={{ fontFamily: ofType.mono, fontSize: 11, color: t.text3 }}>2013 → 2025</div>
              </div>
              <svg width="100%" height="180" viewBox="0 0 600 180" style={{ marginTop: 16 }}>
                {/* axis lines */}
                {[0, 1, 2, 3].map(i => (
                  <line key={i} x1="0" y1={i * 45 + 10} x2="600" y2={i * 45 + 10}
                        stroke={t.border} strokeWidth="1" />
                ))}
                {/* line + fill */}
                <path
                  d={`M 0 ${trend[0] * 4 + 10} ${trend.map((v, i) => `L ${(i / (trend.length - 1)) * 600} ${v * 4 + 10}`).join(' ')}`}
                  fill="none" stroke={ofTokens.crimson500} strokeWidth="2.5"
                />
                {/* dots */}
                {trend.map((v, i) => (
                  <circle key={i} cx={(i / (trend.length - 1)) * 600} cy={v * 4 + 10} r="3.5" fill={ofTokens.crimson500} />
                ))}
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, fontFamily: ofType.mono, fontSize: 10, color: t.text3 }}>
                <span>2013</span><span>2025</span>
              </div>
            </div>

            {/* Outflow */}
            <div style={{
              padding: 22, borderRadius: 16, background: t.surface, border: `1px solid ${t.border}`,
            }}>
              <OfSectionLabel dark={dark}>Where they went</OfSectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
                {[
                  { country: 'United Kingdom', count: 8420, pct: 36 },
                  { country: 'Australia',      count: 6118, pct: 26 },
                  { country: 'New Zealand',    count: 4905, pct: 21 },
                  { country: 'United States',  count: 2156, pct: 9 },
                  { country: 'Canada · Other', count: 1825, pct: 8 },
                ].map(r => (
                  <div key={r.country}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: ofType.ui, fontSize: 12 }}>
                      <span style={{ color: t.text1, fontWeight: 600 }}>{r.country}</span>
                      <span style={{ color: t.text3, fontFamily: ofType.mono }}>{r.count.toLocaleString()}</span>
                    </div>
                    <div style={{ height: 6, background: t.chipBg, borderRadius: 3, marginTop: 4, overflow: 'hidden' }}>
                      <div style={{ width: `${r.pct}%`, height: '100%', background: ofTokens.crimson500 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            padding: 18, borderRadius: 14, background: t.chipBg,
            fontFamily: ofType.editorial, fontSize: 14, fontStyle: 'italic',
            color: t.text2, lineHeight: 1.5,
          }}>
            "Every doctor who leaves takes a paper trail with them. Every nurse who stays inherits one. One Folder is built so the record is what stays — even when the person doesn't."
          </div>
        </div>
      </div>
    </OfDesktop>
  );
}

// ─── 25 Surveillance ───
function OfScreenASurveillance({ dark, goto }) {
  const t = ofTheme(dark);
  const clusters = [
    { disease: 'Tuberculosis',   province: 'Eastern Cape · OR Tambo',  cases: 142, change: '+38%', severity: 'high' },
    { disease: 'Cholera',        province: 'KZN · Msunduzi',           cases: 18,  change: 'New',  severity: 'high' },
    { disease: 'Measles',        province: 'Limpopo · Vhembe',         cases: 24,  change: '+12%', severity: 'medium' },
    { disease: 'HIV new dx',     province: 'Gauteng · Sedibeng',       cases: 76,  change: '+8%',  severity: 'medium' },
    { disease: 'Diarrhoeal · u5',province: 'NW · Bojanala',            cases: 89,  change: '+22%', severity: 'medium' },
  ];
  return (
    <OfDesktop dark={dark} label="25 Surveillance">
      <OfAdminSidebar dark={dark} active="surveillance" onNav={(k) => {
        if (k === 'overview') goto('a-overview');
        if (k === 'facility') goto('a-facility');
        if (k === 'workforce') goto('a-workforce');
        if (k === 'stock') goto('a-stock');
        if (k === 'nhi') goto('a-nhi');
      }} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <APageHeader dark={dark}
          label="Surveillance · 7-day window"
          title="Disease early-warning."
          subtitle="Tied to NICD signals · NHLS lab feeds · clinic complaint patterns"
        />

        <div style={{ padding: '20px 32px 32px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            <AStatTile dark={dark} label="Active clusters"  value="5"   delta="2 high · 3 medium" deltaColor="ochre" />
            <AStatTile dark={dark} label="Cases · 7 days"   value="349" delta="↑ 18% vs prior"    deltaColor="crimson" />
            <AStatTile dark={dark} label="NICD synced"      value="✓"   delta="last 14:18 SAST"   deltaColor="aloe" />
            <AStatTile dark={dark} label="Outbreak reports" value="2"   delta="filed today"       deltaColor="aloe" />
          </div>

          <div style={{
            padding: 22, borderRadius: 16, background: t.surface, border: `1px solid ${t.border}`,
          }}>
            <OfSectionLabel dark={dark}>Clusters surfaced this week</OfSectionLabel>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column' }}>
              {clusters.map((c, i) => (
                <div key={c.disease} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 8px', borderTop: i ? `1px solid ${t.border}` : 'none',
                }}>
                  <span style={{
                    width: 8, height: 8, borderRadius: 2,
                    background: c.severity === 'high' ? ofTokens.crimson500 : ofTokens.ochre500,
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1 }}>
                      {c.disease}
                    </div>
                    <div style={{ fontFamily: ofType.ui, fontSize: 11.5, color: t.text3, marginTop: 2 }}>
                      {c.province}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: ofType.display, fontSize: 22, fontWeight: 800,
                    color: t.text1, letterSpacing: -0.4, minWidth: 50, textAlign: 'right',
                  }}>{c.cases}</div>
                  <span style={{
                    fontFamily: ofType.mono, fontSize: 11, fontWeight: 700,
                    color: c.severity === 'high' ? ofTokens.crimson500 : ofTokens.ochre500,
                    minWidth: 56, textAlign: 'right',
                  }}>{c.change}</span>
                  <OfButton dark={dark} variant="ghost" size="sm">Open →</OfButton>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            padding: 16, borderRadius: 14,
            background: dark ? 'rgba(181,59,59,0.10)' : 'rgba(181,59,59,0.06)',
            border: `1px solid ${dark ? 'rgba(181,59,59,0.3)' : 'rgba(181,59,59,0.25)'}`,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <span style={{ fontSize: 22 }}>⚠</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: ofType.ui, fontSize: 13, fontWeight: 700, color: t.text1 }}>
                KZN Msunduzi cholera signal — 18 cases in 4 days, all linked to one informal settlement.
              </div>
              <div style={{ fontFamily: ofType.ui, fontSize: 11.5, color: t.text3, marginTop: 2 }}>
                Auto-drafted: NICD outbreak report + WhatsApp cluster alert to 1,200 households.
              </div>
            </div>
            <OfButton dark={dark} variant="crimson" size="sm">Trigger response</OfButton>
          </div>
        </div>
      </div>
    </OfDesktop>
  );
}

// ─── 26 Stock Predictions ───
function OfScreenAStock({ dark, goto }) {
  const t = ofTheme(dark);
  const drugs = [
    { name: 'Atorvastatin 10mg',     facilities: 14, days: 7,  trend: 'rising',   severity: 'high' },
    { name: 'Insulin Actrapid',      facilities: 6,  days: 12, trend: 'rising',   severity: 'medium' },
    { name: 'Tenofovir/Lamivudine',  facilities: 3,  days: 18, trend: 'stable',   severity: 'low' },
    { name: 'Magnesium sulphate',    facilities: 2,  days: 22, trend: 'falling',  severity: 'low' },
    { name: 'Penicillin G IV',       facilities: 9,  days: 5,  trend: 'rising',   severity: 'high' },
  ];
  return (
    <OfDesktop dark={dark} label="26 Stock Predictions">
      <OfAdminSidebar dark={dark} active="stock" onNav={(k) => {
        if (k === 'overview') goto('a-overview');
        if (k === 'facility') goto('a-facility');
        if (k === 'workforce') goto('a-workforce');
        if (k === 'surveillance') goto('a-surveillance');
        if (k === 'nhi') goto('a-nhi');
      }} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <APageHeader dark={dark}
          label="Stock · prediction"
          title="Stock-out before it stocks out."
          subtitle="SVS feed × 90-day prescribing trends × seasonality · 7-day forecast horizon"
        />

        <div style={{ padding: '20px 32px 32px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            <AStatTile dark={dark} label="Facilities at risk" value="34"   delta="next 14 days"      deltaColor="ochre" />
            <AStatTile dark={dark} label="Lines · high risk"  value="2"    delta="<7 day cover"      deltaColor="crimson" />
            <AStatTile dark={dark} label="SVS sync"           value="✓ 4m" delta="3,126 PHCs scanning" deltaColor="aloe" />
            <AStatTile dark={dark} label="Auto-orders drafted" value="11"  delta="awaiting MEC sign-off" deltaColor="aloe" />
          </div>

          <div style={{
            padding: 22, borderRadius: 16, background: t.surface, border: `1px solid ${t.border}`,
          }}>
            <OfSectionLabel dark={dark}>Seven-day forecast · top 5</OfSectionLabel>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column' }}>
              {drugs.map((d, i) => {
                const sev = d.severity === 'high' ? ofTokens.crimson500
                          : d.severity === 'medium' ? ofTokens.ochre500
                          : ofTokens.aloe500;
                return (
                  <div key={d.name} style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 8px', borderTop: i ? `1px solid ${t.border}` : 'none',
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: 2, background: sev }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: ofType.ui, fontSize: 14, fontWeight: 700, color: t.text1 }}>
                        {d.name}
                      </div>
                      <div style={{ fontFamily: ofType.ui, fontSize: 11.5, color: t.text3, marginTop: 2 }}>
                        {d.facilities} facilities affected · trend {d.trend}
                      </div>
                    </div>
                    <div style={{ fontFamily: ofType.mono, fontSize: 11.5, color: t.text2, minWidth: 80, textAlign: 'right' }}>
                      ~{d.days} days cover
                    </div>
                    <OfButton dark={dark} variant={d.severity === 'high' ? 'accent' : 'ghost'} size="sm">
                      {d.severity === 'high' ? 'Auto-order' : 'Watch'}
                    </OfButton>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{
            padding: 16, borderRadius: 14,
            background: dark ? 'rgba(46,125,91,0.10)' : 'rgba(46,125,91,0.06)',
            border: `1px solid ${dark ? 'rgba(46,125,91,0.3)' : 'rgba(46,125,91,0.25)'}`,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <span style={{ fontSize: 22 }}>📦</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: ofType.ui, fontSize: 13, fontWeight: 700, color: t.text1 }}>
                Atorvastatin auto-order · 8,400 boxes · NHI Procurement Office
              </div>
              <div style={{ fontFamily: ofType.ui, fontSize: 11.5, color: t.text3, marginTop: 2 }}>
                Routed across 14 KZN facilities · ETA 5 days · saves 2,100 patient-trips before stock-out.
              </div>
            </div>
            <OfButton dark={dark} variant="primary" size="sm">Approve</OfButton>
          </div>
        </div>
      </div>
    </OfDesktop>
  );
}

// ─── 27 NHI Claims ───
function OfScreenANhi({ dark, goto }) {
  const t = ofTheme(dark);
  return (
    <OfDesktop dark={dark} label="27 NHI Claims">
      <OfAdminSidebar dark={dark} active="nhi" onNav={(k) => {
        if (k === 'overview') goto('a-overview');
        if (k === 'facility') goto('a-facility');
        if (k === 'workforce') goto('a-workforce');
        if (k === 'surveillance') goto('a-surveillance');
        if (k === 'stock') goto('a-stock');
      }} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <APageHeader dark={dark}
          label="NHI Fund · claims · preview"
          title="Once the Fund pays, every encounter becomes a claim."
          subtitle="Speculative · NHI Act 20 of 2023 · Section 35 (NHI Fund) · phase 2 — not yet operational"
          actions={<OfPill dark={dark} color="ochre">Preview · not live</OfPill>}
        />

        <div style={{ padding: '20px 32px 32px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            <AStatTile dark={dark} label="Encounters today" value="425,210" delta="auto-claimed at sign-off" />
            <AStatTile dark={dark} label="Claim value · est"  value="R 41.2m"  delta="based on PFMS rates" />
            <AStatTile dark={dark} label="Rejected · 24h"     value="0.4%"    delta="↓ from 6% on paper" deltaColor="aloe" />
            <AStatTile dark={dark} label="Avg claim time"     value="0.8s"    delta="vs 14 days on paper" deltaColor="aloe" />
          </div>

          <div style={{
            padding: 22, borderRadius: 16, background: t.surface, border: `1px solid ${t.border}`,
          }}>
            <OfSectionLabel dark={dark}>Live claim stream</OfSectionLabel>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column' }}>
              {[
                { time: '14:32:18', facility: 'Chiawelo CHC',  enc: 'HTN/T2D follow-up',    code: 'PHC-0047', value: 'R 184',  status: 'paid'  },
                { time: '14:32:14', facility: 'Edendale Hosp.',enc: 'Cardiology consult',   code: 'SPEC-0312',value: 'R 1,842',status: 'paid'  },
                { time: '14:32:09', facility: 'Mthatha General',enc: 'ANC visit 2',         code: 'PHC-0021', value: 'R 162',  status: 'paid'  },
                { time: '14:32:01', facility: 'Bara Acad.',    enc: 'TB sputum + ARV',      code: 'CDT-0118', value: 'R 308',  status: 'review' },
                { time: '14:31:58', facility: 'Vryburg DH',    enc: 'OPD presentation',     code: 'PHC-0033', value: 'R 162',  status: 'paid'  },
                { time: '14:31:54', facility: 'Soshanguve CHC',enc: 'CCMDD chronic refill', code: 'CCM-0009', value: 'R 96',   status: 'paid'  },
              ].map((r, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '10px 6px',
                  borderTop: i ? `1px solid ${t.border}` : 'none',
                }}>
                  <span style={{ fontFamily: ofType.mono, fontSize: 10.5, color: t.text3, minWidth: 64 }}>
                    {r.time}
                  </span>
                  <span style={{ fontFamily: ofType.ui, fontSize: 12.5, fontWeight: 600, color: t.text1, minWidth: 160 }}>
                    {r.facility}
                  </span>
                  <span style={{ flex: 1, fontFamily: ofType.ui, fontSize: 12, color: t.text2 }}>
                    {r.enc}
                  </span>
                  <span style={{ fontFamily: ofType.mono, fontSize: 11, color: t.text3, minWidth: 80 }}>
                    {r.code}
                  </span>
                  <span style={{
                    fontFamily: ofType.mono, fontSize: 12, fontWeight: 700,
                    color: t.text1, minWidth: 72, textAlign: 'right',
                  }}>{r.value}</span>
                  <OfPill dark={dark} color={r.status === 'paid' ? 'aloe' : 'ochre'}>
                    {r.status === 'paid' ? '✓ Paid' : '⌛ Review'}
                  </OfPill>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            padding: 18, borderRadius: 14, background: t.chipBg,
            fontFamily: ofType.editorial, fontSize: 14, fontStyle: 'italic',
            color: t.text2, lineHeight: 1.5,
          }}>
            "When the NHI Fund goes live, the back-end is already there. Every clinician sign-off becomes a claim. No paper, no double-entry, no delay."
          </div>
        </div>
      </div>
    </OfDesktop>
  );
}

Object.assign(window, {
  OfScreenAOverview, OfScreenAFacility, OfScreenAWorkforce,
  OfScreenASurveillance, OfScreenAStock, OfScreenANhi,
});

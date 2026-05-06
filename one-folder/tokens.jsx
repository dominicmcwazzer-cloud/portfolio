// One Folder — design tokens & shared helpers
// Brand: "Aloe & Sun" — warm, civic, accessible, distinctly SA without flag-rainbow

const ofTokens = {
  // Aloe — botanical green, primary
  aloe50:  '#E8F1EC',
  aloe100: '#C8DDD0',
  aloe300: '#6FA38A',
  aloe500: '#2E7D5B',   // primary — CTA, headers, brand
  aloe700: '#1F5A40',
  aloe900: '#133928',

  // Sun — coral accent (sidesteps SA-flag-orange cliché)
  sun100:  '#FFE5DA',
  sun300:  '#FFAA88',
  sun500:  '#FF7A4D',   // accent — secondary actions, highlights
  sun700:  '#D85226',

  // Ochre — restraint accent, milestones / featured / awards
  ochre500: '#D4A24C',

  // Crimson — emergencies + warnings only (never decorative)
  crimson500: '#B53B3B',

  // Warm neutrals — light side
  paper0:   '#FCF7EE',  // light-mode canvas (warm cream)
  paper100: '#F5EFDF',
  paper200: '#E8DFD0',  // dividers, low-contrast surfaces

  // Deep neutrals — dark side (warm-dark, not pure black)
  forest900: '#0F1815', // dark-mode canvas — deep forest
  forest700: '#1A2520', // dark surface
  forest500: '#243530', // dark elevated surface

  // Ink (text on light)
  ink900:   '#1A1410',
  ink700:   '#3A2E22',
  ink500:   '#5D4F40',
  ink300:   '#8C7E6F',

  // Semantic
  success: '#2E7D5B',   // aloe doubles as success
  warning: '#D4A24C',
  error:   '#B53B3B',
  info:    '#1F5A40',
};

// Resolve theme surfaces
function ofTheme(dark) {
  return dark
    ? {
        bg: ofTokens.forest900,
        surface: ofTokens.forest700,
        surfaceElev: ofTokens.forest500,
        border: 'rgba(252,247,238,0.1)',
        text1: ofTokens.paper0,
        text2: '#B5A89B',
        text3: '#7E7062',
        chipBg: 'rgba(252,247,238,0.06)',
        overlay: 'rgba(15,24,21,0.65)',
        accent: ofTokens.sun500,
        primary: ofTokens.aloe500,
      }
    : {
        bg: ofTokens.paper0,
        surface: '#FFFFFF',
        surfaceElev: '#FFFFFF',
        border: 'rgba(26,20,16,0.1)',
        text1: ofTokens.ink900,
        text2: ofTokens.ink700,
        text3: ofTokens.ink500,
        chipBg: 'rgba(26,20,16,0.04)',
        overlay: 'rgba(26,20,16,0.45)',
        accent: ofTokens.sun500,
        primary: ofTokens.aloe500,
      };
}

// Type families
// UI: Public Sans (USWDS accessibility-validated default — institutional credibility)
// Editorial: Source Serif 4 (warm serif for manifesto / scripture-style slabs)
const ofType = {
  ui: '"Public Sans", Inter, "Helvetica Neue", Arial, sans-serif',
  editorial: '"Source Serif 4", "Source Serif Pro", Georgia, serif',
  display: '"Public Sans", Inter, system-ui, sans-serif',
  mono: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace',
};

// Tracked-caps label helper
function ofLabel({ size = 11, color, track = 1.6, weight = 700 } = {}) {
  return {
    fontFamily: ofType.ui,
    fontSize: size,
    fontWeight: weight,
    textTransform: 'uppercase',
    letterSpacing: track,
    color,
    lineHeight: 1.2,
  };
}

// Aloe → sun gradient — used on hero / cover surfaces (sparingly)
const ofAloeSunGradient = 'linear-gradient(135deg, #2E7D5B 0%, #6FA38A 45%, #FF7A4D 100%)';
const ofPaperGradient = 'linear-gradient(180deg, #FCF7EE 0%, #F5EFDF 100%)';

// 12 official SA languages (alphabetical, with native names)
const ofLanguages = [
  { code: 'eng', name: 'English',     native: 'English',    launch: true },
  { code: 'zul', name: 'isiZulu',     native: 'isiZulu',    launch: true },
  { code: 'xho', name: 'isiXhosa',    native: 'isiXhosa',   launch: true },
  { code: 'afr', name: 'Afrikaans',   native: 'Afrikaans',  launch: true },
  { code: 'nso', name: 'Sepedi',      native: 'Sepedi',     launch: true },
  { code: 'tsn', name: 'Setswana',    native: 'Setswana' },
  { code: 'sot', name: 'Sesotho',     native: 'Sesotho' },
  { code: 'tso', name: 'Xitsonga',    native: 'Xitsonga' },
  { code: 'ssw', name: 'siSwati',     native: 'siSwati' },
  { code: 've',  name: 'Tshivenda',   native: 'Tshivenda' },
  { code: 'nbl', name: 'isiNdebele',  native: 'isiNdebele' },
  { code: 'sasl',name: 'SA Sign Language', native: 'SASL', sign: true },
];

// Personas — single source of truth for prototype + deck
const ofPersonas = [
  { key: 'sibongile', name: "Mam' Sibongile",   age: 67, role: 'Pensioner · Soweto',
    tag: 'Chronic-care script collector', emoji: '👵🏾',
    flow: 'Monthly script collection (the killer flow)' },
  { key: 'thandiwe',  name: 'Thandiwe',         age: 28, role: 'Pregnant · Mthatha → PTA',
    tag: 'Cross-province record', emoji: '🤰🏾',
    flow: 'ANC record follows her across provinces' },
  { key: 'karabo',    name: 'Karabo',           age: 19, role: 'Student · books for gogo',
    tag: 'Caregiver mode', emoji: '👨🏾‍🎓',
    flow: 'Books appointments and meds for his 81-year-old gogo' },
  { key: 'joseph',    name: 'Joseph',           age: 34, role: 'Asylum seeker · Yeoville',
    tag: 'Identity edge-case', emoji: '🧑🏾',
    flow: 'Section 22 permit, TB+HIV — must not be locked out' },
  { key: 'lerato',    name: 'Sister Lerato',    age: 42, role: 'PHC nurse · Limpopo',
    tag: 'Primary clinician user', emoji: '👩🏾‍⚕️',
    flow: '60+ patients/day, paper folders, two-hour power gaps' },
  { key: 'mthembu',   name: 'Dr Mthembu',       age: 29, role: 'Comm-svc doctor · NW district',
    tag: 'Locum / cross-province', emoji: '👨🏾‍⚕️',
    flow: 'Pulls a record written in Bloem for a patient he just met' },
  { key: 'naidoo',    name: 'Mr Naidoo',        age: 51, role: 'Provincial HIO · KZN',
    tag: 'Admin / dashboard user', emoji: '👨🏽‍💼',
    flow: 'MEC accountability — replaces Excel exports' },
];

// Sample patient record (for clinician + patient screens)
const ofSamplePatient = {
  hprn: 'HPRN 4721 8893 02',
  name: 'Sibongile Nkosi',
  age: 67,
  sex: 'F',
  idType: 'SA ID',
  idLast4: '7825',
  facility: 'Chiawelo CHC · Soweto',
  conditions: [
    { key: 'htn',  label: 'Hypertension',  since: 'Mar 2018', status: 'Stable' },
    { key: 't2d',  label: 'Type 2 Diabetes', since: 'Aug 2021', status: 'Adjusting' },
  ],
  meds: [
    { name: 'Amlodipine',     dose: '5 mg',  freq: 'OD',  ccmdd: true,  stock: 'in' },
    { name: 'Metformin',      dose: '500 mg', freq: 'BD', ccmdd: true,  stock: 'in' },
    { name: 'Atorvastatin',   dose: '10 mg', freq: 'OD',  ccmdd: true,  stock: 'low' },
  ],
  allergies: ['Penicillin (rash)'],
  lastVisit: '12 Apr 2026 · BP 138/86 · Glucose 7.2',
  nextScript: 'Ready · 06 May 2026 · Chiawelo Pickup Point',
};

// Sample clinic queue — used in clinician home + admin facility view
const ofQueue = [
  { ticket: 'A 014', name: 'Sibongile N.',  hprn: '...8893', wait: 22, reason: 'HTN/T2D follow-up', acuity: 'green' },
  { ticket: 'A 015', name: 'Lebo M.',       hprn: '...4421', wait: 18, reason: 'ANC visit 2',       acuity: 'green' },
  { ticket: 'A 016', name: 'Joseph K.',     hprn: '...0017*', wait: 35, reason: 'TB sputum + ARV refill', acuity: 'amber', note: 'Pending verification' },
  { ticket: 'A 017', name: 'Themba S.',     hprn: '...3309', wait: 41, reason: 'BP recheck',         acuity: 'green' },
  { ticket: 'A 018', name: 'Nomsa Z.',      hprn: '...7714', wait: 8,  reason: 'Acute chest pain',   acuity: 'red' },
  { ticket: 'A 019', name: 'Thabo R.',      hprn: '...9082', wait: 12, reason: 'Diabetes review',    acuity: 'green' },
  { ticket: 'A 020', name: 'Pheko D.',      hprn: '...2147', wait: 3,  reason: 'Wound dressing',     acuity: 'amber' },
];

// Province + facility data for admin views
const ofProvinces = [
  { code: 'GP', name: 'Gauteng',       facilities: 425, patientsToday: 78420, vacancyRate: 0.18, stockOuts: 12 },
  { code: 'KZN',name: 'KwaZulu-Natal', facilities: 612, patientsToday: 89110, vacancyRate: 0.21, stockOuts: 19 },
  { code: 'EC', name: 'Eastern Cape',  facilities: 798, patientsToday: 64280, vacancyRate: 0.27, stockOuts: 24 },
  { code: 'WC', name: 'Western Cape',  facilities: 372, patientsToday: 51100, vacancyRate: 0.12, stockOuts: 5  },
  { code: 'LP', name: 'Limpopo',       facilities: 564, patientsToday: 47230, vacancyRate: 0.24, stockOuts: 21 },
  { code: 'MP', name: 'Mpumalanga',    facilities: 287, patientsToday: 31840, vacancyRate: 0.19, stockOuts: 11 },
  { code: 'NW', name: 'North West',    facilities: 348, patientsToday: 28960, vacancyRate: 0.22, stockOuts: 14 },
  { code: 'FS', name: 'Free State',    facilities: 234, patientsToday: 24410, vacancyRate: 0.17, stockOuts: 9  },
  { code: 'NC', name: 'Northern Cape', facilities: 175, patientsToday:  9820, vacancyRate: 0.20, stockOuts: 7  },
];

// Surfaces — drives the prototype's surface switcher
const ofSurfaces = [
  { key: 'patient',   label: 'Patient app',   icon: '🧍🏾', count: 12, frame: 'phone' },
  { key: 'clinician', label: 'Clinician app', icon: '⚕️',  count: 9,  frame: 'phone' },
  { key: 'admin',     label: 'Admin CMS',     icon: '📊',  count: 6,  frame: 'desktop' },
];

Object.assign(window, {
  ofTokens, ofTheme, ofType, ofLabel,
  ofAloeSunGradient, ofPaperGradient,
  ofLanguages, ofPersonas, ofSamplePatient, ofQueue, ofProvinces, ofSurfaces,
});

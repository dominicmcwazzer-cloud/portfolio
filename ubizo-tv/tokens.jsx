// Ubizo TV — design tokens & shared helpers

const ubzTokens = {
  // Brand
  orange50:  '#FFF1E7',
  orange300: '#F99565',
  orange500: '#E85A1C',   // primary — CTA, live, logo red-orange
  orange700: '#B63D0A',

  marono500: '#7B2A20',   // maroon-brown — wordmark ink, choir-robe depth
  marono700: '#4A1A13',
  marono900: '#2A0E09',

  gold500:   '#E0A13B',   // restraint accent — milestones, featured

  // Warm neutrals
  paper0:   '#FFFBF6',    // light-mode canvas (warm cream, not pure white)
  paper100: '#F3E9DB',
  paper200: '#E5D6C1',

  ink900:   '#1A0F0A',    // dark-mode canvas (warm near-black)
  ink700:   '#2C1A10',
  ink500:   '#4A2E1E',

  // Semantic
  success: '#3FB950',
  warning: '#E0A13B',
  error:   '#E85A1C',     // orange doubles as error (rare in this product)
  info:    '#7B2A20',
};

// Resolve theme surfaces
function ubzTheme(dark) {
  return dark
    ? {
        bg: ubzTokens.ink900,
        surface: ubzTokens.ink700,
        surfaceElev: '#3A2418',
        border: 'rgba(255,241,231,0.1)',
        text1: ubzTokens.paper0,
        text2: '#C9B8A5',
        text3: '#8A7865',
        chipBg: 'rgba(255,241,231,0.06)',
        overlay: 'rgba(26,15,10,0.65)',
      }
    : {
        bg: ubzTokens.paper0,
        surface: '#FFFFFF',
        surfaceElev: '#FFFFFF',
        border: 'rgba(42,14,9,0.1)',
        text1: ubzTokens.marono900,
        text2: ubzTokens.marono500,
        text3: '#9E8673',
        chipBg: 'rgba(42,14,9,0.04)',
        overlay: 'rgba(42,14,9,0.45)',
      };
}

// Type families
// Display + UI: Bricolage Grotesque (same family as 6ix AM Club —
// deliberate portfolio through-line, different brief).
// Editorial: Fraunces — for scripture / devotion slabs (adds warmth
// without importing another sans).
const ubzType = {
  display: '"Bricolage Grotesque", "Helvetica Neue", Arial, sans-serif',
  editorial: '"Fraunces", "Bricolage Grotesque", Georgia, serif',
  ui: 'Inter, "Helvetica Neue", Arial, sans-serif',
  mono: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace',
};

// Tracked-caps label helper
function ubzLabel({ size = 11, color, track = 1.6, weight = 700 } = {}) {
  return {
    fontFamily: ubzType.ui,
    fontSize: size,
    fontWeight: weight,
    textTransform: 'uppercase',
    letterSpacing: track,
    color,
    lineHeight: 1.2,
  };
}

// Dawn gradient — warm sunrise used on hero surfaces
const ubzDawnGradient = 'linear-gradient(180deg, #FFF1E7 0%, #F99565 55%, #E85A1C 100%)';
const ubzDawnGradientBottom = 'linear-gradient(0deg, #FFF1E7 0%, #F99565 55%, #E85A1C 100%)';

// Photography — use the real Ubizo library. Paths are relative so
// the bundle is self-contained and works on GitHub Pages.
const ubzPhotos = {
  // Brand core — high-res designed art preferred over JPEG crops
  logoWhite: 'assets/brand/logo-reverse-master.png',
  logo:      'assets/brand/logo-color-master.png',
  logoSquare:'assets/brand/logo-square-4k.png',
  gradient:  'assets/brand/dawn-gradient.jpg',
  hero:      'assets/brand/hero-master.png',
  heroBanner:'assets/brand/let-there-be-light-master.png',
  heroProfile:'assets/brand/let-there-be-light-profile-master.png',
  promoSquare:'assets/brand/promo-square-1900.png',
  promoWide: 'assets/brand/promo-wide-1200.png',
  tileDocs:  'assets/brand/tile-documentaries.jpg',
  tileGospel:'assets/brand/tile-best-gospel.jpg',
  ctaWatch:  'assets/brand/cta-watch-now.png',
  ctaView:   'assets/brand/cta-view-now.png',

  // Verticals (Church Services / Clap & Tap / Documentaries / Music Videos)
  vChurchBanner:  'assets/verticals/church-services-banner.jpg',
  vChurchProfile: 'assets/verticals/church-services-profile.jpg',
  vClapBanner:    'assets/verticals/clap-and-tap-banner.jpg',
  vClapProfile:   'assets/verticals/clap-and-tap-profile.jpg',
  vDocsBanner:    'assets/verticals/documentaries-banner.jpg',
  vDocsProfile:   'assets/verticals/documentaries-profile.jpg',
  vMusicBanner:   'assets/verticals/music-videos-banner.jpg',
  vMusicProfile:  'assets/verticals/music-videos-profile.jpg',

  // Artists (11 — flagship first)
  aAmadodana:       'assets/artists/amadodana-profile.jpg',
  aAmadodanaBanner: 'assets/artists/amadodana-banner.jpg',
  aMokala:          'assets/artists/dr-mokala-profile.jpg',
  aMokalaBanner:    'assets/artists/dr-mokala-banner.jpg',
  aPookgaodi:       'assets/artists/dr-pookgaodi-profile.jpg',
  aPookgaodiBanner: 'assets/artists/dr-pookgaodi-banner.jpg',
  aIsolomzi:        'assets/artists/isolomzi-profile.jpg',
  aIsolomziBanner:  'assets/artists/isolomzi-banner.jpg',
  aJerusalema:      'assets/artists/jerusalema-encha-profile.jpg',
  aJerusalemaBanner:'assets/artists/jerusalema-encha-banner.jpg',
  aMamelodi:        'assets/artists/mamelodi-profile.jpg',
  aMamelodiBanner:  'assets/artists/mamelodi-banner.jpg',
  aOldAreka:        'assets/artists/old-areka-profile.jpg',
  aOldArekaBanner:  'assets/artists/old-areka-banner.jpg',
  aMahlaela:        'assets/artists/professor-mahlaela-profile.jpg',
  aMahlaelaBanner:  'assets/artists/professor-mahlaela-banner.jpg',
  aLivingRock:      'assets/artists/living-rock-choir-profile.jpg',
  aLivingRockBanner:'assets/artists/living-rock-choir-banner.jpg',
  aPheko:           'assets/artists/pheko.jpg',
  // New designed banner art (Apr 2026)
  aMokgadi:         'assets/artists/mokgadi-square.png',
  aMokgadiBanner:   'assets/artists/mokgadi-banner.png',
  aRefuge:          'assets/artists/refuge-male-voice-square.png',
  aRefugeBanner:    'assets/artists/refuge-male-voice-banner.png',
  aStAmos:          'assets/artists/st-amos-square.png',
  aStAmosBanner:    'assets/artists/st-amos-banner.png',
};

// Content data — single source of truth for screens
const ubzArtists = [
  { key: 'amadodana',   name: 'Amadodana Ase Wesile',    tag: 'Methodist Choir',    country: 'ZA', flagship: true,
    bio: 'Formed 1985 by the Methodist YMG of Gauteng Central. 40 years, 40+ albums, 7 SAMAs. The flagship.',
    photo: 'aAmadodana', banner: 'aAmadodanaBanner' },
  { key: 'mokala',      name: 'Dr Mokala',               tag: 'Sermon Series',      photo: 'aMokala',   banner: 'aMokalaBanner' },
  { key: 'pookgaodi',   name: 'Dr Pookgaodi',            tag: 'Sermon Series',      photo: 'aPookgaodi',banner: 'aPookgaodiBanner' },
  { key: 'isolomzi',    name: 'Isolomzi Gospel',         tag: 'Gospel Choir',       photo: 'aIsolomzi', banner: 'aIsolomziBanner' },
  { key: 'jerusalema',  name: 'Jerusalema Encha',        tag: 'Worship',            photo: 'aJerusalema', banner: 'aJerusalemaBanner' },
  { key: 'mamelodi',    name: 'Mamelodi Children of Christ', tag: "Children's Choir", photo: 'aMamelodi', banner: 'aMamelodiBanner' },
  { key: 'oldareka',    name: 'Old Areka Apostolic',     tag: 'Apostolic Service',  photo: 'aOldAreka', banner: 'aOldArekaBanner' },
  { key: 'mahlaela',    name: 'Professor Mahlaela',      tag: 'Teaching',           photo: 'aMahlaela', banner: 'aMahlaelaBanner' },
  { key: 'livingrock',  name: 'The Living Rock Choir',   tag: 'Praise & Worship',   photo: 'aLivingRock', banner: 'aLivingRockBanner' },
  { key: 'pheko',       name: 'Pheko',                   tag: 'Gospel Artist',      photo: 'aPheko',    banner: 'aPheko' },
  { key: 'mokgadi',     name: 'Mokgadi Wa Leshole',      tag: 'Gospel · Sermon',    photo: 'aMokgadi',  banner: 'aMokgadiBanner' },
  { key: 'refuge',      name: 'Refuge Male Voice',       tag: "Men's Choir",        photo: 'aRefuge',   banner: 'aRefugeBanner' },
  { key: 'stamos',      name: 'St. Amos Gospel Church',  tag: 'Apostolic Worship',  photo: 'aStAmos',   banner: 'aStAmosBanner' },
];

const ubzVerticals = [
  { key: 'church',   name: 'Church Services', banner: 'vChurchBanner', profile: 'vChurchProfile',
    desc: 'Full Sunday services, live and on demand.' },
  { key: 'clap',     name: 'Clap & Tap',      banner: 'vClapBanner',   profile: 'vClapProfile',
    desc: 'Traditional praise — big choirs, full halls.' },
  { key: 'docs',     name: 'Documentaries',   banner: 'vDocsBanner',   profile: 'vDocsProfile',
    desc: 'Ministries, pilgrimages, and the people who carry the calling.' },
  { key: 'music',    name: 'Music Videos',    banner: 'vMusicBanner',  profile: 'vMusicProfile',
    desc: 'Studio-and-stage gospel — the SA canon.' },
];

Object.assign(window, {
  ubzTokens, ubzTheme, ubzType, ubzLabel, ubzPhotos,
  ubzDawnGradient, ubzDawnGradientBottom,
  ubzArtists, ubzVerticals,
});

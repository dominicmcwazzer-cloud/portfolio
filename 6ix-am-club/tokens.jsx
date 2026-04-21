// 6ix AM Club — design tokens & shared helpers

const sixTokens = {
  // Brand
  ink: '#000000',
  paper: '#FFFFFF',
  route: '#FF5A1F',

  // Neutrals (Tailwind-scale)
  n50:  '#FAFAFA',
  n100: '#F5F5F5',
  n200: '#E5E5E5',
  n300: '#D4D4D4',
  n400: '#A3A3A3',
  n500: '#737373',
  n600: '#525252',
  n700: '#404040',
  n800: '#262626',
  n900: '#171717',
  n950: '#0A0A0A',

  // Semantic
  success: '#22C55E',
  warning: '#F59E0B',
  error:   '#EF4444',
  info:    '#3B82F6',
};

// Resolve theme surfaces
function sixTheme(dark) {
  return dark
    ? {
        bg: '#0A0A0A',
        surface: '#171717',
        surfaceElev: '#1F1F1F',
        border: '#262626',
        text1: '#FFFFFF',
        text2: '#D4D4D4',
        text3: '#737373',
        chipBg: 'rgba(255,255,255,0.06)',
        overlay: 'rgba(0,0,0,0.55)',
      }
    : {
        bg: '#FAFAFA',
        surface: '#FFFFFF',
        surfaceElev: '#FFFFFF',
        border: '#E5E5E5',
        text1: '#0A0A0A',
        text2: '#525252',
        text3: '#A3A3A3',
        chipBg: 'rgba(0,0,0,0.04)',
        overlay: 'rgba(0,0,0,0.35)',
      };
}

// Type families
// Display: Bricolage Grotesque — variable, condensed, bulbous terminals;
// closest Google Font match to the Vol.02 poster's abstract display cut.
// Accent: Unica One — modernist, tight-spaced, display-stencil quality.
const sixType = {
  display: '"Bricolage Grotesque", "Helvetica Neue", Arial, sans-serif',
  accent: '"Unica One", "Bricolage Grotesque", Arial, sans-serif',
  ui: 'Inter, "Helvetica Neue", Arial, sans-serif',
  mono: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace',
  script: '"Homemade Apple", "Caveat", cursive',
};

// Typographic helper — label (tracked caps)
function sixLabel({ size = 11, color, track = 1.6, weight = 700 } = {}) {
  return {
    fontFamily: sixType.ui,
    fontSize: size,
    fontWeight: weight,
    textTransform: 'uppercase',
    letterSpacing: track,
    color,
    lineHeight: 1.2,
  };
}

// Imagery — abstract motion, pre-dawn, township/street, South African-
// coded. Long-exposure, silhouettes, dust, dawn skies. Not generic stock.
const sixPhotos = {
  // Splash: pure long-exposure motion, abstract — a body becoming a streak
  splash: 'https://images.unsplash.com/photo-1530143311094-34d807799e8f?w=900&q=80&auto=format&fit=crop',
  // Mission: silhouette runners at sunrise, backlit — graphic, not polished
  mission: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=900&q=80&auto=format&fit=crop',
  // Ready: single figure, dawn, reflective
  readyRun: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=900&q=80&auto=format&fit=crop',
  // Event hero: African street / township pre-dawn energy
  event: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=900&q=80&auto=format&fit=crop',
  // Feed — community portraits, mixed
  feed1: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=800&q=80&auto=format&fit=crop',
  feed2: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80&auto=format&fit=crop',
  feed3: 'https://images.unsplash.com/photo-1486218119243-13883505764c?w=800&q=80&auto=format&fit=crop',
  // Avatars — lean toward Black African portraits (club is Mamelodi-based)
  a1: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&auto=format&fit=crop',
  a2: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80&auto=format&fit=crop',
  a3: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda7d?w=200&q=80&auto=format&fit=crop',
  a4: 'https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?w=200&q=80&auto=format&fit=crop',
  a5: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80&auto=format&fit=crop',
  a6: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=200&q=80&auto=format&fit=crop',
  // Map: monochrome aerial, abstract
  map: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80&auto=format&fit=crop',
};

Object.assign(window, { sixTokens, sixTheme, sixType, sixLabel, sixPhotos });

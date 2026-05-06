# Claude Design Brief — *One Folder* Case Study Deck

**Hand this entire document to Claude Design.** It contains everything needed to produce the case-study deck for UX Project #3 in Dominic McWazzer's portfolio.

The interactive prototype is being built in parallel (Code side). Claude Design's deliverable is **the editorial slide deck only** — same fidelity and rhythm as the Ubizo TV deck Claude Design produced previously, adapted to the new brand.

---

## 1 · The product in one paragraph

**One Folder** is a speculative UX proposal for a unified digital patient-record + appointment system across the **South African public health system**. It anchors against the National Health Insurance Act of 2024, which already legislates a portable electronic health record for every person in the country — but no human-facing surfaces exist yet. One Folder designs those surfaces: a patient app, a clinician app (nurse + doctor + CHW), and an admin CMS dashboard. **27 screens across three surfaces, light + dark, 12 languages.**

The thesis is one sentence: *the law mandates the record; we designed the front-end.*

---

## 2 · Name, taglines, ceremonial form

- **Product name:** **One Folder** (English, descriptive, civic-clear — says exactly what it is)
- **Tagline (daily):** ***Nala. Kopano. Tshepo.*** *(Sepedi — "Prosperity. Togetherness. Trust.")*
- **Ceremonial form (deck cover / manifesto slide only):** ***Re bopa Nala ka Kopano le Tshepo.*** *(Sepedi — "We build prosperity through unity and trust.")*
- **Note:** Sepedi taglines are drafts pending native-speaker validation before any launch claim — the deck can show them confidently as design intent.

---

## 3 · Brand — "Aloe & Sun"

Bright, civic, accessibility-tested, distinctly SA without flag-rainbow cliché. Botanical green (aloe is a SA-native healing plant — symbolic without being literal) + warm coral (sidesteps SA-flag-orange).

### Light tokens

| Token | Hex | Use |
|---|---|---|
| `paper0` | `#FCF7EE` | warm-cream canvas — low-glare, easy on older eyes |
| `paper100` | `#F5EFDF` | secondary surface |
| `paper200` | `#E8DFD0` | dividers, sand surfaces |
| `aloe500` | `#2E7D5B` | **PRIMARY** — CTA, brand mark, headers |
| `aloe700` | `#1F5A40` | hover / pressed |
| `aloe300` | `#6FA38A` | secondary aloe |
| `sun500`  | `#FF7A4D` | **ACCENT** — coral, secondary actions, highlights |
| `sun300`  | `#FFAA88` | lighter coral surfaces |
| `ochre500`| `#D4A24C` | restraint accent — milestones / awards / featured only |
| `crimson500` | `#B53B3B` | emergencies + warnings ONLY (never decorative) |
| `ink900` | `#1A1410` | primary text on light |
| `ink700` | `#3A2E22` | secondary text |
| `ink500` | `#5D4F40` | tertiary text |

### Dark tokens (warm-dark, NOT pure black — civic, not midnight)

| Token | Hex | Use |
|---|---|---|
| `forest900` | `#0F1815` | dark canvas — deep forest green-black |
| `forest700` | `#1A2520` | dark surface |
| `forest500` | `#243530` | dark elevated surface |
| text1 (dark) | `#FCF7EE` | paper as text on forest |
| text2 (dark) | `#B5A89B` | secondary |
| text3 (dark) | `#7E7062` | tertiary |

### Type

- **UI / Display:** **Public Sans** *(USWDS's accessibility-validated default — institutional credibility built-in)*
- **Editorial:** **Source Serif 4** *(warm serif for manifesto slabs and ceremonial Sepedi quotes)*
- **Mono:** **JetBrains Mono** *(token codes, HPRN numbers, identifiers)*

### Gradient (sparingly, for hero / cover surfaces only)

`linear-gradient(135deg, #2E7D5B 0%, #6FA38A 45%, #FF7A4D 100%)` — aloe → sun

### Tone in two words: **civic dignity.** Not corporate-medical, not startup-exuberant.

---

## 4 · Audience for the deck

**UX hiring panels.** Senior product designers, hiring managers, design directors. They will skim. They are looking for:
- Evidence of systems thinking (multi-surface, real constraints, real data)
- Defensible decisions (every screen anchored to a clause, a constraint, a persona)
- Local research depth (this MUST feel like SA, not generic-Africa)
- Visual sophistication (editorial layout, restrained palette, intentional type)

The deck competes with Big Tech case studies — match that production quality.

---

## 5 · Existing reference — Ubizo TV deck

This is Dominic's most recent case-study deck (also produced by Claude Design). **Match its fidelity, layout intelligence, and editorial confidence.** Differences vs Ubizo TV:
- Ubizo TV was a **dark, warm-maroon, religious media product** — choirs, gospel, devotion
- One Folder is **a civic, light-default, public-sector product** — government, health, citizenship

So: same rhythm and care, completely different palette and tonal register. The Ubizo TV deck file is at `portfolio/ubizo-tv/index.html` for reference.

---

## 6 · Slide-by-slide structure (16 slides)

This is the proposed spine. Adjust ordering if a stronger narrative emerges, but keep all sixteen beats.

### Slide 01 — Cover

- Wordmark: **One Folder**
- Ceremonial Sepedi: ***Re bopa Nala ka Kopano le Tshepo.*** (large, Source Serif 4, italic acceptable)
- English gloss below: *We build prosperity through unity and trust.*
- Tiny meta strip: *A speculative UX proposal · 2026 · Dominic McWazzer*
- Background: aloe→sun gradient at low opacity, OR a single hero photograph of a SA public clinic queue (claude-design-sourced — Pexels/Unsplash CC0, real SA setting)

### Slide 02 — Premise (the thesis)

One sentence, large, set in Source Serif 4:
> "The National Health Insurance Act of 2024 already legislates a portable electronic health record for every person in South Africa. **No-one has designed the front-end.**"

Footer cite: *NHI Act 20 of 2023, signed 15 May 2024.*

### Slide 03 — The problem (the paper trail)

Hard data. Pulled from Ritshidze 2024 + PLOS scoping reviews:
- **3h 07m** average PHC waiting time (2024)
- **40%** of users say file retrieval is the primary cause of long waits
- **27%** of clinic sites have visibly broken filing systems
- **75%** of facility managers report insufficient staff
- **0.3 doctors per 1,000** (WHO target: 1.0)
- **~12,745 doctors and 58,897 nurses** lost to emigration 2013–2025

Layout: editorial stat slab, big numbers in Public Sans Black, small captions in Source Serif italic. Crimson `#B53B3B` for the most damning numbers — used sparingly.

### Slide 04 — The patchwork already in place

Counter the cynical "SA can't build digital" narrative. Show the systems that exist but are unconnected:

| System | Reach |
|---|---|
| **HPRS** (Health Patient Registration System) | ~20M people registered |
| **NHLS** lab portal | ~80% population coverage |
| **CCMDD** chronic-meds | 5.3M patients enrolled |
| **MomConnect** | 1.5M+ pregnant women, 95% of facilities |
| **Vula Mobile** | 2.5M referrals, 2,300+ facilities |
| **Stock Visibility System** | 3,126 PHC clinics |
| **EVDS** vaccinations | National COVID + childhood imms |
| **Western Cape Single Patient Viewer** | Working since 2015 |

Tagline for the slide: *"It's not a wasteland. It's a patchwork. We're the connective tissue."*

### Slide 05 — Seven personas

Grounded, named SA users. One card per persona, photo (CC0 photograph of a real-looking SA person — diverse genders/ages/regions), name, age, role, and one-line "their job-to-be-done." Personas:

1. **Mam' Sibongile, 67, Soweto** — Pensioner, hypertension + Type 2 diabetes. *Monthly script collector — the killer persona.*
2. **Thandiwe, 28, Mthatha → Pretoria** — Pregnant, just relocated. *Cross-province record persona.*
3. **Karabo, 19, Pretoria** — University student. *Caregiver-mode persona — books for his 81-year-old gogo.*
4. **Joseph, 34, Yeoville** — Asylum seeker, TB + HIV co-infection. *Identity edge-case made first-class.*
5. **Sister Lerato, 42, Limpopo** — PHC nurse, sees 60+ patients/day. *Primary clinician user.*
6. **Dr Mthembu, 29, North West** — Community-service doctor. *Locum / cross-province persona.*
7. **Mr Naidoo, 51, KZN** — Provincial Health Information Officer. *Admin / dashboard persona.*

### Slide 06 — Brand thesis ("Aloe & Sun")

Show the brand system on one slide:
- The wordmark "One Folder" in Public Sans Black, aloe `#2E7D5B`
- The five core hex swatches (paper, aloe, sun, ink, sand) with codes in JetBrains Mono
- A botanical aloe illustration or photograph on one side (CC0 — real Aloe ferox / vera, the SA-native healing plant)
- Tagline strip: *Nala. Kopano. Tshepo.*
- One paragraph in Source Serif 4 explaining the choice: *"Aloe is South Africa's native healing plant — symbolic without being literal. Coral sun sidesteps the flag-orange cliché. Public Sans is USWDS's accessibility-validated default — institutional credibility built-in. Civic dignity, not corporate-medical."*

### Slide 07 — Three surfaces, one record

A single triptych showing:
- **Patient app** (phone frame, light) — *home dashboard mock*
- **Clinician app** (phone frame, dark — night-shift nurse) — *queue mock*
- **Admin CMS** (desktop dashboard frame) — *provincial heat-map mock*

Below: "12 patient screens · 9 clinician screens · 6 admin screens · light + dark · 12 languages."

The actual screens for these three mocks will be supplied by Code as PNG screenshots — Claude Design composites them into the slide.

### Slide 08 — Flow 1: The Killer Flow (Mam' Sibongile's monthly script)

Three to four phone screenshots in sequence, with annotation arrows:
1. WhatsApp notification: *"Sibongile, your script is ready at Chiawelo Pickup Point. Tap to scan."*
2. Patient app showing the QR code + pickup point map
3. Pickup point staff view: scanner reading the QR
4. Patient app: *"Collected. Next script ready 03 Jun."*

Caption: *"5.3 million chronic-meds users. The killer flow saves the queue entirely."*

### Slide 09 — Flow 2: A Nurse's Morning Queue (Sister Lerato)

Clinician phone (or tablet) screens:
1. Today's queue — patient list home, role-aware, 23 patients waiting
2. Tap a patient → summary
3. Vitals + complaint capture (the **<90-second** screen)
4. Disposition — refer / prescribe / discharge

Caption: *"<90 seconds per consult. Beats paper, or it gets abandoned."*

### Slide 10 — Flow 3: Asylum-seeker Registration (Joseph)

Patient onboarding screens showing the multi-document identity choice (SA ID / asylum permit / refugee ID / clinic-linkage code), followed by the privacy-lock screen on HIV status.

Caption: *"The Constitution says he's entitled. The system must say so too."*

### Slide 11 — Flow 4: Stock-out Alert (Mr Naidoo)

Admin dashboard screens:
1. Provincial heat-map showing KZN with a stock-out cluster
2. Drill-down to facility level
3. Predictive alert: *"Atorvastatin will stock out at 14 facilities in 7 days."*

Caption: *"From Excel exports to predictive alerts. The MEC sees what's coming."*

### Slide 12 — Light + Dark Proof

Two halves of the slide, same screen (e.g. the patient home), one in light Aloe & Sun, one in warm-dark forest. Annotation strip showing the token resolution per mode (paper → forest, ink → paper, aloe holds, sun holds).

Caption: *"Night-shift nurses. Light-sensitive elders. One token system, two surfaces."*

### Slide 13 — Constraints honored

A single slab showing the seven non-negotiables we designed against, each with a one-line resolution:
1. Offline-first → 4-hour power gap survivable
2. Sub-R2,000 Android baseline → <2MB per session
3. 5 launch languages (Eng/isiZulu/isiXhosa/Afrikaans/Sepedi) → +SASL video
4. Icon-first, voice-supported → low-literacy floor
5. WhatsApp + USSD + paper QR → universal reach
6. Asylum-seeker IDs accepted → Constitutionally compliant
7. PHC nurse is the primary clinician user → <90s consult log

### Slide 14 — The patchwork connected (system map)

A single large diagram showing One Folder as the connective tissue between HPRS, NHLS, CCMDD, MomConnect, Vula, SVS, EVDS. Patient + Clinician + Admin surfaces sit on top. POPIA and the NHI Act anchor the bottom.

This is the architecture money-shot. Spend the design effort here — this is what convinces a hiring panel the candidate thinks in systems.

### Slide 15 — Deliverables

Stat slab format, like Ubizo TV's slide 14:
- **27 screens.** **3 surfaces.** **2 modes.** **12 languages.**
- **6 hero flows · 7 personas · 9 provinces · 1 record.**
- **Brand · Tokens · Components · Prototype · Deck.**

### Slide 16 — Outcome / CTA

Closing slide. Two CTA buttons:
- **Primary aloe pill:** *Open the Live Prototype ↗* → `prototype.html`
- **Ghost outline:** *← Back to portfolio* → `../index.html#ux`

Plus the ceremonial Sepedi closer in Source Serif 4:
> ***Re bopa Nala ka Kopano le Tshepo.***

Small English gloss below.

Tiny meta footer: *Dominic McWazzer · Digital Designer · 2026.*

---

## 7 · Format & deliverables

- **Single-file HTML deck** named `index.html`, identical scaffolding to the Ubizo TV deck (`<deck-stage>` web component, 1920×1080 design size, keyboard arrow navigation, 16 slides).
- All assets inline or in an `assets/` folder beside the HTML.
- Use the Aloe & Sun palette and Public Sans + Source Serif 4 type stack throughout.
- Photography: CC0 / open-license SA imagery only — real public clinics, real-looking SA people, real-looking aloe plants. No stock-photo-Africa clichés (no "smiling-children-with-mosquito-net" stuff).
- Real prototype screenshots (PNG) will be supplied by Code in `assets/screens/` for slides 07–12.
- Output the deck as a single self-contained bundle that drops into `portfolio/one-folder/` alongside the prototype.

---

## 8 · What Code is doing in parallel (so don't duplicate)

- Building the live interactive prototype at `prototype.html`
- Building the design tokens (`tokens.jsx`) and shared primitives (`primitives.jsx`)
- Generating real PNG screenshots of all 27 screens via headless Chrome
- Wiring the project into the portfolio root (`index.html`)
- Final commit + push to GitHub Pages

Claude Design's job is the **deck only** — the polished editorial narrative around the prototype.

---

## 9 · Tone notes

- Civic, dignified, editorial. Think *Constitutional Court interior signage*, not *startup pitch deck*.
- Confident but not boastful. The work speaks for itself.
- Sepedi tagline used once on cover (ceremonial form) and once on closing (matched). Daily form (*Nala. Kopano. Tshepo.*) used on hero strips and section headers.
- Numbers are real and cited. POPIA and NHI Act referenced by name, not by acronym alone.
- No emoji in the slide content (UI mocks can use them where designed).

---

## 10 · A note on respect

This is a project about **public goods, dignity, and trust**. Every choice — palette, typography, photography, copy — should pass the test: *would Mam' Sibongile feel respected by this design?* If a slide makes the user feel like a problem-to-be-solved rather than a citizen-to-be-served, rebuild it.

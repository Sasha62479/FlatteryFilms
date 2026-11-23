# Flattery Films — Site Map

The plan for the site. Update this file first, then build.
Status: ✅ live · 🛠 in progress · 🧪 prototyped in CodePen · ⏳ planned (not linked in the menu yet)

## Page rhythms
Every page uses one of these layouts, each with a clear job, so the site stays varied without getting confusing.

| Rhythm | Feels like | Used for |
|---|---|---|
| **Interactive** | Something to play with | Home (film-strip logo) |
| **Scroll story** | Full-screen photo, a few lines, scroll on and the photo crossfades | Home sections (What · Why · Where · Who), Thin Space and future projects |
| **Text page** | One calm reading column | Projects, Mood boards |
| **Single screen** | One view, nothing to scroll | Contact, 404 |

## Pages

**Home is one continuous scroll story** (like the Thin Space page): the film-strip logo, the statement, then each section in turn. Each section opens on a full-screen photo with its title, then the words scroll over the darkened photo, and the photo crossfades into the next section's. The menu's WHAT · WHY · WHERE · WHO glide straight to their section.

| Section / page | Address | What's on it | Status |
|---|---|---|---|
| Home — logo + statement | `/` | Film-strip logo; click a still → see it large | ✅ |
| ↳ What | `/#what` | What We Do · services · link to Projects | ✅ |
| ↳ Why | `/#why` | How We Connect — "It begins with curiosity." | ✅ |
| ↳ Where | `/#where` | "Everywhere!" — Air · Sea · Studio · Land, a photo behind each word (clips later) | 🛠 stills for now |
| ↳ Who | `/#who` | Who We Are copy, then one full-screen person at a time (Wil, Dani, Steven, Suzanne, Sean, Josh, Shane) | 🛠 needs headshots |
| Projects | `/projects/` | A card per project | 🛠 placeholder |
| ↳ Thin Space | `/projects/thin-space/` | Scroll story: stills + the story behind each (2026) | 🛠 needs Will's words |
| ↳ Wild Response · Shelter · Sleeping Rough | — | Cards marked "coming soon" until their pages exist | ⏳ |
| Mood boards | `/mood/` | Placeholder wall of stills | 🛠 placeholder |
| Contact | `/contact/` | info@flatteryfilms.com · Instagram · Facebook · YouTube | ✅ |
| Not found | `/404.html` | "Lost?" page with a way home | ⏳ |

Old addresses (`/what/`, `/why/`, `/who/`, `/projects/thin-space/`) forward to their new place, so earlier links still work.

## Storytelling
**Every image has a story, and the story lives in its project.**
- Each project chapter = one still + Will's story behind it, optionally with a **Listen** audio snippet in his voice.
- Every chapter has its own address, e.g. `/projects/thin-space/#scotland`, so anything can link straight to it.
- The home film strip links each still to its chapter ("read the story").
- The Stories page is only an index: it lists and links, it never holds a second copy of a story.

## Menu
WHAT · WHY · WHERE · WHO (glide to the home-page sections) — then PROJECTS · MOOD BOARDS · CONTACT (their own pages). Edit it in `assets/site.js`.

## Rules
- One folder per page, each with its own `index.html`.
- The menu is defined once, in `assets/site.js`. Shared styles live in `assets/site.css`.
- The team list lives in `assets/site.js` too. It feeds both the WHO menu and the WHO page.
- Story pages are built from the `CHAPTERS` list at the top of the page. Each chapter gets a short `id` (its address).
- Every page links home: wordmark (top) + menu + footer.
- A page is added to the menu only when it has real content.
- Images go in `images/<project>/` (e.g. `images/thin-space/`, `images/team/`), named lowercase-with-hyphens.
- Web photos: about 2400px wide, ~80% JPEG quality, under ~600 KB. Full-screen photos: landscape, with dark space on one side for text.

## Images
All images live in the repo (no outside links), so nothing breaks when the domain changes.
- `assets/img/stills/` — chapter stills + page backgrounds, ≤ 2400×1600, under ~480 KB, named by id (`thin-space-scotland-bagpiper.jpg`)
- `assets/img/home/` — the home film strip, 1600 px on the long side
- `assets/img/team/` — headshots named by person id (`wil.jpg`, `dani.jpg` …). Used full-screen on Who **and** as the 3:4 grayscale thumbnail in the menu; `pos` (e.g. `50% 30%`) picks the crop.


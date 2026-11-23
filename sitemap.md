# Flattery Films — Site Map

The plan for the site. Update this file first, then build.
Status: ✅ live · 🛠 in progress · 🧪 prototyped in CodePen · ⏳ planned (not linked in the menu yet)

## Page rhythms
Every page uses one of these layouts, each with a clear job, so the site stays varied without getting confusing.

| Rhythm | Feels like | Used for |
|---|---|---|
| **Text page** | One calm reading column | What, Why, Who (intro copy) |
| **Interactive** | Something to play with | Home (film-strip logo) |
| **Scroll story** | Full-screen image, a few lines, scroll to the next moment | Projects, Who |
| **Single screen** | One view, nothing to scroll | Where, Mood (reel), Contact, Stories, 404 |

## Pages

| Page | Address | Rhythm | What's on it | Status |
|---|---|---|---|---|
| Home | `/` | Interactive | Film-strip logo; click a still → see it large → "read the story" | ✅ |
| What | `/what/` | Text page | What We Do · services list | ✅ |
| ↳ Project I · Thin Space | `/what/thin-space/` | Scroll story | Stills + the story behind each (2026) | 🛠 needs Will's words |
| ↳ Project II · Shelter | `/what/shelter/` | Scroll story | Animal shelter project | ⏳ |
| ↳ Project III · Sleeping Rough | `/what/sleeping-rough/` | Scroll story | England charity, kids sleeping rough | ⏳ |
| Why | `/why/` | Text page | How We Connect — "It begins with curiosity." | ✅ |
| Where | `/where/` | Single screen | "Everywhere!" — Air · Sea · Studio · Land, a clip behind each word | 🧪 |
| Who | `/who/` | Text page + Scroll story | Who We Are copy, then one full-screen person at a time (Wil, Dani, Steven, Suzanne, Sean, Josh, Shane) | 🛠 copy + bios ✅ · needs headshots |
| Stories | `/stories/` | Single screen | Every story across all projects, each linking to its chapter (later: podcast / YouTube) | ⏳ |
| Mood | `/mood/` | Single screen | The reel, muted loop + "Play with sound" | 🧪 needs final reel |
| Contact | `/contact/` | Single screen | info@flatteryfilms.com · Instagram · Facebook · YouTube | 🧪 |
| Not found | `/404.html` | Single screen | "Lost?" page with a way home | ⏳ |

## Storytelling
**Every image has a story, and the story lives in its project.**
- Each project chapter = one still + Will's story behind it, optionally with a **Listen** audio snippet in his voice.
- Every chapter has its own address, e.g. `/what/thin-space/#scotland`, so anything can link straight to it.
- The home film strip links each still to its chapter ("read the story").
- The Stories page is only an index: it lists and links, it never holds a second copy of a story.

## Menu
WHAT (project thumbnails) · WHY · WHERE · WHO (team portraits) · STORIES · MOOD · CONTACT

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

## Moving between pages
Home → What → Why → Who reads like one story: the last screen of each page shows the next page's opening photo, and scrolling past it glides into that page (clicking works too). Who ends with a link back to the start. Set it up on a page by adding an `<a class="next-page">` block at the end (see what/index.html); the behaviour lives in `assets/site.js`.
Once you scroll, a dark bar fades in behind the wordmark and MENU so they never sit on a busy photo.

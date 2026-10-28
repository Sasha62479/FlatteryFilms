# Flattery Films — Site Map

The plan for the site. Update this file first, then build.
Status: ✅ live · 🛠 in progress · ⏳ planned (not linked in the menu yet)

| Page | Address | What's on it | Status |
|---|---|---|---|
| Home | `/` | Film-strip logo hero, wordmark, menu | ✅ |
| What | `/what/` | What We Do · services · "One Contact – One Contract" | ⏳ |
| ↳ Thin Space | `/what/thin-space/` | Full-screen story chapters: stills + stories behind them (2026) | 🛠 needs Will's words |
| Why | `/why/` | How We Connect — "Authentically, With Purpose" | ⏳ |
| Where | `/where/` | "Everywhere!" — Air · Sea · Studio · Land | ⏳ |
| Who | `/who/` | The team | ⏳ |
| Mood | `/mood/` | "We Are Such a Mood" | ⏳ |
| Contact | `/contact/` | Form + info@flatteryfilms.com + socials | ⏳ |
| Not found | `/404.html` | "Lost?" page with a way home | ⏳ |

## Rules
- One folder per page, each with its own `index.html`.
- The menu is defined once, in `assets/site.js`. Shared styles live in `assets/site.css`.
- Story pages (like Thin Space) are built from the `CHAPTERS` list at the top of the page.
- Every page links home: wordmark (top) + menu + footer.
- A page is added to the menu only when it has real content.
- Images go in `images/<project>/`, named lowercase-with-hyphens.

// =====================================================================
//  FLATTERY FILMS — shared wordmark, menu and top bar (every page loads this file)
//  Edit the menu HERE only. Paths are relative to the site's root folder.
//  STORY links glide to a section of the home page; PAGES open their own page.
//  A link with no `href` shows faded as "soon" — add the href once the page exists.
// =====================================================================
(() => {
  const STORY = [
    { label: "WHAT",  href: "#what"  },
    { label: "WHY",   href: "#why"   },
    { label: "WHERE", href: "#where" },
    { label: "WHO",   href: "#who"   },
  ];
  const PAGES = [
    { label: "PROJECTS",    href: "projects/" },
    { label: "MOOD BOARDS", href: "mood/"     },
    { label: "CONTACT",     href: "contact/"  },
  ];

  // root of the site, worked out from where this script lives (works locally, on github.io, and on the domain)
  const ROOT = new URL("..", document.currentScript.src).href;
  const url = p => new URL(p, ROOT).href;

  document.body.insertAdjacentHTML("afterbegin", `
    <div class="topbar" aria-hidden="true"></div>
    <a class="wordmark" href="${ROOT}" aria-label="Flattery Films — home">FLATTERY FILMS</a>
    <button class="burger" id="openBtn" aria-label="Open menu">MENU <i></i></button>
    <div class="scrim" id="scrim"></div>
    <nav class="nav" aria-label="Main">
      <a class="nav-home" href="${ROOT}">HOME</a>
      <button class="close" id="closeBtn" aria-label="Close menu"></button>
      <div class="list">${STORY.map(l =>
        `<a class="head" href="${url(l.href)}">${l.label} <span class="arrow"></span></a>`).join("")}</div>
      <ul class="plain">${PAGES.map(l => `<li>${l.href
        ? `<a href="${url(l.href)}">${l.label}</a>`
        : `<span class="soon">${l.label}</span>`}</li>`).join("")}</ul>
    </nav>`);

  const body = document.body, $ = id => document.getElementById(id);
  const open = () => body.classList.add("open"), close = () => body.classList.remove("open");
  $("openBtn").onclick = open; $("closeBtn").onclick = close; $("scrim").onclick = close;
  addEventListener("keydown", e => e.key === "Escape" && close());
  // a link that stays on this page (e.g. WHAT while on the home page) just closes the menu and glides there
  document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", close));

  // ---- top bar: show the dark strip behind the wordmark once the page has scrolled ----
  const onScrollBar = () => body.classList.toggle("scrolled", scrollY > 30);
  addEventListener("scroll", onScrollBar, { passive: true }); onScrollBar();
})();

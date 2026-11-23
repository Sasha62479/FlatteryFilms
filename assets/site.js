// =====================================================================
//  FLATTERY FILMS — shared wordmark + menu (every page loads this file)
//  Edit the menu HERE only. Paths are relative to the site's root folder.
//  A link with no `href` shows faded as "soon" — add the href once the page exists.
//  On a menu item, `href` + `more` add a link to that section's page (e.g. WHY → "HOW WE CONNECT").
// =====================================================================
(() => {
  const MENU = [
    { label: "WHAT", href: "what/", more: "WHAT WE DO", projects: [
      { title: "THIN SPACE", href: "what/thin-space/",
        img: "assets/img/stills/thin-space-scotland-kilts-street.jpg" },
      { title: "SHELTER" },          // add href + img when the page exists
      { title: "SLEEPING ROUGH" },
    ]},
    { label: "WHY",   text: "It begins with curiosity.", href: "why/", more: "HOW WE CONNECT" },
    { label: "WHERE", text: "Everywhere! Air · Sea · Studio · Land." },
    { label: "WHO", href: "who/", more: "WHO WE ARE", projects: [
      // headshots live in assets/img/team/<id>.jpg · `pos` = which part of the photo stays in frame
      { title: "WIL",     href: "who/#wil",     img: "assets/img/team/wil.jpg",     pos: "50% 30%" },
      { title: "DANI",    href: "who/#dani",    img: "assets/img/team/dani.jpg",    pos: "50% 30%" },
      { title: "STEVEN",  href: "who/#steven",  img: "assets/img/team/steven.jpg",  pos: "50% 30%" },
      { title: "SUZANNE", href: "who/#suzanne", img: "assets/img/team/suzanne.jpg", pos: "50% 30%" },
      { title: "SEAN",    href: "who/#sean",    img: "assets/img/team/sean.jpg",    pos: "50% 30%" },
      { title: "JOSH",    href: "who/#josh",    img: "assets/img/team/josh.jpg",    pos: "50% 30%" },
      { title: "SHANE",   href: "who/#shane",   img: "assets/img/team/shane.jpg",   pos: "50% 30%" },
    ]},
  ];
  const LINKS = [
    { label: "MOOD" },       // href: "mood/"    when ready
    { label: "CONTACT" },    // href: "contact/" when ready
  ];

  // root of the site, worked out from where this script lives (works locally, on github.io, and on the domain)
  const ROOT = new URL("..", document.currentScript.src).href;
  const url = p => new URL(p, ROOT).href;

  const item = m => `
    <div class="item">
      <button class="head" aria-expanded="false">${m.label} <span class="chev"></span></button>
      <div class="body"><div><div class="inner">${
        m.projects
          ? `<div class="stills">${m.projects.map(p => p.href
              ? `<a href="${url(p.href)}" style="${p.img ? `background-image:url('${url(p.img)}');` : ""}--pos:${p.pos || "center"}"><b>${p.title}</b></a>`
              : `<span><b>${p.title}</b></span>`).join("")}</div>`
          : m.text
      }${m.href ? `<a class="more" href="${url(m.href)}">${m.more || "READ MORE"}</a>` : ""}</div></div></div>
    </div>`;

  document.body.insertAdjacentHTML("afterbegin", `
    <div class="topbar" aria-hidden="true"></div>
    <a class="wordmark" href="${ROOT}" aria-label="Flattery Films — home">FLATTERY FILMS</a>
    <button class="burger" id="openBtn" aria-label="Open menu">MENU <i></i></button>
    <div class="scrim" id="scrim"></div>
    <nav class="nav" aria-label="Main">
      <a class="nav-home" href="${ROOT}">HOME</a>
      <button class="close" id="closeBtn" aria-label="Close menu"></button>
      <div class="list">${MENU.map(item).join("")}</div>
      <ul class="plain">${LINKS.map(l => `<li>${l.href
        ? `<a href="${url(l.href)}">${l.label}</a>`
        : `<span class="soon">${l.label}</span>`}</li>`).join("")}</ul>
    </nav>`);

  const body = document.body, $ = id => document.getElementById(id);
  const open = () => body.classList.add("open"), close = () => body.classList.remove("open");
  $("openBtn").onclick = open; $("closeBtn").onclick = close; $("scrim").onclick = close;
  addEventListener("keydown", e => e.key === "Escape" && close());
  document.querySelectorAll(".item .head").forEach(btn => btn.onclick = () => {
    const it = btn.parentElement, was = it.classList.contains("is-open");
    document.querySelectorAll(".item").forEach(i => { i.classList.remove("is-open"); i.querySelector(".head").setAttribute("aria-expanded", "false"); });
    if (!was) { it.classList.add("is-open"); btn.setAttribute("aria-expanded", "true"); }
  });

  // ---- top bar: show the dark strip behind the wordmark once the page has scrolled ----
  const onScrollBar = () => body.classList.toggle("scrolled", scrollY > 30);
  addEventListener("scroll", onScrollBar, { passive: true }); onScrollBar();

  // ---- glide to the next page: when the .next-page screen is fully scrolled into view, go there ----
  const next = document.querySelector(".next-page");
  if (next) {
    const fill = next.querySelector(".next-fill");
    let armed = false, going = false;          // "armed" = the reader has scrolled toward it, not just landed on it
    const go = () => { if (going) return; going = true; body.classList.add("leaving"); setTimeout(() => location.href = next.href, 450); };
    const check = () => {
      const r = next.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight - r.top) / r.height));   // 0 = just appearing, 1 = fills the screen
      if (fill) fill.style.transform = `scaleX(${p})`;
      if (p < 0.6) armed = true;
      if (armed && p > 0.97) go();
    };
    next.addEventListener("click", e => { e.preventDefault(); go(); });
    addEventListener("scroll", check, { passive: true });
    // coming back with the Back button: don't bounce straight forward again
    addEventListener("pageshow", () => { going = false; armed = false; body.classList.remove("leaving"); check(); });
    check();
  }
})();

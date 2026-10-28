// =====================================================================
//  FLATTERY FILMS — shared wordmark + menu (every page loads this file)
//  Edit the menu HERE only. Paths are relative to the site's root folder.
//  A link with no `href` shows faded as "soon" — add the href once the page exists.
// =====================================================================
(() => {
  const MENU = [
    { label: "WHAT", projects: [
      { title: "THIN SPACE", href: "what/thin-space/",
        img: "https://assets.codepen.io/14693322/Thin-Space-Scotland-Sean-Murphy-D2-052537900.jpg" },
      { title: "SHELTER" },          // add href + img when the page exists
      { title: "SLEEPING ROUGH" },
    ]},
    { label: "WHY",   text: "Flattery will get you everywhere. Attention and the right questions reveal people's authentic beauty." },
    { label: "WHERE", text: "Everywhere! Air · Sea · Studio · Land." },
    { label: "WHO",   text: "A collective of directors, cinematographers and producers." },
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
              ? `<a href="${url(p.href)}" style="background-image:url('${p.img || ""}')"><b>${p.title}</b></a>`
              : `<span><b>${p.title}</b></span>`).join("")}</div>`
          : m.text
      }</div></div></div>
    </div>`;

  document.body.insertAdjacentHTML("afterbegin", `
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
})();

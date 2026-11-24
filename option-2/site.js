// =====================================================================
//  FLATTERY FILMS — whole-site prototype
//  Every "page" of the site lives in this one pen. The menu switches
//  between them. On the real site each page is its own folder
//  (see sitemap.md); the content lists below move over unchanged.
//
//    #/                       HOME — film-strip logo
//    #/what/thin-space/scotland   PROJECT I — scroll story (chapter address)
//    #/who/dani               WHO — scroll through the team
//    #/where  #/mood  #/contact  #/stories   single-screen pages
// =====================================================================

const PEN = "https://assets.codepen.io/14693322/";
const WP  = "https://flatteryfilms.com/wp-content/uploads/";

// ---------------------------------------------------------------------
// 1) PROJECTS — each chapter is one still + the story behind it.
//    id:    the chapter's address (#/what/thin-space/<id>)
//    audio: an mp3 of Will telling the story ("" shows LISTEN · SOON)
//    Wrap a name in <mark>…</mark> for the red hand-drawn stroke.
// ---------------------------------------------------------------------
const PROJECTS = [
  { id: "thin-space", num: "I", title: "THIN SPACE", year: "2026",
    cover: PEN + "Thin-Space-Scotland-Sean-Murphy-D2-052537900.jpg",
    chapters: [
      { id: "intro", img: PEN + "Thin-Space-Scotland-Sean-Murphy-D2-052537900.jpg",
        kicker: "PROJECT I · 2026", title: "THIN SPACE",
        text: "An upcoming documentary. Will's introduction to the film goes here. Stills by <mark>Sean Murphy</mark>." },
      { id: "costa-rica", img: PEN + "Thin-Space-Eric-Pall300077adino-Sean-Murphy-D5-CostaRica-1124.jpg",
        kicker: "I · COSTA RICA", title: "COSTA RICA", audio: "",
        text: "The story behind this still goes here: where it was, who was there, what happened just before the shutter." },
      { id: "abandoned-plane", img: PEN + "Thin-Space-abandoned+plabe.jpg",
        kicker: "II", title: "PAT MULDOON", audio: "",
        text: "A few lines about <mark>Pat Muldoon</mark> and this moment." },
      { id: "mexico", img: PEN + "Thin_Space_Sean_Murphy_Mexico_0924_D12262651.jpg",
        kicker: "III · MEXICO", title: "MEXICO", audio: "",
        text: "The story behind this still goes here." },
      { id: "boat", img: PEN + "Thin-Space-Eric-Pall292295adino-Sean-Murphy-D3-CostaRica-1124.jpg?format=auto",
        kicker: "IV · COSTA RICA", title: "THE BOAT", audio: "",
        text: "The story behind this still goes here." },
      { id: "scotland", img: PEN + "Thin-Space-Scotland-Sean-Murphy-D5-052547463.jpg",
        kicker: "V · SCOTLAND", title: "SCOTLAND", audio: "",
        text: "The story behind this still goes here." },
      { id: "end", img: PEN + "Thin-Space-Scotland-Sean-Murphy-D1Leica-052536906.jpg",
        kicker: "THIN SPACE", title: "END OF THE REEL", end: true,
        text: "Thank you for watching. More of the story is coming in 2026." },
    ]},
  { id: "shelter",        num: "II",  title: "SHELTER" },          // add cover + chapters when ready
  { id: "sleeping-rough", num: "III", title: "SLEEPING ROUGH" },
];

// ---------------------------------------------------------------------
// 2) THE TEAM — feeds the WHO menu and the WHO page.
// ---------------------------------------------------------------------
const TEAM = [
  { id: "wil", name: "WIL BEAUCHER", role: "FOUNDING PARTNER · WRITER / DIRECTOR", img: WP + "2024/02/wil-beaucher-400x300-1.jpg", pos: "50% 35%",
    bio: "Wil Beaucher is a passionate writer/director who has shaped narratives on film and paper for over two decades.", credits: "THIN SPACE" },
  { id: "dani", name: "DANI BEHR", role: "FOUNDING PARTNER · EXECUTIVE PRODUCER", img: WP + "2024/05/danni-behr.jpeg", pos: "50% 30%",
    bio: "Dani Behr boasts a remarkable career spanning over 35 years. She has hosted and produced shows for ABC, NBC, FOX, BBC, C4 and more.", credits: "ABC · NBC · FOX · BBC · C4" },
  { id: "steven", name: "STEVEN V. SILVER", role: "CINEMATOGRAPHER", img: WP + "2024/02/steven-silver400x300.jpg", pos: "55% 30%",
    bio: "With 9 Emmy nominations and 3 statues, Steve Silver is a visual juggernaut.", credits: "TWO AND A HALF MEN · THE BIG BANG THEORY" },
  { id: "suzanne", name: "SUZANNE LUNA", role: "DIRECTOR", img: WP + "2024/02/suzanne-luna-2.jpg", pos: "30% 30%",
    bio: "Six Emmy Awards and twelve nominations. Suzanne has directed over 1,000 segments.", credits: "THE ELLEN DEGENERES SHOW" },
  { id: "sean", name: "SEAN MURPHY", role: "PHOTOGRAPHER", img: WP + "2024/02/sean-murphy-400x300-1.jpg", pos: "45% 30%",
    bio: "Bio coming soon.", credits: "THIN SPACE — STILLS" },
  { id: "josh", name: "JOSH MEDAK", role: "DIRECTOR OF PHOTOGRAPHY", img: WP + "2024/02/josh-medak-400x300-1.jpg", pos: "55% 50%", bio: "Bio coming soon." },
  { id: "shane", name: "SHANE REYNOLDS", role: "DIRECTOR OF PHOTOGRAPHY", img: WP + "2024/02/shane-reynolds-400x300-1.jpg", pos: "45% 30%", bio: "Bio coming soon." },
];

// ---------------------------------------------------------------------
// 3) HOME — the stills inside the film-strip logo.
//    story: which chapter "read the story" opens (leave out if none yet)
// ---------------------------------------------------------------------
const HOME_STILLS = [
  { src: PEN + "Thin-Space-Eric-Pall292295adino-Sean-Murphy-D3-CostaRica-1124.jpg?format=auto", caption: "Thin Space — the boat, Costa Rica.", story: "what/thin-space/boat" },
  { src: PEN + "Thin_Space_Sean_Murphy_Mexico_0924_D12262651.jpg", caption: "Thin Space — Mexico.", story: "what/thin-space/mexico" },
  { src: PEN + "Thin-Space-Eric-Pall300077adino-Sean-Murphy-D5-CostaRica-1124.jpg", caption: "Thin Space — Costa Rica.", story: "what/thin-space/costa-rica" },
  { src: PEN + "Thin-Space-Scotland-Sean-Murphy-D5-052547463.jpg", caption: "Thin Space — Scotland.", story: "what/thin-space/scotland" },
  { src: PEN + "Thin-Space-Scotland-Sean-Murphy-D1Leica-052536906.jpg", caption: "Thin Space — Scotland.", story: "what/thin-space/end" },
  { src: PEN + "Thin-Space-Scotland-Sean-Murphy-D2-052537900.jpg", caption: "Thin Space — Scotland.", story: "what/thin-space/intro" },
  { src: PEN + "5I9A9838.jpg", caption: "Thin Space — Scotland." },
  { src: PEN + "Image+3-10-24+at+10.40%E2%80%AFAM.jpg", caption: "Alaska — U.S." },
  { src: PEN + "Sean+Water+Shot.jpeg?format=auto", caption: "Alaska — U.S." },
];

// ---------------------------------------------------------------------
// 4) FILM — clips from the current site (swap for new edits any time)
// ---------------------------------------------------------------------
const WHERE = [
  { word: "AIR",    clip: WP + "2024/02/ff-above-web.mp4",                       line: "Drone and aerial — the view from above." },
  { word: "SEA",    clip: WP + "2024/02/ff-below-web.mp4",                       line: "Deep-sea capabilities — the view from below." },
  { word: "STUDIO", clip: WP + "2024/02/FlatteryFilms-STUDIO-NETWORK.mp4",       line: "Studio, network, product and marketing." },
  { word: "LAND",   clip: WP + "2024/03/Flattery-Films-on-the-Ground-FINALRECUT.mp4", line: "On the ground, wherever the story is." },
];
const REEL = WP + "2024/03/Flattery-Films-on-the-Ground-FINALRECUT.mp4";   // stand-in until the new reel is cut

// ---------------------------------------------------------------------
// OPTION 2 — every section opens with a write-up screen before the
// full-screen scroll begins. Photos live in the repo (assets/img/stills).
//   paras: paragraphs · lede: the big opening line · list: a list in columns
//   links: buttons at the bottom of that screen · clip: a video behind it
// ---------------------------------------------------------------------
const IMG = "../assets/img/stills/";
// Bigger team photos kept in the repo (assets/img/team/<id>.jpg).
//   pos: which part of the photo stays in frame · pin: where the name tag sits on screen [left %, top %]
const TEAM_PHOTOS = {
  wil:     { img: "../assets/img/team/wil.jpg",     pos: "50% 40%", pin: [62, 40] },
  dani:    {                                                       pin: [52, 26] },
  steven:  { img: "../assets/img/team/steven.jpg",  pos: "58% 30%", pin: [68, 24] },
  suzanne: { img: "../assets/img/team/suzanne.jpg", pos: "35% 35%", pin: [48, 20] },
  sean:    {                                                       pin: [58, 28] },
  josh:    { img: "../assets/img/team/josh.jpg",    pos: "62% 40%", pin: [74, 38] },
  shane:   {                                                       pin: [46, 28] },
};
TEAM.forEach(t => Object.assign(t, TEAM_PHOTOS[t.id] || {}));
const NEXT = (label, path) => ({ label: label + " &nbsp;→", href: "#/" + path });   // same as link() below

const WHAT_INTRO = [
  { id: "what-we-do", intro: true, img: IMG + "thin-space-scotland-dinner-shoot.jpg", kicker: "WHAT", title: "WHAT WE DO",
    paras: [
      "Flattery Films is a collective of award-winning directors, cinematographers, and producers united by a shared commitment to meaningful storytelling.",
      "We create cinematic documentaries and docuseries that explore the honesty, complexity, and beauty of the human experience.",
      "We bring that same storytelling sensibility to branded content, creating films that help brands connect with audiences on a deeper, more meaningful level.",
      "Whether following extraordinary individuals around the world or partnering with a global brand, our purpose remains the same: to tell stories with integrity, depth, and lasting resonance.",
      "We believe great storytelling begins with trust. It’s what allows us to look deeper, connect more honestly, and capture the moments that make a story worth telling." ] },
  { id: "services", intro: true, img: IMG + "sean-murphy-bison.jpg", kicker: "WHAT", title: "SERVICES",
    list: ["Docuseries", "Full-length docs", "Full-length features", "Scripting", "Original scripting", "Script rewrites", "Talent acquisition",
           "Location procurement", "Voice-over", "Original scoring", "Show development", "Studio and on location", "Drone",
           "Deep sea capabilities", "BTS", "Product and marketing stills", "In-house editing", "Color correction", "Sound design", "Edit direction"] },
];
const WHY_INTRO = [
  { id: "how-we-connect", intro: true, img: IMG + "bike-shop-yellow-hat.jpg", kicker: "WHY", title: "HOW WE CONNECT", lede: "It begins with curiosity.",
    paras: [
      "The most compelling stories often reveal themselves in unexpected ways. A quiet conversation, an unguarded moment, a simple gesture that says more than the words that follow.",
      "We approach every project with an open mind, a genuine curiosity, and a desire to understand the people at their heart, and the experiences at their core. We listen, observe, and allow the story to unfold naturally, discovering the moments of truth that make each film uniquely human.",
      "Because real connection can’t be manufactured. It has to be earned." ],
    links: [NEXT("WHERE WE GO", "where")] },
];
const WHERE_INTRO = { id: "everywhere", intro: true, img: IMG + "alaska-helicopter-glacier.jpg", kicker: "WHERE", title: "EVERYWHERE!",
  lede: "Air · Sea · Studio · Land.", paras: ["Flattery will get you everywhere!"] };
const WHERE_STILLS = { AIR: IMG + "wild-response-helicopter.jpg", SEA: IMG + "thin-space-mexico-underwater.jpg",
                       STUDIO: IMG + "sean-murphy-boxing.jpg", LAND: IMG + "thin-space-scotland-kilts-street.jpg" };
const WHO_INTRO = { id: "who-we-are", intro: true, img: IMG + "sean-murphy-water-softbox.jpg", pos: "50% 55%", kicker: "WHO", title: "WHO WE ARE",
  lede: "Experience is important, but it’s only the beginning.",
  paras: [
    "The Flattery Films team brings decades of experience across documentary filmmaking, television, and cinematic branded storytelling, collectively earning more than 20 Emmy nominations, 9 wins, and over a billion views worldwide.",
    "Our filmmakers have contributed to some of television’s most recognizable productions, including <i>The Big Bang Theory</i>, <i>Two and a Half Men</i>, and <i>The Ellen DeGeneres Show</i>, while also creating original docuseries such as <i>Wild Response</i> and <i>Thin Space</i>.",
    "From feature-length documentaries to short-form branded content, we bring the same creative vision and technical expertise to every project.",
    "Our experience may span genres and formats, but what unites us is a shared belief that extraordinary filmmaking begins with a story worth telling." ] };

// ---------------------------------------------------------------------
// 5) CONTACT
// ---------------------------------------------------------------------
const EMAIL  = "info@flatteryfilms.com";
const SOCIAL = [
  { label: "INSTAGRAM", href: "https://www.instagram.com/flatteryfilm/" },
  { label: "FACEBOOK",  href: "https://www.facebook.com/profile.php?id=61555957708445" },
  { label: "YOUTUBE",   href: "https://www.youtube.com/channel/UC7BpuoFglPkq3mGoRgTgWfw" },
];

// =====================================================================
//  PAGE · HOME — the film-strip logo (same code as index.html)
// =====================================================================
function mountHome(app) {
  app.innerHTML = `<main class="hero"><canvas id="logo" aria-label="Flattery Films logo as a moving film strip"></canvas></main>
    <div class="lightbox" id="lightbox"><figure><img alt=""><p></p><a class="story-link" hidden>READ THE STORY &nbsp;→</a></figure></div>`;
  let alive = true;
  const STILLS = HOME_STILLS;

  // 2) LOOK & FEEL
  const SPEED       = 14;   // film speed, px per second (0 = still)
  const HOVER_SPEED = 2;    // speed while the cursor is on the logo (slows so you can pick a frame)
  const IDLE_ALPHA  = 0.75;  // brightness of the black-and-white frames at rest (0–1)
  const COLOR_REACH = 1.3;  // how far the colour spreads from the cursor, in frame-widths

  // 3) OUTLINE — the film-strip outline around the logo (sizes are px at a 520px-wide logo; they scale with it)
  const GAP    = 9.5;   // px from one perforation to the next
  const HOLE_W = 3;   // perforation length (along the outline), px
  const HOLE_H = 5;     // perforation height (across the outline), px
  const ROUND  = 0.9;   // corner rounding of each perforation, px
  const OUTLINE_SPEED       = 6;   // how fast the outline runs, px per second
  const OUTLINE_HOVER_SPEED = 20;  // outline speed while the cursor is on the logo
  const REACH  = 80;    // cursor influence radius, px
  const PUSH   = 10;    // how far perforations lift away from the cursor, px
  const BAND   = 12;    // width of the faint film strip under the holes, px (0 = none)

  // Logo outline traced from the artwork, centred on 0,0, scaled to 1.
  const SHAPES = [[[0.5, -0.4188], [0.3375, -0.2563], [0.3347, -0.2563], [0.3333, 0.3291], [0.035, 0.3291], [0.0336, 0.0462], [-0.0952, 0.1751], [-0.098, 0.3291], [-0.2507, 0.3291], [-0.416, 0.4944], [0.4034, 0.4944], [0.4286, 0.4888], [0.4594, 0.472], [0.4846, 0.444], [0.4958, 0.4202], [0.5, 0.402]], [[0.4146, -0.4944], [-0.3978, -0.4944], [-0.4216, -0.4902], [-0.4426, -0.4818], [-0.4594, -0.4706], [-0.4762, -0.4538], [-0.4916, -0.4272], [-0.4986, -0.402], [-0.4986, 0.4216], [-0.3347, 0.2577], [-0.3347, 0.105], [-0.3319, 0.1022], [-0.1807, 0.1022], [-0.0518, -0.0266], [-0.3347, -0.0294], [-0.3347, -0.3277], [0.2521, -0.3291], [0.2521, -0.3319]]];
  // The film's path through each bar of the logo (centre line + bar width), same units.
  // piece = which half of the logo the film stays inside (0 = right/bottom half, 1 = top/left half).
  const ROUTES = [
    { w: 0.131, pts: [[-0.417, 0.0365], [0.06, 0.0365]], piece: 1, clip: [-0.335, -1, 1, 1] },  // F middle arm (starts at the left bar's inner edge)
    { w: 0.133, pts: [[-0.0315, 0.4115], [-0.0315, -0.06]], piece: 0, clip: [-1, -1, 1, 0.329] }, // inner stem (starts at the bottom bar's top edge)
    { w: 0.165, pts: [[0.52, -0.4115], [-0.417, -0.4115], [-0.417, 0.53]], piece: 1 },  // top bar → left bar
    { w: 0.166, pts: [[0.4165, -0.53], [0.4165, 0.4115], [-0.53, 0.4115]], piece: 0 },  // right bar → bottom bar
  ];

  const cv = app.querySelector("#logo"), ctx = cv.getContext("2d");
  let W = 0, L = 0, routes = [], outline = null, pieces = [], mouse = { x: -1e4, y: -1e4 }, over = false;
  let speed = SPEED, oSpeed = OUTLINE_SPEED, last = 0, hits = [], glow = {}, rims = [], K = 1; let DPR = 1;

  // ---- stills: a colour version and a black-and-white version of each ----
  function greyOf(img) {
    const o = document.createElement("canvas"); o.width = img.naturalWidth || img.width; o.height = img.naturalHeight || img.height;
    const g = o.getContext("2d");
    if ("filter" in g) { g.filter = "grayscale(1) contrast(1.1) brightness(1.12)"; g.drawImage(img, 0, 0); return o; }
    g.drawImage(img, 0, 0);
    try { const d = g.getImageData(0, 0, o.width, o.height), p = d.data;
      for (let i = 0; i < p.length; i += 4) { const y = p[i] * .3 + p[i + 1] * .59 + p[i + 2] * .11; p[i] = p[i + 1] = p[i + 2] = y; }
      g.putImageData(d, 0, 0); } catch (e) {}
    return o;
  }
  const PH = [["#c9834f", "#3b2a4d"], ["#5d8fa8", "#1d2b33"], ["#d9b26a", "#5a3a22"], ["#7e9b6a", "#22301f"], ["#b0606a", "#2a1a2e"], ["#6f7fb8", "#1a1c33"]];
  const frames = (STILLS.length ? STILLS : PH.map((c, i) => ({ ph: c, caption: "Placeholder still " + (i + 1) + " — add your own images in STILLS." })))
    .map((s, i) => {
      const f = { caption: s.caption || "", story: s.story || "", color: null, grey: null };
      if (s.ph) {
        const o = document.createElement("canvas"); o.width = 400; o.height = 300; const g = o.getContext("2d");
        const gr = g.createLinearGradient(0, 0, 0, 300); gr.addColorStop(0, s.ph[0]); gr.addColorStop(1, s.ph[1]);
        g.fillStyle = gr; g.fillRect(0, 0, 400, 300);
        g.fillStyle = "rgba(255,240,220,.35)"; g.beginPath(); g.arc(120 + i * 30, 110, 46, 0, 7); g.fill();
        const v = g.createRadialGradient(200, 150, 60, 200, 150, 260); v.addColorStop(0, "rgba(0,0,0,0)"); v.addColorStop(1, "rgba(0,0,0,.55)");
        g.fillStyle = v; g.fillRect(0, 0, 400, 300);
        g.fillStyle = "rgba(255,255,255,.8)"; g.font = "300 26px Jost, sans-serif"; g.textAlign = "center";
        g.fillText("STILL " + String(i + 1).padStart(2, "0"), 200, 220);
        f.color = o; f.grey = greyOf(o); f.src = o.toDataURL("image/jpeg", .85);
      } else {
        // load the still, then keep a small working copy (max 900px) so the animation stays smooth;
        // the full-size original is what opens in the lightbox
        const img = new Image();
        img.onload = () => {
          const max = 900, k = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
          const c = document.createElement("canvas");
          c.width = Math.round(img.naturalWidth * k); c.height = Math.round(img.naturalHeight * k);
          c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
          f.color = c; f.grey = greyOf(c);
        };
        img.onerror = () => console.warn("Couldn't load still:", s.src);
        img.src = s.src; f.src = s.src;
      }
      return f;
    });

  // ---- geometry ----
  // Turn a polyline into dense samples, rounding each corner with radius r so frames swing round smoothly.
  function sample(pts, r) {
    const out = []; let s = 0;
    const push = (x, y, ang, k) => { if (out.length) { const p = out[out.length - 1]; s += Math.hypot(x - p.x, y - p.y); } out.push({ x, y, ang, k, s }); };
    const line = (a, b, k) => { const len = Math.hypot(b[0] - a[0], b[1] - a[1]), ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
      for (let d = 0; d <= len; d += 1) push(a[0] + Math.cos(ang) * d, a[1] + Math.sin(ang) * d, ang, k); };
    let start = pts[0];
    for (let i = 1; i < pts.length; i++) {
      const b = pts[i];
      if (i === pts.length - 1) { line(start, b, 0); break; }
      const c = pts[i + 1];
      const a1 = Math.atan2(b[1] - start[1], b[0] - start[0]), a2 = Math.atan2(c[1] - b[1], c[0] - b[0]);
      let turn = a2 - a1; while (turn > Math.PI) turn -= 2 * Math.PI; while (turn < -Math.PI) turn += 2 * Math.PI;
      const trim = r * Math.tan(Math.abs(turn) / 2);
      const p1 = [b[0] - Math.cos(a1) * trim, b[1] - Math.sin(a1) * trim];
      line(start, p1, 0);
      const side = Math.sign(turn), cx = p1[0] + Math.cos(a1 + side * Math.PI / 2) * r, cy = p1[1] + Math.sin(a1 + side * Math.PI / 2) * r;
      const steps = Math.max(4, Math.ceil(Math.abs(turn) * r));
      for (let j = 1; j <= steps; j++) {
        const ang = a1 + turn * j / steps, rad = ang - side * Math.PI / 2;
        push(cx + Math.cos(rad) * r, cy + Math.sin(rad) * r, ang, side);
      }
      start = [b[0] + Math.cos(a2) * trim, b[1] + Math.sin(a2) * trim];
    }
    return out;
  }
  function at(R, s) {                       // position/direction at distance s (extends past the ends)
    const S = R.S, n = S.length;
    if (s <= 0) { const p = S[0]; return { x: p.x + Math.cos(p.ang) * s, y: p.y + Math.sin(p.ang) * s, ang: p.ang, k: 0 }; }
    if (s >= R.len) { const p = S[n - 1], d = s - R.len; return { x: p.x + Math.cos(p.ang) * d, y: p.y + Math.sin(p.ang) * d, ang: p.ang, k: 0 }; }
    let lo = 0, hi = n - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (S[m].s <= s) lo = m; else hi = m; }
    return S[lo];
  }

  function build() {
    const dpr = devicePixelRatio || 1, r = cv.getBoundingClientRect();
    W = r.width; cv.width = W * dpr; cv.height = W * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); DPR = dpr;
    L = W * 0.84; const c = W / 2, P = ([x, y]) => [c + x * L, c + y * L];
    outline = new Path2D(); pieces = [];
    for (const poly of SHAPES) {
      const pc = new Path2D();
      poly.forEach((q, i) => { const [x, y] = P(q); if (i) { outline.lineTo(x, y); pc.lineTo(x, y); } else { outline.moveTo(x, y); pc.moveTo(x, y); } });
      outline.closePath(); pc.closePath(); pieces.push(pc);
    }
    K = L / 447;                                       // scale the outline sizes with the logo
    rims = SHAPES.map(poly => {
      const Q = poly.map(P), segs = []; let total = 0;
      for (let i = 0; i < Q.length; i++) {
        const a = Q[i], b = Q[(i + 1) % Q.length], len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        segs.push({ a, b, len, start: total, ang: Math.atan2(b[1] - a[1], b[0] - a[0]) }); total += len;
      }
      const n = Math.round(total / (GAP * K));
      return { segs, total, n, step: total / n, offset: 0, holes: Array.from({ length: n }, () => ({ glow: 0, lx: 0, ly: 0 })) };
    });
    routes = ROUTES.map((rt, ri) => {
      const w = rt.w * L, S = sample(rt.pts.map(P), w / 2);
      const m = w * 0.13;                              // dark margin each side of the pictures
      const fh = w - 2 * m, fl = fh * 1.3, gap = fh * 0.1; // frame across / along / gap
      const cl = rt.clip && [P([rt.clip[0], rt.clip[1]]), P([rt.clip[2], rt.clip[3]])];
      return { ri, w, r: w / 2, S, cl, piece: rt.piece, len: S[S.length - 1].s, offset: 0, m, fh, fl, pitch: fl + gap,
               hole: { along: w * 0.05, across: w * 0.075, pitch: w * 0.14 } };
    });
  }

  function frame(t) {
    if (!alive) return;                       // stop when you leave the home page
    const dt = Math.min(0.05, (t - last) / 1000 || 0); last = t;
    speed += ((over ? HOVER_SPEED : SPEED) - speed) * 0.06;
    ctx.clearRect(0, 0, W, W); hits = [];
    ctx.save(); ctx.clip(outline, "nonzero");
    ctx.fillStyle = "#101113"; ctx.fill(outline);

    for (const R of routes) {
      R.offset -= speed * dt;
      ctx.save();
      ctx.clip(pieces[R.piece]);                  // keep this film inside its own half of the logo
      if (R.cl) { ctx.beginPath(); ctx.rect(R.cl[0][0], R.cl[0][1], R.cl[1][0] - R.cl[0][0], R.cl[1][1] - R.cl[0][1]); ctx.clip(); }
      const span = R.len + R.pitch * 2, n = Math.ceil(span / R.pitch), loop = n * R.pitch;
      // frames
      for (let i = 0; i < n; i++) {
        const s = ((((R.offset + i * R.pitch) % loop) + loop) % loop) - R.pitch;
        if (s < -R.fl || s > R.len + R.fl) continue;
        const p = at(R, s), f = frames[(i + R.ri * 2) % frames.length], key = R.ri + ":" + i;
        const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        const target = Math.max(0, Math.min(1, 1.25 - d / (R.fh * COLOR_REACH)));
        glow[key] = (glow[key] || 0) + (target - (glow[key] || 0)) * 0.1;
        hits.push({ x: p.x, y: p.y, f, r: R.fh * 0.8 });
        if (!f.color) continue;
        // the frame's shape is swept along the film's path, so it bends with the corner
        const half = R.fh / 2, a0 = s - R.fl / 2, a1 = s + R.fl / 2, steps = Math.ceil(R.fl / 2);
        const left = [], right = [];
        let bx0 = Infinity, by0 = Infinity, bx1 = -Infinity, by1 = -Infinity;
        for (let j = 0; j <= steps; j++) {
          const q = at(R, a0 + (a1 - a0) * j / steps), nx = Math.cos(q.ang + Math.PI / 2), ny = Math.sin(q.ang + Math.PI / 2);
          for (const side of [-1, 1]) {
            const o = (q.k && side === q.k) ? Math.min(half, R.r * 0.97) : half;  // inner side of a bend can't go past its centre
            const x = q.x + nx * o * side, y = q.y + ny * o * side;
            (side < 0 ? left : right).push([x, y]);
            bx0 = Math.min(bx0, x); by0 = Math.min(by0, y); bx1 = Math.max(bx1, x); by1 = Math.max(by1, y);
          }
        }
        ctx.beginPath(); left.forEach(([x, y], j) => j ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
        for (let j = right.length - 1; j >= 0; j--) ctx.lineTo(...right[j]); ctx.closePath();
        ctx.save(); ctx.clip();
        // keep the picture upright, cropped to cover the frame
        const img = f.color, iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
        const bw = bx1 - bx0, bh = by1 - by0, sc = Math.max(bw / iw, bh / ih);
        const dw = iw * sc, dh = ih * sc, dx = (bx0 + bx1) / 2 - dw / 2, dy = (by0 + by1) / 2 - dh / 2;
        ctx.globalAlpha = IDLE_ALPHA * (1 - glow[key]) + 0.15 * glow[key]; ctx.drawImage(f.grey, dx, dy, dw, dh);
        if (glow[key] > 0.01) { ctx.globalAlpha = glow[key]; ctx.drawImage(img, dx, dy, dw, dh); }
        ctx.restore();
      }
      ctx.restore();
    }
    ctx.restore();
    drawRims(dt);
    cv.style.cursor = nearest() ? "pointer" : "default";
    requestAnimationFrame(frame);
  }

  // ---- the film-strip outline: one row of perforations running round the logo's edge ----
  function rimAt(p, s) {
    s = ((s % p.total) + p.total) % p.total;
    let seg = p.segs[0];
    for (const g of p.segs) if (s >= g.start) seg = g; else break;
    const t = (s - seg.start) / seg.len;
    return [seg.a[0] + (seg.b[0] - seg.a[0]) * t, seg.a[1] + (seg.b[1] - seg.a[1]) * t, seg.ang];
  }
  function drawRims(dt) {
    oSpeed += ((over ? OUTLINE_HOVER_SPEED : OUTLINE_SPEED) - oSpeed) * 0.05;
    if (BAND) {                                   // faint strip with hairline edges
      ctx.globalAlpha = 1; ctx.lineJoin = "round";
      for (const p of rims) {
        ctx.beginPath(); p.segs.forEach((g, i) => i ? ctx.lineTo(...g.a) : ctx.moveTo(...g.a)); ctx.closePath();
        ctx.strokeStyle = "rgba(233,230,223,.16)"; ctx.lineWidth = BAND * K; ctx.stroke();
        ctx.strokeStyle = "#08090a"; ctx.lineWidth = BAND * K - 1.4; ctx.stroke();
        ctx.strokeStyle = "rgba(233,230,223,.035)"; ctx.stroke();
      }
    }
    for (const p of rims) {
      p.offset += oSpeed * dt;
      p.holes.forEach((hd, i) => {
        const [hx, hy, ang] = rimAt(p, p.offset + i * p.step);
        const dx = hx - mouse.x, dy = hy - mouse.y, dist = Math.hypot(dx, dy);
        const f = Math.max(0, 1 - dist / REACH), e = f * f;
        hd.lx += ((dist ? dx / dist : 0) * e * PUSH - hd.lx) * 0.12;
        hd.ly += ((dist ? dy / dist : 0) * e * PUSH - hd.ly) * 0.12;
        hd.glow += (f - hd.glow) * 0.1;
        ctx.globalAlpha = Math.min(1, 0.9 + hd.glow * 0.5);
        ctx.fillStyle = hd.glow > 0.05 ? "#fff" : "#A30101";
        const grow = 1 + hd.glow * 0.35, w = HOLE_W * K * grow, hh = HOLE_H * K * grow;
        ctx.save(); ctx.translate(hx + hd.lx, hy + hd.ly); ctx.rotate(ang);
        ctx.beginPath(); ctx.roundRect(-w / 2, -hh / 2, w, hh, ROUND * K); ctx.fill();
        ctx.restore();
      });
    }
  }

  function nearest() {
    let best = null, bd = Infinity;
    for (const h of hits) { const d = Math.hypot(h.x - mouse.x, h.y - mouse.y); if (d < h.r && d < bd) { bd = d; best = h; } }
    return best && ctx.isPointInPath(outline, mouse.x * (devicePixelRatio || 1), mouse.y * (devicePixelRatio || 1)) ? best : null;
  }

  // click a frame → open that still large, in colour, with its story
  const lb = app.querySelector("#lightbox");
  cv.addEventListener("click", () => {
    const h = nearest(); if (!h) return;
    lb.querySelector("img").src = h.f.src; lb.querySelector("p").textContent = h.f.caption;
    const sl = lb.querySelector(".story-link"); sl.hidden = !h.f.story; if (h.f.story) sl.href = link(h.f.story);
    lb.classList.add("show");
  });
  lb.addEventListener("click", () => lb.classList.remove("show"));

  const move = e => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; over = true; };
  cv.addEventListener("pointermove", move);
  cv.addEventListener("pointerdown", move);
  cv.addEventListener("pointerleave", () => { mouse = { x: -1e4, y: -1e4 }; over = false; });

  addEventListener("resize", build);
  build(); requestAnimationFrame(frame);
  return () => { alive = false; removeEventListener("resize", build); };
}

// =====================================================================
//  SHARED · links, menu, page switching
// =====================================================================
// In this pen every page is "#/path". On the real site it's a folder: "/path/".
const link = path => "#/" + path;
const $ = (sel, root = document) => root.querySelector(sel);

// ---- MENU (assets/site.js on the real site) ----
(() => {
  const MENU = [
    { label: "WHAT", projects: PROJECTS, more: ["WHAT WE DO", "what"] },
    { label: "WHY",   text: "Flattery will get you everywhere. Attention and the right questions reveal people's authentic beauty.", more: ["HOW WE CONNECT", "why"] },
    { label: "WHERE", text: `Everywhere! Air · Sea · Studio · Land.<br><a class="more" href="${link("where")}">SEE IT &nbsp;→</a>` },
    { label: "WHO",   people: TEAM, more: ["WHO WE ARE", "who"] },
  ];
  const LINKS = [
    { label: "STORIES", href: link("stories") },
    { label: "MOOD",    href: link("mood") },
    { label: "CONTACT", href: link("contact") },
  ];

  const item = m => `
    <div class="item" data-label="${m.label}">
      <button class="head" aria-expanded="false">${m.label} <span class="chev"></span></button>
      <div class="body"><div><div class="inner">${
        m.people
          ? `<div class="people">${m.people.map(p => `<a href="${link("who/" + p.id)}" data-id="${p.id}">
               <i style="background-image:url('${p.img}');background-position:${p.pos || "center"}"></i>
               <b>${p.name.replace(" ", "<br>")}</b></a>`).join("")}</div>`
        : m.projects
          ? `<div class="stills">${m.projects.map(p => p.chapters
              ? `<a href="${link("what/" + p.id)}" style="background-image:url('${p.cover}')"><b>${p.num} · ${p.title}</b></a>`
              : `<span><b>${p.num} · ${p.title}</b></span>`).join("")}</div>`
          : m.text
      }${m.more ? `<a class="more" href="${link(m.more[1])}">${m.more[0]} &nbsp;→</a>` : ""}</div></div></div>
    </div>`;

  document.body.insertAdjacentHTML("afterbegin", `
    <a class="wordmark" href="${link("")}" aria-label="Flattery Films — home">FLATTERY FILMS</a>
    <button class="burger" id="openBtn" aria-label="Open menu">MENU <i></i></button>
    <div class="scrim" id="scrim"></div>
    <nav class="nav" aria-label="Main">
      <a class="nav-home" href="${link("")}">HOME</a>
      <button class="close" id="closeBtn" aria-label="Close menu"></button>
      <div class="list">${MENU.map(item).join("")}</div>
      <ul class="plain">${LINKS.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}</ul>
    </nav>`);

  const body = document.body;
  const open = () => body.classList.add("open"), close = () => body.classList.remove("open");
  const openAt = label => {                                   // open the menu with one section unfolded
    open();
    const it = [...document.querySelectorAll(".item")].find(i => i.dataset.label === label);
    if (it && !it.classList.contains("is-open")) it.querySelector(".head").click();
  };
  $("#openBtn").onclick = open; $("#closeBtn").onclick = close; $("#scrim").onclick = close;
  addEventListener("keydown", e => e.key === "Escape" && close());
  document.querySelectorAll(".item .head").forEach(btn => btn.onclick = () => {
    const it = btn.parentElement, was = it.classList.contains("is-open");
    document.querySelectorAll(".item").forEach(i => { i.classList.remove("is-open"); i.querySelector(".head").setAttribute("aria-expanded", "false"); });
    if (!was) { it.classList.add("is-open"); btn.setAttribute("aria-expanded", "true"); }
  });
  $(".nav").addEventListener("click", e => { if (e.target.closest("a")) close(); });   // any link closes the menu
  window.FFMenu = { open, close, openAt };
})();

// =====================================================================
//  SCROLL STORY — one engine for projects and WHO
//  (on the real site: the script in what/thin-space/index.html and who/index.html)
// =====================================================================
function mountStory(app, { list, total, base, crumb, onShow, endLinks, iris }, startId) {
  const stroke = '<svg viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M1 6 C 20 2, 45 9, 70 4 S 95 5, 99 3"/></svg>';
  app.innerHTML = `
    <div class="bgs"></div><div class="shade"></div><div class="pins"></div>
    <div class="crumb">${crumb}</div>
    <div class="copy"></div>
    <div class="count"><span class="num">01</span><i><b class="bar"></b></i><span>${String(total).padStart(2, "0")}</span></div>
    <button class="next"><span class="nextLabel"></span><span class="pill"></span></button>
    <main class="steps"></main>`;
  const bgs = $(".bgs", app), copy = $(".copy", app), steps = $(".steps", app), pins = $(".pins", app);
  app.classList.toggle("iris", !!iris);      // WHO: each person opens out of the dark in a soft circle (like DARK)

  list.forEach((c, i) => {
    bgs.insertAdjacentHTML("beforeend", c.clip
      ? `<video class="bg" muted loop playsinline preload="none" data-src="${c.clip}" ${c.img ? `poster="${c.img}"` : ""}></video>`
      : `<div class="bg" style="${c.img ? `background-image:url('${c.img}');background-position:${c.pos || "center"}` : ""}"></div>`);
    const text = (c.text || "").replace(/<mark>(.*?)<\/mark>/g, `<span class="mark">$1${stroke}</span>`);
    const listen = "audio" in c ? (c.audio ? `<button class="listen" data-audio="${c.audio}">LISTEN</button>` : `<span class="listen soon">LISTEN · SOON</span>`) : "";
    const body = (c.lede ? `<p class="lede">${c.lede}</p>` : "")
      + (c.paras ? c.paras.map(t => `<p>${t}</p>`).join("") : (text ? `<p>${text}</p>` : ""))
      + (c.list ? `<ul class="svc">${c.list.map(t => `<li>${t}</li>`).join("")}</ul>` : "");
    copy.insertAdjacentHTML("beforeend", `<article class="chap${c.intro ? " intro" : ""}">
      <div class="kicker">${c.kicker}</div><h2>${c.title}</h2>${body}
      ${c.links ? `<div class="end-links">${c.links.map(l => `<a href="${l.href}">${l.label}</a>`).join("")}</div>` : ""}
      ${c.credits ? `<div class="credits">CREDITS &nbsp;<b>${c.credits}</b></div>` : ""}
      ${listen}
      ${c.end ? `<div class="end-links">${endLinks}</div>` : ""}
    </article>`);
    if (c.pin) pins.insertAdjacentHTML("beforeend", `<div class="pin" data-i="${i}" style="left:${c.pin[0]}%;top:${c.pin[1]}%">
      <b>${c.pinLabel || ""}</b><i></i><em></em><span>${c.pinNote || ""}</span></div>`);
    steps.insertAdjacentHTML("beforeend", `<section class="step" data-i="${i}" aria-label="${c.title}"></section>`);
  });
  const B = [...bgs.children], C = [...copy.children], S = [...steps.children];

  let cur = -1, audio = null;
  function show(i) {
    if (i === cur) return;
    B.forEach((b, j) => {
      b.classList.toggle("on", j === i);
      if (b.tagName === "VIDEO") { if (j === i) { if (!b.src) b.src = b.dataset.src; b.play().catch(() => {}); } else b.pause(); }
    });
    pins.querySelectorAll(".pin").forEach(p => p.classList.toggle("on", +p.dataset.i === i));
    C.forEach((c, j) => { c.classList.toggle("on", j === i); c.classList.toggle("gone", j < i); });
    const n = Math.min(i + 1, total);
    $(".num", app).textContent = String(n).padStart(2, "0");
    $(".bar", app).style.height = (n / total * 100) + "%";
    const nx = list[i + 1];
    $(".nextLabel", app).textContent = nx ? nx.title : "";
    document.body.classList.toggle("last", !nx);
    history.replaceState(null, "", link(base + "/" + list[i].id));   // the address follows the story
    stopAudio();
    onShow && onShow(list[i]);
    cur = i;
  }
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && show(+e.target.dataset.i)), { threshold: 0.55 });
  S.forEach(s => io.observe(s));

  const idx = id => list.findIndex(c => c.id === id);
  function jump(id) {
    const i = idx(id); if (i < 0 || i === cur) return;
    if (Math.abs(i - cur) === 1) return S[i].scrollIntoView({ behavior: "smooth" });
    cut(() => { S[i].scrollIntoView({ behavior: "auto" }); show(i); });
  }
  const start = Math.max(0, idx(startId));
  document.documentElement.classList.add("snap");
  S[start].scrollIntoView({ behavior: "auto" }); show(start);

  // LISTEN — Will telling the story behind the still
  function stopAudio() { if (audio) { audio.pause(); audio = null; } app.querySelectorAll(".listen.playing").forEach(b => b.classList.remove("playing")); }
  app.addEventListener("click", e => {
    const b = e.target.closest("button.listen"); if (!b) return;
    if (b.classList.contains("playing")) return stopAudio();
    stopAudio(); audio = new Audio(b.dataset.audio); audio.play(); b.classList.add("playing");
    audio.onended = stopAudio;
  });

  $(".next", app).onclick = () => S[cur + 1] && S[cur + 1].scrollIntoView({ behavior: "smooth" });
  const top = $("[data-top]", app); if (top) top.onclick = () => jump(list[0].id);
  const keys = e => {
    if (document.body.classList.contains("open")) return;
    if (["ArrowDown", "PageDown", " "].includes(e.key) && S[cur + 1]) { e.preventDefault(); S[cur + 1].scrollIntoView({ behavior: "smooth" }); }
    if (["ArrowUp", "PageUp"].includes(e.key) && S[cur - 1]) { e.preventDefault(); S[cur - 1].scrollIntoView({ behavior: "smooth" }); }
  };
  addEventListener("keydown", keys);

  return { jump, cleanup() { io.disconnect(); stopAudio(); B.forEach(b => b.tagName === "VIDEO" && b.pause()); app.classList.remove("iris"); removeEventListener("keydown", keys);
    document.documentElement.classList.remove("snap"); document.body.classList.remove("last"); } };
}

// ---- PAGE · PROJECT (what/thin-space/) ----
function mountProject(app, p, chapterId) {
  return mountStory(app, {
    list: p.chapters, total: p.chapters.length, base: "what/" + p.id,
    crumb: `<a href="${link("what")}">WHAT</a> &nbsp;/&nbsp; ${p.num} · ${p.title}`,
    endLinks: `<button data-top>BACK TO THE START</button><a href="${link("stories")}">ALL STORIES</a><a href="${link("")}">HOME</a>`,
  }, chapterId);
}

// ---- PAGE · WHO (who/) ----
function mountWho(app, personId) {
  const END = { id: "collective", end: true, kicker: "FLATTERY FILMS", title: "THE COLLECTIVE",
    text: "Directors, cinematographers and producers — more than 20 Emmy nominations between us, and one shared belief: attention reveals people's authentic beauty." };
  return mountStory(app, {
    list: [WHO_INTRO, ...TEAM.map((t, i) => ({ ...t, kicker: t.role, title: t.name, text: t.bio,
             pinLabel: t.name.split(" ")[0], pinNote: String(i + 1).padStart(2, "0") })), END],
    iris: true,
    total: TEAM.length + 1, base: "who",
    crumb: `<a href="${link("who/who-we-are")}">WHO</a> &nbsp;/&nbsp; THE COLLECTIVE`,
    endLinks: `<button data-top>BACK TO THE START</button><button data-who>PICK SOMEONE</button>`,
    onShow: c => document.querySelectorAll(".people a").forEach(a => a.classList.toggle("here", a.dataset.id === c.id)),
  }, personId);
}

// ---- PAGE · WHAT (what/) — what we do, services, then the projects ----
function mountWhat(app, chapterId) {
  const projects = PROJECTS.map((p, i) => p.chapters
    ? { id: "project-" + p.id, img: p.cover, kicker: "PROJECT " + p.num + " · " + p.year, title: p.title,
        text: p.chapters[0].text.replace(/<\/?mark>/g, ""), links: [{ label: "OPEN THE STORY &nbsp;→", href: link("what/" + p.id) }] }
    : { id: "project-" + p.id, kicker: "PROJECT " + p.num, title: p.title, text: "Coming soon." });
  projects[projects.length - 1].links = [...(projects[projects.length - 1].links || []), NEXT("NEXT · WHY", "why")];
  const list = [...WHAT_INTRO, ...projects];
  return mountStory(app, { list, total: list.length, base: "what", crumb: `WHAT &nbsp;/&nbsp; WHAT WE DO` }, chapterId);
}

// ---- PAGE · WHY (why/) ----
function mountWhy(app) {
  return mountStory(app, { list: WHY_INTRO, total: WHY_INTRO.length, base: "why", crumb: `WHY &nbsp;/&nbsp; HOW WE CONNECT` }, null);
}

// ---- PAGE · WHERE (where/) — the write-up, then one full screen per world ----
function mountWhereStory(app, chapterId) {
  const worlds = WHERE.map((w, i) => ({ id: w.word.toLowerCase(), kicker: "WHERE · " + String(i + 1).padStart(2, "0"), title: w.word, text: w.line,
    img: WHERE_STILLS[w.word], clip: w.word === "STUDIO" ? null : w.clip }));
  worlds[worlds.length - 1].links = [NEXT("NEXT · WHO WE ARE", "who")];
  const list = [WHERE_INTRO, ...worlds];
  return mountStory(app, { list, total: list.length, base: "where", crumb: `WHERE &nbsp;/&nbsp; EVERYWHERE` }, chapterId);
}

// =====================================================================
//  SINGLE-SCREEN PAGES
// =====================================================================
function screen(app, cls, inner, bg = "") {
  app.innerHTML = `<section class="screen ${cls}">${bg}<div class="shade"></div><div class="screen-copy">${inner}</div></section>`;
  return $(".screen", app);
}
const stopVideo = v => () => { v.pause(); v.removeAttribute("src"); v.load(); };

// ---- PAGE · WHERE (where/) — a clip behind each word ----
function mountWhere(app) {
  const s = screen(app, "where", `
    <div class="kicker">WHERE</div><h2>EVERYWHERE!</h2>
    <ul class="words">${WHERE.map((w, i) => `<li><button data-i="${i}">${w.word}</button></li>`).join("")}</ul>
    <p class="line"></p>`,
    `<video class="film" muted loop playsinline autoplay></video>`);
  const v = $("video", s), btns = [...s.querySelectorAll(".words button")];
  let cur = -1, touched = false;
  const pick = i => {
    if (i === cur) return; cur = i;
    btns.forEach((b, j) => b.classList.toggle("on", j === i));
    $(".line", s).textContent = WHERE[i].line;
    v.classList.add("dip");
    setTimeout(() => { v.src = WHERE[i].clip; v.play().catch(() => {}); v.classList.remove("dip"); }, 350);
  };
  btns.forEach((b, i) => {
    const go = () => { touched = true; pick(i); };
    b.addEventListener("pointerenter", go); b.addEventListener("focus", go); b.addEventListener("click", go);
  });
  pick(0);
  const timer = setInterval(() => !touched && pick((cur + 1) % WHERE.length), 9000);   // drifts through all four until someone hovers
  const stop = stopVideo(v);
  return { cleanup() { clearInterval(timer); stop(); } };
}

// ---- PAGE · MOOD (mood/) — the reel ----
function mountMood(app) {
  const s = screen(app, "mood", `
    <div class="kicker">MOOD · REEL</div><h2>WE ARE<br>SUCH A MOOD</h2>
    <button class="btn-line sound">PLAY WITH SOUND</button>`,
    `<video class="film" src="${REEL}" muted loop playsinline autoplay></video>`);
  const v = $("video", s), b = $(".sound", s);
  b.onclick = () => {
    if (v.muted) { v.muted = false; v.currentTime = 0; v.play(); b.textContent = "SOUND OFF"; s.classList.add("watching"); }
    else { v.muted = true; b.textContent = "PLAY WITH SOUND"; s.classList.remove("watching"); }
  };
  return { cleanup: stopVideo(v) };
}

// ---- PAGE · CONTACT (contact/) ----
function mountContact(app) {
  screen(app, "contact", `
    <div class="kicker">CONTACT</div><h2>FLATTERY WILL GET<br>YOU EVERYWHERE</h2>
    <a class="email" href="mailto:${EMAIL}">${EMAIL.toUpperCase()}</a>
    <ul class="socials">${SOCIAL.map(s => `<li><a href="${s.href}" target="_blank" rel="noopener">${s.label}</a></li>`).join("")}</ul>`,
    `<div class="still" style="background-image:url('${PEN}Sean+Water+Shot.jpeg?format=auto')"></div>`);
}

// ---- PAGE · STORIES (stories/) — an index; every row opens the chapter ----
function mountStories(app) {
  const rows = PROJECTS.flatMap(p => p.chapters
    ? p.chapters.filter(c => !c.end).map(c => `<li><a href="${link("what/" + p.id + "/" + c.id)}" data-img="${c.img}">
        <b>${p.num}</b>${p.title} &nbsp;—&nbsp; ${c.title}</a></li>`)
    : [`<li><span><b>${p.num}</b>${p.title} &nbsp;—&nbsp; SOON</span></li>`]);
  const s = screen(app, "stories", `
    <div class="kicker">STORIES</div><h2>EVERY IMAGE<br>HAS A STORY</h2>
    <ul class="rows">${rows.join("")}</ul>`,
    `<div class="still"></div>`);
  const still = $(".still", s);
  s.querySelectorAll("a[data-img]").forEach(a => a.addEventListener("pointerenter", () => {
    still.style.backgroundImage = `url('${a.dataset.img}')`; still.classList.add("on");
  }));
  $(".rows", s).addEventListener("pointerleave", () => still.classList.remove("on"));
}

// ---- 404 ----
function mountLost(app) {
  screen(app, "lost", `<div class="kicker">404</div><h2>LOST?</h2><a class="btn-line" href="${link("")}">TAKE ME HOME</a>`);
}

// =====================================================================
//  PAGE SWITCHING (the pen's stand-in for real page loads)
// =====================================================================
function cut(fn) {                       // fade to black, change, fade back in
  document.body.classList.add("cutting");
  setTimeout(() => { fn(); setTimeout(() => document.body.classList.remove("cutting"), 120); }, 380);
}
const app = document.getElementById("app");
let page = null;
function route(first) {
  const [a, b, c] = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  let key = a || "home", sub = null, mount;
  if (!a) mount = mountHome;
  else if (a === "what" && b && PROJECTS.find(x => x.id === b && x.chapters)) {
    const p = PROJECTS.find(x => x.id === b && x.chapters);
    key = "what/" + b; sub = c; mount = el => mountProject(el, p, c);
  }
  else if (a === "what")    { sub = b; mount = el => mountWhat(el, b); }
  else if (a === "why")     mount = mountWhy;
  else if (a === "who")     { sub = b; mount = el => mountWho(el, b); }
  else if (a === "where")   { sub = b; mount = el => mountWhereStory(el, b); }
  else if (a === "mood")    mount = mountMood;
  else if (a === "contact") mount = mountContact;
  else if (a === "stories") mount = mountStories;
  if (!mount) { key = "lost"; mount = mountLost; }

  if (page && page.key === key) { if (page.jump && sub) page.jump(sub); return; }   // same page: just move within it
  const go = () => {
    if (page && page.cleanup) page.cleanup();
    scrollTo(0, 0);
    const r = mount(app) || {};
    page = { key, cleanup: typeof r === "function" ? r : r.cleanup, jump: r.jump };
  };
  first ? go() : cut(go);
}
addEventListener("hashchange", () => route(false));
document.addEventListener("click", e => {          // crumbs + end-card buttons that open the menu
  if (e.target.closest("[data-who]")) window.FFMenu.openAt("WHO");
  if (e.target.closest("[data-what]")) window.FFMenu.openAt("WHAT");
});
route(true);

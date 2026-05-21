const deck = window.PRESENTATION_DECK;
const app = document.querySelector("#deckRoot");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function coverIcon(name) {
  const icons = {
    "上傳": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12"/><path d="m7 8 5-5 5 5"/><path d="M5 17v3h14v-3"/></svg>',
    "估價": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18H6z"/><path d="M9 7h6"/><path d="M9 11h2"/><path d="M13 11h2"/><path d="M9 15h2"/><path d="M13 15h2"/></svg>',
    "排程": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4"/><path d="M17 3v4"/><path d="M4 8h16"/><path d="M5 5h14v16H5z"/><path d="M8 13h3"/><path d="M13 13h3"/><path d="M8 17h3"/></svg>',
    "取件": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16l-2 12H6z"/><path d="M8 8a4 4 0 0 1 8 0"/><path d="M9 14h6"/></svg>',
    "追蹤": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/><path d="M15.5 16.5h3"/></svg>'
  };
  return icons[name] || "";
}

function renderCoverVisual() {
  return `
    <div class="cover-visual" aria-label="服務流程藍圖">
      <div class="loop-line"></div>
      <svg class="cover-flow-line" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="flowArrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="4.6" markerHeight="4.6" markerUnits="userSpaceOnUse" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="context-stroke"></path>
          </marker>
        </defs>
        <path class="flow-segment flow-1" d="M 56.1 9.3 C 68 6, 80 17, 84.1 31"></path>
        <path class="flow-segment flow-2" d="M 87.7 34.6 C 97 51, 92 70, 77.3 80.7"></path>
        <path class="flow-segment flow-3" d="M 70 80.7 C 55 91, 42 89, 26.8 77.4"></path>
        <path class="flow-segment flow-4" d="M 19.5 77.4 C 7 63, 5 47, 8.6 31"></path>
      </svg>
      ${deck.coverNodes
        .map(
          (node, index) => `
          <div class="stage-pill p${index + 1}">
            <span class="node-icon">${coverIcon(node)}</span>
            <strong>${escapeHtml(node)}</strong>
          </div>`
        )
        .join("")}
      <div class="system-core">
        <img src="./asset/logo.png" alt="${escapeHtml(deck.coreTitle)}" />
      </div>
    </div>`;
}

function renderTable(columns, rows, className = "", highlightColumn = null) {
  return `
    <div class="matrix ${className}" style="--cols: ${columns.length}">
      <div class="matrix-row head">${columns.map((column) => `<span>${escapeHtml(column)}</span>`).join("")}</div>
      ${rows
        .map((row) => `<div class="matrix-row">${row.map((cell, index) => `<span class="${highlightColumn === index ? "highlight-cell" : ""}">${escapeHtml(cell)}</span>`).join("")}</div>`)
        .join("")}
    </div>`;
}

const renderers = {
  cover(slide) {
    return `
      <section class="slide title-slide active" data-title="封面">
        <div class="title-copy">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h1>${escapeHtml(slide.title)}</h1>
          <p class="lede">${escapeHtml(slide.body)}</p>
          ${deck.tags.length ? `<div class="tag-row">${deck.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>` : ""}
          <div class="cover-meta">${deck.coverMeta.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
        </div>
        ${renderCoverVisual()}
      </section>`;
  },

  narrative(slide) {
    return `
      <section class="slide narrative-slide" data-title="背景動機">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="two-col">
          <article class="claim-panel"><p>${escapeHtml(slide.body)}</p></article>
          <div class="evidence-stack">
            ${slide.points.map(([title, body]) => `<article><span class="label">${escapeHtml(title)}</span><strong>${escapeHtml(body)}</strong></article>`).join("")}
          </div>
        </div>
      </section>`;
  },

  background(slide) {
    return `
      <section class="slide background-slide" data-title="背景動機">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="background-chain">
          ${slide.stages.map(([no, title, body]) => `<article><span>${escapeHtml(no)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("")}
        </div>
        <div class="mini-flow">
          ${slide.flow.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
        <div class="talking-point"><strong>報告重點</strong><p>${escapeHtml(slide.talkingPoint)}</p></div>
      </section>`;
  },

  storyCases(slide) {
    return `
      <section class="slide story-cases-slide" data-title="使用者案例">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
          <p class="slide-intro">${escapeHtml(slide.intro)}</p>
        </header>
        <div class="case-grid">
          ${slide.cases
            .map(
              (item) => `
              <article class="case-card">
                <div class="case-copy">
                  <span class="label">${escapeHtml(item.label)}</span>
                  <h3>${escapeHtml(item.persona)}</h3>
                  <p>${escapeHtml(item.problem)}</p>
                  <div class="case-compare">
                    <strong>原本選項</strong><span>${escapeHtml(item.market)}</span>
                    <strong>3D 列印</strong><span>${escapeHtml(item.print)}</span>
                  </div>
                </div>
                <div class="case-images">
                  ${item.images.map((image) => `<figure><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.label)}" /><figcaption>${escapeHtml(image.label)}</figcaption></figure>`).join("")}
                </div>
              </article>`
            )
            .join("")}
        </div>
        <div class="case-takeaway"><strong>帶入本專題</strong><p>${escapeHtml(slide.takeaway)}</p></div>
      </section>`;
  },

  storyCase(slide) {
    return `
      <section class="slide story-case-slide" data-title="${escapeHtml(slide.eyebrow)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="single-case-layout">
          <article class="single-case-copy">
            <span class="label">${escapeHtml(slide.persona)}</span>
            <h3>使用者遇到的問題</h3>
            <p>${escapeHtml(slide.problem)}</p>
            <div class="case-compare large">
              <strong>原本選項</strong><span>${escapeHtml(slide.market)}</span>
              <strong>3D 列印</strong><span>${escapeHtml(slide.print)}</span>
            </div>
            <div class="single-case-takeaway"><strong>帶入本專題</strong><p>${escapeHtml(slide.takeaway)}</p></div>
          </article>
          <div class="single-case-images">
            ${slide.images.map((image) => `<figure><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.label)}" /><figcaption>${escapeHtml(image.label)}</figcaption></figure>`).join("")}
          </div>
        </div>
      </section>`;
  },

  table(slide) {
    return `
      <section class="slide table-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        ${slide.note ? `<div class="note-panel"><p>${escapeHtml(slide.note)}</p></div>` : ""}
        ${renderTable(slide.columns, slide.rows, "", slide.highlightColumn)}
      </section>`;
  },

  goals(slide) {
    return `
      <section class="slide goals-slide" data-title="系統目標">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="goal-grid">
          ${slide.goals.map(([title, body], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("")}
        </div>
        <div class="positioning-strip"><strong>一句話定位</strong><p>${escapeHtml(slide.positioning)}</p></div>
      </section>`;
  },

  lifecycle(slide) {
    return `
      <section class="slide lifecycle-slide" data-title="SDLC 範圍">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="sdlc-flow">
          ${slide.steps.map((step, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(step)}</strong></article>`).join("")}
        </div>
        <div class="note-panel focus-note"><p>${escapeHtml(slide.focus)}</p></div>
        ${renderTable(slide.columns, slide.rows, "", slide.highlightColumn)}
      </section>`;
  },

  tableWithNote(slide) {
    return `
      <section class="slide table-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="note-panel"><p>${escapeHtml(slide.note)}</p></div>
        ${renderTable(slide.columns, slide.rows)}
      </section>`;
  },

  flow(slide) {
    return `
      <section class="slide flow-slide" data-title="使用者流程">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="scenario-layout">
          <article class="scenario-panel"><strong>使用者情境</strong><p>${escapeHtml(slide.story)}</p></article>
          <div class="vertical-flow">
            ${slide.steps.map((step, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(step)}</strong></article>`).join("")}
          </div>
        </div>
      </section>`;
  },

  requirements(slide) {
    return `
      <section class="slide requirements-slide" data-title="需求摘要">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="note-panel"><p>${escapeHtml(slide.intro)}</p></div>
        ${renderTable(slide.columns, slide.rows)}
      </section>`;
  },

  architecture(slide) {
    return `
      <section class="slide architecture-slide" data-title="架構資料設計">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="architecture-layout stacked-architecture">
          <div class="architecture-flow">
            ${slide.layers.map(([title, body]) => `<article><strong>${escapeHtml(title)}</strong><span>${escapeHtml(body)}</span></article>`).join("")}
          </div>
          ${renderTable(slide.columns, slide.rows, "compact-matrix")}
        </div>
      </section>`;
  },

  prototype(slide) {
    return `
      <section class="slide prototype-slide" data-title="介面原型">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="note-panel"><p>${escapeHtml(slide.intro)}</p></div>
        <div class="screen-grid">
          ${slide.screens.map((screen, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(screen)}</strong><i></i></article>`).join("")}
        </div>
        <div class="prototype-priority"><p>${escapeHtml(slide.priority)}</p></div>
      </section>`;
  },

  closing(slide) {
    return `
      <section class="slide closing-slide" data-title="結論">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="closing-layout">
          <div class="conclusion-list">
            ${slide.conclusionPoints.map(([title, body], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("")}
          </div>
          <div class="future-panel">
            <strong>未來擴充</strong>
            ${slide.future.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
        </div>
      </section>`;
  }
};

function renderDeck() {
  app.innerHTML = `
    <div class="progress" aria-hidden="true"><span id="progressBar"></span></div>
    <div class="deck-corner deck-corner-top" aria-label="課程與組別">${deck.cornerMeta.topLeft.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
    <div class="deck-corner deck-corner-bottom" aria-label="報告日期">${escapeHtml(deck.cornerMeta.bottomRight)}</div>
    <div class="deck-page-number" id="pageNumber" aria-label="目前頁碼">1 / ${deck.slides.length}</div>
    ${deck.slides.map((slide) => renderers[slide.type](slide)).join("")}
    <div class="control-hover-zone" aria-hidden="true"></div>
    <nav class="controls" aria-label="投影片控制">
      <button id="prevBtn" type="button" aria-label="上一頁" title="上一頁">‹</button>
      <span id="slideCount">1 / ${deck.slides.length}</span>
      <button id="nextBtn" type="button" aria-label="下一頁" title="下一頁">›</button>
    </nav>`;
}

renderDeck();

const slides = Array.from(document.querySelectorAll(".slide"));
const progressBar = document.querySelector("#progressBar");
const slideCount = document.querySelector("#slideCount");
const pageNumber = document.querySelector("#pageNumber");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let current = 0;

function showSlide(index) {
  current = Math.max(0, Math.min(index, slides.length - 1));
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === current);
    slide.setAttribute("aria-hidden", String(slideIndex !== current));
  });
  progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
  slideCount.textContent = `${current + 1} / ${slides.length}`;
  pageNumber.textContent = `${current + 1} / ${slides.length}`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
  document.body.classList.toggle("cover-active", current === 0);
  document.title = `${slides[current].dataset.title}｜${deck.title}`;
}

window.showSlide = showSlide;

prevBtn.addEventListener("click", () => showSlide(current - 1));
nextBtn.addEventListener("click", () => showSlide(current + 1));

document.addEventListener("keydown", (event) => {
  if (["ArrowRight", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    showSlide(current + 1);
  }
  if (["ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    showSlide(current - 1);
  }
});

let touchStartX = 0;
document.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });
document.addEventListener("touchend", (event) => {
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) < 60) return;
  showSlide(current + (distance < 0 ? 1 : -1));
}, { passive: true });

document.addEventListener("pointermove", (event) => {
  const nearBottom = event.clientY > window.innerHeight - 112;
  const nearCenter = Math.abs(event.clientX - window.innerWidth / 2) < Math.min(230, window.innerWidth * 0.36);
  document.body.classList.toggle("controls-visible", nearBottom && nearCenter);
});

showSlide(0);

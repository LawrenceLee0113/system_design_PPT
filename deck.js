const deck = window.PRESENTATION_DECK;
const app = document.querySelector("#deckRoot");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderCoverVisual() {
  return `
    <div class="cover-visual" aria-label="服務流程藍圖">
      <div class="loop-line"></div>
      ${deck.coverNodes
        .map(
          (node, index) => `
          <div class="stage-pill p${index + 1}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${escapeHtml(node)}</strong>
          </div>`
        )
        .join("")}
      <div class="system-core">
        <span>${escapeHtml(deck.coreLabel)}</span>
        <strong>${escapeHtml(deck.coreTitle)}</strong>
      </div>
    </div>`;
}

function renderTable(columns, rows, className = "") {
  return `
    <div class="matrix ${className}" style="--cols: ${columns.length}">
      <div class="matrix-row head">${columns.map((column) => `<span>${escapeHtml(column)}</span>`).join("")}</div>
      ${rows
        .map((row) => `<div class="matrix-row">${row.map((cell) => `<span>${escapeHtml(cell)}</span>`).join("")}</div>`)
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
          <div class="tag-row">${deck.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
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

  table(slide) {
    return `
      <section class="slide table-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        ${renderTable(slide.columns, slide.rows)}
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
          ${slide.goals.map((goal, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><p>${escapeHtml(goal)}</p></article>`).join("")}
        </div>
        <div class="positioning-strip"><strong>一句話定位</strong><p>${escapeHtml(slide.positioning)}</p></div>
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
        <div class="scenario-panel"><p>${escapeHtml(slide.story)}</p></div>
        <div class="flow-grid">
          ${slide.steps.map((step, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(step)}</strong></article>`).join("")}
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
        <div class="requirement-grid">
          ${slide.cards.map(([title, body]) => `<article><span class="label">${escapeHtml(title)}</span><p>${escapeHtml(body)}</p></article>`).join("")}
        </div>
      </section>`;
  },

  architecture(slide) {
    return `
      <section class="slide architecture-slide" data-title="架構資料設計">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="architecture-layout">
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
      </section>`;
  },

  closing(slide) {
    return `
      <section class="slide closing-slide" data-title="結論">
        <div class="closing-panel">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
          <p>${escapeHtml(slide.conclusion)}</p>
          <div class="future-grid">
            ${slide.future.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
          <div class="scope-strip"><strong>第一階段範圍</strong><p>${escapeHtml(slide.scope)}</p></div>
        </div>
      </section>`;
  }
};

function renderDeck() {
  app.innerHTML = `
    <div class="progress" aria-hidden="true"><span id="progressBar"></span></div>
    ${deck.slides.map((slide) => renderers[slide.type](slide)).join("")}
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
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
  document.title = `${slides[current].dataset.title}｜${deck.title}`;
}

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

showSlide(0);

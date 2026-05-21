const variantKey = document.body.dataset.variant || "strategy";
const variant = window.BLUEPRINT_LAYOUTS[variantKey];
const root = document.querySelector("#deckRoot");

function safe(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const renderers = {
  cover(slide) {
    return `
      <section class="slide cover active" data-title="封面">
        <div class="title-grid">
          <div>
            <p class="eyebrow">${safe(slide.eyebrow)}</p>
            <h1>${safe(slide.title)}</h1>
            <p class="lede">${safe(slide.body)}</p>
            <div class="tag-row">${variant.tags.map((tag) => `<span>${safe(tag)}</span>`).join("")}</div>
          </div>
          <div class="draft-board">
            <strong>${safe(variant.deckTitle)}</strong>
          </div>
        </div>
      </section>`;
  },
  context(slide) {
    return `
      <section class="slide" data-title="背景">
        <div class="wide">
          <p class="eyebrow">${safe(slide.eyebrow)}</p>
          <h2>${safe(slide.title)}</h2>
        </div>
        <div class="two-col">
          <article class="panel"><p>${safe(slide.body)}</p></article>
          <div class="cards">
            ${slide.proof.map(([title, body]) => `<article><span class="label">${safe(title)}</span><strong>${safe(body)}</strong></article>`).join("")}
          </div>
        </div>
      </section>`;
  },
  metrics(slide) {
    return `
      <section class="slide" data-title="指標">
        <div class="wide">
          <p class="eyebrow">${safe(slide.eyebrow)}</p>
          <h2>${safe(slide.title)}</h2>
        </div>
        <div class="metric-grid">
          ${slide.metrics.map(([value, label]) => `<article class="metric"><strong>${safe(value)}</strong><span>${safe(label)}</span></article>`).join("")}
        </div>
      </section>`;
  },
  roadmap(slide) {
    return `
      <section class="slide" data-title="路線圖">
        <div class="wide">
          <p class="eyebrow">${safe(slide.eyebrow)}</p>
          <h2>${safe(slide.title)}</h2>
        </div>
        <div class="roadmap">
          ${slide.phases.map(([phase, text]) => `<article><span>${safe(phase)}</span><h3>${safe(text)}</h3></article>`).join("")}
        </div>
      </section>`;
  },
  process(slide) {
    return `
      <section class="slide" data-title="流程">
        <div class="wide">
          <p class="eyebrow">${safe(slide.eyebrow)}</p>
          <h2>${safe(slide.title)}</h2>
        </div>
        <div class="process">
          ${slide.steps.map(([title, text], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3>${safe(title)}</h3><p>${safe(text)}</p></article>`).join("")}
        </div>
      </section>`;
  },
  matrix(slide) {
    return `
      <section class="slide" data-title="矩陣">
        <div class="wide">
          <p class="eyebrow">${safe(slide.eyebrow)}</p>
          <h2>${safe(slide.title)}</h2>
        </div>
        <div class="matrix">
          <div class="matrix-head"><span>${safe(slide.axes[0])}</span><span>${safe(slide.axes[1])}</span><span>建議動作</span></div>
          ${slide.items.map((item) => `<div class="matrix-row"><span>${safe(item[0])}</span><span>${safe(item[1])}</span><span>${safe(item[2])}</span></div>`).join("")}
        </div>
      </section>`;
  },
  risk(slide) {
    return `
      <section class="slide" data-title="風險">
        <div class="wide">
          <p class="eyebrow">${safe(slide.eyebrow)}</p>
          <h2>${safe(slide.title)}</h2>
        </div>
        <div class="risk-grid">
          ${slide.risks.map(([severity, probability, text]) => `<article class="risk-card" data-severity="${safe(severity)}"><span>${safe(severity)}影響 / ${safe(probability)}機率</span><h3>${safe(text)}</h3></article>`).join("")}
        </div>
      </section>`;
  },
  journey(slide) {
    return `
      <section class="slide" data-title="旅程">
        <div class="wide">
          <p class="eyebrow">${safe(slide.eyebrow)}</p>
          <h2>${safe(slide.title)}</h2>
        </div>
        <div class="journey">
          ${slide.moments.map(([title, text]) => `<article><strong>${safe(title)}</strong><p>${safe(text)}</p></article>`).join("")}
        </div>
      </section>`;
  },
  closing(slide) {
    return `
      <section class="slide" data-title="收斂">
        <div class="closing-panel">
          <p class="eyebrow">${safe(slide.eyebrow)}</p>
          <h2>${safe(slide.title)}</h2>
          <p>${safe(slide.body)}</p>
          <span class="cta">${safe(slide.cta)}</span>
        </div>
      </section>`;
  }
};

root.innerHTML = `
  <div class="progress" aria-hidden="true"><span id="progressBar"></span></div>
  ${variant.slides.map((slide) => renderers[slide.type](slide)).join("")}
  <nav class="controls" aria-label="投影片控制">
    <button id="prevBtn" type="button" aria-label="上一頁" title="上一頁">‹</button>
    <span id="slideCount">1 / ${variant.slides.length}</span>
    <button id="nextBtn" type="button" aria-label="下一頁" title="下一頁">›</button>
  </nav>`;

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
  document.title = `${slides[current].dataset.title}｜${variant.styleName}`;
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

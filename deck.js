const deck = window.SDLC_DECK;
const app = document.querySelector("#deckRoot");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function visualMarkup() {
  return `
    <div class="cover-visual" aria-label="五階段系統流程圖">
      <div class="loop-line"></div>
      ${deck.stages
        .map(
          (stage, index) => `
          <div class="stage-pill p${index + 1}">
            <span>${stage.no}</span>
            <strong>${stage.zh}</strong>
          </div>`
        )
        .join("")}
      <div class="system-core">
        <span>OrderFlow</span>
        <strong>訂餐系統</strong>
      </div>
    </div>`;
}

function artifactMarkup(stage) {
  if (stage.artifact === "metric") {
    return `
      <div class="artifact metric-board">
        <div><strong>30%</strong><span>預估電話量下降</span></div>
        <div><strong>8 週</strong><span>MVP 時程</span></div>
        <div><strong>3 門市</strong><span>首波試點</span></div>
      </div>`;
  }

  if (stage.artifact === "flow") {
    return `
      <div class="artifact process-board">
        <span>顧客選餐</span>
        <span>門市確認</span>
        <span>付款通知</span>
        <span>備餐完成</span>
      </div>`;
  }

  if (stage.artifact === "architecture") {
    return `
      <div class="artifact architecture-board">
        <span class="wide">Web App</span>
        <span>Order API</span>
        <span>Menu DB</span>
        <span>Payment</span>
        <span>Store POS</span>
      </div>`;
  }

  if (stage.artifact === "code") {
    return `
      <div class="artifact code-board">
        <div class="window-dots"><i></i><i></i><i></i></div>
        <pre><code>POST /orders
validateCart()
reserveInventory()
createPayment()
notifyStore()</code></pre>
      </div>`;
  }

  return `
    <div class="artifact health-board">
      <div class="health-ring"></div>
      <strong>System Health</strong>
      <span>99.92% uptime</span>
      <span>付款錯誤率 0.4%</span>
      <span>平均回應 180ms</span>
    </div>`;
}

function stageSlide(stage) {
  return `
    <section class="slide stage-slide" data-title="${escapeHtml(stage.zh)}階段">
      <aside class="stage-index">
        <span>${stage.no}</span>
        <p>${escapeHtml(stage.en)}</p>
      </aside>
      <div class="stage-copy">
        <p class="eyebrow">${escapeHtml(stage.en)}</p>
        <h2>${escapeHtml(stage.title)}</h2>
        <p>${escapeHtml(stage.body)}</p>
        <div class="output-grid">
          <article>
            <span class="label">案例任務</span>
            <p>${escapeHtml(stage.task)}</p>
          </article>
          <article>
            <span class="label">階段產出</span>
            <p>${escapeHtml(stage.output)}</p>
          </article>
        </div>
      </div>
      ${artifactMarkup(stage)}
    </section>`;
}

function renderDeck() {
  app.innerHTML = `
    <div class="progress" aria-hidden="true"><span id="progressBar"></span></div>
    <section class="slide title-slide active" data-title="開場">
      <div class="title-copy">
        <p class="eyebrow">System Development Life Cycle</p>
        <h1>${escapeHtml(deck.title)}</h1>
        <p class="lede">${escapeHtml(deck.subtitle)}</p>
        <div class="tag-row">${deck.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      </div>
      ${visualMarkup()}
    </section>

    <section class="slide" data-title="模型來源">
      <header class="slide-header">
        <p class="eyebrow">Research Lens</p>
        <h2>SDLC 是把「想法」穩定變成「系統」的管理方法</h2>
      </header>
      <div class="two-col">
        <article class="claim-panel">
          <h3>為什麼需要階段？</h3>
          <p>系統開發牽涉業務目標、使用者流程、資料、程式、測試、導入與後續支援。五階段模型把不確定性拆小，讓團隊每一步都有明確產出。</p>
        </article>
        <div class="evidence-stack">
          <article>
            <span class="label">五階段版本</span>
            <strong>規劃、分析、設計、實作、維護</strong>
            <p>LibreTexts 將 SDLC 定義為這五個階段的流程模型。</p>
          </article>
          <article>
            <span class="label">可調整性</span>
            <strong>不同組織可拆分或合併階段</strong>
            <p>例如有些團隊會把測試與部署拆成獨立階段，但核心邏輯仍是循序降低風險。</p>
          </article>
        </div>
      </div>
      <footer class="source-note">來源：Workforce LibreTexts, GeeksforGeeks。完整連結見最後一頁。</footer>
    </section>

    <section class="slide overview-slide" data-title="五階段總覽">
      <header class="slide-header">
        <p class="eyebrow">Framework</p>
        <h2>五階段不是表格，而是一條決策鏈</h2>
      </header>
      <div class="timeline">
        ${deck.stages
          .map(
            (stage) => `
          <article>
            <span>${stage.no}</span>
            <h3>${escapeHtml(stage.zh)}</h3>
            <p>${escapeHtml(stage.short)}</p>
          </article>`
          )
          .join("")}
      </div>
      <div class="example-strip">
        <strong>貫穿案例</strong>
        <p>一家餐飲品牌要開發線上訂餐系統，支援顧客下單、門市接單、庫存扣減、付款與訂單查詢。</p>
      </div>
    </section>

    ${deck.stages.map(stageSlide).join("")}

    <section class="slide recap-slide" data-title="案例總結">
      <header class="slide-header">
        <p class="eyebrow">Example Recap</p>
        <h2>同一個訂餐系統，在五階段中逐步變清楚</h2>
      </header>
      <div class="matrix">
        <div class="matrix-row head"><span>階段</span><span>核心問題</span><span>訂餐系統例子</span></div>
        <div class="matrix-row"><span>規劃</span><span>值得做嗎？</span><span>估算降低尖峰電話與漏單的效益</span></div>
        <div class="matrix-row"><span>分析</span><span>要做什麼？</span><span>整理下單、改單、退款、缺貨需求</span></div>
        <div class="matrix-row"><span>設計</span><span>怎麼做？</span><span>規劃 API、資料庫、付款與門市後台</span></div>
        <div class="matrix-row"><span>實作</span><span>做出來了嗎？</span><span>開發、測試、訓練並導入試點門市</span></div>
        <div class="matrix-row"><span>維護</span><span>能長期運作嗎？</span><span>監控、修補、備份並累積下一版需求</span></div>
      </div>
    </section>

    <section class="slide sources-slide" data-title="資料來源">
      <header class="slide-header">
        <p class="eyebrow">Sources</p>
        <h2>本簡報採用五階段 SDLC 作為主軸</h2>
      </header>
      <div class="source-list">
        ${deck.sources
          .map(
            (source) => `
          <a href="${source.url}" target="_blank" rel="noreferrer">
            <strong>${escapeHtml(source.name)}</strong>
            <span>${escapeHtml(source.note)}</span>
          </a>`
          )
          .join("")}
      </div>
      <div class="closing-card">
        <h3>一句話帶走</h3>
        <p>SDLC 的價值不是把流程變慢，而是讓團隊在每個關鍵決策點都能看見風險、產出與下一步。</p>
      </div>
    </section>

    <nav class="controls" aria-label="投影片控制">
      <button id="prevBtn" type="button" aria-label="上一頁" title="上一頁">‹</button>
      <span id="slideCount">1 / 10</span>
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
  document.title = `${slides[current].dataset.title}｜${document.body.dataset.styleName}`;
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

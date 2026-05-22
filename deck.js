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
    "模型取得": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v10H4z"/><path d="M8 7V5h8v2"/><path d="M8 12h8"/><path d="M12 9v6"/></svg>',
    "製作": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18h16"/><path d="M6 18 15.5 8.5l2 2L8 20H6z"/><path d="M14 6l4 4"/><path d="M10 5h2"/><path d="M5 10h2"/><path d="M17 16h2"/></svg>',
    "上傳": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v10"/><path d="m8 8 4-4 4 4"/><path d="M5 15v4h14v-4"/></svg>',
    "估價": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18H6z"/><path d="M9 7h6"/><path d="M9 11h2"/><path d="M13 11h2"/><path d="M9 15h2"/><path d="M13 15h2"/></svg>',
    "排程": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4"/><path d="M17 3v4"/><path d="M4 8h16"/><path d="M5 5h14v16H5z"/><path d="M8 13h3"/><path d="M13 13h3"/><path d="M8 17h3"/></svg>',
    "追蹤": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    "取件": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16l-2 12H6z"/><path d="M8 8a4 4 0 0 1 8 0"/><path d="M9 14h6"/></svg>'
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
        <path class="flow-segment flow-1" d="M 37.86 16.64 A 35.5 35.5 0 0 1 62.14 16.64"></path>
        <path class="flow-segment flow-2" d="M 72.82 22.81 A 35.5 35.5 0 0 1 83.52 37.86"></path>
        <path class="flow-segment flow-3" d="M 84.5 61.5 A 35.5 35.5 0 0 1 72.82 77.19"></path>
        <path class="flow-segment flow-4" d="M 62.14 83.36 A 35.5 35.5 0 0 1 37.86 83.36"></path>
        <path class="flow-segment flow-5" d="M 27.18 77.19 A 35.5 35.5 0 0 1 16.48 62.14"></path>
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

function renderArrowList(items, className = "") {
  return `<div class="arrow-list ${className}">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`;
}

function diagramIcon(type) {
  const icons = {
    person: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/></svg>',
    store: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16"/><path d="M5 10l2-6h10l2 6"/><path d="M6 10v10h12V10"/><path d="M9 20v-6h6v6"/></svg>',
    headset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13v-2a7 7 0 0 1 14 0v2"/><path d="M5 13h3v5H5z"/><path d="M16 13h3v5h-3z"/><path d="M12 20h3"/><path d="M19 18a4 4 0 0 1-4 2"/></svg>',
    gear: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5l-.3 3a8 8 0 0 0-1.7 1l-2.4-1-2 3.5L5.1 11a7 7 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5a7 7 0 0 0 .1-1z"/></svg>',
    payment: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v10H4z"/><path d="M4 10h16"/><path d="M7 14h4"/></svg>',
    notification: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-2 7-2 9h16c0-2-2-2-2-9"/><path d="M10 21h4"/></svg>'
  };
  return icons[type] || icons.person;
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
            ${slide.requirementTags ? `<div class="requirement-tags">${slide.requirementTags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>` : ""}
            <div class="single-case-takeaway"><strong>帶入本專題</strong><p>${escapeHtml(slide.takeaway)}</p></div>
          </article>
          <div class="single-case-images">
            ${slide.images.map((image) => `<figure><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.label)}" /><figcaption>${escapeHtml(image.label)}</figcaption></figure>`).join("")}
          </div>
        </div>
      </section>`;
  },

  stageDivider(slide) {
    if (slide.isPlaceholder) {
      return `
        <section class="slide stage-divider-slide placeholder-stage-slide" data-title="${escapeHtml(slide.title)}">
          <div class="stage-kicker">
            <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
            <h2>${escapeHtml(slide.title)}</h2>
          </div>
          <div class="placeholder-stage-panel">
            <strong>內容待補</strong>
            <p>${escapeHtml(slide.placeholderText)}</p>
            <span>${escapeHtml(slide.handoff)}</span>
          </div>
        </section>`;
    }
    return `
      <section class="slide stage-divider-slide" data-title="${escapeHtml(slide.title)}">
        <div class="stage-kicker">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </div>
        <div class="handoff-flow">
          <article>
            <span>上一階段交付</span>
            <strong>${escapeHtml(slide.previousDeliverable)}</strong>
          </article>
          <article class="active-stage">
            <span>本階段工作</span>
            <div>${slide.currentWork.map((item) => `<em>${escapeHtml(item)}</em>`).join("")}</div>
          </article>
          <article>
            <span>下一階段交付</span>
            <strong>${escapeHtml(slide.nextDeliverable)}</strong>
          </article>
        </div>
        <div class="stage-handoff-note"><p>${escapeHtml(slide.handoff)}</p></div>
      </section>`;
  },

  planningBackground(slide) {
    return `
      <section class="slide planning-background-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
          <p class="slide-intro">${escapeHtml(slide.intro)}</p>
        </header>
        <div class="planning-background-layout">
          <div class="planning-pain-grid">
            ${slide.painPoints
              .map(
                (item) => `
                <article>
                  ${item.image ? `<figure><img src="${escapeHtml(item.image.src)}" alt="${escapeHtml(item.image.alt)}" /></figure>` : ""}
                  <div>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.body)}</p>
                  </div>
                </article>`
              )
              .join("")}
          </div>
          <aside class="planning-solution-panel">
            <strong>系統規劃方向</strong>
            <p>${escapeHtml(slide.solution)}</p>
            <span>${escapeHtml(slide.creatorValue)}</span>
          </aside>
        </div>
      </section>`;
  },

  planningScope(slide) {
    return `
      <section class="slide planning-scope-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
          <p class="slide-intro">${escapeHtml(slide.intro)}</p>
        </header>
        <div class="planning-scope-layout">
          <figure class="planning-scope-image">
            <img src="${escapeHtml(slide.image.src)}" alt="${escapeHtml(slide.image.alt)}" />
          </figure>
          <div class="planning-scope-list">
            ${slide.scopes.map(([title, body]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>`).join("")}
          </div>
        </div>
        <div class="stage-handoff-note compact"><p>${escapeHtml(slide.takeaway)}</p></div>
      </section>`;
  },

  planningSchedule(slide) {
    return `
      <section class="slide planning-schedule-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
          <p class="slide-intro">${escapeHtml(slide.intro)}</p>
        </header>
        <div class="planning-schedule-layout">
          <figure class="planning-schedule-image">
            <img src="${escapeHtml(slide.image.src)}" alt="${escapeHtml(slide.image.alt)}" />
          </figure>
          <div class="planning-phase-grid">
            ${slide.phases
              .map(
                ([title, body], index) => `
                <article>
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <strong>${escapeHtml(title)}</strong>
                  <p>${escapeHtml(body)}</p>
                </article>`
              )
              .join("")}
          </div>
        </div>
        <div class="stage-handoff-note compact"><p>${escapeHtml(slide.takeaway)}</p></div>
      </section>`;
  },

  planningChallenges(slide) {
    return `
      <section class="slide planning-challenges-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
          <p class="slide-intro">${escapeHtml(slide.intro)}</p>
        </header>
        <div class="planning-challenge-grid">
          ${slide.challenges
            .map(
              (challenge, index) => `
              <article>
                <div class="challenge-copy">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${escapeHtml(challenge.title)}</h3>
                  <strong>系統問題</strong>
                  <p>${escapeHtml(challenge.problem)}</p>
                  <strong>應對方式</strong>
                  <p>${escapeHtml(challenge.response)}</p>
                </div>
                ${
                  challenge.images
                    ? `<div class="challenge-images">${challenge.images.map((image) => `<figure><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" /></figure>`).join("")}</div>`
                    : ""
                }
              </article>`
            )
            .join("")}
        </div>
        <div class="stage-handoff-note compact"><p>${escapeHtml(slide.takeaway)}</p></div>
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

  swimlane(slide) {
    return `
      <section class="slide swimlane-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="note-panel"><p>${escapeHtml(slide.story)}</p></div>
        <div class="swimlane-grid">
          ${slide.lanes
            .map(
              ([role, steps]) => `
              <article>
                <strong>${escapeHtml(role)}</strong>
                ${renderArrowList(steps)}
              </article>`
            )
            .join("")}
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

  useCase(slide) {
    const actorLines = [
      ["actor", "M 12 16 L 24 16"],
      ["actor", "M 12 38 L 24 38"],
      ["actor", "M 12 58 L 24 58"],
      ["actor", "M 12 77 L 24 77"],
      ["external", "M 78 30 L 89 30"],
      ["notify", "M 78 47 L 89 66"],
      ["notify", "M 78 57 L 89 66"]
    ]
      .map(([type, d]) => `<path class="usecase-link ${escapeHtml(type)}" d="${escapeHtml(d)}" />`)
      .join("");
    return `
      <section class="slide usecase-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
          <p class="slide-intro">${escapeHtml(slide.description)}</p>
        </header>
        <div class="formal-usecase-board">
          <svg class="usecase-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${actorLines}</svg>
          <div class="usecase-main-area">
          <aside class="diagram-actors" aria-label="Actor 角色">
            ${slide.leftActors
              .map((actor) => `<article class="diagram-actor" data-actor="${escapeHtml(actor.id)}"><i>${diagramIcon(actor.icon)}</i><strong>${escapeHtml(actor.name)}</strong></article>`)
              .join("")}
          </aside>
          <div class="usecase-system-boundary">
            <strong class="usecase-boundary-title">${escapeHtml(slide.systemBoundary)}</strong>
            <div class="usecase-group-grid">
              ${slide.useCaseGroups
                .map(
                  (group) => `
                  <section class="usecase-group usecase-group-${escapeHtml(group.id)}" data-group="${escapeHtml(group.id)}">
                    <span class="usecase-group-label">${escapeHtml(group.label)}</span>
                    <div class="usecase-pill-grid">
                      ${group.items.map((item) => `<span class="usecase-pill" data-id="${escapeHtml(item.id)}">${escapeHtml(item.label)}</span>`).join("")}
                    </div>
                  </section>`
                )
                .join("")}
            </div>
          </div>
          <aside class="external-systems" aria-label="外部系統">
            ${slide.externalSystems
              .map((system) => `<article class="external-system" data-system="${escapeHtml(system.id)}"><i>${diagramIcon(system.id === "paymentGateway" ? "payment" : "notification")}</i><strong>${escapeHtml(system.name)}</strong><span>${escapeHtml(system.action)}</span></article>`)
              .join("")}
          </aside>
          </div>
        </div>
        <div class="permission-note"><p>${escapeHtml(slide.note)}</p></div>
      </section>`;
  },

  requirementMatrix(slide) {
    return `
      <section class="slide requirement-matrix-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="dual-requirements">
          <article>
            <h3>功能需求</h3>
            ${renderTable(["功能模組", "功能說明"], slide.functional, "compact-matrix")}
          </article>
          <article>
            <h3>非功能需求</h3>
            ${renderTable(["需求", "具體說明"], slide.nonFunctional, "compact-matrix")}
          </article>
        </div>
      </section>`;
  },

  architecture(slide) {
    if (slide.layout === "interaction-map") {
      const flowRows = slide.flows.map(([from, to, label]) => `<span><strong>${escapeHtml(from)}</strong><i>${escapeHtml(label)}</i><strong>${escapeHtml(to)}</strong></span>`).join("");
      return `
        <section class="slide architecture-interaction-slide" data-title="${escapeHtml(slide.title)}">
          <header class="slide-header">
            <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
            <h2>${escapeHtml(slide.title)}</h2>
            <p class="slide-intro">${escapeHtml(slide.intro)}</p>
          </header>
          <div class="architecture-interaction-layout">
            <div class="architecture-zones">
              ${slide.zones
                .map(
                  (zone) => `
                  <section>
                    <h3>${escapeHtml(zone.title)}</h3>
                    ${zone.nodes.map((node) => `<article data-node="${escapeHtml(node.id)}"><strong>${escapeHtml(node.title)}</strong><p>${escapeHtml(node.body)}</p></article>`).join("")}
                  </section>`
                )
                .join("")}
            </div>
            <aside class="architecture-flow-list">
              <strong>主要互動關係</strong>
              ${flowRows}
            </aside>
          </div>
        </section>`;
    }
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

  designSpecOverview(slide) {
    return `
      <section class="slide design-spec-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
          <p class="slide-intro">${escapeHtml(slide.intro)}</p>
        </header>
        <div class="design-spec-grid">
          ${slide.items
            .map(
              (item, index) => `
              <article>
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.body)}</p>
              </article>`
            )
            .join("")}
        </div>
        <div class="stage-handoff-note compact"><p>${escapeHtml(slide.handoff)}</p></div>
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
        <div class="${slide.screens.some((screen) => screen.src) ? "prototype-image-grid" : "screen-grid"}">
          ${slide.screens
            .map((screen, index) => {
              const title = Array.isArray(screen) ? screen[0] : screen.title || screen;
              const body = Array.isArray(screen) ? screen[1] : screen.body || "";
              const number = screen.no || String(index + 1).padStart(2, "0");
              if (screen.src) {
                return `
                  <figure>
                    <img src="${escapeHtml(screen.src)}" alt="${escapeHtml(title)}" />
                    <figcaption><span>${escapeHtml(number)}</span><strong>${escapeHtml(title)}</strong>${body ? `<p>${escapeHtml(body)}</p>` : ""}</figcaption>
                  </figure>`;
              }
              return `<article><span>${escapeHtml(number)}</span><strong>${escapeHtml(title)}</strong>${body ? `<p>${escapeHtml(body)}</p>` : ""}<i></i></article>`;
            })
            .join("")}
        </div>
        <div class="prototype-priority"><p>${escapeHtml(slide.priority)}</p></div>
      </section>`;
  },

  erd(slide) {
    if (slide.image) {
      return `
        <section class="slide erd-image-slide" data-title="${escapeHtml(slide.title)}">
          <header class="slide-header">
            <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
            <h2>${escapeHtml(slide.title)}</h2>
          </header>
          <figure class="erd-image-frame">
            <img src="${escapeHtml(slide.image.src)}" alt="${escapeHtml(slide.image.alt)}" />
            ${slide.note ? `<figcaption>${escapeHtml(slide.note)}</figcaption>` : ""}
          </figure>
        </section>`;
    }
    return `
      <section class="slide erd-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="erd-layout">
          <div class="relation-list">
            ${slide.relations.map(([left, leftCardinality, rightCardinality, right]) => `<article><strong>${escapeHtml(left)}</strong><span>${escapeHtml(leftCardinality)} ─ ${escapeHtml(rightCardinality)}</span><strong>${escapeHtml(right)}</strong></article>`).join("")}
          </div>
          <div class="supporting-tables">
            <h3>新增資料表</h3>
            ${slide.tables.map(([table, body]) => `<article><strong>${escapeHtml(table)}</strong><p>${escapeHtml(body)}</p></article>`).join("")}
          </div>
        </div>
      </section>`;
  },

  stateMachine(slide) {
    return `
      <section class="slide state-machine-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="state-track">
          ${slide.normal.map((state) => `<span>${escapeHtml(state)}</span>`).join("")}
        </div>
        <div class="exception-band">
          <strong>異常狀態</strong>
          <div>${slide.exceptions.map((state) => `<span>${escapeHtml(state)}</span>`).join("")}</div>
        </div>
        <div class="stage-handoff-note compact"><p>${escapeHtml(slide.rule)}</p></div>
      </section>`;
  },

  moduleIO(slide) {
    return `
      <section class="slide module-io-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
          <p class="slide-intro">${escapeHtml(slide.intro)}</p>
        </header>
        <div class="module-io-grid">
          ${slide.modules
            .map(
              (module) => `
              <article>
                <h3>${escapeHtml(module.name)}</h3>
                <div><strong>輸入</strong><p>${escapeHtml(module.input)}</p></div>
                <div><strong>處理</strong><p>${escapeHtml(module.process)}</p></div>
                <div><strong>輸出</strong><p>${escapeHtml(module.output)}</p></div>
              </article>`
            )
            .join("")}
        </div>
        <div class="stage-handoff-note compact"><p>${escapeHtml(slide.takeaway)}</p></div>
      </section>`;
  },

  interfaceDesign(slide) {
    return `
      <section class="slide image-design-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
          <p class="slide-intro">${escapeHtml(slide.intro)}</p>
        </header>
        <div class="design-image-grid">
          ${slide.screens
            .map(
              (screen) => `
              <figure>
                <img src="${escapeHtml(screen.src)}" alt="${escapeHtml(screen.title)}" />
                <figcaption><strong>${escapeHtml(screen.title)}</strong><span>${escapeHtml(screen.body)}</span></figcaption>
              </figure>`
            )
            .join("")}
        </div>
        <div class="stage-handoff-note compact"><p>${escapeHtml(slide.takeaway)}</p></div>
      </section>`;
  },

  flowDesign(slide) {
    return `
      <section class="slide image-design-slide flow-design-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
          <p class="slide-intro">${escapeHtml(slide.intro)}</p>
        </header>
        <div class="design-image-grid flow-step-grid">
          ${slide.steps
            .map(
              (step) => `
              <figure>
                <img src="${escapeHtml(step.src)}" alt="${escapeHtml(step.title)}" />
                <figcaption><em>${escapeHtml(step.label)}</em><strong>${escapeHtml(step.title)}</strong><span>${escapeHtml(step.body)}</span></figcaption>
              </figure>`
            )
            .join("")}
        </div>
        <div class="stage-handoff-note compact"><p>${escapeHtml(slide.takeaway)}</p></div>
      </section>`;
  },

  exceptionTesting(slide) {
    return `
      <section class="slide exception-testing-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="dual-requirements">
          <article>
            <h3>異常流程</h3>
            ${renderTable(["異常情境", "系統處理"], slide.exceptions, "compact-matrix")}
          </article>
          <article>
            <h3>驗收測試</h3>
            ${renderTable(["測試項目", "預期結果"], slide.tests, "compact-matrix")}
          </article>
        </div>
      </section>`;
  },

  maintenance(slide) {
    return `
      <section class="slide maintenance-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
        </header>
        <div class="maintenance-layout">
          <div class="operations-grid">
            ${slide.operations.map(([title, body], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("")}
          </div>
          <div class="future-panel">
            <strong>未來擴充順序</strong>
            ${slide.future.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
        </div>
        <div class="positioning-strip"><strong>結論</strong><p>${escapeHtml(slide.conclusion)}</p></div>
      </section>`;
  },

  feedbackUpdate(slide) {
    return `
      <section class="slide feedback-update-slide" data-title="${escapeHtml(slide.title)}">
        <header class="slide-header">
          <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
          <h2>${escapeHtml(slide.title)}</h2>
          <p class="slide-intro">${escapeHtml(slide.intro)}</p>
        </header>
        <div class="feedback-update-grid">
          ${slide.items
            .map(
              (item, index) => `
              <article>
                <figure><img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.title)}" /></figure>
                <div class="feedback-copy">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${escapeHtml(item.title)}</h3>
                  <strong>系統問題</strong>
                  <p>${escapeHtml(item.problem)}</p>
                  <strong>版本更新方向</strong>
                  <p>${escapeHtml(item.update)}</p>
                </div>
              </article>`
            )
            .join("")}
        </div>
        <div class="stage-handoff-note compact"><p>${escapeHtml(slide.takeaway)}</p></div>
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

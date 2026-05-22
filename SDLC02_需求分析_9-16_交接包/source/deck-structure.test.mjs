import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../deck-data.js", import.meta.url), "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);

const deck = context.window.PRESENTATION_DECK;
const slides = deck.slides;
const titles = slides.map((slide) => slide.title);

assert.equal(slides.length, 29, `Expected 29 slides after expanding SDLC 02 requirement analysis pages, got ${slides.length}`);
assert.ok(!titles.includes("系統目標與服務定位"), "Page 8 should be removed from the deck");

const sdlcIndex = titles.indexOf("系統開發生命週期與本專題範圍");
assert.notEqual(sdlcIndex, -1, "Missing SDLC scope slide");

const expectedStages = [
  "系統規劃",
  "系統需求分析",
  "系統設計",
  "系統建置與測試",
  "系統上線與維護"
];

const stageSlides = slides.filter((slide) => slide.type === "stageDivider");
assert.deepEqual(Array.from(stageSlides, (slide) => slide.title), expectedStages);
assert.equal(titles[sdlcIndex + 1], "系統規劃", "The five SDLC stage sections should start immediately after the SDLC slide");

for (const stage of stageSlides) {
  assert.ok(stage.previousDeliverable, `${stage.title} is missing previousDeliverable`);
  assert.ok(stage.currentWork?.length, `${stage.title} is missing currentWork`);
  assert.ok(stage.nextDeliverable, `${stage.title} is missing nextDeliverable`);
}

for (const requiredTitle of [
  "Use Case 圖與角色互動",
  "需求來源整理：痛點到系統需求",
  "使用者情境與主要流程",
  "功能需求分析",
  "非功能需求分析",
  "系統需求書交付內容",
  "從需求分析接續系統設計",
  "訂單狀態機",
  "ERD / 資料表關聯",
  "異常流程與驗收測試"
]) {
  assert.ok(titles.includes(requiredTitle), `Missing required analysis slide: ${requiredTitle}`);
}

assert.ok(
  JSON.stringify(deck).includes("上線維護計畫書"),
  "The maintenance stage should include an operations handoff deliverable"
);

assert.equal(slides[8].title, "系統需求分析", "Slide 9 should begin SDLC 02 requirement analysis");
assert.ok(slides[8].sections?.length === 3, "Slide 9 should show PM planning, analysis work, and design handoff sections");
assert.equal(slides[9].title, "需求來源整理：痛點到系統需求", "Slide 10 should derive requirements from pain points");
assert.equal(slides[11].title, "使用者情境與主要流程", "Slide 12 should show the detailed main flow");
assert.equal(slides[11].type, "swimlaneFlow", "Main flow slide should use the swimlane flow renderer");
assert.deepEqual(Array.from(slides[11].lanes, (lane) => lane[0]), ["顧客", "系統", "金流系統", "門市人員"]);
assert.equal(slides[12].title, "功能需求分析", "Slide 13 should show functional requirements");
assert.equal(slides[12].type, "functionalCards", "Functional requirements should use module cards");
assert.equal(slides[12].modules.length, 10, "Functional requirement slide should show 10 module cards");
assert.equal(slides[13].title, "非功能需求分析", "Slide 14 should show non-functional requirements");
assert.equal(slides[14].title, "系統需求書交付內容", "Slide 15 should summarize requirement document deliverables");
assert.equal(slides[15].title, "從需求分析接續系統設計", "Slide 16 should hand off requirements to system design");
assert.equal(slides[15].type, "handoffMap", "System design handoff should use a left-right handoff map");

const useCaseSlide = slides.find((slide) => slide.title === "Use Case 圖與角色互動");
assert.equal(
  useCaseSlide.description,
  "本系統依照不同使用角色分配操作權限，並串接金流與通知系統完成訂單流程。"
);
assert.equal(useCaseSlide.systemBoundary, "超商型智慧 3D 列印服務系統");
assert.deepEqual(
  Array.from(useCaseSlide.leftActors, (actor) => actor.name),
  ["顧客", "門市人員", "客服人員", "管理員"]
);
assert.deepEqual(
  Array.from(useCaseSlide.externalSystems, (system) => system.name),
  ["金流系統", "通知系統"]
);
assert.equal(useCaseSlide.layout, "three-column-grid", "Use Case slide should use a three-column grid layout");
assert.ok(
  useCaseSlide.leftActors.every((actor) => actor.id && actor.name && actor.icon && actor.groupId && actor.x === undefined && actor.y === undefined),
  "Use Case actors should be grid items, not absolute-positioned nodes"
);
assert.ok(
  useCaseSlide.useCaseGroups.every((group) => group.id && group.actorId && group.items.every((item) => item.id && item.label && item.x === undefined && item.y === undefined)),
  "Use Case items should be grouped grid pills, not absolute-positioned nodes"
);
assert.deepEqual(
  Array.from(useCaseSlide.links, (link) => `${link.from}->${link.to}`),
  ["customer->customer", "storeStaff->store", "support->support", "admin->admin", "payment->paymentGateway", "updatePrintStatus->notificationSystem"]
);
assert.ok(
  useCaseSlide.useCaseGroups.find((group) => group.id === "customer")?.items.some((item) => item.label === "付款"),
  "Customer use cases should include payment"
);
assert.ok(
  useCaseSlide.useCaseGroups.find((group) => group.id === "support")?.items.some((item) => item.label === "回覆客訴"),
  "Support use cases should include complaint replies"
);
assert.ok(
  useCaseSlide.note.includes("權限邊界"),
  "Use Case diagram should include the permission-boundary note"
);

assert.equal(slides[17].title, "系統設計規格書內容總覽", "Slide 18 should summarize system design spec contents");
assert.equal(slides[17].type, "designSpecOverview");
assert.ok(
  slides[17].items.some((item) => item.title === "API / 權限 / 異常規則"),
  "Design spec overview should include API, permission, and exception rules"
);

assert.equal(slides[18].title, "系統架構圖", "Slide 19 should remain the architecture slide");
assert.equal(slides[18].type, "architecture");
assert.equal(slides[18].layout, "interaction-map", "Architecture slide should show module interactions");
assert.ok(slides[18].flows.length >= 8, "Architecture slide should include interaction flows between modules");

assert.equal(slides[20].title, "模組設計與輸入輸出", "Slide 21 should explain module inputs and outputs");
assert.equal(slides[20].type, "moduleIO");
assert.ok(
  slides[20].modules.some((module) => module.name === "模型檢查模組" && module.input.includes("STL / OBJ")),
  "Module IO slide should include the model-checking module input"
);
assert.ok(
  slides[20].modules.some((module) => module.name === "智慧估價模組" && module.output.includes("預估價格")),
  "Module IO slide should include the quote module output"
);

assert.equal(slides[21].title, "介面設計", "Slide 22 should be the interface design slide");
assert.equal(slides[21].type, "interfaceDesign");
assert.deepEqual(
  Array.from(slides[21].screens, (screen) => screen.src),
  ["./asset/模型市集.png", "./asset/模型製作.png", "./asset/自己的倉庫.png", "./asset/後台.png"]
);

assert.equal(slides[22].title, "流程設計", "Slide 23 should be the flow design slide");
assert.equal(slides[22].type, "flowDesign");
assert.deepEqual(
  Array.from(slides[22].steps, (step) => step.src),
  ["./asset/1.png", "./asset/2.png", "./asset/3.png", "./asset/4.png"]
);

const erdSlide = slides[19];
assert.equal(erdSlide.title, "ERD / 資料表關聯", "Slide 20 should remain the ERD slide after SDLC 02 expansion");
assert.equal(erdSlide.image?.src, "./asset/erd-data-model.svg", "Slide 15 should embed the ERD image asset");
assert.ok(fs.existsSync(new URL("../asset/erd-data-model.svg", import.meta.url)), "Missing ERD image asset");
assert.ok(fs.existsSync(new URL("../asset/erd-data-model.png", import.meta.url)), "Missing ERD PNG export");

for (const imagePath of [
  "../asset/模型市集.png",
  "../asset/模型製作.png",
  "../asset/自己的倉庫.png",
  "../asset/後台.png",
  "../asset/1.png",
  "../asset/2.png",
  "../asset/3.png",
  "../asset/4.png"
]) {
  assert.ok(fs.existsSync(new URL(imagePath, import.meta.url)), `Missing slide image asset: ${imagePath}`);
}

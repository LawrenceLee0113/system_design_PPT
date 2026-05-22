import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../deck-data.js", import.meta.url), "utf8");
const cssSource = fs.readFileSync(new URL("../deck-base.css", import.meta.url), "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);

const deck = context.window.PRESENTATION_DECK;
const slides = deck.slides;
const titles = slides.map((slide) => slide.title);

assert.equal(slides.length, 35, `Expected 35 slides after expanding planning and requirement-analysis pages, got ${slides.length}`);
assert.ok(!titles.includes("系統目標與服務定位"), "Page 8 should be removed from the deck");

const sdlcIndex = titles.indexOf("系統開發生命週期與本專題範圍");
assert.notEqual(sdlcIndex, -1, "Missing SDLC scope slide");

const painPointIndex = titles.indexOf("使用者痛點分析");
assert.notEqual(painPointIndex, -1, "Missing pain-point slide");
assert.equal(titles[painPointIndex + 1], "專題背景與動機", "Background slide should appear right after pain-point analysis");

const expectedStages = [
  "題目發想與課程目標",
  "系統規劃",
  "系統需求分析",
  "系統設計",
  "系統建置與測試",
  "系統上線與維護"
];

const stageSlides = slides.filter((slide) => slide.type === "stageDivider");
assert.deepEqual(Array.from(stageSlides, (slide) => slide.title), expectedStages);
assert.equal(titles[sdlcIndex + 1], "題目發想與課程目標", "The first section after the SDLC slide should be the idea and course-goal section");
const planningStageIndex = titles.indexOf("系統規劃");
const requirementStageIndex = titles.indexOf("系統需求分析");
assert.ok(planningStageIndex > 0 && planningStageIndex < requirementStageIndex, "System-planning section should appear before requirement analysis");
const planningStage = slides[planningStageIndex];
assert.equal(Boolean(planningStage.isPlaceholder), false, "System-planning section should no longer be an empty placeholder");
assert.deepEqual(
  Array.from(titles.slice(planningStageIndex + 1, planningStageIndex + 5)),
  ["系統規劃：專案背景", "系統功能規劃", "我們怎麼一步一步把它做出來", "現行挑戰與應對"]
);
assert.equal(titles[planningStageIndex + 5], "系統需求分析", "Requirement analysis should follow the system-planning pages");

assert.deepEqual(
  Array.from(titles.slice(requirementStageIndex, requirementStageIndex + 8)),
  [
    "系統需求分析",
    "需求來源整理：痛點到系統需求",
    "Use Case 圖與角色互動",
    "使用者情境與主要流程",
    "功能需求分析",
    "非功能需求分析",
    "系統需求書交付內容",
    "從需求分析接續系統設計"
  ],
  "SDLC 02 requirement-analysis section should match the bw_main handoff sequence"
);
assert.equal(titles[requirementStageIndex + 8], "系統設計", "System design should follow the expanded SDLC 02 section");
assert.equal(slides[requirementStageIndex].sections.length, 3, "Requirement stage opener should show PM planning, analysis work, and requirement deliverable");

for (const stage of stageSlides) {
  if (stage.isPlaceholder) continue;
  assert.ok(stage.previousDeliverable, `${stage.title} is missing previousDeliverable`);
  assert.ok(stage.currentWork?.length, `${stage.title} is missing currentWork`);
  assert.ok(stage.nextDeliverable, `${stage.title} is missing nextDeliverable`);
}

for (const requiredTitle of [
  "Use Case 圖與角色互動",
  "需求來源整理：痛點到系統需求",
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
  useCaseSlide.note.includes("權限邊界"),
  "Use Case diagram should include the permission-boundary note"
);
assert.ok(
  useCaseSlide.useCaseGroups.find((group) => group.id === "customer")?.items.some((item) => item.label === "付款"),
  "Customer use cases should include payment from bw_main"
);
assert.ok(
  useCaseSlide.useCaseGroups.find((group) => group.id === "support")?.items.some((item) => item.label === "回覆客訴"),
  "Support use cases should include complaint replies from bw_main"
);

const requirementSourceSlide = slides.find((slide) => slide.title === "需求來源整理：痛點到系統需求");
assert.equal(requirementSourceSlide.type, "table");
assert.equal(requirementSourceSlide.variant, "source-trace-slide");
assert.equal(requirementSourceSlide.rows.length, 8);

const swimlaneFlowSlide = slides.find((slide) => slide.title === "使用者情境與主要流程");
assert.equal(swimlaneFlowSlide.type, "swimlaneFlow");
assert.deepEqual(Array.from(swimlaneFlowSlide.lanes, (lane) => lane[0]), ["顧客", "系統", "金流系統", "門市人員"]);

const functionalCardsSlide = slides.find((slide) => slide.title === "功能需求分析");
assert.equal(functionalCardsSlide.type, "functionalCards");
assert.equal(functionalCardsSlide.modules.length, 10);

const nonFunctionalSlide = slides.find((slide) => slide.title === "非功能需求分析");
assert.equal(nonFunctionalSlide.type, "table");
assert.equal(nonFunctionalSlide.splitRows, true);
assert.equal(nonFunctionalSlide.rows.length, 8);

const requirementDeliverableSlide = slides.find((slide) => slide.title === "系統需求書交付內容");
assert.equal(requirementDeliverableSlide.type, "table");
assert.equal(requirementDeliverableSlide.splitRows, true);

const handoffSlide = slides.find((slide) => slide.title === "從需求分析接續系統設計");
assert.equal(handoffSlide.type, "handoffMap");
assert.ok(handoffSlide.rows.some(([need, design]) => need === "顧客需要上傳模型" && design.includes("File Storage")));

const designSpecSlide = slides.find((slide) => slide.title === "系統設計規格書內容總覽");
assert.equal(designSpecSlide.type, "designSpecOverview");
assert.ok(
  designSpecSlide.items.some((item) => item.title === "API / 權限 / 異常規則"),
  "Design spec overview should include API, permission, and exception rules"
);

const architectureSlide = slides.find((slide) => slide.title === "系統架構圖");
assert.equal(architectureSlide.type, "architecture");
assert.equal(architectureSlide.layout, "interaction-map", "Architecture slide should show module interactions");
assert.ok(architectureSlide.flows.length >= 8, "Architecture slide should include interaction flows between modules");

const moduleIOSlide = slides.find((slide) => slide.title === "模組設計與輸入輸出");
assert.equal(moduleIOSlide.type, "moduleIO");
assert.ok(
  moduleIOSlide.modules.some((module) => module.name === "模型檢查模組" && module.input.includes("STL / OBJ")),
  "Module IO slide should include the model-checking module input"
);
assert.ok(
  moduleIOSlide.modules.some((module) => module.name === "智慧估價模組" && module.output.includes("預估價格")),
  "Module IO slide should include the quote module output"
);

const interfaceDesignSlide = slides.find((slide) => slide.title === "介面設計");
assert.equal(interfaceDesignSlide.type, "interfaceDesign");
assert.deepEqual(
  Array.from(interfaceDesignSlide.screens, (screen) => screen.src),
  ["./asset/模型市集.png", "./asset/模型製作.png", "./asset/自己的倉庫.png", "./asset/後台.png"]
);

const flowDesignSlide = slides.find((slide) => slide.title === "流程設計");
assert.equal(flowDesignSlide.type, "flowDesign");
assert.deepEqual(
  Array.from(flowDesignSlide.steps, (step) => step.src),
  ["./asset/1.png", "./asset/2.png", "./asset/3.png", "./asset/4.png"]
);

const erdSlide = slides.find((slide) => slide.title === "ERD / 資料表關聯");
assert.equal(erdSlide.image?.src, "./asset/erd-data-model.svg", "Slide 15 should embed the ERD image asset");
assert.ok(fs.existsSync(new URL("../asset/erd-data-model.svg", import.meta.url)), "Missing ERD image asset");
assert.ok(fs.existsSync(new URL("../asset/erd-data-model.png", import.meta.url)), "Missing ERD PNG export");

for (const imagePath of [
  "../01/圖片/1_3D列印機.png",
  "../01/圖片/蝦皮3D列印.png",
  "../01/圖片/系統功能規劃截圖_2.png",
  "../01/圖片/時程規畫表.png",
  "../01/圖片/蝦皮店到店圖片.png",
  "../01/圖片/7-11.jpg",
  "../asset/模型市集.png",
  "../asset/模型製作.png",
  "../asset/自己的倉庫.png",
  "../asset/後台.png",
  "../asset/1.png",
  "../asset/2.png",
  "../asset/3.png",
  "../asset/4.png",
  "../asset/5.png",
  "../asset/使用者回味/螢幕擷取畫面 2026-05-22 220617_0.png",
  "../asset/使用者回味/螢幕擷取畫面 2026-05-22 220948_0.png"
]) {
  assert.ok(fs.existsSync(new URL(imagePath, import.meta.url)), `Missing slide image asset: ${imagePath}`);
}

const planningBackgroundSlide = slides.find((slide) => slide.title === "系統規劃：專案背景");
assert.equal(planningBackgroundSlide.type, "planningBackground");
assert.ok(planningBackgroundSlide.solution.includes("不需要買機器"));

const planningScopeSlide = slides.find((slide) => slide.title === "系統功能規劃");
assert.equal(planningScopeSlide.type, "planningScope");
assert.equal(planningScopeSlide.image.src, "./01/圖片/系統功能規劃截圖_2.png");
assert.match(cssSource, /\.planning-scope-image img[\s\S]*object-fit: contain/, "Planning scope image should show the full screenshot without cropping");
assert.match(cssSource, /\.planning-scope-layout[\s\S]*0\.7fr[\s\S]*0\.3fr/, "Planning scope slide should prioritize the planning screenshot");

const scheduleSlide = slides.find((slide) => slide.title === "我們怎麼一步一步把它做出來");
assert.equal(scheduleSlide.type, "planningSchedule");
assert.equal(scheduleSlide.image.src, "./01/圖片/時程規畫表.png");
assert.equal(scheduleSlide.phases.length, 5);

const challengeSlide = slides.find((slide) => slide.title === "現行挑戰與應對");
assert.equal(challengeSlide.type, "planningChallenges");
assert.equal(challengeSlide.challenges.length, 3);
assert.match(cssSource, /\.planning-challenge-grid article\.has-media[\s\S]*grid-column: span 2/, "Challenge slide should make the image-backed challenge the primary visual area");
assert.match(cssSource, /\.challenge-images img[\s\S]*height: 100%/, "Challenge images should be large enough to act as the main visual");

const prototypeSlide = slides.find((slide) => slide.title === "介面原型與 Demo");
assert.equal(prototypeSlide.type, "prototype");
assert.deepEqual(
  Array.from(prototypeSlide.screens, (screen) => screen.src),
  [
    "./asset/模型市集.png",
    "./asset/1.png",
    "./asset/2.png",
    "./asset/3.png",
    "./asset/4.png",
    "./asset/5.png",
    "./asset/後台.png"
  ]
);

const feedbackSlide = slides.find((slide) => slide.title === "使用者回饋與版本更新");
assert.equal(feedbackSlide.type, "feedbackUpdate");
assert.deepEqual(
  Array.from(feedbackSlide.items, (item) => item.src),
  [
    "./asset/使用者回味/螢幕擷取畫面 2026-05-22 220617_0.png",
    "./asset/使用者回味/螢幕擷取畫面 2026-05-22 220948_0.png"
  ]
);
assert.ok(feedbackSlide.items[0].update.includes("現場付款"));
assert.ok(feedbackSlide.items[1].update.includes("AI 模型生成"));

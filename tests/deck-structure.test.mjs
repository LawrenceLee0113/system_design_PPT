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

assert.equal(slides.length, 21, `Expected 21 slides after deleting page 8, got ${slides.length}`);
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

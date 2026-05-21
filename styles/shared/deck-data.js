window.SDLC_DECK = {
  title: "系統流程開發的五個階段",
  subtitle: "從一個「線上訂餐系統」的例子，看見需求如何變成可上線、可維護的資訊系統。",
  tags: ["Planning", "Analysis", "Design", "Implementation", "Maintenance"],
  sources: [
    {
      name: "Workforce LibreTexts",
      url: "https://workforce.libretexts.org/Bookshelves/Information_Technology/Information_Systems/Information_Systems_for_Business/02%3A_Information_Systems_for_Strategic_Advantage/10%3A_Information_Systems_Development/10.02%3A_Systems_Development_Life_Cycle_%28SDLC%29_Model",
      note: "Systems Development Life Cycle (SDLC) Model：列出 Planning、Analysis、Design、Implementation、Maintenance 五階段。"
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/system-design/system-development-life-cycle/",
      note: "System Development Life Cycle：補充 SDLC 各階段的目的與活動，並說明不同階段可依組織拆分。"
    }
  ],
  stages: [
    {
      no: "01",
      zh: "規劃",
      en: "Planning",
      short: "確認值得做",
      title: "規劃：先判斷問題值不值得被系統化",
      body: "規劃階段會確認專案目標、範圍、預算、時程、利害關係人與可行性。它回答的不是「畫面長怎樣」，而是「為什麼現在要做」。",
      task: "評估線上訂餐是否能降低電話尖峰、減少漏單，並提高會員回購。",
      output: "專案章程、初步範圍、成本效益估算、風險清單、Go / No-Go 決策。",
      artifact: "metric",
      accent: "teal"
    },
    {
      no: "02",
      zh: "分析",
      en: "Analysis",
      short: "確認要做什麼",
      title: "分析：把「大家覺得」變成可驗收需求",
      body: "分析階段會訪談使用者與業務單位，理解現行流程、痛點、資料需求、權限與例外狀況。此時通常還不寫程式。",
      task: "訪談顧客、店員、店長與客服，整理下單、改單、缺貨、退款的實際流程。",
      output: "需求規格書、使用者故事、資料欄位、驗收條件、流程例外清單。",
      artifact: "flow",
      accent: "blue"
    },
    {
      no: "03",
      zh: "設計",
      en: "Design",
      short: "確認怎麼做",
      title: "設計：把需求轉成工程團隊可建造的藍圖",
      body: "設計階段會決定系統架構、資料庫、介面、API、權限、報表與整合方式。好的設計會讓後續實作少猜測、少返工。",
      task: "設計訂單服務、菜單服務、付款串接、門市後台與會員資料流。",
      output: "系統設計文件、ERD、API 規格、Wireframe、權限矩陣、測試策略草案。",
      artifact: "architecture",
      accent: "coral"
    },
    {
      no: "04",
      zh: "實作",
      en: "Implementation",
      short: "做出可用系統",
      title: "實作：把設計文件變成可測試、可導入的系統",
      body: "實作階段包含寫程式、整合元件、測試、資料轉換、使用者訓練與上線準備。許多模型會把測試或部署拆出來，但五階段版本常放在實作內處理。",
      task: "完成下單流程、付款回呼、門市接單頁，並進行單元測試、整合測試與使用者驗收。",
      output: "可運行系統、測試報告、訓練文件、資料移轉腳本、上線檢查表。",
      artifact: "code",
      accent: "gold"
    },
    {
      no: "05",
      zh: "維護",
      en: "Maintenance",
      short: "讓系統持續可靠",
      title: "維護：讓系統在真實世界裡繼續健康運作",
      body: "維護階段會處理錯誤回報、修補、備份、效能、安全更新與新功能優先順序。它也會把營運回饋帶回下一輪規劃。",
      task: "上線後監控付款失敗率、熱門時段效能、門市缺貨同步與客服回報。",
      output: "版本更新、問題單、SLA 報表、備份紀錄、下一版需求池。",
      artifact: "health",
      accent: "violet"
    }
  ]
};

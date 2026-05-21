window.BLUEPRINT_LAYOUTS = {
  strategy: {
    styleName: "策略提案藍圖",
    deckTitle: "Growth Strategy Blueprint",
    title: "市場成長策略提案",
    subtitle: "用一套可複用的藍圖排版，呈現背景、洞察、選項、路線圖與決策請求。",
    tags: ["Market", "Choice", "Roadmap", "Decision"],
    slides: [
      {
        type: "cover",
        eyebrow: "Strategy Blueprint",
        title: "市場成長策略提案",
        body: "從外部趨勢、內部能力與投資優先級，推導下一階段的成長打法。",
        notes: ["目標市場", "價值主張", "投資節奏", "決策請求"]
      },
      {
        type: "context",
        eyebrow: "Situation",
        title: "成長不是缺機會，而是缺一套取捨方式",
        body: "在資源有限的情況下，策略簡報的重點不是列出所有可能性，而是讓團隊看見哪幾件事值得先做。",
        proof: [
          ["市場訊號", "需求正在從單點功能轉向整體解決方案。"],
          ["內部限制", "銷售、產品與交付節奏需要重新對齊。"],
          ["決策缺口", "目前缺少衡量投資回收與執行風險的共同語言。"]
        ]
      },
      {
        type: "matrix",
        eyebrow: "Choice Map",
        title: "用吸引力與可執行性篩選策略選項",
        axes: ["市場吸引力", "可執行性"],
        items: [
          ["高", "高", "優先投資：企業方案升級"],
          ["高", "低", "策略觀察：海外通路合作"],
          ["低", "高", "效率優化：既有客戶加購"],
          ["低", "低", "暫緩：低毛利客製案"]
        ]
      },
      {
        type: "roadmap",
        eyebrow: "Roadmap",
        title: "把策略拆成三個可驗證階段",
        phases: [
          ["Q1", "定義核心客群與商業假設"],
          ["Q2", "建立方案包裝與銷售素材"],
          ["Q3", "擴大試點並建立成功案例"],
          ["Q4", "複製到第二個市場區隔"]
        ]
      },
      {
        type: "metrics",
        eyebrow: "Scorecard",
        title: "用四個指標管理策略是否走在正軌",
        metrics: [
          ["40%", "高價值線索占比"],
          ["2.5x", "方案型客單價"],
          ["75 天", "平均銷售週期"],
          ["18%", "試點轉正式合約"]
        ]
      },
      {
        type: "closing",
        eyebrow: "Decision",
        title: "今天需要的決策：先集中火力做一個可複製成長模組",
        body: "選定一個優先市場、三個試點客戶與一組跨部門工作節奏，讓策略在 90 天內產生可觀察結果。",
        cta: "核准 90 天試點計畫"
      }
    ]
  },
  operations: {
    styleName: "營運儀表藍圖",
    deckTitle: "Operations Control Blueprint",
    title: "營運改善與控制塔",
    subtitle: "用儀表板、流程圖、風險熱點與責任矩陣，讓營運問題能被看見、被追蹤、被改善。",
    tags: ["KPI", "Process", "Risk", "Owner"],
    slides: [
      {
        type: "cover",
        eyebrow: "Operations Blueprint",
        title: "營運改善與控制塔",
        body: "把日常營運從零散回報，轉成一套能追蹤瓶頸、責任與改善進度的共同看板。",
        notes: ["KPI 現況", "流程瓶頸", "風險控管", "責任節奏"]
      },
      {
        type: "metrics",
        eyebrow: "Operating Pulse",
        title: "先用一頁看清目前營運健康度",
        metrics: [
          ["92%", "準時交付率"],
          ["3.8 天", "平均處理時間"],
          ["14 件", "逾期案件"],
          ["-8%", "本月返工率改善"]
        ]
      },
      {
        type: "process",
        eyebrow: "Process Map",
        title: "瓶頸通常出現在交接點，而不是單一工作站",
        steps: [
          ["收件", "資料完整性檢查"],
          ["分派", "依類型與負載派工"],
          ["處理", "執行、追蹤、回報"],
          ["覆核", "品質檢查與異常處置"],
          ["結案", "通知與知識沉澱"]
        ]
      },
      {
        type: "risk",
        eyebrow: "Risk Board",
        title: "用熱點圖管理最容易拖慢節奏的風險",
        risks: [
          ["高", "高", "關鍵人員負載過高"],
          ["高", "中", "資料欄位不完整"],
          ["中", "高", "跨部門回覆延遲"],
          ["中", "中", "例外案件缺少標準"]
        ]
      },
      {
        type: "matrix",
        eyebrow: "Ownership",
        title: "每個改善項都需要清楚的負責人與節奏",
        axes: ["影響程度", "推動難度"],
        items: [
          ["高", "低", "立即推動：逾期案件每日站會"],
          ["高", "高", "專案推動：表單與資料規格重整"],
          ["低", "低", "自動化：例行通知範本"],
          ["低", "高", "暫緩：低頻例外客製流程"]
        ]
      },
      {
        type: "closing",
        eyebrow: "Cadence",
        title: "讓營運改善變成每週節奏，而不是月底救火",
        body: "固定檢視 KPI、逾期清單、阻塞原因與本週承諾，讓團隊從被動回報轉為主動控制。",
        cta: "建立每週營運控制塔"
      }
    ]
  },
  product: {
    styleName: "產品路線藍圖",
    deckTitle: "Product Roadmap Blueprint",
    title: "產品路線圖與上市規劃",
    subtitle: "用藍圖式排版呈現使用者旅程、功能架構、里程碑、上市檢查與成效追蹤。",
    tags: ["User", "Feature", "Launch", "Learning"],
    slides: [
      {
        type: "cover",
        eyebrow: "Product Blueprint",
        title: "產品路線圖與上市規劃",
        body: "把產品方向從功能清單，轉成圍繞使用者任務、上市節奏與學習迴圈的計畫。",
        notes: ["使用者旅程", "功能架構", "上市節奏", "學習指標"]
      },
      {
        type: "journey",
        eyebrow: "User Journey",
        title: "產品價值來自幫使用者更快完成關鍵任務",
        moments: [
          ["發現", "理解痛點與選擇理由"],
          ["啟用", "完成第一個成功任務"],
          ["養成", "把功能放入日常流程"],
          ["擴展", "邀請團隊或使用進階能力"]
        ]
      },
      {
        type: "process",
        eyebrow: "Feature Architecture",
        title: "功能要被組成一條清楚的使用路徑",
        steps: [
          ["入口", "任務建立與資料匯入"],
          ["核心", "協作、追蹤、狀態管理"],
          ["智慧", "提醒、建議、例外偵測"],
          ["輸出", "報表、交付物、整合"]
        ]
      },
      {
        type: "roadmap",
        eyebrow: "Release Plan",
        title: "以可學習的版本節奏推出，而不是一次做完",
        phases: [
          ["Alpha", "內部驗證核心任務"],
          ["Beta", "邀請 8-12 個真實客戶試用"],
          ["Launch", "建立銷售素材與支援流程"],
          ["Scale", "依使用數據擴充自動化能力"]
        ]
      },
      {
        type: "metrics",
        eyebrow: "Launch Metrics",
        title: "上市後用行為指標判斷產品是否真的被採用",
        metrics: [
          ["62%", "啟用完成率"],
          ["4.1 次", "每週核心任務"],
          ["38%", "團隊邀請率"],
          ["22%", "30 天留存提升"]
        ]
      },
      {
        type: "closing",
        eyebrow: "Next Build",
        title: "下一步不是加更多功能，而是驗證最短成功路徑",
        body: "先讓目標使用者在 10 分鐘內完成第一個高價值任務，再決定要擴充哪些進階能力。",
        cta: "鎖定 Beta 版本範圍"
      }
    ]
  }
};

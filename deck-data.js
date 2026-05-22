window.PRESENTATION_DECK = {
  styleName: "流程藍圖風",
  title: "超商型智慧 3D 列印服務系統",
  subtitle: "結合線上上傳、智慧估價、列印排程與門市取件之系統分析與設計",
  tags: [],
  cornerMeta: {
    topLeft: ["課程：系統分析與設計", "組別：第十二組"],
    bottomRight: "日期：2026/05/25"
  },
  coverMeta: [
    "李庭愷：程式設計師",
    "徐啓將：PM",
    "許睿恩：使用者",
    "簡柏文：系統分析師"
  ],
  coverNodes: ["模型取得", "上傳", "估價", "排程", "追蹤", "取件"],
  coreLabel: "3D Print",
  coreTitle: "超商取件服務",
  slides: [
    {
      type: "cover",
      eyebrow: "System Analysis & Design",
      title: "超商型智慧 3D 列印服務系統",
      body: "結合線上上傳、智慧估價、列印排程與門市取件之系統分析與設計"
    },
    {
      type: "lifecycle",
      eyebrow: "SDLC Scope",
      title: "系統開發生命週期與本專題範圍",
      steps: ["系統規劃", "系統需求分析", "系統設計", "系統建置與測試", "系統上線與維護"],
      focus: "本專題以 SDLC 五階段安排報告順序：先說明規劃與需求，再用需求書推導設計，最後展示原型、測試與維運方向。",
      columns: ["SDLC 階段", "本專題工作"],
      rows: [
        ["系統規劃", "背景動機、使用者案例、痛點、服務定位與專案分工"],
        ["系統需求分析", "Use Case、主要流程、功能需求與非功能需求"],
        ["系統設計", "架構圖、ERD、資料表關聯與訂單狀態設計"],
        ["系統建置與測試", "介面原型、Demo 流程、異常流程與驗收測試"],
        ["系統上線與維護", "維運交付、客服處理、版本擴充與未來發展"]
      ]
    },
    {
      type: "stageDivider",
      eyebrow: "Before SDLC",
      title: "題目發想與課程目標",
      previousDeliverable: "課程主題與小組討論",
      currentWork: ["確認服務問題與使用情境", "定義系統範圍與專題定位", "建立角色分工與規劃交付"],
      nextDeliverable: "題目方向與初步報告架構",
      handoff: "這一段用來說明小組為什麼選擇超商型 3D 列印服務，以及課程報告要呈現的分析方向。"
    },
    {
      type: "storyCase",
      eyebrow: "User Story 01",
      title: "案例 01：咖啡店老闆的量勺需求",
      persona: "咖啡店老闆",
      problem: "咖啡豆量勺不見了，臨時需要補一個。",
      market: "上網購買不只等待時間長，價格也不一定划算。",
      print: "如果能取得模型檔，就能直接列印，快速滿足店內營運需求。",
      takeaway: "3D 列印適合解決小型、臨時、單件式的補充需求，讓使用者不必等物流或大量採購。",
      requirementTags: ["快速下單", "自動估價", "附近門市取件", "訂單進度追蹤"],
      images: [
        { src: "./asset/demo1_shopee.png", label: "網購替代方案" },
        { src: "./asset/demo1_3dprint.png", label: "3D 列印解法" }
      ]
    },
    {
      type: "storyCase",
      eyebrow: "User Story 02",
      title: "案例 02：桌球使用者的客製收納",
      persona: "桌球使用者",
      problem: "想要裝桌球的器具，但市面上常見產品通常只放兩顆。",
      market: "自己的使用習慣是一次帶 8 顆，現成商品不符合需求。",
      print: "使用者可上傳自行設計或網路取得的合法模型檔，系統協助檢查、估價並安排列印。",
      takeaway: "3D 列印能補足市售商品規格不足的問題，讓少量客製化需求也有實際可行的解法。",
      requirementTags: ["合法模型來源", "模型檢查", "智慧估價", "列印排程"],
      images: [
        { src: "./asset/demo2_shopee.png", label: "市售商品限制" },
        { src: "./asset/demo2_3dprint.png", label: "客製列印解法" }
      ]
    },
    {
      type: "table",
      eyebrow: "Pain Points",
      title: "使用者痛點分析",
      note: "本系統把使用者痛點轉換為後續需求分析的依據，例如價格不透明對應智慧估價，取件不方便對應門市取件。",
      columns: ["痛點", "目前問題", "系統改善方向"],
      highlightColumn: 2,
      rows: [
        ["3D 列印機購置成本高", "個人或小店家不一定負擔得起設備與維護成本", "使用服務平台完成列印，不需自行購買設備"],
        ["不會操作 3D 列印機", "參數設定複雜、門檻高", "系統自動檢查模型與提供列印選項"],
        ["價格與等待時間不清楚", "報價不透明，也無法掌握列印進度", "依材質、體積、時間自動估價，並提供訂單狀態追蹤"],
        ["取件不方便", "需到指定工作室或店家", "可選擇附近門市取件"],
        ["不知道模型能不能印", "使用者不熟悉格式、尺寸、破面等列印限制", "系統提供模型檢查與錯誤提示"],
        ["模型內容可能有風險", "可能涉及侵權、違禁品或危險物品", "加入平台規範與人工審核機制"]
      ]
    },
    {
      type: "narrative",
      eyebrow: "Planning",
      title: "專題背景與動機",
      body: "一般使用者即使有小型客製化需求，也常因設備成本、操作門檻與取件不便而難以使用 3D 列印服務。本專題將 3D 列印流程平台化，讓使用者能像使用超商影印一樣完成上傳、估價、付款、列印與取件。",
      points: [
        ["服務機會", "小量、臨時、客製化物件不一定適合大量採購或等待物流。"],
        ["系統切入", "以線上平台串接模型檢查、智慧估價、門市列印與取件通知。"],
        ["專題範圍", "聚焦系統分析、需求定義、系統設計與可操作原型，不宣稱已完成正式商業部署。"]
      ]
    },
    {
      type: "tableWithNote",
      eyebrow: "Team Roles",
      title: "組員角色與分工",
      note: "角色分工用來模擬真實系統開發流程，讓需求、設計、建置與測試都有明確負責者與交付產物。",
      columns: ["組員", "角色", "負責內容", "主要產物"],
      rows: [
        ["李庭愷", "程式設計師", "系統架構、資料庫設計、介面原型、Demo 與技術規格", "系統原型、資料庫設計"],
        ["徐啓將", "PM", "專案目標、範圍、時程、可行性與風險控管", "系統規劃書"],
        ["許睿恩", "使用者", "痛點、需求、使用情境與驗收標準", "使用者需求清單"],
        ["簡柏文", "系統分析師", "需求整理、Use Case、DFD、ERD 與流程分析", "系統需求書、分析圖"]
      ]
    },
    {
      type: "stageDivider",
      eyebrow: "SDLC 01",
      title: "系統規劃",
      previousDeliverable: "題目方向與初步報告架構",
      currentWork: ["整理專案背景與市場痛點", "規劃平台功能範圍與服務流程", "安排時程、風險與初期營運策略"],
      nextDeliverable: "系統規劃書",
      handoff: "這一階段先回答為什麼要做、要服務誰、系統大致包含哪些功能，以及專案要如何一步一步完成。"
    },
    {
      type: "planningBackground",
      eyebrow: "System Planning",
      title: "系統規劃：專案背景",
      intro: "3D 列印有客製化與小量製作的優勢，但一般使用者常被設備、操作、代印流程與模型設計門檻擋住。",
      painPoints: [
        {
          title: "設備門檻高",
          body: "3D 印表機動輒數千到數萬元，還需要維護、耗材與列印參數經驗。",
          image: { src: "./01/圖片/1_3D列印機.png", alt: "3D 列印機設備" }
        },
        {
          title: "代印流程分散",
          body: "目前多靠工作室或電商賣家，詢價、付款、物流與售後分散，等待時間也較長。",
          image: { src: "./01/圖片/蝦皮3D列印.png", alt: "蝦皮 3D 列印搜尋結果" }
        },
        {
          title: "模型設計不易",
          body: "免費模型雖多，但一般使用者不一定知道如何挑選、修改或判斷模型是否適合列印。"
        }
      ],
      solution: "本系統規劃一個讓使用者不需要買機器、不需要會建模，也能透過 App 挑選或上傳模型、選擇附近便利商店、付款後等候通知取件的平台。",
      creatorValue: "平台同時提供 3D 創作者曝光與收入來源，讓模型供給與列印服務能逐步形成循環。"
    },
    {
      type: "planningScope",
      eyebrow: "Planning Document",
      title: "系統功能規劃",
      intro: "系統規劃書先定義平台要支援哪些角色與功能，讓後續需求分析可以把它拆成 Use Case、資料需求與驗收條件。",
      image: { src: "./01/圖片/系統功能規劃截圖_2.png", alt: "系統功能規劃截圖" },
      scopes: [
        ["使用者端", "瀏覽模型、上傳模型、選擇材質品質、估價付款、查看訂單與取件通知。"],
        ["創作者端", "上架模型、管理作品、查看使用紀錄與收益，增加平台模型供給。"],
        ["門市與後台", "接收列印任務、管理設備材料、更新狀態、處理異常與取件確認。"],
        ["核心系統", "模型檢查、智慧估價、訂單狀態、金流串接、通知與資料紀錄。"]
      ],
      takeaway: "這張圖的重點不是畫面本身，而是先界定系統邊界：哪些功能屬於第一版，哪些會留到後續擴充。"
    },
    {
      type: "planningSchedule",
      eyebrow: "Schedule Planning",
      title: "我們怎麼一步一步把它做出來",
      intro: "時程規劃把專題拆成可交付的階段，確保需求、設計、開發、硬體整合與測試不會同時混在一起。",
      image: { src: "./01/圖片/時程規畫表.png", alt: "時程規劃表" },
      phases: [
        ["需求收斂", "整理使用者痛點、服務定位與核心流程，形成系統規劃書。"],
        ["介面設計", "製作顧客端與後台端原型，確認主要操作動線。"],
        ["系統開發", "依需求與設計規格建置前端、後端、資料庫與核心模組。"],
        ["硬體整合", "評估門市端列印設備、材料庫存與列印任務管理方式。"],
        ["測試上線", "驗證下單、付款、列印、通知、取件與異常流程。"]
      ],
      takeaway: "系統規劃階段先排出工作節奏，後面進入需求分析與系統設計時，才知道每個交付物要銜接到哪一個階段。"
    },
    {
      type: "planningChallenges",
      eyebrow: "Risk Planning",
      title: "現行挑戰與應對",
      intro: "系統規劃也要先辨識風險，避免後續需求與設計只處理理想流程，沒有處理真實營運會遇到的限制。",
      challenges: [
        {
          title: "取件通路限制",
          problem: "蝦皮店到店多為無人店，店員無法協助確認成品品質、包裝狀態與置物格存放流程。",
          response: "改以便利商店作為主要取件場景，利用 24 小時有人、店數密集、使用者熟悉的特性降低取件門檻。",
          images: [
            { src: "./01/圖片/蝦皮店到店圖片.png", alt: "蝦皮店到店門市" },
            { src: "./01/圖片/7-11.jpg", alt: "便利商店取件場景" }
          ]
        },
        {
          title: "平台冷啟動",
          problem: "初期創作者少會造成模型少，模型少又會讓使用者少，最後導致創作者缺乏收入誘因。",
          response: "上線前先招募種子創作者，提供初期固定獎勵或曝光資源，建立第一批可列印模型供給。"
        },
        {
          title: "成品質感落差",
          problem: "一般使用者可能不了解 FDM 列印的層紋、支撐痕跡與材料質感，收到成品後容易與期待不同。",
          response: "在選購與估價流程加入層高、材料與實體成品照片說明，讓使用者在付款前建立合理預期。"
        }
      ],
      takeaway: "這些挑戰會回到後面的需求分析與設計，例如取件流程、創作者機制、介面提示與異常處理都需要被系統化。"
    },
    {
      type: "stageDivider",
      eyebrow: "SDLC 02",
      title: "系統需求分析",
      previousDeliverable: "系統規劃書",
      currentWork: ["確認主要使用者與外部系統", "整理功能需求與非功能需求", "建立主要流程與驗收條件"],
      nextDeliverable: "系統需求書",
      handoff: "因為已有系統規劃書，分析師才能把痛點與服務範圍轉成可開發、可測試的需求。"
    },
    {
      type: "useCase",
      eyebrow: "Requirement Analysis",
      title: "Use Case 圖與角色互動",
      description: "本系統依照不同使用角色分配操作權限，並串接金流與通知系統完成訂單流程。",
      layout: "three-column-grid",
      systemBoundary: "超商型智慧 3D 列印服務系統",
      leftActors: [
        { id: "customer", name: "顧客", icon: "person", groupId: "customer" },
        { id: "storeStaff", name: "門市人員", icon: "store", groupId: "store" },
        { id: "support", name: "客服人員", icon: "headset", groupId: "support" },
        { id: "admin", name: "管理員", icon: "gear", groupId: "admin" }
      ],
      externalSystems: [
        { id: "paymentGateway", name: "金流系統", action: "付款確認" },
        { id: "notificationSystem", name: "通知系統", action: "發送通知" }
      ],
      useCaseGroups: [
        {
          id: "customer",
          actorId: "customer",
          label: "顧客相關",
          items: [
            { id: "login", label: "註冊 / 登入" },
            { id: "uploadModel", label: "上傳 3D 模型" },
            { id: "viewQuote", label: "查看估價" },
            { id: "createOrder", label: "建立訂單" },
            { id: "queryOrder", label: "查詢訂單" },
            { id: "pickup", label: "取件" }
          ]
        },
        {
          id: "store",
          actorId: "storeStaff",
          label: "門市人員相關",
          items: [
            { id: "viewPrintQueue", label: "查看待列印訂單" },
            { id: "updatePrintStatus", label: "更新列印狀態" },
            { id: "confirmPickup", label: "確認取件" }
          ]
        },
        {
          id: "support",
          actorId: "support",
          label: "客服人員相關",
          items: [
            { id: "handlePrintFailure", label: "處理列印失敗" },
            { id: "handleRefund", label: "處理退款" }
          ]
        },
        {
          id: "admin",
          actorId: "admin",
          label: "管理員相關",
          items: [
            { id: "manageStores", label: "管理門市" },
            { id: "managePrinters", label: "管理設備" },
            { id: "manageMaterials", label: "管理材料" },
            { id: "managePriceRules", label: "管理價格規則" }
          ]
        }
      ],
      links: [
        { from: "customer", to: "customer", type: "actor" },
        { from: "storeStaff", to: "store", type: "actor" },
        { from: "support", to: "support", type: "actor" },
        { from: "admin", to: "admin", type: "actor" },
        { from: "payment", to: "paymentGateway", type: "external" },
        { from: "notify", to: "notificationSystem", type: "notify" }
      ],
      note: "權限邊界：不同角色只能操作自己負責的功能，例如門市人員只能更新列印與取件狀態，不能修改價格規則；顧客只能查看自己的訂單。"
    },
    {
      type: "swimlane",
      eyebrow: "Main Flow",
      title: "使用者情境與主要流程",
      story: "小明是設計科學生，需要列印一個小型模型。他透過本系統上傳模型，選擇 PLA 材質與附近超商門市，系統自動估價並建立訂單。列印完成後，小明收到通知並到超商取件。",
      lanes: [
        ["使用者", ["註冊 / 登入", "上傳 3D 模型", "選擇材質與品質", "付款", "取件"]],
        ["系統", ["檢查模型", "自動估價", "建立訂單", "發送通知", "更新狀態"]],
        ["金流系統", ["確認付款", "回傳付款結果"]],
        ["門市", ["接收訂單", "執行列印", "確認取件"]]
      ]
    },
    {
      type: "requirementMatrix",
      eyebrow: "Requirement Spec",
      title: "功能需求與非功能需求",
      functional: [
        ["使用者管理", "註冊、登入、會員資料管理"],
        ["模型上傳與檢查", "上傳 STL / OBJ，檢查格式、尺寸與可列印性"],
        ["智慧估價", "依材質、體積、列印時間與品質估算價格"],
        ["付款與退款管理", "串接第三方金流，列印失敗或取消時處理退款"],
        ["門市端管理", "門市查看待列印訂單並更新列印狀態"],
        ["後台與審核機制", "管理材料、價格、設備，並審核高風險模型"]
      ],
      nonFunctional: [
        ["安全性", "檔案上傳限制、角色權限、付款資料保護"],
        ["效能", "模型檢查與估價需在合理時間內完成"],
        ["可用性", "使用者能依步驟完成上傳、付款與取件"],
        ["可靠性", "列印失敗時可追蹤原因並進入補印或退款流程"],
        ["擴充性", "未來可新增門市、材料、設備與模型市集"]
      ]
    },
    {
      type: "stageDivider",
      eyebrow: "SDLC 03",
      title: "系統設計",
      previousDeliverable: "系統需求書",
      currentWork: ["依需求設計系統架構與模組", "定義資料表與資料關聯", "規劃訂單狀態與例外狀態"],
      nextDeliverable: "系統設計規格書",
      handoff: "系統設計不是憑空畫圖，而是根據需求書定義的功能、角色、流程與資料需求往下設計。"
    },
    {
      type: "designSpecOverview",
      eyebrow: "Design Spec",
      title: "系統設計規格書內容總覽",
      intro: "系統設計規格書是程式設計師把需求書轉成可開發規格的文件，目標是讓前端、後端、資料庫與測試人員都能依同一套設計進行建置。",
      items: [
        { title: "架構設計", body: "定義顧客端、後端 API、核心服務、外部服務、門市端與資料儲存的分層關係。" },
        { title: "模組設計", body: "拆分模型檢查、智慧估價、訂單管理、列印排程、通知與後台管理等模組。" },
        { title: "資料庫設計", body: "設計 User、Order、ModelFile、Payment、Store、Printer、Material 與狀態紀錄等資料表。" },
        { title: "介面設計", body: "規劃顧客端上傳、估價、付款、查詢訂單，以及門市端接單與更新狀態的操作畫面。" },
        { title: "流程設計", body: "定義正常下單流程、訂單狀態機，以及付款失敗、列印失敗、逾期未取等異常流程。" },
        { title: "API / 權限 / 異常規則", body: "定義前後端 API、角色可操作功能、錯誤訊息、例外狀態與退款處理規則。" }
      ],
      handoff: "交付給程式設計師時，這份規格書要能回答：要做哪些模組、資料怎麼流、畫面怎麼接 API、失敗時怎麼處理。"
    },
    {
      type: "architecture",
      eyebrow: "System Design",
      title: "系統架構圖",
      layout: "interaction-map",
      intro: "此圖強調各模組之間如何互動：使用者從前端送出需求，後端 API 負責協調模型檢查、估價、付款、排程、通知與資料儲存。",
      zones: [
        {
          title: "前端介面",
          nodes: [
            { id: "customerApp", title: "顧客端 Web / App", body: "模型市集、模型製作、自己的倉庫、訂單追蹤" },
            { id: "storePortal", title: "門市端 / 後台", body: "待列印訂單、設備狀態、材料庫存、取件確認" }
          ]
        },
        {
          title: "後端服務",
          nodes: [
            { id: "api", title: "API Server", body: "登入權限、請求驗證、流程協調、狀態更新" },
            { id: "modelCheck", title: "模型檢查模組", body: "格式、尺寸、破面、設備限制檢查" },
            { id: "quote", title: "智慧估價模組", body: "體積、材料、品質、時間與價格規則" },
            { id: "order", title: "訂單管理模組", body: "建立訂單、付款狀態、狀態歷程" },
            { id: "schedule", title: "列印排程模組", body: "設備分配、列印順序、故障轉單" },
            { id: "notify", title: "通知服務", body: "付款、列印完成、異常與逾期提醒" }
          ]
        },
        {
          title: "外部與資料層",
          nodes: [
            { id: "payment", title: "金流服務", body: "付款確認、退款處理" },
            { id: "database", title: "Database", body: "User、Order、Payment、Store、Printer、Material" },
            { id: "storage", title: "File Storage", body: "STL / OBJ 模型檔與檢查結果" }
          ]
        }
      ],
      flows: [
        ["顧客端", "API Server", "上傳模型 / 下單"],
        ["API Server", "模型檢查", "檢查檔案"],
        ["模型檢查", "檔案儲存", "存模型與檢查結果"],
        ["模型檢查", "智慧估價", "回傳尺寸與體積"],
        ["智慧估價", "訂單管理", "建立估價與訂單"],
        ["訂單管理", "金流服務", "付款確認"],
        ["訂單管理", "列印排程", "付款後排程"],
        ["列印排程", "門市端", "派送待列印任務"],
        ["門市端", "訂單管理", "更新列印 / 取件狀態"],
        ["訂單管理", "通知服務", "觸發付款、完成、異常通知"],
        ["API Server", "Database", "讀寫系統資料"]
      ],
      layers: [
        ["顧客端 Web / App", "模型上傳、材質選擇、估價、付款、訂單追蹤"],
        ["後端 API Server", "使用者管理、訂單管理、權限控管、流程協調"],
        ["核心服務模組", "模型檢查、智慧估價、列印排程、通知服務"],
        ["外部服務", "金流服務、簡訊 / Email / App 推播"],
        ["門市端 / 後台", "待列印訂單、設備狀態、材料與價格管理"],
        ["資料庫與檔案儲存", "結構化資料存 DB，3D 模型檔存 File Storage"]
      ],
      columns: ["模組", "設計重點"],
      rows: [
        ["模型檢查模組", "確認格式、大小、尺寸與基本可列印性"],
        ["智慧估價模組", "依材料、體積、時間與品質計算價格"],
        ["列印排程模組", "依門市設備狀態與訂單順序安排列印"],
        ["通知服務", "付款、列印完成、異常與逾期提醒"]
      ]
    },
    {
      type: "erd",
      eyebrow: "Data Design",
      title: "ERD / 資料表關聯",
      image: {
        src: "./asset/erd-data-model.svg",
        alt: "超商型智慧 3D 列印服務系統 ERD 圖"
      },
      note: "本圖以 Order 為核心資料表，串接使用者、模型檔、付款、門市、材料、通知與訂單狀態紀錄。",
      relations: [
        ["User", "1", "*", "Order"],
        ["Order", "1", "1", "ModelFile"],
        ["Order", "1", "1", "Payment"],
        ["Store", "1", "*", "Printer"],
        ["Store", "1", "*", "Order"],
        ["Order", "1", "*", "Notification"],
        ["Order", "1", "*", "OrderStatusLog"],
        ["Material", "1", "*", "Order"]
      ],
      tables: [
        ["OrderStatusLog", "記錄每次訂單狀態變更，支援客服查詢與異常追蹤"],
        ["Refund", "處理退款申請、退款狀態與退款原因"],
        ["Review", "記錄高風險模型的人工審核結果"],
        ["PriceRule", "管理材料、體積、時間與品質的估價規則"],
        ["StoreInventory", "記錄門市材料庫存與可用量"],
        ["PickupRecord", "記錄取件時間、門市人員與確認方式"]
      ]
    },
    {
      type: "moduleIO",
      eyebrow: "Module Design",
      title: "模組設計與輸入輸出",
      intro: "模組設計會把需求拆成可開發的程式單元，並明確定義每個模組需要的輸入資料、處理邏輯與輸出結果。",
      modules: [
        {
          name: "模型檢查模組",
          input: "STL / OBJ 模型檔、檔案大小、使用者選擇的列印品質",
          process: "檢查格式、尺寸、破面、設備限制與基本可列印性",
          output: "格式檢查結果、模型尺寸、體積、可列印狀態與錯誤提示"
        },
        {
          name: "智慧估價模組",
          input: "模型體積、材料種類、品質設定、支撐材料與預估列印時間",
          process: "依 PriceRule 計算材料費、時間成本與服務費",
          output: "預估價格、預估完成時間與可用門市建議"
        },
        {
          name: "訂單管理模組",
          input: "顧客資料、模型檔、估價結果、取件門市與付款狀態",
          process: "建立訂單、更新狀態、寫入 OrderStatusLog",
          output: "訂單編號、目前狀態、狀態歷程與客服查詢資料"
        },
        {
          name: "列印排程模組",
          input: "門市設備狀態、材料庫存、訂單優先序與列印時間",
          process: "分配可用印表機、安排列印順序、處理設備故障轉單",
          output: "列印任務、門市待辦清單、列印中 / 完成 / 失敗狀態"
        },
        {
          name: "通知與異常處理模組",
          input: "付款結果、列印狀態、退款狀態、逾期未取與高風險模型審核結果",
          process: "判斷通知時機、產生通知內容、觸發客服或退款流程",
          output: "付款通知、取件通知、異常通知、退款處理紀錄"
        }
      ],
      takeaway: "程式設計師可依照輸入 / 處理 / 輸出定義 API、資料表欄位、錯誤處理與測試案例。"
    },
    {
      type: "interfaceDesign",
      eyebrow: "Interface Design",
      title: "介面設計",
      intro: "介面設計把需求轉成可操作畫面，讓顧客端與後台端都能依照同一套流程完成模型管理、下單與門市管理。",
      screens: [
        { title: "模型市集", src: "./asset/模型市集.png", body: "使用者瀏覽可列印模型，作為上傳或下單入口。" },
        { title: "模型製作", src: "./asset/模型製作.png", body: "使用者建立或編輯模型，銜接後續模型檢查與估價。" },
        { title: "自己的倉庫", src: "./asset/自己的倉庫.png", body: "管理已上傳模型、列印紀錄與再次下單需求。" },
        { title: "後台", src: "./asset/後台.png", body: "門市或管理者查看訂單、設備、材料與營運狀態。" }
      ],
      takeaway: "這些畫面對應到前端路由、後端 API、權限角色與資料表欄位，是系統設計規格書的一部分。"
    },
    {
      type: "flowDesign",
      eyebrow: "Flow Design",
      title: "流程設計",
      intro: "流程設計示意使用者從模型取得、模型處理、訂單建立到後台管理的主要操作順序。",
      steps: [
        { label: "Step 1", title: "選擇或取得模型", src: "./asset/1.png", body: "從模型市集或既有模型進入服務流程。" },
        { label: "Step 2", title: "製作 / 編輯模型", src: "./asset/2.png", body: "完成模型內容後，準備送交系統檢查。" },
        { label: "Step 3", title: "管理模型與下單", src: "./asset/3.png", body: "在自己的倉庫管理檔案，選擇要列印的模型。" },
        { label: "Step 4", title: "後台接單與追蹤", src: "./asset/4.png", body: "後台查看訂單狀態，安排列印與取件通知。" }
      ],
      takeaway: "流程設計用來確認每一步都有對應畫面、API、資料表與狀態變更。"
    },
    {
      type: "stateMachine",
      eyebrow: "Order Logic",
      title: "訂單狀態機",
      normal: ["待檢查", "估價完成", "待付款", "已付款", "待門市接單", "列印中", "列印完成", "待取件", "已取件"],
      exceptions: ["模型不合格", "付款失敗", "列印失敗", "申請退款", "退款完成", "訂單取消", "逾期未取"],
      rule: "狀態機可避免流程混亂，例如未付款不能進入列印，列印失敗也不能直接變成已完成。"
    },
    {
      type: "stageDivider",
      eyebrow: "SDLC 04",
      title: "系統建置與測試",
      previousDeliverable: "系統設計規格書",
      currentWork: ["依設計製作操作原型", "驗證主要流程是否可用", "建立異常情境與驗收測試"],
      nextDeliverable: "軟體硬體建置測試計畫及結果",
      handoff: "因為已有設計規格書，程式設計師與測試人員才能依照架構、資料與狀態規則實作並驗證。"
    },
    {
      type: "prototype",
      eyebrow: "Prototype",
      title: "介面原型與 Demo",
      intro: "原型展示的目的不是只有畫面好看，而是驗證使用者是否能依照流程完成下單、付款、追蹤與取件。",
      screens: [
        { no: "01", title: "首頁", body: "服務入口與登入", src: "./asset/模型市集.png" },
        { no: "02", title: "上傳模型頁", body: "模型上傳、格式檢查", src: "./asset/1.png" },
        { no: "03", title: "材質與品質選擇頁", body: "使用者選擇列印條件", src: "./asset/2.png" },
        { no: "04", title: "自動估價頁", body: "解決價格不透明", src: "./asset/3.png" },
        { no: "05", title: "選擇取件門市頁", body: "解決取件不方便", src: "./asset/4.png" },
        { no: "06", title: "訂單狀態頁", body: "解決進度不透明", src: "./asset/5.png" },
        { no: "07", title: "後台排程頁", body: "門市管理待列印訂單", src: "./asset/後台.png" }
      ],
      priority: "這 7 個畫面對應使用者從服務入口、模型上傳、條件選擇、估價、門市選擇、訂單追蹤到後台排程的完整 Demo。"
    },
    {
      type: "exceptionTesting",
      eyebrow: "Testing",
      title: "異常流程與驗收測試",
      exceptions: [
        ["模型格式錯誤", "阻擋上傳並提示支援格式"],
        ["模型尺寸超出設備限制", "提示修改或更換門市設備"],
        ["付款失敗", "訂單維持待付款，不進入列印"],
        ["門市設備故障", "重新排程或轉到其他門市"],
        ["列印失敗", "通知客服與顧客，可重新列印或退款"],
        ["高風險模型", "進入人工審核"]
      ],
      tests: [
        ["上傳 STL 檔案", "系統成功讀取並進入估價"],
        ["上傳不支援格式", "系統拒絕並顯示錯誤"],
        ["付款成功", "訂單狀態變成已付款"],
        ["未付款訂單", "不可進入列印流程"],
        ["門市更新列印完成", "顧客收到取件通知"],
        ["列印失敗", "進入異常處理與退款流程"]
      ]
    },
    {
      type: "stageDivider",
      eyebrow: "SDLC 05",
      title: "系統上線與維護",
      previousDeliverable: "軟體硬體建置測試計畫及結果",
      currentWork: ["規劃上線後監控與客服處理", "追蹤設備、材料、付款與通知異常", "依使用者回饋安排版本更新"],
      nextDeliverable: "上線維護計畫書 / 維運紀錄 / 使用者回饋與版本更新計畫",
      handoff: "通過建置與測試後，系統才進入維運階段，重點從功能完成轉為穩定服務與持續改善。"
    },
    {
      type: "feedbackUpdate",
      eyebrow: "User Feedback",
      title: "使用者回饋與版本更新",
      intro: "上線維護階段會持續蒐集使用者回饋，將操作疑慮與功能期待整理成下一版系統需求。",
      items: [
        {
          title: "付款風險與信任感不足",
          src: "./asset/使用者回味/螢幕擷取畫面 2026-05-22 220617_0.png",
          problem: "使用者在尚未實際拿到成品前，無法完全確認列印品質、材料狀況與成品是否符合需求，因此會擔心先付款後才發現成果不理想。",
          update: "後續版本可增加現場付款或貨到付款機制，讓付款方式更彈性，降低交易風險疑慮並提升平台信任感。"
        },
        {
          title: "建模門檻與可列印性判斷不足",
          src: "./asset/使用者回味/螢幕擷取畫面 2026-05-22 220948_0.png",
          problem: "一般使用者自行設計 3D 模型時，可能忽略支撐不足、尺寸不合理、模型穩定性或實際列印限制，導致模型需要反覆修改。",
          update: "後續版本可加入 AI 模型生成與設計建議，協助分析模型問題、提供優化建議，甚至依需求產生初步模型，降低非專業使用者的設計門檻。"
        }
      ],
      takeaway: "這些回饋會轉成維運階段的版本更新項目，並回到需求分析與系統設計流程中持續改善。"
    },
    {
      type: "maintenance",
      eyebrow: "Operations",
      title: "上線維護與未來擴充",
      operations: [
        ["設備監控", "追蹤門市印表機狀態、故障原因與可接單能力"],
        ["客服處理", "處理列印失敗、退款、逾期未取與使用者問題"],
        ["資料維護", "維護材料、價格、門市、設備與審核規範"],
        ["版本更新", "依驗收測試與使用者回饋改善流程與介面"]
      ],
      future: [
        "即時門市設備狀態查詢",
        "AI 模型檢查與修復建議",
        "多材質、多色列印",
        "超商會員與點數系統整合",
        "創作者模型市集"
      ],
      conclusion: "本專題最終成果，是將使用者痛點轉換為可分析、可設計、可展示的系統原型。"
    }
  ]
};

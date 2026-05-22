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
      eyebrow: "SDLC 01",
      title: "系統規劃",
      previousDeliverable: "題目發想與課程目標",
      currentWork: ["確認服務問題與使用情境", "定義系統範圍與專題定位", "建立角色分工與規劃交付"],
      nextDeliverable: "系統規劃書",
      handoff: "完成規劃後，才知道本系統要解決哪些問題、服務哪些角色，接著才能進入需求分析。"
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
        { id: "notificationSystem", name: "通知系統", action: "訂單 / 取件通知" }
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
            { id: "payment", label: "付款" },
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
            { id: "confirmPickup", label: "確認取件" },
            { id: "sendNotification", label: "發送通知" }
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
        { from: "sendNotification", to: "notificationSystem", type: "notify" }
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
        ["首頁", "服務入口與登入"],
        ["上傳模型頁", "模型上傳、格式檢查"],
        ["材質與品質選擇頁", "使用者選擇列印條件"],
        ["自動估價頁", "解決價格不透明"],
        ["選擇取件門市頁", "解決取件不方便"],
        ["訂單狀態頁", "解決進度不透明"],
        ["後台排程頁", "門市管理待列印訂單"]
      ],
      priority: "若版面需要壓縮，優先展示：上傳模型頁、自動估價頁、選擇門市頁、訂單狀態頁。"
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

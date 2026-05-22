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
      currentWork: ["確認系統角色與外部系統", "建立 Use Case 與主要流程", "定義功能、非功能需求與驗收條件"],
      nextDeliverable: "系統需求書",
      handoff: "PM 已經完成為什麼做、要解決什麼問題、系統範圍在哪裡；接下來系統分析師要把這些內容轉換成需求規格。",
      sections: [
        {
          title: "PM 系統規劃",
          columns: ["PM 規劃內容", "說明"],
          rows: [
            ["專題背景", "一般使用者有小量、臨時、客製化 3D 列印需求"],
            ["使用者痛點", "設備成本高、操作門檻高、價格不透明、取件不便"],
            ["服務定位", "像超商影印一樣方便的 3D 列印服務"],
            ["系統範圍", "線上上傳、模型檢查、智慧估價、付款、門市列印、通知取件"],
            ["專案目標", "完成系統分析、系統設計與可操作原型"]
          ]
        },
        {
          title: "系統需求分析",
          columns: ["需求分析工作", "目的"],
          rows: [
            ["確認主要使用者", "找出誰會使用系統、誰會與系統互動"],
            ["整理 Use Case", "定義每個角色可以操作哪些功能"],
            ["分析主要流程", "確認使用者從上傳到取件的完整流程"],
            ["定義功能需求", "整理系統必須提供的功能"],
            ["定義非功能需求", "補充安全、效能、可靠性、擴充性等品質要求"],
            ["建立驗收條件", "確認後續測試與 Demo 要驗證哪些功能"]
          ]
        },
        {
          title: "系統需求書",
          columns: ["需求分析產物", "後續系統設計用途"],
          rows: [
            ["角色與權限", "權限設計、介面功能規劃"],
            ["Use Case", "功能模組切分"],
            ["流程規格", "流程設計、狀態機設計"],
            ["功能需求", "模組設計、API 規劃"],
            ["非功能需求", "架構、安全、效能設計"],
            ["資料需求", "ERD、資料表設計"],
            ["驗收條件", "測試案例與 Demo 流程"]
          ]
        }
      ]
    },
    {
      type: "table",
      eyebrow: "Requirement Source",
      title: "需求來源整理：痛點到系統需求",
      note: "系統需求分析的目標，是把使用者的問題轉換成系統必須提供的功能與限制條件。",
      variant: "source-trace-slide",
      highlightColumn: 2,
      columns: ["使用者痛點", "對應系統需求", "後續功能方向"],
      rows: [
        ["3D 列印機購置成本高", "使用者不需要自行購買設備，也能取得列印服務", "平台化列印服務、門市列印"],
        ["不會操作 3D 列印機", "系統協助使用者完成模型檢查與列印設定", "模型上傳、模型檢查"],
        ["價格與等待時間不清楚", "下單前提供價格與完成時間資訊", "智慧估價、預估完成時間"],
        ["取件不方便", "可選擇鄰近門市取件", "門市選擇、門市取件"],
        ["不知道模型能不能印", "系統需要先檢查模型格式、尺寸與可列印性", "模型檢查、錯誤提示"],
        ["模型內容可能有風險", "高風險模型需審核", "人工審核、平台規範"],
        ["不知道訂單進度", "提供訂單狀態追蹤", "訂單查詢、通知系統"],
        ["列印失敗不知道怎麼處理", "需要異常處理與退款流程", "客服處理、退款流程"]
      ]
    },
    {
      type: "useCase",
      eyebrow: "Use Case",
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
        { id: "paymentGateway", name: "金流系統", action: "付款確認、退款處理" },
        { id: "notificationSystem", name: "通知系統", action: "付款 / 完成 / 異常 / 逾期通知" }
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
            { id: "confirmPickup", label: "確認取件" }
          ]
        },
        {
          id: "support",
          actorId: "support",
          label: "客服人員相關",
          items: [
            { id: "handlePrintFailure", label: "處理列印失敗" },
            { id: "handleRefund", label: "處理退款" },
            { id: "replyComplaint", label: "回覆客訴" }
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
            { id: "managePriceRules", label: "管理價格規則" },
            { id: "manageReviewRules", label: "管理審核規範" }
          ]
        }
      ],
      links: [
        { from: "customer", to: "customer", type: "actor" },
        { from: "storeStaff", to: "store", type: "actor" },
        { from: "support", to: "support", type: "actor" },
        { from: "admin", to: "admin", type: "actor" },
        { from: "payment", to: "paymentGateway", type: "external" },
        { from: "updatePrintStatus", to: "notificationSystem", type: "notify" }
      ],
      note: "權限邊界：顧客只能查看自己的訂單；門市人員只能處理門市列印與取件狀態；客服人員處理異常與退款；管理員才能修改門市、設備、材料與價格規則。"
    },
    {
      type: "swimlaneFlow",
      eyebrow: "Main Flow",
      title: "使用者情境與主要流程",
      story: "小明是設計科學生，需要列印一個小型模型。他透過系統上傳模型，選擇 PLA 材質與附近門市，系統完成檢查與估價後建立訂單。付款完成後，門市接收任務並列印，完成後系統通知小明取件。",
      lanes: [
        ["顧客", ["註冊 / 登入", "上傳 3D 模型", "選擇材質與品質", "選擇取件門市", "付款", "查詢狀態", "到門市取件"]],
        ["系統", ["驗證登入", "檢查模型", "自動估價", "建立訂單", "更新訂單狀態", "發送通知"]],
        ["金流系統", ["接收付款請求", "確認付款結果", "回傳付款成功或失敗"]],
        ["門市人員", ["接收列印訂單", "執行列印", "更新列印狀態", "確認顧客取件"]]
      ],
      note: "本頁為正常下單流程；付款失敗、模型不合格、列印失敗與逾期未取會進入異常流程。"
    },
    {
      type: "functionalCards",
      eyebrow: "Requirement Spec",
      title: "功能需求分析",
      note: "功能需求由痛點、Use Case 與主要流程推導而來，是後續模組設計與 API 規劃的依據。",
      modules: [
        { title: "使用者管理", body: "註冊、登入、會員資料管理。", need: "使用者需要登入後管理自己的模型與訂單" },
        { title: "模型上傳與檢查", body: "支援 STL / OBJ 上傳，檢查格式、大小、尺寸、破面與可列印性。", need: "使用者不知道模型能不能印" },
        { title: "材料與品質選擇", body: "選擇材料、列印品質、顏色或基本列印條件。", need: "使用者需要簡化列印設定" },
        { title: "智慧估價", body: "依模型體積、材料、品質、列印時間估算價格。", need: "價格與等待時間不透明" },
        { title: "門市選擇", body: "顯示可取件門市，提供門市位置與可服務狀態。", need: "取件不方便" },
        { title: "訂單管理", body: "建立訂單、查詢訂單、取消訂單、更新狀態。", need: "使用者需要追蹤列印流程" },
        { title: "付款與退款管理", body: "串接第三方金流，處理付款成功、付款失敗與退款。", need: "下單付款與異常處理" },
        { title: "門市端管理", body: "門市查看待列印訂單、更新列印狀態、確認取件。", need: "門市需要執行列印作業" },
        { title: "通知系統", body: "付款成功通知、列印完成通知、異常通知、逾期提醒。", need: "使用者需要掌握進度" },
        { title: "後台與審核機制", body: "管理門市、設備、材料、價格規則，審核高風險模型。", need: "系統維護與風險控管" }
      ]
    },
    {
      type: "table",
      eyebrow: "Quality Requirements",
      title: "非功能需求分析",
      note: "非功能需求不是系統要做什麼功能，而是系統要做到什麼品質，會影響後續架構、權限、安全、資料表與異常處理設計。",
      splitRows: true,
      highlightColumn: 2,
      columns: ["非功能需求", "具體說明", "對系統設計的影響"],
      rows: [
        ["安全性", "限制上傳檔案格式與大小、角色權限控管、付款資料不自行保存", "需要權限設計、檔案驗證、串接第三方金流"],
        ["效能", "模型檢查與估價需在合理時間內完成", "需要模型檢查模組與估價模組有效率"],
        ["可用性", "使用者不懂 3D 列印也能依照步驟完成下單", "需要清楚的介面流程與錯誤提示"],
        ["可靠性", "列印失敗時可追蹤原因並進入補印或退款流程", "需要狀態紀錄、異常流程與客服查詢"],
        ["擴充性", "未來可新增門市、設備、材料與模型市集", "需要模組化架構與可擴充資料表"],
        ["可維護性", "材料、價格、門市、設備與審核規則可由後台維護", "需要後台管理與 PriceRule 設計"],
        ["可追蹤性", "訂單狀態變更需要留下紀錄", "需要 OrderStatusLog 狀態紀錄"],
        ["合規與風險控管", "高風險模型需人工審核，避免違禁或侵權模型進入列印流程", "需要 Review 審核資料與管理規範"]
      ]
    },
    {
      type: "table",
      eyebrow: "Requirement Deliverable",
      title: "系統需求書交付內容",
      note: "系統需求書的目的，是把 PM 的規劃與使用者痛點，轉換成後續系統設計可以依據的規格文件。",
      splitRows: true,
      columns: ["需求分析項目", "本階段交付內容", "後續系統設計用途"],
      rows: [
        ["角色分析", "顧客、門市人員、客服人員、管理員、金流系統、通知系統", "權限設計、介面功能設計"],
        ["Use Case", "各角色可操作功能與系統邊界", "功能模組切分"],
        ["主要流程", "上傳模型、檢查、估價、付款、列印、通知、取件", "流程設計、API 流程、訂單狀態機"],
        ["功能需求", "模型檢查、智慧估價、付款、退款、通知、門市端、後台管理", "後端模組、前端畫面、API 設計"],
        ["非功能需求", "安全性、效能、可用性、可靠性、擴充性、可維護性", "架構設計、安全設計、資料表設計"],
        ["資料需求", "使用者、模型檔、訂單、付款、門市、設備、材料、通知、狀態紀錄", "ERD、資料表關聯"],
        ["驗收條件", "正常流程、異常流程與測試項目", "測試計畫、Demo 流程"]
      ]
    },
    {
      type: "handoffMap",
      eyebrow: "Design Handoff",
      title: "從需求分析接續系統設計",
      note: "後續系統設計會依照需求分析結果，進一步規劃系統架構、資料表關聯、模組輸入輸出、介面流程與訂單狀態機。",
      columns: ["需求分析結果", "系統設計對應內容"],
      rows: [
        ["顧客需要上傳模型", "顧客端 Web / App、模型上傳介面、File Storage"],
        ["系統需要檢查模型", "模型檢查模組"],
        ["系統需要自動估價", "智慧估價模組、PriceRule 資料表"],
        ["使用者需要付款", "金流服務、Payment 資料表"],
        ["門市需要接收列印任務", "門市端 / 後台、列印排程模組"],
        ["使用者需要追蹤狀態", "訂單管理模組、OrderStatusLog"],
        ["列印完成要通知", "通知服務、Notification 資料表"],
        ["列印失敗要處理", "異常流程、Refund、客服處理"],
        ["高風險模型要審核", "Review 資料表、審核流程"],
        ["系統未來要擴充", "模組化架構、可維護後台"]
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

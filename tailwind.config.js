/** Tailwind 設定：品牌色票與字體（修改後執行 npm run build:css） */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#005BAC',   // 科技深藍 Brand Blue：主視覺、導覽列、標題重點
          tech: '#2F8CFF',   // 智慧亮藍 Tech Blue：互動、連結、圖表主線
          teal: '#00A99D',   // 創新青綠 Innovation Teal：科技輔助、icon、功能標籤
          green: '#74C69D',  // 永續綠 Sustainability Green：成功狀態、正向資訊
          orange: '#F5A623', // 行動橙 Action Orange：CTA 按鈕、重點提醒
          gold: '#FFC857',   // 亮點金黃 Highlight Gold：局部高亮、獎項標記
          violet: '#00A99D', // 舊類別名稱相容（指向 Innovation Teal）
          mint: '#74C69D'
        },
        ink: '#2F3A4A',      // 文字深灰 Text Slate
        body: '#5E6A7E',     // 內文灰（Secondary Gray 加深一階，對比 ≥ 4.5:1）
        muted: '#6B778C',    // 次文字灰 Secondary Gray
        line: '#D9E1EA',     // 邊框灰 Border Gray
        mist: '#F7F9FC'      // 雲霧白 Cloud White
      },
      fontFamily: {
        // 全站統一字族
        sans: ['"Noto Sans TC"', '"PingFang TC"', '"Microsoft JhengHei"', 'system-ui', 'sans-serif'],
        display: ['"Noto Sans TC"', '"PingFang TC"', '"Microsoft JhengHei"', 'system-ui', 'sans-serif']
      }
    }
  }
};

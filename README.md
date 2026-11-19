# mihuavet-website

米花動物醫院官網（mihuavet.tw），使用 [Astro](https://astro.build) 產生靜態網站，部署在 GitHub Pages。

## 開發

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # 輸出到 dist/
```

## 內容放在哪裡

| 內容 | 檔案 |
|---|---|
| 醫院資訊、醫師、診療項目、環境、設備、健檢套組、選單 | `src/data/site.js` |
| 班表（員工系統還沒有發布資料時顯示） | `src/data/schedule-fallback.js` |
| 照片 | `public/images/` |

班表與公告會在瀏覽器端讀取 Firestore（專案 `mihua-inventory`）的公開文件：

- `websiteSchedules/{YYYY-MM}`：`{ published, slots: [{ time, days: [{ names: [...] } x7] }], notices: [...] }`
- `website/announcement`：`{ enabled, text }`

讀不到時會顯示 `schedule-fallback.js` 的內容，網站其他部分不受影響。

## 部署

推送到 `main` 後，`.github/workflows/deploy.yml` 會自動建置並發布到 GitHub Pages。
正式網域上線後，在 repo 的 Settings → Secrets and variables → Actions → Variables 設定 `SITE_URL=https://mihuavet.tw`、`BASE_PATH=/`。

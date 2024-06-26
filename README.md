# 重機能停哪?

此專案提供重機停車位資訊，使用 Vue 3 開發。

## 更新日誌

240527 更新地點資料
更新方法如下方更新數據方式

發現問題
1. **google匯出的icon 名稱並非固定**
    - 如: 綠P 原本是 icon-15.png 更新後卻變成 icon-16.png 
    - 之後要研究一下該怎麼分類


2. **目前需要手動更新**
    - 目前只能手動建立副本並匯出資料來使用
    - 後續有空研究看看能否改成自動更新



## 更新數據

按照以下步驟來更新數據：

1. **建立 Google My Map 副本：**
    - 進入您要複製的 Google My Map。
    - 使用可用選項建立地圖的副本。

2. **到Google map 設定>"你在Google地圖中的資料"：**
    - 打開 Google 地圖，點擊設定 找到"你在Google地圖中的資料"。

3. **下載您的Google地圖資料：**
    - 點擊「下載您的Google地圖資料」。
    - 這將打開 Google Takeout，一個導出 Google 數據的服務。

4. **選擇「我的地圖」：**
    - 在 Google Takeout 中，選擇「我的地圖」選項。
    - 確保未選中其他選項，以避免下載不必要的數據。

5. **匯出並下載：**
    - 將數據匯出到您的電子郵件。
    - 匯出完成後，從您的電子郵件中下載文件。

6. **解壓縮 KMZ 文件：**
    - 下載後，解壓縮文件，找到 `XXX.kmz`。
    - 將 `XXX.kmz` 重命名為 `XXX.zip`。

7. **解壓縮重命名的文件：**
    - 解壓縮 `XXX.zip` 以提取內容。
    - 您會找到一個 `doc.kml` 文件和一個 `images` 資料夾。

8. **重命名並替換文件：**
    - 將 `doc.kml` 重命名為 `doc.xml`。
    - 用新文件替換專案中的現有 `doc.xml` 文件和 `images` 資料夾。

9. **查看分類是否變動 並調整程式**

## 專案設置

```bash
# 安裝依賴
yarn
```

## 開發

```bash
# 啟動開發伺服器
yarn dev
```

## 編譯

```bash
# 編譯為生產環境
yarn build
```

# Give++
Give++ 二手交易平台

> 網站連結 : https://give-plus-plus.tw/

> 介紹影片 : https://www.youtube.com/watch?v=o4nH5tC_XKk&feature=youtu.be

![](https://github.com/krebikshaw/final-project/blob/master/%E9%A6%96%E9%A0%81%E6%88%AA%E5%9C%96.png?raw=true)

## 專案簡介
這是 Give++ 二手交易平台的前端原始碼，採用 React Hooks 和 Redux Toolkit 開發。 

- 使用者可使用功能：
  - **商品系統**：自動篩選、手動搜尋、分類搜尋，不但能瀏覽網站上所刊登的商品，且能決定搜尋結果的排序方式
  - **購物車系統**：查看欲購買的項目及內容，並且成立訂單
  - **賣家系統**：於賣家後台刊登或編輯欲銷售的商品
  - **個人資料管理系統**：編輯商店頁面的公告內容、聯絡資訊
  - **訂單系統**：隨時掌握/更新訂單的最新狀態

- 管理員可使用功能：
  - **後台管理系統**：審核最新刊登的商品，管理/維護網站的用戶及商品

## 如何執行

#### `npm install`
安裝此專案所需的第三方套件

#### `yarn start`
在 [http://localhost:3000](http://localhost:3000) 上啟動此專案

#### `yarn build`
在 `build` 資料夾中建立此專案的 production 版本

#### `yarn deploy`
在 GitHub Page 上部屬此專案網站


## 使用技術
- 前端框架
    - React Hooks
    - React Dom
- 第三方套件
    - Redux Toolkit
    - React Router
    - Dayjs
    - Nuka Carousel
    - Snow
    - Cypress
- 第三方 API
    - Imgur

## 專案架構


#### 頁面結構
![Pages Structure](https://github.com/krebikshaw/final-project/blob/master/d91a479b-a380-4a67-afa5-80eca57d8b7d.png?raw=true)


#### 功能結構
![Feature Structure](https://github.com/krebikshaw/final-project/blob/master/e42723f6-5286-46c1-a5d3-5a5e2b1a4a74.png?raw=true)


## 專案 DEMO

### 商品搜尋
可依照最新商品、手動搜尋、分類搜尋方式搜尋商品，且可在搜尋結果頁面自訂商品的排序方式
![](https://github.com/krebikshaw/final-project/blob/master/%E6%90%9C%E5%B0%8B%E5%95%86%E5%93%81.gif?raw=true)

### 購買商品
可以將商品加入購物車，查看欲購買的商品內容及金額，並成立訂單
![](https://github.com/krebikshaw/final-project/blob/master/%E8%B3%BC%E7%89%A9%E8%BB%8A.gif?raw=true)

### 查看訂單
隨時掌握/更新訂單的最新動態
![](https://github.com/krebikshaw/final-project/blob/master/%E8%A8%82%E5%96%AE.gif?raw=true)

### 賣家後台
可以編輯公告、編輯賣家資料、刊登商品、編輯商品
![](https://github.com/krebikshaw/final-project/blob/master/%E5%88%8A%E7%99%BB%E5%95%86%E5%93%81.gif?raw=true)

### 管理後台
管理員可以審核新商品，可以管理/維護網站中的商品及用戶
![](https://github.com/krebikshaw/final-project/blob/master/%E7%AE%A1%E7%90%86%E5%BE%8C%E5%8F%B0.gif?raw=true)

## 專案測試
本專案利用 Cypress 對於註冊、登入、登出功能，做基本測試

### 測試項目：
- 取得使用者資訊
- 註冊、登入、登出之基本功能
- 各項欄位輸入錯誤時的錯誤提示

### 測試指令：
#### `yarn cypress:open`
啟動 Cypress E2E 測試工具
#### `yarn cypress:run`
執行 Cypress E2E 測試，並生成或更新測試影片

### 測試畫面
![](https://github.com/krebikshaw/final-project/blob/master/%E6%B8%AC%E8%A9%A6%E7%95%AB%E9%9D%A2.gif?raw=true)


## 專案後端
Give++ 二手交易平台的後端，採用 Express 和 Sequelize 進行開發
- 專案連結：https://github.com/krebikshaw/Give-plus-plus-backend


## License

[MIT](https://choosealicense.com/licenses/mit/)


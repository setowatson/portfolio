
# 📚 AI学習サポートチャットボットデモ

## 🚀 概要
このプロジェクトは、日本の高校生向けに開発された **AIサポートチャットボット** です。生徒が **国語、数学、英語、理科、社会** の質問をAIに直接聞くことができ、わかりやすく回答を得ることができます。
このアプリケーションは **Next.js（App Router）** を使用して構築され、 **OpenAIのGPT-4 API** を活用して高度な対話型学習体験を提供します。

## 🎯 主な機能
- **💬 チャットインターフェース**：AIと対話しながら学習
- **📖 教科別ページ**：国語、数学、英語、理科、社会の情報を整理
- **🎓 大学受験情報**：受験対策や学習アドバイスを提供
- **📱 レスポンシブデザイン**：スマホ、タブレット、PC対応
- **🔍 サンプル質問**：質問しやすいようにヒントを表示

## 🛠️ 技術スタック
- **フロントエンド**: Next.js (App Router)
- **バックエンド/API**: OpenAI GPT-4
- **スタイリング**: Tailwind CSS
- **データ管理**: Zustand（状態管理）
- **デプロイ**: Vercel

## 📂 フォルダ構成
```
📦 ai-study-chatbot
├── 📂 app              # Next.jsのApp Router構成
│   ├── 📂 api         # APIルート（サーバー側処理）
│   │   ├── 📂 chat   # チャットAPI
│   │   │   ├── route.ts  # チャットのAPIルート
│   ├── 📂 chat        # チャットページ
│   │   ├── page.tsx   # チャットUI
│   ├── 📂 subjects    # 教科別ページ
│   │   ├── page.tsx   # 各教科の情報ページ
│   ├── 📜 globals.css # グローバルCSS（Tailwind）
│   ├── 📜 layout.tsx  # レイアウトコンポーネント
│   ├── 📜 page.tsx    # メインページ
├── 📜 tailwind.config.js  # Tailwindの設定

```

## 🔧 セットアップ方法
### 1️⃣ 必要なツールをインストール
以下のツールが必要です。
- Node.js (推奨: v18以上)
- npm または yarn

### 2️⃣ リポジトリをクローン
```sh
git clone https://github.com/your-username/ai-study-chatbot.git
cd ai-study-chatbot
```

### 3️⃣ 依存関係をインストール
```sh
npm install  # または yarn install
```

### 4️⃣ 環境変数を設定
`.env` ファイルを作成し、以下の内容を記載してください。
```
OPENAI_API_KEY=your-api-key-here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5️⃣ ローカルサーバーを起動
```sh
npm run dev  # または yarn dev
```
ブラウザで `http://localhost:3000` にアクセスしてアプリを確認できます。

## 🚀 デプロイ方法
このプロジェクトは **Vercel** で簡単にデプロイできます。
```sh
npx vercel
```
または GitHubと連携して自動デプロイすることも可能です。




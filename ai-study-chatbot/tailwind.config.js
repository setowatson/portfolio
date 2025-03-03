/** @type {import('tailwindcss').Config} */
module.exports = {
  // ダークモードの設定（classを指定すると、'dark' クラスを持つ要素でダークモードを適用）
  darkMode: ["class"],

  // Tailwindがスタイルを適用するファイルを指定
  content: [
    "./pages/**/*.{ts,tsx}",   // pagesディレクトリのTypeScriptファイル
    "./components/**/*.{ts,tsx}", // componentsディレクトリのTypeScriptファイル
    "./app/**/*.{ts,tsx}",   // appディレクトリのTypeScriptファイル
    "./src/**/*.{ts,tsx}",   // srcディレクトリのTypeScriptファイル
    "*.{js,ts,jsx,tsx,mdx}",  // ルートディレクトリのJS/TS/MDXファイル
  ],

  theme: {
    // コンテナの中央配置と余白の設定
    container: {
      center: true,  // コンテナを画面中央に配置
      padding: "2rem", // コンテナのパディングを2remに設定
      screens: {
        "2xl": "1400px",  // 2XLサイズのスクリーン幅を1400pxに設定
      },
    },
    
    extend: {
      // カスタムカラーの設定（hslで定義）
      colors: {
        border: "hsl(var(--border))", // 枠線の色
        input: "hsl(var(--input))",   // 入力フィールドの色
        ring: "hsl(var(--ring))",     // フォーカスリングの色
        background: "hsl(var(--background))", // 背景色
        foreground: "hsl(var(--foreground))", // 前景色

        // プライマリーカラー（メインカラー）
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        // セカンダリーカラー（サブカラー）
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        // 警告や削除ボタン用の色
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        // 落ち着いた色合い
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        // アクセントカラー
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        // ポップオーバー（ツールチップなど）の背景色
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        // カード（ボックスなど）の背景色
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      // 角丸のサイズをカスタマイズ
      borderRadius: {
        lg: "var(--radius)",        // 大きめの角丸
        md: "calc(var(--radius) - 2px)", // 標準サイズより少し小さめ
        sm: "calc(var(--radius) - 4px)", // さらに小さい角丸
      },

      // アコーディオンの開閉アニメーションを定義
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },

      // 定義したアニメーションを適用可能にする
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  // Tailwindのアニメーションプラグインを適用
  plugins: [require("tailwindcss-animate")],
};

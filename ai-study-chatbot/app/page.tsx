import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, GraduationCap, School } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="flex items-center gap-2">
            <School className="w-6 h-6" />
            <h1 className="text-xl font-bold">学習サポートAI</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              ホーム
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              使い方
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              よくある質問
            </Link>
          </nav>
          <Button size="sm">ログイン</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              あなたの学習をサポートします
            </h2>
            <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-xl">
              あなたの学習と受験を支えるAIサポーターです。
            </p>
            <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/chat">チャットを始める</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/subjects">教科から探す</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">学習サポートAIでできること</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">教科の質問</h3>
                <p className="mt-2 text-muted-foreground">
                  国語、数学、英語、理科、社会の質問に答えます。わからない問題や概念について質問してみましょう。
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">大学受験情報</h3>
                <p className="mt-2 text-muted-foreground">
                  志望校選びや入試対策、推薦入試や一般入試についての情報を提供します。
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <School className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">学習計画</h3>
                <p className="mt-2 text-muted-foreground">
                  効率的な学習計画の立て方や、モチベーションの維持方法についてアドバイスします。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">&copy; 2025 学習サポートAI. All rights reserved.</p>
            <nav className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                利用規約
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                プライバシーポリシー
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}


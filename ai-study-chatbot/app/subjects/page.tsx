import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, Globe, Microscope, History, GraduationCap, ArrowRight } from "lucide-react"

export default function SubjectsPage() {
  const subjects = [
    {
      name: "国語",
      description: "現代文、古文、漢文、小論文など",
      icon: <BookOpen className="w-6 h-6" />,
      topics: ["現代文", "古文", "漢文", "小論文", "文法", "読解"],
    },
    {
      name: "数学",
      description: "数学I・A・II・B・III、微分積分、確率統計など",
      icon: <Calculator className="w-6 h-6" />,
      topics: ["数と式", "二次関数", "図形と計量", "微分積分", "確率統計", "数列"],
    },
    {
      name: "英語",
      description: "文法、読解、リスニング、英作文など",
      icon: <Globe className="w-6 h-6" />,
      topics: ["文法", "読解", "リスニング", "英作文", "単語", "熟語"],
    },
    {
      name: "理科",
      description: "物理、化学、生物、地学など",
      icon: <Microscope className="w-6 h-6" />,
      topics: ["物理", "化学", "生物", "地学", "実験", "計算問題"],
    },
    {
      name: "社会",
      description: "日本史、世界史、地理、政治経済、倫理など",
      icon: <History className="w-6 h-6" />,
      topics: ["日本史", "世界史", "地理", "政治経済", "倫理", "現代社会"],
    },
    {
      name: "大学受験",
      description: "入試情報、志望校選び、勉強法など",
      icon: <GraduationCap className="w-6 h-6" />,
      topics: ["入試情報", "志望校選び", "勉強法", "小論文対策", "面接対策", "推薦入試"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            <h1 className="text-xl font-bold">学習サポートAI</h1>
          </Link>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">教科から探す</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <Card key={subject.name} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    {subject.icon}
                  </div>
                  <div>
                    <CardTitle>{subject.name}</CardTitle>
                    <CardDescription>{subject.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {subject.topics.map((topic) => (
                      <Link href={`/chat?topic=${encodeURIComponent(topic)}`} key={topic}>
                        <Button variant="outline" size="sm">
                          {topic}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/chat?subject=${encodeURIComponent(subject.name)}`}>
                      <span>{subject.name}について質問する</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
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


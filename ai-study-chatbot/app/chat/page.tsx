"use client"

import type React from "react"

import { useState } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calculator, Globe, Microscope, History, Send, User, Bot } from "lucide-react"
import Link from "next/link"

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })
  const [activeTab, setActiveTab] = useState("all")

  const subjectIcons = {
    国語: <BookOpen className="w-4 h-4" />,
    数学: <Calculator className="w-4 h-4" />,
    英語: <Globe className="w-4 h-4" />,
    理科: <Microscope className="w-4 h-4" />,
    社会: <History className="w-4 h-4" />,
  }

  const subjectExamples = {
    国語: [
      "古文の助動詞「けり」の用法について教えて",
      "「羅生門」のあらすじと主題を説明して",
      "小論文の書き方のコツは？",
    ],
    数学: [
      "二次関数の最大値・最小値の求め方を教えて",
      "微分と積分の違いは何ですか？",
      "数列の一般項の見つけ方を説明して",
    ],
    英語: ["関係代名詞のthatとwhichの違いは？", "仮定法過去完了の使い方を例文で説明して", "英作文でよくある間違いは？"],
    理科: ["光合成の仕組みについて簡単に説明して", "ニュートンの運動法則を教えて", "周期表の族と周期の意味は？"],
    社会: ["日本の高度経済成長期について教えて", "冷戦とは何ですか？簡単に説明して", "日本国憲法の三大原則とは？"],
    受験: [
      "センター試験と共通テストの違いは？",
      "推薦入試の種類と特徴を教えて",
      "志望校の選び方のアドバイスをください",
    ],
  }

  const handleExampleClick = (example: string) => {
    const fakeEvent = {
      preventDefault: () => {},
      currentTarget: {
        elements: {
          message: { value: example },
        },
      },
    } as unknown as React.FormEvent<HTMLFormElement>

    handleInputChange({ target: { value: example } } as React.ChangeEvent<HTMLInputElement>)
    setTimeout(() => handleSubmit(fakeEvent), 100)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Bot className="w-6 h-6" />
            <h1 className="text-xl font-bold">学習サポートAI</h1>
          </Link>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden w-64 p-4 overflow-y-auto border-r md:block">
          <h2 className="mb-4 text-lg font-semibold">教科から質問する</h2>
          <nav className="space-y-2">
            {Object.entries(subjectExamples).map(([subject, examples]) => (
              <div key={subject} className="space-y-1">
                <h3 className="flex items-center gap-2 font-medium">
                  {subjectIcons[subject as keyof typeof subjectIcons] || null}
                  {subject}
                </h3>
                <ul className="pl-6 space-y-1">
                  {examples.map((example, index) => (
                    <li key={index}>
                      <Button
                        variant="link"
                        className="h-auto p-0 text-sm text-left text-muted-foreground hover:text-foreground"
                        onClick={() => handleExampleClick(example)}
                      >
                        {example}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-4 overflow-hidden">
          <Card className="flex flex-col h-full">
            <CardHeader className="px-4 py-3 border-b">
              <CardTitle className="text-lg">AIチャット</CardTitle>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="all">全て</TabsTrigger>
                  <TabsTrigger value="japanese">国語</TabsTrigger>
                  <TabsTrigger value="math">数学</TabsTrigger>
                  <TabsTrigger value="english">英語</TabsTrigger>
                  <TabsTrigger value="science">理科</TabsTrigger>
                  <TabsTrigger value="social">社会</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="flex-1 p-4 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Bot className="w-12 h-12 mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold">学習サポートAIへようこそ</h3>
                  <p className="max-w-md mt-2 text-muted-foreground">
                    国語、数学、英語、理科、社会の質問や大学受験に関する質問に答えます。
                    左側のサンプル質問を選ぶか、下のフォームから質問してみましょう。
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-start gap-2 max-w-[80%] ${
                          message.role === "user" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`flex items-center justify-center w-8 h-8 rounded-full ${
                            message.role === "user" ? "bg-primary" : "bg-muted"
                          }`}
                        >
                          {message.role === "user" ? (
                            <User className="w-4 h-4 text-primary-foreground" />
                          ) : (
                            <Bot className="w-4 h-4" />
                          )}
                        </div>
                        <div
                          className={`p-3 rounded-lg ${
                            message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-start gap-2 max-w-[80%]">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="p-3 rounded-lg bg-muted">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"></div>
                            <div
                              className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                              style={{ animationDelay: "0.4s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex w-full gap-2">
                <Input
                  placeholder="質問を入力してください..."
                  value={input}
                  onChange={handleInputChange}
                  className="flex-1"
                />
                <Button type="submit" disabled={isLoading || !input.trim()}>
                  <Send className="w-4 h-4" />
                  <span className="sr-only">送信</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}


import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  // システムプロンプトを追加
  const systemMessage = {
    role: "system",
    content: `あなたは日本の高校生向けの学習サポートAIです。
    国語、数学、英語、理科、社会の高校カリキュラムに関する質問に答えたり、
    大学受験に関するアドバイスを提供します。
    
    回答は以下のガイドラインに従ってください：
    1. 高校生にわかりやすい言葉で説明する
    2. 必要に応じて例を挙げる
    3. 重要な概念や用語は強調する
    4. 長すぎず、簡潔に説明する
    5. 間違った情報は提供しない
    6. わからないことは正直に「わかりません」と答える
    
    あなたの目標は、高校生の学習をサポートし、彼らが学校の授業や大学受験の準備に役立つ情報を提供することです。`,
  }

  const augmentedMessages = [systemMessage, ...messages]

  const result = streamText({
    model: openai("gpt-4-turbo"),
    messages: augmentedMessages,
  })

  return result.toDataStreamResponse()
}


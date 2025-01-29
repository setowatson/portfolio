# 1.概要

## 1-1.想定読者

- Azure AI Searchをどういったものか知らない。
- Microsoftサービス(Azure)によるLLM・RAG導入を検討している。
- そもそもクラウドをAzureにすることを検討している。

## 1-2.Azure AI Searchの基本概念

Azure AI Searchは、Microsoftが提供するクラウドベースの検索サービスです。
<br>AIを活用し、自然言語でのクエリ処理やカスタム検索を可能にし、
<br>構造化・非構造化データから迅速かつ的確に情報を引き出すことができます。

ざっくり大枠を掴むとすれば、


### 1. **抽出・検索・要約の"言語分野"が得意なAI機能**
### 2. **"Microsoft製品・Azureサービスと親和性"が高い。ゆえに技術ハードルは低い**
### 3. **"Azure"の使用が大前提**

ということかと思います。

Azure AI SearchのトップページにもまずAzureを！というメッセージが強めです。
<br>（というのもおそらくこのページに到達するのはAzure非ユーザーが多いからでしょうね）

![image](https://github.com/user-attachments/assets/4f3dface-7354-4d16-b0b3-ee8cea2fd68a)


### 公式参照

[Microsoft-Azure AI Search](https://azure.microsoft.com/en-us/products/ai-services/ai-search/)

[Microsoft-AI-Azure AI services Blog](https://techcommunity.microsoft.com/category/ai/blog/azure-ai-services-blog)

[Azure AI Search: AI を活用した情報検索プラットフォームの新たな可能性](https://www.youtube.com/watch?v=j35MpuQgXpQ)


## 1-3.導入検討が想定される場面
Azure AI Searchは以下のように思ったときに使う機能になります。

#### カスタマーサポートの効率を上げたい！ 
  - 「FAQやマニュアルが充実しているのに、<br>顧客からの問い合わせが増えてスタッフが答えを見つけるのに時間がかかる」
#### 社内資料やマニュアルの管理・運用を簡単にしたい！
  - 「過去の会議資料や契約書を探したいけど、どこに保存されているか分からない。」
  - 「顧客から『前回の提案内容をもとにした新しい提案をすぐ欲しい』と言われたけど、<br>いつどのファイルに保存したか分からない」
#### 今あるシステムに便利なサービスに追加したい！
  - 「ECサイトでユーザーが探している商品を一瞬で見つけられる検索機能が欲しいけど、<br>どう作ればいいのか分からない」

## 1-4.導入検討の想定が難しい場面
逆にAzure AI Searchが向いていない場面や企業の特徴をいくつか挙げます。  
以下の場合が当てはまる組織はAzure AI Searchの導入は向いていないと言えるかもしれません。

#### 1. 検索対象となるデータがほとんどない場合
   - 例えば、小規模な会社でドキュメントやデータが少なく、ファイル管理がシンプルな場合。
   - ファイル名で検索すれば十分なら、Azure AI Searchを使うメリットは薄い。  

#### 2. リアルタイムのデータ更新が頻繁な場合 
   - 在庫管理や株価情報など、ミリ秒単位でデータが変わるシステムには向いていない。
   - Azure AI Searchはインデックスを作成して検索を高速化するため、リアルタイム更新が求められる場面では遅延が発生する可能性がある。  

#### 3. 厳密な構造化データのクエリが必要な場合
   - 例えば、会計データや金融取引データなど、SQLデータベースで厳密にフィルタリング・計算が必要な場合。
   - Azure AI Searchは全文検索や自然言語処理に強いが、複雑な集計や分析はSQLデータベースのほうが適している。  

#### 4. 検索の精度よりも業務フローが重要な場合 
   - 例えば、製造業の生産管理システムなどでは、検索よりもワークフローの最適化が重要。
   - Azure AI Searchは検索に特化しているため、プロセス管理には向かない。  

#### 5. データがクラウドに置けない場合  
   - 極秘情報や規制の厳しいデータ（政府機関や防衛産業など）を扱っていて、データをクラウドに置けない場合。
   - Azure AI Searchはクラウドベースのサービスなので、完全にオンプレミスで運用したい企業には向かない。  


## 1-5. 先に実例をいくつか

#### 1.ネオス株式会社「AIチャットボット」
ネオス株式会社は、AIチャットボット「OfficeBot」のインフラをMicrosoft Azureに完全移行し、
<br>「Azure AI Search」との連携を強化。
<br>これによりチャットボットのRAG性能が向上し、検索・回答の精度が改善。
<br>独自のプロンプト調整で回答到達率も向上し、リーズナブルな料金で企業のDXや業務効率化を支援している。

[ネオス、【OfficeBot】をフルリニューアルし RAG性能を大幅に強化](https://www.atpress.ne.jp/news/390762)

#### 2.株式会社パーソルキャリア「社内版ChatGPT」
パーソルキャリアは業務でのChatGPT利用禁止のため、
<br>データのプライバシー確保、カスタマイズ性、コンプライアンス対応、スケーラビリティ確保を目的に
<br>社内版ChatGPT「ChatPCA」を構築。
<br>Azure App Service上にNext.jsでフロントを作成し、LangChain JSを介してLLMと連携。
<br>社内調整やコンプライアンス部門との協議に時間を要したが、
<br>リリース後は業務での活用が進み、特にRAG関連の機能拡張が求められている。
<br>今後も生成AI技術の活用を拡大予定。

[Azure OpenAI Serviceで社内版ChatGPTのChatPCAを構築した話](https://techtekt.persol-career.co.jp/entry/tech/240207_01)
[Azureで社内文書から回答可能な生成AIチャットサービスを作った話](https://techtekt.persol-career.co.jp/entry/tech/240520_01)

#### 3.Elastic「開発者向けアプリ」
Elasticsearchは、開発者がAI検索アプリを構築できる
<br>新ツール「Elasticsearch Relevance Engine」を発表。
<br>これにより、生成AIや大規模言語モデル、ベクトル検索を活用した高度な検索体験の提供が可能に。  
<br>AI検索の実現には、自然言語処理・ベクトルデータベース・ベクトル検索・LLM統合などが重要だが、
<br>Elasticsearchはこれらの要素を組み合わせ、
<br>コスト管理、スケール対応、プライバシー・セキュリティの確保を考慮した柔軟なデータストアを提供。  
<br>Elasticは、生成AIを活用した次世代の検索技術を推進し、開発者が革新的な検索体験を構築できるよう支援している。

[Relativity uses Elasticsearch and Azure OpenAI to build AI search experiences](https://www.elastic.co/search-labs/blog/relativity-elasticsearch-azure-openai)

# 2.構築
## 2-1.Azure AI Searchを構成する基本手順

![image](https://github.com/user-attachments/assets/2dcafa8b-8a3b-4064-a94c-5e04296ff149)


データの準備
Azure ポータルにログイン
Azure Storage Accountの作成とコンテナーの設定
検索対象のデータ（テキスト、画像など）をAzure Storageにアップロード2
Azure AI Searchのセットアップ
AIサービスメニューからAI Searchを選択し、新しいサービスを作成2
データのインポートとベクター化
AI Searchサービスで「データのインポートとベクター化」を選択
ストレージアカウントのコンテナーを指定
Azure OpenAIの設定（オプション）
インデックス名のプレフィックスを設定
インデクサーを作成し、データの取り込みを完了2
検索の実行と結果の確認
インデックス作成完了後、検索を開始し結果を確認2


## Azure AI Search の検索インデックスにデータを入れる方法


## 検索方法の違い

### キーワード検索
### セマンティック検索
### ベクトル検索
### ハイブリッド検索
https://live-style.jp/compare-azure-ai-search-search-methods/



# 3.RAGアーキテクチャ


## インデクサーによるチャンク分割、ベクトル化、保存する方法


## RAG環境の精度向上のために

https://qiita.com/masahiro-yamaguchi/items/f45cffcc59b2ea7f479a

# 本投稿の目的
- 自分のSQL理解・実践のアウトプット
- 本当に初心者🔰の方のための安心材料
- SQLを触ってみたいが何からすれば良いかさっぱりわからない方の参考に
（一緒に頑張りましょう！）

## 参考

こちらの学習サイトを一緒に解いていきます。
こうした簡単に実践に近い環境を簡単に使用できるのは本当にありがたいですね。
GoogleかGithubのアカウントが必要です。
本サイトにはない解説をいくつかつけていきます。

https://sqlab.net/works/


# 今回はSQL演習データのチャレンジ問題編 5問
SQLの基本の復習を兼ねて、いろんなパターンのチャレンジ問題に挑戦してみます！ 

## 1問目：グループ化後、並び替え

「性別毎」の「著者数」を取得してください。
また、「著者数」は「降順」に並び替えてください。
出力項目はgenderとnumです。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/32479de0-e385-5c09-9cf1-be3a023ab673.png)


<details><summary>解答</summary>

```ruby:
SELECT gender, COUNT(*) AS num
FROM authors
GROUP BY gender
ORDER BY num DESC;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/4c36e4b4-acf6-6013-2a49-009e5973ef58.png)


</details>

## 2問目：グループ化後、条件指定で抽出

在庫がない「書籍名」の一覧を取得してください。
出力項目はnameです。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/455965d8-223c-3e48-7142-6a34096b2482.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/fa26e896-b745-4ed0-2f9f-9a8d6ee7fbbc.png)


<details><summary>解答</summary>

```ruby:
SELECT name 
FROM books
JOIN book_sales 
ON books.id = book_sales.book_id
GROUP BY name
HAVING SUM(book_sales.stock) =0;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/4aacb1ae-fd6d-4782-2f73-2bc9a63dd7e1.png)


- よくある間違い・エラー
```ruby:
SELECT name 
FROM books
JOIN book_sales 
ON books.id = book_sales.book_id
GROUP BY name
WHERE book_sales.stock =0;
```
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/f12e590c-e1f2-5cf1-d9db-f2eb5702597c.png)

WHEREを使うと、重複を考慮できません。
実際に実行してみると、「SNSマーケティングの基本」という本がA店では在庫があるがB店で在庫がないために、出力結果に反映されています。

この問題の場合、各本の在庫数の合計が0であるかどうかを確認する必要があるため、SUM関数を使用します。SUM関数を使う際はHAVINGを使用します。

</details>


## 3問目：条件指定後に、グループ化かつ並び替え

「店舗毎」の「書籍」の「売上(price × figure)」を取得してください。
また、「店舗名」は「昇順」に並び替えてください。
出力項目はnameとsalesです。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/91a53507-9661-7bb3-4f78-7fab1ad8df9d.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/7bed7434-22a3-223e-9517-101be78a4557.png)


<details><summary>解答</summary>

```ruby:
SELECT stores.name, SUM(book_sales.price * book_sales.figure) AS sales
FROM book_sales
JOIN stores
ON book_sales.store_id = stores.id
GROUP BY stores.name
ORDER BY stores.name;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/d5c690b4-e3df-bc8a-5334-f52e9b12e4f3.png)

GROUP BYとSUMをセットで使う感覚がわかってきました。
JOINを使用する際は、カラム名の前にデータベースの名前をつけることを忘れずにしましょう。

</details>

## 4問目：新しいカラムの出力

「書籍名」「価格」「消費税」の一覧を取得してください。
出力項目はnameとprice、taxです。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/82b99041-c9fa-844a-50f8-dffed0639d1e.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/3a9a18d9-2c81-a9f5-08a7-ec462cfad8c6.png)

<details><summary>解答</summary>

```ruby:
SELECT books.name,book_sales.price, 
    (book_sales.price * 1.1 - book_sales.price) AS tax
FROM books 
JOIN book_sales
ON books.id=book_sales.book_id;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/86cdec01-f95b-518a-9d09-139cba5b04ea.png)



</details>



## 5問目：サブクエリ

「オンラインのみで購入できる」「書籍名」の一覧を取得してください。
出力項目はnameです。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/b7e0a88d-01c1-705b-fc8e-c0a7b8794f21.png)


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/11f15b8e-456c-750d-15d1-4faa1208b435.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/423e7eba-64e0-2de2-1193-847d9a57f231.png)


<details><summary>解答</summary>

storesテーブルに「オンライン」と名付けられた店舗がありますが、まずはこの「オンライン店舗以外」で販売されている本のIDをサブクエリで取得します。
その後、取得したIDが含まれていない本の名前をサブクエリで選択します。

```ruby:
SELECT books.name
FROM books 
# サブクエリでstores.nameが'オンライン'以外のbook_idを選択
# WHEREで上記以外のbook_idを条件にする
WHERE books.id NOT IN (
  SELECT DISTINCT books.id #DISTINCTを使って、重複する書籍IDを排除
  FROM books
  JOIN book_sales
  ON books.id=book_sales.book_id
  JOIN stores
  ON book_sales.store_id=stores.id
  WHERE stores.name <> 'オンライン'
  );
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/92baee39-85ce-b9ab-ec34-59ce60c69eee.png)


間違え
```ruby:
SELECT books.name
FROM books 
JOIN book_sales
ON books.id = book_sales.book_id
JOIN stores
ON book_sales.store_id = stores.id
WHERE stores.name = 'オンライン';
```

サブクエリを使わない上記コードだと、「オンラインで購入できる本」が対象として出力されます。今回の問題は「オンラインでしか購入できない本」です。
データベースの中にはA店でもオンライン店舗でも購入できる本があります。
こうした複雑な条件にはサブクエリが有効です。
（HAVINGを上手く使うことで別解があるような気もします…）

</details>


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


# 今回はSQL演習条件指定編 11問
SQLの基本であるSELECT文に加えて、WHERE句、データの検索条件を指定するための算術演算子、比較演算子、論理演算子に関する練習問題に取り組みます。

## 1問目： WHERE(数値の条件)

「発行年」が「2020年」の「書籍一覧」を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/3672cb0b-1183-f326-4b11-01daf4ef75b2.png)

<details><summary>解答</summary>

```ruby:
SELECT *
FROM books
WHERE release_year=2020;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/04dca5be-0100-2d95-3e32-53948232e669.png)

</details>

## 2問目： WHERE(文字列の条件)

「書籍名」が「宇宙の歴史」のデータを取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/3672cb0b-1183-f326-4b11-01daf4ef75b2.png)

<details><summary>解答</summary>

```ruby:
SELECT *
FROM books 
WHERE name='宇宙の歴史';
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/f05d86e6-b9ea-4e86-d21e-0ef9309ffcdb.png)

</details>

## 3問目： LIKE(フィルタリング)

「マンガ」というキーワードを含む「書籍一覧」を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/3672cb0b-1183-f326-4b11-01daf4ef75b2.png)

<details><summary>解答</summary>

```ruby:
SELECT *
FROM books 
# % はワイルドカード文字（任意の文字列）
# %マンガ% は、「マンガ」という文字列の前後に任意の文字列があってもよいという意味
WHERE name LIKE '%マンガ%';
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/c15a6e7b-fe90-6183-a298-001835e7f873.png)


</details>

## 4問目： LIMIT(制限)

「男性」の「著者」を先頭から3名取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/9671e89f-0e95-3e86-bbbf-f47f826e4fd9.png)


<details><summary>解答</summary>

```ruby:
SELECT *
FROM authors
WHERE gender='男性'
# LIMITにより出力行数を制限
LIMIT 3;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/baeb36c1-9674-0f97-c62b-74266d1b2578.png)


</details>


## 5問目： IS NOT NULL

「発行年」が明記されている「書籍一覧」を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/6ba60f10-4f2a-3b70-32cd-27b3efa4e0b5.png)


<details><summary>解答</summary>

```ruby:
SELECT *
FROM books
WHERE release_year IS NOT NULL;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/ed96c066-6eeb-bd4e-f83c-ea4a13adc257.png)

IS NOT は主にNULLを除去するために使用。
「2017年以外を取得」などのときはIS NOT ではなく != や <> を使う。
→10問目


</details>


## 6問目： BETWEEN and

「総ページ数」が「300~400ページ」の「書籍一覧」を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/6ba60f10-4f2a-3b70-32cd-27b3efa4e0b5.png)


<details><summary>解答</summary>

```ruby:
SELECT *
FROM books
WHERE total_page BETWEEN 300 and 400;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/32773ecb-8b04-0f6a-30a9-51aca4b52093.png)


</details>


## 7問目： IN

「発行年」が「2004, 2008, 2018年」の「書籍一覧」を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/6ba60f10-4f2a-3b70-32cd-27b3efa4e0b5.png)


<details><summary>解答</summary>

```ruby:
SELECT *
FROM books
WHERE release_year IN (2004,2008,2018);
```


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/97ab58fe-1421-9705-d3c8-fc6f5f56c93c.png)


</details>


## 8問目： 四則演算

「書籍」の「税込価格一覧」を取得してください。消費税率は10%です。
出力項目は「book_id」と「tax_included_price」

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/97c6da28-d566-107d-0b71-26706a6ec7f1.png)


<details><summary>解答</summary>

```ruby:
SELECT book_id, price*1.1 AS tax_included_price
FROM book_sales
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/e7077fc2-8087-60ad-0a2c-ab11e57bac4c.png)

</details>

## 9問目： 比較演算(大小関係)

「総ページ数」が「100ページ未満」の「書籍一覧」を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/e70e639f-4459-aa8d-84fe-f93861de62fb.png)


<details><summary>解答</summary>

```ruby:
SELECT *
FROM books
WHERE total_page < 100;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/eca552a9-7263-e31e-e7cf-f299dcac2e3e.png)


</details>

## 10問目： 比較演算(〜以外)

「定休日」が「月曜日ではない」「店舗一覧」を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/5a9630ef-8d34-e18e-fcf2-0860eed6afa7.png)


<details><summary>解答</summary>

```ruby:
SELECT *
FROM stores
WHERE holiday != '月曜日';
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/8fbe4e9b-d3f9-483c-10b8-217dace08b35.png)

「〇〇以外を取得」のときは != '〇〇' や <> '〇〇' を使う。
IS NOT は主にNULLを除去するために使用。

</details>

## 11問目： 論理演算（〜かつ〜）

「発行年」が「2000年以上」かつ、「総ページ数」が「200ページ以下」の「書籍一覧」を取得してください。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/6c663ee1-8107-74a2-1917-15e50cf62022.png)


<details><summary>解答</summary>

```ruby:
SELECT *
FROM books
WHERE release_year >= 2000 
AND total_page <= 200;
#命令後は基本1つで改行
```
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/7cbd6869-3347-6278-ceaf-202e9f78db04.png)


</details>


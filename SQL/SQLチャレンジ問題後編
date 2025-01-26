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
SQLの基本の復習を兼ねて、いろんなパターンのチャレンジ問題に挑戦してみま！ 




## 1問目：カテゴリー毎売上トップ3に並び替え

「売上」が多い「カテゴリーTOP3」を取得してください。
売上はprice × figureで求められます。
出力項目はname(カテゴリー名)とsales(売上)です。



![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/a3bdb49c-31cd-e67e-a558-dbd3af0a0cad.png)


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/072c5045-252d-46ee-1842-d8175a346b83.png)


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/ecae47fe-568f-1fb6-ce16-06917acdbb57.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/507a1f80-968f-934f-7641-2c6bf41910e0.png)



<details><summary>解答</summary>

```ruby:
SELECT categories.name, SUM(book_sales.price* book_sales.figure) AS sales
FROM books

#price,figureを出力するため結合
JOIN book_sales
ON books.id = book_sales.book_id

#本ごとのカテゴリーを結合
JOIN book_categories
ON books.id = book_categories.book_id

#カテゴリー名を結合
JOIN categories
ON book_categories.category_id = categories.id

#カテゴリー名ごとにグループ化後並び替え
GROUP BY categories.name
ORDER BY sales DESC
LIMIT 3;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/d71fb827-a380-18f5-d536-08bf1ce42eb3.png)


最初に解いた際、冒頭一行目を以下のように書いていました。
```ruby:
SELECT categories.name, SUM(book_sales.price* book_sales.figure) AS sales
```

book_sales.price * book_sales.figure AS salesを使用していますが、これでは各販売の売上を計算しているだけです。
グループ化 (GROUP BY categories.name) がされているにもかかわらず、SUM関数が使用されていないため、カテゴリごとの売上の合計ではなく、個々の売上の計算結果がそのまま出力されています。
これでは、正しい売上の合計が出力されません。

</details>



## 2問目：2つの項目で並び替え

「出版タイトル数」が多い「著者TOP3」を取得してください。
また、「著者名」は「昇順」で並び替えてください。
出力項目はname(著者名)とpublished_title_num(出版タイトル数)です。



![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/9c3130c0-ffb9-245f-da97-78f5cdff831e.png)


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/9ad9cf3e-09a5-2176-e71d-82e4a71e501d.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/ebde8b89-e9a4-08ad-629d-632e46e4afa8.png)



<details><summary>解答</summary>

```ruby:
SELECT authors.name, COUNT(*)AS published_title_num
FROM authors

JOIN book_authors
ON authors.id=book_authors.author_id

JOIN books
ON book_authors.book_id= books.id

#authors.nameでまとめる
GROUP BY authors.name

#著者毎の売上でまとめ、著者名で並び替える。
ORDER BY published_title_num DESC, authors.name
LIMIT 3;
```


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/0376461b-34ef-d205-d969-5851a1a0cbce.png)


別解：JOINする順番は前後してもOKです。
```ruby:
SELECT authors.name, COUNT(*) AS published_title_num
FROM books
JOIN book_authors
ON books.id = book_authors.book_id
JOIN authors
ON book_authors.author_id = authors.id
GROUP BY authors.name
ORDER BY published_title_num DESC, authors.name
LIMIT 3;
```

</details>



## 3問目：グループ化したテーブルの条件抽出

「複数のカテゴリー」に属している「書籍名」の一覧を取得してください。
出力項目はname(書籍名)です。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/a3bdb49c-31cd-e67e-a558-dbd3af0a0cad.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/9ad9cf3e-09a5-2176-e71d-82e4a71e501d.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/ebde8b89-e9a4-08ad-629d-632e46e4afa8.png)



<details><summary>解答</summary>

```ruby:
SELECT books.name
FROM books

JOIN book_categories
ON books.id= book_categories.book_id

JOIN  categories
ON book_categories.category_id=categories.id

#書籍名ごとにグループ化後、条件抽出
GROUP BY books.name
HAVING COUNT(books.name) >= 2;
```
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/aa2510ed-3ec7-e04c-411d-12c98e521b8c.png)


</details>


## 4問目：特定の文字を含むレコードの取り出し

書籍名に「宇宙」または「星」を含んでおり、
かつ「著者」が「女性」の「書籍名」を取得してください。
出力項目はname(書籍名)です。



![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/0fb13533-3932-737c-6965-527d3d22b7c1.png)


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/9ad9cf3e-09a5-2176-e71d-82e4a71e501d.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/ebde8b89-e9a4-08ad-629d-632e46e4afa8.png)



<details><summary>解答</summary>

```ruby:
SELECT books.name
FROM books

JOIN book_authors
ON books.id = book_authors.book_id
JOIN authors
ON book_authors.author_id = authors.id

# %で挟むことで”〜を含む”を抽出可能
# ()を忘れない 
WHERE (books.name LIKE '%宇宙%' OR books.name LIKE '%星%') 
	AND authors.gender='女性';

```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/36a65bc7-a03e-1945-d9a4-761c8c3af078.png)



</details>


## 5問目：データベースの更新（DELETE,UPDATE,INSERT）

idが1のイベントを削除し、idが2のイベントの最大人数を200に更新してください。
イベントテーブルに「イベント名：古本まつり、最大人数：75人」のイベントを追加してください。
イベント一覧を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/3b1d8bc1-e3ae-8669-dde3-3b72733013a2.png)


<details><summary>解答</summary>

```ruby:
#id=1で条件抽出したものを削除
DELETE
FROM events
WHERE id=1;

#id=2で条件抽出し、指定されたカラムをSETで変更し更新
UPDATE events
SET max_num = 200
WHERE id = 2;

#新しいレコードの挿入
INSERT INTO events (id, name, max_num) 
VALUES (3, '古本まつり', 75);

#最後にSELECT
SELECT *
FROM events

```
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/18857c0b-4337-2ffb-29d2-a882b3ac3fde.png)

この問題は何度か復習したいと思います。

</details>

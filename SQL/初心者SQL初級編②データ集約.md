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


# 今回はSQL演習データの集約編 7問
SQLの基本であるSELECT文に関する練習問題に取り組みます。

## 1問目：COUNT

「女性」の「著者数」を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/8313e34f-e2ec-fda0-9ea4-5a6074c99a8b.png)

<details><summary>解答</summary>

```ruby:
SELECT  COUNT(*) #authorsテーブルの行数をカウント
FROM authors
# gender列が「女性」である行をフィルタリング
WHERE gender = '女性';
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/728267b1-22be-f09a-b05c-16f32a58f9ab.png)


</details>


## 2問目：SUM

「書籍」の「販売数(figure)」の「合計値」を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/a5c2f034-ed14-38a3-a531-edfa4a228269.png)


<details><summary>解答</summary>

```ruby:
SELECT  SUM(figure)
FROM book_sales;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/908d8e6f-b053-691f-3167-fb90ca05bae8.png)


</details>

## 3問目：AVG

「書籍」の「総ページ数」の「平均値」を取得してください。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/677a4085-9c4c-b379-0e86-f501c7bae60d.png)

<details><summary>解答</summary>

```ruby:
SELECT  AVG(total_page)
FROM books;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/4c2b28c2-8825-1cc0-5fc2-6433d14f2349.png)


</details>


## 4問目：MAX,MIN

「書籍」の「総ページ数」の「最大値」「最小値」を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/677a4085-9c4c-b379-0e86-f501c7bae60d.png)

<details><summary>解答</summary>

```ruby:
SELECT  MAX(total_page),MIN(total_page)
FROM books;
```
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/eb17a735-f1de-27c0-0859-24b94e26b566.png)


</details>


## 5問目：ORDER BY (並び替え)

「書籍一覧」を「発売年」が「新しい順」に並び替えて取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/677a4085-9c4c-b379-0e86-f501c7bae60d.png)

<details><summary>解答</summary>

```ruby:
SELECT *
FROM books
ORDER BY release_year DESC;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/5c5cd927-42fe-1a86-56a4-3826ee807fb7.png)


</details>


## 6問目：GROUP BY (ユニーク数取得)

「発行年毎」の「書籍数」を取得してください。
また、「書籍数」は「降順」に並び替えてください。
出力項目は「release_year」と「books_num」です。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/677a4085-9c4c-b379-0e86-f501c7bae60d.png)

<details><summary>解答</summary>

```ruby:
SELECT release_year,COUNT(*) AS books_num
FROM books
GROUP BY release_year #発行年ごとにまとめる 
ORDER BY books_num DESC;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/a17834f7-7bb2-d0e8-47cb-b53535de6b0c.png)


</details>

## 7問目：HAVING (追加条件)

「発行年別」の「書籍数」を取得してください。
また、「書籍数」は「降順」に並び替え、「書籍数」が「2つ以上」のデータを取得してください。
出力項目は「release_year」と「books_num」です。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/677a4085-9c4c-b379-0e86-f501c7bae60d.png)

<details><summary>解答</summary>

```ruby:
SELECT release_year,COUNT(*) AS books_num
FROM books
GROUP BY release_year 
HAVING COUNT(*) >= 2
ORDER BY books_num DESC;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/0114b391-def5-748c-adaf-204356aa1d0f.png)

HAVINGは集計関数を直接使用しなければならず、エイリアス名を使うことはできません。
そのため、以下のコードではエラーが起きます。

```ruby:
SELECT release_year,COUNT(*) AS books_num
FROM books
GROUP BY release_year 
HAVING books_num >= 2 # books_numはエイリアス名
ORDER BY books_num DESC;
```

</details>

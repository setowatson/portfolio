
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


# 今回はSQL演習データの編集編 6問
SQLの基本であるSELECT文に関する練習問題に取り組みます。

## 1問目：INSERT(カラムの追加)

イベントテーブルに「イベント名：2022 WEBデザイントレンド、最大人数：100人」のイベントを追加後、イベント一覧を取得してください。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/f2eabc85-b0ff-daec-b6bd-82a7d4c52ecc.png)

<details><summary>解答</summary>

```ruby:
INSERT INTO events(id,name,max_num) VALUES(3,'2022 WEBデザイントレンド', 100人);
SELECT * 
FROM events;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/f8cb0b6f-017f-7841-b6df-37629538122a.png)

INSERT 追加するテーブル(レコード1,レコード2,,,) VALUE(追加するレコード1,追加するレコード2,,,)

</details>


## 2問目：UPDATE(カラムの更新)

イベント「最新の英語学習法を学ぼう」の「最大人数」を「30人」に変更して、
イベント一覧を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/f2eabc85-b0ff-daec-b6bd-82a7d4c52ecc.png)

<details><summary>解答</summary>

```ruby:
UPDATE events #冒頭のUPDATEで更新するデータベースを宣言
SET max_num = 30 #SETで変更点
WHERE name = '最新の英語学習法を学ぼう'; #WHEREでレコードを指定
#WHERE id=2; でも可
SELECT * 
FROM events;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/338bb19d-36a4-eda6-9fe8-1156275f0a34.png)

更新の順序
1.　UPDATE…更新を宣言
2.　SETで変更点を指定
3.　WHEREで変更するレコードを指定

注意点として、WHEREのあとに、;を忘れないこと。
正確には、「UPDATE」「SELECT」は別のSQLコマンドのため、
１つのステートメントに収められない。
１つで書く場合は、セミコロンで区切って記述する。

</details>


## 3問目：DELETE(カラムの削除)

イベント「最新の英語学習法を学ぼう」を削除して、イベント一覧を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/f2eabc85-b0ff-daec-b6bd-82a7d4c52ecc.png)

<details><summary>解答</summary>

```ruby:
DELETE FROM events
WHERE id=2; #;セミコロンを忘れない
SELECT * 
FROM events;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/22f789e4-cf64-159c-0549-7c1d8d6bc7c9.png)

</details>

## 4問目：サブクエリ

書籍名「コードと回路」より「総ページ数」の「多い書籍一覧」を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/3582006f-744d-31f2-df74-0dc4c497b5e8.png)


<details><summary>解答</summary>

```ruby:
SELECT * 
FROM books
WHERE total_page > (
    SELECT total_page 
    FROM books 
    WHERE name ='コードと回路'
    );
#命令後ごとに改行

```


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/670004b6-f07e-cdfe-36d8-f72902b45be0.png)


</details>


## 5問目：サブクエリ(複数条件)

書籍名「時短レシピ100」または「かもめ飛行」と発行年が同じ書籍一覧を取得してください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/3582006f-744d-31f2-df74-0dc4c497b5e8.png)


<details><summary>解答</summary>

```ruby:
SELECT * 
FROM books
WHERE release_year IN ( 
    SELECT release_year 
    FROM books 
    WHERE name = '時短レシピ100' 
    OR name= 'かもめ飛行'
    );

```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/d7b5e03e-b35e-d407-009f-fb7b0f4cc68e.png)


INはサブクエリが、複数の値を返すさいに使います。

</details>

## 6問目：JOIN

「書籍テーブル」と「著者テーブル」を結合してください。
出力項目は「book_name」と「author_name」です。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/67f9c860-5e69-8a03-85b9-c50585d4c9d0.png)


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/e694d96d-3bf1-d1e0-377c-93128d7e5383.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/be343f09-0969-85ef-03c8-ab36748121f5.png)


<details><summary>解答</summary>

```ruby:
SELECT books.name AS book_name, authors.name AS author_name
FROM books #ベースとなるデータベースを選択
JOIN book_authors　#booksデータベースにbook_authorsデータベースを結合
ON books.id = book_authors.book_id　#キーは書籍ごとのid
JOIN authors #booksデータベースにauthorsデータベースを結合
ON book_authors.author_id = authors.id;　#キーは著者ごとのid
```
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/d8009b40-ec4a-bfff-f2c6-9ba14e119edc.png)



ちなみにコード１行目を「SELECT * 」にすると以下の出力になる。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3780099/c40757d4-43e5-dfb6-efdc-d26a1e0d4120.png)






</details>



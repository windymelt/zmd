# ZMM XMLの基礎

このページでは、ZMMで用いる原稿XMLの基礎を解説します。

## 全体構造

ZMM XMLは、**XML宣言**、**content**要素で構成されています。

### XML宣言

```xml
<?xml version="1.0" encoding="utf-8" ?>
```

XML宣言は、すべてのXML文書で必要な宣言です。したがって、XML宣言はZMM固有の概念ではありませんが、念のため記載しました。

### `content`要素

```xml
<content>
  <meta><!-- ... --></meta>
  <predef><!-- ... --></predef>
  <dialogue><!-- ... --></dialogue>
</content>
```

`content`要素は、ZMM XMLのルート要素です。

ユーザは、`content`要素の中に、動画生成に必要な全てのテキスト情報を格納します。

`content`要素は、いくつかの要素をまとめたものです:

- meta要素
  - VOICEVOXの声の設定などを記述する。
- predef要素
  - コードブロックや数式など、あらかじめ定義しておくものを記述する。
- dialogue要素
  - 動画の本体。会話文をここに記述する。

各要素の詳細については、各解説ページを参照してください。

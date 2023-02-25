# `p`タグで発言を区切る

空の`p`タグは、`say`を区切ります。以下の2つのXMLは等価です:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<content version="0.0">
<!-- 略 -->
<dialogue>
<say by="character1">Hello<p/>world</say>
</dialogue>
</content>
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<content version="0.0">
<!-- 略 -->
<dialogue>
<say by="character1">Hello</say>
<say by="character1">world</say>
</dialogue>
</content>
```

**空の`p`タグで区切られた内容は、上位のsay要素のcontextを継承します。** したがって、空の`p`タグで区切ることで、同一contextの連続する発言を略記することができます。

このテクニックは、同一のキャラクターがいくつかの発言を連続する場合に特に有効です。

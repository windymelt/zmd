# characterconfig

`characterconfig`要素は、動画上に登場するキャラクターの設定を行います。

将来的にVOICEVOX以外の音声エンジンに対応できるようにするため、キャラクターの設定と音声の設定が分離しています。

まず[voiceconfig](./voiceconfig)で音声設定を定義し、それを`characterconfig`でキャラクターと紐付けてください。

**今のところ、キャラクターは表情ごとに作成する必要があります**(例: ノーマル用のキャラクター、笑っているとき用のキャラクター)

## 例

以下の例では、`char1`というキャラクターを、音声設定「`metan`」で作成しています。

```xml
<characterconfig
  name="char1"
  voice-id="metan"
  serif-color="#E14D2A"
  tachie-url="../../assets/metan.png"
/>
```

### 属性

- `name`
  - 呼び出し用のIDです
- `voice-id`
  - [voiceconfig](./voiceconfig)で設定したID
  - その声をキャラクターと結び付けます
- `serif-color`
  - そのキャラクターが発話しているときに画面に表示する字幕の色を設定します
  - 内部的にはCSSで使える色表記を使うことができます(変更されることがあります)
- `tachie-url`
  - そのキャラクターの立ち絵を設定します
  - **今のところ、`../../assets/画像`の形式で指定する必要があります。**
  - _将来的には`assets:画像`の形式で指定できるようにしたい_

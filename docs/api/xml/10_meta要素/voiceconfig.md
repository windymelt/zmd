# voiceconfig

`voiceconfig`要素は、キャラクターに対応する声を設定します。**現在、VOICEVOXのみに対応しています。**

## 例

```xml
<voiceconfig id="metan" backend="voicevox">
  <voicevoxconfig id="2" />
</voiceconfig>
```

## 属性

- `id`
  - 音声設定にIDを付けます。[characterconfig](./characterconfig)で参照するためのIDです。
- `backend`
  - 音声のバックエンドを設定します。
  - 現在は`VOICEVOX`固定です。

## voicevoxconfig

`voicevoxconfig`要素は、`voiceconfig`内で現在設定できる唯一の設定です。

`voicevoxconfig`要素は、VOICEVOXで発話させるための設定を記述します。

### 属性

- `id`
  - VOICEVOX上の話者IDを設定してください。
  - 例: `2` (四国めたん ノーマルボイス)

話者IDは、[`show voicevox`コマンド](/docs/api/command/show/voicevox)で確認できます。

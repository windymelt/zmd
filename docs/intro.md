---
sidebar_position: 1
---

# チュートリアル

**ZMMの使い方を10分で学ぼう。**

## ZMMとは？

**ずんだムービーメーカー(zmm)** は、VOICEVOXを使った解説動画を無料で作成するためのツールです。
XMLファイルを書くことで、効率的にテキストを解説動画へと変換できるのが特徴です。

**WIP: ここにXMLと動画を貼る**

```xml
<?xml version="1.0" encoding="utf-8" ?>
<content version="0.0">
  <meta>
    <voiceconfig id="metan" backend="voicevox">
      <voicevoxconfig id="2" />
    </voiceconfig>
    <voiceconfig id="zundamon" backend="voicevox">
      <voicevoxconfig id="3" />
    </voiceconfig>
    <characterconfig name="metan" voice-id="metan" serif-color="#E14D2A" tachie-url="../../assets/metan.png" />
    <characterconfig name="zundamon" voice-id="zundamon" serif-color="#379237" tachie-url="../../assets/zunda.png" />
  </meta>
  <dialogue backgroundImage="../../assets/background.jpeg" bgm="assets/bgm.mp3">
  <say by="zundamon">こんにちはなのだ</say>
  <say by="metan">ずんだもん、こんにちは</say>
  <say by="zundamon">難しい操作は不要なのだ</say>
  </dialogue>
</content>
```

## ZMMをインストールする

ZMMを動かすためには、以下のうちどちらかが必要です。

- Docker (おすすめです)
- Java + Chromium + FFmpeg + VOICEVOX Engine (上級者向け!!)

次の各項目では、両方のインストール手順を解説します。どちらでも動きます。

### Dockerを使ったインストール

TODO: 起動時に必要なディレクトリを掘るようにする

**Docker**とは、プログラムをパッケージ化してどこでも動くようにするためのありがたいツールです。
Dockerがあれば、PCの環境を汚さずにどこでもプログラムを動かすことができます。

#### Dockerをインストールする

Dockerをまだ持っていない場合は、ZMMを動かす前に、Dockerをインストールしましょう。

使っているOSに対応する以下の手順を踏んでインストールしてください。

- [Windows](https://docs.docker.jp/docker-for-windows/install.html)
- [Mac](https://docs.docker.jp/docker-for-mac/install.html)
- [Linux](https://docs.docker.jp/desktop/install/linux-install.html)
- FreeBSD → ごめんね・・・。

#### フォルダを用意する

(ここはあとで不要になる予定)

素材を用意したりするためのフォルダを用意します。トップのフォルダの名前は何でもよいですが、ここでは
`movie` としました。

```
movie
├── artifacts
│   └── html
└── assets
```

このディレクトリに以下の内容で `docker-compose.yml` を配置してください:

```yaml
version: "3.9"
services:
  zmm:
    image: windymelt/zmm:latest
    volumes:
      - "./:/app"
      # 手元にあるフォントを使えるようにする措置
      - "$HOME/.fonts/:/root/.fonts:ro"
    working_dir: /app
    environment:
      - "VOICEVOX_URI=http://voicevox-cpu:50021"
      - "CHROMIUM_CMD=chromium-browser"
      - "CHROMIUM_NOSANDBOX=1"
    mem_limit: 4g
  voicevox-cpu:
    image: voicevox/voicevox_engine:cpu-ubuntu20.04-latest
    ports:
      - "50021:50021"
    mem_limit: 4g
```

#### 原稿ファイルを用意する

ZMMでは、原稿をXMLで作成します。
冒頭に示したXMLファイルをコピーして、 `source.xml`
という名前で保存しましょう(名前は何でもかまいません)。

以下のような状態になっているはずです。

```
movie
├── artifacts
│   └── html
├── assets
└── source.xml
```

#### 素材を用意する

動画には、立ち絵とBGMと背景が必要です。サンプルXMLでは以下のような素材が必要です:

- `movie/assets/background.jpeg`
- `movie/assets/bgm.mp3`
- `movie/assets/metan.png`
- `movie/assets/zunda.png`

`assets/`フォルダに各素材を用意しておきましょう。

以下のような状態になっているはずです。

```
movie
├── artifacts
│   └── html
├── assets
│   ├── background.jpeg
│   ├── bgm.mp3
│   ├── metan.png
│   └── zunda.png
└── source.xml
```

#### ZMMを起動する

まず以下のコマンドを実行して、VOICEVOX Engineを起動しておきます。

```shell
docker compose up voicevox-cpu
```

別のウィンドウで以下のコマンドを実行して、ZMMを起動しましょう。

```shell
docker compose run --rm zmm source.xml
```

するとZMMが動画処理を開始し、 `output_with_bgm.mp4` に動画が生成されます。

```
 _________  ______  ___
|___  /|  \/  ||  \/  |
   / / | .  . || .  . |
  / /  | |\/| || |\/| |
./ /___| |  | || |  | |
\_____/\_|  |_/\_|  |_/
0.2.0.3
[pwd] /app
[configuration] voicevox api: http://voicevox-cpu:50021
[configuration] chromium command: chromium-browser
[configuration] ffmpeg command: ffmpeg
Invoking audio api...
⡈ Applying BGM
Done!
```

ZMMの動画作成フローは、このようなステップで行われます。

0. フォルダや素材を用意する
1. XMLファイルを編集する
2. ZMMを起動して動画を生成する
3. XMLファイルを修正する
4. (繰り返し)

### Javaを使ったインストール

疲れたからあとで書く

## チュートリアル完了!

おめでとうございます、チュートリアルは以上です。ここからさらにZMMの各機能を学ぶことができます。

- [キャラクター設定を行う](./chara.md)

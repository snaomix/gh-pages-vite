# gh-pages-vite

[![Deploy GitHub Pages](../../actions/workflows/build.yml/badge.svg)](../../actions/workflows/build.yml)

Viteを使って[GitHub Pages]へウェブサイトをデプロイするちょっとしたデモ。
Viteの[ガイド]、[静的サイトのデプロイ]ページにしたがってスタートします。
デザインは[Bootstrap] v5、画像は[unsplash]のものを使用します。

## note:
* Vite v8以降を使用しています
* Node.js v24以降(see [Node.js release schedule])
* [GitHub Actions]を使用してデプロイ
* [Stylelint]、[Prettier]、[ESLint]を使用
* コンテナ化対応（[Podman] / Docker ・`node:24-slim` ベース）
* VS Code「[Dev Containers]」対応

## how to start

はじめにソースコードをclone:
```bash
git clone git@github.com:snaomix/gh-pages-vite.git
```

ディレクトリ移動:
```bash
cd gh-pages-vite
```

## how to setup

### コンテナ開発する場合

#### 前提条件
- **コンテナ実行環境（[Podman] または Docker）が利用可能であること**
- VS Code、VS Codeの拡張機能: [Dev Containers]をインストール＆有効化

1. VS Code を開きます。
2. コマンドパレット（`Cmd + Shift + P`、Windowsは `Ctrl + Shift + P`）を開き、`Dev Containers: Reopen in Container` を選択します。

#### 注意点
- Dockerfile、.dockerignoreは開発用ではありません

### ホストPC（ローカル環境）で開発する場合

#### 前提条件
- Node.jsがインストール済み

1. nodeパッケージをインストール
```bash
npm install
```

## scripts

### 開発

開発サーバーを起動（localhost:5173）
```bash
npm run dev
```

ネットワーク接続可能な開発サーバーを起動
```bash
npm run dev:host
```

### ビルド

本番用にビルド（dist ディレクトリに出力）
```bash
npm run build
```

ビルド結果をプレビュー
```bash
npm run preview
```

ビルド結果をプレビュー（ネットワーク経由）
```bash
npm run preview:host
```

### リント・フォーマット

Sass(SCSS)をチェックする([Stylelint])
```bash
npm run lint:css
```

Sass(SCSS)のフォーマットチェック([Prettier])
```bash
npm run check:css
```

Sass(SCSS)を自動修正([Stylelint]) :warning: ファイルが上書きされます
```bash
npm run fix:css
```

HTMLをチェックする([ESLint])
```bash
npm run lint:html
```

JSをチェックする([ESLint])
```bash
npm run lint:js
```

JS, JSONのフォーマットチェック([Prettier])
```bash
npm run check:js
```

JSを自動修正([ESLint]) :warning: ファイルが上書きされます
```bash
npm run fix:js
```

Sass(SCSS)を整形する([Prettier]) :warning: ファイルが上書きされます
```bash
npm run format:css
```

JS, JSONを整形する([Prettier]) :warning: ファイルが上書きされます

```bash
npm run format
```

### Dockerfile・.dockerignore について

:warning: 開発時には使用しません
- [Dockerfile](/Dockerfile): 配布用イメージの作成
- [.dockerignore](/.dockerignore): イメージビルド時に、ローカルの不要なファイル（node_modules等）をコンテナ内にコピーさせないための除外リスト

1. コンテナイメージのビルド([podman]利用時の手順)
```bash
podman build -t gh-pages-vite-image .
```

2. コンテナ環境で開発サーバ起動
- VS Codeを開いた状態で、キーボードの `Cmd + Shift + B`（Windowsは `Ctrl + Shift + B`）

## setting GitHub Actions & run workflow
1. GitHub Freeの場合、パブリックリポジトリに設定しておく
1. Settings > Pages > Build and deploymentのSourceを「GitHub Actions」を選択
1. Actions > Deploy GitHub Pages > Run workflow > 「Run workflow」を選択

## ⚙️ CI/CD とセキュリティ（GitHub Actions）について

**SBOM（ソフトウェア部品構成表）の自動生成**と**ビルド証明（Attestation）の作成**を自動で行っています。

> [!IMPORTANT]
> リポジトリまたは組織のActions設定で **「Allow actions created by GitHub（GitHub公式アクションのみ許可）」** という制限を有効にしている場合、SBOM生成に使用している **Anchore社のSyft（[anchore/sbom-action]）** がブロックされ、ワークフローがエラーになります。
> その場合は、以下の手順でこのアクションを個別に許可してください。

<details>
<summary><b>🛠️ ワークフローを実行するためのGitHub Actions設定手順（クリックで開く）</b></summary>

1. リポジトリの Settings ＞ Actions ＞ General を開きます。
2. **「Allow actions created by GitHub」** にチェックが入っていることを確認します。
3. その下にあるテキストエリア（Allow or block specified actions and reusable workflows）に、以下の2行を改行して入力します。

```text
anchore/sbom-action@*
anchore/sbom-action/download-syft@*
```
</details>

[GitHub Pages]: https://docs.github.com/ja/pages
[GitHub Actions]: https://docs.github.com/ja/actions
[ガイド]: https://ja.vite.dev/guide/
[静的サイトのデプロイ]: https://ja.vite.dev/guide/static-deploy.html
[Bootstrap]: https://getbootstrap.com/
[unsplash]: https://unsplash.com/
[Stylelint]: https://stylelint.io/
[Prettier]: https://prettier.io/
[ESLint]: https://eslint.org/
[Node.js release schedule]: https://github.com/nodejs/release#release-schedule
[anchore/sbom-action]: https://github.com/anchore/sbom-action
[Podman]: https://podman.io/
[Dev Containers]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers

## more info

* [GitHub Pagesのドキュメンテーション](https://docs.github.com/ja/pages) … docs.github.com
* [GitHub Pages examples](https://github.com/collections/github-pages-examples) … github.com
* [GitHub Actionsのドキュメント](https://docs.github.com/ja/actions) … docs.github.com

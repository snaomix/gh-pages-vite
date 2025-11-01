# gh-pages-vite

[![Deploy GitHub Pages](../../actions/workflows/build.yml/badge.svg)](../../actions/workflows/build.yml)

Viteを使って[GitHub Pages]へウェブサイトをデプロイするちょっとしたデモ。
Viteの[ガイド]、[静的サイトのデプロイ]ページにしたがってスタートします。
デザインは[Bootstrap] v5、画像は[unsplash]のものを使用します。

## note:
* Vite v7以降を使用しています
* Node.js v24以降(see [Node.js release schedule])
* [GitHub Actions]を使用してデプロイ
* [Stylelint]、[Prettier]、[ESLint]を使用(HTMLHintによるチェック廃止)

## how to start

はじめにソースコードをclone:
```bash
git clone git@github.com:snaomix/gh-pages-vite.git
```

nodeパッケージをインストール
```bash
cd gh-pages-vite
npm install
```

ウェブサイトをビルド＆ローカルでテスト:
```bash
npm run build
npm run preview
```

ウェブサイトをdevモードで起動:
```bash
npm run dev
```

Sass(SCSS)をチェックする([Stylelint])
```bash
npm run lint:css
```

Sass(SCSS)をチェックする([Prettier])
```bash
npm run check:css
```

HTMLをチェックする([ESLint])
```bash
npm run lint:html
```

JSをチェックする([ESLint])
```bash
npm run lint:js
```

Sass(SCSS)を整形する([Prettier]) :warning: ファイルが上書きされます
```bash
npm run format:css
```

JS, JSONを整形する([Prettier]) :warning: ファイルが上書きされます

```bash
npm run format
```

## setting GitHub Actions & run workflow
1. GitHub Freeの場合、パブリックリポジトリに設定しておく
1. Settings > Pages > Build and deploymentのSourceを「GitHub Actions」を選択
1. Actions > Deploy GitHub Pages > Run workflow > 「Run workflow」を選択

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

## more info

* [GitHub Pagesのドキュメンテーション](https://docs.github.com/ja/pages) … docs.github.com
* [GitHub Pages examples](https://github.com/collections/github-pages-examples) … github.com
* [GitHub Actionsのドキュメント](https://docs.github.com/ja/actions) … docs.github.com

# gh-pages-vite

[![Deploy GitHub Pages](../../actions/workflows/build.yml/badge.svg)](../../actions/workflows/build.yml)

Viteを使って[GitHub Pages]へウェブサイトをデプロイするちょっとしたデモ。
Viteの[ガイド]、[静的サイトのデプロイ]ページにしたがってスタートします。
デザインは[Bootstrap] v5、画像は[unsplash]のものを使用します。

## note:
* Vite v4.5以降を使用しています
* Node.js v20以降(see [Node.js release schedule]) ＋dart-sassを使用

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

[GitHub Pages]: https://docs.github.com/ja/pages
[GitHub Actions]: https://docs.github.com/ja/actions
[ガイド]: https://ja.vitejs.dev/guide/
[静的サイトのデプロイ]: https://ja.vitejs.dev/guide/static-deploy.html
[Bootstrap]: https://getbootstrap.com/
[unsplash]: https://unsplash.com/
[Node.js release schedule]: https://github.com/nodejs/release#release-schedule

## more info

* [GitHub Pagesのドキュメンテーション](https://docs.github.com/ja/pages) … docs.github.com
* [GitHub Pages examples](https://github.com/collections/github-pages-examples) … github.com
* [GitHub Actionsのドキュメント](https://docs.github.com/ja/actions) … docs.github.com

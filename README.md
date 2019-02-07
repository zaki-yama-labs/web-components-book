よくわかる Web Components
=======================

- Web Components とは
  - 部品の本質的な再利用を、web標準技術で可能にする概念
- メリット
  - ブラウザネイティブで動作する
  - ツールやライブラリに依存しない
  - 既存プロジェクトの技術と競合しにくい（ReactなどのUIライブラリと共存できる）
  - Shadow DOMによる本質的なスコープ
- 構成技術
  - Custom Elements
  - Shadow DOM
  - ES Modules

## 第3章

- 3.2 `attachShadow()` できるDOM要素は限定されている
  - article
  - aside
  - blockquote
  - body
  - div
  - h1, h2, ... , h6
  - header, main, footer
  - p, section, span, nav

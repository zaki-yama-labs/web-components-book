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
- 3.4 `<slot>` 要素を使うと、ホスト要素の子要素をShadow DOM内に挿入できる

```html
<div>
  #shadow-root
    <slot><!-- ここには2つの<p>が入る --></slot>
    <slot name="foo"><!-- ここには<button>が入る --></slot>

  <p>Inserted into default slot</p>
  <p>Also inserted into default slot</p>
  <button slot="foo">Inserted into slot[name=foo]</button>
</div>
```

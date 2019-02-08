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
  - ref. https://dom.spec.whatwg.org/#dom-element-attachshadow
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

## 第4章

- 4.4 `<script nomodule src=...>` とすると、ES Modulesに対応していない環境でのみスクリプトが読み込まれる
  - `<script type="module">` と併用できる

## 第5章

- 5.3 [lit-html](https://github.com/Polymer/lit-html)
  - Polymer チームが開発
  - 仮想DOMのような仕組みを使って効率よくDOMを更新できる
  - ``html`<div>...` `` でテンプレートを記述し
  - `render(this.template, this.shadowRoot)` で render する

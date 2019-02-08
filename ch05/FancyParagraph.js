import { html, render } from "lit-html";

class FancyParagraph extends HTMLElement {
  static get observedAttributes() {
    return ['color'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    render(this.template, this.shadowRoot);
  }

  attributeChangedCallback() {
    render(this.template, this.shadowRoot);
  }

  get template() {
    return html`
      <style>p { color: ${this.getAttribute('color'); }</style>
      <p><slot /></p>
    `;
  }
}

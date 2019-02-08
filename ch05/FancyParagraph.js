class FancyParagraph extends HTMLElement {
  static get observedAttributes() {
    return ['color'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = this.template;
  }

  attributeChangedCallback() {
    this.shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `
      <style>p { color: ${this.getAttribute('color'); }</style>
      <p><slot /></p>
    `;
  }
}

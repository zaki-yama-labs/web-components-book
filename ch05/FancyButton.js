class FancyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>button { font-size: 10px }</style>
      <button><slot /></button>
    `;
  }
}

customElements.define('fancy-button', FancyButton);

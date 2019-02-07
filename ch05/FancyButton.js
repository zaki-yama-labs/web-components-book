class FancyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <button><slot /></button>
    `;
    this.button = this.shadowRoot.querySelector('button');
  }

  connectedCallback() {
    this.addEventListener('click', this.onClick);
    this.button.addEventListener('click', this.onClickButton);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.onClick);
    this.button.removeEventListener('click', this.onClickButton);
  }

  onClick(e) {
    console.log(e, 'is clicked');
  }

  onClickButton(e) {
    console.log(e, 'is clicked');
  }
}

customElements.define('fancy-button', FancyButton);

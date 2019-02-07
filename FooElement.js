class FooElement extends HTMLElement {
  static get observedAttributes() {
    return ['foo'];
  }

  constructor() {
    super();
    console.log('<foo-element> is created');
  }

  connectedCallback() {
    console.log('<foo-element> is added to HTML');
  }

  disconnectedCallback() {
    console.log('<foo-element> is removed from HTML');
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName === 'foo') {
      console.log('Changed from ${oldValue} to ${newValue}');
    }
  }

  adoptedCallback() {
    console.log('<foo-element> is adopted in HTML');
  }
}

customElements.define('foo-element', FooElement);

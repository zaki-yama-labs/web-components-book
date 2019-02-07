class FooElement extends HTMLElement {
  static get observedAttributes() {
    return ['foo'];
  }

  get foo() {
    return this.getAttribute('foo');
  }

  set foo(value) {
    this.setAttribute('foo', value);
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

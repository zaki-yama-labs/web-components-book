const div = document.querySelector('div');
const shadowRoot = div.attachShadow({
  mode: 'open' // or 'closed'
});

const p = document.createElement('p');
p.textContent = 'Shadow DOM World!';
shadowRoot.appendChild(p);

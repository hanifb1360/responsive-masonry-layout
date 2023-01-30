class MasonryLayout extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          p {
            color: red;
          }
        </style>
        <p>Hello World!</p>
      `;
      shadow.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('masonry-layout', MasonryLayout);
  
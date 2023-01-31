class MasonryLayout extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
        <style>
          .grid {
            position: relative;
            max-width: 100%;
            height: 100vh;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px));
            grid-template-rows: minmax(100px, auto);
            margin:  0 40px;
            grid-auto-flow: dense;
            grid-gap: 10px;
          }

          .grid .grid-item:hover {
            background: #1ebae9;
        }
        
          
          .grid-item {
            background: #333;
            padding: 20px;
            display: grid;
            font-size: 20px;
            place-items: center;
            text-align: center;
            color: #fff;
            transition: 0.5s;
          }

          #grid-item-1 {
            grid-column: span 2;
            grid-row: span 1;
        }
        #grid-item-2 {
            grid-column: span 1;
            grid-row: span 2;
        }
        #grid-item-4 {
            grid-column: span 1;
            grid-row: span 2;
        }
        #grid-item-5 {
            grid-column: span 3;
            grid-row: span 1;
        }
        
        @media (max-width: 650px) {
          .grid {
            grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
            grid-template-rows: minmax(auto, auto);
          }
          .grid .grid-item {
            grid-column: unset !important;
            grid-row: unset !important;
          }
        }

        </style>
        <div class="grid">
        
        <div class="grid-item" id="grid-item-1">
        <p><slot name="desc"/></p>
        </div>

        <div class="grid-item" id="grid-item-2">
        <p><slot name="desc"/></p>
        </div>

        <div class="grid-item" id="grid-item-3">
        <p><slot name="desc"/></p>
        </div>

        <div class="grid-item" id="grid-item-4">
        <p><slot name="desc"/></p>
        </div>

        <div class="grid-item" id="grid-item-5">
        <p><slot name="desc"/></p>
        </div>

        <div class="grid-item" id="grid-item-6">
        <p><slot name="desc"/></p>
        </div>

        <div class="grid-item" id="grid-item-7">
        <p><slot name="desc"/></p>
        </div>

        </div>
      `;
  }
}

customElements.define("masonry-layout", MasonryLayout);

const html = String.raw;

class IndexHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.classList.add("header", "common-max-w", "common-pad-w");
    this.setAttribute("id", "header");

    this.innerHTML = html`
      <div class="header-top">
        <a href="#header">writings.dev</a>
        <nav>
          <a>categories</a>
          <a>articles</a>
          <a>about</a>
        </nav>
        <button class="header-top-hamburger common-button">open</button>
      </div>
      <div class="header-menu-mobile">
        <nav>
          <a class="header-menu-mobile-button common-button">categories</a>
          <a class="header-menu-mobile-button common-button">articles</a>
          <a class="header-menu-mobile-button common-button">about</a>
        </nav>
      </div>
      <div class="header-banner">
        <img src="public/logo.svg" alt="Logo">
        <h1>Writings for Developers</h1>
        <h2>Curated collection of articles for busy developers</h2>
      </div>
    `;

    const btn = this.querySelector('.header-top-hamburger')
    const menu = this.querySelector('.header-menu-mobile')

    btn.setAttribute('aria-expanded', 'false')

    btn.addEventListener('click', () => {
      const opened = menu.classList.toggle('open')
      btn.setAttribute('aria-expanded', String(opened))
      btn.textContent = opened ? 'close' : 'open';
    })

  }
}
customElements.define("custom-header", IndexHeader);
class IndexHeader extends HTMLElement {
  connectedCallback() {
      this.classList.add('header', 'common-max-w', 'common-pad-w');
      this.setAttribute('id', 'header')

    this.innerHTML = `
      <div class="header-top">
        <a href="#header">writings.dev</a>
        <nav>
          <a>categories</a>
          <a>articles</a>
          <a>about</a>
        </nav>
      </div>
      <div class="header-banner">
        <img src="public/logo.svg" alt="Logo">
        <h1>Writings for Developers</h1>
        <h2>Curated collection of articles for busy developers</h2>
      </div>
    `;
  }
}
customElements.define('custom-header', IndexHeader);

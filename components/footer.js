const footer = `
    <footer
      class="d-flex flex-wrap justify-content-between align-items-center my-4 border-top"
    >
      <div class="px-5 p-2">
        <p class="text-div text-muted align-items-center">© Jobkhuzi.com</p>
      </div>
      <div class="d-flex gap-3 px-5 p-2 align-items-center">
        <a
          class="fs-3 fw-bold text-white text-decoration-none"
          href="https://www.facebook.com/fractalslab"
        >
          <button class="ms-3 button text-white fw-bold">f</button>
        </a>
        <a
          class="fs-3 fw-bold text-white text-decoration-none"
          href="https://www.linkedin.com/company/fractalslab/"
        >
          <button class="ms-2 button-2 text-white fw-bolder">in</button>
        </a>
      </div>
    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = footer;
  }
}

customElements.define("footer-dev", Footer);

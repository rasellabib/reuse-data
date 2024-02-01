const navbar = `
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary-subtle">
      <div class="container-fluid">
        <a href="../pages/your-profile.html"><img src="../assets/user.jpg" alt="" class="logo" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
            </li>
            
          </ul>
          <a
            class="nav-link active"
            aria-current="page"
            href="../pages/login.html"
            >Login</a
          >
        </div>
      </div>
    </nav>
      `;

class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = navbar;
  }
}

customElements.define("header-component", Header);

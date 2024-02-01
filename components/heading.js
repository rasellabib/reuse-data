const Heading = `
    <div class="text-center text-white pt-4 pb-4 bg-success">
      <h1>custom heading for reuse practice by Labib Rasel</h1>
      <p>practice for only</p>
    </div>
`;
class customHeading extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = Heading;
  }
}
customElements.define("custom-heading", customHeading);

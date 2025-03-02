import { LitElement, html, css } from "lit-element";
import { customElement } from "lit/decorators.js";

@customElement("lit-subnav")
export class Header extends LitElement {
  render() {
    return html`
      <div class="subnav">
        <a href="/">Home</a>
        <a href="/photos">Photos</a>
        <a href="/users">Users</a>
        <a href="/quote">Random Quote</a>
      </div>
    `;
  }

  static styles = css`
    :host {
      height: 100px;
    }
    .subnav {
      height: 50px;
      background-color: var(--background-light);
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      padding: 0 10px;
      gap: 1.5rem;
      border-bottom: 1px solid var(--background-dark);
    }

    a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 1rem;
    }
  `;
}

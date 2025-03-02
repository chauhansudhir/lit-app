import { LitElement, html, css } from "lit-element";
import { customElement } from "lit/decorators.js";

@customElement("lit-header")
export class Header extends LitElement {
  render() {
    return html`
      <div class="topnav">
        <a class="home" href="/">litjs Company</a>
      </div>
    `;
  }

  static styles = css`
    .topnav {
      height: 80px;
      background-color: var(--background-dark);
      color: var(--text-primary);
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 10px;
    }
    .home {
      text-decoration: none;
      font-size: 2rem;
    }
  `;
}

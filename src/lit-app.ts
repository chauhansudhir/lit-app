import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/layouts/header";
import "./components/layouts/subnav";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("lit-app")
export class LitApp extends LitElement {
  render() {
    return html`
      <lit-header></lit-header>
      <lit-subnav></lit-subnav>
      <main class="main">
        <slot></slot>
      </main>
    `;
  }

  static styles = css`
    main {
      min-height: calc(100dvh - 100px);
      padding: 0.5rem 1rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-app": LitApp;
  }
}

import { LitElement, html, css } from "lit-element";
import { customElement } from "lit/decorators.js";
import { getRandomQuote, quoteType } from "../utils/service-base";

@customElement("lit-quote")
export class Page extends LitElement {
  data: quoteType[] = [];

  async connectedCallback() {
    super.connectedCallback();
    const temp = await getRandomQuote();
    this.data = temp;
    this.requestUpdate(); // Trigger re-render when data is ready
  }
  render() {
    return html`
      <h2>Quote</h2>
      <p>
        ${this.data.map(
          (quote) => html`
            <blockquote class="quote">
              <p>${quote.quote}</p>
              <cite>${quote.author}</cite>
            </blockquote>
          `
        )}
      </p>
    `;
  }
  static styles = css`
    .quote {
      width: 80%;
      position: relative;
      padding: 2.5rem 2rem 4rem;
      margin: 4rem 2rem;
      font-size: 2rem;
      color: var(--c2);
      background: conic-gradient(
          from 180deg at 100% calc(100% - 1rem),
          var(--c2) 0 25%,
          #fff0 0 100%
        ),
        conic-gradient(from 180deg at 1rem 50%, var(--c2) 0 25%, #fff0 0 100%),
        conic-gradient(
          from 0deg at calc(100% - 1rem) 50%,
          var(--c2) 0 25%,
          #fff0 0 100%
        ),
        conic-gradient(from 0deg at 0rem 1rem, var(--c2) 0 25%, #fff0 0 100%);
    }
    blockquote:before,
    blockquote:after {
      content: "";
      position: absolute;
      width: 3.5rem;
      height: 4.5rem;
      top: 3rem;
      left: -1rem;
      transform: rotate(5deg) scale(1.15);
      background: radial-gradient(
          circle at 1.75rem 3rem,
          var(--c2) 1.5rem,
          #fff0 calc(1.5rem + 1px)
        ),
        radial-gradient(
          circle at 3.5rem 1.5rem,
          #fff0 2rem,
          var(--c2) calc(2rem + 1px) calc(4rem + 1px),
          #fff0 calc(4rem + 2px)
        );
      filter: drop-shadow(3.5rem -0.5rem 0px var(--c2));
      border-radius: 100%;
    }
    blockquote:after {
      top: inherit;
      bottom: 3rem;
      transform: rotate(195deg) scale(1.15);
      right: -1rem;
      left: inherit;
    }
    blockquote cite {
      font-weight: bold;
      position: absolute;
      bottom: 2.5rem;
      background: var(--c2);
      color: var(--c1);
      right: 8rem;
      padding: 0.5rem 1rem;
    }
    blockquote p:after {
      margin-right: 2rem;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-start;
      content: " ";
      display: inline-flex;
      background: #f000;
      width: 8rem;
      height: 3rem;
    }
    blockquote p {
      max-width: 90%;
      margin: 0 auto;
      padding: 0.5rem 0;
      text-align: justify;
    }
  `;
}

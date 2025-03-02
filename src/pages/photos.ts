import { LitElement, html, css } from "lit-element";
import { customElement } from "lit/decorators.js";
import { fetchPhotos, PhotoType } from "../utils/service-base";

@customElement("lit-photos")
export class Photos extends LitElement {
  data: PhotoType[] = [];

  async connectedCallback() {
    super.connectedCallback();
    const temp = await fetchPhotos();
    this.data = temp;
    this.requestUpdate(); // Trigger re-render when data is ready
  }
  render() {
    const loading = this.data.length === 0 ? html`<div>Loading...</div>` : "";
    return html`
      <h2>Photos</h2>
      ${loading}
      <div class="photos">
        ${this.data.map(
          (photo) => html`
            <div class="photo">
              <img
                src="${photo.download_url}"
                alt="${photo.author}"
                width="100%"
                height="auto"
              />
            </div>
          `
        )}
      </div>
    `;
  }

  static styles = css`
    .photos {
      columns: 3;
      background-color: var(--background-light);
      border-radius: 1rem;
      padding: 10px;
    }

    .photo {
      break-inside: avoid;
      margin-bottom: 10px;
    }
    .photo img {
      aspect-ratio: 1/1;
      object-fit: cover;
      width: 100%;
      border-radius: 1rem;
    }
  `;
}

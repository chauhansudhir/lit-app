import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit/decorators.js";

type COLUMN_TYPE = {
  id: string;
  label: string;
  cellFormatter: <T>(row: T, column: COLUMN_TYPE) => string;
};

@customElement("lit-table")
export class Table<T extends Object> extends LitElement {
  @property({ type: Array })
  columns: COLUMN_TYPE[] = [];

  @property({ type: Array })
  data: T[] = [];

  @property({ type: Boolean })
  isLoading = false;

  @property({ type: String })
  message = "No data found";

  render() {
    return html`
      <table class="table">
        <thead>
          <tr>
            ${this.columns.map((column) => html`<th>${column.label}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.isLoading
            ? html`<tr>
                <td colspan=${this.columns.length}>Loading...</td>
              </tr>`
            : this.data.length === 0
            ? html`<tr>
                <td colspan=${this.columns.length}>${this.message}</td>
              </tr>`
            : this.data.map(
                (row) => html`
                  <tr>
                    ${this.columns.map(
                      (column) =>
                        html`<td>${column.cellFormatter(row, column)}</td>`
                    )}
                  </tr>
                `
              )}
        </tbody>
      </table>
    `;
  }

  static styles = css`
    table {
      width: 100%;
      border-collapse: collapse;
    }
    thead {
      background-color: var(--background-light);
      color: var(--text-secondary);
      position: sticky;
      top: 0;
    }
    th,
    td {
      padding: 1.2rem;
      border-bottom: 1px solid var(--background-light);
    }
    th {
      text-align: left;
    }
  `;
}

import { LitElement, html } from "lit-element";
import { customElement } from "lit/decorators.js";
import { fetchUsers, UserType } from "../utils/service-base";
import "../components/basic/table";

const columns = [
  {
    id: "id",
    label: "ID",
    cellFormatter: <T>(row: T) => String((row as UserType).id),
  },
  {
    id: "name",
    label: "Name",
    cellFormatter: <T>(row: T) =>
      (row as UserType).firstName + " " + (row as UserType).lastName,
  },
  {
    id: "email",
    label: "Email",
    cellFormatter: <T>(row: T) => (row as UserType).email,
  },
  {
    id: "phone",
    label: "Phone",
    cellFormatter: <T>(row: T) => (row as UserType).phone,
  },
  {
    id: "gender",
    label: "Gender",
    cellFormatter: <T>(row: T) => (row as UserType).gender,
  },
  {
    id: "dob",
    label: "DOB",
    cellFormatter: <T>(row: T) => (row as UserType).birthDate,
  },
];

@customElement("lit-users")
export class Page extends LitElement {
  data: UserType[] = [];

  async connectedCallback() {
    super.connectedCallback();
    const temp = await fetchUsers();
    this.data = temp;
    this.requestUpdate(); // Trigger re-render when data is ready
  }

  render() {
    return html`
      <h2>Users</h2>
      <div>
        <lit-table .columns="${columns}" .data="${this.data}"></lit-table>
      </div>
    `;
  }
}

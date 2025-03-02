import {
  f as g,
  u as y,
  i as f,
  r as m,
  x as n,
  t as b,
} from "./index-C2pKgt2J.js";
import { f as v } from "./service-base-ihO7f0ps.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const P = {
    attribute: !0,
    type: String,
    converter: y,
    reflect: !1,
    hasChanged: g,
  },
  $ = (t = P, r, o) => {
    const { kind: l, metadata: e } = o;
    let a = globalThis.litPropertyMetadata.get(e);
    if (
      (a === void 0 && globalThis.litPropertyMetadata.set(e, (a = new Map())),
      a.set(o.name, t),
      l === "accessor")
    ) {
      const { name: s } = o;
      return {
        set(c) {
          const h = r.get.call(this);
          r.set.call(this, c), this.requestUpdate(s, h, t);
        },
        init(c) {
          return c !== void 0 && this.P(s, void 0, t), c;
        },
      };
    }
    if (l === "setter") {
      const { name: s } = o;
      return function (c) {
        const h = this[s];
        r.call(this, c), this.requestUpdate(s, h, t);
      };
    }
    throw Error("Unsupported decorator location: " + l);
  };
function p(t) {
  return (r, o) =>
    typeof o == "object"
      ? $(t, r, o)
      : ((l, e, a) => {
          const s = e.hasOwnProperty(a);
          return (
            e.constructor.createProperty(a, s ? { ...l, wrapped: !0 } : l),
            s ? Object.getOwnPropertyDescriptor(e, a) : void 0
          );
        })(t, r, o);
}
var O = Object.defineProperty,
  w = Object.getOwnPropertyDescriptor,
  d = (t, r, o, l) => {
    for (
      var e = l > 1 ? void 0 : l ? w(r, o) : r, a = t.length - 1, s;
      a >= 0;
      a--
    )
      (s = t[a]) && (e = (l ? s(r, o, e) : s(e)) || e);
    return l && e && O(r, o, e), e;
  };
let i = class extends m {
  constructor() {
    super(...arguments),
      (this.columns = []),
      (this.data = []),
      (this.isLoading = !1),
      (this.message = "No data found");
  }
  render() {
    return n`
      <table class="table">
        <thead>
          <tr>
            ${this.columns.map((t) => n`<th>${t.label}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${
            this.isLoading
              ? n`<tr>
                <td colspan=${this.columns.length}>Loading...</td>
              </tr>`
              : this.data.length === 0
              ? n`<tr>
                <td colspan=${this.columns.length}>${this.message}</td>
              </tr>`
              : this.data.map(
                  (t) => n`
                  <tr>
                    ${this.columns.map(
                      (r) => n`<td>${r.cellFormatter(t, r)}</td>`
                    )}
                  </tr>
                `
                )
          }
        </tbody>
      </table>
    `;
  }
};
i.styles = f`
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
d([p({ type: Array })], i.prototype, "columns", 2);
d([p({ type: Array })], i.prototype, "data", 2);
d([p({ type: Boolean })], i.prototype, "isLoading", 2);
d([p({ type: String })], i.prototype, "message", 2);
i = d([b("lit-table")], i);
var _ = Object.getOwnPropertyDescriptor,
  D = (t, r, o, l) => {
    for (
      var e = l > 1 ? void 0 : l ? _(r, o) : r, a = t.length - 1, s;
      a >= 0;
      a--
    )
      (s = t[a]) && (e = s(e) || e);
    return e;
  };
const x = [
  { id: "id", label: "ID", cellFormatter: (t) => String(t.id) },
  {
    id: "name",
    label: "Name",
    cellFormatter: (t) => t.firstName + " " + t.lastName,
  },
  { id: "email", label: "Email", cellFormatter: (t) => t.email },
  { id: "phone", label: "Phone", cellFormatter: (t) => t.phone },
  { id: "gender", label: "Gender", cellFormatter: (t) => t.gender },
  { id: "dob", label: "DOB", cellFormatter: (t) => t.birthDate },
];
let u = class extends m {
  constructor() {
    super(...arguments), (this.data = []);
  }
  async connectedCallback() {
    super.connectedCallback();
    const t = await v();
    (this.data = t), this.requestUpdate();
  }
  render() {
    return n`
      <h2>Users</h2>
      <div>
        <lit-table .columns="${x}" .data="${this.data}"></lit-table>
      </div>
    `;
  }
};
u = D([b("lit-users")], u);
export { u as Page };

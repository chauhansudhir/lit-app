import { fixture, html } from "@open-wc/testing";
import { LitApp } from "../lit-app";

describe("LitApp", () => {
  it("is defined", () => {
    const el = document.createElement("lit-app");
    expect(el).toBeInstanceOf(LitApp);
  });

  it("renders with default values", async () => {
    const el = await fixture<LitApp>(html`<lit-app></lit-app>`);
    expect(el.shadowRoot?.querySelector("lit-header")).toBeTruthy();
    expect(el.shadowRoot?.querySelector("lit-subnav")).toBeTruthy();
    expect(el.shadowRoot?.querySelector("main")).toBeTruthy();
  });

  it("has correct styles", async () => {
    const el = await fixture<LitApp>(html`<lit-app></lit-app>`);
    const main = el.shadowRoot?.querySelector("main");
    const styles = getComputedStyle(main!);
    expect(styles.minHeight).toBe("calc(100dvh - 100px)");
    expect(styles.padding).toBe("0.5rem 1rem");
  });
});

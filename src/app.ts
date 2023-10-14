import { LitElement, html } from "https://esm.sh/lit@3.0.0";
import { customElement } from "https://esm.sh/lit@3.0.0/decorators.js";

@customElement('app')
export class App extends LitElement {
    render() {
        return html`
            <p>Hello from my template.</p>
        `
    }
}

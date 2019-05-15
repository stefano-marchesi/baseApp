import { LitElement, html } from 'lit-element';
import './elements/counterElement'
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Input";

class shellComponent extends LitElement {
    static get properties() {
        return {

        }
    }
    render() {
        return html `
        <div>
            test
            <counter-element></counter-element>
        </div>
        `;
    }

    constructor() {
        super();
        console.log('funziona');

    }

}

customElements.define('shell-component', shellComponent);
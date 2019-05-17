import { LitElement, html } from 'lit-element';
import './elements/counterElement'
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Input";
import './elements/elementoBase'
class shellComponent extends LitElement {
    static get properties() {
        return {

        }
    }
    render() {
        return html `
        <div>
            <elemento-base></elemento-base>
        </div>
        `;
    }

    constructor() {
        super();
        console.log('funziona');

    }

}

customElements.define('shell-component', shellComponent);
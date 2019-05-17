import { LitElement, html } from 'lit-element';

class elementoNuovo extends LitElement {
    static get properties() {
        return {

        }
    }

    render() {
        return html `
        <div>
            elemento-nuovo
        </div>
        `;
    }

    constructor() {
        super();
        console.log('funziona');

    }

}

customElements.define('elemento-nuovo', elementoNuovo);
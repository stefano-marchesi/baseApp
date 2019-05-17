import { LitElement, html } from 'lit-element';

class elementoArticolo extends LitElement {
    static get properties() {
        return {

        }
    }

    render() {
        return html `
        <div>
            elemento-articolo
        </div>
        `;
    }

    constructor() {
        super();
        console.log('funziona');

    }

}

customElements.define('elemento-articolo', elementoArticolo);
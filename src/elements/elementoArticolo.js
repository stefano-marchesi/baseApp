import { LitElement, html } from 'lit-element';
import { store } from './../data/store.js'
import { connect } from 'pwa-helpers/connect-mixin.js';
class elementoArticolo extends connect(store)(LitElement) {
    static get properties() {
        return {

        }
    }

    stateChanged(state) {

        this.articol = state.articolo.value

    }

    render() {
        return html `
       <h2>${this.articol.titolo}</h2>
        <p>${this.articol}</p>
        `;
    }

    constructor() {
        super();
        this.articol = {}

    }

}

customElements.define('elemento-articolo', elementoArticolo);
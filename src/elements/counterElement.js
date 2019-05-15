import { LitElement, html } from 'lit-element';
import { store } from './../data/store.js'
import { connect } from 'pwa-helpers/connect-mixin.js';


class counterElement extends connect(store)(LitElement) {
    static get properties() {
        return {
            counterValue: Number
        }
    }

    stateChanged(state) {
        this.counterValue = state.counter.value
    }


    render() {
        return html `
        <div>

            <ui5-input id="numero" type="Number" placeholder="Inserisci un numero"></ui5-input>            
            <ui5-button @click="${()=>{this.sottrai()}}" type="Negative">Sottrai</ui5-button>
            <ui5-button @click="${()=>{this.aggiungi()}}" type="Positive" icon-end>Aggiungi</ui5-button>
            <div>Valore counter: ${this.counterValue}</div>
            
        </div>
        `;
    }

    aggiungi() {
        let valore = this.shadowRoot.getElementById('numero').value
        store.dispatch({
            type: 'COUNTER_AGGIUNGI',
            payload: valore
        })
    }
    sottrai() {
        let valore = this.shadowRoot.getElementById('numero').value
        store.dispatch({
            type: 'COUNTER_SOTTRAI',
            payload: valore
        })

    }

    constructor() {
        super();
        this.counterValue = store.getState().counter.value

    }

}

customElements.define('counter-element', counterElement);
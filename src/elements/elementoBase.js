import { LitElement, html } from 'lit-element';
import { store } from './../data/store.js'
import { connect } from 'pwa-helpers/connect-mixin.js';

import './elementoLista'
import './elementoNuovo'
import './elementoArticolo'

class elementoBase extends connect(store)(LitElement) {
    static get properties() {
        return {
            paginaDaGuardare: String
        }
    }

    stateChanged(state) {

        this.paginaDaGuardare = state.pagina.value

    }
    render() {

        return html `
        
        <div>
        <ui5-button @click="${()=>{this.cambiaPagina('Lista')}}" type="Default">Lista</ui5-button>
        <ui5-button @click="${()=>{this.cambiaPagina('articolo')}}" type="Default">articolo</ui5-button>
        <ui5-button @click="${()=>{this.cambiaPagina('nuovo')}}" type="Default">nuovo articolo</ui5-button>
        </div>
        <div>
           ${this.renderPagina()}
        </div>
        `;
    }


    renderPagina() {
        switch (this.paginaDaGuardare) {
            case 'Lista':
                return html `<elemento-lista></elemento-lista>`
            case 'articolo':
                return html `<elemento-articolo></elemento-articolo>`
            case 'nuovo':
                return html `<elemento-nuovo></elemento-nuovo>`

            default:
                break;
        }
    }
    cambiaPagina(pagina) {

        store.dispatch({
            type: 'CAMBIA_PAGINA',
            payload: pagina
        })
    }

    constructor() {
        super();
        this.paginaDaGuardare = ''
        console.log('funziona');

    }

}

customElements.define('elemento-base', elementoBase);
import { LitElement, html } from 'lit-element';

import './elementoLista'
import './elementoNuovo'
import './elementoArticolo'

class elementoBase extends LitElement {
    static get properties() {
        return {
            paginaDaGuardare: String
        }
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
        this.paginaDaGuardare = pagina
    }

    constructor() {
        super();
        this.paginaDaGuardare = ''
        console.log('funziona');

    }

}

customElements.define('elemento-base', elementoBase);
import { LitElement, html } from 'lit-element';

class elementoLista extends LitElement {
    static get properties() {
        return {

        }
    }

    render() {

            /*             let funzioneDiTrasformazione = (elemento) => {
                            let elementoTrasformato = ''
                            return elementoTrasformato
                        } */

            return html `
            <style>
                        .titolo{
                            margin-top:10px;
                            border:solid;
                            padding:10px;
                            background-color:aqua
                        }
            </style>
        <div>
            ${this.lista.map((element)=>{return html`
                <div @click="${()=>{this.vaiAdArticolo(element.titolo)}}" class="titolo">${element.titolo}</div>
            `})}
        </div>
        `;
    }
    vaiAdArticolo(titolo){
        console.log(titolo);
        
    }
    constructor() {

/*         Array.map((elemet)=>{
            return element*2
        })
 */

 

        super();
        this.lista = [{
                titolo: 'articolo1',
                corpo: 'bla bla bla 1'
            },
            {
                titolo: 'articolo2',
                corpo: 'bla bla bla 2'
            },
            {
                titolo: 'articolo3',
                corpo: 'bla bla bla 3'
            }
        ]

    }

}

customElements.define('elemento-lista', elementoLista);
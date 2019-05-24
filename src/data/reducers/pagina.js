const initialState = {
    value: 'Lista'
}


export const pagina = (state = initialState, action) => {
    let newState = {
        value: ''
    }


    switch (action.type) {
        case "CAMBIA_PAGINA":
            newState.value = action.payload
            return newState


        default:
            return state
            break;
    }

}
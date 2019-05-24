const initialState = {
    value: ''
}


export const articolo = (state = initialState, action) => {
    let newState = {
        value: ''
    }


    switch (action.type) {
        case "CAMBIA_ARTICOLO_DA_GUARDARE":
            newState.value = action.payload
            return newState


        default:
            return state
            break;
    }

}
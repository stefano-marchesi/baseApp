const initialState = {
    value: 0
}

export const counter = (state = initialState, action) => {
    let newValue = state.value
    switch (action.type) {
        case "COUNTER_AGGIUNGI":
            newValue += Number(action.payload)
            return Object.assign({}, state, { value: newValue })

        case "COUNTER_SOTTRAI":
            newValue -= Number(action.payload)
            return Object.assign({}, state, { value: newValue })

        default:
            return state
    }
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                //...state traigo el state que ya tengo (deestructurandolo) y ahora veo que elemento voy a actualizar o
                //que elemento voy a cambiar dentro del estado que tengo.
                ...state,
                //traemos los elementos del estado anterior y agregamos los nuevos
                mylist: [...state.mylist, action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                mylist: state.mylist.filter(items => items.id !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;
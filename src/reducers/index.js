import { SET_FAVORITE, DELETE_FAVORITE, LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST, GET_VIDEO_SOURCE } from '../actions/index';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_FAVORITE:
            const exist = state.mylist.find(item => item.id === action.payload.id)
            console.log(exist);
            return (exist ? { ...state }
                : {
                    //...state traigo el state que ya tengo (deestructurandolo) y ahora veo que elemento voy a actualizar o
                    //que elemento voy a cambiar dentro del estado que tengo.
                    ...state,
                    //traemos los elementos del estado anterior y agregamos los nuevos
                    mylist: [...state.mylist, action.payload]
                    //retornamos un nuevo estado o state al Store
                }
            )
        case DELETE_FAVORITE:
            return {
                ...state,
                mylist: state.mylist.filter(items => items.id !== action.payload)
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                user: action.payload,
            }
        case LOGOUT_REQUEST:
            return {
                ...state, //retornamos el estado como lo tenemos
                user: action.payload, //y modificamos este elemento del estado
            }
        case REGISTER_REQUEST:
            return {
                ...state, //retornamos el estado como lo tenemos
                user: action.payload, //y modificamos este elemento del estado
            }
        case GET_VIDEO_SOURCE:
            return {
                ...state, //retornamos el estado como lo tenemos
                playing: 
                state.trends.find(item => item.id === Number(action.payload)) //obtenemos el elemento que es válido
                || state.originals.find(item => item.id === Number(action.payload))
                || [] //retornamos un array vacío, ya que no hay un elemento con ese id
            }
        default:
            return state;
    }
}

export default reducer;
import { types } from "../types/types";

const initialState = {
    user: [],
    isLogged: false,
    isAdmin: false,
    form: []
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case types.login:
            return {
                ...state,
                isLogged: true
            }
        case types.getUser:
            return {
                ...state,
                user: action.payload.user,
                isAdmin: action.payload.isAdmin
            }
        case types.getForm:
            return {
                ...state,
                form: action.payload
            }
        default:
            return state
    }
}

export default authReducer
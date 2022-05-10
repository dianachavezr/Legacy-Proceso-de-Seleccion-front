
import { types } from "../types/types";

const initialState = {
    cita : ''
}


export const citationReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.setCitation:
            return{
                ...state,
                cita: action.payload
            }
        default:
            return state;
    }
}
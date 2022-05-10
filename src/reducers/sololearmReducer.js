import { types } from "../types/types";

const initialState = {
    profile : [],
    resp : ''
}


export const sololearmReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.getProfile:
            return{
                ...state,
                profile: [...action.payload]
            }
        case types.getResult:
            return{
                ...state,
                resp : action.payload
            }
        default:
            return state;
    }
}
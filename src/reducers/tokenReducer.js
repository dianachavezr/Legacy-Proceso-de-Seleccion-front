import { types } from "../types/types";

const token = ''

export const tokenReducer = (state = token, action) => {
    switch(action.type){
        case types.getToken:
            return action.payload
        default:
            return state
    }
}

export default tokenReducer
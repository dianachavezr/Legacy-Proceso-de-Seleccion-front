import axios from 'axios'
import { types } from "../types/types";

export const dispatchLogin = () => {
    return {
        type: types.login
    }
}

export const fetchUser = async (token) => {
        try {
            const res = await axios.get('https://selectprocess.herokuapp.com/api/user/info', {
                headers: {Authorization: token}
            })
            return res
            
        } catch (error) {
            return error
        }
}

export const dispatchGetUser = (res) => {

    return {
        type: types.getUser,
        payload: {
            user: res.data,
            isAdmin: res.data.role === 1 ? true : false
        }
    }
}
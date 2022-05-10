import axios from 'axios'
import { useDispatch } from 'react-redux';
import { types } from "../types/types";

export const fetchAllUsers = async (token) => {
    const res = await axios.get('https://selectprocess.herokuapp.com/api/user/all_info', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetAllUsers = (res) => {
    return {
        type: types.getAllUsers,
        payload: res.data
    }
}


export const getFormAll = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`https://selectprocess.herokuapp.com/api/candidate/infoperfil/${id}`)
            dispatch(getForm(data))
          } catch (error) {
            return error
          }
    }
}




const getForm = (profile) => {
    return{
        type: types.getForm,
        payload: profile
    }
}



import React from 'react'
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'

const AddNewFab = () => {
    const dispatch = useDispatch()
    const handleClicknew = () => {
        dispatch(uiOpenModal())
    }
    return (

        <button 
        className='btn btn-primary add-event'
        onClick={handleClicknew}
        >
            <i className='fas fa-plus' />
        </button>
    )
}

export default AddNewFab

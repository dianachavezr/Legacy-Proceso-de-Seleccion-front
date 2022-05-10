import React from 'react'
import { useDispatch } from 'react-redux'
import { DeletedEvent } from '../../actions/events'

const DeleteEventFab = () => {

    const dispatch = useDispatch()
    const handleDeleted = () => {
        dispatch(DeletedEvent())
    }

    return (
        <button 
        className='btn btn-danger fab-danger'
        onClick={handleDeleted}
        >
            <i className="fas fa-trash" />
            <span> Borrar Evento</span>
        </button>
    )
}

export default DeleteEventFab

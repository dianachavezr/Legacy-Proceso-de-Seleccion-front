import React from 'react'

const CalendarEvent = ({event}) => {
    
    const {title, user} = event
    return (
        <div>
            <strong>{title}</strong>
            {/* <span>- Diego</span> */}
        </div>
    )
}

export default CalendarEvent

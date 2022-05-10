import React from "react";
import { useSelector } from "react-redux";
import AddNewFab from "../../components/calendar/AddNewFab";
import CalendarView from "../../components/calendar/CalendarView";
import DeleteEventFab from "../../components/calendar/DeleteEventFab";
import "./InterviewDay.css";
const InterviewDay = () => {
    const { activeEvent } = useSelector((state) => state.calendar);
    return (
        <div className="interviewDay">
            <div className="section__content d-flex justify-content-between">
                <span className="upperCase bold">
                    Agenda de Entrevista y assessment
                </span>
                <div className="box__content">
                    <span className="text-crumbs bold-500">Programate</span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs">Entrevista</span>
                </div>
            </div>
            <div className="calendar mt-4">
                <CalendarView />
                <AddNewFab />
                {activeEvent && <DeleteEventFab />}
            </div>
        </div>
    );
};

export default InterviewDay;

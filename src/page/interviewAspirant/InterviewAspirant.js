import React, { useContext, useEffect } from "react";
import"./InterviewAspirant.css"
import { providerContext } from '../../Context/status'
import CalendarView from "../../components/calendar/CalendarView";

const InterviewAspirant = () => {
  // const { getProfiles, profiles, getProfile, profileT, getConvocatorys, convocatorys } = useContext(providerContext)
  // useEffect(() => {
  //   getProfiles();
  //   getConvocatorys();
  //   // getProfile("618c352d3ad3f3933bfb3b59")
  // }, [])
  return (
    <div className="Interviewaspirant">
      <div className="section__content">
        <span className="upperCase bold">
          Agenda de Entrevista y assessment
        </span>
      </div>
      <div className="calendar">
        <CalendarView />
      </div>
    </div>
  );
};

export default InterviewAspirant;

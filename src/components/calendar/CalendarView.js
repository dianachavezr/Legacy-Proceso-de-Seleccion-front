import React, { useEffect, useState } from "react";
import moment from "moment";
import CalendarEvent from "./CalendarEvent";
import CalendarModal from "./CalendarModal";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { messages } from "../../helpers/calendar-messages-es";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../actions/ui";
import { eventSetActive, getEvents } from "../../actions/events";
import "moment/locale/es";

moment.locale("es");

const localizer = momentLocalizer(moment);


const CalendarView = () => {

  const dispatch = useDispatch();
  const {events} = useSelector(state => state.calendar)
  const [lastView, setLastView] = useState(
    localStorage.getItem("lasView") || "month"
  );

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  const onDoubleClick = () => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lasView", e);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#FDC300",
      borderRadius: "0px",
      border: "none",
      opacity: 0.8,
      dispaly: "block",
      color: "white",
    };
    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <CalendarModal />
    </div>
  );
};

export default CalendarView;

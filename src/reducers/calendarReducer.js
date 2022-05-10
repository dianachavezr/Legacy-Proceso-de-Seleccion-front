import { types } from "../types/types";

const initialState = {
  events: [],
  activeEvent: null,
  error: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };

    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };

    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map((e) =>
          e._id === action.payload._id ? action.payload : e
        ),
      };

    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter((e) => e._id !== state.activeEvent._id),
        activeEvent: null,
      };

    case types.setCalendarEvents:
      return {
        ...state,
        events: [...action.payload],
      };
    case types.setError:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

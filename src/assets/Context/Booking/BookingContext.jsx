import React, { createContext } from "react";
import { useReducer } from "react";

export const BookingContext = createContext();

const initailState = {
  bookings: [],
};

function bookingReducer(state, action) {
  switch (action.type) {
    case "ADD_BOOKING":
      return {
        ...state,
        bookings: [...state, action.payload],
      };

    case "REMOVE_BOOKING":
      return {
        ...state,
        bookings: state.bookings.filter((room) => room.id !== action.payload),
      };

    case "CLEAR_BOOKINGS":
      return {
        ...state,
        bookings: [],
      };

    default:
      break;
  }
}

export function BookingProvider({ children }) {
  const [state, dispatch] = useReducer(bookingReducer, initailState);

  <BookingContext.Provider value={{ state, dispatch }}>
    {children}
  </BookingContext.Provider>;
}

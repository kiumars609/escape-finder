import React, { createContext } from "react";

export const BookingContext = createContext();

const initialState = {
  bookings: [],
};

function bookingReducer(state, action) {
  switch (action.type) {
    case "ADD_BOOKING":
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
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

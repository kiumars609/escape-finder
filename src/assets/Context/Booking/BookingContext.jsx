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

    default:
      break;
  }
}

import React, { useContext } from 'react'
import { BookingContext } from './BookingContext'

export function useBooking() {
  return useContext(BookingContext);
}


// import { useContext } from "react";
// import { BookingContext } from "./BookingContext";

// export function useBooking(){

//  const { state, dispatch } =
//    useContext(BookingContext);

//  const addBooking = (room) => {
//    dispatch({
//      type:"ADD_BOOKING",
//      payload:room
//    })
//  }

//  const removeBooking = (id) => {
//    dispatch({
//      type:"REMOVE_BOOKING",
//      payload:id
//    })
//  }

//  const clearBooking = () => {
//    dispatch({
//      type:"CLEAR_BOOKINGS"
//    })
//  }

//  return {
//    bookings: state.bookings,
//    addBooking,
//    removeBooking,
//    clearBooking
//  }

// }
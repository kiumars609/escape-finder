import React from "react";
import { useLocation } from "react-router-dom";

export default function Payment() {
  const show = useLocation();

  const { date, time } = show.state || {};
  return <div>Payment {date + " " + time}</div>;
}

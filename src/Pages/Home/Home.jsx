import React, { useState } from "react";
import SubHeader from "./SubHeader/SubHeader";
import Cards from "./Cards/Cards";
import roomsData from "../../Data/RoomsData";
import Booking from "./Booking/Booking";
import Layout from "../../Components/Layout/Layout";

export default function Home() {
  // const [city, setCity] = useState(false);

  const [filters, setFilters] = useState({
    city: "",
    players: "",
    difficulty: 0,
  });

  const handleFilterRooms = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filterRooms = roomsData.filter((room) => {
    if (filters.city && room.city !== filters.city) {
      return false;
    }

    if (filters.players) {
      const [min, max] = room.players.split("-").map(Number);

      if (filters.players < min || filters.players > max) {
        return false;
      }
    }

    if (filters.difficulty && room.difficulty !== filters.difficulty) {
      return false;
    }

    return true;
  });

  return (
    <>
      <Layout>
        <SubHeader
          roomsData={filterRooms}
          handleFilteredChange={handleFilterRooms}
        />
        <Cards roomsData={filterRooms} />
        <Booking />
      </Layout>
    </>
  );
}

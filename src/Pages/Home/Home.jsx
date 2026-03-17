import React, { useState } from "react";
import SubHeader from "./SubHeader/SubHeader";
import Cards from "./Cards/Cards";
import roomsData from "../../Data/RoomsData";
import Booking from "./Booking/Booking";
import Layout from "../../Components/Layout/Layout";

export default function Home() {
  // const [city, setCity] = useState(false);
  const [filtered, setFiltered] = useState({
    city: "",
    players: "",
  });

  const handleFilteredChange = (key, value) => {
    setFiltered((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filteredRooms = roomsData.filter((room) => {
    return (
      (!filtered.city || room.city === filtered.city) &&
      (!filtered.players || room.players === filtered.players)
    );
  });

  return (
    <>
      <Layout>
        <SubHeader handleFilteredChange={handleFilteredChange} />
        <Cards roomsData={filteredRooms} />
        <Booking />
      </Layout>
    </>
  );
}

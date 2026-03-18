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
  });

  const handleFilterRooms = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filterRooms = roomsData.filter((room) => {
    return(
      (!filters.city || room.city === filters.city) &&
      (!filters.players || room.players === filters.players)
    )
  })


  return (
    <>
      <Layout>
        <SubHeader handleFilteredChange={handleFilterRooms} />
        <Cards roomsData={filterRooms} />
        <Booking />
      </Layout>
    </>
  );
}

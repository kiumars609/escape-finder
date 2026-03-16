import React, { useState } from "react";
import SubHeader from "./SubHeader/SubHeader";
import Cards from "./Cards/Cards";
import roomsData from "../../Data/RoomsData";
import Booking from "./Booking/Booking";
import Layout from "../../Components/Layout/Layout";

export default function Home() {
  // Get City
  const [city, setCity] = useState(false);

  // City Filter
  const handleCityFilter = (item) => {
    setCity(item);
  };

  // Filter Action
  const cityFilter = city;
  const resultFiltered = cityFilter
    ? roomsData && roomsData.filter((room) => room.city === cityFilter)
    : roomsData;

  return (
    <>
      <Layout>
        <SubHeader handleCityFilter={handleCityFilter} />
        <Cards roomsData={resultFiltered} />
        <Booking />
      </Layout>
    </>
  );
}

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
  });

  const handleFilteredChange = (key, value) => {
    setFiltered((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // const handleCityFilter = (item) => {
  //   setCity(item);
  // };

  const cityFilter = city;
  const resultFiltered = cityFilter
    ? roomsData && roomsData.filter((room) => room.city === cityFilter)
    : roomsData;

  return (
    <>
      <Layout>
        <SubHeader handleFilteredChange={handleFilteredChange} />
        <Cards roomsData={resultFiltered} />
        <Booking />
      </Layout>
    </>
  );
}

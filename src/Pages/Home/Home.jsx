import React from "react";
import SubHeader from "./SubHeader/SubHeader";
import Cards from "./Cards/Cards";
import roomsData from "../../Data/RoomsData";
import Booking from "./Booking/Booking";
import Layout from "../../Components/Layout/Layout";

export default function Home() {
  const cityFiltered = "tehran";
  const resultFiltered = cityFiltered
    ? roomsData && roomsData.filter((room) => room.city === cityFiltered)
    : roomsData;

  return (
    <>
      <Layout>
        <SubHeader roomsData={roomsData} />
        <Cards roomsData={resultFiltered} />
        <Booking />
      </Layout>
    </>
  );
}

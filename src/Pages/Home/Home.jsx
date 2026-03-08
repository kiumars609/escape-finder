import React from "react";
import Header from "../../Components/Header/Header";
import SubHeader from "./SubHeader/SubHeader";
import Cards from "./Cards/Cards";
import roomsData from "../../Data/RoomsData";

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />
      <Cards roomsData={roomsData} />
    </>
  );
}

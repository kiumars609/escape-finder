import React from "react";
import Header from "../../Components/Header/Header";
import SubHeader from "./SubHeader/SubHeader";
import Cards from "./Cards/Cards";
import roomsData from "../../Data/RoomsData";
import Booking from "./Booking/Booking";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />
      <Cards roomsData={roomsData} />
      <Booking />
      <Footer />
    </>
  );
}

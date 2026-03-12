import React from "react";
import Header from "../../Components/Header/Header";
import SubHeader from "./SubHeader/SubHeader";
import Cards from "./Cards/Cards";
import roomsData from "../../Data/RoomsData";
import Booking from "./Booking/Booking";
import Footer from "../../Components/Footer/Footer";
import Layout from "../../Components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <SubHeader />
        <Cards roomsData={roomsData} />
        <Booking />
      </Layout>
    </>
  );
}

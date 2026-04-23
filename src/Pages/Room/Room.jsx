import React from "react";
import Layout from "../../Components/Layout/Layout";
import "./style.css";
import Details from "./Details/Details";
import Booking from "./Booking/Booking";
import { useParams } from "react-router-dom";
import roomsData from "../../Data/RoomsData";

export default function Room() {
  const { id } = useParams();
  const room = id && roomsData.find((item) => item.id === Number(id));

  return (
    <>
      <Layout>
        <main>
          <Details room={room} />
          <Booking roomDetail={room} />

          <section className="info-strip">
            <div className="container info-strip-inner">
              <div>
                <span className="section-kicker">Why choose us</span>
                <h2>Become the hero of a unique story for 60 minutes</h2>
              </div>
              <a href="#" className="outline-btn">
                Explore More Rooms
              </a>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

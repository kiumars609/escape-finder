import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";

export default function Payment() {
  const show = useLocation();

  const { date, time, name, phone, email, teamName, price } = show.state || {};
  return (
    <>
      <Layout>
        <section className="col-md-6 my-5 col-11 mx-auto">
          <h2>Booked Date: {date + " - " + time}</h2>
          <h3>Price: ${price}</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Team Name</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{teamName}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="container payment-info">
          <div className="row g-4">
            <div className="col-md-8 col-12">
              <div className="user-info">
                <h3>Payment Details</h3>
                <p className="sub-title">Complete your booking by providing your payment information.</p>
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div className="room-info">test</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

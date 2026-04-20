import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";

export default function Payment() {
  const show = useLocation();

  const { date, time, name, phone, email, teamName } = show.state || {};
  return (
    <>
      <Layout>
        <section className="col-md-6 my-5 col-11 mx-auto">
          <h2>Booked Date: {date + " - " + time}</h2>
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
      </Layout>
    </>
  );
}

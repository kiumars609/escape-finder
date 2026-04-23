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

        <section className="container payment-page">
          <div className="row g-4">
            {/* Left Side */}
            <div className="col-lg-8">
              <div className="payment-box">
                <h3>Payment Details</h3>
                <p className="payment-subtitle">
                  Complete your booking by providing payment information.
                </p>

                {/* Payment Methods */}
                <div className="payment-methods">
                  <label className="method-card active">
                    <input type="radio" name="method" />
                    Card
                  </label>

                  <label className="method-card">
                    <input type="radio" name="method" />
                    Other Method
                  </label>
                </div>

                {/* Card Number */}
                <div className="mb-4">
                  <label>Card Number</label>

                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                {/* Row */}
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label>Cardholder Name</label>

                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Name on card"
                    />
                  </div>

                  <div className="col-md-3">
                    <label>Expiry</label>

                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="MM/YY"
                    />
                  </div>

                  <div className="col-md-3">
                    <label>CVV</label>

                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="123"
                    />
                  </div>
                </div>

                <hr />

                <h4 className="billing-title">Billing Information</h4>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label>Email</label>

                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="example@gmail.com"
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Phone</label>

                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="+374 ..."
                    />
                  </div>

                  <div className="col-md-4">
                    <label>City</label>

                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Yerevan"
                    />
                  </div>

                  <div className="col-md-5">
                    <label>Address</label>

                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Street, Building"
                    />
                  </div>

                  <div className="col-md-3">
                    <label>Postal</label>

                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="0000"
                    />
                  </div>
                </div>

                <div className="payment-actions">
                  <button className="back-btn">Back</button>

                  <button className="pay-btn">Pay $50</button>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-4">
              <div className="summary-box">
                <h3>Order Summary</h3>

                <div className="summary-card">
                  <h5>Mystery Of The Lab</h5>

                  <p>Date: {date}</p>

                  <p>Time: {time}</p>

                  <p>Players: 4</p>

                  <p>Team Name: {teamName}</p>
                </div>

                <div className="price-row">
                  <span>Base Price</span>
                  <span>${price}</span>
                </div>

                <div className="price-row">
                  <span>Discount</span>
                  <span>$0</span>
                </div>

                <div className="total-row">
                  <span>Total</span>
                  <span>${price}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

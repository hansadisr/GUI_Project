
import axios from "axios";
import "./Book.css";
import { useNavigate } from "react-router-dom";
import validation from "./BookingValidation";

import React, { useEffect, useState } from 'react';

export default function Book() {
  const [values, setValues] = useState({
    Name: "",
    Nic: "",
    phoneNumber: "",
    arrivalDate: "",
    departureDate: "",
    Nights: "",
    Members: "",
    locationNumber: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:8081/booking", values)
        .then((res) => {
          navigate("/Stay");
        })
        .catch((err) => console.error(err));
    }
  };

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8081/booking')
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error('Error fetching bookings:', error));
  }, []);
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Date(date.getTime() + date.getTimezoneOffset() * 60000)
    .toISOString()
    .split('T')[0];
  };
const validBookings = bookings.filter(
  (booking) => new Date(booking.departure_date) >= new Date()
  );

  return (
    <div className="booking-container">
    {/* Booking Details Section */}
    <h1
        style={{
          textAlign: "center",
          margin: "20px 0px",
          color: "#78927e",
          fontFamily: "montserrat",
          letterSpacing: "2px",
          fontWeight: "400",
        }}
      >
        Booking Details
      </h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          justifyContent: "center",
        }}
      >
        {validBookings.map((booking) => (
          <div
            className='book-details'
            key={booking.booking_id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              maxWidth: '300px',
              background: "#78927e",
              color: "#f9f9f9",
              width: "300px"
            }}
          >
            <h3
              style={{
                textAlign: "center",
                paddingBottom: "10px",
                fontFamily: "montserrat",
                letterSpacing: "2px",
                fontWeight: "400",
                fontSize: "21px",
              }}
            >
              {booking.name}
            </h3>
            <p><strong>Arrival:</strong> {formatDate(booking.arrival_date)}</p>
            <p><strong>Departure:</strong> {formatDate(booking.departure_date)}</p>
            <p><strong>Nights:</strong> {booking.number_of_nights}</p>
            <p><strong>Location:</strong> {booking.location_number}</p>
          </div>
        ))}
      </div>
      <h1 className="title">Book Now</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name">First Name:</label>
          <input
            name="Name"
            id="Name"
            type="text"
            value={values.Name}
            onChange={handleInput}
            placeholder="Enter your Name"
          />
          {errors.Name && <span className="red-text">{errors.Name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="Nic">NIC No:</label>
          <input
            name="Nic"
            id="Nic-Id"
            type="text"
            value={values.Nic}
            onChange={handleInput}
            placeholder="Enter NIC number"
          />
          {errors.Nic && <span className="red-text">{errors.Nic}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            name="phoneNumber"
            id="phoneNumber"
            type="tel"
            value={values.phoneNumber}
            onChange={handleInput}
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && <span className="red-text">{errors.phoneNumber}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="arrival-date">Arrival Date:</label>
          <input
            name="arrivalDate"
            id="arrival-date"
            type="date"
            value={values.arrivalDate}
            onChange={handleInput}
          />
          {errors.arrivalDate && <span className="red-text">{errors.arrivalDate}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="departure-date">Departure Date:</label>
          <input
            name="departureDate"
            id="departure-date"
            type="date"
            value={values.departureDate}
            onChange={handleInput}
          />
          {errors.departureDate && <span className="red-text">{errors.departureDate}</span>}
        </div>
        <div className="form-group">
          <label>Location Number:</label>
          <select
            value={values.locationNumber}
            name="locationNumber"
            onChange={handleInput}
          >
            <option value="">Select Location</option>
            <option value="1">C1</option>
            <option value="2">C2</option>
            <option value="3">C3</option>
            <option value="4">C4</option>
            <option value="5">C5</option>
            <option value="6">C6</option>
            <option value="7">C7</option>
            <option value="8">C8</option>
            <option value="9">C9</option>
            <option value="10">C10</option>
            <option value="11">C11</option>
            <option value="12">C12</option>
          </select>
          {errors.locationNumber && <span className="red-text">{errors.locationNumber}</span>}
        </div>
        <div className="form-group">
          <label>Number of Nights:</label>
          <select value={values.Nights} name="Nights" onChange={handleInput}>
            <option value="">Select No of Nights</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          {errors.Nights && <span className="red-text">{errors.Nights}</span>}
        </div>
        <div className="form-group">
          <label>Number of Members:</label>
          <select value={values.Members} name="Members" onChange={handleInput}>
            <option value="">Select No of Members</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {errors.Members && <span className="red-text">{errors.Members}</span>}
        </div>
        
        <br></br>
        

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="form-group"
        >
          <button className="book-button" type="submit">
            BOOK
          </button>
        </div>
      </form>
    </div>
  );
}

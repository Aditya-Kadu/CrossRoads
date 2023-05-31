import React, { useState, useEffect } from "react";
import { Button, Form, Image } from "react-bootstrap";
import charity from "../../assets/charity.png";
import { useNavigate } from "react-router-dom";
import NavComponent from "../Navbar/navbar";
import Footer from "../footer/footer";

export default function NGOComponent() {
  const [ngoName, setNgoName] = useState("");
  const [city, setCity] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [ngoEmailId, setEmailId] = useState("");
  const [ngoPassword, setPassword] = useState("");
  const [ngoType, setType] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("NGO");
    if (auth) {
      navigate("/");
    }
  });

  const createEvent = async () => {
    let requestData = {
      ngoName,
      city,
      contactNo,
      ngoEmailId,
      ngoPassword,
      ngoType,
    };
    // console.log(ngoName, city, contactNo, ngoEmailId, ngoPassword, ngoType);
    let result = await fetch("http://localhost:3175/register-ngo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    result = await result.json();
    // console.log(requestData);
    localStorage.setItem("NGO", JSON.stringify(result));
    navigate("/ngo/profile");
  };
  return (
    <div>
      <NavComponent />
      <br></br>
      <br></br>
      <br></br>
      <div className="container bg-light">
        <div className="row mt-4 border border-2 rounded">
          <div className="col px-5">
            <h3 className="text-center mt-3">NGO Registration</h3>
            <Form.Group className="mb-3" controlId="ngoName">
              <Form.Label>NGO Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter NGO Name"
                value={ngoName}
                onChange={(e) => setNgoName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ngoType">
              <Form.Label>NGO Works In which Field?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Fieldc of Works"
                value={ngoType}
                onChange={(e) => setType(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City Name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ngoEmailId">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Address"
                value={ngoEmailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ngoPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={ngoPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactNo">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Contact Number"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </Form.Group>

            <div className="form-button text-center">
              <Button
                variant="primary"
                className="border border-2 rounded-5 mb-5 mt-2 mx-3 w-25 "
                type="submit"
                onSubmit="#"
              >
                Back
              </Button>

              <Button
                variant="primary"
                className="border border-2 rounded-5 mb-5 mt-2 w-25"
                type="button"
                onClick={createEvent}
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="col d-flex flex-nowrap">
            <Image src={charity} alt="Logo" fluid id="logo" />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import NavComponent from "../Navbar/navbar";

export default function Valunteer() {
  const [userName, setUserName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [userPassword, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [contactNo, setContact] = useState("");
  const navigate = useNavigate();
  const auth = localStorage.getItem("Volunteer");
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  });
  const createUser = async () => {
    // console.log(userName, emailId, userPassword, age, city, contactNo);
    let requestData = { userName, emailId, userPassword, age, city, contactNo };
    let result = await fetch("http://localhost:3175/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    result = await result.json();
    // console.log(requestData);
    localStorage.setItem("Volunteer", JSON.stringify(result));
    navigate("/volunteer/profile");
  };

  return (
    <div>
      <NavComponent />
      <br></br>
      <br></br>
      <br></br>
      <div className="container bg-light">
        <div className="row mt-5 border border-2 rounded">
          <div className="col px-5">
            <h3 className="text-center mt-3">Enter your details</h3>
            <Form>
              <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Full Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Full Name Required!
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="emailId">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Your Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Contact Number"
                  value={contactNo}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Passowrd"
                  value={userPassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="form-button text-center">
                <Button
                  variant="light"
                  className="border border-2 rounded-5 mb-5 mt-2 w-25"
                  type="button"
                  onClick={createUser}
                >
                  Join Us now
                </Button>
              </div>
            </Form>
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

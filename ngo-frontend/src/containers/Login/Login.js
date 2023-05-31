import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import NavComponent from "../Navbar/navbar";

export default function Login_Volunteer() {
  const [emailId, setEmailId] = useState("");
  const [userPassword, setPassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("Volunteer");
    if (auth) {
      navigate("/volunteer/profile");
    }
  });
  const LoginVolunteer = async () => {
    // console.log(emailId, userPassword);

    let result = await fetch("http://localhost:3175/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailId, userPassword }),
    });
    result = await result.json();
    // console.log(result);
    if (result.emailId) {
      localStorage.setItem("Volunteer", JSON.stringify(result));
      navigate("/volunteer/profile");
    } else {
      alert("Enter correct details");
    }
  };

  return (
    <div>
      <NavComponent />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container bg-light">
        <div className="row mt-5 border border-2 rounded">
          <div className="col px-5">
            <h3 className="text-center mt-3">Login Volunteer</h3>
            <Form>
              <Form.Group className="mb-3" controlId="emailId">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
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
                  onClick={LoginVolunteer}
                >
                  Submit
                </Button>
              </div>
              <div className="text-center">
                <a href="/volunteer/add">New User? Sign Up</a>
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

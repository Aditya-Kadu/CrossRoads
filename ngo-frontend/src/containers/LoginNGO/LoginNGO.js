import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavComponent from "../Navbar/navbar";
import Footer from "../footer/footer";

export default function Login_NGO() {
  const [ngoEmailId, setEmailId] = useState("");
  const [ngoPassword, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("NGO");
    if (auth) {
      navigate("/");
    }
  });

  const LoginNGO = async () => {
    let requestData = {
      ngoEmailId,
      ngoPassword,
    };
    // console.log(ngoEmailId, ngoPassword);
    let result = await fetch("http://localhost:3175/login-ngo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    result = await result.json();
    // console.log(requestData);
    if (result.ngoEmailId) {
      localStorage.setItem("NGO", JSON.stringify(result));
      navigate("/ngo/profile");
    } else {
      alert("Enter Correct Details");
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
            <h3 className="text-center mt-3">Login NGO</h3>
            <Form>
              <Form.Group className="mb-3" controlId="emailId">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  value={ngoEmailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Passowrd"
                  value={ngoPassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="form-button text-center">
                <Button
                  variant="light"
                  className="border border-2 rounded-5 mb-5 mt-2 w-25"
                  type="button"
                  onClick={LoginNGO}
                >
                  Submit
                </Button>
                <div className="text-center">
                  <a href="/ngo/add">New User? Sign Up</a>
                </div>
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

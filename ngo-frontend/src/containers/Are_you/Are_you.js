import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavComponent from "../Navbar/navbar";
import Footer from "../footer/footer";

export default function Volunteer() {
  const navigate = useNavigate();
  const ngo = () => {
    navigate("/ngo/login");
  };
  const volunteer = () => {
    navigate("/volunteer/login");
  };
  return (
    <div>
      <NavComponent />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container bg-light border border-2 rounded-2">
        <div className="mt-4">
          <h1>
            <center>Who are you?</center>
          </h1>
        </div>
        <div className="row mt-5  ">
          <div className="col px-5">
            <div className="cols">
              <div className="form-button text-center mt-5">
                <Button
                  variant="light"
                  className="border border-2 rounded-5 mb-5 mt-2 w-25"
                  type="button"
                  onClick={ngo}
                >
                  NGO
                </Button>
              </div>

              <div className="form-button text-center">
                <Button
                  variant="light"
                  className="border border-2 rounded-5 mb-5 mt-2 w-25"
                  type="button"
                  onClick={volunteer}
                >
                  Volunteer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

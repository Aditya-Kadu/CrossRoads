import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import charity from "../../assets/charity.png";
import { useNavigate } from "react-router-dom";
import NavComponent from "../Navbar/navbar";
import Footer from "../footer/footer";
export default function Events() {
  const [eventName, setEventName] = useState("");
  const [eventBy, setEventBy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [pinCode, setPincode] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [supportiveCourses, setCourses] = useState("");
  const [valunteersNeed, setNeed] = useState("");
  // const [error, setError] = useState(false);
  const [setError] = useState(false);

  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/ngo/profile");
  };

  const createEvent = async () => {
    const userId = JSON.parse(localStorage.getItem("NGO"))._id;
    // console.log(userId);
    if (
      !eventName ||
      !eventBy ||
      !startDate ||
      !endDate ||
      !cityName ||
      !stateName ||
      !countryName ||
      !pinCode ||
      !eventDescription ||
      !contactNo ||
      !emailId ||
      !supportiveCourses
    ) {
      setError(true);
      alert("Enter All Details");
      return false;
    }
    let requestData = {
      eventName,
      eventBy,
      startDate,
      endDate,
      cityName,
      stateName,
      countryName,
      pinCode,
      eventDescription,
      contactNo,
      emailId,
      supportiveCourses,
      valunteersNeed,
      userId,
    };
    // console.log(
    //   eventName,
    //   eventBy,
    //   startDate,
    //   endDate,
    //   cityName,
    //   stateName,
    //   countryName,
    //   pinCode,
    //   eventDescription,
    //   contactNo,
    //   emailId,
    //   supportiveCourses,
    //   valunteersNeed
    // );

    let result = await fetch("http://localhost:3175/add-event", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    result = await result.json();
    console.log(result);
    navigate("/");
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
            <h3 className="text-center mt-3">Create an Event</h3>
            <Form>
              <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Full Name"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Event By</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Organizer's Name"
                  value={eventBy}
                  onChange={(e) => setEventBy(e.target.value)}
                />
              </Form.Group>

              <div className="d-flex flex-nowrap">
                <div className="row">
                  <div className="col">
                    <Form.Group className="mb-3" controlId="fullName">
                      <Form.Label>Starting Date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter Starting Date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </Form.Group>
                  </div>

                  <div className="col">
                    <Form.Group className="mb-3" controlId="fullName">
                      <Form.Label>Ending Date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter Ending Date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-nowrap">
                <div className="row">
                  <div className="col">
                    <Form.Group className="mb-3" controlId="fullName">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter City"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                      />
                    </Form.Group>
                  </div>

                  <div className="col">
                    <Form.Group className="mb-3" controlId="fullName">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter State"
                        value={stateName}
                        onChange={(e) => setStateName(e.target.value)}
                      />
                    </Form.Group>
                  </div>

                  <div className="col">
                    <Form.Group className="mb-3" controlId="fullName">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Country"
                        value={countryName}
                        onChange={(e) => setCountryName(e.target.value)}
                      />
                    </Form.Group>
                  </div>

                  <div className="col">
                    <Form.Group className="mb-3" controlId="fullName">
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Pincode"
                        value={pinCode}
                        onChange={(e) => setPincode(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>

              <Form.Group className="mb-3" controlId="emailId">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Event Description"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="age">
                <Form.Label>Supports what Courses</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Courses Supported by this Event"
                  value={supportiveCourses}
                  onChange={(e) => setCourses(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex flex-nowrap">
                <div className="row">
                  <div className="col">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Contact Number"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                      />
                    </Form.Group>
                  </div>

                  <div className="col">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Contact Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Contact email"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                      />
                    </Form.Group>
                  </div>

                  <div className="col">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Volunteers Needed</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="NA"
                        value={valunteersNeed}
                        onChange={(e) => setNeed(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>

              <div className="form-button text-center">
                <Button
                  variant="primary"
                  className="border border-2 rounded-5 mb-5 mt-2 mx-3 w-25 "
                  type="submit"
                  onSubmit={backToHome}
                >
                  Back
                </Button>

                <Button
                  variant="primary"
                  className="border border-2 rounded-5 mb-5 mt-2 w-25 "
                  type="button"
                  onClick={createEvent}
                >
                  Submit
                </Button>
              </div>
            </Form>
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

import React, { useState, useEffect } from "react";
import NavComponent from "../Navbar/navbar";
import { Button, Form } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import "./volpro.css";
import Footer from "../footer/footer";

export default function Volpro() {
  const navigate = useNavigate();
  const [event, setEvent] = useState([]);
  const [id0, setid0] = useState("");
  let [eventName] = useState("");
  let [eventBy] = useState("");
  let [startDate] = useState("");
  let [endDate] = useState("");
  let [cityName] = useState("");
  let [stateName] = useState("");
  let [countryName] = useState("");
  let [pinCode] = useState("");
  let [eventDescription] = useState("");
  let [contactNo] = useState("");
  let [emailId] = useState("");
  let [supportiveCourses] = useState("");
  let [valunteersNeed] = useState("");

  let [userName] = useState("");
  let [emailIdvol] = useState("");
  let [age] = useState("");
  let [city] = useState("");
  let [will, setwill] = useState("");
  let [contactvol] = useState("");
  let [userId] = useState("");
  let [regId] = useState("");

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    let result = await fetch("http://localhost:3175/events");
    result = await result.json();
    setEvent(result);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const getidEvent = async (id) => {
    let result = await fetch(`http://localhost:3175/regevents/${id}`, {
      method: "Get",
    });

    result = await result.json();
    console.log(result);
    const auth = localStorage.getItem("Volunteer");

    const ans = JSON.parse(auth);
    console.log(ans);
    result.userName = ans.userName;
    result.emailIdvol = ans.emailId;
    result.age = ans.age;
    result.city_vol = ans.city;

    result.contactNo_vol = ans.contactNo;

    eventName = result.eventName;
    eventBy = result.eventBy;
    startDate = result.startDate;
    endDate = result.endDate;
    cityName = result.cityName;
    stateName = result.stateName;
    countryName = result.countryName;
    pinCode = result.pinCode;
    eventDescription = result.eventDescription;
    contactNo = result.contactNo;
    emailId = result.emailId;
    supportiveCourses = result.supportiveCourses;
    valunteersNeed = result.valunteersNeed;
    userName = result.userName;
    emailIdvol = ans.emailId;
    age = result.age;
    city = result.city_vol;

    contactvol = result.contactNo_vol;
    userId = result.userId;
    regId = result._id;

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
      userName,
      emailIdvol,
      // userPassword,
      age,
      city,
      will,
      contactvol,
      regId,
    };
    console.log(requestData);

    let result0 = await fetch("http://localhost:3175/showreg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    // console.log(will);
    console.log(result0);
    // console.log(ans);
    // console.log(result);
    // console.log(regId);
  };

  // const checkit = async (id) => {};

  return (
    <div className="main">
      <NavComponent />
      <br></br>
      <br></br>
      <br></br>
      <h3 className="text-center mt-3">Events</h3>
      {event.length > 0 ? (
        event.map((item, index) => (
          <div>
            <ul key={item._id}></ul>
            <div className="container bg-light">
              <div className="row mt-5 border border-2 rounded">
                <div className="col px-5">
                  <div className="wrapper">
                    <div className="row">
                      <div className="col mb-3 px-4">
                        <div className="row mt-4 border border-2 rounded">
                          <div class="mb-4 mt-4">
                            <div>
                              <b>Event</b> : {item.eventName}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col mb-3 px-4">
                        <div className="row mt-4 border border-2 rounded">
                          <div className="mb-4 mt-4">
                            <div>
                              <b>Organised by</b> {item.eventBy}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wrapper">
                    <div className="row">
                      <div className="col mb-3 px-4">
                        <div className="row mt-4 border border-2 rounded">
                          <div className="mb-4 mt-4">
                            <div>
                              <b>Starting Date</b> : {item.startDate}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col mb-3 px-4">
                        <div className="row mt-4 border border-2 rounded">
                          <div className="mb-4 mt-4">
                            <div>
                              <b>Ending Date</b> : {item.endDate}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wrapper">
                    <div className="row">
                      <div className="col mb-3 px-4">
                        <div className="row mt-4 border border-2 rounded">
                          <div className="mb-4 mt-4">
                            <div>
                              <b>Where</b> : {item.cityName}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col mb-3 px-4">
                        <div className="row mt-4 border border-2 rounded">
                          <div className="mb-4 mt-4">
                            <div>
                              <b>Contact Details</b> : {item.contactNo} ,{" "}
                              {item.emailId}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col mb-3 px-2">
                    <div className="row mt-4 border border-2 rounded">
                      <div className="mb-4 mt-4">
                        <div>
                          <b>About event</b> : {item.eventDescription}{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-button text-center">
                    <Button
                      variant="light"
                      className="border border-2 rounded-5 mb-5 mt-5 w-25"
                      type="button"
                      onClick={() => {
                        // openPopup();
                        const auth = localStorage.getItem("Volunteer");
                        if (auth) {
                          console.log(item._id);
                          setid0(item._id);
                          console.log(id0);
                          setIsOpen(true);
                          console.log(isOpen);
                        } else {
                          navigate("/volunteer/login");
                        }
                      }}
                    >
                      Register
                    </Button>

                    {isOpen && (
                      <div className="popup-container">
                        <div className="blur-background" onClick={closePopup} />
                        <div className="popup-wrapper">
                          <div className="popup-box">
                            <div className="popup-content">
                              <h3 className="mt-4 mb-5">
                                Why do you want to register?
                              </h3>
                              <Form>
                                <Form.Group className="mb-3" controlId="text">
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter Your Reason"
                                    onChange={(e) => setwill(e.target.value)}
                                  />
                                  <Form.Text className="text-muted">
                                    We hope you have a great experience with us.
                                    See you soon!
                                  </Form.Text>
                                </Form.Group>
                              </Form>
                              <Button
                                onClick={() => {
                                  console.log(id0);
                                  getidEvent(id0);
                                  closePopup();
                                  alert("Registered Successfully");
                                }}
                              >
                                Submit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h3 className="text-center mt-3">No events posted yet.</h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      )}
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

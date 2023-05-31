import React, { useEffect, useState } from "react";
import NavComponent from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import { Button } from "react-bootstrap";

var regester;

const Ngoland = () => {
  const auth = localStorage.getItem("NGO");
  let ans = JSON.parse(auth);
  const [event, setEvent] = useState([]);
  const [setReg] = useState([]);
  useEffect(() => {
    getEvents();
  });

  const navigate = useNavigate();
  const getEvents = async () => {
    let result = await fetch(`http://localhost:3175/eventsspecific/${ans._id}`);
    result = await result.json();
    setEvent(result);
  };

  const showreg = async (id) => {
    let reg = await fetch(`http://localhost:3175/reg/${id}`);
    reg = await reg.json();
    // console.log(reg);

    // setReg(reg);

    regester = reg;
    // console.log(reg);
    // console.log(regester);
    if (reg.length > 0) {
      navigate("/showreg");
    } else {
      alert("No Registrations");
    }
  };
  const deleteEvent = async (id) => {
    let result = await fetch(`http://localhost:3175/events/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getEvents();
      alert("Event Deleted");
    }
    // navigate("/");
  };

  const registerUser = () => {
    navigate("/events/add");
  };

  // console.log(event);
  return (
    <div className="event-list">
      <NavComponent />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>Your Events</h3>
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

                  <div className="text-center">
                    <div className="col px-5">
                      <div className="mb-2 mt-2">
                        <button
                          variant="light"
                          className="border border-2 rounded-5 mb-4 w-30"
                          type="button"
                          onClick={() => showreg(item._id)}
                        >
                          Show Registrations
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      variant="light"
                      className="border border-2 rounded-5 mb-4 w-30"
                      type="button"
                      onClick={() => deleteEvent(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h3>Create your first event here</h3>
        </div>
      )}
      <div>
        <br></br>
        <Button
          variant="light"
          className="btn btn-outline-success btn-lg ml-2 register-user rounded-5"
          onClick={registerUser}
        >
          Add More Events
        </Button>
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Ngoland;
export { regester };

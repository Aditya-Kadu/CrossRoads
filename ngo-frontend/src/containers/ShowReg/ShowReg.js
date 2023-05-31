import React from "react";
import NavComponent from "../Navbar/navbar";
import { useState, useEffect } from "react";
import { regester } from "../NGOland/NGOland";
import Footer from "../footer/footer";

export default function ShowReg() {
  const [reg, setReg] = useState([]);

  useEffect(() => {
    getReg();
  }, []);

  const getReg = async () => {
    setReg(regester);
  };

  return (
    <div className="show-event">
      <NavComponent />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Registrations</h1>

      {reg.map((item, index) => (
        <div>
          <ul key={item._id}></ul>
          <div className="container bg-light">
            <div className="row mt-5 border border-2 rounded">
              <div className="col px-5">
                <div className="wrapper">
                  <div className="row">
                    <div className="col mb-3 px-4">
                      <div className="row mt-4 border border-2 rounded">
                        <div class="mb-5 mt-3">
                          <div>
                            <b>Name</b> : {item.userName}
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
                        <div className="mb-5 mt-3">
                          <div>
                            <b>Age</b> : {item.age}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col mb-3 px-4">
                      <div className="row mt-4 border border-2 rounded">
                        <div className="mb-5 mt-3">
                          <div>
                            <b>City</b> : {item.city}
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
                        <div className="mb-5 mt-3">
                          <div>
                            <b>Contact No</b> : {item.contactvol}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col mb-3 px-4">
                      <div className="row mt-4 border border-2 rounded">
                        <div className="mb-5 mt-3">
                          <div>
                            <b>Email Id</b> :{item.emailIdvol}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col mb-3 px-2">
                  <div className="row mt-4 border border-2 rounded">
                    <div className="mb-5 mt-3">
                      <div>
                        <b>Willingness</b> : {item.will}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

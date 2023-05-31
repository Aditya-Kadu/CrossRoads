import React, { useEffect, useState } from "react";
import NavComponent from "../Navbar/navbar";
import Footer from "../footer/footer";

export default function NGOList() {
  const [Regngo, setRegngo] = useState([]);
  const [count, setcount] = useState([]);

  useEffect(() => {
    Regester_NGO();
  });

  const Regester_NGO = async () => {
    let resultx = await fetch("http://localhost:3175/regngo");
    resultx = await resultx.json();
    console.log(resultx);

    let result = await fetch("http://localhost:3175/events");
    result = await result.json();
    result = await result.map((user) => user.userId);
    console.log(result);
    let result0 = await fetch("http://localhost:3175/regngo");
    result0 = await result0.json();
    result0 = await result0.map((user) => user._id);
    console.log(result0);

    for (let i = 0; i < result0.length; i++) {
      let con = 0;
      for (let j = 0; j < result.length; j++) {
        if (result0[i] === result[j]) {
          con = con + 1;
        }
      }
      count[i] = con;
    }

    console.log(count);

    setRegngo(resultx);
    setcount(count);
  };
  console.log(count);
  return (
    <div>
      <div>
        <NavComponent />
      </div>
      <br />
      <br />
      <div className="container bg-light mb-5">
        <div className="row mt-5 border border-2 rounded">
          <div className="col px-5">
            <h3 className="text-center mt-3">NGO's that chose CrossRoads</h3>
            <h6 className="text-center mt-3" style={{ color: "grey" }}>
              You can also chose us!
            </h6>
            {Regngo.map((item, index) => (
              <div>
                <ul key={item._id}>
                  <div className="col mb-5 px-2">
                    <div className="row mt-5 border border-2 rounded">
                      <div className="mb-5 mt-3">
                        <div>
                          <b>NGO name</b> : {item.ngoName}
                        </div>
                      </div>
                      <div className="mb-5 mt-3">
                        <div>
                          <b>Contact details</b>: {item.ngoEmailId}
                        </div>
                      </div>
                      <div className="mb-5 mt-3">
                        <div>
                          <b>Number of events organised by NGO</b> :{" "}
                          {count[index]}
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

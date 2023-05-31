import "./App.css";
import img_4 from "../../assets/img_4.png";
import { Button } from "react-bootstrap";
import NavComponent from "../Navbar/navbar";
import CorouselComponent from "../Corousel/corousel";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";

function App() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("Volunteer");
  const auth0 = localStorage.getItem("NGO");
  const registerUser = () => {
    if (!auth && !auth0) {
      navigate("/volunteer/add");
    } else {
      alert("You are already logged in.");
    }
  };

  const registerNGO = () => {
    if (!auth && !auth0) {
      navigate("/ngo/add");
    } else {
      alert("You are already logged in.");
    }
  };

  return (
    <div classNameName="App">
      <div classNameName="nav-component">
        <NavComponent />
      </div>
      <div classNameName="slider">
        <CorouselComponent />
      </div>
      <div classNameName="food-distribute">
        <div className="row justify-content-center">
          <div className="col-md-5 mt-5  mb-2">
            <h1>
              <center>OUR AIM</center>
            </h1>
            <h3>
              <center>
                We focus on making the maximum positive effort on our community.
                Our volunteers provide the momentum that helps us make a small
                but powerful change in this world. Our amazing team of part-time
                and regular volunteers are committed to helping others.
              </center>
            </h3>
          </div>
          <div className="col-md-5 mt-3 mb-4">
            <img src={img_4} alt="" className="img-fluid" id="img-4" />
          </div>
        </div>
      </div>

      <div classNameName="join-links">
        <div className="row py-3">
          <div className="col-md-12 justify-content-evenly text-center">
            <h1 className="mt-5">Join Us Now</h1>
            <h3 className="mt-4 md-5">Sign Up To Help Make A Change</h3>
            <Button
              variant="light"
              className="btn btn-outline-primary btn-lg mr-2 register-ngo rounded-5"
              onClick={registerNGO}
            >
              As a NGO
            </Button>
            <Button
              variant="light"
              className="btn btn-outline-success btn-lg ml-2 register-user rounded-5"
              onClick={registerUser}
            >
              As a Volunteer
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

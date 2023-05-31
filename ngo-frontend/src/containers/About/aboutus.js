import "./aboutus.css";
import img6 from "../../assets/img6.jpg";
import NavComponent from "../Navbar/navbar";
import Footer from "../footer/footer";

function AboutUs() {
  return (
    <div classNameName="Aboutus">
      <div classNameName="nav-component">
        <NavComponent />
      </div>
      <div className="aboutus">
        <div>
          <h1>
            <center>ABOUT US</center>
          </h1>
        </div>
        <div className="row justify-content-center ">
          <div className="picture">
            <img src={img6} alt="" className="img-fluid" id="img-6" />
          </div>
        </div>
        <center>
          <p>
            CROSSROADS is a platform to connect NGO's and volunteers, aims to
            facilitate communication between NGO's and people, allowing them to
            coordinate logistics and discuss any questions and queries. <br />
            Creating awareness about the wide range of social activities that
            NGO's carry out and providing information online about NGO's to the
            people not affiliated with them, hassle free. Through our website,
            we aim to connect NGO's and volunteers by providing a platform where
            NGO's can psot about their upcoming events, projects and
            volunteering opportunities. Volunteers can then browse through these
            postings, filter them by location, cause and interests and sign up
            for the ones that they are interested in. This will help volunteers
            make more informed decisions about where they want tot donate their
            time, money and efforts.{" "}
          </p>
        </center>
      </div>
      <div classNameName="photos">
        <div className="row justify-content-center">
          <div className="col-md-5 mt-3 mb-4">
            <img alt="" className="img-fluid" id="img-5" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;

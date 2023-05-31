import img6 from "../../assets/img6.jpg";
import NavComponent from "../Navbar/navbar";
import Footer from "../footer/footer";

function ContactUs() {
  return (
    <div classNameName="Aboutus">
      <div classNameName="nav-component">
        <NavComponent />
      </div>
      <div className="aboutus">
        <div>
          <h1>
            <center>CONTACT US</center>
          </h1>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="picture">
            <img src={img6} alt="" className="img-fluid" id="img-6" />
          </div>
        </div>
        <p>
          <center>
            <h3>Need help with something?</h3>
            <br />
            Contact us now at:
            <br />
            crossroads@gmail.com
          </center>
        </p>
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

export default ContactUs;

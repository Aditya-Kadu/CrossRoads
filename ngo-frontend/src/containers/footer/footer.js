import React from "react";

export default function Footer() {
  return (
    <div>
      <div class="row justify-content-evenly bg-dark text-white pt-2 pb-5">
        <div class="col-md-3 pt-4">
          <h5 class="pb-2">CROSSROADS</h5>
          <p>
            We are looking forward to working with various NGO's and volunteers
            and making an impact on various sectors of the society.
          </p>
        </div>
        <div class="col-md-3 pt-4">
          <h5 class="pb-2">Important Links</h5>
          <p>
            <a href="/" class="link-light text-decoration-none">
              Home
            </a>
            <br />
            <a href="/aboutus" class="link-light text-decoration-none">
              About Us
            </a>
            <br />
            <a href="/contactus" class="link-light text-decoration-none">
              Contact Us
            </a>

            <br></br>

            <br />
          </p>
        </div>
        <div class="col-md-3 pt-4">
          <h5 class="pb-2">Contact Us</h5>
          <p>
            PICT,
            <br />
            Hinjewadi,
            <br /> Maharashtra 412115,
            <br /> <i class="bi bi-telephone-fill"></i>Call : +91 9356444317
          </p>
        </div>
      </div>

      <div class="row bg-secondary text-white text-center p-2">
        <div class="col-12">
          <p>Copyright 2023-present by Crossroads, all Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

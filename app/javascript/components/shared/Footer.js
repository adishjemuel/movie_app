import React from "react";

const Footer = (props) => {
  return (
    <footer class="text-center text-lg-start bg-dark text-white pt-4 mt-5 position-absolute w-100 mt-auto">
      <section class="p-1">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                Movie DB
              </h6>
              <p>
                Extensive database for movies. Please contribute to the community
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4"> The Basics</h6>
              <p>
                <a href="#!" class="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Contact Form
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Help
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  FAQ
                </a>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4"> Get Involved</h6>
              <p>
                <a href="#!" class="text-reset">
                  Report Something Wrong
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Add Movie
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Contribute detail
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Forum
                </a>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                 Sta. Rosa, Laguna
              </p>
              <p>
                moviedb123@example.com
              </p>
              <p>
                 + 01 234 567 88
              </p>
              <p>
                 + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
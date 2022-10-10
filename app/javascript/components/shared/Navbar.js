import React from "react";

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid mx-5">
        <a class="navbar-brand text-white fs-3" href="#">
          Movie DB
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active text-white mx-3"
                aria-current="page"
                href="#"
              >
                Movies
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                People
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <a href="/users/sign_up" style={{ textDecoration: "none" }} className="text-white me-4">
              {" "}
              Join MovieDB{" "}
            </a>

            <a href="/users/sign_in" style={{ textDecoration: "none" }} className="text-white me-5">
              {" "}
              Log In{" "}
            </a>
            <form role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search for a movie, person, director..."
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

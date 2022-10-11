import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
const Homepage = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar />
      <div className="container  py-2 px-2">
        <section className="text-center">
          <h1> Movies </h1>
        </section>
        <section className="ms-3">
          <span class="badge rounded-pill text-bg-dark px-5 py-2 me-2 mt-2">
            {" "}
            All{" "}
          </span>
          {props.genres.map((genre) => (
            <span class="badge rounded-pill text-bg-dark px-5 py-2 me-2 mt-2">
              {genre.type}
            </span>
          ))}
        </section>
        <div className="container row row-cols-3 d-flex justify-content-center overflow-hidden">
          {props.movies.map((movie) => (
            <div
              className="col w-33.33 mt-4"
              style={{ height: "25rem" }}
              key={movie.id}
            >
              <div className="card ">
                <img
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
                  className="card-img-top"
                  style={{ height: "18rem" }}
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{movie.title} </h5>
                  <p class="card-text"> Lorem ipsum </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;

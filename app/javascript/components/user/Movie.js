import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
const Movie = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar user={props.user} />

      <section
        class="my-5 w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0 ,0 ,0, 0.5), rgba(0, 0, 0, 0.5)),url(https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg)",
          height: "23rem",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          //   filter: 'blur(2px)'
          //   position: 'relative'
        }}
      >
        <div class="container">
          <div class="row pt-4">
            <div class="col-4" style={{ width: "15rem" }}>
              <img
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
                className="img-fluid"
              />
            </div>
            <div class="col-8 text-light d-flex flex-column align-items-start">
              <h1 className="fw-bold">{props.movie.title} </h1>
              <span className="fs-5 ps-1 fw-light">
                {" "}
                {props.movie.formatted_release_date}{" "}
              </span>

              <span className="fs-4 ps-1 pt-4 semi-bold"> Overview </span>
              <p className="ps-1 fs-6 pt-2 fst-italic ">
                {" "}
                {props.movie.summary}{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-4">

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Movie;

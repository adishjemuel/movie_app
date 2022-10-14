
import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Pagination from "../shared/Pagination";
const Favorites = (props) => {
  console.log(props);

  const content = Array(props.pages)
    .fill(1)
    .map((el, index) => (
      <form action="/movies" method="get" key={index}>
        <li
          className={`page-item ${
            index + 1 == props.currentPage ? "active" : ""
          }`}
        >
          <input name="page" value={index + 1} type="hidden" />
          <button type="submit" className="page-link">
            {" "}
            {index + 1}
          </button>
        </li>
      </form>
    ));
  return (
    <div>
      <Navbar user={props.user} token={props.token}/>
      <div className="container  py-2 px-2">
        <section className="text-center">
          <h1> All Type Of Movies</h1>
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
        <div className="container row row-cols-1 row-cols-md-5 g-4 pt-4 d-flex justify-content-center overflow-hidden">
          {props.movies.map((movie) => (
            <div
              className="col mt-4 pe-4"
              style={{ height: "25rem" }}
              key={movie.id}
            >
              <a
                href={`/movies/${movie.id}`}
                style={{
                  display: "block",
                  height: "100%",
                  textDecoration: "none",
                }}
              >
                <div className="card h-100" style={{ cursor: "pointer" }}>
                  <img
                    src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
                    className="card-img-top"
                    style={{ height: "18rem" }}
                    alt="..."
                  />
                  <div class="card-body text-body">
                    <h5 class="card-title">{movie.title} </h5>
                    <span class="card-text text-muted">
                      {" "}
                      {movie.formatted_release_date}{" "}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {props.pages > 1 ? <Pagination content={content} /> : null}
      <Footer />
    </div>
  );
};

export default Favorites;
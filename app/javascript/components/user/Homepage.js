import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Pagination from "../shared/Pagination";
import ReactStars from "react-rating-stars-component";
const Homepage = (props) => {
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
      <Navbar user={props.user} token={props.token} type="movies"/>
      <div className="container  py-2 px-2">
        <section className="text-center">
          <h1> All Type Of Movies</h1>
        </section>
        <section className="ms-3 d-flex flex-row flex-wrap">
          <form action="/movies" method="get">
            <button
              class="badge rounded-pill text-bg-dark px-5 py-2 me-2 mt-2"
              type="submit"
            >
              {" "}
              All{" "}
            </button>
          </form>
          {props.genres.map((genre) => (
            <form action="/movies" method="get" key={genre.id}>
            <input name="genre[type]" value={genre.type} type="hidden"/>
              <button
                class="badge rounded-pill text-bg-dark px-5 py-2 me-2 mt-2"
                type="submit"
              >
                {genre.type}
              </button>
            </form>
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
                    src={movie.cover_url}
                    className="card-img-top"
                    style={{ height: "16rem" }}
                    alt="..."
                  />
                  <div class="card-body text-body">
                    <h6 class="card-title fw-bold">{movie.title} </h6>
                    <span class="card-text text-muted fw-light">
                      {" "}
                      {movie.formatted_release_date}{" "}
                    </span>
                    <p class="card-text">
                      <ReactStars
                        count={5}
                        value={movie.average_rating}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                      />
                    </p>
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

export default Homepage;

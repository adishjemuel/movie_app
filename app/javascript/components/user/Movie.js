import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ReactStars from "react-rating-stars-component";
const Movie = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar user={props.user} token={props.token} />
      <section
        class="my-5 w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0 ,0 ,0, 0.5), rgba(0, 0, 0, 0.5)),url(${props.movie.cover_url}`,
          height: "23rem",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="container">
          <div class="row pt-4">
            <div class="col-4" style={{ width: "15rem" }}>
              <img src={props.movie.cover_url} className="img-fluid" />
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
              {props.user && (
                <form
                  action={
                    props.on_list
                      ? `/favorites/${props.movie.id}`
                      : "/favorites"
                  }
                  method="post"
                >
                  {props.on_list && (
                    <input name="_method" type="hidden" value="delete" />
                  )}
                  {props.on_list == false && (
                    <input type="hidden" name="id" value={props.movie.id} />
                  )}
                  <input
                    name="authenticity_token"
                    type="hidden"
                    value={props.token}
                  />
                  <input
                    name="authenticity_token"
                    type="hidden"
                    value={props.token}
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-primary text-white text-center"
                  >
                    {props.on_list
                      ? "Remove From Your Watchlist"
                      : "Add To Your Watchlist"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-4 px-4">
        <h1 className="fw-normal"> Cast and Crews </h1>
        <div className="d-flex flex-nowrap overflow-scroll pt-4">
          {props.casts_and_crews.map((cast) => (
            <div className="flex-shrink-0 pe-4 pb-4" key={cast.id}>
              <a
                href={`/members/${cast.id}`}
                style={{
                  display: "block",
                  height: "100%",
                  textDecoration: "none",
                }}
              >
                <div
                  className="card h-100"
                  style={{ cursor: "pointer", width: "8rem", height: "5rem" }}
                >
                  <img
                    src={cast.picture_url}
                    className="card-img-top"
                    alt="..."
                    style={{width: "8rem", height:"5rem"}}
                  />
                  <div class="card-body text-body">
                    <span
                      class="card-title fw-bold"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {cast.first_name} {cast.last_name}{" "}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <h2 className="fw-normal mt-5"> Reviews </h2>
        <hr className="border border-1 border-dark opacity-100" />
        <div className="d-flex justify-content-end">
          <a
            style={{ textDecoration: "none" }}
            href={`/movies/${props.movie.id}/reviews/new`}
          >
            <span
              class="badge rounded-pill text-bg-primary my-2 px-4 py-2 text-white"
              style={{ cursor: "pointer" }}
            >
              Write A Review
            </span>
          </a>
        </div>
        {props.reviews.map((review) => (
          <div class="card mb-3" key={review.id}>
            <div class="row g-0">
              <div class="col-md-2" style={{ width: "5rem" }}>
                <img
                  src={review.review_avatar}
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-10">
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 class="card-title">{review.title}</h5>

                    {props.user &&
                      (props.user.username == review.review_user.username || props.user.role == "admin") && (
                        <div class="dropdown ms-5">
                          <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Manage
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a
                                class="dropdown-item"
                                href={`/reviews/${review.id}/edit`}
                              >
                                Edit
                              </a>
                            </li>
                            <li>
                              <form
                                action={`/reviews/${review.id}`}
                                method="post"
                              >
                                <input
                                  name="_method"
                                  type="hidden"
                                  value="delete"
                                />
                                <input
                                  name="authenticity_token"
                                  type="hidden"
                                  value={props.token}
                                />
                                <button class="dropdown-item" type="submit">
                                  Delete
                                </button>
                              </form>
                            </li>
                          </ul>
                        </div>
                      )}
                  </div>
                  <span class="text-muted fw-semibold">
                    {" "}
                    {review.review_user.username}{" "}
                  </span>
                  <p class="card-text mt-2">{review.body}</p>
                  <p class="card-text">
                    <small class="text-muted">{review.created}</small>
                  </p>
                  <ReactStars
                    count={5}
                    value={review.score}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Movie;

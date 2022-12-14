import React, { useState, useEffect } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ReactStars from "react-rating-stars-component";

const Review = (props) => {
  const [rating, setRating] = useState(1);
  const [title, setTitle] = useState("");
  const ratingChanged = (newRating) => setRating(newRating);
  useEffect(() => {
    if (props.review) {
      setTitle(props.review.title);
    }
  }, []);
  return (
    <div>
      <Navbar user={props.user} token={props.token} />
      <section className="container row py-4">
        <div className="col-4 ms-5">
          <div class="card mb-3" style={{ height: "35rem" }}>
            <div class="row g-0">
              <div class="col-md-7">
                <img
                  src={props.movie.cover_url}
                  class="img-fluid rounded-start"
                  alt="..."
                  style={{ minHeight: "35rem", maxHeight: "35rem" }}
                />
              </div>
              <div class="col-md-5">
                <div class="card-body">
                  <h5 class="card-title">{props.movie.title}</h5>
                  <p class="card-text fw-light text-start">
                    {props.movie.summary}
                  </p>
                  <p class="card-text">
                    <small class="text-muted">
                      {props.movie.formatted_release_date}{" "}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          class="col"
          action={
            props.review
              ? `/reviews/${props.review.id}`
              : `/movies/${props.movie.id}/reviews`
          }
          method="post"
        >
          {props.review && <input name="_method" type="hidden" value="put" />}
          <input name="utf8" type="hidden" value="&#x2713;" />
          <input name="authenticity_token" type="hidden" value={props.token} />
          <input name="review[score]" type="hidden" value={rating} />
          {props.success && (
            <div class="alert alert-primary" role="alert">
              <span> The review was successfully {props.review ? "updated" : "created"}. You can now go back to </span>
              <a href={`/movies/${props.movie.id}`} className="mt-1">
                {" "}
                {props.movie.title}{" "}
              </a>
            </div>
          )}
          {props.success == false && (
            <div class="alert alert-warning" role="alert">
              The review was not successfully{" "}
              {props.review ? "updated" : "created"}. There must be some errors
              or problems
            </div>
          )}
          <h5 className="fw-semibold"> Review on {props.movie.title}</h5>

          <span class="text-muted">
            {" "}
            Before making a review, make sure you have watched the film. It is
            important to express your opinions and also support it. Be a critic
            and assess the overall quality of the movie. Tell people your
            thoughts and give them recommendation.{" "}
          </span>
          <p className="text-danger mt-1">
            {" "}
            No Spoilers Allowed. It will be deleted immediately{" "}
          </p>

          <div className="my-3">
            <label className="form-label"> Rating</label>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              value={props.review ? props.review.score : 0}
              size={24}
              activeColor="#ffd700"
            />
            {props.errors && props.errors.score && (
              <div class="mt-2 text-danger">Score {props.errors.score[0]}</div>
            )}
          </div>

          <div class="my-3">
            <label className="form-label"> Headline </label>
            <input
              type="text"
              className="form-control"
              name="review[title]"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
            {props.errors && props.errors.title && (
              <div class="mt-2 text-danger">
                Headline {props.errors.title[0]}
              </div>
            )}
          </div>
          <div class="my-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Summary
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              name="review[body]"
              placeholder="Write your review here"
              required
            >
              {props.review ? props.review.body : null}
            </textarea>
            {props.errors && props.errors.body && (
              <div class="mt-2 text-danger">Summary {props.errors.body[0]}</div>
            )}
          </div>
          <button type="submit" class="btn btn-primary mt-2">
            Submit Review
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Review;

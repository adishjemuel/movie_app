import React, { useState, useEffect } from "react";
import VerticalNav from "../shared/VerticalNav";
import ReactStars from "react-rating-stars-component";

const MoviesForm = (props) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const ratingChanged = (newRating) => setRating(newRating);
  useEffect(() => {
    if (props.review) {
      setTitle(props.review.title);
    }
    console.log(props);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 my-1">
          {" "}
          <VerticalNav user={props.user} currentPage="reviews" token={props.token} />
        </div>

        <div
          className="col-10 d-flex flex-column"
          style={{ borderLeft: "2px solid gray" }}
        >
          <div className="mt-4 container">
            <form
              action={
                props.review
                  ? `/admin/reviews/${props.review.id}`
                  : `/admin/reviews`
              }
              method="post"
            >
              {props.review && (
                <input name="_method" type="hidden" value="put" />
              )}
              <input name="review[score]" type="hidden" value={rating}/>`
              <input name="utf8" type="hidden" value="&#x2713;" />
              <input
                name="authenticity_token"
                type="hidden"
                value={props.token}
              />

              {props.success && (
                <div class="alert alert-primary" role="alert">
                  The review was successfully {props.review ? 'updated': 'created'}
                </div>
              )}
              {props.success == false && (
                <div class="alert alert-warning" role="alert">
                  The review was not successfully {props.review ? 'updated': 'created'}
                </div>
              )}
              {props.review ? (
                <>
                  <h2 className="fw-semibold"> Editing Review </h2>
                  <span class="text-muted">
                    {" "}
                    Before editing genre, make sure the details are right. It is
                    important to have an accurate depiction and there is no
                    misrepresentation{" "}
                  </span>
                </>
              ) : (
                <>
                  <h2 className="fw-semibold"> Creating New Review </h2>
                  <span class="text-muted">
                    {" "}
                    Before creating new review, make sure the details are right.
                    It is important to have an accurate depiction and there is
                    no misrepresentation{" "}
                  </span>
                </>
              )}

              <div class="my-3">
                <label className="form-label"> Movie</label>
                <select className="form-select" name="movie[id]">
                  {props.movies.map((m) => (
                    <option
                      value={m.id}
                      selected={
                        props.review
                          ? props.review.movie_title == m.title
                          : false
                      }
                    >
                      {m.title}

                    </option>
                  ))}
                </select>
              </div>
              <div className="my-3">
                <label className="form-label"> Rating</label>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  value={props.review ? props.review.score : 1}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>

              <div class="my-3">
                <label className="form-label fw-semibold"> Headline </label>
                <input
                  type="text"
                  className="form-control"
                  name="review[title]"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                />
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
              </div>

              <button
                type="submit"
                class="btn btn-primary my-2 w-full form-control"
              >
                {props.review ? "Update Review" : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesForm;

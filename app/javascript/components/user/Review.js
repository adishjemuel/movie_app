import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Review = (props) => {
  console.log(props);

  return (
    <div>
      <Navbar user={props.user} />
      <section className="container row py-4">
        <div className="col-4 ms-5">
          <div class="card mb-3" style={{ height:"30rem" }}>
            <div class="row g-0">
              <div class="col-md-6">
                <img
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
                  class="img-fluid rounded-start"
                  alt="..."
                  style={{ minHeight: "30rem", maxHeight: "30rem"}}
                />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">{props.movie.title}</h5>
                  <p class="card-text fw-light text-start">{props.movie.summary}</p>
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
          action={`/movies/${props.movie.id}/reviews`}
          method="post"
        >
          <input name="utf8" type="hidden" value="&#x2713;" />
          <input name="authenticity_token" type="hidden" value={props.token} />
          {/* <input name="movie_id" type="hidden" value={props.movie.id} /> */}
          <h5 className="fw-semibold">
            {" "}
            Making A Review For The Movie {props.movie.title}{" "}
          </h5>

          <span class="text-muted">
            {" "}
            Before making a review, make sure you have watched the film. It is
            important to express your opinions and also support it. Be a critic
            and assess the overall quality of the movie. Tell people your
            thoughts and give them recommendation.{" "}
          </span>
          <p className="text-danger mt-1"> No Spoilers Allowed. It will be deleted immediately </p>
          <div class="my-3"> 
            <label className="form-label"> Headline </label> 
            <input type="text" className="form-control" name="review[title]"/>
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
            ></textarea>
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

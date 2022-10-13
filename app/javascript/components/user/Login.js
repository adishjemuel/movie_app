import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Login = (props) => {
  console.log(props);

  return (
    <div>
      <Navbar user={props.user} />
      <section className="container row py-4">
        <div className="col-3 ms-5">
          <div class="card text mb-3">
            <div class="card-header bg-info text-white fw-semibold fs-5">
              {" "}
              Benefits of being a member
            </div>
            <div class="card-body">
              <h5 class="card-title"> Watchlist</h5>
              <p class="card-text">
                Log the movies and maintain a personal watchlist
              </p>
              <h5 class="card-title"> Oversee </h5>
              <p class="card-text">
                Keep track of your favorite movies and get recommendations from
                them
              </p>
              <h5 class="card-title"> Something New </h5>
              <p class="card-text">
                You can always see the new and popular movies to watch on
              </p>
            </div>
          </div>
        </div>
        <form class="col" action="/users/sign_in" method="post">
          <input name="utf8" type="hidden" value="&#x2713;" />
          <input name="authenticity_token" type="hidden" value={props.token} />
          <input name="commit" type="hidden" value="Log in" />
          <h5 className="fw-semibold"> Login to your account </h5>
          <span class="text-muted mb-3">
            {" "}
            Make sure you enter the correct details that you have signed up. If
            you do not have yet an account, signing up for an account is free
            and easy.
            <a href="/users/sign_up" style={{textDecoration:'none'}}> Click here </a> to get started
          </span>

          <div clasName="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="user[email]"
            />
            <div id="emailHelp" class="form-text my-2">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              name="user[password]"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
const Profile = (props) => {
  console.log(props);
  const [username, setUsername] = useState(props.user.username);
  const [fileExists, setFileExists] = useState(false);
  const [fileName, setFileName] = useState("");
  const handleFile = (event) => {
    if (event.target.files[0]) setFileExists(true);
    else setFileExists(false);
    setFileName(event.target.files[0].name);
  };
  return (
    <div>
      <Navbar user={props.user} token={props.token} />
      <section
        class="my-5 w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0 ,0 ,0, 0.5), rgba(0, 0, 0, 0.5)),url(/images/geometric.webp)`,
          height: "25rem",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="container">
          <div class="row pt-4">
            <div class="col-4" style={{ width: "19rem" }}>
              <img
                src={props.user.avatar_url}
                className="img-fluid rounded mb-2"
              />

              <form action="/users" method="post" enctype="multipart/form-data">
                <input name="_method" type="hidden" value="put" />
                <input name="utf8" type="hidden" value="&#x2713;" />
                <input
                  name="authenticity_token"
                  type="hidden"
                  value={props.token}
                />
                <input name="commit" type="hidden" value="Update" />
                <div class={`mb-3 ${fileExists ? "d-none" : ""}`}>
                  <label for="formFile" class="form-label text-white">
                    Select File To Upload
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    name="user[avatar]"
                    onChange={handleFile}
                  />
                </div>
                <div className={`${fileExists ? "" : "d-none"}`}>
                  <button className="btn btn-primary w-70 me-2" type="submit">
                    Upload {fileName}
                  </button>
                  <button
                    className="btn btn-danger w-20"
                    type="button"
                    onClick={() => setFileExists(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            <div class="col-8 text-light d-flex flex-column align-items-start">
              <form action="/users" method="post">
                <input name="_method" type="hidden" value="put" />
                <input name="utf8" type="hidden" value="&#x2713;" />
                <input
                  name="authenticity_token"
                  type="hidden"
                  value={props.token}
                />
                <input name="commit" type="hidden" value="Update" />

                <div class="mb-3">
                  <label class="form-label fw-bold">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    aria-describedby="usernameHelp"
                    name="user[username]"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                  <div id="usernameHelp" class="form-text ms-1 fw-semibold">
                    It is what the users see when you post a review on a movie.
                    Make sure it is cool
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="user[current_password]"
                  />
                  <div id="passwordHelp" class="form-text ms-1 fw-semibold">
                    You need to input your password to make changes
                  </div>
                </div>
                <button className="btn btn-primary" type="submit">
                  {" "}
                  Update Username{" "}
                </button>

                <h5 className="mt-4 ms-1 fw-bold"> Overview </h5>
                <h6 className="ms-1 fst-italic">
                  {" "}
                  {props.watchlist == 0
                    ? "You currently have no movies on your watchlist"
                    : `You currently have ${props.watchlist} movies on your watchlist`}{" "}
                </h6>
                <h6 className="ms-1 fst-italic">
                  {" "}
                  {props.reviews == 0
                    ? "You currently have no reviews on any movies on the site"
                    : `You currently have ${props.reviews} reviews`}{" "}
                </h6>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;

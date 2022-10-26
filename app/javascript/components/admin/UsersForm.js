import React, { useState, useEffect } from "react";
import VerticalNav from "../shared/VerticalNav";

const UsersForm = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState(null);
  const [selectedFile, setSelectedFile] = useState(10);
  useEffect(() => {
    if (props.u) {
      setUsername(props.u.username);
      setEmail(props.u.email);
      setImg(props.u.avatar_url);
    }
    if (props.errors) console.log(props.errors.email[0]);
    console.log(props);
  }, []);

  const handleFile = (event) => {
    setImg(URL.createObjectURL(event.target.files[0]));
  };

  const handleReset = () => {
    setSelectedFile(Date.now());
    if (props.u) setImg(props.u.avatar_url);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 my-1">
          {" "}
          <VerticalNav
            user={props.user}
            currentPage="users"
            token={props.token}
          />
        </div>

        <div
          className="col-10 d-flex flex-column"
          style={{ borderLeft: "2px solid gray" }}
        >
          <div className="mt-4 container">
            <form
              action={props.u ? `/admin/users/${props.u.id}` : `/admin/users`}
              method="post"
            >
              {props.u && <input name="_method" type="hidden" value="put" />}
              <input name="utf8" type="hidden" value="&#x2713;" />
              <input
                name="authenticity_token"
                type="hidden"
                value={props.token}
              />

              {props.success && (
                <div class="alert alert-primary" role="alert">
                  The user was successfully {props.u ? "updated" : "created"}
                </div>
              )}
              {props.success == false && (
                <div class="alert alert-warning" role="alert">
                  The user was not successfully{" "}
                  {props.u ? "updated" : "created"}
                </div>
              )}
              {props.u ? (
                <>
                  <h2 className="fw-semibold"> Editing User Details </h2>

                  <span class="text-muted">
                    {" "}
                    Before updating the user, make sure the details are right.
                    It is important to have an accurate depiction and there is
                    no misrepresentation{" "}
                  </span>
                </>
              ) : (
                <>
                  <h2 className="fw-semibold"> Creating New User </h2>
                  <span class="text-muted">
                    {" "}
                    Before creating new user, make sure the details are right.
                    It is important to have an accurate depiction and there is
                    no misrepresentation{" "}
                  </span>
                </>
              )}

              <div class="my-3">
                <label className="form-label fw-semibold"> Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="user[username]"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
                {props.errors && props.errors.username && (
                  <div class="mt-2 text-danger">
                    Username {props.errors.username[0]}
                  </div>
                )}
              </div>

              <div class="my-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  name="user[email]"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  disabled={props.user.role != "admin_3" ? true : false}
                />
                {props.errors && props.errors.email && (
                  <div class="mt-2 text-danger">
                    Email Address {props.errors.email[0]}
                  </div>
                )}
              </div>
              {props.user.role == "admin_3" && (
                <>
                  <div class="my-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      name="user[password]"
                      disabled={props.u ? true : false}
                      required={props.u ? false : true}
                    />

                    {props.errors && props.errors.password && (
                      <div class="mt-2 text-danger">
                        Password {props.errors.password[0]}
                      </div>
                    )}
                  </div>

                  <div class="my-3">
                    <label className="form-label"> Role </label>
                    <select className="form-select" name="user[role]">
                      {props.roles.map((m) => (
                        <option
                          value={m.value}
                          key={m.value}
                          selected={
                            props.u ? props.u.role_name == m.name : false
                          }
                        >
                          {m.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
              <div class={`my-3`}>
                <label for="formFile" class="form-label fw-semibold">
                  Profile Picture
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  name="user[avatar]"
                  onChange={handleFile}
                  key={selectedFile}
                  accept="image/*"
                />
              </div>

              {props.errors && props.errors.avatar && (
                <div class="mt-2 text-danger">
                  Avatar {props.errors.avatar[0]}
                </div>
              )}
              <div className={`${img ? "" : "d-none"}`}>
                <img src={img} className="img-fluid" />
                <button
                  className={`btn btn-danger w-full form-control mt-3 ${
                    img ? "" : "d-none"
                  }`}
                  type="button"
                  onClick={handleReset}
                >
                  {props.u
                    ? `Reset To Existing Avatar(${props.u.avatar_name})`
                    : "Cancel Picture"}
                </button>
              </div>

              <button
                type="submit"
                class="btn btn-primary my-2 w-full form-control"
              >
                {props.u ? "Update Profile" : "Add User"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersForm;

import React, { useState, useEffect } from "react";
const Navbar = (props) => {
  console.log(props.user);
  const [searchType, setSearchType] = useState("movies");
  useEffect(() => {
    if (props.type) setSearchType(props.type);
  }, []);
  console.log(props.type);
  const SearchMovies = () => {
    return (
      <form
        role="search"
        style={{ width: "30rem" }}
        action="/movies"
        method="get"
      >
        <input
          class="form-control mx-5 w-100"
          style={{ width: "28rem" }}
          type="search"
          placeholder="Search for any title of movies"
          aria-label="Search"
          name="q[title_cont]"
        />
      </form>
    );
  };
  const SearchMembers = () => {
    return (
      <form
        role="search"
        style={{ width: "30rem" }}
        action="/members"
        method="get"
      >
        <input
          class="form-control mx-5 w-100"
          style={{ width: "28rem" }}
          type="search"
          placeholder="Search for the actor, actress, director, producer, etc .."
          aria-label="Search"
          name="q[first_name_or_last_name_cont]"
        />
      </form>
    );
  };
  const NavGuest = () => {
    return (
      <>
        <a
          href="/users/sign_up"
          style={{ textDecoration: "none" }}
          className="text-white mx-4"
        >
          {" "}
          Join MovieDB{" "}
        </a>

        <a
          href="/users/sign_in"
          style={{ textDecoration: "none" }}
          className="text-white me-5"
        >
          {" "}
          Log In{" "}
        </a>
      </>
    );
  };

  const NavUser = () => {
    return (
      <>
        <div class="dropdown me-5">
          <button
            style={{ background: "none", border: "none", width: "8rem" }}
            role="buton"
            data-bs-toggle="dropdown"
            className={"d-flex justify-content-end"}
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="48"
              class="bi bi-person-circle"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </button>

          <ul class="dropdown-menu   ms-4">
            {props.user &&
              (props.user.role == "admin_1" ||
                props.user.role == "admin_2"
                ) && (
                <li>
                  <a className="dropdown-item" href="/admin/movies">
                    Admin Dashboard
                  </a>
                </li>
              )}
            {props.user &&
              (props.user.role == "admin_3"
                ) && (
                <li>
                  <a className="dropdown-item" href="/admin/dashboard">
                    Admin Dashboard
                  </a>
                </li>
              )}
            <li>
              <a class="dropdown-item" href="/users/edit">
                Profile
              </a>
            </li>
            <li>
              <a class="dropdown-item" href={`/favorites`}>
                Favorites
              </a>
            </li>
            <li>
              <form
                accept-charset="UTF-8"
                action="/users/sign_out"
                method="post"
              >
                <input name="_method" type="hidden" value="delete" />
                <input name="utf8" type="hidden" value="&#x2713;" />
                <input
                  name="authenticity_token"
                  type="hidden"
                  value={props.token}
                />

                <button class="dropdown-item" type="submit">
                  Log Out
                </button>
              </form>
            </li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid mx-5">
        <a class="navbar-brand text-white fs-3" href="#">
          Movie DB
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active text-white ms-5 me-4"
                aria-current="page"
                href="/"
              >
                Movies
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white me-5" href="/members">
                People
              </a>
            </li>
            {
              {
                movies: <SearchMovies />,
                members: <SearchMembers />,
              }[searchType]
            }
          </ul>
          <div className="d-flex align-items-center">
            {props.user ? <NavUser /> : <NavGuest />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

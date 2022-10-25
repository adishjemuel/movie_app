import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
const Member = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar user={props.user} token={props.token} />
      <section
        class="my-5 w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0 ,0 ,0, 0.5), rgba(0, 0, 0, 0.5)),url(${props.member.picture_url}`,
          height: "23rem",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="container">
          <div class="row pt-4">
            <div class="col-4" style={{ width: "13rem" }}>
              <img src={props.member.picture_url} className="img-fluid" style={{width:"12rem"}} />
            </div>
            <div class="col-8 text-light d-flex flex-column align-items-start">
              <h1 className="fw-bold">{props.member.first_name} {props.member.last_name} </h1>
              <span className="fs-5 ps-1 fw-light">
                {props.member.birthday_date}
              </span>

              <span className="fs-4 ps-1 pt-4 semi-bold"> Overview </span>
              <p className="ps-1 fs-6 pt-2 fst-italic ">
                {" "}
                {props.member.overview}{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-4 px-4">
        <h1 className="fw-normal"> Movies Under {props.member.gender == "male" ? "His" : "Her"} Belt </h1>
        <div className="d-flex flex-nowrap overflow-scroll pt-4">
          {props.movies.map((movie) => (
            <div className="flex-shrink-0 pe-4 pb-4" key={movie.id}>
              <a
                href={`/movies/${movie.id}`}
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
                    src={movie.cover_url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div class="card-body text-body">
                    <span
                      class="card-title fw-bold"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {movie.title}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Member;

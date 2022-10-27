import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Pagination from "../shared/Pagination";
const Members = (props) => {
  const content = Array(props.pages)
    .fill(1)
    .map((el, index) => (
      <form action="/members" method="get" key={index}>
        <li
          className={`page-item ${
            index + 1 == props.current_page ? "active" : ""
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
      <Navbar user={props.user} token={props.token} type="members" />
      <div className="container  py-2 px-2">
        <section className="text-start ms-2 my-4">
          <h1>Popular People</h1>
        </section>
        <div className="container row row-cols-1 row-cols-md-5 g-4 pt-4 d-flex justify-content-center overflow-hidden">
          {props.members.map((member) => (
            <div
              className="col mt-4 pe-4"
              style={{ height: "22rem" }}
              key={member.id}
            >
              <a
                href={`/members/${member.id}`}
                style={{
                  display: "block",
                  height: "100%",
                  textDecoration: "none",
                }}
              >
                <div className="card h-100" style={{ cursor: "pointer" }}>
                  <img
                    src={member.picture_url}
                    className="card-img-top"
                    style={{ height: "16rem" }}
                    alt="..."
                  />
                  <div class="card-body text-body">
                    <h5 class="card-title">
                      {member.first_name} {member.last_name}{" "}
                    </h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {props.pages > 1 ? (
        <Pagination
          content={content}
          currentPage={props.current_page}
          pages={props.pages}
          url={"members"}
        />
      ) : null}
      <Footer />
    </div>
  );
};

export default Members;

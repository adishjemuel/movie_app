import React from "react";
import VerticalNav from "../shared/VerticalNav";
import AdminTable from "../shared/AdminTable";

const Reviews = (props) => {
  const columns = [
    {
      id: "title",
      numeric: false,
      disablePadding: true,
      label: "Title",
      type: "normal",
    },
    {
      id: "body",
      numeric: false,
      disablePadding: false,
      label: "Body",
      type: "normal",
    },
    {
      id: "movie_title",
      numeric: false,
      disablePadding: false,
      label: "Movie Title",
      type: "normal",
    },
    {
      id: "score",
      disablePadding: false,
      numeric: false,
      label: "Score",
      type: "normal",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 my-1">
          {" "}
          <VerticalNav user={props.user} currentPage="reviews" />
        </div>

        <div
          className="col-10 d-flex flex-column justify-content-center"
          style={{ borderLeft: "2px solid gray" }}
        >
          <div className="mt-4 container align-self-center">
            {props.success && (
              <div class="alert alert-primary" role="alert">
                The review was successfully deleted
              </div>
            )}
            {props.success == false && (
              <div class="alert alert-warning" role="alert">
                The review was not successfully deleted
              </div>
            )}
            <AdminTable
              data={props.reviews}
              columns={columns}
              header={"Reviews"}
              token={props.token}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

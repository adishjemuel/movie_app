import React from "react";
import VerticalNav from "../shared/VerticalNav";
import TopBoard from "../shared/TopBoard";
import AdminTable from "../shared/AdminTable";

const Movies = (props) => {
  const columns = [
    {
      id: "title",
      numeric: false,
      disablePadding: true,
      label: "Title",
      type: "normal",
    },
    {
      id: "formatted_release_date",
      numeric: false,
      disablePadding: false,
      label: "Release",
      type: "normal",
    },
    {
      id: "genres_type",
      disablePadding: false,
      numeric: false,
      label: "Genre(s)",
      type: "pill",
    },
    {
      id: "average_rating",
      numeric: true,
      disablePadding: false,
      label: "Average Rating",
      type: "normal",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 my-1">
          {" "}
          <VerticalNav user={props.user} currentPage="movies" />
        </div>

        <div
          className="col-10 d-flex flex-column justify-content-center"
          style={{ borderLeft: "2px solid gray" }}
        >
          <div className="mt-4 container align-self-center">
            <AdminTable
              data={props.movies}
              columns={columns}
              header={"Movies"}
              token={props.token}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;

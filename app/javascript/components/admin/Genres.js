
import React from "react";
import VerticalNav from "../shared/VerticalNav";
import TopBoard from "../shared/TopBoard";
import AdminTable from "../shared/AdminTable";

const Genres = (props) => {
  const columns = [
    {
      id: "id",
      numeric: false,
      disablePadding: true,
      label: "ID",
      type: "normal",
    },
    {
      id: "type",
      numeric: false,
      disablePadding: false,
      label: "Type",
      type: "normal",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 my-1">
          {" "}
          <VerticalNav user={props.user} currentPage="genres" />
        </div>

        <div
          className="col-10 d-flex flex-column justify-content-center"
          style={{ borderLeft: "2px solid gray" }}
        >
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary w-20 me-2">
              {" "}
              Create New Genre{" "}
            </button>
          </div>
          <div className="mt-4 container align-self-center">
            <AdminTable
              data={props.genres}
              columns={columns}
              header={"Genre(s)"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres

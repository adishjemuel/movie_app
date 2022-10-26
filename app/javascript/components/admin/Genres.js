import React from "react";
import VerticalNav from "../shared/VerticalNav";
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
          <VerticalNav user={props.user} currentPage="genres" token={props.token}/>
        </div>

        <div
          className="col-10 d-flex flex-column justify-content-center"
          style={{ borderLeft: "2px solid gray" }}
        >
          <div className="mt-4 container align-self-center">
            {props.success && (
              <div class="alert alert-primary" role="alert">
                The genre was successfully deleted
              </div>
            )}
            {props.success == false && (
              <div class="alert alert-warning" role="alert">
                The genre was not successfully deleted. There must be some
                errors or problems
              </div>
            )}

            <AdminTable
              user={props.user}
              data={props.genres}
              columns={columns}
              header={"Genres"}
              token={props.token}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;

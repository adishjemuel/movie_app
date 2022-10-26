import React from "react";
import VerticalNav from "../shared/VerticalNav";
import AdminTable from "../shared/AdminTable";

const Movies = (props) => {
  const columns = [
    {
      id: "first_name",
      numeric: false,
      disablePadding: true,
      label: "First Name",
      type: "normal",
    },
    {
      id: "last_name",
      numeric: false,
      disablePadding: false,
      label: "Last Name",
      type: "normal",
    },
    {
      id: "birthday_date",
      disablePadding: false,
      numeric: false,
      label: "Birthday",
      type: "normal",
    },
    {
      id: "overview",
      numeric: true,
      disablePadding: false,
      label: "Overview",
      type: "normal",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 my-1">
          {" "}
          <VerticalNav user={props.user} currentPage="members" token={props.token}/>
        </div>

        <div
          className="col-10 d-flex flex-column justify-content-center"
          style={{ borderLeft: "2px solid gray" }}
        >
          <div className="mt-4 container align-self-center">
            {props.success && (
              <div class="alert alert-primary" role="alert">
                The cast/crew was successfully deleted. 
              </div>
            )}
            {props.success == false && (
              <div class="alert alert-warning" role="alert">
                The cast/crew was not successfully deleted. 
              </div>
            )}
            <AdminTable
              data={props.members}
              columns={columns}
              header={"Members"}
              token={props.token}
              user={props.user}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;

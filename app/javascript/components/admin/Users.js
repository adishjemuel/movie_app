
import React from "react";
import VerticalNav from "../shared/VerticalNav";
import AdminTable from "../shared/AdminTable";

const Users = (props) => {
  const columns = [
    {
      id: "id",
      numeric: false,
      disablePadding: true,
      label: "ID",
      type: "normal",
    },
    {
      id: "username",
      numeric: false,
      disablePadding: false,
      label: "Username",
      type: "normal",
    },
    {
      id: "email",
      numeric: false,
      disablePadding: false,
      label: "Email Address",
      type: "normal",
    },
    {
      id: "role_name",
      disablePadding: false,
      numeric: false,
      label: "Role",
      type: "normal",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 my-1">
          {" "}
          <VerticalNav user={props.user} currentPage="users" />
        </div>

        <div
          className="col-10 d-flex flex-column justify-content-center"
          style={{ borderLeft: "2px solid gray" }}
        >
          <div className="mt-4 container align-self-center">
            {props.success && (
              <div class="alert alert-primary" role="alert">
                The user was successfully deleted
              </div>
            )}
            {props.success == false && (
              <div class="alert alert-warning" role="alert">
                The user was not successfully deleted
              </div>
            )}
            <AdminTable
              data={props.users}
              columns={columns}
              header={"Users"}
              token={props.token}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

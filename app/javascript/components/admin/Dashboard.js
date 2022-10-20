import React from "react";
import VerticalNav from "../shared/VerticalNav";
import TopBoard from "../shared/TopBoard";
import VerticalBar from "../shared/VerticalBar";
const Dashboard = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 my-1">
          {" "}
          <VerticalNav user={props.user} />
        </div>

        <div className="col-9">
          <TopBoard />
          <div className="ms-5 mb-5">
          <VerticalBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

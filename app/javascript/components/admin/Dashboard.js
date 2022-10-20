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
          <VerticalNav user={props.user} currentPage="dashboard"/>
        </div>

        <div className="col-9 d-flex flex-column">
          <div>
            <TopBoard/>
          </div>
          <div className="ms-4 mb-5 container align-self-center">
            <VerticalBar genres={props.genres} labels={props.genres} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

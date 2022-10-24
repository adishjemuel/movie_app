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
          <VerticalNav user={props.user} currentPage="dashboard" />
        </div>

        <div className="col-10 d-flex flex-column" style={{borderLeft:'2px solid gray'}}>
          <div className="mb-5 container align-self-center">
            <div class="card-group mt-4 ms-2">
              <div class="card">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <h5 class="card-title">Users</h5>
                  <h1 className="fw-bold"> {props.users_count}</h1>
                </div>
              </div>
              <div class="card">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <h5 class="card-title">Reviews</h5>
                  <h1 className="fw-bold"> {props.reviews_count} </h1>
                </div>
              </div>
              <div class="card">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <h5 class="card-title">Genres</h5>
                   <h1 className="fw-bold"> {props.genres_count} </h1>
                </div>
              </div>
            </div>
            <VerticalBar genres={props.genres} labels={props.genres} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

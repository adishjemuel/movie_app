import React from "react";

const Pagination = (props) => {
  return (
    <nav className="container ms-5 mt-3">
      <ul class="pagination justify-content-start">
        <li class="page-item disabled">
          <a class="page-link ms-3">Previous</a>
        </li>
        {props.content}
        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

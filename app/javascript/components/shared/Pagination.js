import React from "react";

const Pagination = (props) => {
  console.log(props);
  return (
    <nav className="container ms-5 my-3">
      <ul class="pagination pagination-lg justify-content-start ms-4">
        <form action={`/${props.url}`} method="get">
          <input name="page" value={props.currentPage - 1} type="hidden" />
          <li class="page-item">
            <button
              class="page-link"
              aria-label="Next"
              disabled={props.currentPage == 1 ? "true" : ""}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
        </form>

        {props.content}
        <form action={`/${props.url}`} method="get">
          <input name="page" value={props.currentPage + 1} type="hidden" />
          <li class="page-item">
            <button
              class="page-link"
              aria-label="Previous"
              disabled={props.currentPage == props.pages ? "true" : ""}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </form>
      </ul>
    </nav>
  );
};

export default Pagination;

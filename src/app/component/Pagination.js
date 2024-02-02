import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bread-crma-last-frame">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            onClick={() => paginate(number)}
            key={number}
            className="page-item"
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

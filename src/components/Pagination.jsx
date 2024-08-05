/* eslint-disable react/prop-types */
import React from "react";
import IconsBackward from "./IconsBackward";
import IconsForward from "./IconsForward";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <IconsBackward
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {Array.from({ length: totalPages }, (_, index) => (
        <span
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </span>
      ))}
      <IconsForward
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;

import React from "react";
import styles from "./Pagination.module.css";
function Pagination({ numberOfItems, itemsPerPage, currentPage, changePage }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(numberOfItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pageNumber.map((number) => (
        <div
          className={styles.pagination__number}
          style={{ backgroundColor: currentPage === number ? "lightgrey" : "" }}
          onClick={() => changePage(number)}
          key={number}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

export default Pagination;

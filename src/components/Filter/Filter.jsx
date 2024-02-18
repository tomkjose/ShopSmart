import React from "react";
import styles from "./filter.module.css";
function Filter({ handleFilter }) {
  return (
    <select
      name="priceFilter"
      onChange={(e) => handleFilter(e.target.value)}
      className={styles.filter}
    >
      <option value="">All</option>
      <option value="lowest">Lowest Price</option>
      <option value="height">Highest Price</option>
    </select>
  );
}

export default Filter;

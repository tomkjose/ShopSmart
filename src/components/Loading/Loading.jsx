import React from "react";
import styles from "./loading.module.css";
function Loading() {
  return (
    <div className={styles.loader__container}>
      <span className={styles.loader}></span>
    </div>
  );
}

export default Loading;

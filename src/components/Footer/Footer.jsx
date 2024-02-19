import React from "react";
import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <span>
        All rights reserved © {new Date().getFullYear()} . ShopSmart.com
      </span>
    </div>
  );
}

export default Footer;

import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
      <div className={styles.logo}>
        e<span className={`${styles.logo} ${styles.letterL}`}>l</span>grow.
      </div>
  );
};

export default Logo;

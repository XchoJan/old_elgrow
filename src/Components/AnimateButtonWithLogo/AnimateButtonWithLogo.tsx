import React from "react";
import styles from "./AnimateButtonWithLogo.module.css";


const AnimateButtonWithLogo = () => {
  return (
      <div className={styles.animateButton}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}
               style={{color: "#424D5E"}}>
            e<span className={`${styles.logo} ${styles.letterL}`}>l</span>grow.
          </div>
        </div>
      </div>
  );
};

export default AnimateButtonWithLogo;

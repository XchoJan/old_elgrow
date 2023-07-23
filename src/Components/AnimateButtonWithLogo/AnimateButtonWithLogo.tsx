import React, {FC} from "react";
import styles from "./AnimateButtonWithLogo.module.css";
import Logo from "../Logo/Logo";


const AnimateButtonWithLogo = () => {
  return (
      <div className={styles.animateButton}><Logo showLogo={true}/></div>
  );
};

export default AnimateButtonWithLogo;

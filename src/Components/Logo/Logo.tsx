import React, {FC} from "react";
import styles from "./Logo.module.css";

export type LogoPropsType = {
  isLightMode?: boolean
  showLogo?: boolean
}

const Logo: FC<LogoPropsType> = ({isLightMode, showLogo}) => {
  return (
      <div className={!showLogo ? styles.active : styles.logoContainer}>
        <div className={styles.logo}
             style={isLightMode ? {color: "#FFF"} : {color: "#424D5E"}}>
          e<span className={`${styles.logo} ${styles.letterL}`}>l</span>grow.
        </div>
      </div>
  );
};

export default Logo;

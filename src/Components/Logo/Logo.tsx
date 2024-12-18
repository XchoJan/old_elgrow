import React, {FC} from "react";
import styles from "./Logo.module.css";
import Link from "next/link";

export type LogoPropsType = {
  isLightMode?: boolean
  showLogo?: boolean
}

const Logo: FC<LogoPropsType> = ({isLightMode, showLogo}) => {
  return (
      <Link href={'/mobilePage'} className={!showLogo ? styles.active : styles.logoContainer}>
        <div className={styles.logo}
             style={isLightMode ? {color: "#FFF"} : {color: "#424D5E"}}>
          e<span className={`${styles.logo} ${styles.letterL}`}>l</span>grow.
        </div>
      </Link>
  );
};

export default Logo;

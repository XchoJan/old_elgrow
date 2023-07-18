import React, {FC} from "react";
import styles from "./Logo.module.css";

export type LogoPropsType = {
  isLightMode?: boolean
}

const Logo:FC<LogoPropsType> = ({isLightMode}) => {
  return (
      <div className={styles.logo} style={isLightMode ? {  color: '#FFF'} : {color: '#424D5E'}}>
        e<span className={`${styles.logo} ${styles.letterL}`}>l</span>grow.
      </div>
  );
};

export default Logo;

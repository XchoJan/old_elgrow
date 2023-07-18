import React, {FC, ReactNode} from "react";
import styles
  from "./AnimateButton.module.css";


export type AnimateButtonPropsType = {
  children: ReactNode
}

const AnimateButton:FC<AnimateButtonPropsType> = ({children}) => {
  return (
      <div className={styles.animateButton}>
        {children}
      </div>
  );
};

export default AnimateButton;

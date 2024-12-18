import React, {FC, ReactNode} from "react";
import styles from "./AnimateButton.module.css";


export type AnimateButtonPropsType = {
  children: ReactNode
  onClick: () => void
}

const AnimateButton: FC<AnimateButtonPropsType> = ({children, onClick}) => {
  return (
      <div
          onClick={onClick}
          className={styles.animateButton}
      >{children}</div>
  );
};

export default AnimateButton;

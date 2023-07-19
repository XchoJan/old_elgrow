import React, {FC, ReactNode} from "react";
import {Link} from "react-scroll";
import styles from "./AnimateButton.module.css";


export type AnimateButtonPropsType = {
  children: ReactNode
  onClick: () => void
}

const AnimateButton: FC<AnimateButtonPropsType> = ({children, onClick}) => {
  return (
      <Link delay={900}
            onClick={onClick}
            to="becomeClientComponent"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={styles.animateButton}
      >{children}</Link>
  );
};

export default AnimateButton;

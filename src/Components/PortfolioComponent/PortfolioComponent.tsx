import React from "react";
import styles from "./PortfolioComponent.module.css";
import Scroll from "react-scroll";

const Element = Scroll.Element;

const PortfolioComponent = () => {
  return (
      <div className={styles.portfolioComponent}>
        <Element name="portfolioComponent"></Element>
        <div className={styles.container}>Portfolio</div>
      </div>
  );
};

export default PortfolioComponent;

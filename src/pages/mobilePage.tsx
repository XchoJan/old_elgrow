import React from "react";
import styles from "../assets/styles/mobilePage.module.css";
import HeaderMobileComponent from "../Components/HeaderMobileComponent/HeaderMobileComponent";
import MobileMainComponent from "../Components/MobileMainComponent/MobileMainComponent";
import AboutUsNumbersComponent from "../Components/AboutUsNumbersComponent/AboutUsNumbersComponent";
import AboutUsLetterComponent
  from "../Components/AboutUsLetterComponent/AboutUsLetterComponent";
import PortfolioComponent from "../Components/PortfolioComponent/PortfolioComponent";

const mobilePage = () => {
  return (
      <div className={styles.mobilePage}>
        <div className={styles.container}>
          <HeaderMobileComponent/>
          <img className={styles.eagleOutstaff} src="/images/sova.png" alt="" />
          <MobileMainComponent/>
        </div>
        <AboutUsNumbersComponent/>
        <div className={styles.container}>
          <AboutUsLetterComponent/>
          <PortfolioComponent/>
        </div>
      </div>
  );
};

export default mobilePage;

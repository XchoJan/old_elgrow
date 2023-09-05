import React from "react";
import styles from "../assets/styles/mobilePage.module.css";
import HeaderMobileComponent
  from "../Components/HeaderMobileComponent/HeaderMobileComponent";
import MobileMainComponent from "../Components/MobileMainComponent/MobileMainComponent";
import AboutUsNumbersComponent
  from "../Components/AboutUsNumbersComponent/AboutUsNumbersComponent";
import AboutUsLetterComponent
  from "../Components/AboutUsLetterComponent/AboutUsLetterComponent";
import PortfolioComponent from "../Components/PortfolioComponent/PortfolioComponent";
import HowWeWorkComponent from "../Components/HowWeWorkComponent/HowWeWorkComponent";
import PriceComponent from "../Components/PriceComponent/PriceComponent";
import BecomeClientComponent
  from "../Components/BecomeClientComponent/BecomeClientComponent";

const mobilePage = () => {
  return (
      <div className={styles.mobilePage}>
        <HeaderMobileComponent/>
        <div className={styles.container}>
          <img className={styles.eagleOutstaff} src="/images/sova.png" alt=""/>
          <MobileMainComponent/>
        </div>
        <AboutUsNumbersComponent/>
        <div className={styles.container}>
          <AboutUsLetterComponent/>
          <PortfolioComponent/>
          <HowWeWorkComponent/>
          <PriceComponent/>
        </div>
        <BecomeClientComponent/>
      </div>
  );
};

export default mobilePage;

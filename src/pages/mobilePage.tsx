import React from "react";
import styles from "../assets/styles/mobilePage.module.css";
import HeaderMobileComponent from "../Components/HeaderMobileComponent/HeaderMobileComponent";
import MobileMainComponent from "../Components/MobileMainComponent/MobileMainComponent";
import AboutUsNumbersComponent from "../Components/AboutUsNumbersComponent/AboutUsNumbersComponent";

const mobilePage = () => {
  return (
      <div className={styles.mobilePage}>
        <div className={styles.container}>
          <HeaderMobileComponent/>
          <img className={styles.eagleOutstaff} src="/images/sova.png" alt="" />
          <MobileMainComponent/>
          <AboutUsNumbersComponent/>
        </div>
      </div>
  );
};

export default mobilePage;

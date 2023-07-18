import React from "react";
import styles from "./MobileMainComponent.module.css";
import AnimateButton from "../AnimateButton/AnimateButton";
import TitleText from "../TitleText/TitleText";

const images = [
  "nespresso.png",
  "Luxxy.png",
  "OpenBank.png",
  "vtb.svg",
  "utg.svg",
  "megafon.svg",
  "KFC.svg",
];

const MobileMainComponent = () => {
  return (
      <div className={styles.mobileMainComponent}>
        <TitleText text="Разработка мобильных приложений"/>
        <div className={styles.clientsBlock}>
          <div className={styles.clients}>
            <h3 className={styles.clientTitle}>Наши клиенты:</h3>
            <div className={styles.clientsImages}>
              {images.map((image, index) => {
                return <img className={styles.clientIcon} key={index}
                            src={`/images/${image}`} alt={`/images/${image}`}/>;
              })}
            </div>
          </div>
          <AnimateButton>
            <div>Стать клиентом</div>
          </AnimateButton>
        </div>
      </div>
  );
};

export default MobileMainComponent;

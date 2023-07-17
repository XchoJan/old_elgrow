import React from "react";
import styles from "./MobileMainComponent.module.css";

const images = [
  'nespresso.png',
  'Luxxy.png',
  'OpenBank.png',
  'vtb.svg',
  'utg.svg',
  'megafon.svg',
  'KFC.svg',
];

const MobileMainComponent = () => {
  return (
      <div className={styles.mobileMainComponent}>
        <h1 className={styles.title}>Разработка
          мобильных приложений</h1>
        <div className={styles.clientsBlock}>
          <div className={styles.clients}>
            <h3 className={styles.clientTitle}>Наши клиенты:</h3>
            <div className={styles.clientsImages}>
              {images.map((image, index) => {
                return <img className={styles.clientIcon} key={index} src={`/images/${image}`} alt={`/images/${image}`} />
              })}
            </div>
          </div>
          <div className={styles.becomeClient}>Стать клиентом</div>
        </div>
      </div>
  );
};

export default MobileMainComponent;

import React, {useEffect, useState} from "react";
import styles from "./MobileMainComponent.module.css";
import AnimateButton from "../AnimateButton/AnimateButton";
import TitleText from "../TitleText/TitleText";
import {useMediaQuery} from "react-responsive";

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
  const [hideOnSmallDesktop, setHideOnSmallDesktop] = useState(false);

  const isSmallDesktop = useMediaQuery({query: "(min-width: 1223px)"});

  useEffect(() => {
    setHideOnSmallDesktop(isSmallDesktop);
  }, [isSmallDesktop]);

  return (
      <div className={styles.mobileMainComponent}>
        <div className={styles.title}>
          <h1 className={styles.titleText}>Разработка <br/>мобильных приложений</h1>
        </div>
        <div className={styles.clientsBlock}>
          <div className={styles.clients}>
            <h3 className={styles.clientTitle}>Наши клиенты:</h3>
            <div className={styles.clientsImages}>
              <img className={styles.nespressoIcon} src={`/images/nespresso.png`}
                   alt={`nespresso`}/>
              <img className={styles.LuxxyIcon} src={`/images/Luxxy.png`} alt={`Luxxy`}/>
              <img className={styles.OpenBank} src={`/images/OpenBank.png`}
                   alt={`OpenBank`}/>
              <img className={styles.vtb} src={`/images/vtb.svg`} alt={`vtb`}/>
              <img className={styles.utg} src={`/images/utg.svg`} alt={`utg`}/>
              <img className={styles.megafon} src={`/images/megafon.svg`}
                   alt={`megafon`}/>
              <img className={styles.KFC} src={`/images/KFC.svg`} alt={`KFC`}/>
            </div>
          </div>
          {hideOnSmallDesktop && <AnimateButton onClick={() => {}}>
            <div>Стать клиентом</div>
          </AnimateButton>}
        </div>
      </div>
  );
};

export default MobileMainComponent;

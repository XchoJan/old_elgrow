import React from "react";
import styles from "./PortfolioComponent.module.css";
import Scroll from "react-scroll";
import TitleText from "../TitleText/TitleText";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const Element = Scroll.Element;

const PortfolioComponent = () => {
  return (
      <div className={styles.portfolioComponent}>
        <Element name="portfolioComponent"></Element>
        <div className={styles.container}>
          <div className={styles.title}>
            <TitleText text="Портфолио"/>
          </div>
          <div className={styles.portfolioCards}>
            <PortfolioCard backgroundColor="#9B4EFE"
                           title="Наземное обслуживание"
                           tags={
                             ["# гражданская авиация", "# аэропорты",
                               "# наземное обслуживание", "# Внуково", "# Пулково"]
                           }
                           description="Разработали приложение для наземного
                           обслуживания воздушных судов крупнейшему
                           росссийскому игроку UTG Group.">
              <div className={styles.images}>
                <div className={styles.utg1}>
                  <img className={styles.utg1Image} src={`/images/utg1.png`} alt='utg1' />
                </div>
                <div className={styles.utg2}>
                  <img className={styles.utg2Image} src={`/images/utg2.png`} alt='utg2' />
                </div>
                <div className={styles.utg3}>
                  <img className={styles.utg3Image} src={`/images/utg3.png`} alt='utg3' />
                </div>
                <div className={styles.utg4}>
                  <img className={styles.utg4Image} src={`/images/utg4.png`} alt='utg4' />
                </div>
              </div>
            </PortfolioCard>
            <PortfolioCard backgroundColor="#05846F"
                           title="Nespresso"
                           tags={
                             ["# кофе", "# капсулы",
                               "# США", "# международная разработка"]
                           }
                           description="Мобильное приложение для федерального дистрибьютора Nespresso в Америке.">
              <div className={styles.images}>
                <div className={styles.nespresso1}>
                  <img className={styles.nespresso1Image} src={`/images/nespresso1.png`} alt='nespresso1' />
                </div>
                <div  className={styles.nespresso2}>
                  <img className={styles.nespresso2Image} src={`/images/nespresso2.png`} alt='nespresso2' />
                </div>
                <div  className={styles.nespresso3}>
                  <img className={styles.nespresso3Image} src={`/images/nespresso3.png`} alt='nespresso3' />
                </div>
                <div  className={styles.nespresso4}>
                  <img className={styles.nespresso4Image} src={`/images/nespresso4.png`} alt='nespresso4' />
                </div>
              </div>
            </PortfolioCard>
            <PortfolioCard backgroundColor="#88CB6B"
                           title="Luxxy"
                           tags={
                             ["# e-commerce", "# люкс",
                               "# бренды", "# совместная работа"]
                           }
                           description="Разработка ряда сервисов федерального e-commerce.
                           Кооперация с несколькими разработчиками в РФ.">
              <div className={styles.images}>
                <div className={styles.luxxy1}>
                  <img className={styles.luxxy1Image} src={`/images/Luxxy1.png`} alt='Luxxy1' />
                </div>
                <div className={styles.luxxy2}>
                  <img className={styles.luxxy2Image} src={`/images/Luxxy2.png`} alt='Luxxy2' />
                </div>
                <div className={styles.luxxy3}>
                  <img className={styles.luxxy3Image} src={`/images/Luxxy3.png`} alt='Luxxy3' />
                </div>
              </div>
            </PortfolioCard>
            <PortfolioCard backgroundColor="#07B7F9"
                           title="Статус строй"
                           tags={
                             ["# стартап", "# сервисы",
                               "# интеграции"]
                           }
                           description="Разработка MVP для федерального стартапа по
                           строительству и ремонту.">
              <div className={styles.images}>
                <div className={styles.statusStroy1}>
                  <img className={styles.statusStroy1Image} src={`/images/statusStroy1.png`} alt='statusStroy1' />
                </div>
                <div className={styles.statusStroy2}>
                  <img className={styles.statusStroy2Image} src={`/images/statusStroy2.png`} alt='statusStroy2' />
                </div>
                <div className={styles.statusStroy3}>
                  <img className={styles.statusStroy3Image} src={`/images/statusStroy3.png`} alt='statusStroy3' />
                </div>
                <div className={styles.statusStroy4}>
                  <img className={styles.statusStroy4Image} src={`/images/statusStroy4.png`} alt='statusStroy4' />
                </div>
              </div>
            </PortfolioCard>
            <PortfolioCard backgroundColor="#DB418C"
                           title="Управление парковками аэропортов"
                           tags={
                             ["# стартап", "# сервисы",
                               "# интеграции"]
                           }
                           description="Разработка MVP для федерального стартапа по
                           строительству и ремонту.">
              <div className={styles.images}>
                <div className={styles.parking4}>
                  <img className={styles.parking4Image} src={`/images/parking4.png`} alt='parking4' />
                </div>
                <div className={styles.parking5}>
                  <img className={styles.parking5Image} src={`/images/parking5.png`} alt='parking5' />
                </div>
                <div className={styles.parking6}>
                  <img className={styles.parking6Image} src={`/images/parking6.png`} alt='parking6' />
                </div>
              </div>
            </PortfolioCard>
          </div>
          <div className={styles.allProject}>
            <div className={styles.allProjectContainer}>
              <span className={styles.allProjectText}>Все проекты</span>
              <img className={styles.allProjectIcon} src={`/images/mobileArrow.svg`} alt='mobileArrow' />
            </div>
          </div>
        </div>
      </div>
  );
};

export default PortfolioComponent;

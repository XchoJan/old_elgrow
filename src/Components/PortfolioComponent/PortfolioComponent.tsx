import React from "react";
import styles from "./PortfolioComponent.module.css";
import Scroll from "react-scroll";
import TitleText from "../TitleText/TitleText";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import {Flip, Hinge, JackInTheBox, Reveal, Slide} from "react-awesome-reveal";
import {keyframes} from "@emotion/react";

const Element = Scroll.Element;

const PortfolioComponent = () => {

  const customAnimationLeftTop = keyframes`
    from {
      opacity: 0;
      transform: translate3d(-200px, -100px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `;

  const customAnimationLeftDown = keyframes`
    from {
      opacity: 0;
      transform: translate3d(-100px, -200px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `;

  const customAnimationRightTop = keyframes`
    from {
      opacity: 0;
      transform: translate3d(-100px, -200px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `;

  const customAnimationRightDown = keyframes`
    from {
      opacity: 0;
      transform: translate3d(100px, 100px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `;

  const customAnimationRotateLeft = keyframes`
    from {
      opacity: 0;
      transform: rotate(-75.895deg) translate3d(-100px, -200px, 0);
    }

    to {
      opacity: 1;
      transform: rotate(-25.895deg) translate3d(0, 0, 0);
    }
  `;

  const customAnimationRotateRight = keyframes`
    from {
      opacity: 0;
      transform: rotate(50.895deg);
      
    }

    to {
      opacity: 1;
      transform: rotate(15.895deg);
    }
  `;


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
                  <Reveal duration={1500} keyframes={customAnimationLeftTop}>
                    <img className={styles.utg1Image} src={`/images/utg1.png`}
                         alt="utg1"/>
                  </Reveal>
                </div>
                <div className={styles.utg2}>
                  <Reveal duration={1500} keyframes={customAnimationLeftDown}>
                    <img className={styles.utg2Image} src={`/images/utg2.png`}
                         alt="utg2"/>
                  </Reveal>
                </div>
                <div className={styles.utg3}>
                  <Reveal duration={1500} keyframes={customAnimationLeftTop}>
                    <img className={styles.utg3Image} src={`/images/utg3.png`}
                         alt="utg3"/>
                  </Reveal>
                </div>
                <div className={styles.utg4}>
                  <Reveal duration={1500} keyframes={customAnimationLeftDown}>
                    <img className={styles.utg4Image} src={`/images/utg4.png`}
                         alt="utg4"/>
                  </Reveal>
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
                  <Flip duration={1500}>
                    <img className={styles.nespresso1Image} src={`/images/nespresso1.png`}
                         alt="nespresso1"/>
                  </Flip>
                </div>
                <div className={styles.nespresso2}>
                  <Flip duration={1500}>
                    <img className={styles.nespresso2Image} src={`/images/nespresso2.png`}
                         alt="nespresso2"/>
                  </Flip>
                </div>
                <div className={styles.nespresso3}>
                  <Flip duration={1500}>
                    <img className={styles.nespresso3Image} src={`/images/nespresso3.png`}
                         alt="nespresso3"/>
                  </Flip>
                </div>
                <div className={styles.nespresso4}>
                  <Flip duration={1500}>
                    <img className={styles.nespresso4Image} src={`/images/nespresso4.png`}
                         alt="nespresso4"/>
                  </Flip>
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
                  <Reveal duration={1500} keyframes={customAnimationRotateLeft}>
                    <img className={styles.luxxy1Image} src={`/images/Luxxy1.png`}
                         alt="Luxxy1"/>
                  </Reveal>
                </div>
                <div className={styles.luxxy2}>
                  <img className={styles.luxxy2Image} src={`/images/Luxxy2.png`}
                       alt="Luxxy2"/>
                </div>
                <div className={styles.luxxy3}>
                  <Reveal duration={1500} keyframes={customAnimationRotateRight}>
                    <img className={styles.luxxy3Image} src={`/images/Luxxy3.png`}
                         alt="Luxxy3"/>
                  </Reveal>
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
                  <Slide duration={1500} direction={'left'}>
                  <img className={styles.statusStroy1Image}
                       src={`/images/statusStroy1.png`} alt="statusStroy1"/>
                </Slide>
                </div>
                <div className={styles.statusStroy2}>
                  <Slide duration={1500} direction={'up'}>
                  <img className={styles.statusStroy2Image}
                       src={`/images/statusStroy2.png`} alt="statusStroy2"/>
                  </Slide>
                </div>
                <div className={styles.statusStroy3}>
                  <Slide duration={1500} direction={'down'}>
                  <img className={styles.statusStroy3Image}
                       src={`/images/statusStroy3.png`} alt="statusStroy3"/>
                  </Slide>
                </div>
                <div className={styles.statusStroy4}>
                  <Slide duration={1500} direction={'left'}>
                  <img className={styles.statusStroy4Image}
                       src={`/images/statusStroy4.png`} alt="statusStroy4"/>
                  </Slide>
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
                  <Reveal duration={1500} keyframes={customAnimationRightTop}>
                  <img className={styles.parking4Image} src={`/images/parking4.png`}
                       alt="parking4"/>
                  </Reveal>
                </div>
                <div className={styles.parking5}>
                  <Reveal duration={1500} keyframes={customAnimationRightDown}>
                  <img className={styles.parking5Image} src={`/images/parking5.png`}
                       alt="parking5"/>
                  </Reveal>
                </div>
                <div className={styles.parking6}>
                  <Reveal duration={1500} keyframes={customAnimationRightTop}>
                  <img className={styles.parking6Image} src={`/images/parking6.png`}
                       alt="parking6"/>
                  </Reveal>
                </div>
              </div>
            </PortfolioCard>
          </div>
          <div className={styles.allProject}>
            <div className={styles.allProjectContainer}>
              <span className={styles.allProjectText}>Все проекты</span>
              <img className={styles.allProjectIcon} src={`/images/mobileArrow.svg`}
                   alt="mobileArrow"/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PortfolioComponent;

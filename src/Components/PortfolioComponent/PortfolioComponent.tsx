import React, {useEffect, useState} from "react";
import styles from "./PortfolioComponent.module.css";
import Scroll from "react-scroll";
import TitleText from "../TitleText/TitleText";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import {Flip, Hinge, JackInTheBox, Reveal, Slide} from "react-awesome-reveal";
import {keyframes} from "@emotion/react";
import {useMediaQuery} from "react-responsive";

const Element = Scroll.Element;

const PortfolioComponent = () => {
  const [hide1025px, setHide1025px] = useState(false);
  const [hide769px, setHide769px] = useState(false);
  const [hide391px, setHide391px] = useState(false);

  const is1025px = useMediaQuery({query: "(max-width: 1025px)"});
  const is769px = useMediaQuery({query: "(min-width: 769px)"});
  const is391px = useMediaQuery({query: "(max-width: 391px)"});

  useEffect(() => {
    setHide1025px(is1025px);
    setHide769px(is769px)
    setHide391px(is391px)
  }, [is1025px, is769px, is391px]);

  return (
      <div className={styles.portfolioComponent}>
        <Element name="portfolioComponent"></Element>
        <div className={styles.container}>
          <div className={styles.title}>
            <TitleText text="Портфолио"/>
          </div>
          {hide769px && <div className={styles.portfolioCards}>
            <PortfolioCard backgroundColor="#9B4EFE"
                           title="Наземное обслуживание"
                           tags={!hide1025px ? `# гражданская авиация  # аэропорты\n# наземное обслуживание  # Внуково  # Пулково` : `# гражданская авиация  # аэропорты  # наземное обслуживание\n# Внуково  # Пулково`}
                           description={!hide1025px ? `Разработали приложение для наземного\nобслуживания воздушных судов\nкрупнейшему росссийскому игроку\nUTG Group.` : `Разработали приложение для наземного\nобслуживания воздушных судов\nкрупнейшему росссийскому игроку\nUTG Group.`}>
              <div className={styles.images}>
                <div className={styles.utg1}>
                    <img className={styles.utg1Image} src={`/images/utg1.png`}
                         alt="utg1"/>
                </div>
                <div className={styles.utg2}>
                    <img className={styles.utg2Image} src={`/images/utg2.png`}
                         alt="utg2"/>
                </div>
                <div className={styles.utg3}>
                    <img className={styles.utg3Image} src={`/images/utg3.png`}
                         alt="utg3"/>
                </div>
                <div className={styles.utg4}>
                    <img className={styles.utg4Image} src={`/images/utg4.png`}
                         alt="utg4"/>
                </div>
              </div>
            </PortfolioCard>
            <PortfolioCard backgroundColor="#05846F"
                           title="Nespresso"
                           tags={!hide1025px ? `# кофе  # капуслы  # США\n# международная разработка` : `# кофе  # капуслы  # США  # международная разработка`}
                           description={`Мобильное приложение для федерального\nдистрибьютора Nespresso в Америке.`}>
              <div className={styles.images}>
                <div className={styles.nespresso1}>
                    <img className={styles.nespresso1Image} src={`/images/nespresso1.png`}
                         alt="nespresso1"/>
                </div>
                <div className={styles.nespresso2}>
                    <img className={styles.nespresso2Image} src={`/images/nespresso2.png`}
                         alt="nespresso2"/>
                </div>
                <div className={styles.nespresso3}>
                    <img className={styles.nespresso3Image} src={`/images/nespresso3.png`}
                         alt="nespresso3"/>
                </div>
                <div className={styles.nespresso4}>
                    <img className={styles.nespresso4Image} src={`/images/nespresso4.png`}
                         alt="nespresso4"/>
                </div>
              </div>
            </PortfolioCard>
            <PortfolioCard backgroundColor="#88CB6B"
                           title="Luxxy"
                           tags={!hide1025px ? `# e-commerce  # люкс\n# бренды  # совместная работа` : `# e-commerce  # люкс  # бренды  # совместная работа`}
                           description={`Разработка ряда сервисов федерального\ne-commerce. Кооперация с несколькими\nразработчиками в РФ.`}>
              <div className={styles.images}>
                <div className={styles.luxxy1}>
                    <img className={styles.luxxy1Image} src={`/images/Luxxy1.png`}
                         alt="Luxxy1"/>
                </div>
                <div className={styles.luxxy2}>
                  <img className={styles.luxxy2Image} src={`/images/Luxxy2.png`}
                       alt="Luxxy2"/>
                </div>
                <div className={styles.luxxy3}>
                    <img className={styles.luxxy3Image} src={`/images/Luxxy3.png`}
                         alt="Luxxy3"/>
                </div>
              </div>
            </PortfolioCard>
            <PortfolioCard backgroundColor="#07B7F9"
                           title="Статус строй"
                           tags={!hide1025px ? `# стартап  # сервисы\n# интеграции` : `# стартап  # сервисы  # интеграции`}
                           description={!hide1025px ? `Разработка MVP для федерального стартапа\nпо строительству и ремонту.` : `Разработка MVP для федерального\nстартапа по строительству и ремонту.`}>
              <div className={styles.images}>
                <div className={styles.statusStroy1}>
                    <img className={styles.statusStroy1Image}
                         src={`/images/statusStroy1.png`} alt="statusStroy1"/>
                </div>
                <div className={styles.statusStroy2}>
                    <img className={styles.statusStroy2Image}
                         src={`/images/statusStroy2.png`} alt="statusStroy2"/>
                </div>
                <div className={styles.statusStroy3}>
                    <img className={styles.statusStroy3Image}
                         src={`/images/statusStroy3.png`} alt="statusStroy3"/>
                </div>
                <div className={styles.statusStroy4}>
                    <img className={styles.statusStroy4Image}
                         src={`/images/statusStroy4.png`} alt="statusStroy4"/>
                </div>
              </div>
            </PortfolioCard>
            <PortfolioCard backgroundColor="#DB418C"
                           title={!hide1025px ? `Управление\nпарковками аэропортов` : `Управление\nпарковками\nаэропортов`}
                           tags={!hide1025px ? `# стартап  # сервисы\n# интеграции` : `# стартап  # сервисы  # интеграции`}
                           description={!hide1025px ? `Разработка MVP для федерального стартапа\nпо строительству и ремонту.` : `Разработка MVP для федерального\nстартапа по строительству и\nремонту.`}>
              <div className={styles.images}>
                <div className={styles.parking4}>
                    <img className={styles.parking4Image} src={`/images/parking4.png`}
                         alt="parking4"/>
                </div>
                <div className={styles.parking5}>
                    <img className={styles.parking5Image} src={`/images/parking5.png`}
                         alt="parking5"/>
                </div>
                <div className={styles.parking6}>
                    <img className={styles.parking6Image} src={`/images/parking6.png`}
                         alt="parking6"/>
                </div>
              </div>
            </PortfolioCard>
          </div>}
          {!hide769px && <div className={styles.portfolioCards}>
            <PortfolioCard backgroundColor="#9B4EFE"
                           title={!hide391px ? `Наземное\nобслуживание` : `Наземное обслуживание`}
                           tags={!hide391px ? `# гражданская авиация  # аэропорты\n# наземное обслуживание  # Внуково  # Пулково` : `# наземное обслуживание\n# гражданская авиация\n# аэропорты  # Внуково\n# Пулково`}
                           description={!hide391px ? `Разработали приложение для наземного\nобслуживания воздушных судов крупнейшему\nросссийскому игроку UTG Group.` : `Разработали\nприложение\nдля наземного\nобслуживания\nвоздушных судов\nкрупнейшему\nросссийскому игроку\nUTG Group.`}>
              <div className={styles.images}>
                <div className={styles.utg1}>
                    <img className={styles.utg1Image} src={`/images/utg1.png`}
                         alt="utg1"/>
                </div>
                <div className={styles.utg2}>
                    <img className={styles.utg2Image} src={`/images/utg2.png`}
                         alt="utg2"/>
                </div>
                <div className={styles.utg3}>
                    <img className={styles.utg3Image} src={`/images/utg3.png`}
                         alt="utg3"/>
                </div>
                <div className={styles.utg4}>
                    <img className={styles.utg4Image} src={`/images/utg4.png`}
                         alt="utg4"/>
                </div>
              </div>
            </PortfolioCard>
            <PortfolioCard backgroundColor="#05846F"
                           title="Nespresso"
                           tags={!hide391px ? `# кофе  # капуслы  # США\n# международная разработка` : `# кофе  # капуслы  # США\n# международная разработка`}
                           description={!hide391px ? `Мобильное приложение\nдля федерального дистрибьютора\nNespresso в Америке.` : `Мобильное приложение\nдля федерального\nдистрибьютора\nNespresso в Америке.`}>
              <div className={styles.images}>
                <div className={styles.nespresso1}>
                    <img className={styles.nespresso1Image} src={`/images/nespresso1.png`}
                         alt="nespresso1"/>
                </div>
                <div className={styles.nespresso2}>
                    <img className={styles.nespresso2Image} src={`/images/nespresso2.png`}
                         alt="nespresso2"/>
                </div>
                <div className={styles.nespresso3}>
                    <img className={styles.nespresso3Image} src={`/images/nespresso3.png`}
                         alt="nespresso3"/>
                </div>
                <div className={styles.nespresso4}>
                    <img className={styles.nespresso4Image} src={`/images/nespresso4.png`}
                         alt="nespresso4"/>
                </div>
              </div>
            </PortfolioCard>
            <PortfolioCard backgroundColor="#88CB6B"
                           title="Luxxy"
                           tags={!hide391px ? `# e-commerce  # люкс # бренды\n# совместная работа` : `# e-commerce  # люкс\n# совместная работа\n# бренды  `}
                           description={!hide391px ? `Разработка ряда сервисов федерального\ne-commerce. Кооперация с несколькими\nразработчиками в РФ.` : `Разработка ряда\nсервисов федерального\ne-commerce.\nКооперация\nс несколькими\nразработчиками в РФ.`}>
              <div className={styles.images}>
                <div className={styles.luxxy1}>
                    <img className={styles.luxxy1Image} src={`/images/Luxxy1.png`}
                         alt="Luxxy1"/>
                </div>
                <div className={styles.luxxy2}>
                  <img className={styles.luxxy2Image} src={`/images/Luxxy2.png`}
                       alt="Luxxy2"/>
                </div>
                <div className={styles.luxxy3}>
                    <img className={styles.luxxy3Image} src={`/images/Luxxy3.png`}
                         alt="Luxxy3"/>
                </div>
              </div>
            </PortfolioCard>
            <PortfolioCard backgroundColor="#07B7F9"
                           title="Статус строй"
                           tags={!hide391px ? `# стартап  # сервисы  # интеграции`: `# стартап  # сервисы\n# интеграции`}
                           description={!hide391px ? `Разработка MVP для федерального\nстартапа по строительству и ремонту.` : `Разработка MVP\nдля федерального\nстартапа\nпо строительству\nи ремонту.`}>
              <div className={styles.images}>
                <div className={styles.statusStroy1}>
                    <img className={styles.statusStroy1Image}
                         src={`/images/statusStroy1.png`} alt="statusStroy1"/>
                </div>
                <div className={styles.statusStroy2}>
                    <img className={styles.statusStroy2Image}
                         src={`/images/statusStroy2.png`} alt="statusStroy2"/>
                </div>
                <div className={styles.statusStroy3}>
                    <img className={styles.statusStroy3Image}
                         src={`/images/statusStroy3.png`} alt="statusStroy3"/>
                </div>
                <div className={styles.statusStroy4}>
                    <img className={styles.statusStroy4Image}
                         src={`/images/statusStroy4.png`} alt="statusStroy4"/>
                </div>
              </div>
            </PortfolioCard>
            <PortfolioCard backgroundColor="#DB418C"
                           title={!hide391px ? `Управление\nпарковками аэропортов` : `Управление\nпарковками\nаэропортов`}
                           tags={!hide391px ? `# стартап  # сервисы # интеграции` : `# стартап  # сервисы\n# интеграции`}
                           description={!hide391px ? `Разработка MVP для федерального стартапа\nпо строительству и ремонту.` : `Разработка MVP\nдля федерального\nстартапа\nпо строительству\nи ремонту.`}>
              <div className={styles.images}>
                <div className={styles.parking4}>
                    <img className={styles.parking4Image} src={`/images/parking4.png`}
                         alt="parking4"/>
                </div>
                <div className={styles.parking5}>
                    <img className={styles.parking5Image} src={`/images/parking5.png`}
                         alt="parking5"/>
                </div>
                <div className={styles.parking6}>
                    <img className={styles.parking6Image} src={`/images/parking6.png`}
                         alt="parking6"/>
                </div>
              </div>
            </PortfolioCard>
          </div>}
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

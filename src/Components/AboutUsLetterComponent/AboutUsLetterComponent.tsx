import React, {useEffect, useRef, useState} from "react";
import styles from "./AboutUsLetterComponent.module.css";
import Scroll from "react-scroll";
import TitleText from "../TitleText/TitleText";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import SliderSection from "../SliderSection/SliderSection";
import {useMediaQuery} from "react-responsive";
import AnimateButtonWithLogo from "../AnimateButtonWithLogo/AnimateButtonWithLogo";

gsap.registerPlugin(ScrollTrigger);

const Element = Scroll.Element;

const AboutUsLetterComponent = () => {
  const [hideOnMobile, setHideOnMobile] = useState(false);
  const [hide1024px, setHide1024px] = useState(false);
  const [hide769px, setHide769px] = useState(false);
  const [hide390px, setHide390px] = useState(false);

  const isMobile = useMediaQuery({query: "(min-width: 767px)"});
  const is1024px = useMediaQuery({query: "(min-width: 1024px)"});
  const is769px = useMediaQuery({query: "(min-width: 769px)"});
  const is390px = useMediaQuery({query: "(min-width: 390px)"});

  const wrapperRef: any = useRef();
  const sliderRef: any = useRef();
  const firstRef: any = useRef();
  const secondRef: any = useRef();
  const thirdRef: any = useRef();
  const sections = useRef([]);
  const verticalTweenContext: any = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      sections.current = wrapperRef?.current?.querySelectorAll("section");
      const verticalTween = gsap.to(sections?.current, {
        yPercent: -100 * (sections?.current?.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef?.current,
          pin: true,
          scrub: 0.01,
          invalidateOnRefresh: false,
          startAt: () => ({
            yPercent: 0,
          }),
          end: () => {
            const wrapperHeight = wrapperRef?.current?.offsetHeight;
            const windowHeight = sliderRef?.current?.offsetHeight;
            return `+=${1500}`;
          },
        } as any,
      });

      verticalTweenContext.current = verticalTween;
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (verticalTweenContext.current) {
        verticalTweenContext.current.kill();
        verticalTweenContext.current = null;
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      verticalTweenContext.current = null;
    };
  }, []);

  useEffect(() => {
    setHideOnMobile(isMobile);
    setHide1024px(is1024px);
    setHide769px(is769px)
    setHide390px(is390px)
  }, [isMobile, is1024px, is769px, is390px]);


  return (
      <div ref={wrapperRef} className={styles.aboutUsLetterComponent}>
        <Element name="aboutUsLetterComponent"></Element>
        {!hideOnMobile && <div className={styles.animateButtonBlock}>
          <AnimateButtonWithLogo/>
        </div>}
        <div className={styles.container}>
          <div className={styles.title}>
            <TitleText text="О нас в буквах"/>
          </div>
          <div className={styles.mainContent}>
            {hideOnMobile && <div className={styles.leftBlock}>
              <AnimateButtonWithLogo/>
            </div>}
            {hide769px && <div className={styles.rightBlock}>
              <div ref={sliderRef} id="sliderContainer"
                   className={styles.sliderContainer}>
                <SliderSection ref={firstRef} title="Профессионализм"
                               points={!hide1024px ?
                                   [
                                     {
                                       title: `Опыт в финтехе, авиации, телекоммуникациях,\nлогистике и гос. секторе`,
                                       text: "Экспертиза в различных сферах среднего\nи крупного бизнеса" +
                                           "наших специалистов поможет грамотно\n" +
                                           "реализовать ваш проект."
                                     },
                                     {
                                       title: "Минимальный опыт специалиста - 4 года",
                                       text: "Не допускаем" +
                                           " к" +
                                           "проекту стажеров и jun`ов."
                                     },
                                     {
                                       title: "Контроль и ревью",
                                       text: "Jira, тимлиды, регулярные проверки качества."
                                     }
                                   ] :
                                   [
                                     {
                                       title: `Опыт в финтехе, авиации,\nтелекоммуникация,\nлогистике и гос. секторе`,
                                       text: "Экспертиза в различных сферах среднего\nи крупного бизнеса" +
                                           "наших специалистов\nпоможет грамотно" +
                                           "реализовать ваш проект."
                                     },
                                     {
                                       title: "Минимальный опыт\nспециалиста - 4 года",
                                       text: "Не" +
                                           " допускаем" +
                                           " к " +
                                           "проекту стажеров и jun`ов."
                                     },
                                     {
                                       title: "Контроль и ревью",
                                       text: "Jira, тимлиды, регулярные проверки качества."
                                     }
                                   ]}/>
                <SliderSection ref={secondRef} title="Прозрачность"
                               points={!hide1024px ? [
                                 {
                                   title: "Полный контроль на всех этапах разработки",
                                   text: "Отчетность, ежедневные обновления репозитория."
                                 },
                                 {
                                   title: "Доступ к любому сотруднику",
                                   text: "CV всей команды, выделенный менеджер."
                                 },
                                 {
                                   title: "Точные цены",
                                   text: "Если не попали, работаем за свой счет."
                                 }
                               ] : [
                                 {
                                   title: "Полный контроль\nна всех этапах разработки",
                                   text: "Отчетность, ежедневные обновления\n репозитория."
                                 },
                                 {
                                   title: "Доступ к любому сотруднику",
                                   text: "CV всей команды, выделенный менеджер."
                                 },
                                 {
                                   title: "Точные цены",
                                   text: "Если не попали, работаем за свой счет."
                                 }
                               ]}/>
                <SliderSection ref={thirdRef} title="Гарантии" points={!hide1024px ? [
                  {
                    title: "Четкие сроки по договору",
                    text: "После истечения срока работаем бесплатно."
                  },
                  {
                    title: `Сроки выполнения задач\nне зависят от человеческого фактора`,
                    text: "Дублирующий и страхующий специалист\nна каждого участника вашей" +
                        "команды."
                  },
                  {
                    title: "100% соответствие ожиданиям",
                    text: "Документация на программный код и продукт, готовность к\n" +
                        "внешнему аудиту"
                  }
                ] : [
                  {
                    title: "Четкие сроки по договору",
                    text: "После истечения срока работаем бесплатно."
                  },
                  {
                    title: `Сроки выполнения задач\nне зависят\n от человеческого фактора`,
                    text: "Дублирующий и страхующий специалист\nна каждого участника вашей" +
                        "команды."
                  },
                  {
                    title: "100%\nсоответствие ожиданиям",
                    text: "Документация на программный код и продукт,\nготовность к" +
                        " внешнему аудиту"
                  }
                ]}/>
              </div>
            </div>}
            {!hide769px && <div className={styles.rightBlock}>
              <div ref={sliderRef} id="sliderContainer"
                   className={styles.sliderContainer}>
                <SliderSection ref={firstRef} title="Профессионализм"
                               points={!hide390px ?
                                   [
                                     {
                                       title: `Опыт в финтехе\n, авиации, телекоммуникациях,\nлогистике и гос. секторе`,
                                       text: "Экспертиза в различных сферах среднего\nи крупного бизнеса" +
                                           "наших специалистов поможет грамотно\n" +
                                           "реализовать ваш проект."
                                     },
                                     {
                                       title: "Минимальный опыт специалиста - 4 года",
                                       text: "Не допускаем" +
                                           " к" +
                                           "проекту стажеров и jun`ов."
                                     },
                                     {
                                       title: "Контроль и ревью",
                                       text: "Jira, тимлиды, регулярные проверки качества."
                                     }
                                   ] :
                                   [
                                     {
                                       title: `Опыт в финтехе, авиации,\nтелекоммуникация,логистике\nи гос. секторе`,
                                       text: "Экспертиза в различных сферах среднего\nи крупного бизнеса" +
                                           "наших специалистов\nпоможет грамотно" +
                                           "реализовать\nваш проект."
                                     },
                                     {
                                       title: "Минимальный опыт специалиста\n- 4 года",
                                       text: "Не" +
                                           " допускаем" +
                                           " к " +
                                           "проекту стажеров\nи jun`ов."
                                     },
                                     {
                                       title: "Контроль и ревью",
                                       text: "Jira, тимлиды, регулярные\nпроверки" +
                                           " качества."
                                     }
                                   ]}/>
                <SliderSection ref={secondRef} title="Прозрачность"
                               points={!hide390px ? [
                                 {
                                   title: "Полный контроль на всех этапах разработки",
                                   text: "Отчетность, ежедневные обновления репозитория."
                                 },
                                 {
                                   title: "Доступ к любому сотруднику",
                                   text: "CV всей команды, выделенный менеджер."
                                 },
                                 {
                                   title: "Точные цены",
                                   text: "Если не попали, работаем за свой счет."
                                 }
                               ] : [
                                 {
                                   title: "Полный контроль\nна всех этапах разработки",
                                   text: "Отчетность, ежедневные обновления\nрепозитория."
                                 },
                                 {
                                   title: "Доступ к любому сотруднику",
                                   text: "CV всей команды, выделенный менеджер."
                                 },
                                 {
                                   title: "Точные цены",
                                   text: "Если не попали, работаем\nза свой счет."
                                 }
                               ]}/>
                <SliderSection ref={thirdRef} title="Гарантии" points={!hide390px ? [
                  {
                    title: "Четкие сроки по договору",
                    text: "После истечения срока работаем бесплатно."
                  },
                  {
                    title: `Сроки выполнения задач\nне зависят от человеческого фактора`,
                    text: "Дублирующий и страхующий специалист\nна каждого участника вашей" +
                        "команды."
                  },
                  {
                    title: "100% соответствие ожиданиям",
                    text: "Документация на программный код и продукт, готовность к\n" +
                        "внешнему аудиту"
                  }
                ] : [
                  {
                    title: "Четкие сроки по договору",
                    text: "После истечения срока\nработаем бесплатно."
                  },
                  {
                    title: `Сроки выполнения задач\nне зависят от человеческого\nфактора`,
                    text: "Дублирующий и страхующий специалист\nна каждого участника вашей" +
                        "команды."
                  },
                  {
                    title: "100%\nсоответствие ожиданиям",
                    text: "Документация на программный\nкод и продукт, готовность\nк" +
                        " внешнему аудиту"
                  }
                ]}/>
              </div>
            </div>}
          </div>
        </div>
      </div>
  );
};

export default AboutUsLetterComponent;

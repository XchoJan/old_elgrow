import React, {useEffect, useRef, useState} from "react";
import styles from "./AboutUsLetterComponent.module.css";
import Scroll from 'react-scroll'
import AnimateButton from "../AnimateButton/AnimateButton";
import Logo from "../Logo/Logo";
import TitleText from "../TitleText/TitleText";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import SliderSection from "../SliderSection/SliderSection";
import {useMediaQuery} from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Element = Scroll.Element;

const AboutUsLetterComponent = () => {
  const [hideOnMobile, setHideOnMobile] = useState(false);
  const isMobile = useMediaQuery({query: "(min-width: 768px)"});

  const wrapperRef: any = useRef();
  const sliderRef: any = useRef();
  const firstRef: any = useRef();
  const secondRef: any = useRef();
  const thirdRef: any = useRef();
  const sections = useRef([]);
  const verticalTweenContext: any = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      sections.current = wrapperRef?.current?.querySelectorAll('section');
      const verticalTween = gsap.to(sections?.current, {
        yPercent: -100 * (sections?.current?.length - 1),
        ease: 'none',
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
  }, [isMobile]);


  return (
      <div ref={wrapperRef} className={styles.aboutUsLetterComponent}>
        <Element name="aboutUsLetterComponent"></Element>
        {!hideOnMobile && <div className={styles.animateButtonBlock}>
          <AnimateButton>
            <Logo/>
          </AnimateButton>
        </div>}
        <div className={styles.container}>
          <div className={styles.title}>
            <TitleText text='О нас в буквах'/>
          </div>
          <div className={styles.mainContent}>
            {hideOnMobile && <div className={styles.leftBlock}>
              <AnimateButton>
                <Logo/>
              </AnimateButton>
            </div>}
            <div className={styles.rightBlock}>
              <div ref={sliderRef} id="sliderContainer" className={styles.sliderContainer}>
                <SliderSection ref={firstRef} title='Профессионализм' points={[
                  {title: 'Опыт в финтехе, авиации, телекоммуникациях, логистике и' +
                        ' гос. секторе', text: 'Экспертиза в различных сферах среднего и крупного бизнеса\n' +
                        '                      наших специалистов поможет грамотно' +
                        ' реализовать ваш проект.'},
                  {title: 'Минимальный опыт специалиста 4 года', text: 'Не допускаем к' +
                        ' проекту стажеров и jun`ов.'},
                  {title: 'Контроль и ревью', text: 'Jira, тимлиды, регулярные проверки качества.'}
                ]}/>
                <SliderSection ref={secondRef} title='Прозрачность' points={[
                  {title: 'Полный контроль на всех этапах разработки', text: 'Отчетность, ежедневные обновления репозитория.'},
                  {title: 'Минимальный опыт специалиста 4 года', text: 'CV всей команды, выделенный менеджер.'},
                  {title: 'Точные цены', text: 'Если не попали, работаем за свой счет.'}
                ]}/>
                <SliderSection ref={thirdRef} title='Гарантии' points={[
                  {title: 'Четкие сроки по договору', text: 'После истечения срока работаем бесплатно.'},
                  {title: 'Сроки выполнения задач не зависят от человеческого фактора', text: 'Дублирующий и страхующий специалист на каждого участника вашей\n' +
                        '                  команды.'},
                  {title: '100% соответствие ожиданиям', text: 'Документация на программный код и продукт, готовность к\n' +
                        '                  внешнему аудиту'}
                ]}/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutUsLetterComponent;

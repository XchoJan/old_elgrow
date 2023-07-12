import React, { useState, useEffect, useRef } from 'react';
import HeaderMobile from '../Components/HeaderMobile';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mobile = () => {
  const [max, setMax]: any = useState(0);
  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  const wrapperRef: any = useRef();
  const sectionsRef: any = useRef([]);

  // useEffect(() => {
  //   const wrapper: any = wrapperRef.current;
  //   const sections: any = Array.from(sectionsRef.current);

  //   gsap.set(sections, { yPercent: 100 * (sections.length - 1) });

  //   const verticalTween = gsap.to(sections, {
  //     yPercent: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: wrapper,
  //       pin: true,
  //       scrub: 0.01,

  //       start: 'top top',
  //       end: () => `+=${wrapper?.offsetHeight + 100}`,
  //     },
  //   });

  //   return () => {
  //     verticalTween.kill();
  //   };
  // }, []);

  const images = [
    'nespresso.png',
    'Luxxy.png',
    'OpenBank.png',
    'vtb.svg',
    'utg.svg',
    'megafon.svg',
    'KFC.svg',
  ];
  return (
    <div className="mobileMain">
      <HeaderMobile />
      {max > 560 && (
        <img className="eagleOutstaff" src="/images/sova.png" alt="" />
      )}
      <div className="mainScreen">
        <div className="button-rainbow">
          <div className="button-rainbow-circle">
            <span>Стать клиентом</span>
          </div>
        </div>
        <div className="mainScreenContent">
          <div className="mainScreenTitle">
            <div id='mainMobileTitle' className="titleHeading">
              Разработка
              <br /> мобильных <span>приложений </span>
              <div className='greenCheck'>  </div>
            </div>
          </div>
          <div className="ourClients">
            <h1> Наши клиенты:</h1>
            <div className="containerImages">
              {images.map((image: any) => (
                <img src={`/images/${image}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="aboutNumbers">
        <div className="parking1">
          <img src={`/images/parking1.png`} />
        </div>
        <div className="parking2">
          <img src={`/images/parking2.png`} />
        </div>
        <div className="parking3">
          <img src={`/images/parking3.png`} />
        </div>
        <div id='aboutNumbersTitleHeading' className="titleHeading">О нас в цифрах</div>
        <div className="aboutNumbersContent">
          <div className="containerNum">
            <div className="num">15</div>
            <div className="content">Лет опыта</div>
          </div>
          <div className="containerNum">
            <div className="num">36</div>
            <div className="content">Человек штата</div>
          </div>
        </div>
        <div className="aboutNumbersContent">
          <div className="containerNum">
            <div className="num">100+</div>
            <div className="content">Проектов</div>
          </div>
          <div className="containerNum">
            <div className="num">1 млн+</div>
            <div className="content">Часов разработки</div>
          </div>
        </div>
        <div className="stack">
          <div className="stackItem">
            <span className="dot"> •</span>
            <span className="text"> React Native</span>
          </div>
          <div className="stackItem">
            <span className="dot"> •</span>
            <span className="text"> Node JS</span>
          </div>
          <div className="stackItem">
            <span className="dot"> •</span>
            <span className="text"> Adobe AI</span>
          </div>
          <div className="stackItem">
            <span className="dot"> •</span> <span className="text"> PHP</span>
          </div>
          <div className="stackItem">
            <span className="dot"> •</span> <span className="text"> Swift</span>
          </div>
          <div className="stackItem">
            <span className="dot"> •</span> <span className="text"> Jira</span>
          </div>
          <div className="stackItem">
            <span className="dot"> •</span> <span className="text"> C#</span>
          </div>
          <div className="stackItem">
            <span className="dot"> •</span> <span className="text"> .net</span>
          </div>
          <div className="stackItem">
            <span className="dot"> •</span> <span className="text"> React</span>
          </div>
          <div className="stackItem">
            <span className="dot"> •</span>
            <span className="text"> Flutter</span>
          </div>
          <div className="stackItem">
            <span className="dot"> •</span>
            <span className="text"> Kotlin</span>
          </div>
          <div className="stackItem">
            <span className="dot"> •</span>
            <span className="text"> Битрикс</span>
          </div>
          <div className="stackItem">
            <span className="dot"> •</span> <span className="text"> Figma</span>
          </div>
        </div>
      </div>
      <div className="aboutLetters" ref={wrapperRef}>
        <div className="titleHeading">О нас в буквах</div>
        <div className="aboutLettersContent">
          <div className="button-rainbowSecond">
            <div className="button-rainbowSecond-circle">
              <span className="logoText">
                e<span className="letterL">l</span>grow.
              </span>
            </div>
          </div>
          <div id="sliderContainer">
            <section
              ref={(el) => (sectionsRef.current[0] = el)}
              className="mainText"
            >
              Профессионализм
            </section>
            <section
              ref={(el) => (sectionsRef.current[1] = el)}
              className="secondatyText"
            >
              Опыт в финтехе, авиации, телекоммуникациях, логистике и гос.
              секторе
              <br />
              <div>
                Экспертиза в различных сферах среднего и крупного бизнеса наших
                специалистов поможет грамотно реализовать ваш проект.
              </div>
            </section>
            <section
              ref={(el) => (sectionsRef.current[2] = el)}
              className="secondatyText"
            >
              Минимальный опыт специалиста — 4 года <br />
              <div> Не допускаем к проекту стажеров и jun`ов.</div>
            </section>
            <section
              ref={(el) => (sectionsRef.current[3] = el)}
              className="secondatyText"
            >
              Контроль и ревью <br />
              <div> Jira, тимлиды, регулярные проверки качества.</div>
            </section>
          </div>
        </div>
      </div>
      <div className="mobilePortfolio">
        <div>
          <div className="titleHeading">Портфолио</div>
        </div>
        <div
          style={{ background: '#9B4EFE', marginTop: '80px' }}
          className="portfolioCard"
        >
          <div className="utg1">
            <img src={`/images/utg1.png`} />
          </div>
          <div className="utg2">
            <img src={`/images/utg2.png`} />
          </div>
          <div className="utg3">
            <img src={`/images/utg3.png`} />
          </div>
          <div className="utg4">
            <img src={`/images/utg4.png`} />
          </div>
          <div className="cardName"> Наземное обслуживание </div>
          <div className="tags">
            <span># гражданская авиация </span> <span># аэропорты </span>
            <span># наземное обслуживание </span> <span># Внуково </span>
            <span># Пулково </span>
          </div>
          <div className="content">
            Разработали приложение для наземного обслуживания воздушных судов
            крупнейшему росссийскому игроку
            <br /> UTG Group.
          </div>
        </div>
        <div style={{ background: '#05846F' }} className="portfolioCard">
          <div className="nespresso1">
            <img src={`/images/nespresso1.png`} />
          </div>
          <div className="nespresso2">
            <img src={`/images/nespresso2.png`} />
          </div>
          <div className="nespresso3">
            <img src={`/images/nespresso3.png`} />
          </div>
          <div className="nespresso4">
            <img src={`/images/nespresso4.png`} />
          </div>
          <div className="cardName"> Nespresso </div>
          <div className="tags">
            <span># кофе </span> <span># капсулы </span>
            <span># США </span> <span># международная разработка </span>
          </div>
          <div className="content">
            Мобильное приложение для федерального дистрибьютора Nespresso в
            Америке.
          </div>
        </div>
        <div style={{ background: '#88CB6B' }} className="portfolioCard">
          <div className="luxxy1">
            <img src={`/images/luxxy1.png`} />
          </div>
          <div className="luxxy2">
            <img src={`/images/luxxy2.png`} />
          </div>
          <div className="luxxy3">
            <img src={`/images/luxxy3.png`} />
          </div>
          <div className="cardName"> Luxxy </div>
          <div className="tags" style={{ maxWidth: '270px' }}>
            <span># e-commerce </span> <span># люкс </span>
            <span># бренды </span> <span># совместная работа </span>
          </div>
          <div className="content">
            Разработка ряда сервисов федерального e-commerce. Кооперация с
            несколькими разработчиками в РФ.
          </div>
        </div>
        <div style={{ background: '#07B7F9' }} className="portfolioCard">
          <div className="statusStroy1">
            <img src={`/images/statusStroy1.png`} />
          </div>
          <div className="statusStroy2">
            <img src={`/images/statusStroy2.png`} />
          </div>
          <div className="statusStroy3">
            <img src={`/images/statusStroy3.png`} />
          </div>
          <div className="statusStroy4">
            <img src={`/images/statusStroy4.png`} />
          </div>
          <div className="cardName"> Статус строй </div>
          <div className="tags">
            <span># стартап </span> <span># сервисы </span>
            <span># интеграции </span>
          </div>
          <div className="content">
            Разработка MVP для федерального стартапа по строительству и ремонту.
          </div>
        </div>
        <div style={{ background: '#DB418C' }} className="portfolioCard">
          <div className="parking4">
            <img src={`/images/parking4.png`} />
          </div>
          <div className="parking5">
            <img src={`/images/parking5.png`} />
          </div>
          <div className="parking6">
            <img src={`/images/parking6.png`} />
          </div>
          <div className="cardName"> Управление парковками аэропортов </div>
          <div className="tags">
            <span># стартап </span> <span># сервисы </span>
            <span># интеграции </span>
          </div>
          <div className="content">
            Разработка MVP для федерального стартапа по строительству и ремонту.
          </div>
        </div>
        <div className="allProjects">
          <div className="allProjectsContent">
            <span> Все проекты </span> <img src={`/images/mobileArrow.svg`} />
          </div>
        </div>
      </div>
      <div className="workingProcess">
        <div>
          <div className="titleHeading">Как мы работаем</div>
        </div>
        <div className="workingProcessContent">
          <div className="workingStep">
            <div className="num">01.</div>
            <div className="stepContent">
              <div className="title">Получаем ваше обращение</div>
              <div className="subtitles">
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">
                    Готовим порядок цифр по тем данным,
                    <br />
                    что получили, и отправляем вместе с презентацией.
                  </span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">
                    Связываемся для уточнения деталей, если это необходимо.
                  </span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">
                    Готовим финальную смету из следующих пунктов:
                    <br />
                    Описание предполагаемого стека и СV команды
                  </span>
                </div>
                <span className="notSpam">
                  НЕ НАЗВАНИВАЕМ И НЕ ТРАТИМ ВАШЕ ВРЕМЯ НА САМОПРЕЗЕНТАЦИИ
                </span>
              </div>
            </div>
          </div>
          <div className="workingStep">
            <div className="num">02.</div>
            <div className="stepContent">
              <div className="title">Заключаем договор</div>
              <div className="subtitles">
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">НДС или без НДС</span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">
                    Индивидуальный график платежей или рассрочка
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="workingStep">
            <div className="num">03.</div>
            <div className="stepContent">
              <div className="title">Проектируем и отрисовываем</div>
              <div className="subtitles">
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">Анализируем рынок и конкурентов</span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">
                    Пишем юзер-кейсы, бэклог, ТЗ и методику испытаний
                  </span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">Проектируем</span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">
                    Отрисовываем интерактивные прототипы
                  </span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">
                    Рисуем несколько вариантов дизайна
                  </span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">Делим на этапы и вычленяем MVP</span>
                </div>
              </div>
            </div>
          </div>
          <div className="workingStep">
            <div className="num">04.</div>
            <div className="stepContent">
              <div className="title">Разрабатываем</div>
              <div className="subtitles">
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">
                    Разворачиваем сервера и контуры разработки
                  </span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">Разворачиваем БД и микросервисы</span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">
                    Ведем разработку согласно согласованной документации
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="workingStep">
            <div className="num">05.</div>
            <div className="stepContent">
              <div className="title">Тестируем</div>
              <div className="subtitles">
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">По документации</span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">Нагрузочно</span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">Автотестированием</span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">
                    Вне документации (вне сценариев поведения пользователей)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="workingStep">
            <div className="num">06.</div>
            <div className="stepContent">
              <div className="title">Запускаем и поддерживаем</div>
              <div className="subtitles">
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">Appstore и GooglePlay</span>
                </div>
                <div className="subtitle">
                  <span className="dot"> •</span>
                  <span className="text">Следим и дорабатываем</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricesBlock">
        <div>
          <div className="titleHeading">Цены</div>
        </div>
        <div className="pricesContent">
          <div className="priceItem">
            <div className="budget"> Минимально</div>
            <div className="price">
              <span className="minimum">от </span>300 000
              <span className="minimum">₽</span>
            </div>
            <div className="time">
              <span className="minimum">от</span> 2
              <span className="minimum"> недель</span>
            </div>
          </div>
          <div className="stick"> </div>
          <div className="priceItem">
            <div className="budget"> В среднем</div>
            <div className="price">
              <span className="minimum">от </span>2 000 000
              <span className="minimum">₽</span>
            </div>
            <div className="time">
              3<span className="minimum"> месяца</span>
            </div>
          </div>
        </div>
      </div>
      <div className='mobileFooter'>  <footer className="footer">
      <div className="container">
     
        <div className="footer_inner">
          <div className="footer_title">
            <div className="footer_title_left">
              e<span className="letterL">l</span>grow
            </div>
         
          </div>
          <div className="footer_center">
            <div
         
              className="footer_center-title"
            >
              <h1>Стать клиентом</h1>
            </div>
            <div className="footer_center-wrap">  
              <div className="footer_center-wrap_left">
                <a href="https://elgrow.ru/">Основной сайт</a>
            
             
              </div>
              <div className="footer_center-wrap_right">
                <a  className="presentation" href="#">
                  презентация
                </a>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            {max > 560 && (
              <div className="footer_bottom_item">
                <h2>
                  <img src="/images/Copyright.svg" alt="" />
                  Все права защищены 2023
                </h2>
              </div>
            )}

            <div className="footer_bottom_item">
              <a href="https://t.me/Elgrow_dev">
                <img src="/images/telegram-small1440.svg" alt="" />
                Elgrow_dev
              </a>
            </div>
            <div className="footer_bottom_item">
              <a href="mailto:info@elgrow.ru">
                <img src="/images/fluent_mail-20-filled.svg" alt="" />
                info@elgrow.ru
              </a>
            </div>
          </div>
          {max <= 560 && (
            <div
              style={{ paddingTop: '19px', paddingBottom: '29px' }}
              className="footer_bottom_item"
            >
              <h2>
                <img src="/images/Copyright.svg" alt="" />
                Все права защищены 2023
              </h2>
            </div>
          )}
        </div>
      </div>
    </footer> </div>
    </div>
  );
};

export default mobile;

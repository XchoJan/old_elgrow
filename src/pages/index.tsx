import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Virtual } from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';

import Header from '../Components/Header';

import Footer from '../Components/Footer';
import CallBackMenu from '../Components/CallBackMenu';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRouter } from 'next/router';

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  let viewportWidth: any = 0;
  let viewportHeight: any = 0;

  if (typeof window !== 'undefined') {
    viewportWidth = window?.visualViewport?.width;
    viewportHeight = window?.visualViewport?.height;
  }
  const router = useRouter();
  const [max, setMax]: any = useState(0);
  const [maxHeight, setMaxHeight]: any = useState(0);
  const [isVisibleCallbackMenu, setVisibleCallbackMenu] = useState(false);
  const ref = useRef(null);
  const [isVisibleCase, setVisibleCase] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(
    scrollY,
    [0, 400],
    [0, viewportWidth > 560 ? 410 : viewportHeight / 3],
  );

  const maxWidth = useTransform(scrollY, [0, 250], ['85vw', '100vw']);

  useEffect(() => {
    setMax(window?.visualViewport?.width);
    setMaxHeight(window?.visualViewport?.height);
  }, []);
  const imageMove = (e: any) => {
    setVisibleCase(true);
    const rect = e.target.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const x = e.clientX - rect.left;

    let image: any = document.getElementsByClassName('main_img_green');
    if (image[0]) {
      image[0].style.left = `${x - 50}px`;
      image[0].style.top = `${y - 50}px`;
    }
  };

  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  const engineering = [
    {
      num: '01',
      text: 'Изучение продукта',
    },
    {
      num: '02',
      text: 'Архитектура',
    },
    {
      num: '03',
      text: 'Подбор команды',
    },
  ];

  const transparency = [
    {
      num: '01',
      text: 'Знакомство с командой',
    },
    {
      num: '02',
      text: 'Планирование рисков',
    },
    {
      num: '03',
      text: 'Результат хоть каждый день',
    },
  ];

  const saving = [
    {
      num: '01',
      text: 'Оценка исполнителем',
    },
    {
      num: '02',
      text: 'Понятное коммерческое предложение',
    },
    {
      num: '03',
      text: 'Продуктовый подход',
    },
  ];

  const quality = [
    {
      num: '01',
      text: 'Техлид всегда на проекте',
    },
    {
      num: '02',
      text: 'Код-ревью',
    },
    {
      num: '03',
      text: 'А если разраб сбежал?',
    },
  ];

  const navigation = [
    'Продукты',
    'Сайты',
    'Мобильные приложения',
    'Поддержка',
    'Аутстаф',
  ];

  const navigationSlider = [
    {
      maintext:
        'Усилим команду или сделаем все под ключ: задачи, микросервисы, MVP, продукт целиком',
      price: {
        cash: '280 000 ₽',
        time: 'за спринт',
      },
      images: ['vtb.svg', 'utg.svg', 'megafon.svg'],
      tags: [
        'Архитектура,',
        'Разработка,',
        'Тестирование,',
        'MVP,',
        'Продуктовая команда,',
        'Бэклог',
      ],
    },
    {
      maintext:
        'Любого уровня и под любые задачи: промо, e-commerce, спецпроекты, порталы и сервисы',
      price: {
        cash: '250 000 ₽',
        time: 'плюс лицензия',
      },
      images: ['UTG-PA-logo_gold 1.svg', 'Sverdlovsk.svg', 'Group 25.svg'],
      tags: [
        'Быстрая разработка,',
        'Битрикс,',
        'Интернет-магазин,',
        'Корпоративный сайт,',
        'Лэндинг',
      ],
    },
    {
      maintext:
        'Внутренние и коммерческие приложения для бизнеса и госсектора. Оперативная разработка на React Native или Flutter',
      price: {
        cash: '500 000 ₽',
        time: 'под ключ',
      },
      images: ['OpenBank.png', 'Luxxy.png', 'nespresso.png'],
      tags: [
        'React native,',
        'Flutter,',
        'IOS,',
        'Android,',
        'Мобильные приложения',
      ],
    },
    {
      maintext:
        'На любом уровне завершенности. Разберемся, починим, не допустим падений.',
      price: {
        cash: '50 000 ₽',
        time: 'за задачу',
      },
      images: ['Telekom.png', 'KFC.svg', 'Exist.png'],
      tags: ['Постоянный продукт,', 'Сопровождение,', 'Поддержка'],
    },
    {
      maintext:
        'Подберем специалистов под любые специфические запросы. Вовлекаемся от одного месяца.',
      price: {
        cash: '1 800 ₽',
        time: 'в час',
      },
      images: ['smile.svg', 'arrow.svg'],
      tags: ['Аутстаффинг,', 'Усиление команды,', 'Middle+,', 'Senior'],
    },
  ];

  const ScrolltoSwiper = (element: string, top: number) => {
    window.scrollBy({ top: top, left: 0, behavior: 'smooth' });
  };

  const wrapperRef: any = useRef();
  const firstRef: any = useRef();
  const secondRef: any = useRef();
  const thirdRef: any = useRef();
  const fourthRef: any = useRef();
  const fiveRef: any = useRef();

  const horizontalTweenContext: any = useRef(null);
  useEffect(() => {
    const ctx = gsap.context((self: any) => {
      const sections = self.selector('section');
      const horizontalTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: 0.01,

          end: () => {
            const wrapperWidth = wrapperRef.current.offsetWidth;
            const windowWidth = window.innerWidth;
            return `+=${wrapperWidth - windowWidth}`;
          },
        },
      });
    }, wrapperRef);
    horizontalTweenContext.current = ctx;
    return () => {
      horizontalTweenContext.current.revert();
      console.log(horizontalTweenContext.current); // Should output null if the context is successfully removed
    };
  }, []);

  const wrapperRefImg: any = useRef();
  const firstRefImg: any = useRef();
  const secondRefImg: any = useRef();
  const thirdRefImg: any = useRef();

  useEffect(() => {
    const ctx = gsap.context((self: any) => {
      const sections = self.selector('section');

      const horizontalTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapperRefImg.current,
          pin: true,

          scrub: 0.5,
          end: () =>
            //@ts-ignore
            '+=' +
            //@ts-ignore
            document?.querySelector('.swiper-wrapper-person')?.offsetWidth -
            innerWidth,
        },
      });
    }, wrapperRefImg);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div
        style={{
          zIndex: '100',
          background: 'white',
          top: '0',
          width: '100vw',
          position: 'fixed',
        }}
      >
        <Header />
      </div>
      <div className="main_title">
        <img className="eagle" src="/images/eagle.png" alt="" />

        <div id="trigger1" className="main_title_content">
          <motion.h1 style={{ y: y1 }}>
            Разработка и интеграция <br />
            <span>IT-РеШеНИЙ. </span> <br />
            Автоматизация бизнеса.
            <br />
            <span>аУТСТАФ.</span>
          </motion.h1>{' '}
        </div>
      </div>
      <div
        onMouseOut={() =>
          setTimeout(() => {
            setVisibleCase(false);
          }, 50)
        }
        onMouseMove={(e) =>
          setTimeout(() => {
            imageMove(e);
          }, 50)
        }
        className="main_img"
      >
        <motion.div
          onClick={() => router.push('/nouBrand')}
          style={viewportWidth > 768 ? { maxWidth } : { maxWidth: '100vw' }}
          ref={ref}
          className="main_img_box"
        >
          <AnimatePresence>
            {isVisibleCase && (
              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{ duration: 0.3 }}
                exit={{
                  scale: 0,
                }}
                className="main_img_green"
              >
                <motion.p
                  initial={{ fontSize: 0 }}
                  animate={{ fontSize: '14px' }}
                  transition={{ duration: 0.3 }}
                  exit={{ fontSize: 0 }}
                >
                  Новый <br /> кейс
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <section className="tabs">
        <div className="tabs_container">
          <div className="tabsNav"></div>
          <CallBackMenu
            y="0"
            x="0"
            isOpen={isVisibleCallbackMenu}
            close={setVisibleCallbackMenu}
          />
          <div className="tabs__content">
            <Swiper
              style={max > 560 ? { height: '800px' } : { height: '590px' }}
              modules={[Pagination, Virtual]}
              spaceBetween={50}
              slidesPerView={1}
              speed={1000}
              pagination={{
                el: '.tabsNav',
                type: 'bullets',
                clickable: true,
                bulletClass: 'tabsBtn',
                bulletActiveClass: 'tabsBtnActive',
                renderBullet: function (index, className) {
                  return (
                    '<span class="' +
                    className +
                    '">' +
                    navigation[index] +
                    '</span>'
                  );
                },
              }}
            >
              {navigationSlider.map((slide: any) => {
                return (
                  <SwiperSlide>
                    <div className="tabs__pane tabs__pane_show ">
                      <div className="info_box">
                        <div className="info_box_top">
                          <div className="info_box_top_left">
                            <span>{slide.maintext}</span>
                          </div>
                          <div
                            style={
                              slide.price.cash === '1 800 ₽'
                                ? { gap: '17px' }
                                : {}
                            }
                            className="info_box_bottom_left"
                          >
                            {slide.price.cash === '1 800 ₽' && (
                              <span> NDA</span>
                            )}
                            {slide.images.map((image: string) => (
                              <div>
                                <img
                                  style={
                                    image === 'smile.svg' ||
                                    image === 'OpenBank.png'
                                      ? { paddingTop: '10px' }
                                      : {}
                                  }
                                  src={`/images/${image}`}
                                  alt=""
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="info_box_bottom">
                          <div className="info_box_top_right">
                            <h3>
                              от <span>{slide.price.cash}</span> <br />
                              <p> {slide.price.time} </p>
                            </h3>
                          </div>
                          <div className="info_box_bottom_right">
                            <a onClick={() => setVisibleCallbackMenu(true)}>
                              <span> Подробнее </span>
                              <svg
                                width="41"
                                height="8"
                                viewBox="0 0 41 8"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="info_box-tags">
                          <h1 className="info_box_title">Теги:</h1>
                          <h3 className="tags">
                            {slide.tags.map((tag: string) => (
                              <div>
                                <span className="tags_lattice">#</span>
                                &nbsp;
                                <span>{tag}</span>
                                &nbsp;
                              </div>
                            ))}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div
            ref={wrapperRef}
            data-scroll
            data-scroll-id="horizontal-slider"
            id="js-wrapper"
            className="wrapper"
          >
            <section ref={firstRef} className="section horizontal_section">
              <div className="sectionTitle" id="title1">
                <div className="products_principles">
                  <div className="containerSlider">
                    <div className="products_principles-inner">
                      <div className="products_principles-title">
                        <h1>Принципы</h1>
                      </div>
                      <div className="products_principles-center">
                        <p>
                          <span className="products_principles-center-logo">
                            e<span className="letterL">l</span>grow
                          </span>
                          &nbsp; – это про результат.
                        </p>
                        <h4>
                          Рассказываем, как у нас тут <br />
                          все устроено.
                        </h4>
                      </div>
                      <div className="products_principles_border"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section ref={secondRef} className="section horizontal_section">
              <div className="sectionTitle" id="title2">
                <div className="websites-content">
                  <div className="websites-content_inner">
                    <div className="websites-content_inner-title">
                      <h1>Проектирование</h1>
                    </div>
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={50}
                      slidesPerView={1}
                      speed={0}
                      pagination={{
                        el: '.websites-content_inner-body_left',
                        type: 'bullets',
                        clickable: true,
                        bulletClass: 'websites-tab websites-tab1',
                        bulletActiveClass: 'websites-tab_active',
                        renderBullet: function (index, className) {
                          return (
                            '<h2 class="' +
                            className +
                            '">' +
                            '<span>' +
                            engineering[index].num +
                            '</span>' +
                            engineering[index].text +
                            '</h2>'
                          );
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="containerSlider">
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left"></div>
                            <div
                              id="Project1"
                              className="websites-content_inner-body_right"
                            >
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content1 active">
                                      Перед стартом предоставим аналитика и
                                      проджект-менеджера. Проанализируем
                                      бизнес-цели и переведем их на технический
                                      язык.
                                    </p>
                                    <a href="#">Скачать бриф</a>
                                  </div>
                                  <div className="border_green"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="containerSlider">
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left"></div>
                            <div
                              id="Project2"
                              className="websites-content_inner-body_right"
                            >
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content1 active ">
                                      Подключим архитектора, определим
                                      микросервисы и масштабируемость. Заложим
                                      риски.
                                    </p>
                                  </div>

                                  <div className="border_green"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="containerSlider">
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left"></div>
                            <div
                              id="Project3"
                              className="websites-content_inner-body_right"
                            >
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content1 active ">
                                      Распределим задачи и определим уровень и
                                      количество специалистов. Распределим
                                      задачи в Jira и будем готовы к разработке.
                                    </p>
                                  </div>

                                  <div className="border_green"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>

            <section ref={thirdRef} className="section horizontal_section">
              <div className="sectionTitle" id="title3">
                <div className="websites-content">
                  <div className="websites-content_inner">
                    <div className="websites-content_inner-title">
                      <h1>Прозрачность</h1>
                    </div>
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={50}
                      slidesPerView={1}
                      speed={0}
                      pagination={{
                        el: '.websites-content_inner-body_left',
                        type: 'bullets',
                        clickable: true,
                        bulletClass: 'websites-tab websites-tab1',
                        bulletActiveClass: 'websites-tab_active',
                        renderBullet: function (index, className) {
                          return (
                            '<h2 class="' +
                            className +
                            '">' +
                            '<span>' +
                            transparency[index].num +
                            '</span>' +
                            transparency[index].text +
                            '</h2>'
                          );
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="containerSlider">
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left"></div>
                            <div
                              id="Project1"
                              className="websites-content_inner-body_right"
                            >
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content2 active">
                                      Покажем всех, кто будет задействован на
                                      проекте. Без ноунеймов и котов в мешках.
                                    </p>
                                  </div>
                                  <div className="border_green"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="containerSlider">
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left"></div>
                            <div
                              id="Project2"
                              className="websites-content_inner-body_right"
                            >
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content2 active ">
                                      В оценку закладываем сценарии, исходя из
                                      нашего опыта. При новых вводных и задачах
                                      откорректируем или перестроим работу.
                                    </p>
                                  </div>
                                  <div className="border_green"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="containerSlider">
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left"></div>
                            <div
                              id="Project3"
                              className="websites-content_inner-body_right"
                            >
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content2  active">
                                      Даем доступ к рабочим Jira, Figma,
                                      Telegram. Презентации в конце спринта,
                                      пуши - ежедневно.
                                    </p>
                                  </div>
                                  <div className="border_green"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>

            <section ref={fourthRef} className="section horizontal_section">
              <div className="sectionTitle" id="title3">
                <div className="websites-content">
                  <div className="websites-content_inner">
                    <div className="websites-content_inner-title">
                      <h1>Экономия</h1>
                    </div>
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={50}
                      slidesPerView={1}
                      speed={0}
                      pagination={{
                        el: '.websites-content_inner-body_left',
                        type: 'bullets',
                        clickable: true,
                        bulletClass: 'websites-tab websites-tab1',
                        bulletActiveClass: 'websites-tab_active',
                        renderBullet: function (index, className) {
                          return (
                            '<h2 class="' +
                            className +
                            '">' +
                            '<span>' +
                            saving[index].num +
                            '</span>' +
                            saving[index].text +
                            '</h2>'
                          );
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="containerSlider">
                          <div className="containerSlider">
                            <div className="websites-content_inner-body">
                              <div className="websites-content_inner-body_left"></div>
                              <div
                                id="Project1"
                                className="websites-content_inner-body_right"
                              >
                                <div className="website-tab_content">
                                  <div className="website-tab_content_item">
                                    <div className="website_tab_content">
                                      <p className="website-mini_tab_content website-mini_tab_content3 active">
                                        Сроки определяют специалисты, которые и
                                        будут делать продукт. Никаких готовых
                                        смет и скриптов для менеджеров по оценке
                                        нет.
                                      </p>
                                    </div>
                                    <div className="border_green"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="containerSlider">
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left"></div>
                            <div
                              id="Project2"
                              className="websites-content_inner-body_right"
                            >
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content3 active ">
                                      Составляем гант с делением на этапы, часы,
                                      дни и результаты. Заказчик контролирует
                                      траты по каждому спринту. пример КП:
                                      (ссылка на ПДФ)
                                    </p>
                                  </div>
                                  <div className="border_green"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="containerSlider">
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left"></div>
                            <div
                              id="Project3"
                              className="websites-content_inner-body_right"
                            >
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content3 active ">
                                      Быстро собираем MVP, внедряем, получаем
                                      обратную связь и только потом
                                      дорабатываем. Годовых разработок “в стол”
                                      не практикуем
                                    </p>
                                  </div>
                                  <div className="border_green"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>

            <section ref={fiveRef} className="section horizontal_section">
              <div className="sectionTitle" id="title3">
                <div className="websites-content">
                  <div className="websites-content_inner">
                    <div className="websites-content_inner-title">
                      <h1>Качество</h1>
                    </div>
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={50}
                      slidesPerView={1}
                      speed={0}
                      pagination={{
                        el: '.websites-content_inner-body_left',
                        type: 'bullets',
                        clickable: true,
                        bulletClass: 'websites-tab websites-tab1',
                        bulletActiveClass: 'websites-tab_active',
                        renderBullet: function (index, className) {
                          return (
                            '<h2 class="' +
                            className +
                            '">' +
                            '<span>' +
                            quality[index].num +
                            '</span>' +
                            quality[index].text +
                            '</h2>'
                          );
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="containerSlider">
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left"></div>
                            <div
                              id="Project1"
                              className="websites-content_inner-body_right"
                            >
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content4 active">
                                      Ведущий разработчик руководит командой и
                                      следит за ходом работ. Разработчики не
                                      предоставлены сами себе.
                                    </p>
                                  </div>
                                  <div className="border_green"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="containerSlider">
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left">
                              <h2 className="websites-tab websites-tab4 ">
                                <span>01</span> Техлид всегда на проекте
                              </h2>
                              <h2 className="websites-tab websites-tab4 websites-tab_active">
                                <span>02</span> Код-ревью
                              </h2>
                              <h2 className="websites-tab websites-tab4 ">
                                <span>03</span> А если разраб сбежал ?
                              </h2>
                            </div>
                            <div
                              id="Project2"
                              className="websites-content_inner-body_right"
                            >
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content4 active ">
                                      Каждые три дня проводим ревью дабы продукт
                                      следовал заложенным принципам и качеству.
                                    </p>
                                  </div>
                                  <div className="border_green"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="containerSlider">
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left">
                              <h2 className="websites-tab websites-tab4 ">
                                <span>01</span> Техлид всегда на проекте
                              </h2>
                              <h2 className="websites-tab websites-tab4">
                                <span>02</span> Код-ревью
                              </h2>
                              <h2 className="websites-tab websites-tab4 websites-tab_active">
                                <span>03</span> А если разраб сбежал ?
                              </h2>
                            </div>
                            <div
                              id="Project3"
                              className="websites-content_inner-body_right"
                            >
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content4 active ">
                                      Устроился работать в Google или переехал
                                      на Луну. Оперативно подключим другого и
                                      презентуем его заказчику.
                                    </p>
                                  </div>
                                  <div className="border_green"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div ref={wrapperRefImg} className="swiper-wrapper-person">
            <section ref={firstRefImg} className="swiper-slide-img">
              <div id="img1" className="team_slider">
                <div className="team_slider-inner">
                  <div className="team_slider-inner_bootom">
                    <div className="team_slider-inner_bootom_pagination">
                      <div className="team_slider-inner_bootom_pagination_item_active"></div>
                      <div
                        onClick={() => ScrolltoSwiper('#img2', max / 2)}
                        className="team_slider-inner_bootom_pagination_item"
                      ></div>
                      <div
                        onClick={() => ScrolltoSwiper('#img3', max)}
                        className="team_slider-inner_bootom_pagination_item"
                      ></div>
                    </div>
                    <div className="team_slider-inner_bootom_left">
                      <div className="team_slider-inner_bottom_left_slogan">
                        <h1>
                          <span className="team_slider-inner_bottom_left_slogan_text">
                            e<span className="letterL">l</span>grow —
                          </span>{' '}
                          <br />
                          это про людей, <br />
                          которые постоянно <br /> с вами.
                        </h1>
                      </div>
                    </div>
                    <div className="team_slider-inner_bootom_right">
                      <div className="team_slider-inner_bootom_right_nameAndPost">
                        <h1>Роман Адигезалов</h1>
                        <h2>Фронтенд-лид</h2>
                      </div>
                      <h3>с 2011 года</h3>
                    </div>
                  </div>
                </div>
                <img className="team-member" src="/images/Roman.jpg" alt="" />
              </div>
            </section>
            <section ref={secondRefImg} className="swiper-slide-img">
              <div id="img2" className="team_slider">
                <div className="team_slider-inner">
                  <div className="team_slider-inner_bootom">
                    <div className="team_slider-inner_bootom_pagination">
                      <div
                        onClick={() => ScrolltoSwiper('#img1', -max / 2)}
                        className="team_slider-inner_bootom_pagination_item"
                      ></div>
                      <div className="team_slider-inner_bootom_pagination_item_active"></div>
                      <div
                        onClick={() => ScrolltoSwiper('#img3', max / 2)}
                        className="team_slider-inner_bootom_pagination_item"
                      ></div>
                    </div>
                    <div className="team_slider-inner_bootom_left">
                      <div className="team_slider-inner_bottom_left_slogan">
                        <h1>
                          <span className="team_slider-inner_bottom_left_slogan_text">
                            e<span className="letterL">l</span>grow —
                          </span>{' '}
                          <br />
                          это про людей, <br />
                          которые постоянно <br /> с вами.
                        </h1>
                      </div>
                    </div>
                    <div className="team_slider-inner_bootom_right">
                      <div className="team_slider-inner_bootom_right_nameAndPost">
                        <h1>Роман Адигезалов</h1>
                        <h2>Фронтенд-лид</h2>
                      </div>
                      <h3>с 2012 года</h3>
                    </div>
                  </div>
                </div>
                <img className="team-member" src="/images/roma3.png" alt="" />
              </div>
            </section>
            <section ref={thirdRefImg} className="swiper-slide-img">
              <div id="img3" className="team_slider">
                <div className="team_slider-inner">
                  <div className="team_slider-inner_bootom">
                    <div className="team_slider-inner_bootom_pagination">
                      <div
                        onClick={() => ScrolltoSwiper('#img1', -max)}
                        className="team_slider-inner_bootom_pagination_item"
                      ></div>
                      <div
                        onClick={() => ScrolltoSwiper('#img2', -max / 2)}
                        className="team_slider-inner_bootom_pagination_item"
                      ></div>
                      <div className="team_slider-inner_bootom_pagination_item_active"></div>
                    </div>
                    <div className="team_slider-inner_bootom_left">
                      <div className="team_slider-inner_bottom_left_slogan">
                        <h1>
                          <span className="team_slider-inner_bottom_left_slogan_text">
                            e<span className="letterL">l</span>grow —
                          </span>{' '}
                          <br />
                          это про людей, <br />
                          которые постоянно <br /> с вами.
                        </h1>
                      </div>
                    </div>

                    <div className="team_slider-inner_bootom_right">
                      <div className="team_slider-inner_bootom_right_nameAndPost">
                        <h1>Роман Адигезалов</h1>
                        <h2>Фронтенд-лид</h2>
                      </div>
                      <h3>с 2015 года</h3>
                    </div>
                  </div>
                </div>
                <img className="team-member" src="/images/Roman.jpg" alt="" />
              </div>
            </section>
          </div>
        </div>
      </section>
      <div className="portfolio">
        <div
          onClick={() => router.push('/portfolio')}
          className="portfolio_container"
        >
          <div className="portfolio_inner">
            <div className="portfolio_inner_title">
              <h1>Портфолио</h1>
            </div>
            <div className="portfolio_inner_content">
              <h3>
                Еще оформляем, но обо всех кейсах <br />
                можем рассказать лично
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="carusel">
        <div className="container">
          <div className="carusel_inner">
            <div className="carusel_top">
              <span>2023</span>
              <div
                onClick={() => router.push('/aviationTrainingCenter')}
                className="carusel_top_banner"
              >
                <div className="carusel_banner_words">
                  <h1>
                    Найди свое идеальное место для парковки возле себя, не
                    выходя из машины
                  </h1>
                </div>
                <div style={{ display: 'none' }} className="cases_box_green">
                  <p>Смотреть</p>
                </div>
                <div className="carusel_top_banner_image1">
                  <img src="/images/phone_banner.jpg" alt="" />{' '}
                </div>
              </div>
              <h3 onClick={() => router.push('/aviationTrainingCenter')}>
                Мобильное приложение по управлению {max > 560 && <br />}
                парковками {max <= 560 && <br />} аэропорта
              </h3>
              <a onClick={() => router.push('/portfolio')}>
                <p>Все кейсы</p>

                <svg
                  width="41"
                  height="8"
                  viewBox="0 0 41 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z" />
                </svg>
              </a>
            </div>
            <div className="carusel_bottom">
              <span>2023</span>

              <div
                onClick={() => router.push('/nouBrand')}
                className="carusel_bottom_banner"
              >
                <div className="carusel_bottom_banner_words">
                  <h1>
                    Интернет-магазин брендовой <br />
                    женской одежды
                  </h1>
                </div>
                <div className="carusel_bottom_banner_image2">
                  <img src="/images/main.png" alt="" />
                </div>

                <h2>
                  Интернет-магазин бренда женской {max > 560 && <br />}
                  одежды NOU
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;

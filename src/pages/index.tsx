import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Virtual } from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import 'swiper/css/virtual';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useState, useEffect } from 'react';

const MainPage = () => {
  const [max, setMax] = useState(0);

  useEffect(() => {
    setMax(window.innerWidth);
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
      images: ['OpenBank.png', 'Luxxy.png'],
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
      images: ['1nda.png', 'smile.svg', 'arrow.svg'],
      tags: ['Аутстаффинг,', 'Усиление команды,', 'Middle+,', 'Senior'],
    },
  ];

  const changeMarginSlider = (margin: string) => {
    let swiperPerson: any = document.querySelector('.swiperPerson');
    swiperPerson.style.marginTop = margin;
  };

  return (
    <div>
      <Header />
      <section className="tabs">
        <div className="tabs_container">
          <div className="tabsNav"></div>
          <div className="tabs__content">
            <Swiper
              style={max > 560 ? { height: '700px' } : { height: '590px' }}
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
                console.log(slide);
                return (
                  <SwiperSlide>
                    <div className="tabs__pane tabs__pane_show ">
                      <div className="info_box">
                        <div className="info_box_top">
                          <div className="info_box_top_left">
                            <span>{slide.maintext}</span>
                          </div>
                          <div 
                           style={slide.price.cash === '1 800 ₽' ? {gap: '17px'} : {}}
                          className="info_box_bottom_left">
                            {slide.images.map((image: string) => (
                              <div>
                                <img
                                  style={
                                    image === '1nda.png'
                                      ? { paddingTop: '8px' }
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
                            <a href="#">
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
          <div id="js-wrapper" className="wrapper">
            <div className="sections" id="js-slideContainer">
              <Swiper
                onSlideChangeTransitionEnd={(swiper) => {
                  max <= 560 &&
                    swiper.slides[0].className ===
                      'swiper-slide swiper-slide-active' &&
                    changeMarginSlider('-145px');
                }}
                onSlideChangeTransitionStart={() => {
                  max <= 560 && changeMarginSlider('150px');
                }}
                modules={[Mousewheel]}
                spaceBetween={50}
                slidesPerView={1}
                mousewheel={{
                  invert: false,
                  releaseOnEdges: true,
                  // eventsTarget: '.sectionTitle',
                }}
                speed={1000}
              >
                <SwiperSlide id="principes">
                  <section className="section horizontal_section">
                    <div className="sectionTitle" id="title1">
                      <div className="products_principles">
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
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  <section className="section horizontal_section">
                    <div className="sectionTitle" id="title2">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Проектирование</h1>
                          </div>
                          <Swiper
                            nested={true}
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
                                          бизнес-цели и переведем их на
                                          технический язык.
                                        </p>
                                        <a href="#">Скачать бриф</a>
                                      </div>
                                      <div className="border_green"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
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
                                          микросервисы и масштабируемость.
                                          Заложим риски.
                                        </p>
                                      </div>

                                      <div className="border_green"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
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
                                          Распределим задачи и определим уровень
                                          и количество специалистов. Распределим
                                          задачи в Jira и будем готовы к
                                          разработке.
                                        </p>
                                      </div>

                                      <div className="border_green"></div>
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
                </SwiperSlide>
                <SwiperSlide>
                  <section className="section horizontal_section">
                    <div className="sectionTitle" id="title3">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Прозрачность</h1>
                          </div>
                          <Swiper
                            nested={true}
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
                                          Покажем всех, кто будет задействован
                                          на проекте. Без ноунеймов и котов в
                                          мешках.
                                        </p>
                                      </div>
                                      <div className="border_green"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
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
                                          В оценку закладываем сценарии, исходя
                                          из нашего опыта. При новых вводных и
                                          задачах откорректируем или перестроим
                                          работу.
                                        </p>
                                      </div>
                                      <div className="border_green"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  <section className="section horizontal_section">
                    <div className="sectionTitle" id="title3">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Экономия</h1>
                          </div>
                          <Swiper
                            nested={true}
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
                                          Сроки определяют специалисты, которые
                                          и будут делать продукт. Никаких
                                          готовых смет и скриптов для менеджеров
                                          по оценке нет.
                                        </p>
                                      </div>
                                      <div className="border_green"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
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
                                          Составляем гант с делением на этапы,
                                          часы, дни и результаты. Заказчик
                                          контролирует траты по каждому спринту.
                                          пример КП: (ссылка на ПДФ)
                                        </p>
                                      </div>
                                      <div className="border_green"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
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
                                          Быстро собираем MVP, внедряем,
                                          получаем обратную связь и только потом
                                          дорабатываем. Годовых разработок “в
                                          стол” не практикуем
                                        </p>
                                      </div>
                                      <div className="border_green"></div>
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
                </SwiperSlide>
                <SwiperSlide>
                  <section className="section horizontal_section">
                    <div className="sectionTitle" id="title3">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Качество</h1>
                          </div>
                          <Swiper
                            nested={true}
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
                                          Ведущий разработчик руководит командой
                                          и следит за ходом работ. Разработчики
                                          не предоставлены сами себе.
                                        </p>
                                      </div>
                                      <div className="border_green"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
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
                                          Каждые три дня проводим ревью дабы
                                          продукт следовал заложенным принципам
                                          и качеству.
                                        </p>
                                      </div>
                                      <div className="border_green"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
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
                                          Устроился работать в Google или
                                          переехал на Луну. Оперативно подключим
                                          другого и презентуем его заказчику.
                                        </p>
                                      </div>
                                      <div className="border_green"></div>
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="swiperPerson">
            <div className="swiper-wrapper">
              <Swiper
                speed={1000}
                direction="vertical"
                modules={[Pagination, Mousewheel]}
                mousewheel={{
                  releaseOnEdges: true,
                  // thresholdDelta: 300,
                }}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="team_slider">
                      <div className="team_slider-inner">
                        <div className="team_slider-inner_bootom">
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
                      <img
                        className="team-member"
                        src="/images/Roman.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="team_slider">
                      <div className="team_slider-inner">
                        <div className="team_slider-inner_bootom">
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
                      <img
                        className="team-member"
                        src="/images/Roman.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="team_slider">
                      <div className="team_slider-inner">
                        <div className="team_slider-inner_bootom">
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
                      <img
                        className="team-member"
                        src="/images/Roman.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <div className="swiper-pagination"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="portfolio_container">
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
      </section>
      <section className="carusel">
        <div className="container">
          <div className="carusel_inner">
            <div className="carusel_top">
              <span>2023</span>
              <div className="carusel_top_banner">
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
              <h3>
                Мобильное приложение по управлению {max > 560 && <br />}
                парковками {max <= 560 && <br />} аэропорта
              </h3>
              <a href="#">
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

              <div className="carusel_bottom_banner">
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
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;

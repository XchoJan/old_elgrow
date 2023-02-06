import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainPage = () => {
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

  return (
    <div>
      <Header />
      <section className="tabs">
        <div className="tabs_container">
          <div className="tabsNav"></div>
          <div className="tabs__content">
            <Swiper
              modules={[Pagination]}
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
              <SwiperSlide>
                <div className="tabs__pane tabs__pane_show ">
                  <div className="info_box">
                    <div className="info_box_top">
                      <div className="info_box_top_left">
                        <span>
                          Усилим команду или сделаем все под ключ: задачи,
                          микросервисы, MVP, продукт целиком
                        </span>
                      </div>
                      <div className="info_box_top_right">
                        <h3>
                          от <span>280 000 ₽</span> <br />
                          <p> за спринт </p>
                        </h3>
                      </div>
                    </div>
                    <div className="info_box_bottom">
                      <div className="info_box_bottom_left">
                        <img src="/images/vtb.svg" alt="" />
                        <img src="/images/utg.svg" alt="" />
                        <img src="/images/megafon.svg" alt="" />
                      </div>
                      <div className="info_box_bottom_right">
                        <a href="#">
                          <span> Подробнее </span>
                          <img
                            style={{ marginLeft: '10px' }}
                            src="/images/arrow.svg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="info_box-tags">
                      <h1 className="info_box_title">Теги:</h1>
                      <h3 className="tags">
                        <span>#</span> Архитектура,&nbsp; <span>#</span>
                        Разработка,&nbsp;
                        <span>#</span> Тестирование, &nbsp; <span>#</span> MVP,
                        &nbsp;
                        <span>#</span>
                        Продуктовая команда, <span>#</span>
                        Бэклог
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tabs__pane">
                  <div className="info_box">
                    <div className="info_box_top">
                      <div className="info_box_top_left">
                        <span>
                          Любого уровня и под любые задачи: промо, e-commerce,
                          спецпроекты, порталы и сервисы
                        </span>
                      </div>
                      <div className="info_box_top_right">
                        <h3>
                          от <span>250 000 ₽</span> <br />
                          плюс лицензия
                        </h3>
                      </div>
                    </div>
                    <div className="info_box_bottom">
                      <div className="info_box_bottom_left">
                        <img src="/images/UTG-PA-logo_gold 1.svg" alt="" />
                        <img src="/images/Sfs_1-removebg-preview.png" alt="" />
                        <img src="/images/Group 25.svg" alt="" />
                      </div>
                      <div className="info_box_bottom_right">
                        <a href="#">
                          <span> Подробнее </span>
                          <img
                            style={{ marginLeft: '10px' }}
                            src="/images/arrow.svg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="info_box-tags">
                      <h1 className="info_box_title">Теги:</h1>
                      <h3 className="tags">
                        <span>#</span> Быстрая разработка <span>#</span>
                        Битрикс,
                        <span>#</span> Интернет- <br />
                        магазин,
                        <span>#</span> Корпоративный сайт, <span>#</span>
                        Лэндинг
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tabs__pane" id="content-3">
                  <div className="info_box">
                    <div className="info_box_top">
                      <div className="info_box_top_left">
                        <span>
                          Внутренние и коммерческие приложения для бизнеса и
                          госсектора. Оперативная разработка на React Native или
                          Flutter
                        </span>
                      </div>
                      <div className="info_box_top_right">
                        <h3>
                          от <span>от 500 000 ₽</span> <br />
                          под ключ
                        </h3>
                      </div>
                    </div>
                    <div className="info_box_bottom">
                      <div className="info_box_bottom_left">
                        <img src="/images/UTG-PA-logo_gold 1.svg" alt="" />
                        <img src="/images/Sfs_1-removebg-preview.png" alt="" />
                        <img src="/images/Group 25.svg" alt="" />
                      </div>
                      <div className="info_box_bottom_right">
                        <a href="#">
                          <span> Подробнее </span>
                          <img
                            style={{ marginLeft: '10px' }}
                            src="/images/arrow.svg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="info_box-tags">
                      <h1 className="info_box_title">Теги:</h1>
                      <h3 className="tags">
                        <span>#</span> Быстрая разработка <span>#</span>
                        Битрикс,
                        <span>#</span> Интернет- <br />
                        магазин,
                        <span>#</span> Корпоративный сайт, <span>#</span>
                        Лэндинг
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tabs__pane" id="content-3">
                  <div className="info_box">
                    <div className="info_box_top">
                      <div className="info_box_top_left">
                        <span>
                          На любом уровне завершенности. Разберемся, починим, не
                          допустим падений.
                        </span>
                      </div>
                      <div className="info_box_top_right">
                        <h3>
                          от <span>50 000 ₽</span> <br />
                          за задачу
                        </h3>
                      </div>
                    </div>
                    <div className="info_box_bottom">
                      <div className="info_box_bottom_left">
                        <img src="/images/UTG-PA-logo_gold 1.svg" alt="" />
                        <img src="/images/Sfs_1-removebg-preview.png" alt="" />
                        <img src="/images/Group 25.svg" alt="" />
                      </div>
                      <div className="info_box_bottom_right">
                        <a href="#">
                          <span> Подробнее </span>
                          <img
                            style={{ marginLeft: '10px' }}
                            src="/images/arrow.svg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="info_box-tags">
                      <h1 className="info_box_title">Теги:</h1>
                      <h3 className="tags">
                        <span>#</span> Быстрая разработка <span>#</span>
                        Битрикс,
                        <span>#</span> Интернет- <br />
                        магазин,
                        <span>#</span> Корпоративный сайт, <span>#</span>
                        Лэндинг
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tabs__pane" id="content-3">
                  <div className="info_box">
                    <div className="info_box_top">
                      <div className="info_box_top_left">
                        <span>
                          Подберем специалистов под любые специфические запросы.
                          Вовлекаемся от одного месяца.
                        </span>
                      </div>
                      <div className="info_box_top_right">
                        <h3>
                          от <span>1800 ₽</span> <br />в час
                        </h3>
                      </div>
                    </div>
                    <div className="info_box_bottom">
                      <div className="info_box_bottom_left">
                        <img src="/images/UTG-PA-logo_gold 1.svg" alt="" />
                        <img src="/images/Sfs_1-removebg-preview.png" alt="" />
                        <img src="/images/Group 25.svg" alt="" />
                      </div>
                      <div className="info_box_bottom_right">
                        <a href="#">
                          <span> Подробнее </span>
                          <img
                            style={{ marginLeft: '10px' }}
                            src="/images/arrow.svg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="info_box-tags">
                      <h1 className="info_box_title">Теги:</h1>
                      <h3 className="tags">
                        <span>#</span> Быстрая разработка <span>#</span>
                        Битрикс,
                        <span>#</span> Интернет- <br />
                        магазин,
                        <span>#</span> Корпоративный сайт, <span>#</span>
                        Лэндинг
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div id="js-wrapper" className="wrapper">
            <div className="sections" id="js-slideContainer">
              <Swiper
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
                <SwiperSlide>
                  <section className="section horizontal_section">
                    <div className="sectionTitle" id="title1">
                      <div className="products_principles">
                        <div className="products_principles-inner">
                          <div className="products_principles-title">
                            <h1>Принципы</h1>
                          </div>
                          <div className="products_principles-center">
                            <p>
                              <img src="/images/elgrow._logo.svg" alt="" /> –
                              это про результат.
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
                                <div className="websites-content_inner-body_right">
                                  <div className="website-tab_content">
                                    <div className="website-tab_content_item">
                                      <div className="website_tab_content">
                                        <p className="website-mini_tab_content website-mini_tab_content1 active">
                                          Перед стартом предоставим аналитика и
                                          проджект-менеджера. Проанализируем
                                          бизнес-цели и переведем их на
                                          технический язык.
                                        </p>{' '}
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
                                <div className="websites-content_inner-body_right">
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
                                <div className="websites-content_inner-body_right">
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
                                <div className="websites-content_inner-body_right">
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
                                <div className="websites-content_inner-body_right">
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
                                <div className="websites-content_inner-body_right">
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
                                <div className="websites-content_inner-body_right">
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
                                <div className="websites-content_inner-body_right">
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
                                <div className="websites-content_inner-body_right">
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
                                <div className="websites-content_inner-body_right">
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
                                <div className="websites-content_inner-body_right">
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
                                <div className="websites-content_inner-body_right">
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
                ...
              </Swiper>
            </div>
          </div>
          <div className="swiper">
            <div className="swiper-wrapper">
              <Swiper
                direction="vertical"
                modules={[Pagination, Mousewheel]}
                mousewheel={{
                  invert: false,
                  releaseOnEdges: true,
                }}
                spaceBetween={0}
                slidesPerView={1}
                speed={1000}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="team_slider">
                      <div className="team_slider-inner">
                        <div className="team_slider-inner_slogan">
                          <h1>
                            <img src="/images/logo_def.svg" alt="" /> <br />
                            это про людей, <br />
                            которые постоянно <br /> с вами.
                          </h1>
                        </div>
                        <div className="team_slider-inner_bootom">
                          <div className="team_slider-inner_bootom_left">
                            <h1>Роман Адигезалов</h1>
                            <h2>Фронтенд-лид</h2>
                          </div>
                          <div className="team_slider-inner_bootom_right">
                            <h3>с 2019 года</h3>
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
                        <div className="team_slider-inner_slogan">
                          <h1>
                            <img src="/images/logo_def.svg" alt="" /> <br />
                            это про людей,которые постоянно с вами.
                          </h1>
                        </div>
                        <div className="team_slider-inner_bootom">
                          <div className="team_slider-inner_bootom_left">
                            <h1>Роман Адигезалов</h1>
                            <h2>Фронтенд-лид</h2>
                          </div>
                          <div className="team_slider-inner_bootom_right">
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
                        <div className="team_slider-inner_slogan">
                          <h1>
                            <img src="/images/logo_def.svg" alt="" /> <br />
                            это про людей,которые постоянно с вами.
                          </h1>
                        </div>
                        <div className="team_slider-inner_bootom">
                          <div className="team_slider-inner_bootom_left">
                            <h1>Роман Адигезалов</h1>
                            <h2>Фронтенд-лид</h2>
                          </div>
                          <div className="team_slider-inner_bootom_right">
                            <h3>с 2022 года</h3>
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
                <img src="/images/phone_banner.jpg" alt="" />
              </div>
              <h3>
                Мобильное приложение по управлению <br />
                парковками аэропорта
              </h3>
              <a href="#">
                <p>Все кейсы</p> <img src="/images/arrow2.svg" alt="" />
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
                <img src="/images/modal.jpg" alt="" />
                <h2>
                  Интернет-магазин бренда женской <br />
                  одежды nou
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

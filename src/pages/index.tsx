import { Parallax } from 'react-scroll-parallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef, useEffect, useState } from 'react';

const MainPage = () => {
  const ref = useRef(null);
  // const [vw, setVw]: any = useState('93%');

  let oldValue = 0;



  if (typeof document !== 'undefined') {
    const wrap: any = document.querySelector('.header_bottom-cases_box');
    wrap.style.maxWidth = '95%';
    const growBlockElem = () => {
      let newValue = window.pageYOffset;
      const maxWidth = wrap.style.maxWidth;
      let valueWidth = maxWidth.substring(0, 4);

     

      if (valueWidth[2] === '%') {
        valueWidth = Number(maxWidth.substring(0, 2));
      } else if (valueWidth[3] === '%') {
        valueWidth = Number(maxWidth.substring(0, 3));
      } else {
        valueWidth = Number(maxWidth.substring(0, 4));
      }
      if (oldValue - newValue < 0) {
        if (valueWidth === 100) {
          valueWidth = 100;
          let newWidth = String(valueWidth) + '%';
          wrap.style.maxWidth = newWidth;
        } else {
          valueWidth += 1;
          let newWidth = String(valueWidth) + '%';
          wrap.style.maxWidth = newWidth;
        }
      } else if (oldValue - newValue > 0) {
        if (valueWidth <= 95) {
          valueWidth = 95;
          let newWidth = String(valueWidth) + '%';
          wrap.style.maxWidth = newWidth;
        } else {
          valueWidth -= 1;

          let newWidth = String(valueWidth) + '%';
          wrap.style.maxWidth = newWidth;
        }
      }
      oldValue = newValue;
    } 


   
    let pageYOffset = window.pageYOffset;

 if(pageYOffset <= 1200) {
  
   console.log(123)
  window.addEventListener('scroll', growBlockElem)}
 else    window.removeEventListener('scroll', growBlockElem)
  
  }

  return (
    <div>
      {' '}
      <header>
        <div className="container">
          <div className="header_top">
            <div className="logo">
              <img src="/images/elgrow._logo.svg" alt="" />
            </div>
            <div className="after_logo">
              <h2>
                Digital- <br />
                интегратор <br />c 2012 года
              </h2>
            </div>
          </div>
          <div className="header_bottom">
            <img className="eagle" src="/images/eagle.png" alt="" />

            <div id="trigger1" className="header_bottom-title">
              <Parallax speed={-20} translateY={[-200, 400]}>
                <h1>
                  Разработка и интеграция <br />
                  <span>IT-РеШеНИЙ. </span> <br />
                  Автоматизация бизнеса.
                  <br />
                  <span>аУТСТАФ.</span>
                </h1>{' '}
              </Parallax>
            </div>
          </div>
          <div className="header_bottom-cases">
            <div
              // style={{ maxWidth: vw }}
              ref={ref}
              className="header_bottom-cases_box"
            >
              <div className="cases_box_green">
                <p>Новый кейс</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="tabs">
        <div className="tabs_container">
          <div className="tabs__nav">
            <button className="tabs__btn tabs__btn_active">Продукты</button>
            <button className="tabs__btn">Сайты</button>
            <button className="tabs__btn">Мобильные приложения</button>
            <button className="tabs__btn">Поддержка</button>
            <button className="tabs__btn">Аутстаф</button>
          </div>
          <div className="tabs__content">
            <div className="tabs__pane tabs__pane_show">
              <div className="info_box">
                <div className="info_box_top">
                  <div className="info_box_top_left">
                    <h2>
                      Усилим команду или сделаем все под ключ: задачи,
                      микросервисы, MVP, продукт целиком
                    </h2>
                  </div>
                  <div className="info_box_top_right">
                    <h3>
                      от <span>280 000 ₽</span> <br />
                      за спринт
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
                      Подробнее
                      <img style={{ marginLeft: '10px' }} src="" alt="" />
                    </a>
                  </div>
                </div>
                <div className="info_box-tags">
                  <h1 className="info_box_title">Теги:</h1>
                  <h3 className="tags">
                    <span>#</span> React native, <span>#</span> Flutter,
                    <span>#</span> IOS, <span>#</span> Android, <br />
                    <span>#</span>
                    Мобильные приложения
                  </h3>
                </div>
              </div>
            </div>
            <div className="tabs__pane">
              <div className="info_box">
                <div className="info_box_top">
                  <div className="info_box_top_left">
                    <h2>
                      Любого уровня и под любые задачи: промо, e-commerce,
                      спецпроекты, порталы и сервисы
                    </h2>
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
                      Подробнее
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
                    <span>#</span> Быстрая разработка <span>#</span> Битрикс,
                    <span>#</span> Интернет- <br />
                    магазин,
                    <span>#</span> Корпоративный сайт, <span>#</span>
                    Лэндинг
                  </h3>
                </div>
              </div>
            </div>
            <div className="tabs__pane" id="content-3">
              <div className="info_box">
                <div className="info_box_top">
                  <div className="info_box_top_left">
                    <h2>
                      Любого уровня и под любые задачи: промо, e-commerce,
                      спецпроекты, порталы и сервисы
                    </h2>
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
                      Подробнее
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
                    <span>#</span> Быстрая разработка <span>#</span> Битрикс,
                    <span>#</span> Интернет- <br />
                    магазин,
                    <span>#</span> Корпоративный сайт, <span>#</span>
                    Лэндинг
                  </h3>
                </div>
              </div>
            </div>
            <div className="tabs__pane" id="content-3">
              <div className="info_box">
                <div className="info_box_top">
                  <div className="info_box_top_left">
                    <h2>
                      Любого уровня и под любые задачи: промо, e-commerce,
                      спецпроекты, порталы и сервисы
                    </h2>
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
                      Подробнее
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
                    <span>#</span> Быстрая разработка <span>#</span> Битрикс,
                    <span>#</span> Интернет- <br />
                    магазин,
                    <span>#</span> Корпоративный сайт, <span>#</span>
                    Лэндинг
                  </h3>
                </div>
              </div>
            </div>
            <div className="tabs__pane" id="content-3">
              <div className="info_box">
                <div className="info_box_top">
                  <div className="info_box_top_left">
                    <h2>
                      Любого уровня и под любые задачи: промо, e-commerce,
                      спецпроекты, порталы и сервисы
                    </h2>
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
                      Подробнее
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
                    <span>#</span> Быстрая разработка <span>#</span> Битрикс,
                    <span>#</span> Интернет- <br />
                    магазин,
                    <span>#</span> Корпоративный сайт, <span>#</span>
                    Лэндинг
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div id="js-wrapper" className="wrapper">
            <div className="sections" id="js-slideContainer">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  {' '}
                  <section className="section horizontal_section" id="story1">
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
                  {' '}
                  <section className="section horizontal_section" id="story2">
                    <div className="sectionTitle" id="title2">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Проектирование</h1>
                          </div>
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left">
                              <h2 className="websites-tab websites-tab1  websites-tab_active">
                                <span>01</span> Изучение продукта
                              </h2>

                              <h2 className="websites-tab websites-tab1">
                                <span>02</span> Архитектура
                              </h2>
                              <h2 className="websites-tab websites-tab1">
                                <span>03</span> Подбор команды
                              </h2>
                            </div>
                            <div className="websites-content_inner-body_right">
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content1 active">
                                      Подключим архитектора, определим
                                      микросервисы и масштабируемость. Заложим
                                      риски.
                                    </p>
                                    <p className="website-mini_tab_content website-mini_tab_content1  ">
                                      Распределим задачи и определим уровень и
                                      количество специалистов. Распределим
                                      задачи в Jira и будем готовы к разработке.
                                    </p>
                                    <p className="website-mini_tab_content website-mini_tab_content1  ">
                                      Перед стартом предоставим аналитика и
                                      проджект-менеджера. Проанализируем
                                      бизнес-цели и переведем их на технический
                                      язык.
                                    </p>
                                  </div>

                                  <div className="border_green"></div>
                                  <a href="#">Скачать бриф</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  <section className="section horizontal_section" id="story2">
                    <div className="sectionTitle" id="title2">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Проектирование</h1>
                          </div>
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left">
                              <h2 className="websites-tab websites-tab1  ">
                                <span>01</span> Изучение продукта
                              </h2>

                              <h2 className="websites-tab websites-tab1 websites-tab_active">
                                <span>02</span> Архитектура
                              </h2>
                              <h2 className="websites-tab websites-tab1">
                                <span>03</span> Подбор команды
                              </h2>
                            </div>
                            <div className="websites-content_inner-body_right">
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
                                  <a href="#">Скачать бриф</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <section className="section horizontal_section" id="story2">
                    <div className="sectionTitle" id="title2">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Проектирование</h1>
                          </div>
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left">
                              <h2 className="websites-tab websites-tab1  ">
                                <span>01</span> Изучение продукта
                              </h2>

                              <h2 className="websites-tab websites-tab1">
                                <span>02</span> Архитектура
                              </h2>
                              <h2 className="websites-tab websites-tab1 websites-tab_active">
                                <span>03</span> Подбор команды
                              </h2>
                            </div>
                            <div className="websites-content_inner-body_right">
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content1 active ">
                                      Перед стартом предоставим аналитика и
                                      проджект-менеджера. Проанализируем
                                      бизнес-цели и переведем их на технический
                                      язык.
                                    </p>
                                  </div>

                                  <div className="border_green"></div>
                                  <a href="#">Скачать бриф</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <section className="section horizontal_section" id="story3">
                    <div className="sectionTitle" id="title3">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Прозрачность</h1>
                          </div>
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left">
                              <h2 className="websites-tab websites-tab2 websites-tab_active">
                                <span>01</span> Знакомство с командой
                              </h2>
                              <h2 className="websites-tab websites-tab2 ">
                                <span>02</span> Планирование рисков
                              </h2>
                              <h2 className="websites-tab websites-tab2 ">
                                <span>03</span> Результат хоть каждый день
                              </h2>
                            </div>
                            <div className="websites-content_inner-body_right">
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content2 active">
                                      Покажем всех, кто будет задействован на
                                      проекте. Без ноунеймов и котов в мешках.
                                    </p>
                                    <p className="website-mini_tab_content website-mini_tab_content2  ">
                                      В оценку закладываем сценарии, исходя из
                                      нашего опыта. При новых вводных и задачах
                                      откорректируем или перестроим работу.
                                    </p>
                                    <p className="website-mini_tab_content website-mini_tab_content2  ">
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
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  <section className="section horizontal_section" id="story3">
                    <div className="sectionTitle" id="title3">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Прозрачность</h1>
                          </div>
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left">
                              <h2 className="websites-tab websites-tab2 ">
                                <span>01</span> Знакомство с командой
                              </h2>
                              <h2 className="websites-tab websites-tab2 websites-tab_active">
                                <span>02</span> Планирование рисков
                              </h2>
                              <h2 className="websites-tab websites-tab2 ">
                                <span>03</span> Результат хоть каждый день
                              </h2>
                            </div>
                            <div className="websites-content_inner-body_right">
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
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <section className="section horizontal_section" id="story3">
                    <div className="sectionTitle" id="title3">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Прозрачность</h1>
                          </div>
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left">
                              <h2 className="websites-tab websites-tab2 ">
                                <span>01</span> Знакомство с командой
                              </h2>
                              <h2 className="websites-tab websites-tab2 ">
                                <span>02</span> Планирование рисков
                              </h2>
                              <h2 className="websites-tab websites-tab2 websites-tab_active">
                                <span>03</span> Результат хоть каждый день
                              </h2>
                            </div>
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
                        </div>
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <section className="section horizontal_section" id="story4">
                    <div className="sectionTitle" id="title3">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Экономия</h1>
                          </div>
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left">
                              <h2 className="websites-tab websites-tab3 websites-tab_active">
                                <span>01</span> Оценка исполнителям
                              </h2>
                              <h2 className="websites-tab websites-tab3 ">
                                <span>02</span> Понятное коммерческое
                                предложение
                              </h2>
                              <h2 className="websites-tab websites-tab3 ">
                                <span>03</span> Продуктовый подход
                              </h2>
                            </div>
                            <div className="websites-content_inner-body_right">
                              <div className="website-tab_content">
                                <div className="website-tab_content_item">
                                  <div className="website_tab_content">
                                    <p className="website-mini_tab_content website-mini_tab_content3 active">
                                      Сроки определяют специалисты, которые и
                                      будут делать продукт. Никаких готовых смет
                                      и скриптов для менеджеров по оценке нет.
                                    </p>
                                    <p className="website-mini_tab_content website-mini_tab_content3  ">
                                      Составляем гант с делением на этапы, часы,
                                      дни и результаты. Заказчик контролирует
                                      траты по каждому спринту. пример КП:
                                      (ссылка на ПДФ)
                                    </p>
                                    <p className="website-mini_tab_content website-mini_tab_content3  ">
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
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <section className="section horizontal_section" id="story4">
                    <div className="sectionTitle" id="title3">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Экономия</h1>
                          </div>
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left">
                              <h2 className="websites-tab websites-tab3 ">
                                <span>01</span> Оценка исполнителям
                              </h2>
                              <h2 className="websites-tab websites-tab3 websites-tab_active">
                                <span>02</span> Понятное коммерческое
                                предложение
                              </h2>
                              <h2 className="websites-tab websites-tab3 ">
                                <span>03</span> Продуктовый подход
                              </h2>
                            </div>
                            <div className="websites-content_inner-body_right">
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
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <section className="section horizontal_section" id="story4">
                    <div className="sectionTitle" id="title3">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Экономия</h1>
                          </div>
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left">
                              <h2 className="websites-tab websites-tab3 ">
                                <span>01</span> Оценка исполнителям
                              </h2>
                              <h2 className="websites-tab websites-tab3 ">
                                <span>02</span> Понятное коммерческое
                                предложение
                              </h2>
                              <h2 className="websites-tab websites-tab3 websites-tab_active">
                                <span>03</span> Продуктовый подход
                              </h2>
                            </div>
                            <div className="websites-content_inner-body_right">
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
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  <section className="section horizontal_section" id="story5">
                    <div className="sectionTitle" id="title3">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Качество</h1>
                          </div>
                          <div className="websites-content_inner-body">
                            <div className="websites-content_inner-body_left">
                              <h2 className="websites-tab websites-tab4 websites-tab_active">
                                <span>01</span> Техлид всегда на проекте
                              </h2>
                              <h2 className="websites-tab websites-tab4">
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
                                    <p className="website-mini_tab_content website-mini_tab_content4 active">
                                      Ведущий разработчик руководит командой и
                                      следит за ходом работ. Разработчики не
                                      предоставлены сами себе.
                                    </p>
                                    <p className="website-mini_tab_content website-mini_tab_content4  ">
                                      Каждые три дня проводим ревью дабы продукт
                                      следовал заложенным принципам и качеству.
                                    </p>
                                    <p className="website-mini_tab_content website-mini_tab_content4  ">
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
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <section className="section horizontal_section" id="story5">
                    <div className="sectionTitle" id="title3">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Качество</h1>
                          </div>
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
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <section className="section horizontal_section" id="story5">
                    <div className="sectionTitle" id="title3">
                      <div className="websites-content">
                        <div className="websites-content_inner">
                          <div className="websites-content_inner-title">
                            <h1>Качество</h1>
                          </div>
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
                        <h3>с 2019 года</h3>
                      </div>
                    </div>
                  </div>
                  <img className="team-member" src="/images/Roman.jpg" alt="" />
                </div>
              </div>
              <div className="swiper-slide">
                {' '}
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
                        <h3>с 2019 года</h3>
                      </div>
                    </div>
                  </div>
                  <img className="team-member" src="/images/Roman.jpg" alt="" />
                </div>
              </div>
              <div className="swiper-slide">
                {' '}
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
                        <h3>с 2019 года</h3>
                      </div>
                    </div>
                  </div>
                  <img className="team-member" src="/images/Roman.jpg" alt="" />
                </div>
              </div>
              ...
            </div>

            <div className="swiper-pagination"></div>
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
                <div className="cases_box_green">
                  <p>Смотреть</p>
                </div>
                <img src="/images/phone_banner.jpg" alt="" />
              </div>
              <h2>
                Мобильное приложение по управлению <br />
                парковками аэропорта
              </h2>
              <a href="#">
                <span>Все кейсы</span> <img src="/images/arrow2.svg" alt="" />
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
              </div>
              <h2>
                Интернет-магазин бренда женской <br />
                одежды nou
              </h2>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer_inner">
            <div className="footer_title">
              <div className="footer_title_left">
                <img src="/images/logo_white.svg" alt="" />
              </div>
              <div className="footer_title_right">
                <a href="#"> ВАКАНСИИ </a>
              </div>
            </div>
            <div className="footer_center">
              <div className="footer_center-title">
                <h1>Стать клиентом</h1>
              </div>
              <div className="footer_center-wrap">
                <div className="footer_center-wrap_left">
                  <a href="#">Главная</a>
                  <a href="#">Цены</a>
                  <a href="#">Портфолио</a>
                  <a href="#">контакты</a>
                </div>
                <div className="footer_center-wrap_right">
                  <a className="presentation" href="#">
                    презентация
                  </a>
                </div>
              </div>
            </div>
            <div className="footer_bottom">
              <div className="footer_bottom_item">
                <h2>
                  <img src="/images/Copyright.svg" alt="" />
                  Все права защищены 2023
                </h2>
              </div>
              <div className="footer_bottom_item">
                <h3>
                  <img src="/images/telegram-small1440.svg" alt="" />
                  Telegram
                </h3>
              </div>
              <div className="footer_bottom_item">
                <h3>
                  <img src="/images/fluent_mail-20-filled.svg" alt="" />
                  info@elgrow.ru
                </h3>
              </div>
            </div>
          </div>
        </div>
      </footer>{' '}
    </div>
  );
};

export default MainPage;

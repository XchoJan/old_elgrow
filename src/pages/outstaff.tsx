import React, { useRef, useState, useEffect } from 'react';

import HeaderOutstaff from '../Components/HeaderOutstaff';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import OutstaffCallback from '../Components/OutstaffCallback';
import CustomRadioButton from '../Components/CustomRadioButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Virtual, EffectFade } from 'swiper';

const outstaff = () => {
  const images = [
    'vtb.svg',
    'otkrytie.svg',
    'utg.svg',
    'megafon.svg',
    'nespressoWhite.svg',
    'kfcWhite.svg',
  ];
  const swiperRef: any = useRef(null);
  const swiperRefParent: any = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef?.current?.slideNext();
    }
  };

  const handleNextSlideParent = () => {
    if (swiperRefParent.current) {
      swiperRefParent?.current?.slideNext();
    }
  };

  // useEffect(() => {
  //   document.body.style.backgroundColor = 'black';
  //   return () => {
  //     document.body.style.backgroundColor = 'white';
  //   };
  // }, []);

  const [active, setActive] = useState('Системный аналитик');
  const [activeNav, setActiveNav] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const [sliderValue, setSliderValue] = useState(0);
  const [sliderTimer, setSlideTimer] = useState(0);
  const [typeNavState, setTypeNavState] = useState('');

  const [CallBackMenuOutstaffState, setCallBackMenuOutstaffState] =
    useState(true);
  const [isVisibleCallbackOutstaff, setVisibleCallbackOutstaff] =
    useState(false);

  const handleSliderChange = (value: any) => {
    setSliderValue(value);
  };

  const handleSliderTimer = (value: any) => {
    setSlideTimer(value);
  };

  const navigation = ['01', '02', '03'];

  const getPrice = (prof: string, time: number) => {
    if (prof === 'Системный аналитик') {
      if (sliderValue <= 33) {
        return {
          middle: {
            hour: '2 200',
            fulltime: '352 000',
          },
          middlePlus: {
            hour: '2 400',
            fulltime: '384 000',
          },
          senior: {
            hour: '2 900',
            fulltime: '464 000',
          },
        };
      }
      if (sliderValue <= 70) {
        return {
          middle: {
            hour: '1 980',
            fulltime: '316 800',
          },
          middlePlus: {
            hour: '2 160',
            fulltime: '345 600',
          },
          senior: {
            hour: '2 610',
            fulltime: '417 600',
          },
        };
      }
      if (sliderValue <= 100) {
        return {
          middle: {
            hour: '1 760',
            fulltime: '281 600',
          },
          middlePlus: {
            hour: '1 920',
            fulltime: '307 200',
          },
          senior: {
            hour: '2 320',
            fulltime: '371 200',
          },
        };
      }
    }
    if (prof === 'Бизнес аналитик') {
      if (sliderValue <= 33) {
        return {
          middle: {
            hour: '1 900',
            fulltime: '304 000',
          },
          middlePlus: {
            hour: '2 100',
            fulltime: '336 000',
          },
          senior: {
            hour: '2 500',
            fulltime: '400 000',
          },
        };
      }
      if (sliderValue <= 70) {
        return {
          middle: {
            hour: '1 710',
            fulltime: '273 600',
          },
          middlePlus: {
            hour: '1 890',
            fulltime: '302 400',
          },
          senior: {
            hour: '2 250',
            fulltime: '360 000',
          },
        };
      }
      if (sliderValue <= 100) {
        return {
          middle: {
            hour: '1 520',
            fulltime: '243 200',
          },
          middlePlus: {
            hour: '1 680',
            fulltime: '268 800',
          },
          senior: {
            hour: '2 000',
            fulltime: '320 000',
          },
        };
      }
    }
    if (prof === 'UI|UX') {
      if (sliderValue <= 33) {
        return {
          middle: {
            hour: '2 000',
            fulltime: '320 000',
          },
          middlePlus: {
            hour: '2 300',
            fulltime: '368 000',
          },
          senior: {
            hour: '2 900',
            fulltime: '464 000',
          },
        };
      }
      if (sliderValue <= 70) {
        return {
          middle: {
            hour: '1 800',
            fulltime: '288 000',
          },
          middlePlus: {
            hour: '2 070',
            fulltime: '331 200',
          },
          senior: {
            hour: '2 610',
            fulltime: '417 600',
          },
        };
      }
      if (sliderValue <= 100) {
        return {
          middle: {
            hour: '1 600',
            fulltime: '256 000',
          },
          middlePlus: {
            hour: '1 840',
            fulltime: '294 400',
          },
          senior: {
            hour: '2 320',
            fulltime: '371 200',
          },
        };
      }
    }
    if (prof === 'React JS') {
      if (sliderValue <= 33) {
        return {
          middle: {
            hour: '2 000',
            fulltime: '320 000',
          },
          middlePlus: {
            hour: '2 500',
            fulltime: '400 000',
          },
          senior: {
            hour: '2 800',
            fulltime: '448 000',
          },
        };
      }
      if (sliderValue <= 70) {
        return {
          middle: {
            hour: '1 800',
            fulltime: '288 000',
          },
          middlePlus: {
            hour: '2 250',
            fulltime: '360 000',
          },
          senior: {
            hour: '2 520',
            fulltime: '403 200',
          },
        };
      }
      if (sliderValue <= 100) {
        return {
          middle: {
            hour: '1 600',
            fulltime: '256 000',
          },
          middlePlus: {
            hour: '2 000',
            fulltime: '320 000',
          },
          senior: {
            hour: '2 240',
            fulltime: '358 400',
          },
        };
      }
    }
    if (prof === 'React Native') {
      if (sliderValue <= 33) {
        return {
          middle: {
            hour: '2 000',
            fulltime: '352 000',
          },
          middlePlus: {
            hour: '2 700',
            fulltime: '432 000',
          },
          senior: {
            hour: '3 000',
            fulltime: '480 000',
          },
        };
      }
      if (sliderValue <= 70) {
        return {
          middle: {
            hour: '1 980',
            fulltime: '316 800',
          },
          middlePlus: {
            hour: '2 430',
            fulltime: '388 800',
          },
          senior: {
            hour: '2 700',
            fulltime: '432 000',
          },
        };
      }
      if (sliderValue <= 100) {
        return {
          middle: {
            hour: '1 760',
            fulltime: '281 600',
          },
          middlePlus: {
            hour: '2 160',
            fulltime: '345 600',
          },
          senior: {
            hour: '2 400',
            fulltime: '384 000',
          },
        };
      }
    }
    if (prof === 'Node JS') {
      if (sliderValue <= 33) {
        return {
          middle: {
            hour: '2 000',
            fulltime: '320 000',
          },
          middlePlus: {
            hour: '2 500',
            fulltime: '400 000',
          },
          senior: {
            hour: '2 800',
            fulltime: '448 000',
          },
        };
      }
      if (sliderValue <= 70) {
        return {
          middle: {
            hour: '1 800',
            fulltime: '288 000',
          },
          middlePlus: {
            hour: '2 250',
            fulltime: '360 000',
          },
          senior: {
            hour: '2 520',
            fulltime: '403 200',
          },
        };
      }
      if (sliderValue <= 100) {
        return {
          middle: {
            hour: '1 600',
            fulltime: '256 000',
          },
          middlePlus: {
            hour: '2 000',
            fulltime: '320 000',
          },
          senior: {
            hour: '2 240',
            fulltime: '358 400',
          },
        };
      }
    }
    if (prof === 'C# (.net)') {
      if (sliderValue <= 33) {
        return {
          middle: {
            hour: '2 000',
            fulltime: '320 000',
          },
          middlePlus: {
            hour: '2 500',
            fulltime: '400 000',
          },
          senior: {
            hour: '3 000',
            fulltime: '480 000',
          },
        };
      }
      if (sliderValue <= 70) {
        return {
          middle: {
            hour: '1 800',
            fulltime: '288 000',
          },
          middlePlus: {
            hour: '2 250',
            fulltime: '360 000',
          },
          senior: {
            hour: '2 700',
            fulltime: '432 000',
          },
        };
      }
      if (sliderValue <= 100) {
        return {
          middle: {
            hour: '1 600',
            fulltime: '256 000',
          },
          middlePlus: {
            hour: '2 000',
            fulltime: '320 000',
          },
          senior: {
            hour: '2 400',
            fulltime: '384 000',
          },
        };
      }
    }
    if (prof === 'PHP (Laravel|Битрикс)') {
      if (sliderValue <= 33) {
        return {
          middle: {
            hour: '1 800',
            fulltime: '288 000',
          },
          middlePlus: {
            hour: '2 000',
            fulltime: '320 000',
          },
          senior: {
            hour: '2 300',
            fulltime: '368 000',
          },
        };
      }
      if (sliderValue <= 70) {
        return {
          middle: {
            hour: '1 620',
            fulltime: '259 200',
          },
          middlePlus: {
            hour: '1 800',
            fulltime: '288 000',
          },
          senior: {
            hour: '2 070',
            fulltime: '331 200',
          },
        };
      }
      if (sliderValue <= 100) {
        return {
          middle: {
            hour: '1 440',
            fulltime: '230 400',
          },
          middlePlus: {
            hour: '1 600',
            fulltime: '256 000',
          },
          senior: {
            hour: '1 840',
            fulltime: '294 400',
          },
        };
      }
    }
    if (prof === 'Flutter') {
      if (sliderValue <= 33) {
        return {
          middle: {
            hour: '2 400',
            fulltime: '384 000',
          },
          middlePlus: {
            hour: '2 800',
            fulltime: '448 000',
          },
          senior: {
            hour: '3 200',
            fulltime: '512 000',
          },
        };
      }
      if (sliderValue <= 70) {
        return {
          middle: {
            hour: '2 160',
            fulltime: '345 600',
          },
          middlePlus: {
            hour: '2 520',
            fulltime: '403 200',
          },
          senior: {
            hour: '2 880',
            fulltime: '460 800',
          },
        };
      }
      if (sliderValue <= 100) {
        return {
          middle: {
            hour: '1 920',
            fulltime: '307 200',
          },
          middlePlus: {
            hour: '2 240',
            fulltime: '358 400',
          },
          senior: {
            hour: '2 560',
            fulltime: '409 600',
          },
        };
      }
    }
    if (prof === 'iOS (Swift)') {
      if (sliderValue <= 33) {
        return {
          middle: {
            hour: '3 000',
            fulltime: '480 000',
          },
          middlePlus: {
            hour: '3 500',
            fulltime: '560 000',
          },
          senior: {
            hour: '4 000',
            fulltime: '640 000',
          },
        };
      }
      if (sliderValue <= 70) {
        return {
          middle: {
            hour: '2 700',
            fulltime: '432 000',
          },
          middlePlus: {
            hour: '3 150',
            fulltime: '504 000',
          },
          senior: {
            hour: '3 600',
            fulltime: '576 000',
          },
        };
      }
      if (sliderValue <= 100) {
        return {
          middle: {
            hour: '2 400',
            fulltime: '384 000',
          },
          middlePlus: {
            hour: '2 800',
            fulltime: '448 000',
          },
          senior: {
            hour: '3 200',
            fulltime: '512 000',
          },
        };
      }
    }
    if (prof === 'Android (Kotlin)') {
      if (sliderValue <= 33) {
        return {
          middle: {
            hour: '2 800',
            fulltime: '448 000',
          },
          middlePlus: {
            hour: '3 200',
            fulltime: '512 000',
          },
          senior: {
            hour: '3 600',
            fulltime: '576 000',
          },
        };
      }
      if (sliderValue <= 70) {
        return {
          middle: {
            hour: '2 520',
            fulltime: '403 200',
          },
          middlePlus: {
            hour: '2 880',
            fulltime: '460 800',
          },
          senior: {
            hour: '3 240',
            fulltime: '518 400',
          },
        };
      }
      if (sliderValue <= 100) {
        return {
          middle: {
            hour: '2 240',
            fulltime: '358 400',
          },
          middlePlus: {
            hour: '2 560',
            fulltime: '409 600',
          },
          senior: {
            hour: '2 880',
            fulltime: '460 800',
          },
        };
      }
    }
    if (prof === 'Vue JS') {
      if (sliderValue <= 33) {
        return {
          middle: {
            hour: '1 800',
            fulltime: '288 000',
          },
          middlePlus: {
            hour: '2 000',
            fulltime: '320 000',
          },
          senior: {
            hour: '2 300',
            fulltime: '368 000',
          },
        };
      }
      if (sliderValue <= 70) {
        return {
          middle: {
            hour: '1 620',
            fulltime: '259 200',
          },
          middlePlus: {
            hour: '1 800',
            fulltime: '288 000',
          },
          senior: {
            hour: '2 070',
            fulltime: '331 200',
          },
        };
      }
      if (sliderValue <= 100) {
        return {
          middle: {
            hour: '1 440',
            fulltime: '230 400',
          },
          middlePlus: {
            hour: '1 600',
            fulltime: '256 000',
          },
          senior: {
            hour: '1 840',
            fulltime: '294 400',
          },
        };
      }
    }
  };

  const price = getPrice(active, sliderValue);

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const [max, setMax]: any = useState(0);
  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  const navItems = [
    'Системный аналитик',
    'Бизнес аналитик',
    'UI|UX',
    'React JS',
    'React Native',
    'Node JS',
    'Android (Kotlin)',
    'Flutter',
    'PHP (Laravel|Битрикс)',
    'iOS (Swift)',
    'C# (.net)',
    'Vue JS',
  ];

  const industries = [
    'Финтех',
    'Мультимедиа',
    'eCommerce',
    'Гостиничный бизнес и туризм',
    'Enterpise',
    'Промышленность',
    'Логистика',
    'Недвижимость',
    'Телекоммуникации',
    'Авиация',
    'Ритейл',
    'Нефть и газ',
    'Другое',
  ];

  const typeDev = ['Web', 'Desktop', 'Нужна консультация'];

  return (
    <div className="outstaffMain">
      <HeaderOutstaff main={true} />
      <OutstaffCallback
        childFromMenu={CallBackMenuOutstaffState}
        y="-0"
        x="0"
        isOpen={isVisibleCallbackOutstaff}
        close={setVisibleCallbackOutstaff}
      />
      <div className="outstaff_title">
        {max > 560 && (
          <img className="eagleOutstaff" src="/images/sova.png" alt="" />
        )}

        <div id="trigger1" className="outstaff_title_content">
          <h1>
            Аутстаффинг разработки
            <br />
            <span>ВАША ВЫДЕЛЕННАЯ КОМАНДА.</span>
          </h1>
        </div>
      </div>
      <div className="outstaffCompanies">
        <h1> Нам доверяют:</h1>
        <div className="containerImages">
          {images.map((image: any) => (
            <img src={`/images/${image}`} />
          ))}
        </div>
        {max < 560 && (
          <div>
            <button
              onClick={() => {
                setCallBackMenuOutstaffState(true);
                setVisibleCallbackOutstaff(true);
              }}
            >
              Стать клиентом
            </button>
          </div>
        )}
      </div>
      <div className="advantages">
        {/* <img className="eagleOutstaff" src="/images/sova.png" alt="" /> */}
        <div className="advantagesTitle">
          <h1> Преимущества</h1>

          {max > 560 && <span>elgrow </span>}
        </div>
        <div className="advantagesList">
          <div className="advantagesItem">
            <div className="advantagesNum">01</div>
            <div className="advantagesContent">
              <span className="advantagesContentTitle">
                Опыт (15 лет)
                <div className="dot"></div>
              </span>
              <span className="advantagesContentText">
                Финтех, авиация, телекоммуникация, логистика, гос. сектор.
              </span>
            </div>
          </div>
          <div className="advantagesItem">
            <div className="advantagesNum">02</div>
            <div className="advantagesContent">
              <span className="advantagesContentTitle">
                Работающие проекты (50+)
                <div className="dot"></div>
              </span>
              <span className="advantagesContentText">
                Промышленная эксплуатация, реальные пользователи, энтерпрайз
                и крупный бизнес.
              </span>
            </div>
          </div>
          <div style={{ border: 'none' }} className="advantagesItem">
            <div className="advantagesNum">03</div>
            <div className="advantagesContent">
              <span className="advantagesContentTitle">
                Быстрый запуск (до двух недель)
                <div className="dot"></div>
              </span>
              <span className="advantagesContentText">
                Сбор полноценной команды и внедрение в ваш проект.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="moreAdvantages">
        <div className="advantagesTitle">
          <h1> Еще преимущества</h1>
          {max > 560 && <span>elgrow </span>}
        </div>
        <div className="advantagesList">
          <div className="advantagesItem">
            <div className="advantagesContent">
              <span className="advantagesContentTitle">
                Высокий профессиональный уровень
                <div className="dot"></div>
              </span>
              <span className="advantagesContentText">
                Экспертиза в различных сферах среднего и крупного бизнеса наших
                специалистов поможет грамотно реализовать ваш проект.
              </span>
            </div>
          </div>
          <div className="advantagesItem">
            <div className="advantagesContent">
              <span className="advantagesContentTitle">
                Гибкость и масштабируемость
                <div className="dot"></div>
              </span>
              <span className="advantagesContentText">
                От 1 middle+ фронтендера до полноценной команды. Легко
                увеличиваем или сокращаем штат проекта в зависимости от задач.
              </span>
            </div>
          </div>
          <div className="advantagesItem">
            <div className="advantagesContent">
              <span className="advantagesContentTitle">
                Прозрачность
                <div className="dot"></div>
              </span>
              <span className="advantagesContentText">
                Полный контроль на всех этапах разработки. Jira, отчетность,
                ежедневные обновления репозитория.
              </span>
            </div>
          </div>
          <div className="advantagesItem">
            <div className="advantagesContent">
              <span className="advantagesContentTitle">
                Гарантии
                <div className="dot"></div>
              </span>
              <span className="advantagesContentText">
                Договорные обязательства замены специалиста по вашему желанию.
                Сроки выполнения задач не зависят от человеческого фактора.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pricesMain">
        <div className="pricesNav">
          <div className="pricesNavTitle"> Цены </div>
          <div className="pricesNavContent">
            {navItems.map((navItem: string) => (
              <div
                onClick={() => setActive(navItem)}
                className={`pricesNavItem ${
                  active === navItem ? 'active' : ''
                }`}
              >
                <span>{navItem} </span>
              </div>
            ))}
          </div>
        </div>
        <div className="pricesContent">
          <div className="pricesList">
            <div className="pricesTime">
              {max > 560 && <div></div>}
              <div>Час </div>
              <div>Месяц </div>
            </div>
            <div className="pricesContentItem">
              <div className="skill"> <span>Middle </span> </div>
              <div className="hour">
                <span> {price?.middle.hour}</span>
              </div>
              <div className="fulltime">
                <span> {price?.middle.fulltime}</span>
              </div>
            </div>

            <div className="pricesContentItem">
              <div className="skill"> <span>Middle+</span></div>
              <div className="hour">
                <span> {price?.middlePlus.hour} </span>
              </div>
              <div className="fulltime">
                <span>{price?.middlePlus.fulltime}</span>
              </div>
            </div>

            <div className="pricesContentItem">
              <div className="skill"><span> Senior</span></div>
              <div className="hour">
                <span>{price?.senior.hour}</span>
              </div>
              <div className="fulltime">
                <span>{price?.senior.fulltime} </span>
              </div>
            </div>
          </div>
          <div className="pricesSliderContainer">
            <Slider
              className="pricesSlider"
              onChange={handleSliderChange}
              max={100}
              railStyle={{
                height: '10px',
                background: '#F6F6F6',
              }}
              trackStyle={{
                height: '10px',
                background: '#F6F6F6',
              }}
              handleStyle={{
                width: '20px',
                height: '20px',
                backgroundColor: '#3ECE5D',
                border: 'none',
                boxShadow: 'none',
              }}
            />
            <div className="timeWorkContainer">
              <div style={max < 560 ? { display: 'flex' } : {}}>
                <span>&lt;</span>
                <span className="timeWork">3 мес.</span>
              </div>
              <div className="priceWithDiscount">
                <span className="timeWork">3 - 6 мес.</span>
                <span className="discount">-10%</span>
              </div>
              <div style={{ display: 'flex' }}>
                <span>&gt;</span>
                <div className="priceWithDiscount">
                  <span className="timeWork">6 мес.</span>
                  <span className="discount">-20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="becomeClient">
        <Swiper
          allowTouchMove={false}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          speed={1000}
          simulateTouch={false}
          nested={true}
          onSwiper={(swiper) => (swiperRefParent.current = swiper)}
        >
          <SwiperSlide>
            <div className="becomeClient">
              <div className="briefly">
                <div className="brieflyText">
                  Стать <br /> клиентом
                </div>
                <div
                  onClick={() => {
                    setCallBackMenuOutstaffState(true);
                    setVisibleCallbackOutstaff(true);
                  }}
                  className="brieflyText2"
                >
                  <img src="/images/greenArrowLeft.svg" alt="" />
                  Кратко
                </div>
                <div className="infoBlock">
                  <div className="telegram">
                    <a href="https://t.me/Elgrow_dev">
                      <img src="/images/telegram-small1440.svg" alt="" />
                      Elgrow_dev
                    </a>
                  </div>
                  <div className="mail">
                    <a href="mailto:info@elgrow.ru">
                      <img src="/images/fluent_mail-20-filled.svg" alt="" />
                      info@elgrow.ru
                    </a>
                  </div>
                </div>
              </div>
              <div className="detail">
                <div onClick={handleNextSlideParent} className="detailText">
                  Подробно
                  <img src="/images/greenArrowRight.svg" alt="" />
                </div>

                <div className="logoText">
                  e<span className="letterL">l</span>grow.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="getPrice">
              <div className="getPriceTitle">Запросить стоимость</div>

              <div className="getPrice_pagination_container">
                <div className="getPrice_pagination_content"></div>
              </div>
              <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                speed={1000}
                simulateTouch={false}
                allowTouchMove={false}
                pagination={{
                  el: '.getPrice_pagination_content',
                  type: 'bullets',
                  clickable: true,
                  bulletClass: 'getPriceItemNav',
                  bulletActiveClass: 'getPriceItemNav_active',
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
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                <SwiperSlide>
                  <div className="getPriceContent">
                    <div className="getPriceContentTitle">Отрасли</div>
                    <div className="inputs">
                      {industries.map((industries: string) => (
                        <CustomRadioButton
                          label={industries}
                          checked={selectedOption === industries}
                          onChange={handleOptionChange}
                        />
                      ))}
                    </div>
                    <div onClick={handleNextSlide} className="nextSlideText">
                      <span> Следующий </span>
                      <img src="/images/greyArrow.svg" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="getPriceContent">
                    <div className="getPriceContentTitle">Тип ПО</div>
                    <div className="inputs">
                      {typeDev.map((type: string) => (
                        <label className="checkbox-label">
                          <input
                            checked={typeNavState === type}
                            onChange={() => setTypeNavState(type)}
                            type="checkbox"
                            className="checkbox"
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                    <div onClick={handleNextSlide} className="nextSlideText">
                      <span> Следующий </span>
                      <img src="/images/greyArrow.svg" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="getPriceContent">
                    <div className="getPriceContentTitle">
                      Продолжительность (примерно)
                    </div>
                    <div className="inputs">
                      <div className="sliderContainer">
                        <Slider
                          className="SliderTimer"
                          onChange={handleSliderTimer}
                          max={100}
                          railStyle={{
                            height: '10px',
                            background: '#F6F6F6',
                          }}
                          trackStyle={{
                            height: '10px',
                            background: '#F6F6F6',
                          }}
                          handleStyle={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: '#3ECE5D',
                            border: 'none',
                            boxShadow: 'none',
                          }}
                        />
                        <div className="timeWorkContainer">
                          <div>
                            <span>&lt;</span>
                            <span className="timeWork">3 месяцев</span>
                          </div>
                          <div className="priceWithDiscount">
                            <span className="timeWork">3 - 6 месяцев</span>
                          </div>
                          <div className="priceWithDiscount">
                            <span className="timeWork">6 месяцев-1 год</span>
                          </div>
                          <div className="priceWithDiscount">
                            <span className="timeWork">1 год+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="findCost">Узнать стоимость</button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default outstaff;

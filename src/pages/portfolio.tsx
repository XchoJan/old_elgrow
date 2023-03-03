import Header from '../Components/Header';
import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import CallBackMenu from 'src/Components/CallBackMenu';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';

const Portfolio = () => {
  const [isVisibleCallbackMenu, setVisibleCallbackMenu] = useState(false);

  const [max, setMax]: any = useState(0);

  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  const navigation = [
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
  ];
  return (
    <div>
      <Header />
      <Swiper
        speed={1000}
        spaceBetween={45}
        slidesPerView={1.5}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            direction: 'vertical',
            spaceBetween: 0,
          },
          561: {
            slidesPerView: 1.5,
            direction: 'horizontal',
            spaceBetween: 45,
          },
        }}
        onSlidePrevTransitionStart={(swiper: any) => {
          if (swiper.activeIndex === 0 && max > 560) {
            let pagination: HTMLElement | null = document.querySelector(
              '.portfolio_pagination_content',
            );
            let slides: NodeList = document.querySelectorAll('.swiper-slide');
            slides.forEach((slide: HTMLElement | any) => {
              slide!.style.width = max / 1.5 - 15 + 'px';
            });

            let slide2 = swiper.slides[2];
            let slide1 = swiper.slides[1];

            slide2.children[0].children[1].style.width = '28%';
            slide1.children[0].children[1].style.width = '54%';

            swiper.slides[1].style.marginLeft = '0px';
            pagination!.style.marginLeft = '68vw';
            let el = swiper.slides[2];
            el.style.position = 'absolute';
            el.style.paddingTop = '64px';
            el.style.left = '90%';
            el.style.transition = '0.1s';
          }
        }}
        onSlideChangeTransitionStart={(swiper: any) => {
          if (swiper.activeIndex === 1 && max > 560) {
            let pagination: HTMLElement | null = document.querySelector(
              '.portfolio_pagination_content',
            );
            let slides: NodeList = document.querySelectorAll('.swiper-slide');
            slides.forEach((slide: HTMLElement | any) => {
              slide!.style.width = 'max-content';
            });

            pagination!.style.marginLeft = '31%';
            let slide2 = swiper.slides[2];
            let slide1 = swiper.slides[1];
            slide2.style.position = 'static';
            slide2.style.paddingTop = '0px';
            slide2.style.transition = '0.5s';

            slide2.children[0].children[1].style.width = '282px';
            slide1.children[0].children[1].style.width = '282px';
            swiper.slides[1].style.width = 'max-content';
            swiper.slides[1].style.transition = '0.5s';
            swiper.slides[1].style.marginLeft = '10vw';

            let slide4 = swiper.slides[3];

            slide4.style.paddingLeft = '0px';
          }
        }}
        pagination={{
          el: '.portfolio_pagination_content',
          type: 'bullets',
          clickable: true,
          bulletClass: 'portfolio_pagination_content_year',
          bulletActiveClass: 'portfolio_pagination_content_year_active',
          renderBullet: function (index, className) {
            console.log(index);
            return (
              '<span class="' + className + '">' + navigation[index] + '</span>'
            );
          },
        }}
        modules={[Mousewheel, Pagination]}
        mousewheel={{
          invert: false,
        }}
      >
        <SwiperSlide>
          <div className="portfolio_main">
            <div className="portfolio_main_title">
              <h1>Портфолио</h1>
            </div>
            <div className="portfolio_main_content">
              <h3>
                Еще оформляем, но обо всех кейсах <br />
                можем рассказать лично
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_image">
            <img src="/images/portfolio1.png" alt="" />
            <span>
              Мобильное приложение по управлению <br /> парковками аэропорта
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={
            max > 560
              ? {
                  position: 'absolute',
                  left: '90%',
                  paddingTop: '64px',
                }
              : {}
          }
        >
          <div className="portfolio_image">
            <img src="/images/portfolio2.png" alt="" />
            <span>Интернет-магазин брендовой женской одежды</span>
          </div>
        </SwiperSlide>
        <SwiperSlide style={max > 560 ? { paddingLeft: '30vw' } : {}}>
          <div className="portfolio_image">
            <img src="/images/portfolio1.png" alt="" />
            <span>
              Мобильное приложение по управлению <br /> парковками аэропорта
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_image">
            <img src="/images/portfolio1.png" alt="" />
            <span>
              Мобильное приложение по управлению <br /> парковками аэропорта
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_image">
            <img src="/images/portfolio1.png" alt="" />
            <span>
              Мобильное приложение по управлению <br /> парковками аэропорта
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_image">
            <img src="/images/portfolio1.png" alt="" />
            <span>
              Мобильное приложение по управлению <br /> парковками аэропорта
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_image">
            <img src="/images/portfolio1.png" alt="" />
            <span>
              Мобильное приложение по управлению <br /> парковками аэропорта
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="portfolio_pagination_container">
        <div className="portfolio_pagination_content"></div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        onClick={() => setVisibleCallbackMenu(true)}
        className="portfolio_client"
      >
        <span> СТАТЬ КЛИЕНТОМ</span>
      </motion.div>
      <CallBackMenu
        y="0"
        x="0"
        isOpen={isVisibleCallbackMenu}
        close={setVisibleCallbackMenu}
      />
    </div>
  );
};

export default Portfolio;

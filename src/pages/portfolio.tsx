import Header from '../Components/Header';
import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import CallBackMenu from 'src/Components/CallBackMenu';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';

const Portfolio = () => {
  const [isVisibleCallbackMenu, setVisibleCallbackMenu] = useState(false);

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
        spaceBetween={45}
        slidesPerView={1.5}
        onSlidePrevTransitionEnd={(swiper: any) => {
          if (swiper.activeIndex === 0) {
            let pagination: HTMLElement | null = document.querySelector(
              '.portfolio_pagination',
            );

            pagination!.style.marginLeft = '68vw';
            let el = swiper.slides[2];
            el.style.position = 'absolute';
            el.style.paddingTop = '64px';
            el.style.left = '90%';
            el.style.transition = '0.1s';
          }
        }}
        onSlideChangeTransitionStart={(swiper: any) => {
          if (swiper.activeIndex === 1) {
            let pagination: HTMLElement | null = document.querySelector(
              '.portfolio_pagination',
            );

            pagination!.style.marginLeft = '25vw';
            let slide2 = swiper.slides[2];
            slide2.style.position = 'static';
            slide2.style.paddingTop = '0px';
            slide2.style.transition = '0.5s';

            slide2.children[0].children[1].style.width = '282px';
            swiper.slides[1].style.width = 'max-content';
            swiper.slides[1].style.transition = '0.5s';
            swiper.slides[1].style.marginLeft = '10vw';

            let slide4 = swiper.slides[3];

            slide4.style.paddingLeft = '0px';
          }
        }}
        pagination={{
          el: '.portfolio_pagination',
          type: 'bullets',
          clickable: true,
          bulletClass: 'portfolio_pagination_year',
          bulletActiveClass: 'portfolio_pagination_year_active',
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
        <SwiperSlide style={{ paddingLeft: '16vw' }}>
          <div className="portfolio_image">
            <img src="/images/portfolio1.png" alt="" />
            <span>
              Мобильное приложение по управлению <br /> парковками аэропорта
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            position: 'absolute',
            left: '90%',
            paddingTop: '64px',
          }}
        >
          <div className="portfolio_image">
            <img src="/images/portfolio2.png" alt="" />
            <span style={{ width: '279px' }}>
              Интернет-магазин брендовой женской одежды
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingLeft: '30vw' }}>
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
      <div style={{ overflow: 'hidden' }}>
        <div className="portfolio_pagination"></div>
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

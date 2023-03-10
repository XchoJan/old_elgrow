import Header from '../Components/Header';
import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import CallBackMenu from 'src/Components/CallBackMenu';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';
import { useRouter } from 'next/router';

const Portfolio = () => {
  const [isVisibleCallbackMenu, setVisibleCallbackMenu] = useState(false);
  const router = useRouter();

  const [max, setMax]: any = useState(0);
  let firtImageRight: CSSStyleDeclaration | null = null;

  useEffect(() => {
    let firstImage: any = document.querySelector('.portfolio_image_first');

    if (firstImage) {
      firtImageRight = window.getComputedStyle(firstImage);
    }

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
    <div id="mainContainer">
      <Header />
      <Swiper
        id="mainSlider"
        speed={1000}
        spaceBetween={45}
        breakpoints={{
          320: {
            slidesPerView: 1,
            direction: 'vertical',
            spaceBetween: 100,
          },
          561: {
            slidesPerView: 1,
            direction: 'horizontal',
            spaceBetween: 45,
          },
        }}
        onSlideNextTransitionStart={(swiper: any) => {
          if (max <= 560) {
            let pagination: HTMLElement | null = document.querySelector(
              '.portfolio_pagination_content',
            );
            pagination!.scrollLeft += 50;
          }
        }}
        onSlidePrevTransitionEnd={(swiper: any) => {
          if (swiper.activeIndex === 0 && max > 560) {
            let firstImage: any = document.querySelector(
              '.portfolio_image_first',
            );
            let secondImage: HTMLElement | null = document.querySelector(
              '.portfolio_image_second',
            );

            firstImage!.style.right = firtImageRight;

            secondImage!.style.left = '87vw';
          }
        }}
        onSlidePrevTransitionStart={(swiper: any) => {
          if (max <= 560) {
            let pagination: HTMLElement | null = document.querySelector(
              '.portfolio_pagination_content',
            );
            pagination!.scrollLeft -= 50;
          }

          if (swiper.activeIndex === 0 && max > 560) {
            let pagination: HTMLElement | null = document.querySelector(
              '.portfolio_pagination_content',
            );
            pagination!.style.marginLeft = '68vw';
          }
        }}
        onSlideChangeTransitionStart={(swiper: any) => {
          if (swiper.activeIndex > 0 && max > 560) {
            let spanImage: any = document.querySelectorAll('.portfolio_image');

            spanImage.forEach((span: HTMLElement | any) => {
              span.children[1]!.style.width = 'auto';
            });
            let pagination: HTMLElement | null = document.querySelector(
              '.portfolio_pagination_content',
            );

            let firstImage: any = document.querySelector(
              '.portfolio_image_first',
            );

            firstImage!.style.right = '-600px';

            let secondImage: HTMLElement | null = document.querySelector(
              '.portfolio_image_second',
            );
            secondImage!.style.left = '130vw';
            let mainSlides = swiper.slides;
            let activeMainSlide = mainSlides.filter(
              (slide: HTMLElement | any) => slide.className.includes('active'),
            );
            let subSlides = activeMainSlide[0].children[0].children[0];

            Array.from(subSlides.children).forEach(
              (slide: HTMLElement | any) => {
                slide!.style.width = 'max-content';
              },
            );

            pagination!.style.marginLeft = '31%';
          }
        }}
        pagination={{
          el: '.portfolio_pagination_content',
          type: 'bullets',
          clickable: true,
          bulletClass: 'portfolio_pagination_content_year',
          bulletActiveClass: 'portfolio_pagination_content_year_active',
          renderBullet: function (index, className) {
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
        <SwiperSlide id="logoSlide">
          {max > 560 ? (
            <>
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
              <div
                onClick={() => router.push('/aviationTrainingCenter')}
                className="portfolio_image_first"
              >
                <img src="/images/portfolio1.png" alt="" />
                <span>
                  Мобильное приложение по управлению <br /> парковками аэропорта
                </span>
              </div>
              <div className="portfolio_image_second">
                <img src="/images/portfolio2.png" alt="" />
                <span>
                  Интернет-магазин брендовой
                  <br /> женской одежды
                </span>
              </div>
            </>
          ) : (
            <>
              <Swiper
                id="firstSlideOnPhone"
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    direction: 'vertical',
                    spaceBetween: 45,
                  },
                  561: {
                    slidesPerView: 2,
                    direction: 'horizontal',
                    spaceBetween: 45,
                  },
                }}
                spaceBetween={45}
                slidesPerView={2}
                modules={[Mousewheel]}
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
                    <img src="/images/portfolio2.png" alt="" />
                    <span>
                      Интернет-магазин брендовой
                      <br /> женской одежды
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    onClick={() => router.push('/aviationTrainingCenter')}
                    className="portfolio_image"
                  >
                    <img src="/images/portfolio1.png" alt="" />
                    <span>
                      Мобильное приложение по управлению <br /> парковками
                      аэропорта
                    </span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 2,
                direction: 'vertical',
                spaceBetween: 45,
              },
              561: {
                slidesPerView: 2,
                direction: 'horizontal',
                spaceBetween: 45,
              },
            }}
            speed={1000}
            nested={true}
            spaceBetween={45}
            slidesPerView={2}
            modules={[Mousewheel]}
            mousewheel={{
              invert: false,
            }}
          >
            <SwiperSlide>
              <div
                onClick={() => router.push('/aviationTrainingCenter')}
                className="portfolio_image"
              >
                <img src="/images/portfolio1.png" alt="" />
                <span>
                  Мобильное приложение по управлению <br /> парковками аэропорта
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide id="absoluteSlide">
              <div className="portfolio_image">
                <img src="/images/portfolio2.png" alt="" />
                <span>
                  Интернет-магазин брендовой
                  <br /> женской одежды
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => router.push('/aviationTrainingCenter')}
                className="portfolio_image"
              >
                <img src="/images/portfolio1.png" alt="" />
                <span>
                  Мобильное приложение по управлению <br /> парковками аэропорта
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>

        <SwiperSlide>
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 2,
                direction: 'vertical',
                spaceBetween: 92,
              },
              561: {
                slidesPerView: 2,
                direction: 'horizontal',
                spaceBetween: 45,
              },
            }}
            spaceBetween={45}
            slidesPerView={2}
            modules={[Mousewheel]}
            mousewheel={{
              invert: false,
            }}
          >
            <SwiperSlide>
              <div
                onClick={() => router.push('/aviationTrainingCenter')}
                className="portfolio_image"
              >
                <img src="/images/portfolio1.png" alt="" />
                <span>
                  Мобильное приложение по управлению <br /> парковками аэропорта
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => router.push('/aviationTrainingCenter')}
                className="portfolio_image"
              >
                <img src="/images/portfolio1.png" alt="" />
                <span>
                  Мобильное приложение по управлению <br /> парковками аэропорта
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>

        <SwiperSlide>
          <div
            onClick={() => router.push('/aviationTrainingCenter')}
            className="portfolio_image"
          >
            <img src="/images/portfolio1.png" alt="" />
            <span>
              Мобильное приложение по управлению <br /> парковками аэропорта
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onClick={() => router.push('/aviationTrainingCenter')}
            className="portfolio_image"
          >
            <img src="/images/portfolio1.png" alt="" />
            <span>
              Мобильное приложение по управлению <br /> парковками аэропорта
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onClick={() => router.push('/aviationTrainingCenter')}
            className="portfolio_image"
          >
            <img src="/images/portfolio1.png" alt="" />
            <span>
              Мобильное приложение по управлению <br /> парковками аэропорта
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onClick={() => router.push('/aviationTrainingCenter')}
            className="portfolio_image"
          >
            <img src="/images/portfolio1.png" alt="" />
            <span>
              Мобильное приложение по управлению <br /> парковками аэропорта
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onClick={() => router.push('/aviationTrainingCenter')}
            className="portfolio_image"
          >
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

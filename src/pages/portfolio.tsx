import Header from '../Components/Header';
import Menu from '../Components/Menu';
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import CallBackMenu from 'src/Components/CallBackMenu';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Portfolio = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [topOffset, setTopOffset] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const router = useRouter();

  const [max, setMax]: any = useState(0);

  const navItems = [
    { id: '2023' },
    { id: '2022' },
    { id: '2021' },
    { id: '2020' },
    { id: '2019' },
    { id: '2018' },
    { id: '2017' },
  ];

  // const navigation = ['2023', '2022', '2021', '2020', '2019'];

  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  function getCurrentBlock() {
    let currentBlock = navItems[0];
    navItems.forEach((navItem) => {
      const block = document.getElementById(navItem.id);
      const blockTop = block!?.getBoundingClientRect().top;
      if (blockTop < window.innerHeight / 2) {
        currentBlock = navItem;
      }
    });
    return currentBlock;
  }

  function setActiveNavItem() {
    const currentBlock = getCurrentBlock();
    setActiveNav(currentBlock.id);
  }

  const handleScroll = () => {
    const element: any = document.querySelector('#nav');
    const { top } = element?.getBoundingClientRect();

    setIsSticky(top <= topOffset);
  };

  useEffect(() => {
    const element: any = document.querySelector('#nav');
    const data = element?.getBoundingClientRect();
    setTopOffset(element?.offsetTop);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', setActiveNavItem);
    return () => window.removeEventListener('scroll', setActiveNavItem);
  }, []);

  return (
    <div id="mainContainer">
      <Header />
      <Menu isOpen={showMenu} close={setShowMenu} />
      <div className="portfolio_main">
        <div className="portfolio_main_title">
          <h1>Портфолио</h1>
        </div>
        <div className="portfolio_main_text">
          <h3>
            Еще оформляем, но обо всех кейсах <br />
            можем рассказать лично
          </h3>
        </div>
        <div className="logoImage">
          <img src="/images/portfolioLogo.png" alt="" />
        </div>
        <div id={navItems[0].id} className="projects2023">
          <div className="NOUproject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    // onClick={() => router.push('/nouBrand')}
                    placeholderSrc={'/images/vtb.png'}
                    effect="blur"
                    src={'/images/vtb.png'}
                    alt=""
                  />
                  <span className="nda"> NDA 😞 </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">ВТБ</span>
                    <span className="projectTitle">NDA</span>
                  </div>
                  <span className="projectYear">2021-2023</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">NDA</span>
                  </div>
                  <span className="projectYear"> 2021-2023</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/vtb.png'}
                    effect="blur"
                    src={'/images/vtb.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">ВТБ</span>
              </>
            )}
          </div>
          <div className="AUZProject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/statusStroy.png'}
                    effect="blur"
                    src={'/images/statusStroy.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                    <span className="projectTitle">
                      Мобильное приложение по покупке
                      <br /> товаров для стройки и ремонта
                    </span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/statusStroy.png'}
                    effect="blur"
                    src={'/images/statusStroy.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Мобильное приложение по покупке
                  <br /> товаров для стройки и ремонта
                </span>
              </>
            )}
          </div>
          <div className="NOUproject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="available"
                    onClick={() => router.push('/nouBrand')}
                    placeholderSrc={'/images/NOULogo.png'}
                    effect="blur"
                    src={'/images/NOULogo.png'}
                    alt=""
                  />
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">e-commerce сайт</span>
                    <span className="projectTitle">
                      Интернет-магазин брендовой женской
                      <br /> одежды
                    </span>
                  </div>
                  <span className="projectYear">2023</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">e-commerce сайт</span>
                  </div>
                  <span className="projectYear">2023</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    onClick={() => router.push('/nouBrand')}
                    placeholderSrc={'/images/NOULogo.png'}
                    effect="blur"
                    src={'/images/NOULogo.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Интернет-магазин брендовой женской одежды
                </span>
              </>
            )}
          </div>
          <div className="AUZProject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/utg.png'}
                    effect="blur"
                    src={'/images/utg.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">веб-сайт</span>
                    <span className="projectTitle">
                      Разработка корпоративного сайта для
                      <br /> UTG PA
                    </span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">веб-сайт</span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/utg.png'}
                    effect="blur"
                    src={'/images/utg.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Разработка корпоративного сайта для UTG PA
                </span>
              </>
            )}
          </div>
        </div>
        <div id={navItems[1].id} className="projects2022">
          <div className="NOUproject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="available"
                    onClick={() => router.push('/aviationTrainingCenter')}
                    placeholderSrc={'/images/portfolioAUZ.png'}
                    effect="blur"
                    src={'/images/portfolioAUZ.png'}
                    alt=""
                  />
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType"> веб-сервис</span>
                    <span className="projectTitle">
                      Система обучения сотрудников
                      <br />
                      оператора наземного обслуживания
                      <br /> воздушных судов
                    </span>
                  </div>
                  <span className="projectYear"> 2022</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">веб-сервис</span>
                  </div>
                  <span className="projectYear"> 2022</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    onClick={() => router.push('/aviationTrainingCenter')}
                    placeholderSrc={'/images/portfolioAUZ.png'}
                    effect="blur"
                    src={'/images/portfolioAUZ.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Система обучения сотрудников
                  <br />
                  оператора наземного обслуживания
                  <br /> воздушных судов
                </span>
              </>
            )}
          </div>
          <div className="AUZProject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/parking.png'}
                    effect="blur"
                    src={'/images/parking.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                    <span className="projectTitle">
                      Мобильное приложение по управлению
                      <br /> парковками аэропорта
                    </span>
                  </div>
                  <span className="projectYear"> 2022</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                  </div>
                  <span className="projectYear"> 2022</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/parking.png'}
                    effect="blur"
                    src={'/images/parking.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Мобильное приложение по управлению
                  <br /> парковками аэропорта
                </span>
              </>
            )}
          </div>
          <div className="NOUproject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/vauchers.png'}
                    effect="blur"
                    src={'/images/vauchers.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">
                      веб-сервис и мобильное приложение
                    </span>
                    <span className="projectTitle">
                      Автоматизация предоставления услуг
                      <br />
                      пассажирам при задержках авиарейсов и
                      <br /> других сбойных ситуациях
                    </span>
                  </div>
                  <span className="projectYear"> 2022</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">
                      веб-сервис и мобильное приложение
                    </span>
                  </div>
                  <span className="projectYear"> 2022</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/vauchers.png'}
                    effect="blur"
                    src={'/images/vauchers.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Автоматизация предоставления услуг
                  <br />
                  пассажирам при задержках авиарейсов и
                  <br /> других сбойных ситуациях
                </span>
              </>
            )}
          </div>
          <div className="AUZProject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/srm.png'}
                    effect="blur"
                    src={'/images/srm.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">
                      SRM и мобильное приложение
                    </span>
                    <span className="projectTitle">
                      Автоматизация наземного обслуживания
                      <br /> воздушных судов UTG
                    </span>
                  </div>
                  <span className="projectYear"> 2022</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">
                      SRM и мобильное приложение
                    </span>
                  </div>
                  <span className="projectYear"> 2022</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/srm.png'}
                    effect="blur"
                    src={'/images/srm.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Автоматизация наземного обслуживания
                  <br /> воздушных судов UTG
                </span>
              </>
            )}
          </div>
        </div>
        <div id={navItems[2].id} className="projects2022">
          <div className="NOUproject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/pogruzki.png'}
                    effect="blur"
                    src={'/images/pogruzki.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">
                      веб и мобильное приложение
                    </span>
                    <span className="projectTitle">
                      Сервис грузовых и пассажирских
                      <br />
                      перевозок
                    </span>
                  </div>
                  <span className="projectYear"> 2021</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">
                      веб-сервис и мобильное приложение
                    </span>
                  </div>
                  <span className="projectYear"> 2021</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/pogruzki.png'}
                    effect="blur"
                    src={'/images/pogruzki.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Сервис грузовых и пассажирских перевозок
                </span>
              </>
            )}
          </div>
          <div className="AUZProject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/beatme.png'}
                    effect="blur"
                    src={'/images/beatme.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                    <span className="projectTitle">
                      Beatme - стартап сервиса соревнований
                    </span>
                  </div>
                  <span className="projectYear"> 2021</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                  </div>
                  <span className="projectYear"> 2021</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/beatme.png'}
                    effect="blur"
                    src={'/images/beatme.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Beatme - стартап сервиса соревнований
                </span>
              </>
            )}
          </div>
          <div className="NOUproject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/NespressoPort.png'}
                    effect="blur"
                    src={'/images/NespressoPort.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                    <span className="projectTitle">
                      Nespresso - федеральный дистрибьютор
                      <br />
                      капсульных кофе-машин в США
                    </span>
                  </div>
                  <span className="projectYear"> 2021</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                  </div>
                  <span className="projectYear"> 2021</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/NespressoPort.png'}
                    effect="blur"
                    src={'/images/NespressoPort.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Nespresso - федеральный дистрибьютор
                  <br />
                  капсульных кофе-машин в США
                </span>
              </>
            )}
          </div>
        </div>
        <div id={navItems[3].id} className="projects2022">
          <div className="AUZProject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/insignia.png'}
                    effect="blur"
                    src={'/images/insignia.png'}
                    alt=""
                  />
                  <span className="nda"> NDA 😞 </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">Insignia bank</span>
                    <span className="projectTitle">NDA</span>
                  </div>
                  <span className="projectYear"> 2020</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">Insignia bank</span>
                  </div>
                  <span className="projectYear"> 2020</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/insignia.png'}
                    effect="blur"
                    src={'/images/insignia.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">NDA</span>
              </>
            )}
          </div>
          <div className="NOUproject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/OpenBankPort.png'}
                    effect="blur"
                    src={'/images/OpenBankPort.png'}
                    alt=""
                  />
                  <span className="nda"> NDA 😞 </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">Банк Открытие</span>
                    <span className="projectTitle">NDA</span>
                  </div>
                  <span className="projectYear"> 2020</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">Банк Открытие</span>
                  </div>
                  <span className="projectYear"> 2020</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/OpenBankPort.png'}
                    effect="blur"
                    src={'/images/OpenBankPort.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">NDA</span>
              </>
            )}
          </div>
          <div className="AUZProject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/KFC.png'}
                    effect="blur"
                    src={'/images/KFC.png'}
                    alt=""
                  />
                  <span className="nda"> NDA 😞 </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">KFC</span>
                    <span className="projectTitle">NDA</span>
                  </div>
                  <span className="projectYear"> 2020</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">KFC</span>
                  </div>
                  <span className="projectYear"> 2020</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/KFC.png'}
                    effect="blur"
                    src={'/images/KFC.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">NDA</span>
              </>
            )}
          </div>
          <div className="NOUproject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/LuxxyPort.png'}
                    effect="blur"
                    src={'/images/LuxxyPort.png'}
                    alt=""
                  />
                  <span className="nda"> NDA 😞 </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">Luxxy</span>
                    <span className="projectTitle">NDA</span>
                  </div>
                  <span className="projectYear"> 2020</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">Luxxy</span>
                  </div>
                  <span className="projectYear"> 2020</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/LuxxyPort.png'}
                    effect="blur"
                    src={'/images/LuxxyPort.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">NDA</span>
              </>
            )}
          </div>
          <div className="AUZProject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/federal.png'}
                    effect="blur"
                    src={'/images/federal.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">
                      веб - сайт и мобильное приложение
                    </span>
                    <span className="projectTitle">
                      Тендерная система для федерального <br /> мобильного
                      оператора
                    </span>
                  </div>
                  <span className="projectYear"> 2020</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">
                      веб - сайт и мобильное приложение
                    </span>
                  </div>
                  <span className="projectYear"> 2020</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/federal.png'}
                    effect="blur"
                    src={'/images/federal.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Тендерная система для федерального <br /> мобильного оператора
                </span>
              </>
            )}
          </div>
        </div>
        <div id={navItems[4].id} className="projects2022">
          <div className="NOUproject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/mamado.png'}
                    effect="blur"
                    src={'/images/mamado.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                    <span className="projectTitle">
                      разработка мобильного приложения
                      <br /> Mamado
                    </span>
                  </div>
                  <span className="projectYear"> 2019</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                  </div>
                  <span className="projectYear"> 2019</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/mamado.png'}
                    effect="blur"
                    src={'/images/mamado.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  разработка мобильного приложения
                  <br /> Mamado
                </span>
              </>
            )}
          </div>
          <div className="AUZProject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/cleaning.png'}
                    effect="blur"
                    src={'/images/cleaning.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">
                      SRM и мобильное приложение
                    </span>
                    <span className="projectTitle">Клининг-сервис Svoi</span>
                  </div>
                  <span className="projectYear"> 2019</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">
                      SRM и мобильное приложение
                    </span>
                  </div>
                  <span className="projectYear"> 2019</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/cleaning.png'}
                    effect="blur"
                    src={'/images/cleaning.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">Клининг-сервис Svoi</span>
              </>
            )}
          </div>
          <div className="NOUproject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/gudzone.png'}
                    effect="blur"
                    src={'/images/gudzone.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                    <span className="projectTitle">
                      Gudzone - разработка мобильного <br /> приложения
                    </span>
                  </div>
                  <span className="projectYear"> 2019</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                  </div>
                  <span className="projectYear"> 2019</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/gudzone.png'}
                    effect="blur"
                    src={'/images/gudzone.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Gudzone - разработка мобильного <br /> приложения
                </span>
              </>
            )}
          </div>
          <div className="AUZProject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/megafon.png'}
                    effect="blur"
                    src={'/images/megafon.png'}
                    alt=""
                  />
                  <span className="nda"> NDA 😞 </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">Мегафон Урал</span>
                    <span className="projectTitle">NDA</span>
                  </div>
                  <span className="projectYear"> 2019</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">Мегафон Урал</span>
                  </div>
                  <span className="projectYear"> 2019</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/megafon.png'}
                    effect="blur"
                    src={'/images/megafon.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">NDA</span>
              </>
            )}
          </div>
        </div>
        <div id={navItems[5].id} className="projects2022">
          <div className="NOUproject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/houses.png'}
                    effect="blur"
                    src={'/images/houses.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">SRM-сервис</span>
                    <span className="projectTitle">
                      Управление объектами недвижимости
                    </span>
                  </div>
                  <span className="projectYear"> 2018</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">SRM-сервис</span>
                  </div>
                  <span className="projectYear"> 2018</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/houses.png'}
                    effect="blur"
                    src={'/images/houses.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Управление объектами недвижимости
                </span>
              </>
            )}
          </div>
          <div className="AUZProject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/cowabunga.png'}
                    effect="blur"
                    src={'/images/cowabunga.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                    <span className="projectTitle">
                      Cowabunga - мобильное приложение для <br /> спортивного
                      стартапа
                    </span>
                  </div>
                  <span className="projectYear"> 2018</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                  </div>
                  <span className="projectYear"> 2018</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/cowabunga.png'}
                    effect="blur"
                    src={'/images/cowabunga.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Cowabunga - мобильное приложение для <br /> спортивного
                  стартапа
                </span>
              </>
            )}
          </div>
          <div className="NOUproject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/CoachApp.png'}
                    effect="blur"
                    src={'/images/CoachApp.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                    <span className="projectTitle">
                      CoachApp - мобильное приложение для <br /> психологической
                      помощи
                    </span>
                  </div>
                  <span className="projectYear"> 2018</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">мобильное приложение</span>
                  </div>
                  <span className="projectYear"> 2018</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/CoachApp.png'}
                    effect="blur"
                    src={'/images/CoachApp.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  CoachApp - мобильное приложение для <br /> психологической
                  помощи
                </span>
              </>
            )}
          </div>
        </div>
        <div id={navItems[6].id} className="projects2022">
          <div className="AUZProject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/management.png'}
                    effect="blur"
                    src={'/images/management.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">сайт и SRM</span>
                    <span className="projectTitle">
                      D&D Management - разработка сайта и <br /> SRM для УК
                      отелей
                    </span>
                  </div>
                  <span className="projectYear"> 2017</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">сайт и SRM</span>
                  </div>
                  <span className="projectYear"> 2017</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/management.png'}
                    effect="blur"
                    src={'/images/management.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  D&D Management - разработка сайта и <br /> SRM для УК отелей
                </span>
              </>
            )}
          </div>
          <div className="NOUproject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/tatTelekom.png'}
                    effect="blur"
                    src={'/images/tatTelekom.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">веб-сервис</span>
                    <span className="projectTitle">
                      Разработка личного кабинета абонента <br />{' '}
                      интернет-провайдера Тат Телеком
                    </span>
                  </div>
                  <span className="projectYear"> 2017</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">веб-сервис</span>
                  </div>
                  <span className="projectYear"> 2017</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/tatTelekom.png'}
                    effect="blur"
                    src={'/images/tatTelekom.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">
                  Разработка личного кабинета абонента <br />
                  интернет-провайдера Тат Телеком
                </span>
              </>
            )}
          </div>
          <div className="AUZProject">
            {max > 560 ? (
              <>
                <div className="imgContainer">
                  <LazyLoadImage
                    className="ndaImg"
                    placeholderSrc={'/images/kinostudio.png'}
                    effect="blur"
                    src={'/images/kinostudio.png'}
                    alt=""
                  />
                  <span className="processing">Еще заполняем </span>
                </div>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">интернет-магазин</span>
                    <span className="projectTitle">
                      Свердловская киностудия
                    </span>
                  </div>
                  <span className="projectYear"> 2017</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType">интернет-магазин</span>
                  </div>
                  <span className="projectYear"> 2017</span>
                </div>
                <div className="imgContainer">
                  <LazyLoadImage
                    placeholderSrc={'/images/kinostudio.png'}
                    effect="blur"
                    src={'/images/kinostudio.png'}
                    alt=""
                  />
                </div>
                <span className="projectTitle">Свердловская киностудия</span>
              </>
            )}
          </div>
        </div>
        <div id="nav" className="portfolio_pagination_container">
          <div className="portfolio_pagination_content">
            <Link
              to="2023"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className={
                activeNav === '2023'
                  ? 'portfolio_year_active'
                  : 'portfolio_year'
              }
            >
              2023
            </Link>
            <Link
              to="2022"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className={
                activeNav === '2022'
                  ? 'portfolio_year_active'
                  : 'portfolio_year'
              }
            >
              2022
            </Link>
            <Link
              to="2021"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className={
                activeNav === '2021'
                  ? 'portfolio_year_active'
                  : 'portfolio_year'
              }
            >
              2021
            </Link>
            <Link
              to="2020"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className={
                activeNav === '2020'
                  ? 'portfolio_year_active'
                  : 'portfolio_year'
              }
            >
              2020
            </Link>
            <Link
              to="2019"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className={
                activeNav === '2019'
                  ? 'portfolio_year_active'
                  : 'portfolio_year'
              }
            >
              2019
            </Link>
            <Link
              to="2018"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className={
                activeNav === '2018'
                  ? 'portfolio_year_active'
                  : 'portfolio_year'
              }
            >
              2018
            </Link>
            <Link
              to="2017"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className={
                activeNav === '2017'
                  ? 'portfolio_year_active'
                  : 'portfolio_year'
              }
            >
              2017
            </Link>
          </div>

          {isSticky && (
            <div id="nav2" className="portfolio_pagination_container_fixed">
              <div className="portfolio_pagination_content">
                <Link
                  to="2023"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={
                    activeNav === '2023'
                      ? 'portfolio_year_active'
                      : 'portfolio_year'
                  }
                >
                  2023
                </Link>
                <Link
                  to="2022"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={
                    activeNav === '2022'
                      ? 'portfolio_year_active'
                      : 'portfolio_year'
                  }
                >
                  2022
                </Link>
                <Link
                  to="2021"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={
                    activeNav === '2021'
                      ? 'portfolio_year_active'
                      : 'portfolio_year'
                  }
                >
                  2021
                </Link>
                <Link
                  to="2020"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={
                    activeNav === '2020'
                      ? 'portfolio_year_active'
                      : 'portfolio_year'
                  }
                >
                  2020
                </Link>
                <Link
                  to="2019"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={
                    activeNav === '2019'
                      ? 'portfolio_year_active'
                      : 'portfolio_year'
                  }
                >
                  2019
                </Link>
                <Link
                  to="2018"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={
                    activeNav === '2018'
                      ? 'portfolio_year_active'
                      : 'portfolio_year'
                  }
                >
                  2018
                </Link>
                <Link
                  to="2017"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={
                    activeNav === '2017'
                      ? 'portfolio_year_active'
                      : 'portfolio_year'
                  }
                >
                  2017
                </Link>
                {max > 560 && (
                  <div onClick={() => setShowMenu(true)} className="after_logo">
                    <img id="burger2" src="/images/burger2.svg" alt="" />
                    <img id="burger1" src="/images/burger.svg" alt="" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

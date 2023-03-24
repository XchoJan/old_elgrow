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

  const navItems = [{ id: '2023' }, { id: '2022' }];

  const navigation = ['2023', '2022', '2021', '2020', '2019'];

  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  function getCurrentBlock() {
    let currentBlock = navItems[0];
    navItems.forEach((navItem) => {
      const block = document.getElementById(navItem.id);
      const blockTop = block!.getBoundingClientRect().top;
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
          <div    onClick={() => router.push('/nouBrand')} className="NOUproject">
            {max > 560 ? (
              <>
                <LazyLoadImage
                  placeholderSrc={'/images/NOULogo.png'}
                  effect="blur"
                  src={'/images/NOULogo.png'}
                  alt=""
                />
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType"> e-commerce сайт</span>
                    <span className="projectTitle">
                      Интернет-магазин брендовой женской
                      <br /> одежды
                    </span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType"> e-commerce сайт</span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
                <LazyLoadImage
                  placeholderSrc={'/images/NOULogo.png'}
                  effect="blur"
                  src={'/images/NOULogo.png'}
                  alt=""
                />
                <span className="projectTitle">
                  Интернет-магазин брендовой женской
                  <br /> одежды
                </span>
              </>
            )}
          </div>
          <div    onClick={() => router.push('/nouBrand')} className="NOUproject">
            {max > 560 ? (
              <>
                <LazyLoadImage
                  placeholderSrc={'/images/NOULogo.png'}
                  effect="blur"
                  src={'/images/NOULogo.png'}
                  alt=""
                />
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType"> e-commerce сайт</span>
                    <span className="projectTitle">
                      Интернет-магазин брендовой женской
                      <br /> одежды
                    </span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType"> e-commerce сайт</span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
                <LazyLoadImage
                  placeholderSrc={'/images/NOULogo.png'}
                  effect="blur"
                  src={'/images/NOULogo.png'}
                  alt=""
                />
                <span className="projectTitle">
                  Интернет-магазин брендовой женской
                  <br /> одежды
                </span>
              </>
            )}
          </div>{' '}
          <div    onClick={() => router.push('/nouBrand')} className="NOUproject">
            {max > 560 ? (
              <>
                <LazyLoadImage
                  placeholderSrc={'/images/NOULogo.png'}
                  effect="blur"
                  src={'/images/NOULogo.png'}
                  alt=""
                />
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType"> e-commerce сайт</span>
                    <span className="projectTitle">
                      Интернет-магазин брендовой женской
                      <br /> одежды
                    </span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType"> e-commerce сайт</span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
                <LazyLoadImage
                  placeholderSrc={'/images/NOULogo.png'}
                  effect="blur"
                  src={'/images/NOULogo.png'}
                  alt=""
                />
                <span className="projectTitle">
                  Интернет-магазин брендовой женской
                  <br /> одежды
                </span>
              </>
            )}
          </div>{' '}
          <div    onClick={() => router.push('/nouBrand')} className="NOUproject">
            {max > 560 ? (
              <>
                <LazyLoadImage
                  placeholderSrc={'/images/NOULogo.png'}
                  effect="blur"
                  src={'/images/NOULogo.png'}
                  alt=""
                />
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType"> e-commerce сайт</span>
                    <span className="projectTitle">
                      Интернет-магазин брендовой женской
                      <br /> одежды
                    </span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType"> e-commerce сайт</span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
                <LazyLoadImage
                  placeholderSrc={'/images/NOULogo.png'}
                  effect="blur"
                  src={'/images/NOULogo.png'}
                  alt=""
                />
                <span className="projectTitle">
                  Интернет-магазин брендовой женской
                  <br /> одежды
                </span>
              </>
            )}
          </div>{' '}
          <div    onClick={() => router.push('/nouBrand')} className="NOUproject">
            {max > 560 ? (
              <>
                <LazyLoadImage
                  placeholderSrc={'/images/NOULogo.png'}
                  effect="blur"
                  src={'/images/NOULogo.png'}
                  alt=""
                />
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType"> e-commerce сайт</span>
                    <span className="projectTitle">
                      Интернет-магазин брендовой женской
                      <br /> одежды
                    </span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
              </>
            ) : (
              <>
                <div className="description">
                  <div className="descriptionContainer">
                    <span className="projectType"> e-commerce сайт</span>
                  </div>
                  <span className="projectYear"> 2023</span>
                </div>
                <LazyLoadImage
                  placeholderSrc={'/images/NOULogo.png'}
                  effect="blur"
                  src={'/images/NOULogo.png'}
                  alt=""
                />
                <span className="projectTitle">
                  Интернет-магазин брендовой женской
                  <br /> одежды
                </span>
              </>
            )}
          </div>
        </div>
        <div id={navItems[1].id} className="projects2022">
          <div       onClick={() => router.push('/aviationTrainingCenter')} className="AUZProject">
            {max > 560 ? (
              <>
                <LazyLoadImage
                  placeholderSrc={'/images/portfolioAUZ.png'}
                  effect="blur"
                  src={'/images/portfolioAUZ.png'}
                  alt=""
                />
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
                <LazyLoadImage
                  placeholderSrc={'/images/portfolioAUZ.png'}
                  effect="blur"
                  src={'/images/portfolioAUZ.png'}
                  alt=""
                />
                <span className="projectTitle">
                  Система обучения сотрудников
                  <br />
                  оператора наземного обслуживания
                  <br /> воздушных судов
                </span>
              </>
            )}
          </div>
          <div       onClick={() => router.push('/aviationTrainingCenter')} className="AUZProject">
            {max > 560 ? (
              <>
                <LazyLoadImage
                  placeholderSrc={'/images/portfolioAUZ.png'}
                  effect="blur"
                  src={'/images/portfolioAUZ.png'}
                  alt=""
                />
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
                <LazyLoadImage
                  placeholderSrc={'/images/portfolioAUZ.png'}
                  effect="blur"
                  src={'/images/portfolioAUZ.png'}
                  alt=""
                />
                <span className="projectTitle">
                  Система обучения сотрудников
                  <br />
                  оператора наземного обслуживания
                  <br /> воздушных судов
                </span>
              </>
            )}
          </div>
          <div       onClick={() => router.push('/aviationTrainingCenter')} className="AUZProject">
            {max > 560 ? (
              <>
                <LazyLoadImage
                  placeholderSrc={'/images/portfolioAUZ.png'}
                  effect="blur"
                  src={'/images/portfolioAUZ.png'}
                  alt=""
                />
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
                <LazyLoadImage
                  placeholderSrc={'/images/portfolioAUZ.png'}
                  effect="blur"
                  src={'/images/portfolioAUZ.png'}
                  alt=""
                />
                <span className="projectTitle">
                  Система обучения сотрудников
                  <br />
                  оператора наземного обслуживания
                  <br /> воздушных судов
                </span>
              </>
            )}
          </div>
          <div       onClick={() => router.push('/aviationTrainingCenter')} className="AUZProject">
            {max > 560 ? (
              <>
                <LazyLoadImage
                  placeholderSrc={'/images/portfolioAUZ.png'}
                  effect="blur"
                  src={'/images/portfolioAUZ.png'}
                  alt=""
                />
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
                <LazyLoadImage
                  placeholderSrc={'/images/portfolioAUZ.png'}
                  effect="blur"
                  src={'/images/portfolioAUZ.png'}
                  alt=""
                />
                <span className="projectTitle">
                  Система обучения сотрудников
                  <br />
                  оператора наземного обслуживания
                  <br /> воздушных судов
                </span>
              </>
            )}
          </div>
          <div        onClick={() => router.push('/aviationTrainingCenter')} className="AUZProject">
            {max > 560 ? (
              <>
                <LazyLoadImage
                  placeholderSrc={'/images/portfolioAUZ.png'}
                  effect="blur"
                  src={'/images/portfolioAUZ.png'}
                  alt=""
                />
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
                <LazyLoadImage
                  placeholderSrc={'/images/portfolioAUZ.png'}
                  effect="blur"
                  src={'/images/portfolioAUZ.png'}
                  alt=""
                />
                <span className="projectTitle">
                  Система обучения сотрудников
                  <br />
                  оператора наземного обслуживания
                  <br /> воздушных судов
                </span>
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
              2023{' '}
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
              2022{' '}
            </Link>
            <span className="portfolio_year">2021</span>
            <span className="portfolio_year">2020</span>
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
                  2023{' '}
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
                <span className="portfolio_year">2021</span>
                <span className="portfolio_year">2020</span>
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

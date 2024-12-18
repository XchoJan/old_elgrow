import React, { useState, useEffect } from 'react';
import OutstaffCallback from './OutstaffCallback';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useRouter } from 'next/router';

interface Props {
  main: boolean;
}

const HeaderOutstaff: React.FC<Props> = ({ main }) => {
  const [CallBackMenuOutstaffState, setCallBackMenuOutstaffState] =
    useState(true);
  const [isVisibleCallbackOutstaff, setVisibleCallbackOutstaff] =
    useState(false);
  const router = useRouter();

  const [max, setMax]: any = useState(0);
  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      //@ts-ignore
      const block3Position = document?.querySelector(
        '.advantages',
        //@ts-ignore
      ).offsetTop;
      if (scrollPosition >= block3Position) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header>
      <div
        style={{ background: !isSticky ? 'black' : 'white' }}
        className="HeaderOutstaff"
      >
        <OutstaffCallback
          childFromMenu={CallBackMenuOutstaffState}
          y="-0"
          x="0"
          isOpen={isVisibleCallbackOutstaff}
          close={setVisibleCallbackOutstaff}
        />
        <div className="headerOutstaff_top">
          <div onClick={() => router.push('/')}>
            <span
              className="logoText"
              style={{ color: !isSticky ? 'white' : 'black' }}
            >
              e<span className="letterL">l</span>grow.
            </span>
          </div>
          <div className="headerTextContainer">
            <Link
              style={{ color: !isSticky ? 'white' : 'black' }}
              to="advantages"
              spy={true}
              smooth={true}
              duration={500}
              className="headerText"
            >
              Преимущества
            </Link>

            <Link
              style={{ color: !isSticky ? 'white' : 'black' }}
              to="moreAdvantages"
              spy={true}
              smooth={true}
              duration={500}
              className="headerText"
            >
              Еще преимущества
            </Link>
            <Link
              style={{ color: !isSticky ? 'white' : 'black' }}
              to="pricesMain"
              spy={true}
              smooth={true}
              duration={500}
              className="headerText"
            >
              Цены
            </Link>
          </div>
          {max > 560 && (
            <div>
              <button
                onClick={() => {
                  setCallBackMenuOutstaffState(true);
                  setVisibleCallbackOutstaff(true);
                }}
              >
                {' '}
                Стать клиентом{' '}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderOutstaff;

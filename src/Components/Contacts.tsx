import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import CallBackMenu from './CallBackMenu';

interface Props {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  childFromMenu?: boolean;
}

const Contacts: React.FC<Props> = ({ isOpen, close, childFromMenu }) => {
  const [isVisibleCallbackMenu, setVisibleCallbackMenu] = useState(false);
  const [max, setMax] = useState(0);

  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  if (typeof window !== 'undefined' && isOpen) {
    let body: any = document.querySelector('body');

    body.style.overflowY = 'hidden';
  } else if (typeof window !== 'undefined' && !isOpen) {
    let body: any = document.querySelector('body');
    body.style.overflowY = 'auto';
  }

  if (typeof window !== 'undefined' && childFromMenu && isOpen) {
    let body: any = document.querySelector('body');
    body.style.overflowY = 'hidden';
  }

  const variants = {
    open: { y: 0, transition: { duration: 0.8 } },
    closed: {
      y: '-110%',
      transition: { duration: 0.8, delay: 0.2 },
    },
  };
  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className="contacts"
    >
      <motion.div className="contacts_logo">
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { x: 0, transition: { delay: 0.6 } },
            closed: {
              x: -1000,
              transition: { delay: 0.2 },
            },
          }}
        >
          e<span className="contacts_logo_letterL">l</span>grow.
        </motion.div>
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, transition: { delay: 1 } },
            closed: {
              opacity: 0,
              transition: { delay: 0.6 },
            },
          }}
          onClick={() => close(false)}
          className="contacts_logo_close"
        >
          <img src="/images/closeBlack.svg" alt="" />
        </motion.div>
      </motion.div>
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, transition: { delay: 0.7 } },
          closed: {
            opacity: 0,
            transition: { delay: 0.3 },
          },
        }}
        className="contacts_text1"
      >
        Где нас найти?
      </motion.div>
      <motion.div className="contacts_addresses">
        <motion.div className="contacts_addresses_adress">
          <motion.div>
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 0.6 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.6 },
                },
              }}
              className="contacts_addresses_adress_city"
            >
              Москва
            </motion.div>
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 0.7 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.5 },
                },
              }}
              className="contacts_addresses_adress_street"
            >
              ул. Складочная, д. 3 <br /> строение 4, оф. 103
            </motion.div>
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 0.8 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.4 },
                },
              }}
              className="contacts_addresses_adress_phone"
            >
              +7 495 109 90 49
            </motion.div>
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 0.9 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.3 },
                },
              }}
              className="contacts_addresses_adress_howToGet"
            >
              <span> Как добраться? </span>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="contacts_addresses_adress">
          <motion.div>
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 1 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.6 },
                },
              }}
              className="contacts_addresses_adress_city"
            >
              Екатеринбург
            </motion.div>
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 1.1 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.6 },
                },
              }}
              className="contacts_addresses_adress_street"
            >
              ул. Мамина-Сибиряка,
              <br /> строение. 145, оф. 2112
            </motion.div>
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 1.2 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.6 },
                },
              }}
              className="contacts_addresses_adress_phone"
            >
              +7 343 302 90 49
            </motion.div>
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 1.3 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.6 },
                },
              }}
              className="contacts_addresses_adress_howToGet"
            >
              <span> Как добраться? </span>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="contacts_addresses_adress">
          <motion.div>
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 1.4 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.6 },
                },
              }}
              className="contacts_addresses_adress_city"
            >
              Санкт-Петербург
            </motion.div>
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 1.5 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.6 },
                },
              }}
              className="contacts_addresses_adress_street"
            >
              ул. Зеленогорская,
              <br /> д. 4а помещ. 47-н, оф. 6
            </motion.div>
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 1.6 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.6 },
                },
              }}
              className="contacts_addresses_adress_phone"
            >
              +7 495 109 90 49
            </motion.div>
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 1.7 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.6 },
                },
              }}
              className="contacts_addresses_adress_howToGet"
            >
              <span> Как добраться? </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div style={{ width: '97vw', position: 'relative' }}>
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, transition: { delay: 0.7 } },
            closed: {
              opacity: 0,
              transition: { delay: 0.6 },
            },
          }}
          className="contacts_email"
        >
          <img src="/images/emailWhite.svg" alt="" />
          <a href="mailto:info@elgrow.ru">info@elgrow.ru</a>
        </motion.div>

        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, transition: { delay: 0.6 } },
            closed: {
              opacity: 0,
              transition: { delay: 0.6 },
            },
          }}
          onClick={() => setVisibleCallbackMenu(true)}
          className="contacts_client"
        >
          <span> СТАТЬ КЛИЕНТОМ</span>
        </motion.div>
      </motion.div>
      <CallBackMenu
        inline={max <= 560 && { height: 'auto' }}
        y="0px"
        x="0px"
        isOpen={isVisibleCallbackMenu}
        close={setVisibleCallbackMenu}
      />
    </motion.div>
  );
};

export default Contacts;

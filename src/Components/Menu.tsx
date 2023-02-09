import React, { Dispatch, SetStateAction, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import CallBackMenu from './CallBackMenu';
import Contacts from './Contacts';

interface Props {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

const Menu: React.FC<Props> = ({ isOpen, close }) => {
  const [isVisibleCallbackMenu, setVisibleCallbackMenu] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const variants = {
    open: { y: 0, transition: { duration: 0.8 } },
    closed: {
      y: '-100%',
      transition: { duration: 0.8, delay: 0.2 },
    },
  };
  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className="menu"
    >
      <Contacts isOpen={showContacts} close={setShowContacts} />
      <CallBackMenu
      y='-0'
      x='0'
        isOpen={isVisibleCallbackMenu}
        close={setVisibleCallbackMenu}
      />
      <motion.div
        onClick={() => close(false)}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, transition: { delay: 1.1 } },
          closed: {
            opacity: 0,
            transition: { delay: 0.4 },
          },
        }}
        className="menu_close"
      >
        <img src="/images/close.svg" alt="" />
      </motion.div>
      <div className="menu_contacts">
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, transition: { delay: 0.8 } },
            closed: {
              opacity: 0,
              transition: { delay: 0.4 },
            },
          }}
          className="menu_contacts_item"
        >
          <img src="/images/telegram.svg" alt="" />
          <a href="https://t.me/Elgrow_dev">Elgrow_dev</a>
        </motion.div>
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, transition: { delay: 1 } },
            closed: {
              opacity: 0,
              transition: { delay: 0.4 },
            },
          }}
          className="menu_contacts_item"
        >
          <img src="/images/email.svg" alt="" />
          <a href="mailto:info@elgrow.ru">info@elgrow.ru</a>
        </motion.div>
      </div>
      <div className="menu_navigate_container">
        <motion.span
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { x: 0, transition: { delay: 0.5 } },
            closed: {
              x: -1000,
              transition: { delay: 0.4 },
            },
          }}
          className="menu_navigate_logo"
        >
          e<span className="letterL">l</span>grow.
        </motion.span>
        <div className="menu_navigate_nav">
          <motion.span
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, transition: { delay: 0.7 } },
              closed: {
                opacity: 0,
                transition: { delay: 0.3 },
              },
            }}
          >
            Главная
          </motion.span>
          <motion.span
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, transition: { delay: 0.8 } },
              closed: {
                opacity: 0,
                transition: { delay: 0.2 },
              },
            }}
          >
            Портфолио
          </motion.span>
          <motion.span
            onClick={() => setShowContacts(true)}
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, transition: { delay: 0.9 } },
              closed: {
                opacity: 0,
                transition: { delay: 0.1 },
              },
            }}
          >
            Контакты
          </motion.span>
        </div>
      </div>
      <motion.div
        onClick={() => setVisibleCallbackMenu(true)}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, transition: { delay: 0.873 } },
          closed: {
            opacity: 0,
            transition: { delay: 0.2 },
          },
        }}
        className="menu_client"
      >
        <span> СТАТЬ КЛИЕНТОМ</span>
      </motion.div>
    </motion.div>
  );
};

export default Menu;

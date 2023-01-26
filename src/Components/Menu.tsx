import React, { Dispatch, SetStateAction } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

const Menu: React.FC<Props> = ({ isOpen, close }) => {
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
          <span>Elgrow_dev</span>
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
          <span>info@elgrow.ru</span>
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
              open: { opacity: 1, transition: { delay: 0.6 } },
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
              open: { opacity: 1, transition: { delay: 0.9 } },
              closed: {
                opacity: 0,
                transition: { delay: 0.2 },
              },
            }}
          >
            Портфолио
          </motion.span>
          <motion.span
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, transition: { delay: 1.2 } },
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

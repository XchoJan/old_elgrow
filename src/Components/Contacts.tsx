import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState } from 'react';
import CallBackMenu from './CallBackMenu';

interface Props {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

const Contacts: React.FC<Props> = ({ isOpen, close }) => {
  
  const [isVisibleCallbackMenu, setVisibleCallbackMenu] = useState(false);
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
      className="contacts"
    >
      <div className="contacts_logo">
        <div>
          e<span className="contacts_logo_letterL">l</span>grow.
        </div>
        <div onClick={() => close(false)} className="contacts_logo_close">
          <img src="/images/closeBlack.svg" alt="" />
        </div>
      </div>
      <div className="contacts_text1"> Где нас найти? </div>
      <div className="contacts_addresses">
        <div className="contacts_addresses_adress">
          <div>
            <div className="contacts_addresses_adress_city"> Москва </div>
            <div className="contacts_addresses_adress_street">
              ул. Складочная, д. 3 <br /> строение 4, оф. 103
            </div>
            <div className="contacts_addresses_adress_phone">
              +7 495 109 90 49
            </div>
            <div className="contacts_addresses_adress_howToGet">
              Как добраться?
            </div>
          </div>{' '}
        </div>
        <div className="contacts_addresses_adress">
          <div>
            <div className="contacts_addresses_adress_city"> Екатеринбург </div>
            <div className="contacts_addresses_adress_street">
              ул. Мамина-Сибиряка,
              <br /> строение. 145, оф. 2112
            </div>
            <div className="contacts_addresses_adress_phone">
              +7 343 302 90 49
            </div>
            <div className="contacts_addresses_adress_howToGet">
              Как добраться?
            </div>
          </div>
        </div>
        <div className="contacts_addresses_adress">
          <div>
            <div className="contacts_addresses_adress_city">
              Санкт-Петербург
            </div>
            <div className="contacts_addresses_adress_street">
              ул. Зеленогорская,
              <br /> д. 4а помещ. 47-н, оф. 6
            </div>
            <div className="contacts_addresses_adress_phone">
              +7 495 109 90 49
            </div>
            <div className="contacts_addresses_adress_howToGet">
              Как добраться?
            </div>
          </div>
        </div>
      </div>
      <div className="contacts_email">
        <img src="/images/emailWhite.svg" alt="" />
        <span>info@elgrow.ru</span>
      </div>

      <div
        onClick={() => setVisibleCallbackMenu(true)}
      
        className="contacts_client"
      >
        <span> СТАТЬ КЛИЕНТОМ</span>
      </div>
      <CallBackMenu
        isOpen={isVisibleCallbackMenu}
        close={setVisibleCallbackMenu}
      />
    </motion.div>
  );
};

export default Contacts;

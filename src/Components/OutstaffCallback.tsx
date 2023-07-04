import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import Input from './Input';
import { useRouter } from 'next/router';
import { useForm, useWatch } from 'react-hook-form';
import { Store as notification } from 'react-notifications-component';
import axios from 'axios';

interface Props {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  y: string;
  x: string;
  childFromMenu?: boolean;
  inline?: any;
}

const OutstaffCallback: React.FC<Props> = ({
  isOpen,
  close,
  y,
  x,
  childFromMenu,
  inline,
}) => {
  const [max, setMax]: any = useState(0);
  const [telegramState, setTelegramState]: any = useState(false);
  const [whatsAppState, setWhatsAppState]: any = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      name: '',
      money: '',
    },
  });

 
 

  if (typeof window !== 'undefined' && isOpen) {
    let body: any = document.querySelector('body');
    let callbackMenu: any = document.querySelectorAll('.contacts');

    setTimeout(() => {
      if (max <= 560) {
        console.log(callbackMenu);
        callbackMenu[0].scrollTop = 0;
        if (callbackMenu[1]) {
          callbackMenu[1].scrollTop = 0;
        }
      }
    }, 1000);

    body.style.overflowY = 'hidden';
  } else if (typeof window !== 'undefined' && !isOpen) {
    let body: any = document.querySelector('body');

    body.style.overflowY = 'auto';
  }

  if (typeof window !== 'undefined' && childFromMenu && isOpen) {
  }

  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  const variants = {
    open: { y: y, x: x, transition: { duration: 0.8 } },
    closed: {
      y: '-120%',
      x: x,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  
   

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className={'callbackMenuOutstaff'}
      style={inline}
    >
      <motion.div className="callbackMenu_contacts_container">
        <motion.div className="callbackMenu_contacts">
          <motion.div className="callbackMenu_contacts_item">
            <img src="/images/telegram.svg" alt="" />
            <a href="https://t.me/Elgrow_dev">Elgrow_dev</a>
          </motion.div>
          <motion.div className="callbackMenu_contacts_item">
            <img src="/images/email.svg" alt="" />
            <a href="mailto:info@elgrow.ru">info@elgrow.ru</a>
          </motion.div>
        </motion.div>
        <motion.div onClick={() => close(false)} className="callbackMenu_close">
          <img src="/images/close.svg" alt="" />
        </motion.div>
      </motion.div>
      <motion.div className="callbackMenu_main">
        <form>
          <motion.div className="callbackMenu_main_form">
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              className="callbackMenu_main_form_fill"
            >
              <motion.div animate={isOpen ? 'open' : 'closed'}>
                <Input
                  reactHookForm={{ ...register('name', { required: true }) }}
                  alignItems="center"
                  textarea={false}
                  placeholder="Ваше имя"
                />
              </motion.div>

              <motion.div animate={isOpen ? 'open' : 'closed'}>
                <Input
                  reactHookForm={{ ...register('phone', { required: true }) }}
                  alignItems="center"
                  textarea={false}
                  placeholder="Номер телефона"
                />
              </motion.div>
              <motion.div className="checkboxes">
                <label className="checkbox-label">
                  <input
                    checked={telegramState}
                    onChange={() => setTelegramState(!telegramState)}
                    type="checkbox"
                    className="checkbox"
                  />
                  Telegram
                  <img src="/images/telegram.svg" alt="" />
                </label>
                <label className="checkbox-label">
                  <input
                    checked={whatsAppState}
                    onChange={() => setWhatsAppState(!whatsAppState)}
                    type="checkbox"
                    className="checkbox"
                  />
                  What’s up
                  <img src="/images/whatsapp.svg" alt="" />
                </label>
              </motion.div>
              {whatsAppState || telegramState ? (
                <motion.div animate={isOpen ? 'open' : 'closed'}>
                  <Input
                    reactHookForm={{
                      ...register('phone', { required: true }),
                    }}
                    alignItems="center"
                    textarea={false}
                    placeholder="Имя пользователя"
                  />
                </motion.div>
              ) : null}
            </motion.div>

            <motion.button type="submit">Отправить</motion.button>

            {max <= 768 && (
              <motion.div
                onClick={() => router.push('/politic')}
                className="callbackMenu_main_form_politics"
              >
                <span> Политика обработки персональных данных </span>
              </motion.div>
            )}
          </motion.div>
        </form>
        <motion.div className="callbackMenu_main_container">
          <motion.div className="callbackMenu_main_staff">
            <span> или</span>
          </motion.div>
          <motion.div className="callbackMenu_main_brief">
            <motion.div
              onClick={() => router.push('/brief')}
              className="callbackMenu_main_brief_text2"
            >
              ЗАПОЛНИТЬ БРИФ
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        onClick={() => router.push('/politic')}
        className="callbackMenu_main_staff_politics"
      >
        <span> Политика обработки </span> <br />{' '}
        <span> персональных данных </span>
      </motion.div>
    </motion.div>
  );
};

export default OutstaffCallback;

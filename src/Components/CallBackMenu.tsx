import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction } from 'react';
import Input from './Input';

interface Props {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

const CallBackMenu: React.FC<Props> = ({ isOpen, close }) => {
  const budgets = ['Менее 0.5 млн', '0.5 - 1 млн', '1 - 3 млн', 'Более 3 млн'];

  const variants = {
    open: { x: '-50px', transition: { duration: 0.8 } },
    closed: {
      x: '-104%',
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className={'callbackMenu'}
    >
      <div className="callbackMenu_contacts_container">
        <div className="callbackMenu_contacts">
          <motion.div
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, transition: { delay: 0.8 } },
              closed: {
                opacity: 0,
                transition: { delay: 0.4 },
              },
            }}
            className="callbackMenu_contacts_item"
          >
            <img src="/images/telegram.svg" alt="" />
            <span>Написать в Telegram</span>
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
            className="callbackMenu_contacts_item"
          >
            <img src="/images/email.svg" alt="" />
            <span>info@elgrow.ru</span>
          </motion.div>
        </div>
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
          className="callbackMenu_close"
        >
          <img src="/images/close.svg" alt="" />
        </motion.div>
      </div>
      <div className="callbackMenu_main">
        <div className="callbackMenu_main_form">
          <div className="callbackMenu_main_form_fill">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Компания" />
            <Input placeholder="Номер телефона" />
            <Input textarea={true} placeholder="Расскажите кратко о задаче" />
            <h4> Бюджет </h4>
            <div className="callbackMenu_main_form_fill_budget_container">
              {budgets.map((budget: string) => (
                <div className="callbackMenu_main_form_fill_budget">
                  {budget}
                </div>
              ))}
            </div>
          </div>
          <button> Отправить</button>
        </div>
        <div className="callbackMenu_main_staff">
          <div className="callbackMenu_main_staff_slogan">
            <h1>
              С вами на связи <br /> <span> самые отзвывчивые : </span>
            </h1>
          </div>
          <div className="callbackMenu_main_staff_personnel">
            <div className="callbackMenu_main_staff_personnel_person">
              <img src="/images/miniPerson.png" alt="" />
              <h2>Михаил Посошнов</h2>
              <span>
                клиент - менеджер <br /> ( ответит на вопросы и <br />{' '}
                организует встречу )
              </span>
            </div>
            <div className="callbackMenu_main_staff_personnel_person">
              {' '}
              <img src="/images/miniPerson.png" alt="" />
              <h2>Максим Макаров</h2>
              <span>
                руководитель отдела <br /> маркетинга <br />( разберется в
                проблеме и <br /> предложит решение )
              </span>{' '}
            </div>
          </div>
          <div className="callbackMenu_main_staff_politics">
            Политика обработки <br /> персональных данных
          </div>
        </div>
        <div className="callbackMenu_main_brief">
          <div className="callbackMenu_main_brief_text1">или</div>
          <div className="callbackMenu_main_brief_text2">ЗАПОЛНИТЬ БРИФ</div>
        </div>
      </div>
    </motion.div>
  );
};

export default CallBackMenu;

import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction } from 'react';
import Input from './Input';

interface Props {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  y: string;
  x: string
}

const CallBackMenu: React.FC<Props> = ({ isOpen, close, y, x }) => {
  const budgets = ['Менее 0.5 млн', '0.5 - 1 млн', '1 - 3 млн', 'Более 3 млн'];

  const variants = {
    open: { y: y, x: x, transition: { duration: 0.8 } },
    closed: {
      y: '-120%',
      x: x,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const inputs = [
    'Ваше имя',
    'Компания',
    'Номер телефона',
    'Расскажите кратко о задаче',
  ];

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className={'callbackMenu'}
    >
      <motion.div className="callbackMenu_contacts_container">
        <motion.div className="callbackMenu_contacts">
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
            <a href="https://t.me/Elgrow_dev">Написать в Telegram</a>
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
            <a href="mailto:info@elgrow.ru">info@elgrow.ru</a>
          </motion.div>
        </motion.div>
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
      </motion.div>
      <motion.div className="callbackMenu_main">
        <motion.div className="callbackMenu_main_form">
          <motion.div
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, transition: { delay: 1 } },
              closed: {
                opacity: 0,
                transition: { delay: 0.4 },
              },
            }}
            className="callbackMenu_main_form_fill"
          >
            {inputs.map((input: string, idx: number) => (
              <motion.div
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                  open: { opacity: 1, transition: { delay: 0.2 * idx + 1 } },
                  closed: {
                    opacity: 0,
                    transition: { delay: 0.4 },
                  },
                }}
              >
                <Input
                  textarea={idx === 3 ? true : false}
                  placeholder={input}
                />
              </motion.div>
            ))}

            <h4> Бюджет </h4>
            <motion.div className="callbackMenu_main_form_fill_budget_container">
              {budgets.map((budget: string, idx: number) => (
                <motion.div
                  animate={isOpen ? 'open' : 'closed'}
                  variants={{
                    open: { opacity: 1, transition: { delay: 0.2 * idx + 1 } },
                    closed: {
                      opacity: 0,
                      transition: { delay: 0.4 },
                    },
                  }}
                  className="callbackMenu_main_form_fill_budget"
                >
                  {budget}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.button
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, transition: { delay: 1.8 } },
              closed: {
                opacity: 0,
                transition: { delay: 0.4 },
              },
            }}
          >
            Отправить
          </motion.button>
        </motion.div>
        <motion.div className="callbackMenu_main_staff">
          <motion.div
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, transition: { delay: 0.9 } },
              closed: {
                opacity: 0,
                transition: { delay: 0.4 },
              },
            }}
            className="callbackMenu_main_staff_slogan"
          >
            <h1>
              С вами на связи <br /> <span> самые отзвывчивые : </span>
            </h1>
          </motion.div>
          <motion.div className="callbackMenu_main_staff_personnel">
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 1.4 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.4 },
                },
              }}
              className="callbackMenu_main_staff_personnel_person"
            >
              <img src="/images/miniPerson.png" alt="" />
              <h2>Михаил Посошнов</h2>
              <span>
                клиент - менеджер <br /> ( ответит на вопросы и <br />
                организует встречу )
              </span>
            </motion.div>
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, transition: { delay: 1.2 } },
                closed: {
                  opacity: 0,
                  transition: { delay: 0.4 },
                },
              }}
              className="callbackMenu_main_staff_personnel_person"
            >
              <img src="/images/miniPerson.png" alt="" />
              <h2>Максим Макаров</h2>
              <span>
                руководитель отдела <br /> маркетинга <br />( разберется в
                проблеме и <br /> предложит решение )
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, transition: { delay: 1.5 } },
              closed: {
                opacity: 0,
                transition: { delay: 0.4 },
              },
            }}
            className="callbackMenu_main_staff_politics"
          >
            <span> Политика обработки </span> <br />{' '}
            <span> персональных данных </span>
          </motion.div>
        </motion.div>
        <motion.div className="callbackMenu_main_brief">
          <motion.div
            className="callbackMenu_main_brief_text1"
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, transition: { delay: 1 } },
              closed: {
                opacity: 0,
                transition: { delay: 0.4 },
              },
            }}
          >
            или
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
            className="callbackMenu_main_brief_text2"
          >
            ЗАПОЛНИТЬ БРИФ
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CallBackMenu;

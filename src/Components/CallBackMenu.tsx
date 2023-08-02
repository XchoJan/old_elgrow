import {motion} from "framer-motion";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import Input from "./Input";
import {useRouter} from "next/router";
import {useForm, useWatch} from "react-hook-form";
import {Store as notification} from "react-notifications-component";
import axios from "axios";

interface Props {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  y: string;
  x: string;
  childFromMenu?: boolean;
  inline?: any;
}

const CallBackMenu: React.FC<Props> = ({
                                         isOpen,
                                         close,
                                         y,
                                         x,
                                         childFromMenu,
                                         inline,
                                       }) => {
  const [max, setMax]: any = useState(0);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: {errors},
  } = useForm<any>({
    defaultValues: {
      name: "",
      money: "",
    },
  });

  const budgetWatcher = useWatch({
    control,
    name: `money`,
  });

  if (typeof window !== "undefined" && isOpen) {
    let body: any = document.querySelector("body");
    let callbackMenu: any = document.querySelectorAll(".contacts");

    // setTimeout(() => {
    //   if (max <= 560) {
    //
    //     callbackMenu[0].scrollTop = 0;
    //     if (callbackMenu[1]) {
    //       callbackMenu[1].scrollTop = 0;
    //     }
    //   }
    // }, 1000);

    body.style.overflowY = "hidden";
  } else if (typeof window !== "undefined" && !isOpen) {
    let body: any = document.querySelector("body");

    body.style.overflowY = "auto";
  }

  if (typeof window !== "undefined" && childFromMenu && isOpen) {
  }

  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  const budgets = ["Менее 0.5 млн", "0.5 - 1 млн", "1 - 3 млн", "Более 3 млн"];

  const variants = {
    open: {y: y, x: x, transition: {duration: 0.8}},
    closed: {
      y: "-120%",
      x: x,
      transition: {duration: 0.8, delay: 0.2},
    },
  };

  const notificationOptionsSuccess: any = {
    title: "Заявка отправлена",
    type: "success",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    container: "top-right",
    dismiss: {
      duration: 5000,
    },
  };
  const notificationOptionsError: any = {
    title: "Произошла ошибка отправки, попробуйте еще раз",
    type: "error",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    container: "top-right",
    dismiss: {
      duration: 5000,
    },
  };

  const sendForm = handleSubmit(async (dataForm) => {
    const response = await axios.post(
        "https://outstaff-server.elgrow.ru/api/elgrow", dataForm,
    );
    if (response.status !== 200) {
      notification.addNotification({
        ...notificationOptionsError,
      });
    } else {
      notification.addNotification({
        ...notificationOptionsSuccess,
      });
      setValue("money", ""),
          setValue("name", ""),
          setValue("company", ""),
          setValue("phone", ""),
          setValue("comment", "");
    }
  });

  return (
      <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className={"callbackMenu"}
          style={inline}
      >
        <motion.div className="callbackMenu_contacts_container">
          <motion.div className="callbackMenu_contacts">
            <motion.div className="callbackMenu_contacts_item">
              <img src="/images/telegram.svg" alt=""/>
              <a href="https://t.me/Elgrow_dev">Написать в Telegram</a>
            </motion.div>
            <motion.div className="callbackMenu_contacts_item">
              <img src="/images/email.svg" alt=""/>
              <a href="mailto:info@elgrow.ru">info@elgrow.ru</a>
            </motion.div>
          </motion.div>
          <motion.div onClick={() => close(false)} className="callbackMenu_close">
            <img src="/images/close.svg" alt=""/>
          </motion.div>
        </motion.div>
        <motion.div className="callbackMenu_main">
          <form onSubmit={sendForm}>
            <motion.div className="callbackMenu_main_form">
              <motion.div
                  animate={isOpen ? "open" : "closed"}
                  className="callbackMenu_main_form_fill"
              >
                <motion.div animate={isOpen ? "open" : "closed"}>
                  <Input
                      reactHookForm={{...register("name", {required: true})}}
                      alignItems="center"
                      textarea={false}
                      placeholder="Ваше имя"
                  />
                </motion.div>
                <motion.div animate={isOpen ? "open" : "closed"}>
                  <Input
                      reactHookForm={{
                        ...register("company", {required: true}),
                      }}
                      alignItems="center"
                      textarea={false}
                      placeholder="Компания"
                  />
                </motion.div>
                <motion.div animate={isOpen ? "open" : "closed"}>
                  <Input
                          type="number"
                         reactHookForm={{...register("phone", {required: true})}}
                         alignItems="center"
                         textarea={false}
                         placeholder="Номер телефона"
                  />
                </motion.div>
                <motion.div animate={isOpen ? "open" : "closed"}>
                  <Input
                      reactHookForm={{...register("comment", {required: true})}}
                      alignItems="center"
                      textarea={true}
                      placeholder="Расскажите кратко о задаче"
                  />
                </motion.div>

                <h4> Бюджет </h4>
                <motion.div className="callbackMenu_main_form_fill_budget_container">
                  {budgets.map((budget: string, idx: number) => (
                      <motion.div
                          onClick={() => setValue("money", budget)}
                          animate={isOpen ? "open" : "closed"}
                          className={
                            budgetWatcher === budget
                                ? "callbackMenu_main_form_fill_budget_selected"
                                : "is callbackMenu_main_form_fill_budget"
                          }
                      >
                        {budget}
                      </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.button type="submit">Отправить</motion.button>

              {max <= 768 && (
                  <motion.div
                      onClick={() => router.push("/politic")}
                      className="callbackMenu_main_form_politics"
                  >
                    <span> Политика обработки персональных данных </span>
                  </motion.div>
              )}
            </motion.div>
          </form>
          <motion.div className="callbackMenu_main_container">
            <motion.div className="callbackMenu_main_staff">
              {/* <motion.div className="callbackMenu_main_staff_slogan">
              <h1>
                С вами на связи <br /> <span> самые отзвывчивые : </span>
              </h1>
            </motion.div> */}
              {/* <motion.div className="callbackMenu_main_staff_personnel">
              <motion.div className="callbackMenu_main_staff_personnel_person">
                <img src="/images/miniPerson.png" alt="" />
                <h2>Михаил Посошнов</h2>
                <span>
                  клиент - менеджер <br /> ( ответит на вопросы и организует
                  встречу )
                </span>
              </motion.div>
              <motion.div className="callbackMenu_main_staff_personnel_person">
                <img src="/images/miniPerson.png" alt="" />
                <h2>Максим Макаров</h2>
                <span>
                  руководитель отдела маркетинга <br /> ( разберется в проблеме
                  и предложит решение )
                </span>
              </motion.div>
            </motion.div> */}
              {max > 768 && (
                  <motion.div
                      onClick={() => router.push("/politic")}
                      className="callbackMenu_main_staff_politics"
                  >
                    <span> Политика обработки </span> <br/>{" "}
                    <span> персональных данных </span>
                  </motion.div>
              )}
            </motion.div>
            <motion.div className="callbackMenu_main_brief">
              {/* <motion.div className="callbackMenu_main_brief_text1">
              или
            </motion.div> */}
              <motion.div
                  onClick={() => router.push("/brief")}
                  className="callbackMenu_main_brief_text2"
              >
                ЗАПОЛНИТЬ БРИФ
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
  );
};

export default CallBackMenu;

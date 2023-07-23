import React, {useEffect, useState} from "react";
import styles from "./HowWeWorkComponent.module.css";
import TitleText from "../TitleText/TitleText";
import HowWeWorkPoint from "../HowWeWorkPoint/HowWeWorkPoint";
import Scroll from "react-scroll";
import {useMediaQuery} from "react-responsive";

const Element = Scroll.Element;

const HowWeWorkComponent = () => {

  const [hide1024px, setHide1024px] = useState(false);
  const [hide769px, setHide769px] = useState(false);
  const [hide390px, setHide390px] = useState(false);

  const is1024px = useMediaQuery({query: "(min-width: 1024px)"});
  const is769px = useMediaQuery({query: "(min-width: 769px)"});
  const is390px = useMediaQuery({query: "(min-width: 390px)"});

  useEffect(() => {
    setHide1024px(is1024px);
    setHide769px(is769px)
    setHide390px(is390px)
  }, [is1024px, is769px, is390px]);

  return (
      <div className={styles.howWeWorkComponent}>
        <Element name="howWeWorkComponent"></Element>
        <div className={styles.title}>
          <TitleText text="Как мы работаем"/>
        </div>
        {hide769px && <div className={styles.pointsBlock}>
          <HowWeWorkPoint title="01."
                          subTitle={!hide1024px ? `Получаем ваше обращение` : `Получаем ваше\nобращение`}
                          points={!hide1024px ?
                              [
                                "Готовим порядок цифр по тем данным,\n" +
                                "     что получили, и отправляем вместе с презентацией.",
                                "Связываемся для уточнения деталей, если это необходимо.",
                                "Готовим финальную смету из следующих пунктов:\n" +
                                "     Описание предполагаемого стека и СV команды",
                              ] : [
                                "Готовим порядок цифр по тем данным,\n" +
                                "     что получили, и отправляем вместе с презентацией.",
                                "Связываемся для уточнения деталей, если это\n " +
                                "    необходимо.",
                                "Готовим финальную смету из следующих пунктов:\n" +
                                "     Описание предполагаемого стека и СV команды",
                              ]
                          }
                          description={`НЕ НАЗВАНИВАЕМ И НЕ ТРАТИМ ВАШЕ ВРЕМЯ\nНА САМОПРЕЗЕНТАЦИИ`}
          />
          <HowWeWorkPoint title="02."
                          subTitle="Заключаем договор"
                          points={!hide1024px ?
                              [
                                "НДС или без НДС",
                                "Индивидуальный график платежей или рассрочка"
                              ] : [
                                "НДС или без НДС",
                                "Индивидуальный график платежей\n     или рассрочка"
                              ]
                          }
          />
          <HowWeWorkPoint title="03."
                          subTitle={!hide1024px ? "Проектируем и отрисовываем" : `Проектируем\nи отрисовываем`}
                          points={
                            [
                              "Анализируем рынок и конкурентов",
                              "Пишем юзер-кейсы, бэклог, ТЗ и методику испытаний",
                              "Проектируем",
                              "Отрисовываем интерактивные прототипы",
                              "Рисуем несколько вариантов дизайна",
                              "Делим на этапы и вычленяем MVP"
                            ]
                          }
          />
          <HowWeWorkPoint title="04."
                          subTitle="Разрабатываем"
                          points={!hide1024px ?
                              [
                                "Разворачиваем сервера и контуры разработки",
                                "Разворачиваем БД и микросервисы",
                                "Ведем разработку согласно согласованной документации",
                              ] : [
                                "Разворачиваем сервера и контуры разработки",
                                "Разворачиваем БД и микросервисы",
                                "Ведем разработку согласно согласованной\n" +
                                "     документации",
                              ]
                          }
          />
          <HowWeWorkPoint title="05."
                          subTitle="Тестируем"
                          points={!hide1024px ?
                              [
                                "По документации",
                                "Нагрузочно",
                                "Автотестированием",
                                "Вне документации (вне сценариев поведения пользователей)",
                              ] : [
                                "По документации",
                                "Нагрузочно",
                                "Автотестированием",
                                "Вне документации\n    (вне сценариев поведения" +
                                " пользователей)",
                              ]
                          }
          />
          <HowWeWorkPoint title="06."
                          subTitle="Запускаем и поддерживаем"
                          points={
                            [
                              "Appstore и GooglePlay",
                              "Следим и дорабатываем",
                            ]
                          }
          />
        </div>}
        {!hide769px && <div className={styles.pointsBlock}>
          <HowWeWorkPoint title="01."
                          subTitle={!hide390px ? `Получаем ваше обращение` : `Получаем\nваше обращение`}
                          points={!hide390px ?
                              [
                                "Готовим порядок цифр по тем данным,\n" +
                                "     что получили, и отправляем вместе с презентацией.",
                                "Связываемся для уточнения деталей, если это необходимо.",
                                "Готовим финальную смету из следующих пунктов:\n" +
                                "     Описание предполагаемого стека и СV команды",
                              ] : [
                                "Готовим порядок цифр по тем данным,\n" +
                                "     что получили, и отправляем вместе\n" +
                                "     с презентацией.",
                                "Связываемся для уточнения деталей,\n" +
                                "     если это " +
                                "необходимо.",
                                "Готовим финальную смету из следующих пунктов:\n" +
                                "     Описание предполагаемого стека и СV команды",
                              ]
                          }
                          description={`НЕ НАЗВАНИВАЕМ\nИ НЕ ТРАТИМ ВАШЕ ВРЕМЯ\nНА САМОПРЕЗЕНТАЦИИ`}
          />
          <HowWeWorkPoint title="02."
                          subTitle="Заключаем договор"
                          points={!hide390px ?
                              [
                                "НДС или без НДС",
                                "Индивидуальный график платежей или рассрочка"
                              ] : [
                                "НДС или без НДС",
                                "Индивидуальный график платежей или рассрочка"
                              ]
                          }
          />
          <HowWeWorkPoint title="03."
                          subTitle={!hide390px ? "Проектируем и отрисовываем" : `Проектируем\nи отрисовываем`}
                          points={
                            [
                              "Анализируем рынок и конкурентов",
                              "Пишем юзер-кейсы, бэклог, ТЗ и методику\n     испытаний",
                              "Проектируем",
                              "Отрисовываем интерактивные прототипы",
                              "Рисуем несколько вариантов дизайна",
                              "Делим на этапы и вычленяем MVP"
                            ]
                          }
          />
          <HowWeWorkPoint title="04."
                          subTitle="Разрабатываем"
                          points={!hide390px ?
                              [
                                "Разворачиваем сервера и контуры разработки",
                                "Разворачиваем БД и микросервисы",
                                "Ведем разработку согласно согласованной документации",
                              ] : [
                                "Разворачиваем сервера и контуры разработки",
                                "Разворачиваем БД и микросервисы",
                                "Ведем разработку согласно согласованной\n" +
                                "     документации",
                              ]
                          }
          />
          <HowWeWorkPoint title="05."
                          subTitle="Тестируем"
                          points={!hide390px ?
                              [
                                "По документации",
                                "Нагрузочно",
                                "Автотестированием",
                                "Вне документации (вне сценариев поведения пользователей)",
                              ] : [
                                "По документации",
                                "Нагрузочно",
                                "Автотестированием",
                                "Вне документации\n    (вне сценариев поведения" +
                                " пользователей)",
                              ]
                          }
          />
          <HowWeWorkPoint title="06."
                          subTitle="Запускаем и поддерживаем"
                          points={
                            [
                              "Appstore и GooglePlay",
                              "Следим и дорабатываем",
                            ]
                          }
          />
        </div>}
      </div>
  );
};

export default HowWeWorkComponent;

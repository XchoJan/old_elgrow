import React, {useEffect, useState} from "react";
import styles from "./HowWeWorkComponent.module.css";
import TitleText from "../TitleText/TitleText";
import HowWeWorkPoint from "../HowWeWorkPoint/HowWeWorkPoint";
import Scroll from "react-scroll";
import {useMediaQuery} from "react-responsive";

const Element = Scroll.Element;

const HowWeWorkComponent = () => {

  const [hide1025px, setHide1025px] = useState(false);
  const [hide769px, setHide769px] = useState(false);
  const [hide391px, setHide391px] = useState(false);

  const is1025px = useMediaQuery({query: "(max-width: 1025px)"});
  const is769px = useMediaQuery({query: "(min-width: 769px)"});
  const is391px = useMediaQuery({query: "(max-width: 391px)"});

  useEffect(() => {
    setHide1025px(is1025px);
    setHide769px(is769px)
    setHide391px(is391px)
  }, [is1025px, is769px, is391px]);

  return (
      <div className={styles.howWeWorkComponent}>
        <Element name="howWeWorkComponent"></Element>
        <div className={styles.title}>
          <TitleText text="Как мы работаем"/>
        </div>
        {hide769px && <div className={styles.pointsBlock}>
          <HowWeWorkPoint title="01."
                          subTitle={!hide1025px ? `Получаем ваше обращение` : `Получаем ваше\nобращение`}
                          points={!hide1025px ?
                              [
                                "Готовим порядок цифр по тем данным,\n" +
                                "что получили, и отправляем вместе с презентацией.",
                                "Связываемся для уточнения деталей, если это необходимо.",
                                "Готовим финальную смету из следующих пунктов:\n" +
                                "Описание предполагаемого стека и СV команды",
                              ] : [
                                "Готовим порядок цифр по тем данным,\n" +
                                "что получили, и отправляем вместе с презентацией.",
                                "Связываемся для уточнения деталей, если это\n" +
                                "необходимо.",
                                "Готовим финальную смету из следующих пунктов:\n" +
                                "Описание предполагаемого стека и СV команды",
                              ]
                          }
                          description={`НЕ НАЗВАНИВАЕМ И НЕ ТРАТИМ ВАШЕ ВРЕМЯ\nНА САМОПРЕЗЕНТАЦИИ`}
          />
          <HowWeWorkPoint title="02."
                          subTitle="Заключаем договор"
                          points={!hide1025px ?
                              [
                                "НДС или без НДС",
                                "Индивидуальный график платежей или рассрочка"
                              ] : [
                                "НДС или без НДС",
                                "Индивидуальный график платежей\nили рассрочка"
                              ]
                          }
          />
          <HowWeWorkPoint title="03."
                          subTitle={!hide1025px ? "Проектируем и отрисовываем" : `Проектируем\nи отрисовываем`}
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
                          points={!hide1025px ?
                              [
                                "Разворачиваем сервера и контуры разработки",
                                "Разворачиваем БД и микросервисы",
                                "Ведем разработку согласно согласованной документации",
                              ] : [
                                "Разворачиваем сервера и контуры разработки",
                                "Разворачиваем БД и микросервисы",
                                "Ведем разработку согласно согласованной\n" +
                                "документации",
                              ]
                          }
          />
          <HowWeWorkPoint title="05."
                          subTitle="Тестируем"
                          points={!hide1025px ?
                              [
                                "По документации",
                                "Нагрузочно",
                                "Автотестированием",
                                "Вне документации (вне сценариев поведения пользователей)",
                              ] : [
                                "По документации",
                                "Нагрузочно",
                                "Автотестированием",
                                "Вне документации\n(вне сценариев поведения" +
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
                          subTitle={!hide391px ? `Получаем ваше обращение` : `Получаем\nваше обращение`}
                          points={!hide391px ?
                              [
                                "Готовим порядок цифр по тем данным,\n" +
                                "что получили, и отправляем вместе с\n" +
                                "презентацией.",
                                "Связываемся для уточнения деталей,\nесли это" +
                                " необходимо.",
                                "Готовим финальную смету\nиз следующих пунктов:\n" +
                                "Описание предполагаемого стека\nи СV команды",
                              ] : [
                                "Готовим порядок цифр по тем данным,\n" +
                                "что получили, и отправляем вместе\n" +
                                "с презентацией.",
                                "Связываемся для уточнения деталей,\n" +
                                "если это " +
                                "необходимо.",
                                "Готовим финальную смету из следующих пунктов:\n" +
                                "Описание предполагаемого стека и СV команды",
                              ]
                          }
                          description={`НЕ НАЗВАНИВАЕМ\nИ НЕ ТРАТИМ ВАШЕ ВРЕМЯ\nНА САМОПРЕЗЕНТАЦИИ`}
          />
          <HowWeWorkPoint title="02."
                          subTitle="Заключаем договор"
                          points={!hide391px ?
                              [
                                "НДС или без НДС",
                                "Индивидуальный график платежей\n     или рассрочка"
                              ] : [
                                "НДС или без НДС",
                                "Индивидуальный график платежей или рассрочка"
                              ]
                          }
          />
          <HowWeWorkPoint title="03."
                          subTitle={!hide391px ? "Проектируем\nи отрисовываем" : `Проектируем\nи отрисовываем`}
                          points={!hide391px ? [
                              "Анализируем рынок и конкурентов",
                              "Пишем юзер-кейсы, бэклог, ТЗ и\nметодику испытаний",
                              "Проектируем",
                              "Отрисовываем интерактивные\nпрототипы",
                              "Рисуем несколько вариантов дизайна",
                              "Делим на этапы и вычленяем MVP"
                            ] : [
                            "Анализируем рынок и конкурентов",
                            "Пишем юзер-кейсы, бэклог, ТЗ и методику\nиспытаний",
                            "Проектируем",
                            "Отрисовываем интерактивные прототипы",
                            "Рисуем несколько вариантов дизайна",
                            "Делим на этапы и вычленяем MVP"
                          ]
                          }
          />
          <HowWeWorkPoint title="04."
                          subTitle="Разрабатываем"
                          points={!hide391px ?
                              [
                                "Разворачиваем сервера и контуры\nразработки",
                                "Разворачиваем БД и микросервисы",
                                "Ведем разработку согласно\nсогласованной" +
                                " документации",
                              ] : [
                                "Разворачиваем сервера и контуры разработки",
                                "Разворачиваем БД и микросервисы",
                                "Ведем разработку согласно согласованной\n" +
                                "документации",
                              ]
                          }
          />
          <HowWeWorkPoint title="05."
                          subTitle="Тестируем"
                          points={!hide391px ?
                              [
                                "По документации",
                                "Нагрузочно",
                                "Автотестированием",
                                "Вне документации\n(вне сценариев поведения" +
                                " пользователей)",
                              ] : [
                                "По документации",
                                "Нагрузочно",
                                "Автотестированием",
                                "Вне документации\n(вне сценариев поведения" +
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

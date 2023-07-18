import React from "react";
import styles from "./HowWeWorkComponent.module.css";
import TitleText from "../TitleText/TitleText";
import HowWeWorkPoint from "../HowWeWorkPoint/HowWeWorkPoint";
import Scroll from "react-scroll";

const Element = Scroll.Element;

const HowWeWorkComponent = () => {
  return (
      <div className={styles.howWeWorkComponent}>
        <Element name="howWeWorkComponent"></Element>
        <div className={styles.title}>
          <TitleText text="Как мы работаем"/>
        </div>
        <div className={styles.pointsBlock}>
          <HowWeWorkPoint title='01.'
                          subTitle='Получаем ваше обращение'
                          points={
            [
                'Готовим порядок цифр по тем данным,\n' +
                'что получили, и отправляем вместе с презентацией.',
                'Связываемся для уточнения деталей, если это необходимо.',
                'Готовим финальную смету из следующих пунктов:\n' +
                'Описание предполагаемого стека и СV команды',
            ]
          }
          description='НЕ НАЗВАНИВАЕМ И НЕ ТРАТИМ ВАШЕ ВРЕМЯ НА САМОПРЕЗЕНТАЦИИ'
          />
          <HowWeWorkPoint title='02.'
                          subTitle='Заключаем договор'
                          points={
                            [
                              'НДС или без НДС',
                              'Индивидуальный график платежей или рассрочка'
                            ]
                          }
          />
          <HowWeWorkPoint title='03.'
                          subTitle='Проектируем и отрисовываем'
                          points={
                            [
                              'Анализируем рынок и конкурентов',
                              'Пишем юзер-кейсы, бэклог, ТЗ и методику испытаний',
                                'Проектируем',
                                'Отрисовываем интерактивные прототипы',
                                'Рисуем несколько вариантов дизайна',
                                'Делим на этапы и вычленяем MVP'
                            ]
                          }
          />
          <HowWeWorkPoint title='04.'
                          subTitle='Разрабатываем'
                          points={
                            [
                              'Разворачиваем сервера и контуры разработки',
                              'Разворачиваем БД и микросервисы',
                              'Ведем разработку согласно согласованной документации',
                            ]
                          }
          />
          <HowWeWorkPoint title='05.'
                          subTitle='Тестируем'
                          points={
                            [
                              'По документации',
                              'Нагрузочно',
                              'Автотестированием',
                              'Вне документации (вне сценариев поведения пользователей)',
                            ]
                          }
          />
          <HowWeWorkPoint title='06.'
                          subTitle='Запускаем и поддерживаем'
                          points={
                            [
                              'Appstore и GooglePlay',
                              'Следим и дорабатываем',
                            ]
                          }
          />
        </div>
      </div>
  );
};

export default HowWeWorkComponent;

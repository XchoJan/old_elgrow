import React from "react";
import styles from "./PriceComponent.module.css";
import TitleText from "../TitleText/TitleText";
import Scroll from "react-scroll";
import {Roll} from "react-awesome-reveal";

const Element = Scroll.Element;

const PriceComponent = () => {
  return (
      <div className={styles.priceComponent}>
        <Element name="priceComponent"></Element>
        <div className={styles.title}>
          <TitleText text="Цены"/>
        </div>
        <div className={styles.pricesBlock}>
          <Roll>
          <div className={styles.priceItem}>
            <div className={styles.priceTitle}>Минимально</div>
            <div className={styles.priceCount}>
              <span className={styles.pricePretext}>от</span>
              300 000
              <span className={styles.pricePretext}>₽</span>
            </div>
            <div className={styles.priceTerm}>
              <span className={styles.pricePretext}>от</span>
              2
              <span className={styles.pricePretext}>недель</span>
            </div>
          </div>
        </Roll>
          <div className={styles.line}></div>
          <Roll>
          <div className={styles.priceItem}>
            <div className={styles.priceTitle}>В среднем</div>
            <div className={styles.priceCount}>
              2 000 000
              <span className={styles.pricePretext}>₽</span>
            </div>
            <div className={styles.priceTerm}>
              3
              <span className={styles.pricePretext}>месяца</span>
            </div>
          </div>
          </Roll>
        </div>
      </div>
  );
};

export default PriceComponent;

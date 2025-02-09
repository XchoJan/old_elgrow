import React from 'react';
import styles from './PriceComponent.module.css';
import TitleText from '../TitleText/TitleText';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

const PriceComponent = () => {
  return (
    <div style={{paddingTop: 200}} id='priceComponent' className={styles.priceComponent}>
      <Element name="priceComponent"></Element>
      <div className={styles.title}>
        <TitleText text="Цены" />
      </div>
      <div className={styles.pricesBlock}>
        <div className={styles.priceItem}>
          <div className={styles.priceTitle}>Минимально</div>
          <div className={styles.priceCount}>
            <span className={styles.pricePretext}>от</span>
            300 000
            <span className={styles.pricePretext}>₽</span>
          </div>
          <div className={styles.priceTerm}>
            <span className={styles.pricePretext}>от</span>2
            <span className={styles.pricePretext}>недель</span>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.priceItem}>
          <div className={styles.priceTitle}>В среднем</div>
          <div className={styles.priceCount}>
            2 000 000
            <span className={styles.pricePretext}>₽</span>
          </div>
          <div className={styles.priceTerm}>
            3<span className={styles.pricePretext}>месяца</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceComponent;

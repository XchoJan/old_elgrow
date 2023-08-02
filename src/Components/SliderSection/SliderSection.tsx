import React, {FC, useEffect, useState} from "react";
import styles from "./SliderSection.module.css";
import AnimateButtonWithLogo
  from "../AnimateButtonWithLogo/AnimateButtonWithLogo";
import {useMediaQuery} from "react-responsive";


export type SliderPointType = {
  title: string
  text: string
}

export type SliderSectionPropsType = {
  withLogo?: boolean
  ref: any
  title: string
  points: SliderPointType[]
}

const SliderSection:FC<SliderSectionPropsType> = ({ref, title, points, withLogo}) => {
  const [hideOnMobile, setHideOnMobile] = useState(false);

  const isMobile = useMediaQuery({query: "(min-width: 767px)"});

  useEffect(() => {
    setHideOnMobile(isMobile);
  }, [isMobile]);

  return (
      <section ref={ref} className={styles.section}>
        <div className={styles.sectionTitle}>{title}</div>
        {points.map((point, index) => {
          return <div key={index} className={styles.sectionPoint}>
            <div className={styles.mainText}>
              {point.title}
            </div>
            <div className={styles.secondaryText}>
              {point.text}
            </div>
          </div>
        })}
        {withLogo && !hideOnMobile && <div className={styles.animateButtonBlock}>
          <AnimateButtonWithLogo/>
          </div>}
      </section>
  );
};

export default SliderSection;

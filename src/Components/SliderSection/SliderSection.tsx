import React, {FC} from "react";
import styles from "./SliderSection.module.css";


export type SliderPointType = {
  title: string
  text: string
}

export type SliderSectionPropsType = {
  ref: any
  title: string
  points: SliderPointType[]
}

const SliderSection:FC<SliderSectionPropsType> = ({ref, title, points}) => {
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
      </section>
  );
};

export default SliderSection;

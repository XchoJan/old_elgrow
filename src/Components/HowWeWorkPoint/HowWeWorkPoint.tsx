import React, {FC} from "react";
import styles from "./HowWeWorkPoint.module.css";

export type HowWeWorkPointPropsType = {
  title: string
  subTitle: string
  points: string[]
  description?: string
}

const HowWeWorkPoint:FC<HowWeWorkPointPropsType> = ({title, subTitle, points, description}) => {
  return (
      <div className={styles.howWeWorkPoint}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
        <div className={styles.points}>
          {points.map((point, index) => {
            return <div key={index} className={styles.pointBlock}>
              <div className={styles.dot}>•</div>
              <div className={styles.point}>{point}</div>
            </div>
          })}
        </div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
  );
};

export default HowWeWorkPoint;

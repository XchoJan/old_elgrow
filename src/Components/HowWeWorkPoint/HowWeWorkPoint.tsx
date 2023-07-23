import React, {FC, useState} from "react";
import styles from "./HowWeWorkPoint.module.css";

export type HowWeWorkPointPropsType = {
  title: string
  subTitle: string
  points: string[]
  description?: string
}

const HowWeWorkPoint: FC<HowWeWorkPointPropsType> = ({
                                                       title,
                                                       subTitle,
                                                       points,
                                                       description
                                                     }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <div className={styles.howWeWorkPoint}
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
      >

        <div className={styles.titleBlock}>
          <div
               className={isHovered ? `${styles.whiteTitle} ${styles.title}` : styles.title}>
            {title}
            <div
                className={isHovered ? styles.hoveredTitleContainer : styles.titleContainer}>
            </div>
          </div>

        </div>
        <div className={styles.subTitle}>{subTitle}</div>
        <div className={styles.points}>
          {points.map((point, index) => {
            return <div key={index} className={styles.pointBlock}>
              <div className={styles.point}><span className={styles.dotText}>•</span>{point}</div>
            </div>;
          })}
        </div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
  );
};

export default HowWeWorkPoint;

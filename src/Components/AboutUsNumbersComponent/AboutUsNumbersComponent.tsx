import React from "react";
import styles
  from "@components/AboutUsNumbersComponent/AboutUsNumbersComponent.module.css";

const stacks = ["React Native", "NodeJS", "Adobe AI", "PHP", "Swift", "Jira", "C#", ".net", "React", "Flutter", "Kotlin", "Битрикс", "Figma"];

const AboutUsNumbersComponent = () => {
  return (
      <div className={styles.aboutUsNumbersComponent}>
        <div className={styles.container}>
          <div className={styles.mainContent}>
            <div className={styles.leftBlock}>
              <h2 className={styles.leftBlockTitle}>О нас в цифрах</h2>
              <div className={styles.aboutNumbersContent}>
                <div className={styles.aboutNumbersLeftContent}>
                  <div className={styles.containerNum}>
                    <div className={styles.num}>15</div>
                    <div className={styles.content}>Лет опыта</div>
                  </div>
                  <div className={styles.containerNum}>
                    <div className={styles.num}>100+</div>
                    <div className={styles.content}>Проектов</div>
                  </div>
                </div>
                <div className={styles.aboutNumbersRightContent}>
                  <div className={styles.containerNum}>
                    <div className={styles.num}>36</div>
                    <div className={styles.content}>Человек штата</div>
                  </div>
                  <div className={styles.containerNum}>
                    <div className={styles.num}>1 млн+</div>
                    <div className={styles.content}>Часов разработки</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.parking1}>
                <img className={styles.parking1} src={`/images/parking1.png`}
                     alt="parking1"/>
              </div>
              <div className={styles.parking2}>
                <img className={styles.parking2} src={`/images/parking2.png`}
                     alt="parking2"/>
              </div>
              <div className={styles.parking3}>
                <img className={styles.parking3} src={`/images/parking3.png`}
                     alt="parking3"/>
              </div>
            </div>
          </div>
          <div className={styles.stacksBlock}>
            {stacks.map((stack, index) => {
              return <div key={index} className={styles.stackBlock}>
                <span className={styles.dot}>•</span>
                <span className={styles.stackText}> {stack}</span>
              </div>;
            })}
          </div>
        </div>
      </div>
  );
};

export default AboutUsNumbersComponent;

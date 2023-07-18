import React, {FC} from "react";
import styles from "./TitleText.module.css";


export type TitleTextPropsType = {
  text: string
}

const TitleText:FC<TitleTextPropsType> = ({text}) => {
  return (
      <h1 className={styles.title}>{text}</h1>
  );
};

export default TitleText;

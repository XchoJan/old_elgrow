import React, {FC, ReactNode} from "react";
import styles from "./PortfolioCard.module.css";

export type PortfolioCardPropsType = {
  backgroundColor: string
  title: string
  tags: string[]
  description: string
  children: ReactNode
}

const PortfolioCard:FC<PortfolioCardPropsType> = ({backgroundColor, title, tags, description, children}) => {
  return (
      <div className={styles.portfolioCard} style={{backgroundColor: backgroundColor}}>
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.tags}>
            {tags.map((tag, index) => {
              return <div className={styles.tag}>{tag}</div>
            })}
          </div>
          <div className={styles.description}>{description}</div>
        </div>
        {children}
      </div>
  );
};

export default PortfolioCard;

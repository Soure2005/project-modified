import React from "react";
import styles from "./Cards.module.css";
import { CardsData } from "../../../Data/CardsData";

const Cards = () => {
  return (
    <div className={styles.Cards}>
      {CardsData.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            className={styles.card}
            key={index}
            style={{
              background: card.color.background,
              borderColor: card.color.border,
            }}
          >
            <div className={styles.cardHeader}>
              <h5>{card.title}</h5>

              <div
                className={styles.cardIcon}
                style={{
                  background: card.color.iconBg,
                  color: card.color.iconColor,
                }}
              >
                <Icon />
              </div>
            </div>

            <h2>{card.value}</h2>

            <p>
              <span>{card.change}</span> {card.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
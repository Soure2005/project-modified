import React from "react";
import "./Cards.css";
import { CardsData } from "../../../Data/CardsData";

const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            className="card"
            key={index}
            style={{
              background: card.color.background,
              borderColor: card.color.border,
            }}
          >
            <div className="cardHeader">
              <h5>{card.title}</h5>

              <div
                className="cardIcon"
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
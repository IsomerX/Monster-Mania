import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (prop) => {
  return (
    <div className="card-list">
      {prop.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

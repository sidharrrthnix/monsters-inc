import React from "react";
import { Card } from "./card";
import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monster.map((monst) => (
        <Card key={monst.id} monster={monst} />
      ))}
    </div>
  );
};

import React from "react";

import { Card } from "../card/card.component";

import "./card-list.style.css";

export const CardList = props => (
  <div className='card-list'>
    {props.cats.map(cat => (
      <Card key={cat.id} cat={cat} />
    ))}
  </div>
);

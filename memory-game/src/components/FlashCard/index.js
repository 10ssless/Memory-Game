import React from "react";
import "./style.css";


function FlashCard(props) {
  return (
    <div className="img-container" onClick={() => props.handleClick(props.id)}>
      <img alt={props.name} src={props.link} />
    </div>
  )
}

export default FlashCard;

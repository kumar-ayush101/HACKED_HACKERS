import React from 'react';
import './Card.css';

const Card = ({ title, content, image }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      {image && <img src={image} alt="Card" />}
    </div>
  );
};

export default Card;
import React from "react";

export const BookCard = ({ image, title, authors, category }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} />
      <div className="card__block-info">
        <p>{category}</p>
        <h4>{title}</h4>
        <p>{authors}</p>
      </div>
    </div>
  );
};

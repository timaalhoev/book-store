import React from "react";

const BooksBlock = ({ imageUrl, title, name }) => {
  return (
    <div className="card">
      <img src={imageUrl} />

      <div className="card__block-info">
        <p>Computers</p>
        <h4>{title}</h4>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default BooksBlock;

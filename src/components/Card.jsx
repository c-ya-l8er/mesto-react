import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";

function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`card__like-btn ${isLiked && "card__like-btn_active"}`);
  //console.log(currentUser._id);
  function handleClick() {
    onCardClick(card);
  }
  return (
    <article className="card">
      <img
        onClick={handleClick}
        className="card__image"
        src={card.link}
        alt={card.name}
      />
      <div className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button className="card__like-btn" type="button" aria-label="Лайк" />
          <span className="card__like-count">{card.likes.length}</span>
        </div>
      </div>
      {isOwn && (
        <button onClick={handleDeleteClick}
          className="card__trash-btn"
          type="button"
          aria-label="Корзина"
        />
      )}
    </article>
  );
}

export default Card;
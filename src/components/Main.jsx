import React, { useState, useEffect, useContext } from "react";
import api from "../utils/Api.jsx";
import Card from "./Card.jsx";
import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([initialCards]) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button
          onClick={onEditAvatar}
          className="profile__avatar-btn"
          type="button"
          aria-label="Редактировать"
        >
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар"
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__username">{currentUser.name}</h1>
          <button
            onClick={onEditProfile}
            className="profile__edit-btn"
            type="button"
            aria-label="Редактировать"
          />
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__add-btn"
          type="button"
          aria-label="Добавить"
        />
      </section>

      <section className="cards" aria-label="галерея фото">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;

import React, { useState, useEffect } from "react";
import api from "../utils/Api.jsx";
import Card from "./Card.jsx";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        //console.log(userInfo);
        //console.log(newCards);
        console.log(initialCards);
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
    //     .catch(api.catch);
    // //   api.getInitialCards().then(setCards).catch(api.catch);
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
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        </button>
        <div className="profile__info">
          <h1 className="profile__username">{userName}</h1>
          <button
            onClick={onEditProfile}
            className="profile__edit-btn"
            type="button"
            aria-label="Редактировать"
          ></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__add-btn"
          type="button"
          aria-label="Добавить"
        ></button>
      </section>

      <section className="cards" aria-label="галерея фото"></section>
    </main>
  );
}

export default Main;

import React, { useState, useEffect } from "react";
import api from "../utils/Api.jsx";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup.jsx";
import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    Promise.all([api.getUserInfo()])
      .then(([userInfo]) => {
        setCurrentUser(userInfo);
        //console.log(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          title="Обновить аватар"
          name="edit-avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_type_avatar"
            id="avatar-input"
            required
            type="url"
            name="avatar"
            placeholder="Ссылка на новый аватар"
          />
          <span className="popup__input-error avatar-input-error" />
        </PopupWithForm>

        <PopupWithForm
          title="Редактировать профиль"
          name="edit-profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_type_username"
            id="username-input"
            minLength="2"
            maxLength="40"
            required
            type="text"
            name="name"
            placeholder="Имя"
          />
          <span className="popup__input-error username-input-error" />
          <input
            className="popup__input popup__input_type_about"
            id="about-input"
            minLength="2"
            maxLength="200"
            required
            type="text"
            name="about"
            placeholder="О себе"
          />
          <span className="popup__input-error about-input-error" />
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="add-card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_type_cardname"
            id="cardname-input"
            minLength="2"
            maxLength="30"
            required
            type="text"
            name="name"
            placeholder="Название"
          />
          <span className="popup__input-error cardname-input-error" />
          <input
            className="popup__input popup__input_type_link"
            id="link-input"
            required
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
          />
          <span className="popup__input-error link-input-error" />
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

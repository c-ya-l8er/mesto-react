import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";
import PopupWithForm from "./PopupWithForm.jsx";

function EditProfilePopup({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

//   function handleChange(e) {
//     setName(e.target.value);
//     setDescription(e.target.value);
//   }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        //onChange={handleChange}
        onChange={e => setName(e.target.value)}
        defaultValue={name}
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
        //onChange={handleChange}
        onChange={e => setDescription(e.target.value)}
        defaultValue={description}
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
  );
}

export default EditProfilePopup;

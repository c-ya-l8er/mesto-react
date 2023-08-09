import "../index.css";

function PopupWithForm() {
  return (
    <>
    <div className="popup popup_edit-profile">
    <div className="popup__container">
      <button
        className="popup__close-btn"
        type="button"
        aria-label="Закрыть"
      ></button>
      <h2 className="popup__title">Редактировать профиль</h2>
      <form
        className="popup__form popup__form_profile-edit-form"
        name="profile_edit_form"
        noValidate
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
        <span className="popup__input-error username-input-error"></span>
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
        <span className="popup__input-error about-input-error"></span>
        <button className="popup__submit-btn" disabled type="submit">
          Сохранить
        </button>
      </form>
    </div>
  </div>

  <div className={`popup popup_${props.name}`}>
    {/* <div className="popup popup_add-card"> */}
    <div className="popup__container">
      <button
        className="popup__close-btn"
        type="button"
        aria-label="Закрыть"
      ></button>
      <h2 className="popup__title">Новое место</h2>
      <form
        className="popup__form popup__form_new-card-form"
        name="new_card_form"
        noValidate
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
        <span className="popup__input-error cardname-input-error"></span>
        <input
          className="popup__input popup__input_type_link"
          id="link-input"
          required
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
        />
        <span className="popup__input-error link-input-error"></span>
        <button className="popup__submit-btn" disabled type="submit">
          Создать
        </button>
      </form>
    </div>
  </div>

  <div className="popup popup_confirm">
    <div className="popup__container">
      <button
        className="popup__close-btn"
        type="button"
        aria-label="Закрыть"
      ></button>
      <h2 className="popup__title">Вы уверены?</h2>
      <form
        className="popup__form popup__form_confirm-form"
        name="confirm-form"
        noValidate
      >
        <button className="popup__submit-btn" type="submit">
          Да
        </button>
      </form>
    </div>
  </div>

  <div className="popup popup_edit-avatar">
    <div className="popup__container">
      <button
        className="popup__close-btn"
        type="button"
        aria-label="Закрыть"
      ></button>
      <h2 className="popup__title">Обновить аватар</h2>
      <form
        className="popup__form popup__form_edit-avatar-form"
        name="edit_avatar_form"
        noValidate
      >
        <input
          className="popup__input popup__input_type_avatar"
          id="avatar-input"
          required
          type="url"
          name="avatar"
          placeholder="Ссылка на новый аватар"
        />
        <span className="popup__input-error avatar-input-error"></span>
        <button className="popup__submit-btn" disabled type="submit">
          Сохранить
        </button>
      </form>
    </div>
  </div>
  </>
  );
}

export default PopupWithForm;

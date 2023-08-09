import headerLogo from './images/header_logo.svg';
import "./index.css";

function App() {
  return (
    <>
      <div className="page">
        <header className="header">
          <img
            src={headerLogo}
            alt="логотип Место"
            className="header__logo"
          />
        </header>

        <main className="content">
          <section className="profile">
            <button
              className="profile__avatar-btn"
              type="button"
              aria-label="Редактировать"
            >
              <img className="profile__avatar" src="" alt="Аватар" />
            </button>
            <div className="profile__info">
              <h1 className="profile__username">Жак-Ив Кусто</h1>
              <button
                className="profile__edit-btn"
                type="button"
                aria-label="Редактировать"
              ></button>
              <p className="profile__about">Исследователь океана</p>
            </div>
            <button
              className="profile__add-btn"
              type="button"
              aria-label="Добавить"
            ></button>
          </section>

          <section className="cards" aria-label="галерея фото"></section>
        </main>

        <footer className="footer">
          <p className="footer__copyright">&copy; 2023 Mesto Russia</p>
        </footer>

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

        <div className="popup popup_add-card">
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

        <div className="popup popup_open-image">
          <figure className="popup__figure">
            <button
              className="popup__close-btn"
              type="button"
              aria-label="Закрыть"
            ></button>
            <img className="popup__image" src="#" alt="" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
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

        <template className="card-template">
          <article className="card">
            <img className="card__image" src="#" alt="" />
            <div className="card__caption">
              <h2 className="card__title"></h2>
              <div className="card__like-container">
                <button
                  className="card__like-btn"
                  type="button"
                  aria-label="Лайк"
                ></button>
                <span className="card__like-count">0</span>
              </div>
            </div>
            <button
              className="card__trash-btn"
              type="button"
              aria-label="Корзина"
            ></button>
          </article>
        </template>
      </div>
    </>
  );
}

export default App;

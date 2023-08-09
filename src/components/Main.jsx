import "../index.css";
import userAvatar from "../images/image_cousteau.jpg";

function Main() {
  //const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  //const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  //const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    //setIsEditAvatarPopupOpen(true);
    document.querySelector(".popup_edit-avatar").classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document.querySelector(".popup_edit-profile").classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    document.querySelector(".popup_add-card").classList.add("popup_opened");
  }

  function closeAllPopups() {
    document.querySelector(".popup").classList.remove("popup_opened");
  }

  return (
    <main className="content">
      <section className="profile">
        <button
          onClick={handleEditAvatarClick}
          className="profile__avatar-btn"
          type="button"
          aria-label="Редактировать"
        >
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        </button>
        <div className="profile__info">
          <h1 className="profile__username">Жак-Ив Кусто</h1>
          <button
            onClick={handleEditProfileClick}
            className="profile__edit-btn"
            type="button"
            aria-label="Редактировать"
          ></button>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button
          onClick={handleAddPlaceClick}
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

import "../index.css";

function ImagePopup() {
  return (
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
  );
}

export default ImagePopup;

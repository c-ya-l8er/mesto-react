function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_open-image ${card ? "popup_opened" : "popup"}`}>
      <figure className="popup__figure">
        <button
          onClick={onClose}
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img className="popup__image" src={card?.link} alt={card?.name} />
        <figcaption className="popup__caption">{card?.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;

function PopupWithForm({ title, name, children, isOpen, onClose, onSubmit }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
        />
        <h2 className="popup__title">{`${title}`}</h2>
        <form
          onSubmit={onSubmit}
          className={`popup__form popup__form_${name}`}
          name={`${name}_form`}
          noValidate
        >
          {children}
          <button className="popup__submit-btn" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

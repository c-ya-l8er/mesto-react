function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <article className="card">
      <img
        onClick={handleClick}
        className="card__image"
        src={card.link}
        alt={card.name}
      />
      <div className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like-btn"
            type="button"
            aria-label="Лайк"
          ></button>
          <span className="card__like-count">{card.likes.length}</span>
        </div>
      </div>
      <button
        className="card__trash-btn"
        type="button"
        aria-label="Корзина"
      ></button>
    </article>
  );
}

export default Card;

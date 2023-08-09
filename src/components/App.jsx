import "../index.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />



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
  );
}

export default App;

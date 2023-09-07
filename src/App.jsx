import { useEffect } from "react";
import "./App.css";
import { booksApiUrl } from "./constants";

function App() {
  useEffect(() => {
    (async () => {
      console.log(booksApiUrl + `&key=${import.meta.env.VITE_API_KEY}`);
      const res = await fetch(
        booksApiUrl + `&key=${import.meta.env.VITE_API_KEY}`
      );
      console.log(res);
    })();
  }, []);
  return (
    <div className="wrapper">
      <header>
        <h1>Search for books</h1>
        <div className="search">
          <input className="search__field" type="text"></input>
          <button className="search__button">Search</button>
        </div>
        {/* <img className="logo" src="../src/assets/images/fon.png" /> */}
        <div className="sort">
          <div className="sortField">
            <label>Categories</label>
            <input></input>
          </div>
          <div className="sortField">
            <label>Sorting by</label>
            <input></input>
          </div>
        </div>
      </header>
      <div className="content">
        <p>Found 446 results</p>
        <div className="card__row">
          <div className="card">
            <img />

            <div className="card__block-info">
              <p>Computers</p>
              <h4>Node.js. Путеводитель по технологиям</h4>
              <p>Кирилл Сухов</p>
            </div>
          </div>
          <div className="card">
            <img />

            <div className="card__block-info">
              <p>Computers</p>
              <h4>Node.js. Путеводитель по технологиям</h4>
              <p>Кирилл Сухов</p>
            </div>
          </div>
          <div className="card">
            <img />

            <div className="card__block-info">
              <p>Computers</p>
              <h4>Node.js. Путеводитель по технологиям</h4>
              <p>Кирилл Сухов</p>
            </div>
          </div>
          <div className="card">
            <img />

            <div className="card__block-info">
              <p>Computers</p>
              <h4>Node.js. Путеводитель по технологиям</h4>
              <p>Кирилл Сухов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

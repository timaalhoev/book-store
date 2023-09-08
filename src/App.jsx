import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { booksApiUrl } from "./constants";

import Search from "./components/Search";
import BooksBlock from "./components/booksBlock";

function App() {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    (async () => {
      const res = await fetch(
        booksApiUrl +
          `&q=${searchValue}` +
          `&key=${import.meta.env.VITE_API_KEY}`
      );
    })();
  }, []);

  const handleSubmitForm = () => {
    console.log(searchValue);
  };
  return (
    <div className="wrapper">
      <header>
        <h1>Search for books</h1>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          submitForm={handleSubmitForm}
        />
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
          <BooksBlock title="Node.js" name="Иван Васильевич" />
          <BooksBlock />
          <BooksBlock />
        </div>
      </div>
    </div>
  );
}

export default App;

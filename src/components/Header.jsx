import React from "react";
import { Search } from "./Search";

export const Header = ({ searchValue, setSearchValue, handleSubmitForm }) => {
  return (
    <header>
      <form onSubmit={handleSubmitForm}>
        <h1>Search for books</h1>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          submitForm={handleSubmitForm}
        />
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
      </form>
    </header>
  );
};

{
  /* <Header */
}
//     searchValue={searchValue}
//     setSearchValue={setSearchValue}
//     handleSubmitForm={handleSubmitForm}
//   />

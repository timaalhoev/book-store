import React from "react";
import { Search } from "./Search";
import { Controls } from "./Controls";

export const Header = ({
  searchValue,
  category,
  sort,
  setSearchValue,
  setCategory,
  setSort,
  handleSubmitForm,
}) => {
  return (
    <header>
      <form onSubmit={handleSubmitForm}>
        <h1>Search for books</h1>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          submitForm={handleSubmitForm}
        />
        <Controls
          category={category}
          sort={sort}
          setCategory={setCategory}
          setSort={setSort}
        />
      </form>
    </header>
  );
};

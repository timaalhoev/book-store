import React from "react";

export const Search = ({ searchValue, setSearchValue, submitForm }) => {
  const handleChangeInputValue = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="search">
      <input
        value={searchValue}
        onChange={handleChangeInputValue}
        className="search__field"
        type="text"
      ></input>
      {searchValue && (
        <svg
          onClick={() => setSearchValue("")}
          className="search__clearIcon"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
      <button onClick={submitForm} className="search__button">
        Search
      </button>
    </div>
  );
};

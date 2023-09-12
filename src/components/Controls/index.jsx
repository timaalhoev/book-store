import React from "react";
import "./index.scss";

export const Controls = ({ category, setCategory, sort, setSort }) => {
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  return (
    <div className="controls">
      <div className="controls__field">
        <label>Categories</label>
        <select
          className="controls__category"
          value={category}
          onChange={handleChangeCategory}
        >
          <option className="active" value="all">
            all
          </option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="history">history</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </select>
      </div>
      <div className="controls__field">
        <label>Sorting by</label>
        <select
          className="controls__sort"
          value={sort}
          onChange={handleChangeSort}
        >
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>
      </div>
    </div>
  );
};

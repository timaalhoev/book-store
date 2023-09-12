import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetBooks } from "../hooks/getBooks";
import { BookCard } from "../components/BookCard";
import { Header } from "../components/Header";

export const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("relevance");
  const { getBooks, books, totalBooks, isLoading, error } = useGetBooks();

  const handleSubmitForm = (event) => {
    event?.preventDefault();
    getBooks({
      searchValue: searchValue,
      category: category,
      orderBy: sort,
    });
    setSearchValue("");
  };

  return (
    <>
      <Header
        searchValue={searchValue}
        category={category}
        sort={sort}
        setSearchValue={setSearchValue}
        setCategory={setCategory}
        setSort={setSort}
        handleSubmitForm={handleSubmitForm}
      />
      <div className="wrapper">
        <div className="content">
          {totalBooks ? (
            <p>Найдено {totalBooks} книг</p>
          ) : (
            <p>Ничего не найдено</p>
          )}
          {isLoading
            ? "Loading..."
            : Array.isArray(books) &&
              books.length > 0 && (
                <div className="cards__row">
                  {books.map((item) => (
                    <Link key={item.id} to={item.id}>
                      <BookCard
                        image={item.image}
                        authors={item.authors}
                        title={item.title}
                        category={item.category}
                      />
                    </Link>
                  ))}
                </div>
              )}
        </div>
      </div>
    </>
  );
};

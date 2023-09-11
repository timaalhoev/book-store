import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetBooks } from "../hooks/getBooks";
import { BookCard } from "../components/BookCard";
import { Header } from "../components/Header";

export const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const { getBooks, books, totalBooks, isLoading, error } = useGetBooks();

  const handleSubmitForm = (event) => {
    event?.preventDefault();
    getBooks(searchValue);
    setSearchValue("");
  };

  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSubmitForm={handleSubmitForm}
      />
      <div className="wrapper">
        <div className="content">
          {totalBooks && <p>Found {totalBooks} results</p>}
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

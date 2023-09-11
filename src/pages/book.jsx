import { Link, useParams } from "react-router-dom";
import { useGetCurrentBook } from "../hooks/getCurrentBook";
import { useEffect } from "react";
import { Header } from "../components/Header";

export const Book = () => {
  const { book_id } = useParams();
  const { getBook, book, isLoading, error } = useGetCurrentBook();

  useEffect(() => {
    if (book_id) {
      getBook(book_id);
    }
  }, [book_id]);

  console.log(book);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className="book__page">
      <Link to="/">Назад</Link>
      <div className="book__preview">
        <img src={book?.volumeInfo?.imageLinks?.thumbnail} />
      </div>
      <div className="book__info">
        <div className="book__category">
          {book?.volumeInfo?.categories?.join(" / ")}
        </div>
        <h1 className="book__title">{book?.volumeInfo?.title}</h1>
        <div className="book__author">
          {book?.volumeInfo?.authors?.join(", ")}
        </div>
        <div className="book__description">{book?.volumeInfo?.subtitle}</div>
      </div>
    </div>
  );
};

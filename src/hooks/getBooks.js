import { useState } from "react";
import { booksApiUrl } from "../constants";

export const useGetBooks = () => {
  const [state, setState] = useState([]);
  const [total, setTotal] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = async (searchValue) => {
    setPending(true);
    try {
      const res = await fetch(
        booksApiUrl +
          `&q=${searchValue}` +
          `&key=${import.meta.env.VITE_API_KEY}`
      ).then((data) => data.json());

      const books = res.items.map((item) => {
        return {
          id: item?.id,
          title: item?.volumeInfo?.title,
          category: item?.volumeInfo?.categories?.[0],
          authors: item?.volumeInfo?.authors?.join(", "),
          image: item?.volumeInfo?.imageLinks?.thumbnail,
        };
      });

      setState(books);
      setTotal(res.totalItems);
      setPending(false);
    } catch (err) {
      console.error(err);
      setError("Произошла ошибка");
      setPending(false);
      setTotal(null);
    }
  };

  return {
    getBooks: handleFetch,
    books: state,
    totalBooks: total,
    isLoading: pending,
    error,
  };
};

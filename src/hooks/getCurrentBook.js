import { useState } from "react";
import { currentBookApiUrl } from "../constants";

export const useGetCurrentBook = () => {
  const [state, setState] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = async (id) => {
    setPending(true);
    try {
      const res = await fetch(
        currentBookApiUrl + id + `?key=${import.meta.env.VITE_API_KEY}`
      ).then((data) => data.json());

      setState(res);
      setPending(false);
    } catch (err) {
      console.error(err);
      setError("Произошла ошибка");
      setPending(false);
    }
  };

  return {
    getBook: handleFetch,
    book: state,
    isLoading: pending,
    error,
  };
};

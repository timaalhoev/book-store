import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/main";
import { Book } from "./pages/book";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:book_id" element={<Book />} />
    </Routes>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainPage from "./pages/mainPage/MainPage";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import MoviePage from "./pages/moviePage/MoviePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MoviePage />
    </>
  );
}

export default App;

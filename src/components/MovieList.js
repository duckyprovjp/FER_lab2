import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";
import GenreFilter from "./GenreFilter";
import { useTheme } from "../context/ThemeContext";
import { movies } from "../data/movies";
import useLocalStorage from "../hooks/useLocalStorage";

function MovieList() {
  const { theme } = useTheme();
  const [favorites, setFavorites] = useLocalStorage("favorite_movie_ids", []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  const genres = Array.from(new Set(movies.map((m) => m.genre))).filter(
    Boolean,
  );

  const handleToggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());
    if (!matchesSearch) return false;

    if (selectedGenre === "favorite") {
      return favorites.includes(movie.id);
    }
    if (selectedGenre !== "all") {
      return movie.genre === selectedGenre;
    }
    return true;
  });

  const totalMovies = movies.length;
  const favoriteMovies = favorites.length;
  const displayedMovies = filteredMovies.length;

  return (
    <div>
      <Row className="g-2 mb-3">
        <Col xs={7}>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <GenreFilter
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
            genres={genres}
          />
        </Col>
      </Row>

      <div
        className={`d-flex justify-content-between align-items-center py-2 px-1 mb-2 fw-semibold fs-6 border-top border-bottom ${
          theme === "dark"
            ? "text-secondary border-secondary"
            : "text-muted border-light-subtle"
        }`}
      >
        <span>Tổng: {totalMovies}</span>
        <span>|</span>
        <span>Yêu thích: {favoriteMovies}</span>
        <span>|</span>
        <span>Đang hiển thị: {displayedMovies}</span>
      </div>

      <div className="movie-items-list">
        {filteredMovies.length === 0 ? (
          <div className="text-center py-4 text-muted fst-italic">
            Không tìm thấy phim nào.
          </div>
        ) : (
          filteredMovies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              isFavorite={favorites.includes(movie.id)}
              onToggle={handleToggleFavorite}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default MovieList;

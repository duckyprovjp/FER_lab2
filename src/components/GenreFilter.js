import React from "react";
import { Form } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

function GenreFilter({
  selectedGenre = "all",
  onGenreChange,
  setSelectedGenre,
  genres = [],
}) {
  const { theme } = useTheme();

  const handleChange = (e) => {
    const value = e.target.value;
    if (onGenreChange) {
      onGenreChange(value);
    }
    if (setSelectedGenre) {
      setSelectedGenre(value);
    }
  };

  return (
    <Form.Select
      value={selectedGenre}
      onChange={handleChange}
      className={
        theme === "dark"
          ? "bg-dark text-light border-secondary"
          : "bg-white text-dark"
      }
    >
      <option value="all">Tất cả thể loại</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </Form.Select>
  );
}

export default GenreFilter;

import React from "react";
import { Form, Button, Badge } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

function MovieItem({ movie, isFavorite, onToggle }) {
  const { theme } = useTheme();

  return (
    <div
      className={`d-flex justify-content-between align-items-center py-2 px-2 border-bottom ${
        theme === "dark" ? "border-secondary" : "border-light-subtle"
      }`}
    >
      <div className="d-flex align-items-center gap-2 flex-grow-1 overflow-hidden me-2">
        <Form.Check
          type="checkbox"
          id={`movie-fav-${movie.id}`}
          checked={Boolean(isFavorite)}
          onChange={() => onToggle && onToggle(movie.id)}
          title={isFavorite ? "Bỏ yêu thích" : "Đánh dấu yêu thích"}
          className="m-0"
        />
        <div
          className="text-truncate flex-grow-1"
          style={{ cursor: "pointer" }}
          title="Bấm để xem chi tiết phim"
        >
          <span className="fw-semibold me-2">{movie.title}</span>
          <Badge
            bg="secondary"
            className="me-1"
            style={{ fontSize: "0.72rem" }}
          >
            {movie.genre}
          </Badge>
          <span
            className="small"
            style={{ color: theme === "dark" ? "#adb5bd" : "#6c757d" }}
          >
            ({movie.year})
          </span>
          {isFavorite && (
            <Badge
              bg="warning"
              text="dark"
              className="ms-2"
              style={{ fontSize: "0.68rem" }}
            >
              Yêu thích
            </Badge>
          )}
        </div>
      </div>

      <div className="flex-shrink-0">
        <Button
          variant={theme === "dark" ? "outline-info" : "outline-primary"}
          size="sm"
          className="py-0 px-2"
        >
          Chi tiết
        </Button>
      </div>
    </div>
  );
}

export default MovieItem;

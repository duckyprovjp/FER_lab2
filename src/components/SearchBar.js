import React from "react";
import { Form } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

function SearchBar({ searchTerm = "", onSearchChange, setSearchTerm }) {
  const { theme } = useTheme();

  const handleChange = (e) => {
    const value = e.target.value;
    if (onSearchChange) {
      onSearchChange(value);
    }
    if (setSearchTerm) {
      setSearchTerm(value);
    }
  };

  return (
    <Form.Control
      type="text"
      placeholder="Tìm kiếm phim theo tên..."
      value={searchTerm}
      onChange={handleChange}
      className={
        theme === "dark"
          ? "bg-dark text-light border-secondary"
          : "bg-white text-dark"
      }
    />
  );
}

export default SearchBar;

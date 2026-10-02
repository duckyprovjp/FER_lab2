import React from "react";
import { Button } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom">
      <h3 className="m-0 fw-bold fs-4">Mini Movie Manager</h3>
      <Button
        variant={theme === "dark" ? "outline-light" : "outline-dark"}
        size="sm"
        onClick={toggleTheme}
        className="fw-semibold"
      >
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </Button>
    </header>
  );
}

export default Header;

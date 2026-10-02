import React from "react";
import { Container, Card } from "react-bootstrap";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function AppContent() {
  const { theme } = useTheme();

  return (
    <Container className="py-4 d-flex justify-content-center align-items-start min-vh-100">
      <Card
        className={`w-100 border ${
          theme === "dark"
            ? "bg-dark text-light border-secondary shadow-lg"
            : "bg-white text-dark shadow-sm border-light-subtle"
        }`}
        style={{ maxWidth: "600px" }}
      >
        <Card.Body className="p-3 p-sm-4">
          <Header />
          <MovieList />
        </Card.Body>
      </Card>
    </Container>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

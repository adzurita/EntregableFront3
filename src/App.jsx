// src/App.jsx

import { useState } from "react";
import Card from "./Card";

function App() {
  // Definimos los estados para cada campo del formulario
  const [movieName, setMovieName] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState("");
  const [reviewText, setReviewText] = useState("");

  // Estado para el mensaje de error
  const [errorMessage, setErrorMessage] = useState("");

  // Estado para controlar si la reseña es válida y se debe mostrar la Card
  const [isReviewValid, setIsReviewValid] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones de los campos
    if (movieName.trim().length < 3) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      setIsReviewValid(false);
      return;
    }
    if (reviewerName.trim().length < 6) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      setIsReviewValid(false);
      return;
    }
    if (reviewText.trim().length < 6) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      setIsReviewValid(false);
      return;
    }

    // Si todas las validaciones pasan, limpiamos el mensaje de error y mostramos la reseña
    setErrorMessage("");
    setIsReviewValid(true);
  };

  return (
    <div className="App">
      <h1>Reseña de Películas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="movieName">Nombre de la Película:</label>
          <input
            type="text"
            id="movieName"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            placeholder="Escribe el nombre de la película"
          />
        </div>
        <div>
          <label htmlFor="reviewerName">Tu Nombre:</label>
          <input
            type="text"
            id="reviewerName"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            placeholder="Escribe tu nombre"
          />
        </div>
        <div>
          <label htmlFor="rating">Puntaje:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Selecciona una opción</option>
            <option value="1">1 estrella</option>
            <option value="2">2 estrellas</option>
            <option value="3">3 estrellas</option>
            <option value="4">4 estrellas</option>
            <option value="5">5 estrellas</option>
          </select>
        </div>
        <div>
          <label htmlFor="reviewText">Descripción:</label>
          <textarea
            id="reviewText"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Escribe tu reseña aquí"
          ></textarea>
        </div>
        <button type="submit">Enviar Reseña</button>
      </form>
      
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {isReviewValid && (
        <Card
          movieName={movieName}
          reviewerName={reviewerName}
          rating={rating}
          reviewText={reviewText}
        />
      )}
    </div>
  );
}

export default App;

// src/Card.jsx

function Card({ movieName, reviewerName, rating, reviewText }) {
  return (
    <div className="card">
      <h2>Gracias por tu comentario</h2>
      <p><strong>Película:</strong> {movieName}</p>
      <p><strong>Reseñador:</strong> {reviewerName}</p>
      <p><strong>Puntaje:</strong> {rating} estrellas</p>
      <p><strong>Reseña:</strong> {reviewText}</p>
    </div>
  );
}

export default Card;

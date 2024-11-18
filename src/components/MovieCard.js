import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, deleteMovie }) => {
  const deletemovie = () => {
    let id = movie.id;
    deleteMovie(id);
  };

  return (
    <div>
      <Card style={{ width: "20rem", height: "100%" }} className="h-100">
        <Link
          to={`/movie/${movie.title}`}
          state={{
            title: movie.title,
            description: movie.description,
            trailerLink: movie.trailerLink,
          }}
          style={{
            height: "300px",
            width: "200px",
            objectFit: "cover",
            alignSelf: "center",
          }}
        >
          <Card.Img variant="top" src={movie.posterURL} />
        </Link>
        <Card.Body className="d-flex flex-column">
          <h2 className="card-title">{movie.title}</h2>
          <div
            style={{
              maxHeight: "150px",
              overflowY: "auto",
            }}
          >
            <p className="card-text">{movie.description}</p>
          </div>
          <h4>rating: {movie.rating}/10</h4>
          <Button onClick={deletemovie}>Delete Movie </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;

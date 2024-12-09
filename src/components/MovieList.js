import React from "react";
import MovieCard from "./MovieCard";
import { Row, Col, Container } from 'react-bootstrap';

const MovieList = ({ movies, deleteMovie }) => {
  return (
    <Container>
    <Row className="g-4">
      {movies.map((movie) => (
        <Col key={movie._id} xs={12} sm={6} md={4} lg={3}>
        <MovieCard key={movie._id} deleteMovie={deleteMovie} movie={movie} />
        
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default MovieList;

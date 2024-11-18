import React from "react";
import MovieCard from "./MovieCard";
import { Row, Col, Container } from 'react-bootstrap';

const MovieList = ({ movies, deleteMovie, key }) => {
  return (
    <Container>
    <Row className="g-4">
      {movies.map((movie, key) => (
        <Col key={key} xs={12} sm={6} md={4} lg={3}>
        <MovieCard key={key} deleteMovie={deleteMovie} movie={movie} />
        
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default MovieList;

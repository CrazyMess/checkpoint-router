import React from "react";
import Filter from "./Filter";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  //states for displaying movies
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  //state for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");
  const [trailerLink, setTrailerLink] = useState("");


   // Load movies from local storage on mount
   useEffect(() => {
    const savedMovies = localStorage.getItem("movies");
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  }, []);

  //handle adding new movie
  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: uuidv4(),
      title,
      description,
      posterURL,
      rating: Number(rating),
      trailerLink,
    };
    addMovie(newMovie);

    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
    setTrailerLink("");
  };

  

  //filtered movies list
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  //delete movie
  const deleteMovie = (movieId) => {
    let newMovies = movies.filter((movie) => {return movie.id !== movieId})
    setMovies(newMovies)
  }

  return (
    <div className="container mt-5">
      <Filter
        onTitleChange={setTitleFilter}
        onRatingChange={(rating) => setRatingFilter(Number(rating))}
      />
      { filteredMovies.length > 0 ? (
        <div>
          <hr />
          <MovieList movies={filteredMovies} deleteMovie={deleteMovie} />
          <hr />
        </div>
      ) : (
        <div>
          <hr />
          <h3>No movies available</h3>
          <hr />
        </div>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="movietitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="moviedesc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="write a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="moviePUrl">
          <Form.Label>PosterURL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter poster url"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="moviePUrl">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="rating 1-10"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="movieTrailer">
          <Form.Label>movie Trailer</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie url"
            value={trailerLink}
            onChange={(e) => setTrailerLink(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Home;

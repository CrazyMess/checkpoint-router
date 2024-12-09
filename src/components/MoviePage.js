import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const MoviePage = () => {

  let { state } = useLocation();

  if (!state) {
    return <p>No movie found.</p>;
  }

  const regex =
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.*?v=))([^&?#]+)/;

  const vidId = state.trailerLink.match(regex);

  const link = `https://www.youtube.com/embed/${vidId?.[1] || ""}`;

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title className="text-center mb-4">{state.title}</Card.Title>
          <Card.Text>{state.description}</Card.Text>
          <h5 className="mt-4">Trailer:</h5>
          <iframe
            width="100%"
            height="600"
            src={link}
            title="movie trailer"
            className="my-3 border rounded"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="text-center">
            <Button variant="primary" as={Link} to={"/"}>
              Go Back
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MoviePage;

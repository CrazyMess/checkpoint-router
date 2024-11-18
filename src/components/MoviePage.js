import React from "react";
import { Link, useLocation } from "react-router-dom";

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
    <div>
       <div>
        <h1>{state.title}</h1>

        <p>{state.description}</p>
        <h2>Trailer:</h2>
        <br />
        <iframe
          width="500"
          height="300"
          src={link}
          title="movie trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div> 

      <Link to={"/"}>go back</Link>
    </div>
  );
};

export default MoviePage;

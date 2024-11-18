import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MoviePage from "./components/MoviePage";

function App() {


  return (
    
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/movie/:title" element={<MoviePage/>}/>
   </Routes>
  );
}

export default App;


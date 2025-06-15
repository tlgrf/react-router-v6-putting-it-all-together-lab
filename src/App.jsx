import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DirectorContainer from "./pages/DirectorContainer";
import DirectorList from "./pages/DirectorList";
import DirectorForm from "./pages/DirectorForm";
import DirectorCard from "./pages/DirectorCard";
import MovieForm from "./pages/MovieForm";
import MovieCard from "./pages/MovieCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home page */}
        <Route path="/" element={<Home />} />

        {/* about page */}
        <Route path="/about" element={<About />} />

        {/* main directors route */}
        <Route path="/directors" element={<DirectorContainer />}>
          {/* default list view for all directors */}
          <Route index element={<DirectorList />} />
          {/* form to add a new director */}
          <Route path="new" element={<DirectorForm />} />
          {/* view for a specific director */}
          <Route path=":id" element={<DirectorCard />}>
            {/* form to add a movie to a director */}
            <Route path="movies/new" element={<MovieForm />} />
            {/* view for a specific movie */}
            <Route path="movies/:movieId" element={<MovieCard />} />
          </Route>
        </Route>

        {/* fallback route if no match */}
        <Route path="*" element={<h1>404 - Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
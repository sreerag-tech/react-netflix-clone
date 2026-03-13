import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetail";
import Watch from "./pages/Watch";
import Watchlist from "./pages/Watchlist";

function App () {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/watch/:id" element={<Watch />} />
      <Route path="/watchlist" element={<Watchlist />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App;
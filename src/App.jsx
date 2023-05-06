import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { useState } from "react";

function App() {
  const [favorites, setFovrites] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home favorites={favorites} setFovrites={setFovrites} />}
        />
        <Route path="/favorites" element={<Favorites fav={favorites} />} />
      </Routes>
    </div>
  );
}

export default App;

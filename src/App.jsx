import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pokedex from "./pages/Pokedex";
import Home from "./pages/Home";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import PokemonId from "./pages/PokemonId";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonId />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

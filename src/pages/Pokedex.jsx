import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardPoke from "../components/pokedex/CardPoke";
import InputSearch from "../components/pokedex/InputSearch";
import SelectByType from "../components/pokedex/SelectByType";
import "./styles/pokedex.css";
import Pagination from "./Pagination";
import SearchModal from "../components/pokedex/SearchModal";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [typeSelected, setTypeSelected] = useState("All Pokemons");
  const [searchIsClose, setSearchIsClose] = useState(true);

  useEffect(() => {
    if (typeSelected !== "All Pokemons") {
      //Si se seleccionó un tipo
      axios
        .get(typeSelected)
        .then((res) => {
          const result = res.data.pokemon.map((e) => e.pokemon);
          setPokemons(result);
        })
        .catch((err) => console.log(err));
    } else {
      // si quiero los pokemons
      const URL = `https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`;
      axios
        .get(URL)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    }
  }, [typeSelected]);

  const userName = useSelector((state) => state.userName);

  //Lógica de paginaciónn
  const [page, setPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(8);
  //  1   - 1   *     8   =  0
  //  2  -  1   *     8   =  8
  //  3  -  1   *     8   =  16
  const initialPoke = (page - 1) * pokePerPage;
  // initialPoke  - pokePerPage  +  1
  const finalPoke = page * pokePerPage;

  const handleOpenSearch = () => {
    setSearchIsClose(false);
  };

  return (
    <div className="pokedex-container">
      <aside className="pokedex-aside_container">
        <div className="pokedex-aside">
          <p className="pokedex_p">
            Welcome <span className="pokedex_span">{userName}</span>, here you
            can find your favourite Pokemon!
          </p>
          <div className="pokedex_input-container">
            <InputSearch />
            <SelectByType setTypeSelected={setTypeSelected} setPage={setPage} />
          </div>
        </div>
        <div className="pokedex_logo-container">
        <img
            className="pokedex_logo"
            src="/src/images/pokedex/pokeball.png"
            alt=""
          />
        <img
          className="pokedex_logo"
          src="/src/images/pokedex/logo.svg"
          alt=""
        />
        </div>
      </aside>
      <main className="main-container">
        <button className="pokedex-main_btn" onClick={handleOpenSearch}>
          <img
            className="btn_icon"
            src="/src/images/pokedex/pokegif.gif"
            alt=""
          />
        </button>
        <div
          className={`search_modal-container ${
            searchIsClose && "disable-search"
          }`}
        >
          <SearchModal setSearchIsClose={setSearchIsClose} />
        </div>
        <div className="card-container">
          {pokemons?.slice(initialPoke, finalPoke).map((pokemon) => (
            <CardPoke key={pokemon.url} url={pokemon.url} />
          ))}
        </div>
      </main>
      <Pagination
        pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default Pokedex;

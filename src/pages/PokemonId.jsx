import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pokemon404 from "../components/pokedexId/Pokemon404";
import Movements from "../components/pokedexId/Movements";
import "./styles/pokemonId.css";
import Stats from "../components/pokedexId/Stats";

const PokemonId = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        console.log(err);
        setHasError(true);
      });
  }, []);

  console.log(pokemon);

  if (hasError) {
    return <Pokemon404 />;
  }
  return (
    <div>
      <Link className="detail_return" to='/pokedex'>Return &#8592;</Link>
      <img
        className="detail_logo"
        src="./src/images/pokedex/logo.svg"
        alt=""
      />
      <article className="detail-container">
        <div className="detail_card">
          <header className={`detail_header bg-${pokemon?.types[0].type.name}`}>
            <img
              className="detail_img"
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </header>

          <section
            className={`detail-section_poke letter-${pokemon?.types[0].type.name}`}
          >
            <h3 className="detail-section_id"># {pokemon?.id}</h3>
            <h2 className="detail-section_name">{pokemon?.name}</h2>
            <ul className="detail-section_list">
              <li className="detail-section_items">
                Weight
                <span className="detail-section_span">{pokemon?.weight}</span>
              </li>
              <li className="detail-section_items">
                Height
                <span className="detail-section_span">{pokemon?.height}</span>
              </li>
            </ul>
          </section>

          <section className="detail-section_info">
            <h3 className="detail_info-title">Type</h3>
            <ul className="detail_info-list">
              {pokemon?.types.map((type) => (
                <li
                  key={type.type.name}
                  className={`detail_info-items bg-${pokemon?.types[0].type.name}`}
                >
                  <span className="detail_info-span">{type.type.name}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="detail_sprites-container">
            <div
              className={`detail_sprites bg_sprites-${pokemon?.types[0].type.name} border-${pokemon?.types[0].type.name}`}
            >
              <img
                className={`detail_sprites-img`}
                src={pokemon?.sprites.front_default}
                alt=""
              />
            </div>
            <div
              className={`detail_sprites bg_sprites-${pokemon?.types[0].type.name} border-${pokemon?.types[0].type.name}`}
            >
              <img
                className="detail_sprites-img"
                src={pokemon?.sprites.back_default}
                alt=""
              />
            </div>
          </section>
        </div>
        <Stats pokemon={pokemon} />
        <Movements pokemon={pokemon} />
      </article>
    </div>
  );
};

export default PokemonId;

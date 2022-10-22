import React from "react";
import FormHome from "../components/home/FormHome";
import "./styles/home.css";
import pokedex from '../assets/images/home/pokedex.png'

const Home = () => {
  return (
    <article className="pokedex">
      <img className="pokedex_img" src={pokedex} alt="Pokedex" />
      <header className="pokedex_header">
        <h2 className="pokedex_subtitle">Hi! Trainer</h2>
        <p className="pokedex_text">Give me your to see the pokedex</p>
      </header>

      <FormHome />
    </article>
  );
};

export default Home;

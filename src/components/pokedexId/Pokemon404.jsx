import React from 'react'
import { Link } from 'react-router-dom'
import './styles/pokemon404.css'
import error from '../../assets/images/pokemonId/pokedexError.gif'

const Pokemon404 = () => {

  return (
    <div className='error-container'>
      <h1 className='error_title'>Pokemon not found </h1>
      <img className='error_img' src={error} alt="" />
      <div className='error_return'>
      <Link to='/pokedex'>Return to Pokedex</Link>
      </div>
    </div>
    
  )
}

export default Pokemon404
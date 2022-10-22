import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/header.css'

const Header = () => {

  const navigate = useNavigate()
  const [ darkMode, setDarkMode ] = useState(false)
  
  useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')
      
  // If dark mode is enabled - adds classes to update dark-mode styling.
  // Else, removes and styling is as normal.
  if( darkMode === true ) {
    body.classList.add('dark-mode')
    toggle.classList.add('toggle-active')
  } else {
    body.classList.remove('dark-mode')
    toggle.classList.remove('toggle-active')
  }
}, [darkMode])

const handleHome = () => {
  navigate('/')
}

  return (
    <>
    <div className='header'>
      <div className='header_red'>
        <div className='header_black'></div>
        <div className='header_circle'>
          <div 
          className='header_circle-int'
          id="toggle"
          onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}><div className="toggle-inner"/>
          <i className="header-icon fa-solid fa-moon"></i>
          </div>
        </div>
      </div>
    </div>
    <img className="header_img" onClick={handleHome} src="/img/home/pokedex.png" alt="Pokedex" />
    </>
  );
};

export default Header;

import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputSearch.css'

const InputSearch = ({setSearchIsClose}) => {

  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }

  return (
    <form 
      className='search_form'
    onSubmit={submit}>
      <input 
      id='search' 
      type="text" 
      placeholder='name or number' 
      className='search_input'
      />
      <button className='search_btn'>
      <i className="search_btn-icon fa-brands fa-searchengin"></i>
      </button>
    </form>
  )
}

export default InputSearch

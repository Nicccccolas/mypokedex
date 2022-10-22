import React from 'react'
import './styles/movements.css'

const Movements = ({pokemon}) => {

  return (
    <section className='movements-container'>
      <h3 className='movements_title'>Movements</h3>
      <ul className='movements_list'>
        {
          pokemon?.moves.map(move => (
            <li key={move.move.name} className={`movements_items bg-${pokemon?.types[0].type.name}`}><span className='movements_span'>{move.move.name}</span></li>
          ))
        }
      </ul>
    </section>
  )
}

export default Movements
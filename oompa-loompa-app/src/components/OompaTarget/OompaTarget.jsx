import React from 'react';
import { Link } from 'react-router-dom';
import './OompaTarget.css'

export const OompaTarget = ( {oompa} ) => {
  console.log(oompa)
  return (
    <Link className="oompa-container" to={`${oompa.id}`}>
      <img src={`${oompa.image}`} alt={`${oompa.first_name} ${oompa.last_name}`} className="oompa-container__image" />
      <p className = "oompa-container__name">{oompa.first_name} {oompa.last_name}</p>
      <p>{oompa.gender === 'M' ? 'Man' : 'Women'}</p>
      <p>{oompa.profession}</p>
    </Link>
  )
}

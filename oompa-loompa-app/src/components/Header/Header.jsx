import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export const Header = () => {
  return (
      <Link className="header-container" to="/">
        <img src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png" alt="Oompa-Loompas Logo" className="header-container__logo"  />
        <p className="header-container__title">Oompa Loompa's Crew</p>
      </Link>
  )
}

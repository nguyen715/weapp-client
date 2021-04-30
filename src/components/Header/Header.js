import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Menu from '../Menu/Menu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(menuOpen ? false : true);
    return;
  }

  function handleProfileIconClick() {
    if(menuOpen) {
      toggleMenu();
    }
  }

  return (
    <div className="Header">
      <Link to="/"><h1>weApp</h1></Link>
      <div className="header-icons">
        <Link to="/profile">
          <i className="fa fa-user-circle profile" onClick={handleProfileIconClick}></i>
        </Link>
        <i className="fa fa-ellipsis-v menu" onClick={toggleMenu}></i>
      </div>
      {menuOpen && <Menu toggleMenu={toggleMenu}/>}
    </div>
  )
}
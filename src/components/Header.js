import React from "react";
import "../sass/layout/_header.scss";
import DarkModeToggle from "react-dark-mode-toggle";
import TheatersIcon from '@material-ui/icons/Theaters';
import { Link } from 'react-router-dom';

function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/" style={{color : "#fff"}}>
          <TheatersIcon/>
        </Link>
        </div>
      <div className="header__search">
        <input type="text" placeholder="Film ara..."></input>
      </div>
      <div className="header__navi">
        <div>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

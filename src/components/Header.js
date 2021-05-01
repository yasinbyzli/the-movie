import React from "react";
import "../sass/layout/_header.scss";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import TheatersIcon from '@material-ui/icons/Theaters';
import { Link } from 'react-router-dom';

function Header({ isDarkMode, setIsDarkMode}) {

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/" style={{color : "#fff"}}>
          <TheatersIcon/>
        </Link>
        </div>
      <div className="header__search">
        <input 
         type="text" 
         placeholder="Film ara..."
         >

        </input>
      </div>
      <div className="header__navi">
        <div>
          <DarkModeSwitch
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={30}
            style = {{ color: '#fff'}}
          />
        </div>
      </div>
    </div>
  );
}



export default Header;

import React from "react";
import "../sass/layout/_header.scss";
import DarkModeToggle from "react-dark-mode-toggle";

function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="header">
      <div className="header__logo">LOGO</div>
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

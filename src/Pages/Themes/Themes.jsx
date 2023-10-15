import React, { useEffect, useState } from 'react';
import { FaCog, FaMoon, FaSun } from 'react-icons/fa';
import './Themes.css';
import { ThemesData } from '../../constants/ThemesData';
import ThemeItem from './ThemeItem';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(localStorage.getItem('themeColor') || '#ec1839');
  const [theme, setTheme] = useState(getStorageTheme());

  const changeColor = (newColor) => {
    setColor(newColor);
    localStorage.setItem('themeColor', newColor);
  };

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  const toggleShowSwitcher = () => {
    setShowSwitcher(!showSwitcher);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--skin-color', color);
  }, [color]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <div className={`style-switcher ${showSwitcher ? 'show-switcher' : ""} -mt-11`}>
        <div className="style-switcher-toggler s-icon">
          <span className="icon" onClick={toggleShowSwitcher}>
            <FaCog />
          </span>
        </div>
        <div className="day-night s-icon">
          <span className="icon" onClick={toggleTheme}>
            {theme === 'light-theme' ? <FaSun /> : <FaMoon />}
          </span>
        </div>
        {showSwitcher && (
          <>
            <h4>Theme Colors</h4>
            <div className="colors">
              {ThemesData.map((theme, index) => (
                <ThemeItem key={index} {...theme} changeColor={changeColor} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Themes;

import React from 'react';

const ThemeItem = ({ color, changeColor }) => {
  const isActive = changeColor === color;

  return (
    <span
      className={`color-item ${isActive ? 'active' : ''}`}
      style={{ background: color }}
    onClick={() => {changeColor(color)}}
    ></span>
  );
};

export default ThemeItem;


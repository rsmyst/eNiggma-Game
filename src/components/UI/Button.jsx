import React from 'react';
import './UI.css';

const Button = ({ onClick, children, className }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
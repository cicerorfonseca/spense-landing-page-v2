import React from 'react';

const Button = ({ buttonType, text }) => {
  return (
    <a href='/' className={`btn ${buttonType}`} role='button'>
      {text}
    </a>
  );
};

export default Button;

import React from 'react';

const Button = ({ buttonType, text }) => {
  return (
    <button className={`btn ${buttonType}`} type='button'>
      {text}
    </button>
  );
};

export default Button;

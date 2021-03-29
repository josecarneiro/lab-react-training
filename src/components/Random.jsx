import React from 'react';

const Random = ({ min, max }) => {
  return <span>{Math.floor(Math.random() * (max - min) + min)}</span>;
};

export default Random;

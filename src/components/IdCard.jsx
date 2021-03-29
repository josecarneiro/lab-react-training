import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div>
      <span>
        <strong>First Name:</strong>
        {lastName}
      </span>
      <span>
        <strong>Last Name:</strong>
        {firstName}
      </span>
      <span>
        <strong>Gender:</strong>
        {gender}
      </span>
      <span>
        <strong>Height:</strong>
        {height}
      </span>
      <span>
        <strong>Birthdate:</strong>
        {birth.toString()}
      </span>
      <img src={picture} alt="" />
    </div>
  );
};

export default IdCard;

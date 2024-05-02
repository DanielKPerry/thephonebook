import React from "react";

const Person = ({ person, number, handleDelete }) => {
  return (
    <div>
      <li>
        {person} {number}
        <button onClick={handleDelete}>delete</button>
      </li>
    </div>
  );
};

export default Person;

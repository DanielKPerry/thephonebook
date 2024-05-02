import React from "react";
import Person from "./Person";

const Persons = ({ personsFilter, persons, handleDelete }) => {
  const filteredPersonsList =
    personsFilter !== ""
      ? persons.filter((person) => person.name.includes(personsFilter))
      : persons;
  return (
    <ul>
      {filteredPersonsList.map((person) => (
        <Person
          key={person.name}
          person={person.name}
          number={person.number}
          handleDelete={() => handleDelete(person.id)}
        />
      ))}
    </ul>
  );
};

export default Persons;

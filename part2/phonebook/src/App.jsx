import { useState, useEffect } from "react";
import axios from "axios";
import backendService from "./services/backend";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personsFilter, setPersonsFilter] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);

  const addContact = (event) => {
    event.preventDefault();
    if (persons.filter((person) => person.name === newName).length > 0) {
      const personToAdd = persons.find((person) => person.name === newName);
      if (
        window.confirm(
          `${personToAdd.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const newPerson = { ...personToAdd, number: newNumber };
        backendService
          .update(personToAdd.id, newPerson)
          .then((returenedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== personToAdd.id ? person : returenedPerson
              )
            );
            setSuccessMessage(`${returenedPerson.name}'s number has changed`);
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
            setNewName("");
            setNewNumber("");
          });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      axios;
      backendService.add(personObject).then((response) => {
        setPersons(persons.concat(response));
        setSuccessMessage(`Added ${response.name}`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleDelete = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    const newPersons = persons.filter((person) => person.id !== id);
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      backendService.deletePerson(id).then(() => {
        setPersons(newPersons);
      });
    }
  };

  useEffect(() => {
    const eventHandler = (response) => {
      setPersons(response);
    };
    const promise = backendService.getAll();
    promise.then(eventHandler);
  }, []);

  const handleContactChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handlePersonsFilter = (event) => {
    setPersonsFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Filter value={personsFilter} onChange={handlePersonsFilter} />

      <h2>add a new</h2>

      <PersonForm
        onSubmit={addContact}
        newNameValue={newName}
        handleContact={handleContactChange}
        newNumberValue={newNumber}
        handleNumber={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons
        personsFilter={personsFilter}
        persons={persons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;

import React from "react";

const PersonForm = ({
  onSubmit,
  newNameValue,
  handleContact,
  newNumberValue,
  handleNumber,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newNameValue} onChange={handleContact} />
      </div>
      <div>
        number: <input value={newNumberValue} onChange={handleNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;

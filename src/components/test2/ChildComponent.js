import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const ChildComponent = ({ onAdd, onRemove }) => {
  const [fields, setFields] = useState([]);

  const handleAddField = () => {
    const newField = { text: "", textarea: "" };
    setFields([...fields, newField]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    //updatedFields.splice(index, 1);
    setFields(updatedFields);
    onRemove(index);
  };

  const handleChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAdd(fields);
  };

  return (
    <Container>
    <form onSubmit={handleFormSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Champ texte"
            value={field.text}
            onChange={(e) => handleChange(index, "text", e.target.value)}
          />
          <textarea
            placeholder="Textarea"
            value={field.textarea}
            onChange={(e) => handleChange(index, "textarea", e.target.value)}
          />
          <Button onClick={() => handleRemoveField(index)}>Supprimer</Button>
        </div>
      ))}
      <Button onClick={handleAddField}>Ajouter</Button>
      <Button type="submit">Soumettre</Button>
    </form>
    </Container>
  );
};

export default ChildComponent;

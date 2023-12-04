import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function FormulaireEnfant({ onSoumettre }) {
  const [inputs, setInputs] = useState([{ type: 'text' }, { type: 'textarea' }]);

  const handleChange = (index, field, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index][field] = value;
    setInputs(updatedInputs);
  };

  const soumettreFormulaire = () => {
    const values = inputs.map((input) => input.value);
    onSoumettre(values);
  };

  const ajouterChampTexte = () => {
    setInputs([...inputs, { type: 'text' }]);
  };

  const ajouterTextarea = () => {
    setInputs([...inputs, { type: 'textarea' }]);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <Form.Group key={index}>
          <Form.Label>{input.type === 'text' ? 'Champ texte' : 'Textarea'}</Form.Label>
          <Form.Control
            as={input.type}
            onChange={(e) => handleChange(index, 'value', e.target.value)}
          />
        </Form.Group>
      ))}

      <Button onClick={ajouterChampTexte}>Ajouter Champ Texte</Button>
      <Button onClick={ajouterTextarea}>Ajouter Textarea</Button>
      <Button onClick={soumettreFormulaire}>Soumettre</Button>
    </div>
  );
}

export default FormulaireEnfant;
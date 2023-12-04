import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Container, Button} from 'react-bootstrap';

function ExperienceForm({onSubmit, onAdd, onRemove }) {
  const [textareas, setTextareas] = useState(['']);
  const navigate = useNavigate ()

  const addTextarea = () => {
    setTextareas([...textareas, '']);
  };

  const handleSubmit = () => {
    onSubmit(textareas);
    navigate('/education')
  };
  function handleback(e){
    navigate('/job')
  }


  //begin
  const [fields, setFields] = useState([]);

  const handleAddField = () => {
    const newField = { text: " ", textarea: " ",  };
    setFields([...fields, newField]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
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
    onSubmit(fields)
    onAdd(fields);
    navigate('/education')
  };

  function handleback(e){
    navigate('/job')
  }


  //end
  return (
    
<Container className='main-form'>
<div className='mt-3 mb-3 main-form-text'>
    <div className='form-header mt-3 mb-3'>
      <h2>Let's showcase your work experience</h2>
      <p>Use phrases to showcase your experience</p>
    </div>
    <div className='exp_form'>
          <form className="container mt-3 mb-3 exp_forms" onSubmit={handleFormSubmit} >
            {fields.map((field, index) => (
              <div key={index}>
                <Form.Group className='mt-3 mb-3'>
                  <Form.Label>Job name:</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Champ texte"
                      value={field.text}
                      onChange={(e) => handleChange(index, "text", e.target.value)}
                />
                </Form.Group>
                <Form.Group className='mt-3 mb-3'>
                  <Form.Label>Job description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Textarea"
                    value={field.textarea}
                    onChange={(e) => handleChange(index, "textarea", e.target.value)}
                  />
                </Form.Group>
                <Button className="me-4 btn btn-danger btn-lg btn-block" onClick={() => handleRemoveField(index)}>Delete</Button>
              </div>
            ))}
            <Row className="mb-3">
              <Form.Group controlId="formGridCheckbox" className="col col-sm-6 mt-3 mb-3">
                <button type="submit"  className="me-4 btn btn-lg btn-block submit">Submit</button>
                <Button className='me-4 btn btn-lg btn-block submit' onClick={handleAddField}>Add Experience</Button>
                <button type="reset" onClick={handleback} className="me-4 btn btn-danger btn-lg btn-block submit_back">Back</button>
              </Form.Group>
            </Row>
          </form>
    </div>
</div>
</Container>
  );
}

export default ExperienceForm

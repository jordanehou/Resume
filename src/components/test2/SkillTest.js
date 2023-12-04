import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Container, Button} from 'react-bootstrap';

function SkillTest({onSubmit}) {
  const [textareas, setTextareas] = useState([]);
  const navigate = useNavigate ()

  const addTextarea = () => {
    const newField = { text: " ", per:""};
    //setFields([...fields, newField]);
    setTextareas([...textareas, newField]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(textareas);
    navigate('/testPrintSkill')
  };
  function handleback(e){
    //navigate('/job')
  }

  const handleChange = (index, field, value) => {
    const updatedFields = [...textareas];
    updatedFields[index][field] = value;
    setTextareas(updatedFields);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...textareas];
    updatedFields.splice(index, 1);
    setTextareas(updatedFields);
    //onRemove(index);
  };
  return (
    
<Container className='main-form'>
<div className='mt-3 mb-3 main-form-text'>
    <div className='form-header mt-3 mb-3'>
      <h2>Let's showcase your work experience</h2>
      <p>Use phrases to showcase your experience</p>
    </div>
    <div className='exp_form'>
      <form className="container mt-3 mb-3 exp_forms" onSubmit={handleSubmit} >
      {textareas.map((value, index) => (
            <Form.Group controlId={`textarea-${index}`} key={index}>
              <Form.Control 
                
                type='text'
                value={value.text}
                onChange={(e) => handleChange(index, "text", e.target.value)}
              />
              <Form.Control
                type='number'
                value={value.per}
                onChange={(e) => handleChange(index, "per", e.target.value)}
              />
              <Button onClick={() => handleRemoveField(index)}>Supprimer</Button>
            </Form.Group>
          ))}
        <Row className="mb-3">
          <Form.Group controlId="formGridCheckbox" className="col col-sm-6 mt-3 mb-3">
            <button type="submit"   className="me-4 btn btn-lg btn-block submit">Submit</button>
            <Button className='me-4 btn btn-lg btn-block submit' onClick={addTextarea}>Add Skill</Button>
            <button type="reset" onClick={handleback} className="me-4 btn btn-danger btn-lg btn-block submit_back">Back</button>
          </Form.Group>
        </Row>
      </form>
    </div>
</div>
</Container>
  );
}

export default SkillTest

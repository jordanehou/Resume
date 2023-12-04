import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Container, Button, InputGroup, Dropdown} from 'react-bootstrap';

function SkillForms({onSubmit}) {
  const [textareas, setTextareas] = useState([]);
  //const [dropdownValue, setDropdownValue] = useState('');
  const navigate = useNavigate ()

  /*const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };*/

  const addTextarea = () => {
    const newField = { text:"", per:""};
    //setFields([...fields, newField]);
    setTextareas([...textareas, newField]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(textareas);
    navigate('/summary')
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
            <div controlId={`textarea-${index}`} key={index}>
              <Row className='mb-3'>
                <Form.Group className='mt-3 mb-3 col col-sm-5'>
                  <Form.Label>Skill name</Form.Label>
                  <Form.Control 
                    type='text'
                    value={value.text}
                    onChange={(e) => handleChange(index, "text", e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mt-3 mb-3 col col-sm-3'>
                  <Form.Label>knowlage</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type='number'
                      value={value.per}
                      onChange={(e) => handleChange(index, "per", e.target.value)}
                    />
                    <InputGroup.Text className="text-primary">
                      %
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group className='col col-sm-2'>
                  <Button className='mt-5  btn btn-danger btn-md submit_back' onClick={() => handleRemoveField(index)}>Delete</Button>
                </Form.Group>
              </Row>
          </div>
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

export default SkillForms

import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Row, Button } from 'react-bootstrap';

function LanguageForm({onSubmit}) {
    const [form, setForm] = useState([]);
    const navigate = useNavigate ();
  
    const addTextarea = () => {
      const newField = { language:"", level:""};
      //setFields([...fields, newField]);
      setForm([...form, newField]);
    };

    const handleChange = (index, field, value) => {
        const updatedFields = [...form];
        updatedFields[index][field] = value;
        setForm(updatedFields);
    };

    const handleRemoveField = (index) => {
        const updatedFields = [...form];
        updatedFields.splice(index, 1);
        setForm(updatedFields);
        //onRemove(index);
      };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(form);
      navigate('/interest')
    };
    function handleback(e){
      //navigate('/job')
    }

  return (
    <Container className='main-form'>
        <div className='mt-3 mb-3 main-form-text'>
            <div className='form-header mt-3 mb-3'>
            <h2>Let's showcase your Language</h2>
            </div>
            <div className='exp_form'>
            <form className="container mt-3 mb-3 exp_forms" onSubmit={handleSubmit} >
            {form.map((value, index) => (
                    <div controlId={`textarea-${index}`} key={index}>
                    <Row className='mb-3'>
                        <Form.Group className='mt-3 mb-3 col col-sm-5'>
                        <Form.Label>Language</Form.Label>
                        <Form.Control 
                            type='text'
                            value={value.language}
                            onChange={(e) => handleChange(index, "language", e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group controlId="formDropdown" className='mt-3 mb-3 col col-sm-3'>
                        <Form.Label>Level</Form.Label>
                            <Form.Control as="select" 
                            value={value.level}
                            onChange={(e) => handleChange(index, "level", e.target.value)}>
                                <option value="">Select your level</option>
                                <option value="Professional">Professional</option>
                                <option value="Medium">Medium</option>
                                <option value="Beginner">Beginner</option>
                            </Form.Control>
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
                    <Button className='me-4 btn btn-lg btn-block submit' onClick={addTextarea}>Add language</Button>
                    <button type="reset" onClick={handleback} className="me-4 btn btn-danger btn-lg btn-block submit_back">Back</button>
                </Form.Group>
                </Row>
            </form>
            </div>
        </div>
    </Container>
  )
}

export default LanguageForm

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Container} from 'react-bootstrap';

function SkillForms({onSubmit}) {
    const [form, setForm] = useState({ skill: ''});
    const navigate = useNavigate();
    const handleChange = (event) => {
    
    const { name, value } = event.target;
    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    //const Navigate = useNavigate();
    event.preventDefault();
    onSubmit(form);
    navigate('/summary');
  };
  function handleback(e){
    navigate('/education')
  }
  return (
    <Container className='main-form'>
    <div className='mt-3 mb-3 main-form-text'>
        <div className='form-header mt-3 mb-3'>
          <h2>Let's showcase your skills</h2>
          <p>Use phrases to showcase your skills</p>
        </div>
       <form className="container mt-3 mb-3" onSubmit={handleSubmit} >
            <Row className="mb-3">
            <Form.Group controlId="formGridlabel" className="col col-sm-6">
                <Form.Label>Skills</Form.Label>
                <Form.Control as="textarea" rows="{3}" className="form-control textarea" name="skill" value={form.skill} onChange={handleChange} />
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group controlId="formGridCheckbox" className="col col-sm-6 mt-3 mb-3">
                <button type="submit" className="me-4 btn btn-lg btn-block submit">Next</button>
                <button type="reset" onClick={handleback} className="me-4 btn btn-danger btn-lg btn-block submit_back">Back</button>
            </Form.Group>
            </Row>
        </form>
    </div>
    </Container>
  )
}

export default SkillForms

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Container, Button, Card} from 'react-bootstrap';

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
    const isChecked = false;
    const newField = { text: " ", textarea: " ",  position: " ", company:" ", start_date_year:" ", end_date_year: " ", current:''};
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
    <div className='form-header mt-2 mb-1'>
      <h2>Let's showcase your work experience</h2>
      <p>Use phrases to showcase your experience</p>
    </div>
    <div className='exp_form'>
      <Card className="around" >
        
          <form className="container form-text exp_forms" onSubmit={handleFormSubmit} >
            {fields.map((field, index) => (
              <div key={index}>
                <Row className="mb-3">
                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="position"
                          value={field.position}
                          onChange={(e) => handleChange(index, "position", e.target.value)} 
                          className="form-control" 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                        <Form.Label>Employer</Form.Label>
                        <Form.Control type="text" 
                          placeholder="company"
                          value={field.company}
                          onChange={(e) => handleChange(index, "company", e.target.value)} 
                          className="form-control"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                        <Form.Label>Start date year</Form.Label>
                        <Form.Control type="month"
                          placeholder="start date"
                          value={field.start_date_year}
                          onChange={(e) => handleChange(index, "start_date_year", e.target.value)} 
                          className="form-control" 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                        <Form.Label>End date year</Form.Label>
                        <Form.Control type="month" 
                          name="end_date_year" 
                          placeholder="End date"
                          value={field.end_date_year}
                          onChange={(e) => handleChange(index, "end_date_year", e.target.value)} 
                          className="form-control" 
                        />
                    </Form.Group>
                    
                </Row>
                <Row className='mb-3 ms-1'>
                  <Form.Check
                        type="checkbox"
                        className="col col-sm-2"
                        onChange={(e) => handleChange(index, "current", e.target.value)}
                        label="Present"
                      />
                </Row>
                <Row className='mb-3'>
                  <Form.Group>
                    <Form.Label>Job description</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Textarea"
                      value={field.textarea}
                      onChange={(e) => handleChange(index, "textarea", e.target.value)}
                      rows={5}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                      <button className="me-4 btn btn-danger btn-lg btn-block" onClick={() => handleRemoveField(index)}>Delete</button>
                    </Form.Group>
                </Row>
              </div>
            ))}
            <Row className="mb-3">
              <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                <button type="submit"  className="me-4 btn btn-lg btn-block submit">Submit</button>
                <Button className='me-4 btn btn-lg btn-block submit' onClick={handleAddField}>Add Experience</Button>
                <button type="reset" onClick={handleback} className="me-4 btn btn-danger btn-lg btn-block submit_back">Back</button>
              </Form.Group>
            </Row>
          </form>
        
      </Card>
    </div>
</div>
</Container>
  );
}

export default ExperienceForm

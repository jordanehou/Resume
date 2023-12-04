import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Container, Button} from 'react-bootstrap';

function ExperienceForm({onSubmit}) {
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
                className='textAreaExp'
                as="textarea"
                value={value.text}
                onChange={(e) =>
                  setTextareas([
                    ...textareas.slice(0, index),
                    e.target.value,
                    ...textareas.slice(index + 1)
                  ])
                }
              />
            </Form.Group>
          ))}
        <Row className="mb-3">
          <Form.Group controlId="formGridCheckbox" className="col col-sm-6 mt-3 mb-3">
            <button type="submit"  onClick={handleSubmit} className="me-4 btn btn-lg btn-block submit">Submit</button>
            <Button className='me-4 btn btn-lg btn-block submit' onClick={addTextarea}>Add Experience</Button>
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

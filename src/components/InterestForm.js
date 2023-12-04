import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row } from 'react-bootstrap';
function InterestForm({onSubmit}) {
    const [form, setForm] = useState([]);
    const navigate = useNavigate ();
  
    const addTextarea = () => {
      const newField = {interest:""};
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
      navigate('/resume')
    };
    function handleback(e){
      //navigate('/job')
    }

  return (
    <Container className='main-form'>
        <div className='mt-3 mb-3 main-form-text'>
            <div className='form-header mt-3 mb-3'>
            <h2>Let's showcase your Interest</h2>
            </div>
            <div className='exp_form'>
            <form className="container mt-3 mb-3 exp_forms" onSubmit={handleSubmit} >
            {form.map((value, index) => (
                    <div controlId={`textarea-${index}`} key={index}>
                    <Row className='mb-3'>
                        <Form.Group className='mt-3 mb-3 col col-sm-5'>
                        <Form.Label>Interest</Form.Label>
                        <Form.Control 
                            type='text'
                            value={value.interest}
                            onChange={(e) => handleChange(index, "interest", e.target.value)}
                        />
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
                    <Button className='me-4 btn btn-lg btn-block submit' onClick={addTextarea}>Add Interest</Button>
                    <button type="reset" onClick={handleback} className="me-4 btn btn-danger btn-lg btn-block submit_back">Back</button>
                </Form.Group>
                </Row>
            </form>
            </div>
        </div>
    </Container>
  )
}

export default InterestForm

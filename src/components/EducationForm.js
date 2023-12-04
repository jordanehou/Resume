import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Card, Container} from 'react-bootstrap';

function EducationForm({onSubmit}) {
    const [form, setForm] = useState({ school_name: '', school_location:'', degree:'', field_study:'', graduation_year:''});
    const navigate = useNavigate();
    const handleChange = (event) => {
      
      const { name, value } = event.target;
      setForm((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(form);
      navigate('/skill');
    };
    function handleback(e){
        navigate('/experience')
      }
  return (
    <div>
      <Container className='main-form'>
        <div className='mt-3 mb-3 main-form-text'>
            <div className='form-header mt-3 mb-3'>
                <h2>Let's showcase your education</h2>
            </div>
            <Card className="around">
                <Card.Body>
                    <form className="container mt-3 mb-3 form-text" onSubmit={handleSubmit} >
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>Shool Name</Form.Label>
                                <Form.Control type="text" name="school_name" value={form.school_name} onChange={handleChange} className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>School Location</Form.Label>
                                <Form.Control type="text" name="school_location" value={form.school_location} onChange={handleChange} className="form-control" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                                <Form.Label>Degree</Form.Label>
                                <Form.Control type="text" name="degree" value={form.degree} onChange={handleChange} className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                                <Form.Label>Field Study</Form.Label>
                                <Form.Control type="text" name="field_study" value={form.field_study} onChange={handleChange} className="form-control" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                                <Form.Label>Graduation Year</Form.Label>
                                <Form.Control type="date" name="graduation_year" value={form.graduation_year} onChange={handleChange} className="form-control" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="formGridCheckbox" className="col col-sm-6 mt-3 mb-3">
                                <button type="submit" className="me-4 btn btn-lg btn-block submit">Submit</button>
                                <button type="reset" onClick={handleback} className="me-4 btn btn-danger btn-lg btn-block submit_back">Back</button>
                            </Form.Group>
                        </Row>
                    </form>
                </Card.Body>
            </Card>

        </div>
    </Container>
    </div>
  )
}

export default EducationForm

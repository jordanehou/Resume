import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Card, Container} from 'react-bootstrap';

function JobForm({onSubmit}) {
    const [form, setForm] = useState({ job_title: '', employer:'', city:'', state:'', start_date_year:'', end_date_year: ''});
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
    navigate('/experience');
  };
  function handleback(e){
    navigate('/')
  }
  return (
    <Container className='main-form'>
        <div>
            <div className='form-header mt-3 mb-3'>
                <h2>Let's showcase your work experience</h2>
                <p>Tell us about your job</p>
            </div>
            <Card className="around" >
                <Card.Body>
                    <form className="container mt-3 mb-3 form-text" onSubmit={handleSubmit} >
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control type="name" name="job_title" value={form.job_title} onChange={handleChange} className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>Employer</Form.Label>
                                <Form.Control type="text" name="employer" value={form.employer} onChange={handleChange} className="form-control" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" name="city" value={form.city} onChange={handleChange} className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" name="state" value={form.state} onChange={handleChange} className="form-control" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                                <Form.Label>Start date year</Form.Label>
                                <Form.Control type="date" name="start_date_year" value={form.start_date_year} onChange={handleChange} className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                                <Form.Label>End date year</Form.Label>
                                <Form.Control type="date" name="end_date_year" value={form.end_date_year} onChange={handleChange} className="form-control" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="formGridCheckbox" className="col col-sm-6 mt-3 mb-3">
                                <button type="submit" className="me-4 btn btn-lg btn-block submit">Submit</button>
                                <button type="reset" onClick={handleback} className="me-4 btn btn-danger btn-lg btn-block submit_back">Cancel</button>
                            </Form.Group>
                        </Row>
                    </form>
                </Card.Body>
            </Card>

        </div>
    </Container>
  )
}

export default JobForm

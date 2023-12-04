import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Card, Container} from 'react-bootstrap';
//import formStyle from './style/formStyle.css';
//import { border } from '@chakra-ui/react';
function ContactForm({ onSubmit}){
  const [form, setForm] = useState({ first_name: '', last_name:'', city:'', state:'', zip:'', email: '', phone:'', image:''});
  //const [selectedImage, setSelectedImage] = useState(null);
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
    navigate('/job');
  };

  function handleback(e){
    navigate('/')
  }

  return (
    <Container className='main-form'>
        <div className='mt-3 mb-3 main-form-text'>
            <div className='form-header mt-3 mb-3'>
                <h2>Let create a header for your resume</h2>
                <p>use professional email and a phone for employers to reach you</p>
            </div>
            <Card className="around" style={{border:'none'}}>
                <Card.Body >
                    <form className="container mt-3 mb-3 form-text" onSubmit={handleSubmit} >
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name="first_name" value={form.first_name} onChange={handleChange} className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name="last_name" value={form.last_name} onChange={handleChange} className="form-control" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" name="city" value={form.city} onChange={handleChange} className="form-control" />
                            </Form.Group>
                                <Form.Group controlId="formBasicMobile" className="col col-sm-3">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" name="state" value={form.state} onChange={handleChange} className="form-control" />
                                </Form.Group>
                                <Form.Group controlId="formBasicMobile" className="col col-sm-3">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="text" name="zip" value={form.zip} onChange={handleChange} className="form-control" />
                                </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="number" name="phone" value={form.phone} onChange={handleChange} className="form-control" />
                            </Form.Group>
                            <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" value={form.email} onChange={handleChange} className="form-control" />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group>
                                <Form.Label>Upload Image</Form.Label>
                                <Form.Control type="file" name='image' onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="formGridCheckbox" className="col col-sm-6 mt-3 mb-3">
                                <button type="submit" style={{backgroundColor:'#1E4E70', color:'white'}} className="me-4 btn btn-lg btn-block submit">Submit</button>
                                <button type="reset" onClick={handleback} className="me-4 btn btn-danger btn-lg btn-block submit_back">Back</button>
                            </Form.Group>
                        </Row>
                    </form>
                </Card.Body>
            </Card>

        </div>
    </Container>
  );
};

export default ContactForm;
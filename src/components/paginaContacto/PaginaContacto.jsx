import {Form, Button, Container, Row, Col } from 'react-bootstrap'
import "./paginaContacto.css"

function PaginaContacto() {

    return (
        <Container fluid>
            <Row>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23428.030561029045!2d-65.03629775!3d-42.777697849999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1654913022931!5m2!1ses-419!2sar"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className='mapa'>
                </iframe>
            </Row>
                   
            <Container bsPrefix="container my-5">
                <Row className='mb-5 text-center'>
                    <h1>Ponete en Contacto con nosotros</h1>
                </Row>

                <Row className="justify-content-md-center">

                    <Col sm={4}>
                   <h2>Datos de contacto</h2>
                    </Col>

                    <Col sm={4}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Ingresar Nombre" />                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Ingresar Apellido" />                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Mail</Form.Label>
                                <Form.Control type="mail" placeholder="Ingresar email" />                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Asunto</Form.Label>
                                <Form.Control type="text" placeholder="Ingresar email" />                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control as="textarea" rows={3} />                               
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>                    
                    </Col>

              </Row>

            </Container>
                    


          </Container>
      )
  
  }

export default PaginaContacto
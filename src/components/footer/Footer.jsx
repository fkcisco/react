import {Row, Container } from 'react-bootstrap'
import './footer.css'

function Footer() {

    return (
        
        <footer>
            <Container fluid>
                <Row>
                    <p className='textoBlanco'> Desarrollado por Francisco Robledo</p>

                </Row>
            </Container>
        </footer>
        
    )
}

export default Footer
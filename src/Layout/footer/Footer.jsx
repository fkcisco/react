import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import './footer.css'

function Footer() {
    return (        
        <footer className='mt-5 text-center' >
            <Container fluid >
                <Row>
                    <p className='textoBlanco'> Desarrollado por Francisco Robledo</p>
                </Row>
            </Container>
        </footer>
        
    )
}
export default Footer
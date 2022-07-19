import { Carousel } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Slider1 from '../../media/img/slider1.jpg'
import Slider2 from '../../media/img/slider2.jpg'
import './slider.css'

function sliderHome() {

    return(
        <Container fluid>
            <Carousel>
                <Carousel.Item>
                    <div className='degrade'></div>
                    <img
                    className="d-block w-100"
                    src={Slider1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Zapatillas</h3>
                        <p>Encontra las mejores zapatillas del mercado</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='degrade'></div>
                    <img
                    className="d-block w-100"
                    src={Slider2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Medias</h3>
                        <p>Detalle del slider numero 2</p>
                    </Carousel.Caption>
                </Carousel.Item>                
            </Carousel>
        </Container>
    )
}
export default sliderHome
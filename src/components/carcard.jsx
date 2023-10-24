import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/ca.jpg'
import Image2 from '../assets/cb.jpeg'
import Image3 from '../assets/cc.png'
import Image4 from '../assets/cd.png'
import Container from 'react-bootstrap/Container';

function CarCard() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className='d-block w-100'
          height="500px"
          src={Image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          height="500px"
          src={Image2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          height="500px"
          src={Image3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          height="500px"
          src={Image4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarCard;
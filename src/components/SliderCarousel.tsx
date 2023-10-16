import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import product1 from "../assets/image-product-1.jpg"
import product2 from "../assets/image-product-2.jpg"
import product3 from "../assets/image-product-3.jpg"
import product4 from "../assets/image-product-4.jpg"

const SliderCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    product1,
    product2,
    product3,
    product4
  ];

  return (
    <CarouselContainer>
        <Slider className='slider' {...settings}>
      {slides.map((slide, index) => (
        <div  key={index}>
          <img src={slide} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
    </CarouselContainer>
  );
};

export default SliderCarousel;



const CarouselContainer = styled.div`
  max-width: 550px;
  margin: 0 auto;
  .slider {
     max-width: 550px;
  }
  img {
  width: 375px;
  height: auto;
     
  }
`;

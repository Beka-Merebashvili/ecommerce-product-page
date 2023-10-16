import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";

const ArrowButton = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
  z-index: 1;
  ${({ direction }) => (direction === "prev" ? "left: 10px;" : "right: 10px;")}
`;

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <ArrowButton direction="prev" onClick={onClick}>
    &#8249;
  </ArrowButton>
);

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <ArrowButton direction="next" onClick={onClick}>
    &#8250;
  </ArrowButton>
);

const SliderCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
  };

  const slides = [product1, product2, product3, product4];

  return (
    <CarouselContainer>
      <Slider className="slider" {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
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
    width: 100%;
    height: auto;
  }
`;

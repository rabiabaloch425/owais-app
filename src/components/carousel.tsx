import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (
    selectedIndex: React.SetStateAction<number>,
    e: any
  ) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 sm:h-full md:h-[800px]"
            src="assets/images/carosel1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 sm:h-full md:h-[800px]"
            src="assets/images/carosel1.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 sm:h-full md:h-[800px]"
            src="assets/images/carosel1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselPage;

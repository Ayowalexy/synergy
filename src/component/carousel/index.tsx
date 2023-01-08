import React, { useState, useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Girl from "../../assets/jpgs/home/girl.jpg";
import Boy from "../../assets/jpgs/home/boy.jpg";
import { CarouselStyle } from "./style";

export default function SlideShow({ slides }: { slides: string[] }) {
  return (
    <CarouselStyle>
      <Carousel
        autoPlay
        showThumbs={false}
        className="container"
        showStatus={false}
      >
        {slides.map((slide, i) => (
          <div key={i}>{<img style={{height: '225px ' }} src={slide} alt="girl" />}</div>
        ))}
      </Carousel>
    </CarouselStyle>
  );
}

export const TextSlide = ({ slides }: { slides: string[] }) => {
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      className="container"
      showStatus={false}
      axis="vertical"
      showIndicators={false}
      showArrows={false}
      stopOnHover={false}
      infiniteLoop={true}
      dynamicHeight={true}
      verticalSwipe="natural"
      centerMode={true}
      centerSlidePercentage={100}
    >
      {slides.map((slide, i) => (
        <div key={i} className="right">
          {slide}
        </div>
      ))}
    </Carousel>
  );
};

export const TextChange = () => {
  const textArr = ["Community!", " Service!", "Opportunity!"];
  const [text, setText] = useState(textArr[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (text === textArr[2]) {
        setText(textArr[0]);
      } else {
        setText(textArr[textArr.indexOf(text) + 1]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <>
      <CarouselStyle>
        <div className="text">
          <h1>Enjoy The Best</h1>
          <div style={{marginTop: 10}} className="text_change">
            <div>Youth</div>
            <div>
              <div className="slide">
                <span>Community!</span>
              </div>
            </div>
          </div>
        </div>
      </CarouselStyle>
    </>
  );
};

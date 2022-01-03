import "./ApprovedImagesSection.css";
import CheckedImage from "../CheckedImage/CheckedImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import LeftArrow from "../../media/LeftArrow";
import RightArrow from "../../media/RightArrow";

const ApprovedImagesSection = ({
  imageList,
  handleClickImageDeleter,
  currentSlide,
  handleChangeNumSlide,
}) => {
  var settings = {
    infinite: false,
    speed: 300,
    centerMode: false,
    variableWidth: false,
    arrows: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let slider = React.useRef(null);

  const gotoNext = () => {
    slider.current.slickNext();
    const add = +1;
    handleChangeNumSlide(add);
    console.log(slider.current)
  };

  const gotoPrev = () => {
    slider.current.slickPrev();
    const subtract = -1;
    handleChangeNumSlide(subtract);
  };

  const showLeftArrow = () => {
    if (currentSlide <= 0) {
      return "";
    } else {
      return (
        <div
          className="ApprovedImagesSection-arrows"
          onClick={() => gotoPrev()}
        >
          <LeftArrow color="blue" width="20px" height="30px" />
        </div>
      );
    }
  };
  
  const showRightArrow = () => {
    const slidesToShow = 3.5;
    if (currentSlide > (imageList.length-slidesToShow)-1) {
      return "";
    } else {
      return (
        <div
          className="ApprovedImagesSection-arrows"
          onClick={() => gotoNext()}
        >
          <RightArrow color="blue" width="20px" height="30px" />
        </div>
      );
    }
  };

  return (
    <div className="ApprovedImagesSection-container">
      {showLeftArrow()}
      {imageList.length > 0 ? (
        <Slider ref={slider} {...settings}>
          {imageList.map((imageUrl, index) => (
            <div
              className="ApprovedImagesSection-slider-element"
              onClick={() => handleClickImageDeleter(index, imageUrl)}
            >
              <CheckedImage image={imageUrl} />
            </div>
          ))}
        </Slider>
      ) : (
        <CheckedImage isDisabled={true} />
      )}
      {showRightArrow()}
    </div>
  );
};

export default ApprovedImagesSection;

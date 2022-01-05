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
  const settings = {
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
          slidesToShow: 7.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 9.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 250,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 150,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
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
    if (currentSlide < 1) {
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

  const isOdd = (num) => { return num % 2 === 1 }

  const showRightArrow = () => {
    const responsiveSetting = settings.responsive.filter(el => el.breakpoint <= window.innerWidth)
    const resolveSettingBreakpoint = responsiveSetting.sort((a,b) => b.breakpoint-a.breakpoint)
    const slidesSetting = resolveSettingBreakpoint[0].settings.slidesToShow;
    const slidesToShow = !isOdd(imageList.length) ? slidesSetting : Math.round(slidesSetting);
    if (currentSlide > (imageList.length-slidesToShow) ) {
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
  )
};

export default ApprovedImagesSection;

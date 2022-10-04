import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  StyledContainer,
  Header,
  headerSpringProps,
  Body,
} from "../Style/Stuff";
import { useSpring, animated } from "react-spring";
import { Button, Switch } from "@material-ui/core";

import data from "../Data/data.json";
import Back from "../Style/StyledBack";
import Picture from "../Style/Picture";
import Port3D from "./AnimatedPortfolio";
import LegacyPortfolio from "./LegacyPortfolio";

import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper-bundle.min.css";
import { FreeMode, Navigation, Thumbs } from "swiper";

// icon by icon-small: https://www.flaticon.com/authors/icon-small
import CarouselNextBtn from "./next-button.svg";
import { useWindowSize } from "@react-hook/window-size";
import breakpoint from "../Style/Common/breakpoints";

import { shuffleArray } from "../utils/utils";
import { ImageData } from "./LegacyPortfolio";

export function Portfolio(): JSX.Element {
  const headerProps = useSpring(headerSpringProps);
  const [isViewing3D, setIsViewing3d] = useState<boolean>(false);
  const [isSlider, setIsSlider] = useState<boolean>(false);
  const [isViewingThumbnails, setIsViewingThumbnails] =
    useState<boolean>(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(undefined);
  const [width, height] = useWindowSize();

  // Disable animation for mobile views
  const isAnimationEnabled: boolean = width >= breakpoint.size.md;

  const shuffledData = shuffleArray(data.images);

  const renderImgs = (isThumbs?: boolean) =>
    shuffledData.map((img: ImageData) => (
      <StyledSwiperSlide
        showthumbs={isThumbs === true ? "true" : ""}
        key={`${img.url}`}
      >
        <Picture
          url={img.url}
          hasMargin={true}
          isAnimationEnabled={!isThumbs && isAnimationEnabled}
          isThumbs={isThumbs}
        />
      </StyledSwiperSlide>
    ));

  const on3DToggle = () => {
    setIsViewing3d(!isViewing3D);
  };

  const onLegacyToggle = () => {
    setIsViewingThumbnails(!isViewingThumbnails);
  };

  const onSliderToggle = () => {
    setIsSlider(!isSlider);
  };

  return (
    <>
      <Header maxWidth="md">
        <animated.h1 style={headerProps}>Art Portfolio</animated.h1>
      </Header>

      <StyledContainer maxWidth="md">
        <Body>
          <Back />
          <ButtonContainer>
            <Button onClick={on3DToggle} data-test="toggle-button">
              <H3>View {isViewing3D ? "Static" : "Animated"} Content</H3>
            </Button>
            {!isViewing3D && (
              <Button onClick={onSliderToggle} data-test="toggle-button-1">
                <H3>View as {isSlider ? "Slider" : "Cards"}</H3>
              </Button>
            )}
          </ButtonContainer>
          {isViewing3D ? (
            <Port3D />
          ) : isSlider ? (
            <LegacyPortfolio />
          ) : (
            <ImagesContainer data-test="image-container">
              <StyledSwiper
                loop={true}
                spaceBetween={10}
                navigation={isAnimationEnabled ? true : false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                direction={isAnimationEnabled ? "horizontal" : "vertical"}
                pagination={{
                  clickable: true,
                }}
              >
                {renderImgs()}
              </StyledSwiper>
              {isAnimationEnabled && (
                <H3>
                  Thumbnails
                  <StyledSwitch
                    checked={isViewingThumbnails}
                    onChange={onLegacyToggle}
                    style={{
                      color: "success.main",
                    }}
                  />
                </H3>
              )}
              {isAnimationEnabled && isViewingThumbnails && (
                <StyledSwiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                  showthumbs="true"
                  simulateTouch={true}
                >
                  {renderImgs(true)}
                </StyledSwiper>
              )}
            </ImagesContainer>
          )}
        </Body>
      </StyledContainer>
    </>
  );
}

export default Portfolio;

const ImagesContainer = styled.div`
  display: grid;
`;

const H3 = styled.h3`
  color: ${({ theme }) => theme.colours.orangePeel};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  flex-direction: column;
  gap: 25px;

  h3 {
    margin: auto;
  }
`;

const StyledSwiper = styled(Swiper)<{ showthumbs?: string }>`
  width: 100%;
  height: ${({ showthumbs }) => (showthumbs ? " 100px" : "400px")};
  margin-bottom: 40px;

  .swiper-button-next,
  .swiper-button-prev {
    width: calc(var(--swiper-navigation-size) / 29 * 27);
    background-image: url(${CarouselNextBtn});
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    transition: filter 1s;
    &:hover {
      filter: drop-shadow(-3px 0 4px #ff0);
    }
  }

  .swiper-button-prev {
    transform: scale(-1, -1);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)<{ showthumbs: string }>`
  text-align: center;
  font-size: 18px;
  background: ${({ showthumbs }) =>
    showthumbs === "true" ? "transparent" : "#fff "};

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    filter: ${({ showthumbs }) =>
      showthumbs === "true" ? "saturate(0.5)" : "saturate(1)"};
    transition: filter 0.25s ease-in, border 0.25s ease-in-out;
  }

  &.swiper-slide-thumb-active {
    /* filter: drop-shadow(-3px 0 4px #ff0); */
    > div {
      border: 2px solid #ff0;
      filter: saturate(1);
    }
  }

  &:hover > div {
    filter: saturate(1);
  }
`;

const StyledSwitch = styled(Switch)<{}>`
  .MuiSwitch-colorSecondary.Mui-checked,
  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    color: ${({ theme }) => theme.colours.orangePeel};
  }

  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: ${({ theme }) => theme.colours.orangePeel};
  }
`;

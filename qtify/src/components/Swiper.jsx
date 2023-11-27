import React from "react";
import { Autoplay, Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as PrevIcon } from "../assets/left-arrow.svg";
import { ReactComponent as NextIcon } from "../assets/right-arrow.svg";
// Import Swiper styles
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import AlbumCard from "./AlbumCard";

const MySwiper = ({ slides, enableAutoplay, isAlbum }) => {
  return (
    <Swiper
      modules={[Virtual, Navigation, Autoplay]}
      slidesPerView={8}
      spaceBetween={30}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }}
      autoplay={
        enableAutoplay
          ? {
              delay: 2500,
              disableOnInteraction: true,
            }
          : false
      }
      grabCursor={true}
      speed={1000}
      effect="fade"
      virtual
      breakpoints={{
        0: { slidesPerView: 2, spaceBetween: 10 },
        600: { slidesPerView: 3, spaceBetween: 20 },
        960: { slidesPerView: 4, spaceBetween: 30 },
        1280: { slidesPerView: 5, spaceBetween: 40 },
        1920: { slidesPerView: 7, spaceBetween: 30 },
      }}
    >
      {slides.map((item) => (
        <SwiperSlide key={item.id}>
          <AlbumCard
            img={item.image}
            follows={item.follows || item.likes}
            title={item.title}
            songs={item?.songs?.length || null}
            isAlbum={isAlbum}
          />
        </SwiperSlide>
      ))}
      <Box
        className="button-next"
        style={{
          // width: "2rem",
          // height: "2rem",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1000,
          cursor: "pointer",
        }}
        sx={{ "&:active": { opacity: "0.4" } }}
      >
        <NextIcon />
      </Box>
      <Box
        className="button-prev"
        style={{
          // width: "2rem",
          // height: "2rem",
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1000,
          cursor: "pointer",
        }}
        sx={{
          "&:active": {
            opacity: "0.4",
          },
        }}
      >
        <PrevIcon />
      </Box>
    </Swiper>
  );
};

export default MySwiper;

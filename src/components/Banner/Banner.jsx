import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.scss";

const Banner = (props) => {
  const { images } = props;

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect="fade"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {images.map((img, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <img src={img.imgURL} alt="image banner" />
              </SwiperSlide>
              ;
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default Banner;

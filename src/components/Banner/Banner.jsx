import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.scss";
import { useNavigate } from "react-router-dom";

const Banner = (props) => {
  const navigate = useNavigate();
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
              <SwiperSlide
                key={index}
                onClick={() => navigate("collections/all")}
              >
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

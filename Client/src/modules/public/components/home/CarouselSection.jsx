import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import kasap from "../../../../shared/assets/images/kasap.webp";
import manav from "../../../../shared/assets/images/manav.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselSection = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img className="w-full h-[70vh] rounded-md object-cover object-top" src={kasap} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[70vh] rounded-md object-cover object-top" src={manav} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselSection;

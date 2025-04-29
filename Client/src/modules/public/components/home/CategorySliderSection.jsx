import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Header from "../../../../shared/components/Header";
import CategorySliderCard from "./CategorySliderCard";
import categories from "../../../../shared/data/categories";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CategorySliderSection = () => {
  return (
    <>
      <Header>Ausgewählte Kategorien</Header>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={0}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 8 },
        }}
        navigation
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CategorySliderCard image={category.image} title={category.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategorySliderSection;

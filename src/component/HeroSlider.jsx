// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { data } from "../../data";

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item) => {
        return (
          <SwiperSlide>
            <div className="w-full bg-[#ffffff]">
              <div className="flex items-center gap-10 justify-center md:h-[500px] md:w-[1152px] mx-auto">
                <img src={item.image} alt="" className="w-[400px]" />
                <span className="flex flex-col gap-5">
                  <p className="text-2xl">{item.description}</p>
                  <p className="text-8xl text-zinc-900">{item.heading}</p>
                  <p className="text-3xl text-zinc-600 text-justify">{item.subheading}</p>
                </span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;

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
            <div className="w-full bg-[#ffffff] px-2 md:px-0">
              <div className="flex md:flex-row flex-col items-center gap-10 justify-center md:h-[500px] h-auto md:w-[1152px] mx-auto">
                <img src={item.image} alt="" className="md:w-[400px] w-full" />
                <span className="flex flex-col gap-5">
                  <p className="text-2xl md:text-start text-center">{item.description}</p>
                  <p className="text-8xl text-zinc-900 md:text-start text-center">{item.heading}</p>
                  <p className="text-3xl text-zinc-600 text-justify md:px-0 px-2">{item.subheading}</p>
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

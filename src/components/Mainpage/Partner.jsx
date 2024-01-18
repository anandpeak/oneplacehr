import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const Partner = () => {
  return (
    <div>
      <div className="bg-[#202020]">
        <div className="flex justify-center">
          <div className="text-center my-10">
            <p className="sm:text-[56px] text-[36px]  font-bold text-style">
              Our <span className="text-white">Partners</span>
            </p>
            <p className="text-[24px] sm:block hidden text-white opacity-50 ">
              Discover our esteemed partners, a diverse network <br /> driving
              innovation and excellence. Join us in forging <br />
              strategic alliances for impactful solutions.
            </p>
            <p className="text-[16px] sm:hidden block text-white opacity-50 ">
              Discover our esteemed partners, a diverse <br /> network driving
              innovation and excellence. <br />
              Join us in forging strategic alliances for <br /> impactful
              solutions.
            </p>
          </div>
        </div>
        <div className="flex items-center pb-20">
          <Swiper
            modules={[Autoplay, FreeMode]}
            autoplay={true}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex justify-center ">
                <img src="./partners/astana.png" alt="astana" />
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="flex justify-center ">
                <img src="./partners/microsoft.png" alt="microsoft" />
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="flex justify-center ">
                <img src="./partners/morrow.png" alt="morrow" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center ">
                <img src="./partners/msdi.png" alt="msdi" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center ">
                <img src="./partners/mstars.png" alt="mstars" />
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="flex justify-center ">
                <img src="./partners/silkway.png" alt="silkway" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center ">
                <img src="./partners/ucla.png" alt="ucla" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partner;

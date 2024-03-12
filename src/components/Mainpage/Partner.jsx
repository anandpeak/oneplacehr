import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { useTranslation } from "react-i18next";

const Partner = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-[#202020]">
        <div className="flex justify-center">
          <div className="text-center my-10">
            <p className="sm:text-[56px] text-[36px]  font-bold text-style">
              {t("Mainpage.Partner.title1")}{" "}
              <span className="text-white">{t("Mainpage.Partner.title2")}</span>
            </p>
            <p className="text-[24px] sm:block hidden w-[700px] text-white opacity-50 ">
              {t("Mainpage.Partner.description")}
            </p>
            <p className="text-[16px] sm:hidden block text-white opacity-50 ">
              {t("Mainpage.Partner.description")}
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
                <img
                  className="mt-4"
                  src="./partners/microsoft.png"
                  alt="microsoft"
                />
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
                <img
                  className="mb-2"
                  src="./partners/mstars.png"
                  alt="mstars"
                />
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="flex justify-center ">
                <img
                  className="mt-2"
                  src="./partners/silkway.png"
                  alt="silkway"
                />
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

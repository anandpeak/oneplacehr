import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { useTranslation } from "react-i18next";

const PrestigiousSec = () => {
  const items = [
    {
      id: 1,
      comment:
        "Манай компанийн хувьд дэлгэрэнгүй текст авахаас илүүтэйгээр богино тоглоом дээр суурилсан тест авахын илүүд үзэж байгаа. Энэхүү тест нь ажилтан  болон  ажил олгогч нартаа аль алиндаа хугацаа хэмнэсэн мөн өндөр бүтэмжтэй байна.",
      name: "Э. Отгонтуяа",
      position: "Тесо ХХК Хүний нөөцийн бодлогын менежер",
      img: "./test.png",
    },
    {
      id: 2,
      comment:
        "Хүний нөөцийн салбарт шинэлэг арга барил нэвтрүүлж байгаа. Цаашдаа улам олон харилцагчтай болж, олон дата өгөгдөлтэй болсоноор ажиллах хүчний хувьд ур чадварын нийтлэг дүр төрх дээрх шинжилгээ хийж болохоор санагдсан.",
      name: "Д. Эрдэнэбаяр",
      position: "Coca cola's Сургалтын хөгжлийн албаны дарга",
      img: "./test.png",
    },
    {
      id: 3,
      comment:
        "Зөв шийдвэр гаргалтын үндэс нь зөв дата байдаг. Metacog-г ашигласнаар сүүлийн үеийн сонирхолтой, шинэлэг аргаар ажилтнуудын оролцоо хамгийн өндөр хувьтайгаар бие хүний суурь ур чадварын оношилгоог амжилттай хийж чадсан.",
      name: "Д. Алтантуяа",
      position: "Мандал санхүүгийн нэгдэл хүний нөөцийн захирал",
      img: "./test.png",
    },
    {
      id: 4,
      comment:
        "The Gamified HR Platform has revolutionized our hiring process, making it efficient and enjoyable. A true game-changer for talent acquisition!",
      name: "Shinebold Ganbold",
      position: "HRD of MCS Academy",
      img: "./test.png",
    },
  ];
  const { t } = useTranslation();
  return (
    <div className="bg-[#000] mb-20 py-10 overflow-hidden">
      <div className="flex justify-center ">
        <div>
          <p className="text-style sm:text-[48px]  text-[36px] text-center font-bold">
            {t("Mainpage.Prestigious.title1")}{" "}
            <span className="text-[#fff]">
              {t("Mainpage.Prestigious.title2")}
            </span>
          </p>
          <p className="sm:block hidden text-[24px] w-[800px]  text-white text-center mt-2 opacity-50">
            {t("Mainpage.Prestigious.description")}
          </p>
          <p className="sm:hidden block text-[16px]  text-white text-center mt-2 opacity-50">
            {t("Mainpage.Prestigious.description")}
          </p>
        </div>
      </div>
      <div className="flex relative justify-center mx-3  my-10 ">
        <Swiper
          modules={[Autoplay, FreeMode]}
          grabCursor={true}
          autoplay={true}
          freeMode={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
        >
          {items.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="bg-white flex-col relative  lg:h-[450px] md:h-[380px] sm:h-[400px] h-[320px] rounded-xl me-5 pointer-events-none">
                  <div className="lg:p-5 sm:p-5 p-5 md:p-3 ">
                    <div className="px-5">
                      <svg
                        className="hidden sm:block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="24"
                        viewBox="0 0 32 24"
                        fill="none"
                      >
                        <path
                          d="M10.1014 0.222643C8.20482 1.08848 5.78873 2.82015 4.30444 4.3869C1.42657 7.42969 0 10.7941 0 14.513C0 17.0363 0.478271 18.834 1.59149 20.5492C2.85313 22.4705 4.12302 23.394 6.14331 23.8641C7.33898 24.1362 9.14487 23.9878 10.2004 23.526C12.3938 22.5529 13.8946 19.9884 13.7462 17.4651C13.606 15.1315 12.4103 13.3256 10.3488 12.3031C9.94474 12.1052 9.36751 11.8826 9.07065 11.8083C7.86673 11.5032 6.36595 11.528 5.40941 11.8578C5.13729 11.9485 4.9064 12.0062 4.88166 11.9898C4.80745 11.9073 5.04658 10.7941 5.3187 9.98597C5.89593 8.24605 6.71228 6.91019 7.99867 5.55784C9.12013 4.39515 10.3653 3.42211 11.8166 2.58926C12.1959 2.37486 12.2124 2.35012 12.097 2.1852C12.031 2.08625 11.6682 1.55026 11.2806 1.00602L10.5879 0L10.1014 0.222643Z"
                          fill="#879DAB"
                        />
                        <path
                          d="M27.0719 0.561205C20.9286 3.75243 17.3333 9.27728 17.5889 15.1485C17.6879 17.5068 18.2486 19.2468 19.469 20.9537C20.9204 22.9987 22.8169 23.9965 25.233 23.9882C26.4122 23.9882 27.1956 23.8233 28.1109 23.3863C29.5705 22.6936 30.7909 20.9949 31.2197 19.0653C31.4176 18.1583 31.3516 16.7482 31.063 15.8576C30.3786 13.7631 28.5892 12.1964 26.3463 11.7346C25.1011 11.479 23.4354 11.5944 22.6685 11.982C22.3717 12.1387 22.3717 12.1222 22.5943 11.1326C23.3117 7.90843 25.1506 5.38514 28.35 3.25766C28.8366 2.92782 29.3643 2.60623 29.5045 2.5485C29.6529 2.49078 29.7684 2.40007 29.7684 2.35884C29.7684 2.29288 28.3913 0.256102 28.2099 0.0499496C28.1851 0.0169659 27.6656 0.247854 27.0719 0.561205Z"
                          fill="#879DAB"
                        />
                      </svg>
                    </div>
                    <p className="text-[14px] sm:text-[18px] md:text-[14px] px-5 lg:text-[19px] my-4">
                      {item.comment}
                    </p>
                  </div>
                  <div className="absolute w-full  bottom-0">
                    <hr />
                    <div className="flex p-1 h-[70px] md:h-[110px] lg:h-[100px]  items-center">
                      <img
                        className="h-14 w-14 border-2 rounded-full  mx-4"
                        src={item.img}
                        alt="profile"
                      />
                      <div>
                        <p className="sm:text-[21px]  text-[16px] text-semibold">
                          {item.name}{" "}
                        </p>
                        <p className="opacity-50 text-[12px] md:text-[10px] sm:text-[14px] lg:text-[14px]">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PrestigiousSec;

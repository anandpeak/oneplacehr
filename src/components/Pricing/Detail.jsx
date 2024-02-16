import React from "react";
import datas from "./subscription_packages.json";

const Detail = () => {
  const { packages } = datas;
  return (
    <div>
      <div className="my-20">
        <p className="text-4xl text-center text-[#F28979] font-bold">
          Дэлгэрэнгүй
        </p>
      </div>
      <div>
        <div>
          <p className="text-3xl text-[#F28979] font-bold">Бүтээгдэхүүн</p>
          <img className="w-full" src="./vectors/longFlat.png" alt="vector" />
          <div className="flex items-start justify-between">
            <div className="">
              {packages[0].product.map((items, index) => (
                <div key={index}>
                  <p
                    className={`${
                      index > 0 ? "font-bold" : ""
                    } text-lg mb-7 w-[200px]`}
                  >
                    {items}
                  </p>
                </div>
              ))}
            </div>
            <div className="">
              {packages[1].product.map((items, index) => (
                <div key={index}>
                  <p
                    className={`${
                      index > 0 ? "font-bold" : ""
                    } text-lg mb-7 w-[200px]`}
                  >
                    {items}
                  </p>
                </div>
              ))}
            </div>
            <div className="">
              {packages[2].product.map((items, index) => (
                <div key={index}>
                  <p
                    className={`${
                      index > 0 ? "font-bold" : ""
                    } text-lg mb-7 w-[200px]`}
                  >
                    {items}
                  </p>
                </div>
              ))}
            </div>
            <div className="">
              {packages[3].product.map((items, index) => (
                <div key={index}>
                  <p
                    className={`${
                      index > 0 ? "font-bold" : ""
                    } text-lg mb-7 w-[200px]`}
                  >
                    {items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>{" "}
        <div>
          <p className="text-3xl text-[#F28979] font-bold">Платформ</p>
          <img className="w-full" src="./vectors/longFlat.png" alt="vector" />
          <div className="flex items-start justify-between">
            <div className="">
              {packages[0].platform.map((items, index) => (
                <div key={index}>
                  <p className={`text-lg mb-7 w-[200px]`}>{items}</p>
                </div>
              ))}
            </div>
            <div className="">
              {packages[1].platform.map((items, index) => (
                <div key={index}>
                  <p className={`text-lg mb-7 w-[200px]`}>{items}</p>
                </div>
              ))}
            </div>
            <div className="">
              {packages[2].platform.map((items, index) => (
                <div key={index}>
                  <p className={`text-lg mb-7 w-[200px]`}>{items}</p>
                </div>
              ))}
            </div>
            <div className="">
              {packages[3].platform.map((items, index) => (
                <div key={index}>
                  <p className={`text-lg mb-7 w-[200px]`}>{items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>{" "}
        <div>
          <p className="text-3xl text-[#F28979] font-bold">Тоглоомын тайлан</p>
          <img className="w-full" src="./vectors/longFlat.png" alt="vector" />
          <div className="flex items-start justify-between">
            <div className="">
              {packages[0].report.map((items, index) => (
                <div key={index}>
                  <p className={`text-lg mb-7 w-[220px]`}>{items}</p>
                </div>
              ))}
            </div>
            <div className="">
              {packages[1].report.map((items, index) => (
                <div key={index}>
                  <p className={`text-lg mb-7 w-[220px]`}>{items}</p>
                </div>
              ))}
            </div>
            <div className="">
              {packages[2].report.map((items, index) => (
                <div key={index}>
                  <p className={`text-lg mb-7 w-[220px]`}>{items}</p>
                </div>
              ))}
            </div>
            <div className="">
              {packages[3].report.map((items, index) => (
                <div key={index}>
                  <p className={`text-lg mb-7 w-[220px]`}>{items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-3xl text-[#F28979] font-bold">Тоглоомын тайлан</p>
          <img className="w-full" src="./vectors/longFlat.png" alt="vector" />
          <div className="flex items-start justify-between">
            <div className="">
              {packages[0].assistance.map((items, index) => (
                <div key={index}>
                  <p className={`text-lg mb-7 w-[220px]`}>{items}</p>
                </div>
              ))}
            </div>
            <div className="">
              {packages[1].assistance.map((items, index) => (
                <div key={index}>
                  <p className={`text-lg mb-7 w-[220px]`}>{items}</p>
                </div>
              ))}
            </div>
            <div className="">
              {packages[2].assistance.map((items, index) => (
                <div key={index}>
                  <p className={`text-lg mb-7 w-[220px]`}>{items}</p>
                </div>
              ))}
            </div>
            <div className="">
              {packages[3].assistance.map((items, index) => (
                <div key={index}>
                  <p className={`text-lg mb-7 w-[220px]`}>{items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between px-10 my-20">
          <div className="">
            <button className="px-6 py-2 shadow-lg border rounded-lg text-lg border-black hover:text-white hover:bg-black ">
              Худалдаж авах
            </button>
            <p className="text-center text-lg mt-2">
              {packages[0].price}/ 1 сар
            </p>
          </div>
          <div className="">
            <button className="px-6 py-2 shadow-lg border rounded-lg text-lg border-black hover:text-white hover:bg-black ">
              Худалдаж авах
            </button>
            <p className="text-center text-lg mt-2">
              {packages[1].price}/ 1 сар
            </p>
          </div>
          <div className="">
            <button className="px-6 py-2 shadow-lg border rounded-lg text-lg border-black hover:text-white hover:bg-black ">
              Худалдаж авах
            </button>
            <p className="text-center text-lg mt-2">
              {packages[2].price}/ 1 сар
            </p>
          </div>
          <div className="">
            <button className="px-6 py-2 shadow-lg border rounded-lg text-lg border-black hover:text-white hover:bg-black ">
              Худалдаж авах
            </button>
            <p className="text-center text-lg mt-2">
              {packages[3].price}/ 1 сар
            </p>
          </div>
        </div>
        <div className="my-20 pt-20">
          <div className="flex justify-center items-center">
            <p className="text-4xl font-bold tex-center ">
              <span className="text-[#00750C]">Premium</span> багцыг 7 хоног үнэ
              төлбөргүй туршиж үзэх үү?
            </p>
          </div>
          <div className="flex justify-center items-center my-20">
            <button className="border shadow-lg rounded-xl border-[#00750C] text-[#00750C] px-8 py-4 text-4xl font-bold">
              Туршиж үзэх
            </button>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-lg text-center mt-20">
              Туршилтын хугацаа дууссанаас 1 сарын дотор таны мэдээлэл
              хадгалагдана. Та <br /> хүссэн багцаа сонгон таслалтгүйгээр
              ашиглах боломжтой.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

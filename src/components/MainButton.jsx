import React from "react";

const MainButton = ({
  text,
  bgColor,
  fSize,
  tColor,
  iColor,
  sText,
  sColor,
  className,
}) => {
  const buttonStyle = {
    backgroundColor: bgColor || "#fff",
    color: tColor || "#000",
    fontSize: fSize || "lg",
  };

  const iconStyle = {
    fill: iColor || "#1C274C",
  };

  const spanStyle = {
    color: sColor || "",
  };
  return (
    <button
      style={buttonStyle}
      className={`gap-1  font-bold md:text-[16px] sm:text-[16px] rounded-[45px] flex items-center ${className} md:py-2 lg:py-3 lg:px-4 sm:py-2 sm:px-3 md:px-3 px-4 py-3 `}
    >
      {text}
      <span className="ms-1" style={spanStyle}>
        {sText}
      </span>
      <svg
        className="md:w-[24px] md:h-[24px] w-[24px] h-[24px] sm:w-[20px] sm:h-[20px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        style={iconStyle}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15C18.75 15.4142 18.4142 15.75 18 15.75C17.5858 15.75 17.25 15.4142 17.25 15V7.81066L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L16.1893 6.75H9Z"
        />
      </svg>
    </button>
  );
};

export default MainButton;

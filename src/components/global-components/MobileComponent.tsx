import React from "react";
import { NavData } from "../../constant/NavContent";
import UiLogo from "../common/UiLogo";
import UiSvg from "../common/UiSvg";
interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  handleTab: () => void;
}
export default function MobileComponent({
  isOpen,
  handleClose,
  handleTab,
}: IProps) {
  return (
    <div>
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-2 py-2">
          <UiLogo
            iconColor={"black"}
            iconHeight={"40"}
            iconWidth={"40"}
            textColor="black"
          />
          <UiSvg
            height={"30"}
            width={"30"}
            color={"black"}
            viewBox="0 0 16 16"
            onClick={handleClose}
            path="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
          />
        </div>
        <ul className=" py-2 flex flex-col  space-x-1">
          {NavData?.map((item, index) => {
            return (
              <div key={item?.title}>
                <li
                  className={`${
                    location.pathname === item?.path
                      ? `text-white  bg-gradient-to-r from-blue-600 to-indigo-800 rounded m-1 border-l-2`
                      : `text-black`
                  } text-medium font-medium px-3 py-3`}
                  onClick={() => handleTab(item?.path, "mobile-view")}
                >
                  {item?.title}
                </li>
                <div className="w-full h-[1px] bg-black" />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

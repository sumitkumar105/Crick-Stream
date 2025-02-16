import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { INavData } from "../../config/INavData.ts";
import UiSvg from "../common/UiSvg";
import UiButton from "../common/UiButton";
import UiLogo from "../common/UiLogo";
import MobileComponent from "./MobileComponent";
import { NavData } from "../../constant/NavContent";
export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleTab: (path?: string, view?: string) => void = (path = "") => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-800 p-3 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <UiLogo
            iconColor={"white"}
            iconHeight={"40"}
            iconWidth={"40"}
            textColor="white"
            onClick={() => handleTab("/")}
          />
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <ul className="px-2 py-2 flex  space-x-1">
                {NavData?.map((item: INavData, index: number) => {
                  return (
                    <li
                      key={index}
                      className={`${
                        location.pathname === item?.path
                          ? `text-amber-300 underline underline-offset-4`
                          : `text-white`
                      } text-lg font-medium px-3`}
                      onClick={() => handleTab(item?.path)}
                    >
                      {item?.title}
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center space-x-2">
                <UiButton
                  lable={"Log In"}
                  type={"button"}
                  disabled={false}
                  className="bg-white text-gray-900"
                />
                <UiSvg
                  height={40}
                  width={40}
                  color="white"
                  viewBox="0 0 16 16"
                  path="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                />
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <UiSvg
              height={40}
              width={40}
              color="white"
              viewBox="0 0 16 16"
              onClick={handleMenu}
              path="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
            {isOpen && (
              <MobileComponent
                isOpen={isOpen}
                handleClose={handleMenu}
                handleTab={handleTab}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

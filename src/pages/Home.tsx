import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/global-components/Banner";
import UiCard from "../components/common/UiCard";
import cricketSections from "../constant/CardData";
export default function Home() {
  const navigate = useNavigate();
  const handleNavigate = (info: any) => {
    navigate(info?.path);
  };
  return (
    <div className="">
      <Banner />
      <div className="container mx-auto flex justify-center items-center py-4">
        <div className="grid lg:grid-cols-4 lg:gap-4 gap-2 w-full px-2">
          {cricketSections?.map((info, index) => {
            return (
              <UiCard
                key={info?.id}
                title={info?.title}
                description={info?.description}
                btnTitle={info?.buttonTitle}
                onClick={() => handleNavigate(info)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

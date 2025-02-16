import { useState } from "react";
import { ILivescore } from "../config/ILivescore.ts";
// import { IMatchTypes } from "../config/IMatchTypes.ts";
import SeriesInfoCard from "../components/Series/SeriesInfoCard";
import useBaseUrl from "../utils/custom-hook/useBaseUrl";
import useFetch from "../utils/custom-hook/useFetch";
import UiLoader from "../components/common/UiLoader";
import Error from "../components/global-components/Error";
import { matchTypeColors, matchTypes } from "../constant/MatchType.ts";
export default function Matches() {
  const { baseUrl, Key } = useBaseUrl();

  const { data, isLoading } = useFetch(
    `liveScore`,
    `${baseUrl}currentMatches?apikey=${Key}`
  );
  const [selectedType, setSelectedType] = useState("ALL");
  const filterData =
    selectedType === "ALL"
      ? data?.data
      : data?.data?.filter(
          (match: ILivescore) => match?.matchType.toUpperCase() === selectedType
        );

  if (isLoading) {
    return <UiLoader />;
  }
  const handleSlectedType = (type: string) => {
    setSelectedType(type);
  };
  //className="container mx-auto flex justify-center items-center"
  return (
    <div className="container mx-auto">
      {filterData?.length > 0 ? (
        <>
          <div className="flex flex-wrap  gap-2 mt-2 px-4 md:pr-4 md:justify-end m-2">
            {matchTypes?.map((type: any) => {
              return (
                <div
                  key={type?.id}
                  onClick={() => handleSlectedType(type)}
                  className={`${
                    selectedType === type
                      ? matchTypeColors[type]
                      : "bg-gray-500"
                  } w-[50px]   px-2 py-2 rounded text-center font-semibold text-white`}
                >
                  {type}
                </div>
              );
            })}
          </div>

          <SeriesInfoCard data={filterData} />
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

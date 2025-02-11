import React, { useState } from "react";
import SeriesInfoCard from "../components/Series/SeriesInfoCard";
import useBaseUrl from "../utils/custom-hook/useBaseUrl";
import useFetch from "../utils/custom-hook/useFetch";
import UiLoader from "../components/common/UiLoader";
import Container from "../components/global-components/Container";
import Error from "../components/global-components/Error";
import { matchTypeColors, matchTypes } from "../constant/MatchType.ts";
export default function LiveScore() {
  const { baseUrl, Key } = useBaseUrl();

  const { data, error, isLoading } = useFetch(
    `liveScore`,
    `${baseUrl}cricScore?apikey=${Key}`
  );
  const [selectedType, setSelectedType] = useState("ALL");
  const filterData =
    selectedType === "ALL"
      ? data?.data
      : data?.data?.filter(
          (match, index) => match?.matchType.toUpperCase() === selectedType
        );

  if (isLoading) {
    return <UiLoader />;
  }
  const handleSlectedType = (type: string) => {
    setSelectedType(type);
  };
  return (
    <Container>
      {filterData?.length > 0 ? (
        <>
          <div className="flex flex-wrap  gap-2 mt-2 px-4 md:pr-4 md:justify-end m-2">
            {matchTypes?.map((type, index) => {
              return (
                <div
                  key={index}
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
    </Container>
  );
}

import React from "react";
import useBaseUrl from "../../utils/custom-hook/useBaseUrl";
import SeriesCard from "../../components/SeriesCard";
import Container from "../../components/global-components/Container";
import UiLoader from "../../components/common/UiLoader";
import useFetch from "../../utils/custom-hook/useFetch";
export default function LiveSeries() {
  const { baseUrl, Key } = useBaseUrl();

  const { data, error, isLoading } = useFetch(
    `cricketSeries`,
    `${baseUrl}series?apikey=${Key}`
  );

  if (isLoading) {
    return <UiLoader />;
  }
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 py-2">
          {data?.data?.map((series, index) => {
            return <SeriesCard {...series} key={series.id} />;
          })}
        </div>
      </Container>
    </>
  );
}

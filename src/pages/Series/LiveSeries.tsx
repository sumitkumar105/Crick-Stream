import { ICricketSeries } from "../../config/ISeries.ts";
import useBaseUrl from "../../utils/custom-hook/useBaseUrl";
import SeriesCard from "../../components/SeriesCard";
import UiLoader from "../../components/common/UiLoader";
import useFetch from "../../utils/custom-hook/useFetch";
import Error from "../../components/global-components/Error";
export default function LiveSeries() {
  const { baseUrl, Key } = useBaseUrl();

  const { data, isLoading } = useFetch(
    `cricketSeries`,
    `${baseUrl}series?apikey=${Key}`
  );

  if (isLoading) {
    return <UiLoader />;
  }
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center">
        {data?.status !== "failure" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 py-2 justify-center">
            {data?.data?.map((series: ICricketSeries) => {
              return <SeriesCard {...series} key={series.id} />;
            })}
          </div>
        ) : (
          <Error status={data?.status} reason={data?.reason} />
        )}
      </div>
    </>
  );
}

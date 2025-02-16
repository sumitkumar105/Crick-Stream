import { useParams } from "react-router-dom";
import useBaseUrl from "../../utils/custom-hook/useBaseUrl";
import useFetch from "../../utils/custom-hook/useFetch";
import SeriesInfoCard from "../../components/Series/SeriesInfoCard";
import UiLoader from "../../components/common/UiLoader";
import Container from "../../components/global-components/Container";
export default function SeriesInfo() {
  const { baseUrl, Key } = useBaseUrl();
  const { seriesId } = useParams();
  const { data, isLoading } = useFetch(
    "series-info",
    `${baseUrl}series_info?apikey=${Key}&id=${seriesId}`
  );
  if (isLoading) {
    <UiLoader />;
  }
  return (
    <Container>
      <SeriesInfoCard data={data?.data?.matchList} />
    </Container>
  );
}

import { useState, useEffect } from "react";
import { IPlayer } from "../../config/IPlayer.ts";
import Container from "../../components/global-components/Container";
import PlayersCard from "../../components/players/PlayersCard";
import useBaseUrl from "../../utils/custom-hook/useBaseUrl";
import useFetch from "../../utils/custom-hook/useFetch";
import UiLoader from "../../components/common/UiLoader";
import UiInput from "../../components/common/UiInput";

export default function Players() {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>(""); // State for debounced query
  const { baseUrl, Key } = useBaseUrl();

  // Debounce Effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // Adjust debounce time (500ms)

    return () => clearTimeout(timer); // Cleanup function
  }, [query]);

  const { data, isLoading } = useFetch(
    `playerInfo`,
    `${baseUrl}players?apikey=${Key}&offset=0&search=${debouncedQuery}`
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <div className="flex md:justify-center items-center px-4 py-4">
        <UiInput
          label="Search Player Name"
          name="search"
          className="md:w-[400px] border-1 border-gray-300 px-2 py-2 rounded-lg"
          type="text"
          onChange={handleChange}
          value={query}
          placeholder="Search here"
        />
      </div>

      {isLoading ? (
        <UiLoader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4">
          {data?.data?.map((player: IPlayer) => (
            <PlayersCard key={player?.id} data={player} />
          ))}
        </div>
      )}
    </Container>
  );
}

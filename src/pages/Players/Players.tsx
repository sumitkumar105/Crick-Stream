import React, { useState } from "react";
import Container from "../../components/global-components/Container";
import PlayersCard from "../../components/players/PlayersCard";
import useBaseUrl from "../../utils/custom-hook/useBaseUrl";
import useFetch from "../../utils/custom-hook/useFetch";
import UiLoader from "../../components/common/UiLoader";
import UiInput from "../../components/common/UiInput";
export default function Players() {
  const [query, setQuery] = useState(null);
  const { baseUrl, Key } = useBaseUrl();
  const { data, error, isLoading } = useFetch(
    `playerInfo`,
    `${baseUrl}players?apikey=${Key}&offset=0&search=${query}`
  );
  console.log(data);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery(value);
    console.log(name, value);
  };
  if (isLoading) {
    <UiLoader />;
  }

  return (
    <Container>
      <div className="flex md:justify-center items-center px-4 py-4">
        <UiInput
          lable="Serach Player Name"
          name="search"
          className=" md:w-[400px] border-1 border-gray-300 px-2 py-2 rounded-lg"
          type="text"
          onChange={handleChange}
          value={query}
          placeholder="Search here"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 ">
        {data?.data?.map((player, index) => {
          return <PlayersCard key={player?.id} data={player} />;
        })}
      </div>
    </Container>
  );
}

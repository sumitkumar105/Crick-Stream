import player from "../../assets/player.avif";
import { IPlayer } from "../../config/IPlayer.ts";
export default function PlayersCard({ data }: any) {
  const { name, country }: IPlayer = data;

  return (
    <div className="flex justify-between items-center border-none rounded shadow-lg bg-gray-200 px-2 py-2  m-3">
      <div className="flex gap-2">
        <div className="h-16 w-16 ">
          <img
            src={player}
            alt="player"
            className="h-full w-full object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-medium ">{name}</h2>
          <h3 className="text-gray-500">{country}</h3>
        </div>
      </div>
      <button className="bg-indigo-500 text-white border-none px-1 py-1 rounded">
        View Info
      </button>
    </div>
  );
}

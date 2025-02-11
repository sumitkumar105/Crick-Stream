import React from "react";
import { useNavigate } from "react-router-dom";
import { matchTypeColors } from "../constant/MatchType.ts";
interface SeriesCardProps {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  odi: number;
  t20: number;
  test: number;
  squads: number;
  matches: number;
}

const SeriesCard: React.FC<SeriesCardProps> = ({
  id,
  name,
  startDate,
  endDate,
  odi,
  t20,
  test,
  matches,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (seriesId: string) => {
    if (seriesId) {
      navigate(`/live-series/${seriesId}`);
    } else {
      navigate(-1);
    }
  };

  return (
    <div
      className="max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow-md px-2 py-2 m-2"
      onClick={() => handleNavigate(id)}
    >
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <div className="flex flex-wrap gap-2 items-center">
        <p className="text-sm text-gray-600 m-0">
          <span className="font-medium">Start Date:</span> {startDate}
        </p>
        <p className="text-sm text-gray-600 m-0">
          <span className="font-medium">End Date:</span> {endDate}
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <p
          className={`${
            odi > 0
              ? `${matchTypeColors["ODI"]} rounded text-white font-medium px-2 py-1`
              : "text-gray-600"
          }`}
        >
          <span className="font-medium">ODIs:</span> {odi}
        </p>
        <p
          className={`${
            t20 > 0
              ? `${matchTypeColors["T20"]} rounded text-white font-medium px-2 py-1`
              : "text-gray-600"
          }`}
        >
          <span className="font-medium">T20s:</span> {t20}
        </p>
        <p
          className={`${
            test > 0
              ? `${matchTypeColors["TEST"]} rounded text-white font-medium px-2 py-1`
              : "text-gray-600"
          }`}
        >
          <span className="font-medium">Tests:</span> {test}
        </p>
        <p
          className={`${
            matches > 0
              ? "bg-indigo-600 rounded text-white font-medium px-2 py-1"
              : "text-gray-600"
          }`}
        >
          <span className="font-medium">Matches:</span> {matches}
        </p>
      </div>
    </div>
  );
};

export default SeriesCard;

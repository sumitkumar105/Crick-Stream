import { matchTypeColors } from "../../constant/MatchType.ts";
import { formatDate } from "../../utils/formatDate.ts";
import { ISeriesInfo } from "../../config/ISeriesInfo.ts";
import defaultImage from "../../assets/defaultImage.png";
export default function SeriesInfoCard({ data }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {data?.map((info: ISeriesInfo) => {
        return (
          <div
            key={info?.id}
            className="max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow-md px-2 py-2 m-3"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {info?.name || info?.series}
              </h2>
              <div
                className={`px-4 py-2 ${
                  matchTypeColors[info?.matchType.toUpperCase()]
                } rounded-lg text-white uppercase`}
              >
                {info?.matchType}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <p className="text-sm text-gray-600 m-0 space-x-1 font-semibold">
                <span className="font-semibold ms-1">Date: </span>
                {info?.date
                  ? formatDate(info?.date)
                  : formatDate(info?.dateTimeGMT?.split("T")[0])}
              </p>
            </div>
            {(info?.teamInfo ?? []).length > 0 ? (
              <div className="grid grid-cols-1 gap-2 py-2 justify-center">
                {info?.teamInfo?.map((team: any) => {
                  return (
                    <>
                      <div className="flex items-center gap-4">
                        <div className=" h-16 w-16 px-1 py-1">
                          <img
                            src={team?.img ? team?.img : defaultImage}
                            alt={team?.shortname}
                            className="h-full w-full object-cover rounded-full"
                          />
                        </div>
                        <h2 className="text-lg font-semibold">{team?.name}</h2>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-4">
                  <div className=" h-16 w-16 px-1 py-1">
                    <img
                      src={info?.t1img ? info?.t1img : defaultImage}
                      alt={info?.t1}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <h2 className="text-lg font-semibold">
                    {info?.t1 || "Team1"}
                  </h2>
                  <h2 className="text-lg font-semibold">{info?.t1s}</h2>
                </div>
                <div className="flex items-center gap-4">
                  <div className=" h-16 w-16 px-1 py-1">
                    <img
                      src={info?.t2img ? info?.t2img : defaultImage}
                      alt={info?.t2}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <h2 className="text-lg font-semibold">
                    {info?.t2 || "Team2"}
                  </h2>
                  <h2 className="text-lg font-semibold">{info?.t2s}</h2>
                </div>
              </div>
            )}
            <div>
              {/* Display Score */}
              {info?.score && info?.score.length > 0 && (
                <div className="mt-2 p-2 bg-white rounded-lg shadow-sm">
                  <h4 className="text-md font-semibold text-gray-700">
                    Current Score:
                  </h4>
                  {info.score.map((inning: any, index: number) => (
                    <div key={index} className="text-sm text-gray-800">
                      <span className="font-semibold">{inning.inning}: </span>
                      {inning.r}/{inning.w} ({inning.o} overs)
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3
                className={`font-semibold ${
                  info?.matchEnded && info?.matchStarted
                    ? "text-blue-500"
                    : "text-red-900"
                }`}
              >
                {info?.status}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface iProps {
  status?: string;
  reason?: string;
}
export default function Error({ status, reason }: iProps) {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });
  return (
    <div className=" flex justify-center items-center mx-auto mt-2 mb-2 border-none  outline:none shadow-lg rounded bg-gray-200 h-[300px] w-[300px]">
      <div className="flex flex-col items-center  justify-center gap-2">
        <h2>{status ? status : "404"}</h2>
        <p>{reason ? `${reason}` : "Some thing went Wrong!!!"}</p>

        <button
          onClick={() => navigate("/")}
          className="px-2 py-2 bg-indigo-600 text-white font-semibold text-sm rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

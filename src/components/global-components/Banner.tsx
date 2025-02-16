import UiBanner from "../../components/common/UiBanner";
import { bannerImage } from "../../constant/BannerUrl";
export default function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
      <div className="container mx-auto p-6 lg:p-12 flex  flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Live Cricket Scores & Updates
          </h1>
          <p className="text-lg mb-6">
            Get real-time scores, updates, and player stats right here.
          </p>
          <button className="bg-white text-indigo-800 hover:bg-gray-100 px-6 py-3 rounded-2xl shadow-md font-semibold transition duration-300">
            View Live Matches
          </button>
        </div>

        {/* Right Image Section */}
        <div className="mb-8 md:mt-0 w-96 h-60 md:h-80 overflow-hidden">
          <UiBanner images={bannerImage} interval={1000} />
        </div>
      </div>
    </div>
  );
}

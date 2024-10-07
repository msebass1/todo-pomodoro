import { okSvg } from "../../assets/constans";

const Loading = () => {
  return (
    <div className="mt-4 space-y-2">
      <div className="  flex items-center mt-4 animate-pulse">
        <svg
          className=" w-5 h-5 me-2 mt-0.5text-gray-200 text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d={okSvg} />
        </svg>
        <div>
          <div className="w-48 h-2 bg-gray-200 rounded-full "></div>
        </div>
      </div>
      <hr className="border-gray-700" />
    </div>
  );
};

export { Loading };

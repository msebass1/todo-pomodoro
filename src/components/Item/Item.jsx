import { okSvg } from "../../assets/constans";

function Item({ description, completed, onComplete, onDelete }) {
  return (
    <>
      <li className="flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={onComplete}>
            <svg
              className={`w-5 h-5 me-2 mt-0.5 ${completed && "text-green-400"} flex-shrink-0 hover:text-gray-400`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d={okSvg} />
            </svg>
          </button>
          <p className={`${completed && "line-through"}`}>{description}</p>
        </div>
        <button
          onClick={() => onDelete(description)}
          className="ml-4 text-red-500 text-xl hover:text-red-700 focus:outline-none"
          aria-label="Delete item"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </li>
      <hr className="border-gray-700" />
    </>
  );
}

export { Item };

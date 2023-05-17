import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Pagination({ page, setPage, pageData }) {
  return (
    <div className="rounded-b-md text-xs bg-white shadow-md border border-t-none font-semibold text-gray-500 ">
      <div className="p-4  flex  justify-between items-center col-span-4">
        {pageData?.total && (
          <p>
            SHOWING {(page - 1) * 10} -{" "}
            {Math.min(page * 10, pageData?.total?.results)} OF{" "}
            {pageData?.total?.results}
          </p>
        )}

        {pageData?.total && (
          <div className="flex items-center">
            <button
              disabled={pageData?.total?.pages === 1}
              className="duration-300 flex hover:bg-gray-200 items-center mx-1 p-2 rounded-md"
              onClick={() => setPage((old) => old - 1)}
            >
              <AiOutlineLeft />
            </button>

            <button
              className={`p-2 ${
                pageData?.page === 1
                  ? "bg-[#07895e] text-white"
                  : "hover:bg-gray-200"
              }  duration-300 rounded-md mx-1`}
            >
              1
            </button>

            <button
              className={`p-2 ${
                pageData?.page === 2
                  ? "bg-[#07895e] text-white"
                  : "hover:bg-gray-200"
              }  duration-300 rounded-md mx-1`}
            >
              2
            </button>
            <button
              className={`p-2 ${
                pageData?.page === 3
                  ? "bg-[#07895e] text-white"
                  : "hover:bg-gray-200"
              }  duration-300 rounded-md mx-1`}
            >
              3
            </button>

            <span>-</span>

            <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
              {pageData?.total?.pages}
            </button>
            <button
              disabled={page === pageData?.total?.pages}
              className="duration-300 flex hover:bg-gray-200 items-center mx-1 p-2 rounded-md"
              onClick={() => setPage((old) => old + 1)}
            >
              <AiOutlineRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pagination;

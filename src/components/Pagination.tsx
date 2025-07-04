import { BsArrowRight } from "react-icons/bs";

const Pagination = () => {
  return (
    <div>
      {/* <footer className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-1 tex3-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">97</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.044 1.09l-4.5-4.25a.75.75 0 010-1.09l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </footer> */}
      <div className="flex mx-auto gap-4 justify-center text-neutral-500    ">
        <button className="border border-neutral-300 py-1 px-3 bg-cyan-700 text-white flex items-center justify-center gap-2 rounded-md">
          1
        </button>
        <button className="border border-neutral-300 py-1 px-3 bg-white flex items-center justify-center gap-2 rounded-md">
          2
        </button>
        <button className="border border-neutral-300 py-1 px-3 bg-white flex items-center justify-center gap-2 rounded-md">
          3
        </button>
        <button className="border border-neutral-300 py-1 px-3 bg-white flex items-center justify-center gap-2 rounded-md">
          Next <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

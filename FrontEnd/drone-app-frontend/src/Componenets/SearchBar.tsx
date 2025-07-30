export function SearchBar() {
  return (
    <div className="w-full max-w-sm min-w-150 mx-auto">
      <div className="relative mt-2">
        <div className="absolute top-1 left-1 flex items-center">
          <button
            id="dropdownButton"
            className="rounded border border-transparent py-1 px-1.5 text-center flex items-center text-sm transition-all text-slate-600"
          >
            <span id="dropdownSpan" className="text-ellipsis overflow-hidden">
              Themes
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4 ml-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div className="h-6 border-l border-slate-200 ml-1"></div>
          <div
            id="dropdownMenu"
            className="min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 hidden w-full bg-white border border-slate-200 rounded-md shadow-lg z-10"
          >
            <ul id="dropdownOptions">
              <li
                className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer"
                data-value="Themes"
              >
                Themes
              </li>
              <li
                className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer"
                data-value="Plugins"
              >
                Plugins
              </li>
              <li
                className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer"
                data-value="Snippets"
              >
                Snippets
              </li>
            </ul>
          </div>
        </div>
        <input
          type="text"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search..."
        />

        <button
          className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 mr-1.5"
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
          Search
        </button>
      </div>
    </div>
  );
}

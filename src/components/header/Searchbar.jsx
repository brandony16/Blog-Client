import { Search } from "lucide-react";
import { useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    // TODO: IMPLEMENT API CALL
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 w-full max-w-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500"
    >
      <input
        type="text"
        placeholder="Search articles..."
        className="bg-transparent outline-none text-gray-800 dark:text-gray-100 w-full placeholder-gray-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        id="searchSubmit"
        className="rounded-full cursor-pointer ml-2 hover:scale-1.02 transition-transform duration-200 transform hover:scale-110 active:scale-95"
      >
        <Search className="text-gray-500 dark:text-gray-400" size={20} />
      </button>
    </form>
  );
};

export default Searchbar;

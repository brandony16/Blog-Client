import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;

    navigate(`/?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-full max-w-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
      <input
        type="text"
        placeholder="Search articles..."
        className="bg-transparent outline-none text-gray-800 dark:text-gray-100 w-full placeholder-gray-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        id="searchSubmit"
        className="rounded-full cursor-pointer ml-2 hover:scale-1.02 transition-transform duration-200 transform hover:scale-110 active:scale-95"
        onClick={() => handleSearch()}
      >
        <Search className="text-gray-500 dark:text-gray-400" size={20} />
      </button>
    </div>
  );
};

export default Searchbar;

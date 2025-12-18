import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) {
      navigate("/");
    } else {
      navigate(`/?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form
      className="flex items-center p-2 w-full max-w-md border-b-2 focus-within:border-orange-400"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <input
        type="text"
        placeholder="Search articles..."
        className="bg-transparent outline-none text-black w-full placeholder-gray-600"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        id="searchSubmit"
        className="rounded-full cursor-pointer ml-2 hover:scale-1.02 transition-transform duration-200 transform hover:scale-110 active:scale-95"
      >
        <Search className="text-black" size={20} />
      </button>
    </form>
  );
};

export default Searchbar;

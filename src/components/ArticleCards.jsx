import { useCallback, useEffect, useState } from "react";
import ArticleCard from "./ArticleCard.jsx";
import { ArrowLeft, ArrowRight, Loader2, SearchIcon } from "lucide-react";
import Searchbar from "./Searchbar.jsx";
import { useSearchParams } from "react-router-dom";

const ArticleCards = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [totalArticles, setTotalArticles] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [params] = useSearchParams();
  const query = params.get("q")?.toLowerCase() ?? "";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/articles?page=${page}&${
            query ? `q=${query}` : ""
          }`
        );
        if (!res.ok) throw new Error("Failed to fetch articles");
        const data = await res.json();
        setPage(1);
        setArticles(data.articles);
        setTotalPages(data.totalPages);
        setTotalArticles(data.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [query, page]);

  const getPageRange = useCallback(() => {
    const start = (page - 1) * 10 + 1;
    const end = start + 9 > totalArticles ? totalArticles : start + 9;

    return `${start}-${end}`;
  }, [page, totalArticles]);

  const changePage = useCallback(
    (dir) => {
      const newPage = page + dir;
      if (newPage < 1 || newPage > totalPages) return;

      setPage(newPage);
    },
    [page, totalPages]
  );

  return (
    <div className="flex flex-col box-border gap-4">
      <div className="flex justify-between">
        <h3 className="text-3xl font-semibold underline">Articles:</h3>
        <Searchbar />
      </div>

      {loading ? (
        <div className="flex flex-col justify-center items-center h-64">
          <Loader2 size={48} className="text-blue-800 animate-spin" />
          <p className="animate-pulse">Loading articles...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col justify-center items-center h-64">
          <p className="text-red-500 font-semibold text-2xl">Error: {error}</p>
          <p className="">Please refresh or try again later.</p>
        </div>
      ) : articles.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg">No articles yet. Check back soon!</p>
        </div>
      ) : (
        <>
          <div
            id="article-card-wrapper"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {articles.map((article) => (
              <ArticleCard article={article} key={article.id} />
            ))}
          </div>
          <div className="flex gap-3 justify-center items-center">
            <ArrowLeft
              onClick={() => changePage(-1)}
              className="cursor-pointer hover:scale-110"
            />
            <p className="font-semibold">
              Showing results {getPageRange()} of {totalArticles}
            </p>
            <ArrowRight
              onClick={() => changePage(1)}
              className="cursor-pointer hover:scale-110"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleCards;

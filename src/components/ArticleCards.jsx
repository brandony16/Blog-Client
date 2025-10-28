import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard.jsx";
import { Loader2, SearchIcon } from "lucide-react";

const ArticleCards = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/articles");
        if (!res.ok) throw new Error("Failed to fetch articles");
        const data = await res.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="flex flex-col box-border gap-4">
      <h3 className="text-3xl font-semibold underline">Articles:</h3>
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
        <div
          id="article-card-wrapper"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {articles.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleCards;

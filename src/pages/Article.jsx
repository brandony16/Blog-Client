import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchArticle = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getArticleById(id);
      setArticle(data.article);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <article className="max-w-3xl mx-auto bg-white shadow-sm rounded-2xl p-8 space-y-6">
      <header className="space-y-2 border-b pb-4">
        <h1 className="text-4xl font-bold text-blue-700">{article.title}</h1>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{article.author}</span>
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>
      </header>

      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-xl"
        />
      )}

      <section className="prose max-w-none text-gray-800 leading-relaxed">
        {article.content}
      </section>

      <footer className="pt-6 border-t text-sm text-gray-500">
        <p>Category: {article.category}</p>
      </footer>
    </article>
  );
};

export default Article;

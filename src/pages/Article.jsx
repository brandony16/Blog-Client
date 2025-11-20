import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/articleApi.js";
import CommentSection from "../components/CommentSection.jsx";

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

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  const getLargestDate = (article) => {
    return Math.max(new Date(article.editedAt), new Date(article.createdAt));
  };

  if (loading || !article)
    return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="flex items-center justify-center h-full bg-linear-to-br from-orange-100 to-blue-100 p-10 flex-col">
      <article className="mx-auto mt-12 bg-white shadow-sm rounded-2xl p-8 space-y-6 min-w-1/2 max-w-3/4">
        <header className="space-y-2 border-b pb-4">
          <h1 className="text-4xl font-bold text-blue-700">{article.title}</h1>
          <div className="flex justify-between text-sm text-gray-500">
            <span>
              {article.author.firstName} {article.author.lastName}
            </span>
            <span>
              {new Date(getLargestDate(article)).toLocaleDateString()}
            </span>
          </div>
        </header>
        <section className="prose max-w-none text-gray-800 leading-relaxed">
          {article.body}
        </section>
      </article>
      <CommentSection articleId={article.id}/>
    </div>
  );
};

export default Article;

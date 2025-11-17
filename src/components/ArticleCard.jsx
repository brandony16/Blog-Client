import { NavLink } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const PREVIEW_LENGTH = 100;

  const getPreview = (body) => {
    if (body.length <= PREVIEW_LENGTH) return body;
    return body.slice(0, PREVIEW_LENGTH) + "...";
  };

  return (
    <NavLink
      to={`/articles/${article.id}`}
      id="article-card"
      className="min-h-80 bg-orange-50 border border-orange-200 rounded-2xl shadow-md
                 hover:shadow-xl hover:border-orange-400 transform hover:scale-[1.03] transition-all duration-300 ease-out
                 p-6 flex flex-col justify-between h-64 relative overflow-hidden"
    >
      <h3
        id="card-title"
        className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
      >
        {article.title}
      </h3>
      <h4 className="text-gray-600 italic mb-2">
        {article.author.firstName} {article.author.lastName}
      </h4>
      <p id="card-preview" className="text-black mb-4 line-clamp-3">
        {getPreview(article.body)}
      </p>

      <div className="mt-auto text-sm text-gray-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <div className="flex flex-col">
          <p>Published:</p>
          <p> {new Date(article.publishedAt).toDateString()}</p>
        </div>
        {article.editedAt && (
          <div className="flex flex-col">
            <p>Edited:</p>
            <p>{new Date(article.editedAt).toDateString()}</p>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-linear-to-r from-blue-600 to-orange-600 opacity-80" />
    </NavLink>
  );
};

export default ArticleCard;

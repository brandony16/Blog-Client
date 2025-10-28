const ArticleCard = () => {
  return (
    <a
      href="/articles/16"
      id="article-card"
      className="min-h-[320px] bg-orange-50 border border-orange-200 rounded-2xl shadow-md
                 hover:shadow-xl hover:border-orange-400 transform hover:scale-[1.03] transition-all duration-300 ease-out
                 p-6 flex flex-col justify-between h-64 relative overflow-hidden"
    >
      <h3
        id="card-title"
        className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
      >
        This is an article title
      </h3>

      <p id="card-preview" className="text-gray-600 mb-4 line-clamp-3">
        This is a preview of the article. It gives a short teaser to entice the
        reader to click and read more.
      </p>

      <div className="mt-auto text-sm text-gray-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <p>Published: Jan 20, 2025</p>
        <p>Edited: Feb 2, 2025</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-orange-600 opacity-80" />
    </a>
  );
};

export default ArticleCard;

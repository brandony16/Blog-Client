const ArticleCard = () => {
  return (
    <a
      href="/articles/16"
      id="article-card"
      className="min-h-[320px] flex flex-col bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 hover:-translate-y-1 transform cursor-pointer"
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
    </a>
  );
};

export default ArticleCard;

import ArticleCard from "../components/ArticleCard.jsx";

const Home = () => {

  return (
    <div id="home" className="flex flex-col w-full bg-blue-200">
      
      <div id="article-card-wrapper" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default Home;

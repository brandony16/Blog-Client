import ArticleCard from "../components/ArticleCard.jsx";
import Intro from "../components/Intro.jsx";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col w-full bg-gray-200 p-10 box-border gap-10"
    >
      <Intro />
      <div className="flex flex-col box-border gap-4">
        <h3 className="text-3xl font-semibold underline">Articles:</h3>
        <div
          id="article-card-wrapper"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
  );
};

export default Home;

import Intro from "../components/Intro.jsx";
import ArticleCards from "../components/ArticleCards.jsx";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col w-full bg-gray-200 p-10 box-border gap-10"
    >
      <Intro />
      <ArticleCards />
    </div>
  );
};

export default Home;

import Intro from "../components/Intro.jsx";
import ArticleCards from "../components/ArticleCards.jsx";
import Searchbar from "../components/Searchbar.jsx";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col w-full bg-gray-200 p-10 box-border gap-10 h-full"
    >
      <Intro />
      <Searchbar />
      <ArticleCards />
    </div>
  );
};

export default Home;

import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Header from "./components/header/Header.jsx";
import Article from "./pages/Article.jsx";

function App() {
  return (
    <div id="app-container" className="flex flex-col min-h-screen">
      <nav>
        <Header />
      </nav>
      <main className="pt-18 h-screen">
        <Routes>
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

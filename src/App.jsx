import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Header from "./components/header/Header.jsx";
import Article from "./pages/Article.jsx";

function App() {
  return (
    <div id="app-container">
      <nav>
        <Header />
      </nav>
      <main className="mt-18">
        <Routes>
          <Route path="/article/:id" element={<Article />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

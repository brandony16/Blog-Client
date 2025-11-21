import { Outlet, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Header from "./components/header/Header.jsx";
import Article from "./pages/Article.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";

function Layout() {
  return (
    <div id="app-container" className="flex flex-col min-h-screen">
      <nav>
        <Header />
      </nav>
      <main className="pt-18 h-screen">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<Layout />}>
        <Route path="articles/:id" element={<Article />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

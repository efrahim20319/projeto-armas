import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Sobre from "./pages/Sobre/Sobre";
import Posts from "./pages/Posts/Posts";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </Router>
    </main>
  );
}

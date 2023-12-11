import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/api/" element={<Home />} />
          <Route path="/api/articles" element={<ArticlesList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

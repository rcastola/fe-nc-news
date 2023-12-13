import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";
import Users from "./components/Users";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Nav />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;

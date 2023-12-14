import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";
import Users from "./components/Users";
import { UserProvider } from "./components/UserContext";
import TopicsList from "./components/TopicsList";
import Error from "./components/Error";

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
            <Route path="/topics" element={<TopicsList />} />
            <Route path="/*" element={<Error message="Route not found" />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;

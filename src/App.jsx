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

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Nav />
          <Header />
          <Routes>
            <Route path="/api/" element={<Home />} />
            <Route path="/api/articles" element={<ArticlesList />} />
            <Route
              path="api/articles/:article_id"
              element={<SingleArticle />}
            />
            <Route path="api/users" element={<Users />} />
            <Route path="api/topics" element={<TopicsList />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;

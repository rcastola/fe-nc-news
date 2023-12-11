import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import ArticlesCard from "./ArticlesCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((response) => {
      setArticles(response);
    });
  }, []);

  return (
    <div>
      <h2 className="page-title">Articles</h2>
      <ul id="article-list">
        {articles.map((article) => {
          return <ArticlesCard article={article} key={article.article_id} />;
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;

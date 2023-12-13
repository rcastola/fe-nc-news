import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import ArticlesCard from "./ArticlesCard";
import SortingArticles from "./SortingArticles";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles().then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="page-title">Articles</h2>
      <SortingArticles />
      <ul id="article-list">
        {articles.map((article) => {
          return <ArticlesCard article={article} key={article.article_id} />;
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;

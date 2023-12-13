import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import ArticlesCard from "./ArticlesCard";
import { useSearchParams } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTopic = searchParams.get("topic");
  let articlesByTopic = [];

  useEffect(() => {
    setIsLoading(true);
    getAllArticles().then((response) => {
      if (searchTopic) {
        articlesByTopic = response.filter((article) => {
          return article.topic === searchTopic;
        });
        setArticles(articlesByTopic);
        setIsLoading(false);
      } else {
        setArticles(response);
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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

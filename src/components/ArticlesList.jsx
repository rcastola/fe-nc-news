import { useEffect, useState } from "react";
import { getAllArticles, getTopicsList } from "../api";
import ArticlesCard from "./ArticlesCard";
import { useSearchParams } from "react-router-dom";
import Error from "./Error";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const searchTopic = searchParams.get("topic");
  let articlesByTopic = [];

  useEffect(() => {
    setIsLoading(true);
    getAllArticles().then((response) => {
      setError(false);
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

  getTopicsList().then((data) => {
    let topicsArr = [];
    for (let i = 0; i < data.length; i++) {
      topicsArr.push(data[i].slug);
    }
    if (searchTopic && !topicsArr.includes(searchTopic)) {
      setError(true);
    }
  });

  if (error) {
    return <Error message="Page not available" />;
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

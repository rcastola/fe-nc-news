import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import ArticlesCard from "./ArticlesCard";
import SortingArticles from "./SortingArticles";
import { useSearchParams } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortFilter = searchParams.get("sort_by");
  //console.log(sortFilter, "in articles list");

  useEffect(() => {
    setIsLoading(true);
    getAllArticles().then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, [searchParams]);

  if (sortFilter) {
    console.log(sortFilter, "sorted by");
  }

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

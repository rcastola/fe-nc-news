import { useEffect, useState } from "react";
import { getAllArticles, getSortedArticles } from "../api";
import ArticlesCard from "./ArticlesCard";
import SortingArticles from "./SortingArticles";
import { useSearchParams } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortFilter, setSortFilter] = useState(false);

  const orderCodes = {
    DESC: "descending",
    ASC: "ascending",
  };
  const sortCodes = {
    created_at: "date",
    comment_count: "comments",
    votes: "votes",
  };

  const URLSortFilter = searchParams.get("sort_by");
  const URLSortOrder = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);

    if (URLSortFilter || URLSortOrder) {
      getSortedArticles(URLSortFilter, URLSortOrder).then((response) => {
        setSortFilter(true);
        setArticles(response);
        setIsLoading(false);
      });
    } else {
      getAllArticles(sortFilter).then((response) => {
        setArticles(response);
        setIsLoading(false);
        setSortFilter(false);
      });
    }
  }, [sortFilter]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="page-title">Articles</h2>
      <SortingArticles />

      {sortFilter ? (
        <p id="sort-message">
          Currently sorted by {sortCodes[URLSortFilter]}{" "}
          {orderCodes[URLSortOrder]}
        </p>
      ) : (
        <p id="sort-message">Currently sorted by date descending</p>
      )}

      <ul id="article-list">
        {articles.map((article) => {
          return <ArticlesCard article={article} key={article.article_id} />;
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;

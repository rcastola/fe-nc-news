import { Link } from "react-router-dom";
import { patchArticle } from "../api";
import { useState } from "react";
import dayjs from "dayjs";

const ArticlesCard = (article) => {
  const dateStr = `${dayjs(article.article.created_at).$d}`.slice(0, 21);

  return (
    <div className="article-card">
      <Link to={`/articles/${article.article.article_id}`}>
        <h3>{article.article.title}</h3>
      </Link>
      <img
        src={article.article.article_img_url}
        className="article-card-img"
      ></img>
      <p>Topic: {article.article.topic}</p>
      <p>Votes: {article.article.votes}</p>
      <p>Comments: {article.article.comment_count}</p>
      <p>Created on: {dateStr}</p>
    </div>
  );
};

export default ArticlesCard;

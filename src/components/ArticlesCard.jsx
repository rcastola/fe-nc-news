import { Link } from "react-router-dom";

const ArticlesCard = (article) => {
  return (
    <div className="article-card">
      <Link to={`/api/articles/${article.article.article_id}`}>
        <h3>{article.article.title}</h3>
      </Link>
      <img
        src={article.article.article_img_url}
        className="article-card-img"
      ></img>
      <p>Topic: {article.article.topic}</p>
      <p>Votes: {article.article.votes}</p>
      <p>Created at: {article.article.created_at}</p>
    </div>
  );
};

export default ArticlesCard;

import { Link } from "react-router-dom";
import { patchArticle } from "../api";
import { useState } from "react";

const ArticlesCard = (article) => {
  const [vote, setVote] = useState(null);
  const [patchedArticle, setPatchedArticle] = useState([]);
  const [voteError, setVoteError] = useState(false);

  const upVote = (article_id) => {
    const patchBody = { inc_votes: 1 };
    patchArticle(article_id, patchBody)
      .then((article) => {
        setVote("+1");
        setPatchedArticle(article);
      })
      .catch((err) => {
        setVoteError(true);
      });
  };

  const downVote = (article_id) => {
    const patchBody = { inc_votes: -1 };
    patchArticle(article_id, patchBody)
      .then((article) => {
        setVote("-1");
        setPatchedArticle(article);
      })
      .catch((err) => {
        setVoteError(true);
      });
  };

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

      {vote ? (
        <p> Votes: {patchedArticle.votes} </p>
      ) : (
        <p>Votes: {article.article.votes}</p>
      )}
      <button
        id="upVote-button"
        onClick={() => {
          upVote(article.article.article_id);
        }}
      >
        +1
      </button>

      <button
        id="downVote-button"
        onClick={() => {
          downVote(article.article.article_id);
        }}
      >
        -1
      </button>

      {vote === "+1" ? <p>Vote added.</p> : null}
      {vote === "-1" ? <p>Vote removed.</p> : null}
      {voteError ? <p>Unable to vote. Try again later.</p> : null}
      <p>Created at: {article.article.created_at}</p>
    </div>
  );
};

export default ArticlesCard;

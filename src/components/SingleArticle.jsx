import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import { getSingleArticle } from "../api";
import Collapsible from "./Collapsible";
import { patchArticle } from "../api";
import CommentAdder from "./CommentAdder";
import Error from "./Error";
import dayjs from "dayjs";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { article_id } = useParams();
  const [vote, setVote] = useState(null);
  const [patchedArticle, setPatchedArticle] = useState([]);
  const [voteError, setVoteError] = useState(false);

  const dateStr = `${dayjs(article.created_at).$d}`.slice(0, 21);

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

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id)
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err);
      });
  }, [article_id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <Error message={error.message} />
      </div>
    );
  }

  return (
    <>
      <div className="single-article">
        <h2 className="single-article-title">{article.title}</h2>
        <p> Written by: {article.author}</p>
        <img
          src={article.article_img_url}
          className="single-article-image"
        ></img>
        <p className="single-article-body">{article.body}</p>
        <p>Topic: {article.topic}</p>
        <div id="voting-items">
          {vote ? (
            <p> Votes: {patchedArticle.votes} </p>
          ) : (
            <p>Votes: {article.votes}</p>
          )}
          <button
            id="upVote-button"
            onClick={() => {
              upVote(article.article_id);
            }}
          >
            +1
          </button>
          <button
            id="downVote-button"
            onClick={() => {
              downVote(article.article_id);
            }}
          >
            -1
          </button>

          {vote === "+1" ? <p>Vote added.</p> : null}
          {vote === "-1" ? <p>Vote removed.</p> : null}
          {voteError ? <p>Unable to vote. Try again later.</p> : null}
        </div>
      </div>
      <p>Dated: {dateStr}</p>
      <p>This article has {article.comment_count} comments. </p>
      <Collapsible>
        <CommentsList />
      </Collapsible>
    </>
  );
};

export default SingleArticle;

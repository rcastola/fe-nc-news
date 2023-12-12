import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import { getSingleArticle } from "../api";
import Collapsible from "./Collapsible";
import CommentAdder from "./CommentAdder";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id)
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [article_id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h2>Oops! {error.message}. Try again!</h2>;
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
        <p>Dated: {article.created_at}</p>
      </div>
      <p>This article has {article.comment_count} comments. </p>
      <Collapsible>
        <CommentsList />
      </Collapsible>
      <CommentAdder />
    </>
  );
};

export default SingleArticle;

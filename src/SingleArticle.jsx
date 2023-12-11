import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//lines 6-12 to move to api.js when previous branch approved
function getSingleArticle(article_id) {
  return axios
    .get(`https://hosting-news.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response.data.articles;
    });
}

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
    <div className="single-article">
      <h2 className="single-article-title">{article.title}</h2>
      <p> Written by: {article.author}</p>
      <img src={article.article_img_url} className="single-article-image"></img>
      <p className="single-article-body">{article.body}</p>
      <p>This article has {article.comment_count} comments </p>
      <p>Topic: {article.topic}</p>
      <p>Dated: {article.created_at}</p>
    </div>
  );
};

export default SingleArticle;

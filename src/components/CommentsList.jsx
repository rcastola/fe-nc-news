import { useEffect, useState } from "react";
import { getCommentsByArticleID } from "../api";
import { useParams } from "react-router-dom";
import CommentsCard from "./CommentsCard";

const CommentsList = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleID(article_id).then((response) => {
      setComments(response);
    });
  }, []);

  return (
    <div id="comments-section">
      <h3>Comments:</h3>
      <ul id="comments-list">
        {comments.map((comment) => {
          return <CommentsCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </div>
  );
};

{
  /* <ul id="article-list">
//           {articles.map((article) => { */
}
//             return <ArticlesCard article={article} key={article.article_id} />;
//           })}
//         </ul>

export default CommentsList;

// const ArticlesList = () => {
//     const [articles, setArticles] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//       setIsLoading(true);
//       getAllArticles().then((response) => {
//         setArticles(response);
//         setIsLoading(false);
//       });
//     }, []);

//     if (isLoading) {
//       return <div>Loading...</div>;
//     }

//     return (
//       <div>
//         <h2 className="page-title">Articles</h2>
//         <ul id="article-list">
//           {articles.map((article) => {
//             return <ArticlesCard article={article} key={article.article_id} />;
//           })}
//         </ul>
//       </div>
//     );
//   };

//   export default ArticlesList;

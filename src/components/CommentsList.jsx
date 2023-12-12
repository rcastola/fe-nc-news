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

export default CommentsList;

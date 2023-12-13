import { useEffect, useState } from "react";
import { getCommentsByArticleID } from "../api";
import { useParams } from "react-router-dom";
import CommentsCard from "./CommentsCard";
import CommentAdder from "./CommentAdder";

const CommentsList = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleID(article_id).then((response) => {
      setComments(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="comments-section">
      <CommentAdder setComments={setComments} />
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

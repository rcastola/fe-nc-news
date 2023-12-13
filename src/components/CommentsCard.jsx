import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { deleteComment } from "../api";
import { Link } from "react-router-dom";

const CommentsCard = (comment) => {
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [comment_id, setComment_id] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userMatch, setUserMatch] = useState(null);
  const [error, setError] = useState(false);
  const { user } = useContext(UserContext);

  function handleDeleteComment() {
    if (user === comment.comment.author) {
      setUserMatch(user);
      setComment_id(comment.comment.comment_id);
    }
    setDeleteStatus(true);
  }
  console.log(deleteStatus, "delete status");

  useEffect(() => {
    setIsLoading(true);
    deleteComment(comment_id)
      .then(() => {
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });
  }, [deleteStatus]);

  if (isLoading && deleteStatus && userMatch) {
    return <div>Loading ...</div>;
  }

  console.log(error, "error");

  return (
    <div>
      {deleteStatus && userMatch ? (
        <div className="delete-message"> Comment deleted </div>
      ) : (
        <div className="comments-card">
          <p className="comment-author">{comment.comment.author} commented:</p>
          <p className="comment-body">{comment.comment.body}</p>
          {deleteStatus && !userMatch ? (
            <div>
              <p className="delete-message-error">
                Please log in to delete a comment. You can only delete your own
                comments.
              </p>
              <Link to={"/users"}>
                <p id="login-state">Click to log in.</p>
              </Link>
            </div>
          ) : null}
          <button
            id="delete-button"
            onClick={() => {
              handleDeleteComment();
            }}
          >
            Delete
          </button>
          {/* {error ? <div>Network Error. Try again later </div> : null} */}
        </div>
      )}
    </div>
  );
};

export default CommentsCard;

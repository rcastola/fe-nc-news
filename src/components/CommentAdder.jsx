import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useParams } from "react-router-dom";
import { postComment } from "../api";

const CommentAdder = ({ setComments }) => {
  const { user } = useContext(UserContext);
  const [commentBody, setCommentBody] = useState("");
  const [finalComment, setFinalComment] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emptyBody, setEmptyBody] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (finalComment !== null) {
      postComment(article_id, finalComment)
        .then((postedComment) => {
          setComments((currComments) => {
            setIsLoading(false);
            return [postedComment, ...currComments];
          });
        })
        .catch((err) => {
          setError(true);
          setIsLoading(false);
        });
    }
    setCommentBody("");
  }, [finalComment]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentBody.length !== 0) {
      setFinalComment({
        body: commentBody,
        author: user,
      });
      setEmptyBody(false);
    } else {
      setEmptyBody(true);
    }
  };

  return (
    <div className="comment-form">
      <label id="text-comment-label">
        Add your own comment:
        <form onSubmit={handleSubmit}>
          <input
            id="text-comment-input"
            type="textarea"
            placeholder="Tell us what you think"
            value={commentBody}
            onChange={(event) => {
              setCommentBody(event.target.value);
            }}
          ></input>
          <button>Add comment</button>
        </form>
      </label>
      {isLoading && finalComment ? <p>Comment loading...</p> : null}
      {!error && !isLoading && finalComment ? <p>Comment posted!</p> : null}
      {error ? <p>You must log in to post a comment</p> : null}
      {emptyBody ? <p>You must type a least 1 character</p> : null}
    </div>
  );
};

export default CommentAdder;

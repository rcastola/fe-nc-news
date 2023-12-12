import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const CommentAdder = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const [comment, setComment] = useState({});

  return (
    <div classname="comment-form">
      <label id="text-comment-label">
        Add your own comment:
        <form>
          <input
            id="text-comment-input"
            type="text"
            placeholder="Tell us what you think"
          ></input>
        </form>
        <button>Add comment</button>
      </label>
    </div>
  );
};

export default CommentAdder;

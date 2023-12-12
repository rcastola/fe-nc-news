const CommentsCard = (comment) => {
  return (
    <div className="comments-card">
      <p className="comment-author">{comment.comment.author} commented:</p>
      <p>{comment.comment.body}</p>
    </div>
  );
};

export default CommentsCard;

const ArticlesCard = (article) => {
  return (
    <div className="article-card">
      <h3>{article.article.title}</h3>
      <img src={article.article.article_img_url}></img>
      <p>Topic: {article.article.topic}</p>
      <p>Votes: {article.article.votes}</p>
      <p>Created at: {article.article.created_at}</p>
    </div>
  );
};

export default ArticlesCard;

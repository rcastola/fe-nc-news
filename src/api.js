import axios from "axios";

export function getAllArticles() {
  return axios
    .get("https://hosting-news.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    });
}

export function getSingleArticle(article_id) {
  return axios
    .get(`https://hosting-news.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response.data.articles;
    });
}

export function getCommentsByArticleID(article_id) {
  return axios
    .get(
      `https://hosting-news.onrender.com/api/articles/${article_id}/comments`
    )
    .then((response) => {
      return response.data.comments;
    });
}

export function getUsers() {
  return axios
    .get("https://hosting-news.onrender.com/api/users")
    .then((response) => {
      return response.data.users;
    });
}

export function deleteComment(comment_id) {
  return axios
    .delete(`https://hosting-news.onrender.com/api/comments/${comment_id}`)
    .then((response) => {
      return response;
    });
}

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

export function patchArticle(article_id, patchBody) {
  return axios
    .patch(
      `https://hosting-news.onrender.com/api/articles/${article_id}`,
      patchBody
    )
    .then((response) => {
      return response.data.article;
    });
}

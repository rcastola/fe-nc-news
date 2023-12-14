import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://hosting-news.onrender.com/api",
});

export function getAllArticles() {
  return newsApi.get(`/articles`).then((response) => {
    return response.data.articles;
  });
}
export function getSortedArticles(sortFilter, sortOrder) {
  return newsApi
    .get(`/articles?sort_by=${sortFilter}&order=${sortOrder}`)
    .then((response) => {
      return response.data.articles;
    });
}

export function getSingleArticle(article_id) {
  return newsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.articles;
  });
}

export function getCommentsByArticleID(article_id) {
  return newsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
}

export function patchArticle(article_id, patchBody) {
  return newsApi
    .patch(`/articles/${article_id}`, patchBody)
    .then((response) => {
      return response.data.article;
    });
}
export function getUsers() {
  return newsApi.get("/users").then((response) => {
    return response.data.users;
  });
}

export function deleteComment(comment_id) {
  return newsApi.delete(`/comments/${comment_id}`).then((response) => {
    return response;
  });
}
export function postComment(article_id, newComment) {
  return newsApi
    .post(`/articles/${article_id}/comments`, newComment)
    .then((response) => {
      return response.data.comments;
    });
}

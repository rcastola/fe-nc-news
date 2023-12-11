import axios from "axios";

export function getAllArticles() {
  return axios
    .get("https://hosting-news.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    });
}

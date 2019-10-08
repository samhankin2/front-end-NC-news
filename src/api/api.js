import axios from "axios";

// export const getArticles = () => {
//   return axios
//     .get("https://nc-news-samh.herokuapp.com/api/articles")
//     .then(({ data }) => {
//       return data.articles;
//     });
// };

const api = axios.create({
  baseURL: "https://nc-news-samh.herokuapp.com/api"
});

export const getArticles = (sortBy, topicName) => {
  if (topicName === "all") topicName = undefined;
  return api
    .get("/articles", {
      params: {
        sort_by: sortBy,
        topic: topicName
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getSingleArticle = articleID => {
  return api.get("/articles/" + articleID).then(({ data }) => {
    return data.article;
  });
};

export const getCommentByArticleId = articleID => {
  return api.get("/articles/" + articleID + "/comments").then(({ data }) => {
    return data.comments;
  });
};

export const postNewComment = (articleID, commentObj) => {
  return api
    .post("/articles/" + articleID + "/comments", commentObj)
    .then(({ data }) => {
      return data.comment;
    });
};

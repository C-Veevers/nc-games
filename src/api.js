import axios from "axios";

const reviewApi = axios.create({
   baseURL: "https://project1-nc.herokuapp.com/api",
});

export const getCategories = () => {
   return reviewApi.get("/categories").then((res) => {
      return res.data.categories;
   });
};
export const getCategory = (type) => {
   return reviewApi.get(`/reviews?sort_by=created_at&category=${type}`).then((res) => {
      return res.data.reviews;
   });
};

export const getReviews = (sorted) => {
   return reviewApi.get(`/reviews?sort_by=${sorted}`).then((res) => {
      return res.data.reviews
   })
}
export const getSingleReview = (id) => {
   return reviewApi.get(`/reviews/${id}`).then((res) => {
      return res.data.review[0]
   })
}
export const getComments = (id) => {
   return reviewApi.get(`/reviews/${id}/comments`).then((res) => {
      return res.data.comments
   })
}
export const incVotes = (id) => {
   return reviewApi.patch(`/reviews/${id}`, { inc_votes: 1 }).then((res) => {
      return res.data.review
   })
}
export const postComment = (id, comment, username = "jessjelly") => {
   return reviewApi.post(`/reviews/${id}/comments`, { username, body: comment }).then(res => {
      return res.data.comment
   })
}
export const delComment = (id) => {
   return reviewApi.delete(`/comments/${id}`).then(res => {
      return res.data.comment
   })
}
export const getUsers = () => {
   return reviewApi.get('/users/').then(res => {
      return res.data.users
   })
}
export const getUser = (username) => {
   return reviewApi.get(`/users/${username}`).then(res => {
      return res.data.user
   })
}
export const createUser = (username, name) => {
   const url = `https://avatars.dicebear.com/api/adventurer/${username}.svg`
   return reviewApi.post(`/users/`, { username: username, name: name, avatar_url: url }).then(res => {
      return res.data.user
   })
}
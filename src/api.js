import axios from "axios";

const reviewApi = axios.create({
   baseURL: "https://project1-nc.herokuapp.com/api",
});

export const getCategories = () => {
   return reviewApi.get("/categories").then((res) => {
      return res.data.categories;
   });
};

export const getReviews = () => {
   return reviewApi.get("/reviews").then((res) => {
      return res.data.reviews
   })
}
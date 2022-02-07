import axios from "axios";

const gameApi = axios.create({
   baseURL: "https://project1-nc.herokuapp.com/api",
});

export const getCategories = () => {
   return gameApi.get("/categories").then((res) => {
      return res.data.categories;
   });
};

export const getReviews = () => {
   return gameApi.get("/reviews").then((res) => {
      return res.data.reviews
   })
}
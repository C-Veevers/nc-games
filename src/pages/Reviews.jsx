import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import {getReviews} from '../api'

export const Reviews = () => {
   const [reviews, setReviews] = useState([]);
   useEffect(() => {
      getReviews().then((res) => {
      setReviews(res);
    });
   }, []);
   return (
      <div className="games-container" id="all-games">
         <ul>
               {reviews.map(review =>{
               return (
                  <li key={review.title}>
                  <div className="gamecard">
                     <div className="gameImage">
                        <img src={review.review_img_url} alt={review.title} />
                     </div>
                     <div className="votes">
                        <p>{review.votes}</p>
                     </div>
                     <div className="title">
                        {review.title}
                     </div>
                  </div>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}
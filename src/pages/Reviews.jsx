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
      <div>
         <ul>
               {reviews.map((review, index) =>{
               return (
                  <li key={`reviewKey_${index}`}>
                     <Link to={`/reviews/${review.review_id}`}>
                  <div className="review-card">
                     <div className="review-Image">
                        <img src={review.review_img_url} alt={review.title} />
                     </div>
                     <div className="votes">
                        <p>{review.votes}</p>
                     </div>
                     <div className="title">
                        {review.title}
                     </div>
                  </div>
                  </Link>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import {getReviews} from '../api'

export const Reviews = () => {
   const [reviews, setReviews] = useState([]);
   const [sortBy, setSortBy] = useState("created_at")
   useEffect(() => {
      getReviews(sortBy).then((res) => {
      setReviews(res);
    });
   }, [sortBy]);
   const selectHandler = (event) => {
      setSortBy(event.target.value)
   }
   return (
      <main className="review-container">
         <div className="reviews">
         <label htmlFor="sortedBy">Sort By:
            <select id="sortedBy" name="sortedBy" onChange={selectHandler}>
               <option value="created_at">Date</option>
               <option value="votes">Vote Count</option>
            </select>
         </label>
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
      </main>
   )
}
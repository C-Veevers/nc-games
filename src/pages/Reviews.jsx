import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import {getReviews} from '../api'
import arrow from '../images/uparrow.png'

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
      <main className="main-container">
         <div className="overflow">
         <div className="sort-by">
            <label htmlFor="sortedBy">
            <select id="sortedBy" name="sortedBy" onChange={selectHandler}>
               <option value="created_at">Date</option>
               <option value="votes">Vote Count</option>
            </select>
         </label></div>
         <ul>
               {reviews.map((review, index) =>{
                  if (index == reviews.length-1){
                     return (
                        <li key={`reviewKey_${index}`}>
                        <div className="card">
                     <div className="review-Image">
                        <p>{reviews.length-1} / {review.total_count}</p>
                     </div>
                  </div>
                        </li>
                     )
                  }
               return (
                  <li key={`reviewKey_${index}`}>
                     <Link to={`/reviews/${review.review_id}`}>
                  <div className="card">
                     <div className="votes">
                        <div className="card-owner">
                           by: {review.owner}
                        </div>
                       <img className="votes-arrow" alt="up arrow" src={arrow} /> <p>{review.votes}</p>
                     </div>
                     <div className="review-Image">
                        <img className="card-img" src={review.review_img_url} alt={review.title} />
                     </div>
                     <div className="title">
                        <h3>{review.title}</h3>
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
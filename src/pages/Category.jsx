import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import { getCategory } from '../api'


export const Category = () => {
   const { type } = useParams()
   const [reviews, setReviews] = useState([]);
   useEffect(() => {
      getCategory(type).then((res) => {
      setReviews(res);
    });
   });
   return (
<div>
         <ul>
               {reviews.map((review, index) =>{
                  if (index == reviews.length-1){
                     return (<></>)
                  }
               return (
                  <li key={`reviewKey_${index}`}>
                     <Link to={`/reviews/${review.review_id}`}>
                  <div className="card">
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
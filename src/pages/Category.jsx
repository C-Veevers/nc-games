import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import { getCategory } from '../api'


export const Category = () => {
   const { type } = useParams()
   const [review, setReview] = useState([]);
   useEffect(() => {
      getCategory(type).then((res) => {
      setReview(res);
    });
   });
   return (
<div>
         <ul>
               {review.map((review, index) =>{
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
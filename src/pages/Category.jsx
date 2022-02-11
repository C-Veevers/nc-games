import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import { getCategory } from '../api'
import arrow from '../images/uparrow.png'


export const Category = () => {
   const { type } = useParams()
   const [reviews, setReviews] = useState([]);
   useEffect(() => {
      getCategory(type).then((res) => {
      setReviews(res);
    });
   });
   return (
      <main className="main-container">
         <div className="overflow">
            <h2>{type}</h2>
         <ul>
               {reviews.map((review, index) =>{
                  if (index === reviews.length-1){
                     return (<></>)
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
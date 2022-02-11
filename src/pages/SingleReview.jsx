import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import { getSingleReview, incVotes } from '../api'
import arrow from '../images/uparrow.png'

export const SingleReview = () => {
   const { id } = useParams()
   const [review, setReview] = useState({});
   const [counter, setCounter] = useState(0)
   const [err, setErr] = useState(null)
   useEffect(() => {
      getSingleReview(id).then(res => {
      setReview(res)
      setCounter(res.votes)
      ;
    });
   }, [counter, id]);
   const handleClick = () => {
      setCounter(curr => curr+1)
      setErr(null)
      incVotes(review.review_id).catch(() => {
         setCounter(curr => curr-1)
         setErr('Please Try Again')
      })
   }
   return (
      <main className="main-container">
         
         <div className="overflow">
         <div className="s-title"><h2>{review.title}</h2></div>
         <div className="comment-button">
            {(review.comment_count !== "0")
            ?<Link to={`/reviews/${id}/comments`}><button className="button">View Comments: {review.comment_count}</button></Link>
            :<button className="button">Comments: {review.comment_count}</button>
            }
            <Link to={`/reviews/${id}/comments/add`}><button className="button">Post Comment</button></Link>
         </div>
            <div className="card">
               <div className="card-body">
                  {review.review_body}
               </div>
               <div>
                  <img className="card-img" src={review.review_img_url} alt={review.title} />
               </div>
               <div className="votes">
                  <div className="card-owner card-body">
                     by: {review.owner}
                  </div>
                  <div></div>
                  <img className="votes-arrow" alt="up arrow" onClick={handleClick} src={arrow} /> <p>{review.votes}</p>
               </div>
            </div>
            <p>{err}</p>
            
         </div>
      </main>      
   )
}

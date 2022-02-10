import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import { getSingleReview, incVotes } from '../api'


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
   }, []);
   const handleClick = () => {
      setCounter(curr => curr+1)
      setErr(null)
      incVotes(review.review_id).catch(err => {
         setCounter(curr => curr-1)
         setErr('Please Try Again')
         console.log(err)
      })
   }
   return (
      <div>
         <h1>{review.title}</h1>
        
         <img width="50px" alt ={review.title} src = {review.review_img_url} />
         {(review.comment_count == "0") ? "" : <Link to={`/reviews/${review.review_id}/comments`}><button className="button">comments</button></Link>}
         <button className="button" onClick={handleClick}>vote</button>
         <p>{review.title} by <Link to="/comments/">{review.author}</Link></p>
         <p>{review.review_body}</p>
         <p>{counter}</p>
       {/*   owner - title, review_id, designer, category, created_at, comment_count */}
      </div>
   )
}
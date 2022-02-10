import { useContext, useEffect, useState } from "react"
import { useParams, Link} from "react-router-dom";
import { delComment, getComments } from '../api'
import { UserContext } from "../contexts/User";

export const Comments = () => {
   const { id } = useParams()
   const [comments, setComments] = useState([]);
   const [commentLable, setCommentLable] = useState("Add Comment")
   const {username} = useContext(UserContext)
   const [refresh, setRefresh] = useState(0)
   useEffect(() => {
      getComments(id).then((res) => {
      setComments(res);
    });
   },[refresh]);

   const clickHandler = (comment_id) => {
      delComment(comment_id).then(()=>{
         setRefresh((curr)=> curr+1)
      })
   }

   return (
      <div>
         <Link to={`/reviews/${id}/comments/add`}><button className="button">{commentLable}</button></Link>
      {comments.map((comment, index) => {
         return (
            <div key={`comments_${index}`}>
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            {(username == comment.author) ? <button className="button" onClick={()=>{clickHandler(comment.comment_id)}}>Delete Comment</button> : null}
            <p>votes: {comment.votes}</p>

            </div>
         )
      })}
      </div>
   )
}
import { useContext, useEffect, useState } from "react"
import { useParams, Link} from "react-router-dom";
import { delComment, getComments } from '../api'
import { UserContext } from "../contexts/User";
import arrow from '../images/uparrow.png'

export const Comments = () => {
   const { id } = useParams()
   const [comments, setComments] = useState([]);
   const {username} = useContext(UserContext)
   const [refresh, setRefresh] = useState(0)
   const [noContent, setNoContent] = useState(false)
   
   useEffect(() => {
      getComments(id).then((res) => {
      setComments(res);
    }).catch(err=>setNoContent(true))
   },[refresh, id]);

   const clickHandler = (comment_id) => {
      delComment(comment_id).then(()=>{
         setRefresh((curr)=> curr+1)
      })
   }

   return (
      <main className="main-container">
         
         <div className="overflow">
            <h2>Comments</h2>
               <div className="comment-button">
                  <Link to={`/reviews/${id}`}><button className="button">Back To Review</button></Link>
                  <Link to={`/reviews/${id}/comments/add`}><button className="button">Post Comment</button></Link>
               </div>
               { (noContent === false)
               ? comments.map((comment, index) => {
               return (
                  <div key={`comments_${index}`} className="card">
                     <div className="votes">
                        <div>
                           <img className="votes-arrow" alt="up arrow" src={arrow} /> 
                           <p>{comment.votes}</p>
            
                        </div>
                     </div>
                     <div className="card-body">
                        <hr />
                        <div>
                        <p>{comment.body}</p><br/>
                        </div>
                        {(username === comment.author) ? <button className="button delete" onClick={()=>{clickHandler(comment.comment_id)}}>Delete Comment</button> : null}
                     </div>      
                     
                     <div className="comment-img">
                        <div>
                           <img height="80px" className="comment-avatar" src={`https://avatars.dicebear.com/api/adventurer/${comment.author}.svg`} alt={`${comment.author} avatar`} />
                        </div>
                        <div className="comment-author"><h3>{comment.author}</h3></div>                   
                        
                     </div>
                     <div className="date">
                           on: {
                           new Date(comment.created_at).toLocaleDateString('en-GB')
                           }
                        </div>
                     
                  </div>

               )
               })
               : <h3>No Comments Found</h3>
            }
         </div>         
      </main>
      )
   }
   

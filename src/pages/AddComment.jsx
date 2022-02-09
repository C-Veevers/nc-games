import { useContext, useState } from "react"
import { postComment } from "../api";
import { useParams, Link} from "react-router-dom";
import { UserContext } from "../contexts/User";
export const AddComment = () => { 
   const { id } = useParams()
   const [typed, setTyped] = useState("");
   const [added, setAdded] = useState(false)
   const {username} = useContext(UserContext)
   const [status, setStatus] = useState("Submit")
   
   const inputHandler = (event) => {
      setTyped(event.target.value)
   }

   const submitHandler = (event) => {
      event.preventDefault()
      setStatus("..Posting Comment..")
      postComment(id, typed, username)
      .then(()=>{
         setAdded(true)
      })
      .catch(err => {
         setStatus("Error Not Logged In")
      })
      
   }  
   return (
      <div>{(!added) 
         ? 
            <form  onSubmit={submitHandler}>
            <label htmlFor="comment">Comment</label><br />
            <textarea onChange={inputHandler} maxLength="250" placeholder="Add Your Comment" rows="5" cols="45" type="text" id="comment" name="comment" /><br />
            {typed.length}/250
            <button>{status}</button>
            </form> 
         :
            <>
            <h3>Comment Added</h3><br/>
            <Link to={`/reviews/${id}/comments`}><button>Go Back</button></Link>
            </>
      }
      </div>
   )
}
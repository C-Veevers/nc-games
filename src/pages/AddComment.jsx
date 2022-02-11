import { useContext, useState } from "react"
import { postComment } from "../api";
import { useParams, Link} from "react-router-dom";
import { UserContext } from "../contexts/User";
export const AddComment = () => { 
   const { id } = useParams()
   const [typed, setTyped] = useState("");
   const [added, setAdded] = useState(false)
   const {username} = useContext(UserContext)
   const [status, setStatus] = useState("")
   const [disable, setDisable] = useState(true)
   
   const inputHandler = (event) => {
      setTyped(event.target.value)
      setDisable(false)
   }

   const submitHandler = (event) => {
      event.preventDefault()
      setStatus("..Posting Comment..")
      if (typed === ""){
         setStatus("Comments must contain text")
         return
      }
      postComment(id, typed, username)
      .then(()=>{
         setAdded(true)
      })
      .catch(err => {
         setStatus("Unable to Comment as a Guest")
      })
      
   }  
   return (
      <main className="main-container">
         <div className="overflow comment">
            <div className="card">
               
               {(!added) 
               ?  <>
                  <form  onSubmit={submitHandler}>
                     <label className="small-text">{status}<br/>
                     <textarea onChange={inputHandler} maxLength="250" placeholder="Add Your Comment" rows="10" cols="31" type="text" id="comment" name="comment" /><br />
                     </label>
                     <div className="word-counter">
                     <p className="tiny-text">{typed.length}/250</p>
                     {(disable)
                     ? null
                     :<button className="button">Submit</button>
                     }
                     
                     </div>
                  </form> 
                  <h3>Post Comment</h3>
                  </>
               :
                  <>
                  <h2>Comment Added</h2><br/>
                  <Link to={`/reviews/${id}/comments`}><button className="button">Back To Comments</button></Link>
                  </>
               }
            </div>
         </div>
      </main>
   )
}
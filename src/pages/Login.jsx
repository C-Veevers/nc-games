import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import { Link } from "react-router-dom"

export const Login = () => {
   const {username, setUser} = useContext(UserContext)
   const [input, setInput] = useState("")

   const inputHandler = (event) => {
      setInput(event.target.value)
   }
   const submitHandler = (event) => {
      event.preventDefault()
      setUser(input)
      
   }
   return (
      
      <main className="login">
         {(username == "") 
          ?
          <div className="grid">
            <img className="login-avatar" alt="avatar" src={`https://avatars.dicebear.com/api/adventurer/${input}.svg`} />
            <h2>Welcome to the app</h2>
            <form className="login-form" onSubmit={submitHandler}>
               <label htmlFor="loginName">
                  <input onChange={inputHandler} name="loginName" type="text" placeholder="Please Enter Your Name" />
               </label>
            </form>
         </div>
         :
         <div className="grid">
            <img className="login-avatar" alt="avatar" src={`https://avatars.dicebear.com/api/adventurer/${username}.svg`} />
            <h2>Logged in as {username}</h2>
            <div className="login-buttons">
            <Link to="/reviews"><button className="button">Continue to app</button></Link>
            <button className="button" onClick={()=>{setUser("");setInput("")}}>logout</button>
            </div>
         </div>
         }
         </main> 
  
      
   )
}
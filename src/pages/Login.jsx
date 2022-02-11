import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import { Link } from "react-router-dom"
import { createUser, getUser } from "../api"

export const Login = () => {
   const {username, setUser} = useContext(UserContext)
   const [input, setInput] = useState("")
   const [newUser, setNewUser] = useState(false)
   const [name, setName] = useState("")

   const inputHandler = (event) => {
      setInput(event.target.value)
   }
   const inputNameHandler = (event) => {
      setName(event.target.value)
   }
   const submitHandler = (event) => {
      event.preventDefault()
      getUser(input).then(res => {
         setUser(input)
      }).catch(err => {
         setNewUser(true)
         setUser(input)
         setInput("")
      })     
   }
   const submitNewUserHandler = (event) => {
      event.preventDefault()
      
      createUser(username, name).then(res => {
         setNewUser(false)
      }).catch(err => setNewUser(true))
   }
   return (
      
      <main className="login">
         {(newUser === true)
            ? <div className="grid">
               <img className="login-avatar" alt="avatar" src={`https://avatars.dicebear.com/api/adventurer/${username}.svg`} />
               <h2>New User: {username}</h2>
               <form className="login-form" onSubmit={submitNewUserHandler} >
                  <label>  
                     <input onChange={inputNameHandler} name="name" type="text" placeholder="Please Enter Your Full Name" />
                  </label>
               </form><br/>
               <p className="small-text">Please enter your full name to complete registration, or continue as a guest:</p>
               <br/><Link to="/reviews"><button className="button">Continue as Guest*</button></Link><br/><p className="tiny-text">*you will not be able to comment or create reviews</p>
               </div>
            :
            (username === "") 
            ?
            <div className="grid">
               <img className="login-avatar" alt="avatar" src={`https://avatars.dicebear.com/api/adventurer/${input}.svg`} />
               <h2>Welcome to the app</h2>
               <form className="login-form" onSubmit={submitHandler}>
                  <label htmlFor="loginName">
                     <input onChange={inputHandler} name="loginName" type="text" placeholder="Please Enter Your UserName" />
                  </label>
               </form><br/>
               <p className="small-text">New users should register in order to post comments or reviews</p>
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
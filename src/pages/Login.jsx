import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"

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
      <div>
         <form onSubmit={submitHandler}>
            <label htmlFor="loginName">
            Enter Your User Name<input onChange={inputHandler} name="loginName" type="text" />
            </label>
         </form>
         
      </div>
   )
}
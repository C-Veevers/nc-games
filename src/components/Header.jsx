import { useContext } from "react"
import { UserContext } from "../contexts/User"


export const Header = () =>{
   const {username, setUser} = useContext(UserContext)
   return (
      <div className="header">
         <div className="header-title">
            <h1>Roll Review</h1>
         </div>
         <div className="header-user-container">
            <div className="header-user-img">
               {
                  (username == "") 
                  ? null 
                  : <img alt="User Avatar"src = {`https://avatars.dicebear.com/api/adventurer/${username}.svg`} />}
            </div>
            <div className="header-user-status">
            {username}
            </div>
         </div>
      </div>
   )
}
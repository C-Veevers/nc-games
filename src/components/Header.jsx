import { useContext } from "react"
import { UserContext } from "../contexts/User"
import { Link } from "react-router-dom"


export const Header = () =>{
   const {username, setUser} = useContext(UserContext)
   return (
      <div className="header">
         <div className="header-title">
            {(username == "") 
            ? <Link to="/"><h1>Roll Review</h1></Link>
            : <Link to="/reviews"><h1>Roll Review</h1></Link>
            }
         </div>
         <div className="header-user-container">
            <div className="header-user-img">
               {
                  (username == "") 
                  ? null 
                  : <Link to="/"><img alt="User Avatar"src = {`https://avatars.dicebear.com/api/adventurer/${username}.svg`} /></Link>}
            </div>
            <div className="header-user-status">
            {username}
            </div>
         </div>
      </div>
   )
}
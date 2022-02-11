
import { Link,} from "react-router-dom";

export const Nav = () => {

      return(
         <div className="nav-bar">
               <button className="nav-bar-link button">
                  <Link to={`/reviews`}>Reviews</Link>
               </button>
               <button className="nav-bar-link button">
                  <Link to={`/categories`}>Categories</Link>
               </button>
               <button className="nav-bar-link button">
                  <Link to={`/`}>Account</Link>
               </button>
         </div>
      )   
}
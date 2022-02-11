import { useEffect, useState } from "react"
import { Link,} from "react-router-dom";
import {getCategories} from "../api"

export const Nav = () => {
const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);
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
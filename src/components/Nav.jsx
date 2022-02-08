import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
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
               {categories.map(category => {
                  return (
                     <div className="nav-bar-link">
                        <Link to={`/reviews/${category.slug}`}>{category.slug}</Link>
                     </div>
                  )
               })}
         </div>
      )   
}
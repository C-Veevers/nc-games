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
            <ul>
               {categories.map(category => {
                  return (
                     <li key={category.slug}>
                        <Link to={`/games/${category.slug}`}>{category.slug}</Link>
                     </li>
                  )
               })}
            </ul>
         </div>
      )   
}
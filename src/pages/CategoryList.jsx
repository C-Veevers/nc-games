
import { useEffect, useState } from "react"
import { Link,} from "react-router-dom";
import {getCategories} from "../api"

export const CategoryList = () => {
const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);
      return(
         <main className="main-container">
         <div className="overflow">
         <ul>
               {categories.map((category, index) =>{
               return (
                  <li key={`CategoryKey_${index}`}>
                     <Link to={`/category/${category.slug}`}>
                  <div className="card">
                     <div className="card-body">
                        <p>{category.description}</p>
                        
                     </div>
                     <div className="title">
                           <h3>{category.slug}</h3>
                           <hr/>
                     </div>
                  </div>
                  </Link>
                  </li>
               )
            })}
         </ul>
         </div>
      </main>
      )   
}
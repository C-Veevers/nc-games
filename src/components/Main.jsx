import { Routes, Route } from "react-router-dom";
import { Reviews } from '../pages/Reviews'
import { SingleReview } from '../pages/SingleReview'
import { Category }  from '../pages/Category'
import { Comments } from '../pages/Comments'
import { AddComment } from '../pages/AddComment'
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
export const Main = () => {
   return (
      <div className="main-container">
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:id" element={<SingleReview />} />
        <Route path="/reviews/:id/comments" element={<Comments />} />
        <Route path="/reviews/:id/comments/add" element={<AddComment />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
   )
}
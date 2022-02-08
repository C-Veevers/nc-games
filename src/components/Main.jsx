import { Routes, Route } from "react-router-dom";
import { Reviews } from '../pages/Reviews'
import { SingleReview } from '../pages/SingleReview'

export const Main = () => {
   return (
      <div className="main-container">
      <Routes>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:rev_id" element={<SingleReview />} />
      </Routes>
      </div>
   )
}
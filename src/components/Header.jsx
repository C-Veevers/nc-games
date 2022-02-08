export const Header = () =>{
   return (
      <div className="header">
         <div className="header-title">
            <h1>Roll Review</h1>
         </div>
         <div className="header-user-container">
            <div className="header-user-img">
               <img src = "https://avatars.dicebear.com/api/adventurer/userName.svg" />
            </div>
            <div className="header-user-status">
               userName
            </div>
         </div>
      </div>
   )
}
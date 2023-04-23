import {Link} from "react-router-dom"
function Sidebar(){
    return (
        <div className="sidebar">
             <Link to="/">Dashboard</Link>
         <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/chart">chart</Link>
      
      <Link to="/fetch">Fetch</Link>
      
        </div>
    )
}
export default Sidebar
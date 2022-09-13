import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="nav">
        <h1><Link to='/' className="links">ChatScrum</Link></h1>
        <ul className="nav-link">
          <li><Link to="/signup" className="links"> SIGN UP</Link></li>
          <li><Link to="/signin" className="links"> SIGN IN</Link></li>
        </ul>
      </nav>
    </>
  )
}


export default Home;
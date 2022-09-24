import "./home.css";
import { Link } from "react-router-dom";
import Logo from "../UI/backdrop/Logo";

const Home = () => {
  return (
    <>
      <nav className="nav">
      <Logo/>
        <ul className="nav-link">
          <li><Link to="/signup" className="links"> SIGN UP</Link></li>
          <li><Link to="/signin" className="links"> SIGN IN</Link></li>
        </ul>
      </nav>
    </>
  )
}


export default Home;
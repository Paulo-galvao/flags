import { Link, useNavigate } from "react-router";
import Cookies from "js-cookie";
import "../assets/styles/navbar.css"

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-container">
        <span className="nav-logo">
          <Link to={"/"}>
            <img src="../public/logo.png" alt="logo" />
          </Link>
        </span>
        {
          !Cookies.get("token") ? 
            <Link className="login-active" to={"/login"}>
              <button>Login</button>
            </Link>
          : <button onClick={() => {
              Cookies.remove("token");
              navigate('/');
            }}>Logout</button>
        }
      </div>
    </nav>
  );
}

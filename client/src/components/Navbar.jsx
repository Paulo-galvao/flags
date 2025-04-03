import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <span className="nav-logo">
          <Link to={"/"}>
            <img src="../public/logo.png" alt="logo" />
          </Link>
        </span>
        <button>Login</button>
      </div>
    </nav>
  );
}

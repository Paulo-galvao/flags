import { Link } from "react-router";

export default function SignUp() {
  return (
    <>
      <nav>
        <div className="nav-container">
          <span className="nav-logo">
            <Link to={"/"}>
              <img src="../public/logo.png" alt="logo" />
            </Link>
          </span>
        </div>
      </nav>
      <div className="login-container">
          <form>
            <h2>Criar Conta</h2>
            <i className='bx bx-user'></i>
            <input type="text" placeholder="Username"/>
            <i className='bx bx-lock'></i>
            <input type="password" placeholder="Password"/>
            <button type="submit">Inscrever-se</button>
            <span style={{textAlign: "center"}}>Seja Bem-vindo</span>
          </form>
        </div>
    </>
  );
}

import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar";

export default function Login() {
  const url = "http://localhost:3021/users/login";

  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    formState: {errors}
  } = useForm(); 

  async function login(body) {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      const token = data.token
      Cookies.set("token", token, {expires: 1});
      
    } catch (error) {
      console.log(error);      
    }
  }

  function onSubmit(data) {
    login(data);
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <div className="general-container">
        <div className="login-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <i className='bx bx-user'></i>
            <input 
              {...register("username", {required: "Preenchimento obrigatório"})} 
              type="text" 
              placeholder="Username"
            />
            {errors.username && (
              <span className="error-input-msg login-name">{errors.username.message}</span>
            )}
            <i className='bx bx-lock'></i>
            <input
              {...register("password", {required: "Preenchimento obrigatório"})} 
              type="password" 
              placeholder="Password"
            />
            {errors.password && (
              <span className="error-input-msg login-password">{errors.password.message}</span>
            )}
            <button type="submit">Entrar</button>
            <span>Ainda não é cadastrado? <Link to={"/signup"}>Inscreva-se</Link></span>
          </form>
        </div>
      </div>
    </>
  );
}

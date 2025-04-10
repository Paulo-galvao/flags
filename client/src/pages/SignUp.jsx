import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar";


export default function SignUp() {
  const url = "http://localhost:3021/users/signup";
  const navigate = useNavigate();

  const { register, handleSubmit, formState: {errors}
  } = useForm();

  async function signUp(body) {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json();
      const token = data.token;
      Cookies.set("token", token, {expires: 1});
    } catch (error) {
      console.log(error);      
    }
  }

  function onSubmit(body) {
    console.log(body);
    signUp(body);
    navigate("/");
  }
  return (
    <>
      <Navbar />
      <div className="login-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Criar Conta</h2>
            <i className='bx bx-user'></i>
            <input type="text" 
              placeholder="Username"
              {...register("username", {required: "Campo não pode estar vazio"})}
            />
            {errors.username && (
              <span className="error-input-msg login-name">{errors.username.message}</span>
            )}
            <i className='bx bx-lock'></i>
            <input type="password" 
              placeholder="Password"
              {...register("password", {required: "Campo não pode estar vazio"})}  
            />
            {errors.password && (
              <span className="error-input-msg login-password">{errors.password.message}</span>
            )}
            <button type="submit">Inscrever-se</button>
            <span style={{textAlign: "center"}}>Seja Bem-vindo</span>
          </form>
        </div>
    </>
  );
}

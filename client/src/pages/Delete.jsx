import { useNavigate, useParams, Link } from "react-router";
import Navbar from "../components/Navbar.jsx";
import Cookies from "js-cookie";

export default function Delete() {
  const navigate = useNavigate();
  const { id } = useParams();

  async function destroy(id) {
    try {
      const url = `http://localhost:3021/countries/delete/${id}`;
      await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="delete-container">
        <form onSubmit={() => {
          destroy(id);
          navigate("/");
        }}>
          Tem certeza que deseja excluir essa bandeira?
          <button type="submit">Sim</button>
          <span>
            <Link to={-1}>
              Não
            </Link>
            </span>
        </form>
      </div>
    </>
  );
}

import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import "../assets/styles/search.css";

export default function SearchArea() {
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    formState: {errors}
  } = useForm();

  async function onSubmit(data) {
    navigate(`/search/${data.name}`);
  }

  function activeMenu() {
      const options = document.querySelector(".continent-options");
      const icon = document.querySelector(".bxs-chevron-down");
      options.classList.toggle("active");
      icon.classList.toggle("bxs-chevron-up")
    }
  
  function navContinent(e) {
    navigate(`/continent/${e.target.innerText}`);
  }
  
  async function onSubmit(data) {
    navigate(`/search/${data.name}`);
  }

  return (
    <section className="search-area">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: "Preenchimento obrigatório" })}
          type="text"
          placeholder="Pesquise por um país aqui"
          name="name"
        />
        {errors.name && (
          <span className="error-input-msg">{errors.name.message}</span>
        )}
      </form>
      <div className="continent">
        <span className="continent-btn" onClick={activeMenu}>
          Continente
          <i className="bx bxs-chevron-down"></i>
        </span>
        <ul className="continent-options">
          <li onClick={navContinent}>África</li>
          <li onClick={navContinent}>América</li>
          <li onClick={navContinent}>Ásia</li>
          <li onClick={navContinent}>Europa</li>
          <li onClick={navContinent}>Oceania</li>
        </ul>
      </div>
    </section>
  );
}

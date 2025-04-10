import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import "../assets/styles/add-update.css";
import Navbar from "../components/Navbar.jsx"
import Cookies from "js-cookie";

export default function () {
  const navigate = useNavigate();
  const {id} = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    update(id, data);
    navigate("/");
  }

  async function getDataById(id) {
    try {
      const url = `http://localhost:3021/countries/${id}`;
      const response = await fetch(url);
      return response;
            
    } catch (error) {
      console.log(error);
    }
  }

  async function update(id, body) {
    try {
      const url = `http://localhost:3021/countries/update/${id}`;
      try {
        await fetch(url, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
          body: JSON.stringify(body),
        });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {}
  }

  useEffect(()=> {
    const fetch = async () => {
      const response = await getDataById(id);
      const flag = await response.json();
      
      setValue("name", flag[0].name)
      setValue("continent", flag[0].continent)
      setValue("population", flag[0].population)
      setValue("capital", flag[0].capital)
      setValue("flag_url", flag[0].flag_url)
      
    }
    fetch()
  }, []);


  return (
    <>
      <Navbar />
      <section className="add-area">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Atualizar</h3>
          <div className="input-area">
            <input
              {...register("name", { required: "Preenchimento obrigatório" })}
              placeholder="Nome do país"
              type="text"
            />

            {errors.name && (
              <span className="error-add-msg">{errors.name.message}</span>
            )}
          </div>
          <div className="input-area">
            <input
              {...register("continent", { required: "Preenchimento obrigatório" })}
              placeholder="Continente"
              type="text"
            />
            {errors.continent && (
              <span className="error-add-msg">{errors.continent.message}</span>
            )}
          </div>
          <div className="input-area">
            <input
              {...register("population", { required: "Preenchimento obrigatório" })}
              placeholder="População"
              type="text"
            />
            {errors.population && (
              <span className="error-add-msg">{errors.population.message}</span>
            )}
          </div>
          <div className="input-area">
            <input
              {...register("capital", { required: "Preenchimento obrigatório" })}
              placeholder="Capital"
              type="text"
            />
            {errors.capital && (
              <span className="error-add-msg">{errors.capital.message}</span>
            )}
          </div>
          <div className="input-area">
            <input
              {...register("flag_url", { required: "Preenchimento obrigatório" })}
              placeholder="Url da bandeira"
              type="text"
            />
            {errors.flag_url && (
              <span className="error-add-msg">{errors.flag_url.message}</span>
            )}
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}

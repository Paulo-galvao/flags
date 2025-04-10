import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

export default function AddArea() {
  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    formState: {errors}
  } = useForm();

  function onSubmit(data) {
    postFlag(data);
    navigate("/");
  }

  async function postFlag(body) {
    const url = "http://localhost:3021/countries/add";
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get("token")}`
        },
        body: JSON.stringify(body)
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="add-area">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Adicionar uma nova bandeira</h3>
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
  );
}

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

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
          'Content-Type': 'application/json'
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
        <input
          {...register("name", { required: "Preenchimento obrigatório" })}
          placeholder="Nome do país"
          type="text"
        />
        {errors.name && (
          <span className="error-input-msg">{errors.name.message}</span>
        )}
        <input
          {...register("continent", { required: "Preenchimento obrigatório" })}
          placeholder="Continente"
          type="text"
        />
        {errors.continent && (
          <span className="error-input-msg">{errors.continent.message}</span>
        )}
        <input
          {...register("population", { required: "Preenchimento obrigatório" })}
          placeholder="População"
          type="text"
        />
        {errors.population && (
          <span className="error-input-msg">{errors.population.message}</span>
        )}
        <input
          {...register("capital", { required: "Preenchimento obrigatório" })}
          placeholder="Capital"
          type="text"
        />
        {errors.capital && (
          <span className="error-input-msg">{errors.capital.message}</span>
        )}
        <input
          {...register("flag_url", { required: "Preenchimento obrigatório" })}
          placeholder="Url da bandeira"
          type="text"
        />
        {errors.flag_url && (
          <span className="error-input-msg">{errors.flag_url.message}</span>
        )}
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

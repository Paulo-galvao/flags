import { Link } from "react-router";

export default function Card({props}) {
  
  return (
    <>
      {props.map( (flag) => {
        return (
          <Link key={flag.id} to={`/getone/${flag.id}`}>
            <div className="card">
              <img src={flag.flag_url} alt="flag" />
              <h3>{flag.name}</h3>
              <p>Capital: {flag.capital}</p>
              <p>Continente: {flag.continent}</p>
              <p>População estimada: {flag.population}</p>
            </div>
          </Link>
        )
      })}
    </>
  );
}

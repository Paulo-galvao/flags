import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router"

export default function Search() {
  const { name } = useParams();
  const [flag, setFlag] = useState([]);
  const url = "http://localhost:3021/countries";
  
  async function getByName(name) {
    try {
      const response = await fetch(`${url}/search?name=${name}`);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () => {
    const fetch = async () => {
      const response = await getByName(name);
      setFlag(response[0]);
    }
    fetch();
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="general-container">
        <section className="search-container">
          <div className="search-flag">
            <img src={flag.flag_url} alt="flag" />
            <h3>{flag.name}</h3>
            <p>Capital: {flag.capital}</p>
            <p>Continente: {flag.continent}</p>
            <p>População estimada: {flag.population}</p>
          </div>
        </section>
      </div>
    </>
  )
}

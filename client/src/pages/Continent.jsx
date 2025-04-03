import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Continent() {
  const [flags, setFlags] = useState([]);
  const url = "http://localhost:3021/countries";
  const {continent} = useParams(); 

  async function getItems(continent) {
    try {
      const response = await fetch(`${url}/filter?continent=${continent}`);
      return response.json();
    } catch (error) {
      console.log(error);      
    }
  }

  useEffect( () => {
    const fetch = async () => {
      const response = await getItems(continent);
      
      setFlags(response);
    }
    fetch();
  }, [])

  return (
    <>
      <Navbar />
      <div className="general-container">
      <section className="main-area">
        <Card props={flags} />
        </section>
      </div>
    </>
  );
}

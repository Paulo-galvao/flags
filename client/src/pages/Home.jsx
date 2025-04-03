import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchArea from "../components/SearchArea";

export default function Home() {
  const [flags, setFlags] = useState([]);
  const url = "http://localhost:3021/countries";

  async function getItems() {    
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () => {
    const fetch = async () => {
      const flags = await getItems();
      setFlags(flags);
    }
    fetch();
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="general-container">
        <SearchArea />
        <section className="main-area">
          <Card props={flags} />
        </section>
      </div>
    </>
  );
}

import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function () {
  const [flags, setFlags] = useState([]);
    // const url = "http://localhost:3021/countries";
  
    // async function getItems() {    
    //   try {
    //     const response = await fetch(url);
    //     return response.json();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  
    // useEffect( () => {
    //   const fetch = async () => {
    //     const flags = await getItems();
    //     setFlags(flags);
    //   }
    //   fetch();
    // }, []);

  return (
    <>
      <Navbar />
      <div className="general-container">
        {/* <div className="general-container">
          <SearchArea />
          <section className="main-area">
            <Card props={flags} />
          </section>
        </div> */}
      </div>
    </>
  );
}

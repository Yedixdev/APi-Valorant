import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "../styles/page-arms.css";

const Arms = () => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/weapons");
        const data = await response.json();
        setWeapons(data.data);
      } catch (error) {
        console.error("Error al obtener los datos de las armas:", error);
      }
    };

    fetchWeapons();
  }, []);

  return (
    <>
    <div className="content-all-arms">
      <div className="title-allarms-valo">Armas de Valorant</div>
      <div className="container-allarms-valo">
        {weapons.map((weapon) => (
          <div key={weapon.uuid}>
            <div className="name-arms">{weapon.displayName}</div>
            <img src={weapon.displayIcon} alt={weapon.displayName} />
            <div className="arma">
              <div className="type-arms">Tipo de Arma:</div>
             {weapon.shopData?.categoryText || "No especificado"}
            </div>
            <div className="precie-arms">
              <div className="precie-title-precie">Precio:</div> 
              {weapon.shopData?.cost || "Gratis"}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Arms;

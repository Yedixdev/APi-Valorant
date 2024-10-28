import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "../styles/page-maps.css";

const Maps = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/maps");
        const data = await response.json();
        setMaps(data.data);
      } catch (error) {
        console.error("Error al obtener los datos de los mapas:", error);
      }
    };

    fetchMaps();
  }, []);

  const mapDescriptions = {
    "Ascent": {
      pais: "Italia",
      descripcion: "Ubicado en Venecia, Ascent es conocido por su área central abierta, crucial para el control del mapa, y sus puertas destructibles que permiten el control de rutas."
    },
    "Bind": {
      pais: "Marruecos",
      descripcion: "Mapa que cuenta con teletransportadores unidireccionales que facilitan rápidas rotaciones entre sitios, ubicado en el desierto marroquí."
    },
    "Breeze": {
      pais: "Caribe",
      descripcion: "Ambientado en una isla caribeña, Breeze se caracteriza por sus áreas abiertas y largas líneas de visión, ideal para enfrentamientos a larga distancia."
    },
    "Haven": {
      pais: "Bután",
      descripcion: "Es el único mapa con tres sitios de bomba, lo que permite un enfoque estratégico diferente tanto para el ataque como para la defensa."
    },
    "Icebox": {
      pais: "Rusia",
      descripcion: "Mapa ambientado en una instalación ártica en Siberia, Rusia. Cuenta con múltiples niveles y cuerdas, ofreciendo un juego vertical y rápido."
    },
    "Split": {
      pais: "Japón",
      descripcion: "Ubicado en Tokio, Japón. Tiene un diseño compacto con cuerdas y posiciones elevadas, adecuado para estrategias defensivas."
    },
    "Fracture": {
      pais: "Estados Unidos",
      descripcion: "Mapa experimental con un diseño en forma de H que permite ataques desde ambos extremos, ambientado en una instalación de investigación en desuso."
    },
    "Lotus": {
      pais: "India",
      descripcion: "Inspirado en la cultura y arquitectura india, Lotus ofrece varias rutas de ataque y puertas giratorias que agregan dinamismo al juego."
    },
    "Pearl": {
      pais: "Portugal",
      descripcion: "Ubicado bajo el agua cerca de Lisboa, Portugal. Es un mapa tradicional sin cuerdas ni teletransportadores, enfocado en enfrentamientos tácticos."
    },
    "Sunset": {
      pais: "Estados Unidos",
      descripcion: "Ambientado en Los Ángeles, California. Ofrece una mezcla de áreas abiertas y estrechos callejones en un entorno urbano."
    },
    "The Range": {
      pais: "Desconocido",
      descripcion: "Campo de entrenamiento para practicar armas y habilidades en un entorno controlado, sin presión de un combate real."
    },
    "District": {
      pais: "Desconocido",
      descripcion: "Mapa de combate táctico en un entorno urbano, con callejones y espacios cerrados ideales para el combate a corta distancia."
    },
    "Kasbah": {
      pais: "Norte de África",
      descripcion: "Inspirado en ciudades norteafricanas, combina áreas abiertas y pasillos estrechos, permitiendo un juego estratégico y variado."
    },
    "Ruins": {
      pais: "Desconocido",
      descripcion: "Un mapa en ruinas, ideal para tácticas defensivas con numerosos puntos de cobertura y líneas de visión abiertas."
    },
    "Stadium": {
      pais: "Desconocido",
      descripcion: "Inspirado en un estadio, este mapa ofrece tanto áreas abiertas como pasillos técnicos, donde la visibilidad y el posicionamiento son clave."
    },
    "Tower": {
      pais: "Desconocido",
      descripcion: "Un mapa con una estructura vertical centrada en una torre, que favorece estrategias de control y posiciones elevadas."
    },
    "Yard": {
      pais: "Desconocido",
      descripcion: "Basado en un almacén industrial, presenta espacios abiertos y cerrados ideales para emboscadas y ataques rápidos."
    },
    "Plaza": {
      pais: "Italia",
      descripcion: "Ambientado en una plaza urbana estilo italiano, con áreas abiertas y espacios interiores cerrados, ideal para tácticas rápidas."
    },
    "Drift": {
      pais: "Desconocido",
      descripcion: "Escenario urbano experimental, adecuado para entrenar técnicas avanzadas de movimiento y combate en condiciones diversas."
    },
    "Glitch": {
      pais: "Futurista",
      descripcion: "Mapa con obstáculos dinámicos y efectos visuales, pensado para desafiar la percepción y habilidades tácticas del jugador."
    },
    "Piazza": {
      pais: "Italia",
      descripcion: "Ubicado en una plaza italiana, con áreas al aire libre y zonas interiores cerradas, adecuado para combate táctico."
    },
    "Abyss": {
      pais: "Desconocido",
      descripcion: "Un mapa oscuro y místico, ideal para batallas a corta distancia con áreas de visibilidad limitada."
    },
    "Basic Training": {
      pais: "Desconocido",
      descripcion: "Campo de entrenamiento básico para familiarizarse con las mecánicas y habilidades de los agentes en un entorno controlado."
    }
  };

  return (
    <>
      <div className="page-maps">
        <div className="title-maps">Mapas de Valorant</div>
        <div className="maps-container">
          {maps.map((map) => (
            <div className="map-item" key={map.uuid}>
              <div className="map-name">{map.displayName}</div>
              <img className="map-img" src={map.splash} alt={map.displayName}/>
              <div className="map-title-description">Descripción:</div>
              <div className="maps-description-content">
                <div className="map-country">
                  <span>País:</span> {mapDescriptions[map.displayName]?.pais || "País no disponible."}
                </div>
                <div className="map-caracteres">
                  {mapDescriptions[map.displayName]?.descripcion || "Caracteristicas no disponible."}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Maps;

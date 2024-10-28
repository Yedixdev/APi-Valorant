import "../styles/page-agent.css"
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Agents = () => {
  const [agents, setAgents] = useState([]); 

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/agents");
        const data = await response.json();
        setAgents(data.data); 
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchAgents(); 
  }, []);

  return (
   <>
      <div className="page-agent">
         <h1 className="title-page-agent">Agentes de Valorant</h1>
         <div>
            {agents.map(agent => (
               <div className="content-all-agent" key={agent.uuid}>
                  <h2 className="title-all-agent">{agent.displayName}</h2>
                  <img src={agent.displayIcon} alt={agent.displayName}/>
                  <div className="description-page-agent">
                     <span>Descripción:</span> {agent.description}
                  </div>
                  <div className="rol-page-agent">
                     <span>Rol:</span> {agent.role ? agent.role.displayName : "N/A"}
                  </div>
               </div>
            ))}
         </div>
      </div>
      <Footer/>
   </>
 );
};

export default Agents;

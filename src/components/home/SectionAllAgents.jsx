import "../../styles/section-allagents.css";
import { Link, useNavigate } from "react-router-dom";
import ImgAgents from "../../img/valroantagents.png";

const SectionAllAgents = () => {
   const navigate = useNavigate();
   const hadleClick = () => {
      navigate('/agents');
   }

   return (
      <div className="allagents">
         <div className="container-yours-agents">
            <div className="section-agents-1">
               <img src={ImgAgents} alt="Agents" className="img-agents" />
            </div>
            <div className="section-agents-2">
               <div className="title-agents">Tus Agentes</div>
               <div className="description-agents">
                  <div className="subtitle-agents">
                     LA CREATIVIDAD ES TU MEJOR ARMA.
                  </div>
                  <div className="description-agents">
                     Más allá de las armas y las balas, podrás elegir a un agente dotado
                     de habilidades versátiles, veloces y letales con las que crearás
                     oportunidades para sobresalir. Ningún agente se jugará igual, ni
                     ningún momento memorable se verá igual.
                  </div>
               </div>
               <div className="container">
                  <button onClick={hadleClick} className="btn-agents">
                     Conocer todos los Agentes
                  </button >
               </div>
            </div>
         </div>
      </div>
    );
}

export default SectionAllAgents;
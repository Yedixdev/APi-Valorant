import "../../styles/section-arms.css";
import { useNavigate } from "react-router-dom";
import ImgArms from "../../img/arms.webp";

const SectionArms = () => {
   const navigate = useNavigate();
   const armsClick = () => {
      navigate('/arms');
   }

   return (
      <div className="all-arms">
         <div className="container-arms">
            <div className="section-arm">
               <img src={ImgArms} alt="Arms" className="img-arms" />
            </div>
            <div className="section-arms">
               <div className="title-arm">Tus Armas</div>
               <div className="arms">
                  <div className="subtitle-arms">
                     PELEA AL REDEDOR DEL MUNDO.
                  </div>
                  <div className="description-arms">
                     En Valorant, cada ronda cuenta con una amplia gama de armas a tu disposición. Desde pistolas de inicio hasta rifles de precisión, cada elección puede cambiar el rumbo de la partida. Aquí te presentamos las categorías más importantes para que elijas tu mejor aliado en combate.
                  </div>
               </div>
               <div className="container-btn">
                  <button onClick={armsClick} className="btn-arms">
                     Ver todas las armas
                  </button >
               </div>
            </div>
         </div>
      </div>
   );
}

export default SectionArms;
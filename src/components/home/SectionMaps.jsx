import "../../styles/section-maps.css";
import { useNavigate } from "react-router-dom";
import ImgMap from "../../img/map.jpg";

const SectionMaps = () => {
   const navigate = useNavigate();
   const mapsClick = () => {
      navigate('/maps');
   }

   return (
      <div className="all-maps">
         <div className="container-maps">
            <div className="section-maps">
               <div className="title-map">Tus Mapas</div>
               <div className="maps">
                  <div className="subtitle-maps">
                     PELEA AL REDEDOR DEL MUNDO.
                  </div>
                  <div className="description-maps">
                     Cada mapa es un patio de recreo para mostrar su pensamiento creativo. Diseñado específicamente para estrategias de equipo, jugadas espectaculares y momentos decisivos. Haz la obra que otros imitarán en los años venideros.
                  </div>
               </div>
               <div className="container-btn">
                  <button onClick={mapsClick} className="btn-maps">
                     Ver todos los mapas
                  </button >
               </div>
            </div>
            <div className="section-map">
               <img src={ImgMap} alt="Maps" className="img-maps" />
            </div>
         </div> 
      </div>
   );
};

export default SectionMaps;
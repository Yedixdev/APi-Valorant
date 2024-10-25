import "../styles/footer.css";
import ImgBrands from "../img/marca.PNG";
import BrandsValo from "../img/valorant-brands.png";
import BrandsRiotGames from "../img/riot-games.jfif";
import { FaXTwitter, FaYoutube, FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa6";

const Footer = () => {
   return (
      <>
         <div className="container-footer">
            <div className="btns-downloads">
               <a href="https://playvalorant.com/es-mx/download/">Descarga el Juego</a>
               <a href="https://play.google.com/store/apps/details?id=com.riotgames.mobile.leagueconnect&referrer=singular_click_id%3D36cdef1c-67f7-46fb-a61d-6c5477e13285">Descarga la aplicación mobile</a>
            </div>
            <div className="content-footer">
               <div className="networks-icons">
                  <div className="icon-footer">
                     <FaXTwitter />
                  </div>
                  <div className="icon-footer">
                     <FaYoutube />
                  </div>
                  <div className="icon-footer">
                     <FaInstagram />
                  </div>
                  <div className="icon-footer">
                     <FaFacebook />
                  </div>
                  <div className="icon-footer">
                     <FaDiscord />
                  </div>
               </div>
               <div className="brands">
                  <img src={BrandsValo} alt="brands-valo"/>
                  <img src={BrandsRiotGames} alt="brands-riotgames"/>
               </div>
               <div className="description-footer">
                  2020 - 2024 Riot Games, Inc. RIOT GAMES, VALORANT.
               </div>
               <div className="btns-footer">
                  <a href="https://www.riotgames.com/es-419/privacy-notice-LATAM">Aviso de Privacidad</a>
                  <a href="https://www.riotgames.com/es-419/terms-of-service-LATAM">Terminos de Servicios</a>
               </div>
               <div className="img-footer">
                  <img src={ImgBrands}></img>   
               </div>
            </div>
         </div>
      </>
   );
}

export default Footer
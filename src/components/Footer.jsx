import "../styles/footer.css"
import ImgBrands from "../img/marca.PNG"

const Footer = () => {
   return (
      <>
         <div className="container-footer">
            <div className="btns-downloads">
               <a href="https://playvalorant.com/es-mx/download/">Descarga el Juego</a>
               <a href="https://play.google.com/store/apps/details?id=com.riotgames.mobile.leagueconnect&referrer=singular_click_id%3D36cdef1c-67f7-46fb-a61d-6c5477e13285">Descarga la aplicación mobile</a>
            </div>
            <div className="content-footer">
               <div className="networks-icons"></div>
               <div className="brands"></div>
               <div className="description">
                  2020 - 2024 Riot Games, Inc. RIOT GAMES, VALORANT.
               </div>
               <div className="btns">
                  <a href="https://www.riotgames.com/es-419/privacy-notice-LATAM">Aviso de Privacidad</a>
                  <a href="https://www.riotgames.com/es-419/terms-of-service-LATAM">Trminos de Servicios</a>
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
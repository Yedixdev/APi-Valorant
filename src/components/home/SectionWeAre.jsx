import "../../styles/section-weare.css";
import welcomeVideo from "../../video/welcome.valorant.mp4";

const SectionWeAre = () => {
   return (
      <div className="weValorant">
        <div className="container-we">
          <div className="section-valo-1">
            <div className="title-valo">Somos Valorant</div>
            <div className="description-valo">
              <div className="subtitle-valo">Desafia tus limites.</div>
              <div className="description-valo">
                Combina tu estilo y experiencia en un escenario global y
                competitivo. Tienes 13 rondas para atacar y defender tu lado con
                armas precisas y habilidades tácticas. Además, al contar con una
                sola vida por ronda, tendrás que pensar más rápido que tu oponente
                si quieres sobrevivir. Enfréntate a enemigos en los modos
                competitivo y normal, así como en Deathmatch y Spike Rush.
              </div>
            </div>
            <a
              href="https://playvalorant.com/es-mx/news/announcements/beginners-guide/"
              className="btn-valo"
            >
              Conoce el juego
            </a>
          </div>
          <div className="section-valo-2">
            <video className="section-valo-2" muted autoPlay loop>
              <source src={welcomeVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
   );
}

export default SectionWeAre
import call from "../img/contact.png";
import email from "../img/email.png";
import mobile from "../img/mobile.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import { StyledContact } from "../Styles";
const Contact = () => {
  return (
    <StyledContact id="contact">
      <div>
        <img src={call} alt="" />
        <h4>Contact</h4>
      </div>
      <section>
        <div>
          <img src={email} alt="" />
          <h5>Email:</h5>

          <h5>
            <a href="mailto:lulirodri98@gmail.com?subject=Oportunidad%20profesional&body=He%20visto%20tu%20perfil%20en%20LinkedIn%20y%20me%20ha%20parecido%20sumamente%20interesante.%20En%20nuestra%20empresa%20buscamos%20profesionales%20con%20su%20valioso%20potencial%20y%20habilidades%20para%20cubrir%20una%20nueva%20vacante%20en%20nuestro%20equipo.%0D%0A%0D%0ATras%20analizar%20detenidamente%20su%20trayectoria%20y%20competencias%20estoy%20convencido%20de%20que%20usted%20podr%C3%ADa%20ser%20un%20candidato%20para%20este%20puesto.%20Por%20ello%20me%20gustar%C3%ADa%20proponerle%20una%20entrevista%20personal%20para%20conocernos%20mejor%20y%20discutir%20en%20detalle%20la%20oportunidad%20que%20tenemos%20disponible.%0D%0A%0D%0A%C2%BFEstar%C3%ADa%20usted%20disponible%20para%20una%20breve%20llamada%20telef%C3%B3nica%20la%20pr%C3%B3xima%20semana%253F%0D%0A%0D%0AAgradezco%20de%20antemano%20su%20tiempo%20y%20atenci%C3%B3n.%20Quedo%20a%20la%20espera%20de%20su%20confirmaci%C3%B3n.%0D%0A%0D%0AUn%20cordial%20saludo">
              lulirodri98@gmail.com
            </a>
          </h5>
        </div>
        <div>
          <img src={mobile} alt="" />
          <h5>Móvil:</h5>

          <h5>
            <a href="https://wa.me/657300376">657 300 376</a>
          </h5>
        </div>
        <div>
          <img src={linkedin} alt="" />
          <h5>LinkedIn:</h5>

          <h5>
            <a href="https://www.linkedin.com/in/luciarodriguez98/">
              Lucia Rodriguez
            </a>
          </h5>
        </div>
        <div>
          <img src={github} alt="" />
          <h5>GitHub:</h5>

          <h5>
            <a href="https://github.com/LuchiRodriguez">LuchiRodriguez</a>
          </h5>
        </div>
      </section>
    </StyledContact>
  );
};

export default Contact;

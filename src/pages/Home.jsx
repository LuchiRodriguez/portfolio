import { StyledHome, Technologies } from "../Styles";
import profilePicture from "../img/profile.jpg";
import code from "../img/code.png";
import javascript from "../img/javascript.png";
import react from "../img/react.png";
import java from "../img/java.png";
import springboot from "../img/springboot.png";
import mysql from "../img/mysql.png";
import python from "../img/python.png";
import figma from "../img/figma.png";
import adobexd from "../img/adobexd.png";
import illustrator from "../img/illustrator.png";

const Home = () => {
  return (
    <StyledHome id="home">
      <section>
        <img src={profilePicture} alt="" />
        <p>&#10024;</p>
        <h5>
          ¡Hola mundo! Soy Lucía <br /> Full-Stack Developer
        </h5>
        <p>&#10024;</p>
      </section>
      <h6>
        Soy una apasionada por la creación de interfaces de usuario intuitivas y
        eficientes. Me encanta aprender nuevas tecnologías y estoy siempre
        buscando mejorar mis habilidades. <br />
        <br />
        Me defino como una persona organizada, detallista y con una gran
        capacidad para trabajar de forma dinámica y positiva, siempre orientada
        a la consecución de resultados.
        <br />
        <br />
        Soy expeditiva, con gran iniciativa y capacidad resolutiva. Además,
        cuento con fuertes habilidades comunicativas y una gran capacidad de
        adaptación a nuevos entornos y desafíos.
      </h6>
      <Technologies>
        <div>
          <img src={code} alt="" />
          <h5>Tecnologías</h5>
        </div>
        <section>
          <img src={javascript} alt="" />
          <img src={react} alt="" />
          <img src={java} alt="" />
          <img src={springboot} alt="" />
          <img src={mysql} alt="" />
          <img src={python} alt="" />
          <img src={figma} alt="" />
          <img src={adobexd} alt="" />
          <img src={illustrator} alt="" />
        </section>
      </Technologies>
      <br />
      <span></span>
    </StyledHome>
  );
};

export default Home;

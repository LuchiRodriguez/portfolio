import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
      font-family: "Roboto", sans-serif;
      color: white;
  }
  body{
      margin: 0;
      padding: 0;
    background: linear-gradient(to right, #000000, #3533cd); 
  }
  h5{
    margin: 15px 0;
    }
  h6 {
  margin: 15px 0;
    text-align: justify;
  }
`;

export const MenuButton = styled.button`
  position: fixed;
  right: 0;
  margin: 10px;
  background: transparent;
  border: none;
  img {
    height: 20px;
  }
  @media (min-width: 900px) {
    display: none;
  }
`;

export const StyledNavBar = styled.nav`
  display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
  position: fixed;
  flex-direction: column;
  width: 40%;
  top: 50px;
  right: 0;
  background-color: #3533cd;
  border: 2px solid rgb(50, 137, 227);
  border-radius: 10px;
  a {
    padding: 10px;
    overflow: hidden;
    text-align: center;
    text-decoration: none;
    span.content-span {
      position: relative;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
      color: rgb(50, 137, 227);
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
  }
  a:hover span.background-span {
    width: 100%;
  }
  a:hover span.content-span {
    color: white;
  }
  a:active span.background-span {
    background-color: rgb(50, 137, 227);
  }
  a:focus {
    outline: none;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  span {
    display: block;
    width: 90%;
    margin: auto;
    border: 1px solid rgb(50, 137, 227);
  }
  @media (min-width: 600px) {
    width: 30%;
  }
  @media (min-width: 900px) {
    background: linear-gradient(to right, #000000, #3533cd);
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    padding: 10px;
    top: 0;
    gap: 50px;
    border: none;
    span {
      display: none;
    }
  }
`;

export const StyledHome = styled.div`
  padding: 20px 50px;
  section {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img {
      width: 50px;
      height: 50px;
      border: 2px solid white;
      border-radius: 100%;
    }
    h5 {
      text-align: center;
    }
  }
  span {
    display: block;
    width: 90%;
    margin: auto;
    margin-top: 20px;
    border: 1px solid rgb(50, 137, 227);
  }
  @media (min-width: 600px) {
    padding: 20px 100px;
    section {
      justify-content: center;
      gap: 10px;
    }
    h6 {
      font-size: 0.8em;
    }
  }
  @media (min-width: 900px) {
    padding: 20px 230px;
    margin-top: 80px;
    h6 {
      margin: 20px 150px;
      font-size: 1.5em;
    }
    section {
      font-size: 2em;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
`;

export const Technologies = styled.div`
  h5 {
    margin: 0 10px;
  }
  div {
    display: flex;
    align-items: center;
  }
  div img {
    height: 20px;
  }
  section {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    img {
      width: auto;
      height: 30px;
      border: none;
      border-radius: 0;
    }
  }
  @media (min-width: 900px) {
    div img {
      height: 30px;
    }
    h5 {
      margin: 20px 20px;
      font-size: 2em;
    }
    section {
      img {
        height: 70px;
      }
    }
  }
`;

export const StyledExperience = styled.div`
  padding: 0 50px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    h4 {
      margin: 0;
    }
  }
  img {
    height: 20px;
  }
  h5 {
    margin: 15px 0;
  }
  span {
    display: block;
    width: 90%;
    margin: auto;
    margin-top: 20px;
    border: 1px solid rgb(50, 137, 227);
  }
  @media (min-width: 600px) {
    padding: 0 100px;
  }
  @media (min-width: 900px) {
    img {
      height: 30px;
    }
    padding: 20px 230px;
    h4 {
      margin: 0 150px;
      font-size: 2em;
    }
    section {
      margin: 30px 50px;
      font-size: 2em;
    }
  }
`;

export const StyledProjects = styled.div`
  padding: 20px 50px 0;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    h4 {
      margin: 0;
    }
  }
  img {
    height: 20px;
  }
  section ~ span {
    display: block;
    width: 90%;
    margin: auto;
    margin-top: 20px;
    border: 1px solid rgb(50, 137, 227);
  }
  section img {
    margin: 0 20vw;
    width: 50%;
    height: auto;
  }
  video {
    margin: 0 10vw;
    border-radius: 30px;
  }
  h4 {
    display: flex;
    gap: 10px;
  }
  section div {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
  @media (min-width: 600px) {
    padding: 20px 100px 0;
    section div {
      flex-direction: row;
    }
    video {
      margin: 0 25vw;
    }
  }
  @media (min-width: 900px) {
    img {
      height: 30px;
    }
    padding: 20px 230px;
    h4 {
      margin: 0 150px;
      font-size: 2em;
    }
    section {
      margin: 30px 50px;
      font-size: 2em;
    }
  }
`;

export const StyledContact = styled.div`
  padding: 20px 50px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    h4 {
      margin: 0;
    }
  }
  img {
    height: 20px;
  }
  section {
    margin-left: 30px;
  }
  @media (min-width: 600px) {
    padding: 20px 100px;
  }
  @media (min-width: 900px) {
    img {
      height: 30px;
    }
    padding: 20px 230px;
    h4 {
      margin: 0 150px;
      font-size: 2em;
    }
    section {
      display: flex;
      flex-wrap: wrap;
      margin: 30px;
      font-size: 1.9em;
      justify-content: space-between;
    }
  }
`;

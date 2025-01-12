import { useState } from "react";
import { StyledNavBar, MenuButton } from "../Styles";
import menu from "../img/menu.png";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <MenuButton onClick={() => setShowMenu(!showMenu)}>
        <img src={menu} alt="" />
      </MenuButton>
      <StyledNavBar showMenu={showMenu}>
        <a href="#home">Home</a>
        <span></span>
        <a href="#experience">Experience</a>
        <span></span>
        <a href="#projects">Projects</a>
        <span></span>
        <a href="#contact">Contact</a>
      </StyledNavBar>
    </>
  );
};

export default NavBar;

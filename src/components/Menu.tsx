import React from "react";
import styled from "styled-components";
import closeIcon from "../assets/icon-close.svg";
import burgerIcon from "../assets/icon-menu.svg";

interface MenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const Menu: React.FC<MenuProps> = ({ open, setOpen }) => {
  return (
    <>
    <StyledBurger open={open} onClick={() => setOpen(true)}>
      <img src={burgerIcon} alt="burgermenu" />
    </StyledBurger>
    <StyledMenu open={open}>
      <img src={closeIcon} alt="" onClick={() => setOpen(false)} />
      <li>Collections</li>
      <li>Man</li>
      <li>Woman</li>
      <li>About</li>
      <li>Contact</li>
    </StyledMenu>
    </>
  );
};

export default Menu;

const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fdfdfd;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  padding-top: 25px;
  padding-left: 25px;
  img {
    width: 13px;
    height: 13px;
    margin-bottom: 50px;
    cursor: pointer;
  }
  li {
    text-decoration: none;
  color: #1d2026;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  cursor: pointer;
  }


  /* styles for tablet & desktop */

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledBurger = styled.div<{ open: boolean }>`
  img {
    width: 16px;
    height: 15px;
    cursor: pointer;
    margin-top: 10px;


    @media only screen and (min-width: 768px) {
    display: none;
  }
  }`;
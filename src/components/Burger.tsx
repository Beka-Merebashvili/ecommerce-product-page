import React from "react";
import styled from "styled-components";
import burgerIcon from "../assets/icon-menu.svg";

interface BurgerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(true)}>
      <img src={burgerIcon} alt="burgermenu" />
    </StyledBurger>
  );
};

export default Burger;

const StyledBurger = styled.div<{ open: boolean }>`
  img {
    width: 16px;
    height: 15px;
    cursor: pointer;
    margin-top: 10px;
  }
`;

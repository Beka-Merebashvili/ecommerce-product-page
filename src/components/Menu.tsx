import React from "react";
import styled from "styled-components";
import closeIcon from "../assets/icon-close.svg";

interface MenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const MenuItem = styled.a`
  text-decoration: none;
  color: #1d2026;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  padding: 15px 0;

  &:hover {
    background-color: #444;
  }
`;

const Menu: React.FC<MenuProps> = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <img src={closeIcon} alt="" onClick={() => setOpen(false)} />
      <MenuItem href="/">Collections</MenuItem>
      <MenuItem href="/about">Man</MenuItem>
      <MenuItem href="/contact">Woman</MenuItem>
      <MenuItem href="/contact">About</MenuItem>
      <MenuItem href="/contact">Contact</MenuItem>
    </StyledMenu>
  );
};

export default Menu;

const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #e76666;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding-top: 25px;
  padding-left: 25px;
  img {
    width: 13px;
    height: 13px;
    margin-bottom: 50px;
    cursor: pointer;
  }
`;

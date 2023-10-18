import styled from "styled-components";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import characterIcon from "../assets/image-avatar.png";
import Burger from "./Burger";
import Menu from "./Menu";
import { useState } from "react";
import Cart from "./Cart";

interface HeaderProps {
  cartQuantity: number;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  empty: boolean;
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isShow , setIsShow] = useState(false)
  return (
    <StyledHeader>
      <div className="wrapper">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <img src={logo} alt="logo" />
      </div>
      <div className="wrapper">
      <img onClick={() => setIsShow(!isShow)} src={cartIcon} alt="carticon" />
      <img src={characterIcon} alt="avatar" className="avatar" />
      </div> 
      {isShow ? <Cart cartQuantity={props.cartQuantity} setCartQuantity={props.setCartQuantity} empty={props.empty} setEmpty={props.setEmpty} /> : null}
    </StyledHeader>
  );
}

export default Header;



const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  position: relative;
  .wrapper {
    display: flex;
  align-items: center;
  gap: 16px;
  }
  .avatar {
    width: 24px;
    height: 24px;
  }
`;

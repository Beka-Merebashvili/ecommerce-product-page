import styled from "styled-components";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import characterIcon from "../assets/image-avatar.png";
import Menu from "./Menu";
import { useState, useEffect } from "react";
import Cart from "./Cart";

const Header: React.FC<HeaderProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    if (paid) {
      const timer = setTimeout(() => {
        setPaid(false);
      }, 3700); // 5000 milliseconds (3.7 seconds)

      return () => {
        clearTimeout(timer); // Clear the timer if the component unmounts or paid becomes false before the timeout
      };
    }
  }, [paid]);

  return (
    <StyledHeader>
      <div className="wrapper">
        <Menu open={open} setOpen={setOpen} />
        <img src={logo} alt="logo" />
        <nav className="navigation">
          <li>Collections</li>
          <li>Man</li>
          <li>Woman</li>
          <li>About</li>
          <li>Contact</li>
        </nav>
      </div>
      <div className="wrapper">
        <div className="cart">
          {props.empty ? null : (
            <div className="itemQuantity">
              <p>{props.cartQuantity}</p>
            </div>
          )}
          <img
            onClick={() => setIsShow(!isShow)}
            src={cartIcon}
            alt="carticon"
          />
        </div>
        <img src={characterIcon} alt="avatar" className="avatar" />
      </div>
      {isShow ? (
        <Cart
          cartQuantity={props.cartQuantity}
          setCartQuantity={props.setCartQuantity}
          empty={props.empty}
          setEmpty={props.setEmpty}
          setIsShow={setIsShow}
          setPaid={setPaid}
        />
      ) : null}
      {paid ? (
        <p className="paied">Thank you, your order has been received</p>
      ) : null}
      <hr className="headerLine" />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  position: relative;
  z-index: 2;
  .navigation {
    display: none;
  }
  .wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .cart {
    position: relative;
    cursor: pointer;
  }
  .itemQuantity {
    width: 19px;
    height: 14px;
    border-radius: 6.5px;
    background: #ff7e1b;
    position: absolute;
    top: -5px;
    right: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .itemQuantity p {
    color: #fff;
    font-size: 10px;
    font-weight: 700;
  }
  .avatar {
    width: 24px;
    height: 24px;
  }
  .headerLine {
    display: none;
  }
  .paied {
    position: absolute;
    bottom: -100px;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0.5px;
    color: #254e25;
  }

  /* styles for tablet & desktop */

  @media only screen and (min-width: 768px) {
    padding: 28px 11.5%;
    margin-bottom: 140px;
    .navigation {
      display: block;
      display: flex;
      gap: 32px;
      margin-left: 40px;
    }
    .navigation li {
      color: #69707d;
      font-size: 15px;
      font-weight: 400;
      line-height: 26px;
      cursor: pointer;
    }
    .headerLine {
      width: 77%;
      height: 1px;
      position: absolute;
      left: 11.5%;
      top: 88px;
      background: #e4e9f2;
      display: block;
    }
    .avatar:hover {
      border-radius: 50px;
      border: 2px solid #ff7e1b;
      cursor: pointer;
    }
  }
`;

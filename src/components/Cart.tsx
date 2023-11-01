import styled from "styled-components";
import productImg from "../assets/image-product-1-thumbnail.jpg";
import delateIcon from "../assets/icon-delete.svg";
import Button from "../styled-components/Button";

const Cart: React.FC<CartProps> = (props) => {
  return (
    <StyledDiv>
      <h3>Cart</h3>
      <hr className="line" />
      <div className="cart">
        {props.empty ? (
          <p className="empty">Your cart is empty.</p>
        ) : (
          <div className="checkout">
            <div className="product">
              <img src={productImg} alt="productImg" className="productImg" />
              <p className="price">
                Fall Limited Edition Sneakers $125.00 x {props.cartQuantity}{" "}
                <span>${props.cartQuantity * 125}</span>
              </p>
              <img
                src={delateIcon}
                alt="delateIcon"
                className="delateIcon"
                onClick={() => {
                  props.setEmpty(true), props.setCartQuantity(0) ;
                }}
              />
            </div>
            <Button
              onClick={() => {
                props.setEmpty(true) , props.setIsShow(false) , props.setPaid(true);
              }}
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    </StyledDiv>
  );
};

export default Cart;

const StyledDiv = styled.div`
  width: 96%;
  height: 256px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
  position: absolute;
  bottom: -260px;
  right: 12px;
  z-index: 2;
  padding-top: 24px;
  h3 {
    color: #1d2026;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    margin-left: 24px;
  }
  .line {
    margin: 24px 0;
  }
  .cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .empty {
    color: #69707d;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
  }
  .checkout {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .product {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .productImg {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  .price {
    color: #69707d;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    width: 230px;
  }
  span {
    color: #1d2026;
    font-weight: 700;
  }
  .delateIcon {
    width: 14px;
    height: 16px;
    flex-shrink: 0;
  }

  @media only screen and (min-width: 768px) {
    width: 360px;
    right: 89px;
  }
`;

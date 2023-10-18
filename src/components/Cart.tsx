import styled from "styled-components";

const Cart = () => {
  return (
    <StyledDiv>
      <h3>Cart</h3>
      <hr />
      <div className="checkout">
      <p className="empty">Your cart is empty.</p>
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
  left: 8px;
  z-index: 2;
  padding-top: 24px;
  h3 {
    color: #1d2026;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    margin-left: 24px;
  }
  hr {
    margin: 24px 0;
  }
  .checkout {
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
`;

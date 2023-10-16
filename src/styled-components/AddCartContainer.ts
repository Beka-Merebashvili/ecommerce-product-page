import styled from "styled-components";

const AddCartContainer = styled.div`
  padding: 24px 24px 80px 24px;
  .company {
    color: #ff7e1b;
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.846px;
    text-transform: uppercase;
  }
  h2 {
    color: #1d2026;
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    margin: 15px 0 19px 0;
  }
  .description {
    color: #69707d;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    width: 327px;
  }
  .priceBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .price {
    color: #1d2026;
    font-size: 28px;
    font-weight: 700;
    line-height: normal;
  }
  .sale {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .saleProcent {
    width: 51px;
    height: 27px;
    border-radius: 6px;
    background: #ffeee2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .saleProcent p {
    color: #ff7e1b;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
  }
  .oldPrice p {
    color: #B6BCC8;
font-family: Kumbh Sans;
font-size: 16px;
font-weight: 700;
line-height: 26px;  
text-decoration: line-through;
  }
`;

export default AddCartContainer;
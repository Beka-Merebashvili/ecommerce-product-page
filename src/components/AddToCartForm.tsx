import plusIcon from "../assets/icon-plus.svg";
import minusIcon from "../assets/icon-minus.svg";
import cartIcon from "../assets/icon-cart.svg";
import { useState } from "react";
import styled from "styled-components";

const AddToCartForm = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(parseInt(quantity) + 1);
  };

  const handleDecrease = () => {
    if (parseInt(quantity) > 0) {
      setQuantity(parseInt(quantity) - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedQuantity = parseInt(quantity, 10);

    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      return;
    }

    onAddToCart(parsedQuantity);
    setQuantity("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className="inputWrapper">
        <img
          src={minusIcon}
          alt="minusIcon"
          onClick={handleDecrease}
          className="absolute minus"
        />
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="0"
        />
        <img
          src={plusIcon}
          alt="plusIcon"
          onClick={handleIncrease}
          className="absolute plus"
        />
      </div>
      <button type="submit">
        {" "}
        <img src={cartIcon} alt="cartIcon" /> Add to cart
      </button>
    </StyledForm>
  );
};

export default AddToCartForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  .inputWrapper {
    width: 327px;
    height: 56px;
    border-radius: 10px;
    background: #f6f8fd;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  input {
    border: none;
    padding-left: 24%;
    width: 170px;
    height: 30px; 
    background: #f6f8fd;
  }
  .absolute {
    position: absolute;
    top: 50%;
  }
  .plus {
    top: 40%;
    right: 24px;
  }
  .minus {
    left: 24px;
  }
  button {
    width: 327px;
    height: 56px;
    border-radius: 10px;
    border: none;
    background: #ff7e1b;
    box-shadow: 0px 20px 50px -20px #ff7e1b;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
`;

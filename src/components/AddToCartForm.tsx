import plusIcon from "../assets/icon-plus.svg";
import minusIcon from "../assets/icon-minus.svg";
import cartIcon from "../assets/icon-cart.svg";
import { useState } from "react";
import styled from "styled-components";

interface AddToCartFormProps {
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddToCartForm : React.FC<AddToCartFormProps> = (props) => {
  const [quantity, setQuantity] = useState<number>(0);
  
  

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

 const handleSubmit = (e : React.FormEvent)  => {
  e.preventDefault();

  if (isNaN(quantity) || quantity <= 0) {
    return;
  }
  props.setCartQuantity(quantity);
  setQuantity(0);
  props.setEmpty(false)
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
          value={quantity.toString()} // Convert to string
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
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
    outline: none;
    padding-left: 24%;
    width: 170px;
    height: 30px;
    background: #f6f8fd;
  }
  .absolute {
    position: absolute;
    top: 50%;
    cursor: pointer;
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
    cursor: pointer;
  }
`;

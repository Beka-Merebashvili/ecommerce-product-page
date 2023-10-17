import plusIcon from "../assets/icon-plus.svg";
import minusIcon from "../assets/icon-minus.svg";
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
      <img src={minusIcon} alt="minusIcon" onClick={handleDecrease} />
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="0"
      />
      <img src={plusIcon} alt="minusIcon" onClick={handleIncrease} />
      <button type="submit">Add to Cart</button>
    </StyledForm>
  );
};

export default AddToCartForm;

const StyledForm = styled.form``;

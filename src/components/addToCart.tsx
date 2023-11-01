import AddCartContainer from "../styled-components/AddCartContainer";

import AddToCartForm from "./AddToCartForm";

const AddToCart: React.FC<AddToCartFormProps> = (props) => {
  return (
    <AddCartContainer>
      <p className="company">Sneaker Company</p>
      <h2>Fall Limited Edition Sneakers</h2>
      <p className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="priceBox">
        <div className="sale">
          <p className="price">$125.00</p>
          <div className="saleProcent">
            <p>50%</p>
          </div>
        </div>
        <div className="oldPrice">
          <p>$250.00</p>
        </div>
      </div>
      <AddToCartForm
        setCartQuantity={props.setCartQuantity}
        setEmpty={props.setEmpty}
      />
    </AddCartContainer>
  );
};

export default AddToCart;

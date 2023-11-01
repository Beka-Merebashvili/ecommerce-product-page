interface HeaderProps {
  cartQuantity: number;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  empty: boolean;
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>;
}
 
interface CartProps extends HeaderProps {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  setPaid: React.Dispatch<React.SetStateAction<boolean>>;
}

const cartProps: CartProps = {
  cartQuantity,
  setCartQuantity,
  empty,
  setEmpty,
  setIsShow: () => {},  
  setPaid: () => {},  
};

  interface AddToCartFormProps {
    setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
    setEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  }
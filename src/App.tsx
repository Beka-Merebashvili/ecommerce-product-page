import Header from "./components/Header";
import SliderCarousel from "./components/SliderCarousel";
import AddToCart from "./components/AddToCart";
import Globalstyles from "./styled-components/GlobalStyles";
import AddToCartForm from "./components/AddToCartForm";
import { useState } from "react";

function App() {
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [empty , setEmpty] = useState<boolean>(true)

  return (
    <>
      <Globalstyles />
      <Header cartQuantity={cartQuantity} empty={empty} />
      <SliderCarousel />
      <AddToCart />
      <AddToCartForm setCartQuantity={setCartQuantity} setEmpty={setEmpty} />
    </>
  );
}

export default App;

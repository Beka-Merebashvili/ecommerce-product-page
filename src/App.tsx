import Header from "./components/Header";
import SliderCarousel from "./components/SliderCarousel";
import AddToCart from "./components/AddToCart";
import Globalstyles from "./styled-components/GlobalStyles";
import StyledMain from "./styled-components/StyledMain";
import { useState } from "react";

function App() {
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [empty , setEmpty] = useState<boolean>(true)

  return (
    <>
      <Globalstyles />
      <Header cartQuantity={cartQuantity}  setCartQuantity={ setCartQuantity} empty={empty} setEmpty={setEmpty} />
      <StyledMain>
      <SliderCarousel />
      <AddToCart {...cartProps} setCartQuantity={setCartQuantity} setEmpty={setEmpty} />
      </StyledMain>
    </>
  );
}

export default App;

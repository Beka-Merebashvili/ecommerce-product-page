import Header from "./components/Header";
import SliderCarousel from "./components/SliderCarousel";
import AddToCart from "./components/addToCart";
import Globalstyles from "./styled-components/GlobalStyles";

function App() {
  return (
    <>
      <Globalstyles />
      <Header />
      <SliderCarousel />
      <AddToCart />
    </>
  );
}

export default App;

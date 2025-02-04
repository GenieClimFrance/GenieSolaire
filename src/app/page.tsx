import Article from "./components/home/Article";
import BannerMid from "./components/home/BannerMid";
import Hero from "./components/home/Hero";
import Slider from "./components/home/Slider";
import FormDevis from "./components/home/FormDevis";
import Products from "./components/home/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <Article />
      <BannerMid />
      <Products />
      <FormDevis />
    </>
  );
}

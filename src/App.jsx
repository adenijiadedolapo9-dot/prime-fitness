import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Strength from "./components/Strength";
import Benefits from "./components/Benefits";
import FitnessPrograms from "./components/FitnessPrograms";
import GearFromForge from "./components/GearFromForge";
import TrainHardBanner from "./components/TrainHardBanner";
import Testimonials from "./components/Testimonials";
import FitnessCallToAction from "./components/FitnessCallToAction";

import FitnessFooter from "./components/FitnessFooter";
import Shop from "./components/Shop";
import ProductDetails from "./components/ProductDetails";

function HomePage() {
  return (
    <>
      <Hero />
      <Strength />
      <Benefits />
      <FitnessPrograms />
      <GearFromForge />
      <TrainHardBanner />
      <Testimonials />
      <FitnessCallToAction />
      <FitnessFooter />
    </>
  );
}

function ShopPage() {
  return (
    <>
      <Shop />
      <FitnessFooter />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/shop" element={<ShopPage />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;

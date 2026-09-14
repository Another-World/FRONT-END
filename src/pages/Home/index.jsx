// src/pages/Home/index.jsx
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Evolution from "../../components/sections/Evolution";
import Services from "../../components/sections/Services";
import Portfolio from "../../components/sections/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Evolution />
      <Services />
      <Portfolio />
    </>
  );
}
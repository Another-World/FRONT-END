import About from "./components/sections/About";
import Header from "./components/sections/Header"; 
import Hero from "./components/sections/Hero";
import Evolution from "./components/sections/Evolution";


export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Evolution />
      </main>
      
    </>
  );
}

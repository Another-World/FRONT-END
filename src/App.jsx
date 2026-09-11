import About from "./components/sections/About";
import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import Button from "./components/ui/Button";



export default function App() {
  return (
    <div>

      <Header />
      <main>

      <About/>
      </main>
      <Tag/>
      <Button variant="outline">Falar conosco</Button>
      <Button variant="white">Explorar portfólio</Button>
      <Button variant="solid">Falar conosco →</Button>

    </div>
  )
}
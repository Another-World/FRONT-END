import Button from "./components/ui/Button";
import SectionHeader from "./components/ui/SectionHeader";
import Header from "./components/sections/Header";

export default function App() {
  return (
    <div>

      <Header />

      <Button variant="outline">Falar conosco</Button>
      <Button variant="white">Explorar portfólio</Button>
      <Button variant="solid">Falar conosco →</Button>

      <SectionHeader/>
    </div>
  )
}
import Button from "./components/ui/Button";
import SectionHeader from "./components/ui/SectionHeader";

export default function App() {
  return (
    <div>

      <h1 className="text-4xl font-bold text-blue-600 p-10">
        Another World
      </h1>

      <Button variant="outline">Falar conosco</Button>
      <Button variant="white">Explorar portfólio</Button>
      <Button variant="solid">Falar conosco →</Button>

      <SectionHeader/>
    </div>
  )
}
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import QuemSomos from "./pages/Quem-Somos";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home/> } />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    </Routes>
  );
}
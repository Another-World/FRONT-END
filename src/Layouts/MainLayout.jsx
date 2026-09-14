import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";


export default function MainLayout() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet />
        {/* "Outlet" é tipo um "buraco" onde o React Router encaixa
            automaticamente a página da rota atual. Ele substitui o
            children manual — o próprio Router decide o que entra aqui,
            baseado na URL. */}
      </main>
      <Footer/>
    </div>
  );
}
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import HomeRH from "./pages/homeRH/HomeRH";
import { AuthProvider } from "./contexts/AuthContext";
import Sobre from "./pages/sobre/Sobre";


function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomeRH />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<HomeRH />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}


export default App;

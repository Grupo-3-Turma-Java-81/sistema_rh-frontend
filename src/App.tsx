import { BrowserRouter, Route, Routes } from "react-router-dom";


import Login from "./pages/login/Login";
import HomeRh from "./pages/home/HomeRh";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Cadastro from "./pages/cadastro/Cadastro";
import SobreNos from "./pages/sobre-nos/SobreNos";
import { AuthProvider } from "./contexts/AuthContext";
import HomeEmpregado from "./pages/home/HomeEmpregado";
import ListarPagamentos from "./components/pagamentos/listar-pagamentos/ListarPagamentos";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          < Navbar />

          <div className="min-h-[80vh]">
            <Routes>
              < Route path="/" element={< Login />} />
              < Route path="/home-rh" element={< HomeRh />} />
              < Route path="/home-empregado" element={< HomeEmpregado />} />
              < Route path="/sobre-nos" element={< SobreNos />} />
              < Route path="/cadastro" element={< Cadastro />} />
              < Route path="/listar-pagamentos" element={< ListarPagamentos />} />
            </Routes>
          </div>

          < Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
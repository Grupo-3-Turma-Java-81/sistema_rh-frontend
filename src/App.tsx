
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (

    <>
      <AuthProvider>
        <BrowserRouter>
              <div className="app">
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <HomeRH />
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>

  );

}

export default App;

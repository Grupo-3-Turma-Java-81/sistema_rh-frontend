import "./Cadastro.css";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  const retornarLogin = () => {
    navigate("/");
  };

  return (
    <>
      <div className="fundoCadastro" />
      <div className="overlay" />
      <div className="absolute top-6 right-6">
        <div className="w-44 h-44 flex items-center justify-center">
          <img
            src="https://ik.imagekit.io/9lt9gebdr/Captura%20de%20ecra%CC%83%202025-06-04,%20a%CC%80s%202.43.22%E2%80%AFPM-Photoroom.png?updatedAt=1749060677684"
            alt="Logo Neo RH"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <form className="flex justify-center items-center flex-col w-full max-w-md px-8 py-6 gap-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
          <h2 className="text-slate-900 text-5xl mb-4">Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-slate-700 mb-1 text-left">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="border-2 border-slate-700 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-slate-700 mb-1 text-left">
              Usuario
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              className="border-2 border-slate-700 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-slate-700 mb-1 text-left">
              Foto
            </label>
            <input
              type="text"
              id="foto"
              name="foto"
              className="border-2 border-slate-700 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-slate-700 mb-1 text-left">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              className="border-2 border-slate-700 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="confirmarSenha"
              className="text-slate-700 mb-1 text-left"
            >
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              className="border-2 border-slate-700 rounded-md p-2"
            />
          </div>
          <div className="flex justify-around w-full gap-8 mt-2">
            <button
              type="button"
              style={{
                backgroundColor: "#81868C",
                outline: "none",
                border: "none",
              }}
              className="rounded text-white w-1/2 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-[#81868C]/50 focus:outline-none focus:ring-0 active:outline-none"
              onClick={retornarLogin}
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: "#11C5D9",
                outline: "none",
                border: "none",
              }}
              className="rounded text-white w-1/2 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-[#11C5D9]/50 focus:outline-none focus:ring-0 active:outline-none flex justify-center"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;

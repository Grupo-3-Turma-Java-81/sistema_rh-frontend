import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner';
import { useContext, useEffect, useState, type ChangeEvent } from "react";

import "./Login.css";
import type UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    );

    useEffect(() => {
        if (usuario.token !== "") {
            navigate("/home-rh");
        }
    }, [usuario]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <>
            <div className="fundoLogin" />
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
                <form
                    className="flex justify-center items-center flex-col w-full max-w-md px-8 py-6 gap-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"
                    onSubmit={login}
                >
            
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario" className="text-slate-700 mb-1 text-left">
                            Usuário
                        </label>
            
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            className="border-2 border-slate-700 rounded-md p-2 focus:outline-none focus:ring-0 transition-all duration-300"
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
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
                            className="border-2 border-slate-700 rounded-md p-2 focus:outline-none focus:ring-0 transition-all duration-300"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                    
                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#11C5D9",
                            outline: "none",
                            border: "none",
                        }}
                        className="rounded flex justify-center text-white w-1/2 py-2.5 mt-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#11C5D9]/50 focus:outline-none focus:ring-0 active:outline-none"
                    >
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <span>Entrar</span>
                        )}
                    </button>

                    <p className="text-slate-700 mt-8">
                        Ainda não tem uma conta?{" "}
                        <Link
                            to="/cadastro"
                            style={{ color: "#81868C" }}
                            className="hover:underline font-semibold transition-all duration-300"
                        >
                            Cadastre-se
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
}

export default Login;